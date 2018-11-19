/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
function MenuItem(name, cal, glut, lact, img) {
    this.BurgerName = name; // The this keyword refers to the object itself
    this.Calories = cal;
    this.Gluten = glut;
    this.Lactose = lact;
    this.Image=img;
    this.name = function() {
        if (this.Gluten==true && this.Lactose==true){return this.BurgerName + ': ' + this.Calories + ' kCal' + ' contains gluten and lactose';}
        else if (this.Gluten==true) {return this.BurgerName + ': ' + this.Calories + ' kCal' + ' contains gluten';}
        else if (this.Lactose==true) {return this.BurgerName + ': ' + this.Calories + ' kCal' + ' contains lactose';}
        else {return this.BurgerName + ': ' + this.Calories + ' kCal';}
    };
}

var burger1 = new MenuItem('The Fire Burger', '750', true, true, "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-750x563.jpg");
var burger2 = new MenuItem('Turkey Burger', '600', false, true, "https://foremangrillrecipes.com/wp-content/uploads/2013/05/turkey-burger-foreman-grill.jpg");
var burger3 = new MenuItem('Double with Cheese', '1800', true, true, "https://s23991.pcdn.co/wp-content/uploads/2004/06/fearing-burger.jpg");
let burgers=[burger1, burger2, burger3];

'use strict';
var socket = io();

var vm = new Vue({
  el: '#vue-container',
  data: {
    food:food,
    burgerdetails:{
      name:"",
      email:"",
      payment:"Credit Card",
      gender:"Undisclosed",
      chosenburger:[],
    },
    show:false,
    orders: {},
    x:0,
    y:0,
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    markDone: function() {
        console.log("Button clicked!");
        this.show=true;
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function () {
      console.log('new order');
      // var offset = {x: event.currentTarget.getBoundingClientRect().left,
      //               y: event.currentTarget.getBoundingClientRect().top};
      this.markDone();
      socket.emit("addOrder", { orderId: this.getNext(),
                                // details: { x: event.clientX - 10 - offset.x,
                                //            y: event.clientY- 10 - offset.y },
                                details: {x:this.x, y:this.y},
                                orderItems: this.burgerdetails.chosenburger,
                                personalInfo: [this.burgerdetails.name, this.burgerdetails.email, this.burgerdetails.payment, this.burgerdetails.gender],
                              });
    },
    displayOrder: function (event){
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};

      this.x= event.clientX-10 - offset.x
      this.y= event.clientY-10 - offset.y
      // console.log(this.orders.orderObject.details)
    },
  }
});

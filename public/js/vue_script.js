
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

/*function ReadInput(){
  var Name=document.getElementById('name').value;
  var Email=document.getElementById('email').value;
  var Street=document.getElementById('street').value;
  var House=document.getElementById('house').value;
  var e = document.getElementById("payment");
  var Payment = e.options[e.selectedIndex].text;
  var Gender=document.querySelector('input[name="gender"]:checked').value;
  // var Burger=document.querySelector('input[name="chosenBurger"]:checked').value;
  let input=[Name, Email, Street, House, Payment, Gender];
  console.log(input);
  return input;
}*/



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

  },
  methods: {
      markDone: function() {
          console.log("Button clicked!");
          this.show=true;
      },
  }
});

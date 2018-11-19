function MenuItem(name, cal, glut, lact) {
    this.BurgerName = name; // The this keyword refers to the object itself
    this.Calories = cal;
    this.Gluten = glut;
    this.Lactose = lact;
    this.name = function(myElement, image) {
        myElement.innerHTML='<div id="burgername">'+this.BurgerName+'</div>' + '<br>'+ image;
        var listItem = document.createElement("li");
        var listValue = document.createTextNode(this.Calories + ' kCal');
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
        if (this.Gluten==true && this.Lactose==true)
          {var listItem = document.createElement("li");
          var listValue = document.createTextNode('Contains <span class="ingredients">lactose</span>');
          listItem.appendChild(listValue);
          myElement.appendChild(listItem);
          var listItem = document.createElement("li");
          var listValue = document.createTextNode('Contains <span class="ingredients">gluten</span>');
          listItem.appendChild(listValue);
          myElement.appendChild(listItem);}
        else if (this.Gluten==true)
          {var listItem = document.createElement("li");
          var listValue = document.createTextNode('Contains <span class="ingredients">gluten</span>');
          listItem.appendChild(listValue);
          myElement.appendChild(listItem);}
        else if (this.Lactose==true)
          {var listItem = document.createElement("li");
          var listValue = document.createTextNode('Contains <span class="ingredients">lactose</span>');
          listItem.appendChild(listValue);
          myElement.appendChild(listItem);}
    };
};

var burger1 = new MenuItem('The Fire Burger', '750', true, true);
var burger2 = new MenuItem('Turkey Burger', '600', false, true);
var burger3 = new MenuItem('Double with Cheese', '1800', true, true);


/*
var element1=document.getElementById("burger1")
var element2=document.getElementById("burger2")
var element3=document.getElementById("burger3")
burger1.name(element1, '<img src="https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-750x563.jpg" width=250>');
burger2.name(element2, '<img src="https://foremangrillrecipes.com/wp-content/uploads/2013/05/turkey-burger-foreman-grill.jpg" width=270>');
burger3.name(element3, '<img src="https://s23991.pcdn.co/wp-content/uploads/2004/06/fearing-burger.jpg" width=280>');
*/
// https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-750x563.jpg
//https://foremangrillrecipes.com/wp-content/uploads/2013/05/turkey-burger-foreman-grill.jpg
//https://s23991.pcdn.co/wp-content/uploads/2004/06/fearing-burger.jpg
/*
var myButton = document.getElementById("myButtonID");
myButton.addEventListener("click", clickButton);
function clickButton() {console.log("Button clicked!")};
*/

function ReadInput(){
  var Name=document.getElementById('name').value;
  var Email=document.getElementById('email').value;
  var Street=document.getElementById('street').value;
  var House=document.getElementById('house').value;
  var e = document.getElementById("payment");
  var Payment = e.options[e.selectedIndex].text;
  var Gender=document.querySelector('input[name="gender"]:checked').value;
  let input=[Name, Email, Street, House, Payment, Gender]
  return input
}

function addToBill(){
  console.log(event.target.innerText);
  var item = event.target.innerText;
  $("#receipt").append("<li>"+item+"</li>");
  var itemPrice = menu[this.id];
  var total = 0;
	total += itemPrice;
// this isn't totaling correctly right now. I spent the weekend with 
// my jquery in the wrong place and kept getting error messages so 
// was very frustrated.
  $("#total").append(total);
}

var menu = {
	"pancakes": 6.95,
	"eggsbenedict": 9.95,
	"eggs": 5.95,
	"yogurt": 7.95,
	"bacon": 3.95,
	"coffee": 2.95,
	"juice": 2.95,
};



$(document).ready(function(){
  console.log('I am the JS file');  
  
  // when I click .button add to bill
  $(".button").on('click', addToBill);
  
});


$(document).ready(function(){
  console.log('I am the JS file');  
});








//CODE GRAVEYARD
//I KEPT TRYING THINGS AND RUNNING INTO ERRORS AND IT NOT WORKING
//AND THEN KEEP TRYING SOMETHING NEW AND STORING OLD STUFF DOWN HERE
// I am so confused.


 //  var log = document.getElementById('log');

 //  function addLog(cssClass, message) {
 //    var logEntry = document.createElement('li');
 //    logEntry.innerHTML = message;
 //    logEntry.className = cssClass;
 //    log.appendChild(logEntry);
 //    log.scrollTop = 999999;
 //   }




// $("button").click(function(){
// var selection = $(this).attr("id");
// console.log(selection);

// }
// );

// if(selection.checked){

// 	var pancakesButton = 
// }

// }






//var pancakesButton = document.getElementbyId('#pancakes');

/*
 window.onload = function() {}

 //  var log = document.getElementById('log');

 //  function addLog(cssClass, message) {
 //    var logEntry = document.createElement('li');
 //    logEntry.innerHTML = message;
 //    logEntry.className = cssClass;
 //    log.appendChild(logEntry);
 //    log.scrollTop = 999999;
 //   }


var menu = {
	"Pancakes": 6.95,
	"Eggs Benedict": 9.95,
	"Eggs Any Style": 5.95,
	"Yougurt with Granola": 7.95,
	"Add Bacon": 3.95,
	"Coffee": 2.95,
	"Orange Juice": 2.95,



//var pancakesButton = document.getElementbyId('#pancakes');


// var menu = function menu(food, price){
// this.food = food;
// this.price = price;
// }

// var pancakes = new menu ("Pancakes", 6.95);
// var eggsBenedict = new menu("Eggs Benedict", 9.95);
// var eggsStyle = new menu("Eggs Any Style", 5.95);
// var yogurtGranola = new menu("Yougurt with Granola", 7.95);
// var bacon = new menu("Add Bacon", 3.95);
// var coffeeTea = new menu("Coffee", 2.95);
// var orangeJuice = new menu("Orange Juice", 2.95);

*/







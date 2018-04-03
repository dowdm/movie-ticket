//Business Logic

function Movie(title, times, rating) {
  this.title = title;
  this.times = times;
  this.rating = rating;
}
var Animated = new Movie ("Animated", ["2:00PM", "4:00PM", "7:00PM", "9:00PM"], 2);
var romCom = new Movie ("Rom-Com", ["2:00PM", "4:00PM", "7:00PM", "9:00PM"], 3);
var cgiAction = new Movie ("CGI-Action", ["2:00PM", "4:00PM", "7:00PM", "9:00PM"], 4);
var crappyHorror = new Movie ("Crappy-Horror", ["2:00PM", "4:00PM", "7:00PM", "9:00PM"], 4);

function discount(age, time){
  if (age === "1" || age === "4"){
    return -3;
  } else if (time === "1" || time === "2"){
    return -2;
  } else {
    return 0;
  }
}

function Order(title, time, maxPrice, quantity, discount) {
  this.title = title;
  this.time = time;
  this.maxPrice = maxPrice;
  this.quantity = quantity;
  this.discount = discount;
}

Order.prototype.calculate = function() {
  return (this.maxPrice + this.discount) * this.quantity;
}

//User Logic
$(function() {
  $("#form").submit(function(event) {

    var inputAge = $("#age").val();
    var inputTitle = $("#movie-titles").val();
    var inputTime = $("#movie-times").val();
    var inputQuantity = $("#quantity").val();
    var userDiscount = discount(inputAge, inputTime);
    var userPrice = 10;
    var newOrder = new Order(inputTitle, inputTime, userPrice, inputQuantity, userDiscount);
    $("#total p").text("$" + newOrder.calculate());
    $("#total").show();
    // var total = function()+=new
    console.log(newOrder.calculate());
    console.log(userDiscount);

    event.preventDefault();
  });
});

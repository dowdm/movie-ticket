//Business Logic

function Movie(title, times, rating, maxPrice) {
  this.title = title;
  this.times = times;
  this.rating = rating;
  this.maxPrice = maxPrice;
}


//User Logic
$(function() {
  $("#form").submit(function(event) {

    event.preventDefault();
  });
});

//declare variable called city to store user input
var city;

//create function with preventDefault event to prevent form submission
$( "#city-type" ).keyup(function( event ) {
//store user input value into variable city
  city = $(this).val();
}).keydown(function( event ) {
  if ( event.which == 13 ) {
    event.preventDefault();
  }
});

//call function when submit button is clicked
$("#submit-btn").click(function() {
//if else- if statements with OR operator in condition
//if user enters NYC, New York, OR New York City, then change background to nyc.jpg
  if (city == "NYC" || city == "New York" || city == "New York City") {
//change the body's background image using css method
    $("body").css("background", "url(../starter_code/images/nyc.jpg)")
}
else if (city == "San Francisco" || city == "SF" || city == "Bay Area"){
    $("body").css("background", "url(../starter_code/images/sf.jpg)")
}
else if (city == "Los Angeles" || city == "LA" || city == "LAX"){
    $("body").css("background", "url(../starter_code/images/la.jpg)")
}
else if (city == "Austin" || city == "ATX"){
    $("body").css("background", "url(../starter_code/images/austin.jpg)")
}
else if (city == "Sydney" ||city == "SYD"){
    $("body").css("background", "url(../starter_code/images/sydney.jpg)")
}
});

//define the function
function isItMonday(){ //need () to define an argument for the function; a function is reuseable
  var day = "T";
  var days = ["M", "T", "W"];
  if (day == days[0]){
    document.write("Ugh, Monday");
  } else{
    document.write("No Mondays here");
  }
}

//Calling function
isItMonday();

/*to use jquery: initalize ($), selector (always in () and inside '' --selectors are using the class/IDs/etc from your CSS), method, parameters, close (;)*/
$('.left').css('color', 'white');

//use of .html method - this will get the html content of the container
var div_span = $('.left').html();  //jQuery
document.getElementsByClassName('left'); //vanilla JS
console.log(div_span);

//.text - this will grab the text
var text = $(".left").text();
console.log(text);

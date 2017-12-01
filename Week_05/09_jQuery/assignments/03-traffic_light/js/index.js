//Implement the red light using jQuery. Don't forget to add the script tags.
  var number = 1
function stopRed(){
  $('#stopLight').css('background-color', 'red');
  $('#slowLight').css('background-color', 'black');
  $('#goLight').css('background-color', 'black');
/*      console.log(number);
      number++;
      console.log(number);
  if (number % 2 != 0){
    $('#stopLight').css('background-color', 'black');
    console.log(number);
  }else {
    number++
  }*/
}

function slowYellow(){
  $('#slowLight').css('background-color', 'yellow');
  $('#goLight').css('background-color', 'black');
  $('#stopLight').css('background-color', 'black');
}

function goGreen(){
  $('#goLight').css('background-color', 'green');
  $('#slowLight').css('background-color', 'black');
  $('#stopLight').css('background-color', 'black');
}


$('#stopButton').click(stopRed);
$('#slowButton').click(slowYellow);
$('#goButton').click(goGreen);

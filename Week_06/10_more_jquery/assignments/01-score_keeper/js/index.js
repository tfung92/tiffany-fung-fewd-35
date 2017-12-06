var result = 0;
console.log(result);

function zero(){
 result = 0;
 console.log(result);
$("#result").html(result);
}

function add5(){
result = result.valueOf() + 5;
console.log(result);
$("#result").html(result);
}

function add10(){
  result = result.valueOf() + 10;
  console.log(result);
  $("#result").html(result);
}

function minus1(){
  result = result.valueOf() - 1;
  console.log(result);
  $("#result").html(result);
}

$("#zero").click(zero);
$("#add5").click(add5);
$("#add10").click(add10);
$("#sub1").click(minus1);

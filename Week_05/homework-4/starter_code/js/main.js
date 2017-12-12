//expand text when user clicks on crew section Read More
function expand(){
  var text = "Read More"
    console.log(text);
    if (text = "Read More") {
    $(".expand").show("fast");
    $("#readmore1").html("Read Less");
    text = "Read Less";
    console.log(text);
  } else {
      $(".expand").hide("fast");
    text = $("#readmore1").html("Read Less");
}
};
$("#readmore1").click(expand);

//expand text when user clicks on boat section "Read More"
function expand(){
  var text = "Read More"
    console.log(text);
    if (text = "Read More") {
    $(".expand").show("fast");
    $("#readmore2").html("Read Less");
    text = "Read Less";
    console.log(text);
  } else {
      $(".expand").hide("fast");
    text = $("#readmore2").html("Read Less");
}
};
$("#readmore2").click(expand);

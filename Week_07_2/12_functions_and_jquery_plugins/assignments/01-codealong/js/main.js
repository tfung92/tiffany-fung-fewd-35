$(document).ready( function(){
//select from dropdown
var natParkSelector

//click submit to capture
$(".select-natPark").submit(function(event){
    natParkSelector = $(".select-list").val(); //when you don't have anything in the handler (), then you are retrieving stuff
    console.log(natParkSelector);


    event.preventDefault(); //this will prevent the form from refreshing the page and loading the default value
    //console.log($(".select-list").html()); //this is retrieving the html text
    //console.log($(".select-list option").text());  //this is retrieving all the options in the list

//message will show location
if (natParkSelector === "acadia") {
$(".natParkMessage").text("You are at Acadia");
$(".natParkImage").css("background-image", "url('img/acadia.jpg')");
}
else if (natParkSelector == "banff"){
$(".natParkMessage").text("You are at Banff");
$(".natParkImage").css("background-image", "url('img/banff.jpg')");
}
else if (natParkSelector == "zion"){
$(".natParkMessage").text("You are at Zion");
$(".natParkImage").css("background-image", "url('img/zion.jpg')");
}
//image will appear on background
})
})

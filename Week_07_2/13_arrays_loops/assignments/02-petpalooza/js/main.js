$(document).ready(function(){
//initialize array of pets

  var pets = ["beagle", "bunny", "cat", "iguana", "pony"];
  //loop to create pet options
    for (i = 0; i < pets.length; i++){  //i = index; starting with index of 0 do loop when index is less than the number of items in the array, increment the index by 1
      $(".petSelected").append('<option class = "pet"> '+pets[i]+'</option>')
        console.log($(pets));
    }

//if submit is pressed, then show image
  $(".petForm").submit(function (event){
//prevents the form from refreshing
  event.preventDefault();

  //if pet is selected, show Image
  if ($('.petSelected').val()==='beagle'){
     $('.showImage').html('<img src = "img/beagle.jpg">') //can use .html or .css to change image
  }else if ($('.petSelected').val()==='bunny'){
    $('.showImage').html('<img src = "img/bunny.jpg">')
  }
})
})

$(document).ready(function(){
  $("#login").click(function(){
//declare local variables
    var id = $("#id").val();
    var password = $("#password").val();
// Checking for blank fields OR invalid id format.
    if( id =='' || password ==''){
      $('input[type="text"],input[type="password"]').css("border","2px solid red");
      $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
      alert("Please fill all fields!");
    }else if(id != '^[A-Za-z]{3}[0-9]{3}'){
      $('input[type="text"]').css("border","2px solid red");
      $('input[type="text"]').css("box-shadow","0 0 3px red");
      alert("Enter Valid ID!");
    }else {
      $.post("login.php",{ id1: id, password1:password},
        function(data) {
          if(data=='Invalid ID.') {
            $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
            $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
            alert(data);
          }else if(data=='ID or Password is invalid!'){
            $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
            alert(data);
          } else if(data=='Successfully Logged in.'){
            $("form")[0].reset();
            $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
            alert(data);
          } else{
            alert(data);
          }
      });
    }
  });
});

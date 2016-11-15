


$("#btnSubmit2").hide();

$("#finalexam").click(function(){
  $("#finalexam").hide();
  $("#btnSubmit2").show();
});


  $.ajax({
  method:"post",
  url:"http://fvi-grad.com:4004/fakeform",
  data:$("#btnSubmit2").serialize(),
  success: function(){
    alert("message sent");
  }


});

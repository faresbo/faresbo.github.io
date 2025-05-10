


$(document).on("click", ".btn-color", function () {

  $(".btn-color").removeClass("active");
  $(this).addClass("active");
  

  console.log( $(this).find("div").css("background-color") );
  color = $(this).find("div").css("background-color");
  
});




$(document).on("click",".btn-color",function (params) {


  })//end click
  


$(document).on("click", ".btn-size", function () {

  $(".btn-size").removeClass("active");
  $(this).addClass("active");
  size = $(this).find("div").html();

  
  
});



$(".btn-size").eq(2).trigger("click");
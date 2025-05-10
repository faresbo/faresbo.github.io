


$(document).on("click", ".btn-eraser", function () {
  $(".btn-tool").removeClass("active");
  $(this).addClass("active");
  $("body").removeClass();
  $("body").addClass("eraser");
});

var caneraser = false;
$(document).on("mousedown",".eraser",function (params) {
  caneraser = true;
  console.log("start remove")
})//end

$(document).on("mousemove",".eraser .x",function (params) {
   if( caneraser ){
    $(this).remove();
  }//end 
})//end


$(document).on("mouseup",".eraser",function (params) {

  caneraser = false;

})//end
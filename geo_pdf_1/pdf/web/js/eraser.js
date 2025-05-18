







$(document).on("click","body .tx",function (params) {
  if( $(parent.document).find("body").hasClass("eraser-toggle") ){
$(this).css('opacity', function(i, val) {
  return val == 1 ? 0 : 1;
});  }
})//end 




$(document).on("mouseenter","body .tx",function (params) {
  if( $(parent.document).find("body").hasClass("eraser-toggle") ){
    if( $(this).css('opacity') == 1 ){
 
    }else{
            $(this).css('opacity',"0.1"); 
    }
  }
})//end 



$(document).on("mouseleave", "body .tx", function () {
  if ($(parent.document).find("body").hasClass("eraser-toggle")) {
    // Reset opacity back to 1 when mouse leaves

    if( $(this).css('opacity') == 1 ){
            //$(this).css('stroke',"transparent");

    }else{
          $(this).css('opacity',"0");
           // $(this).css('stroke',"transparent");

    }



  }
});



var caneraser = false;

$(document).on("mousedown","body",function (params) {
  if( $(parent.document).find("body").hasClass("eraser") )
      caneraser = true;

 })//end

$(document).on("mousemove","body .x",function (params) {

   if( caneraser ){
    $(this).remove();
  }//end 

})//end


$(document).on("mouseup","body",function (params) {

  caneraser = false;

})//end















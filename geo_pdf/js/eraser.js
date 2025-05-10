








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















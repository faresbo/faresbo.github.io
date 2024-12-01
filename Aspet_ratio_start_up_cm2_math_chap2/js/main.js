var page_scale = 1;








$(document).ready(function () {



  //$(window).width();
/*
  if( $("img.helper-resize-ratio").width() > $(window).width()){
    $("img.helper-resize-ratio").attr("height",parseInt($("img.helper-resize-ratio").attr("height"))+"%")
  }
*/
    $("img.helper-resize-ratio").attr("height","90%");
    do {
            $("img.helper-resize-ratio").attr("height",parseInt($("img.helper-resize-ratio").attr("height") ) - 0.1+"%")
        } 
    while ($("img.helper-resize-ratio").width() > $(window).width() - 50);


    $("#pageA169").css("width", parseFloat($("img.helper-resize-ratio").css("width"))-00+"px");
    $("#pageA169").css("height",parseFloat($("img.helper-resize-ratio").css("height"))-60+"px");
      

$(window).on("resize",function  () {
    $("img.helper-resize-ratio").attr("height","100%");

    do {
            $("img.helper-resize-ratio").attr("height",parseInt($("img.helper-resize-ratio").attr("height") ) - 0.1+"%")
        } 
    while ($("img.helper-resize-ratio").width() > $(window).width() - 50);



    $("#pageA169").css("width", parseFloat($("img.helper-resize-ratio").css("width"))-00+"px");
    $("#pageA169").css("height",parseFloat($("img.helper-resize-ratio").css("height"))-00+"px");
      


  var zoomFactor= (145.5 * $("img.helper-resize-ratio").width())/1230;
  var corsf = (zoomFactor / 100);
page_scale = (zoomFactor / 100);
  $("#scalefix").html('.scalefix{transform : scale('+ zoomFactor/100 +')}');




})



  var zoomFactor= (145.5 * $("img.helper-resize-ratio").width())/1230;
var corsf = (zoomFactor / 100);
  $("#scalefix").html('.scalefix{transform : scale('+ zoomFactor/100 +')}');










init();
function init ( e ) {
  

setTimeout(function  (argument) {
   window.dispatchEvent(new Event('resize'));

}, 500);// body...

 



  
  




/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////P2////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////












}// init...
 




 })//end ready












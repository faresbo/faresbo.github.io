$(document).ready(function () {


  const container = document.getElementById('texture-rule');
  const numBars = 500;
  const pattern = [
      { width: 3, height: 30 },
      { width: 2, height: 15 },
      { width: 2, height: 15 },
      { width: 2, height: 15 },
      { width: 2, height: 15 },
      { width: 2, height: 20 },
      { width: 2, height: 15 },
      { width: 2, height: 15 },
      { width: 2, height: 15 },
      { width: 2, height: 15 },
  ];

  let left = 10;

  for (let i = 0; i < numBars; i++) {

      const bar = pattern[i % pattern.length];

      const div = document.createElement('div');
      div.classList.add('text-long-bar');
      div.style.width = `${bar.width}px`;
      div.style.height = `${bar.height}px`;
      div.style.left = `${left}px`;
      if( bar.width == 3 ){
        $(div).append(`<span style="display: inline-block;line-height: 77px;font-size: 16px;transform: translateX(-3px);">`+i/10+`</span> `);
      }
      container.appendChild(div);
      left += bar.width + 4; // Adjust spacing between bars as needed

  }


 /* */



$("body").css("visibility","visible")
/*
var options ={
    cursor: "hand",
    minScale: 0.1,
    maxScale: 4,
    duration:00,
    animate: false,
    easing: "ease-in",
    //contain: "invert",
    disablePan: true,
    increment: 0.2,
    $zoomRange: $(".slider-input-zoom"),
};
$('#helperPanZoom').panzoom(options);
*/
/*
$(".page-container").addClass("dragscroll");
dragscroll.reset();
*/
//swiper
confWidth_Height();
copyWH();
$(window).resize(function() {
    confWidth_Height();
    copyWH();
})//end resize 




 


/*******
slider
**/
 var SlideChangeEnd = function  (swipe) {
 // $("#label-page span").text(swipe.activeIndex+1);
}/*
 var mySwiper = $('#wrap-content').swiper({
        onSlideChangeEnd: SlideChangeEnd,
        noSwiping: true,
        });
mySwiper.wrapper.addClass('swiper-no-swiping');

*/
 

/**
slider
*******/



})//end ready


var zoomFactor = 100;
function copyWH () {

  var scale = 1;//$('#helperPanZoom').panzoom("getMatrix")[0];
  var rect = $("#helperPanZoom")[0].getBoundingClientRect();
  $("#label-zoom span").html(parseInt(scale*100));
  /*
  if( scale > 1){
      $("#style-pageA4").remove();
      $( '<style id="style-pageA4">.pageA4 { border:20px solid transparent;position:relative;width:'+(rect.width)+'px;height:'+(rect.height)+'px;margin:0 auto;margin-top:'+margtop+'px; }</style>' ).appendTo( "head" )
  }
  else{
      $("#style-pageA4").remove();
      $( '<style id="style-pageA4">.pageA4 {position:relative;width:'+(rect.width)+'px;height:'+(rect.height)+'px;margin:0 auto;margin-top:'+((($(window).height() - rect.height)/2)-($("#top-header").height()/2) )+'px; }</style>' ).appendTo( "head" )
  }
  */
  //zoomFactor = (70.6 * $(".pageA4").height())/558.92;
   $("#scalefix").html('.scalefix{transform : scale('+ zoomFactor/100 +')}');
  $("#zoomfix").html('.zoomfix{zoom :'+ zoomFactor+'%;}');

  $("#fixbkgRule").html('#rule{width:'+$("#helper-rule").width()+'px;height:'+$("#helper-rule").height()+'px;}');
  $("#fixbkgRule").html('#rule{background-size :'+$("#slider-resize-rule").width()+"px"+' 70%;width:'+$("#helper-rule").width()+'px;height:'+$("#helper-rule").height()+'px;}');
  $("#slidefix").html('#slider-resize-rule::-webkit-slider-thumb{height :'+ $("#rule").height()+'px;}#slider-resize-rule{width :'+ $("#helper-rule").width()+'px;}');
  $("#slideBoxfix").html('#box-pointer-origin{height :'+100+'%;width :'+((40 * $("#helper-rule").height())/100)+'px;}');
  $("#fix-slider-origin").html('#slider-origin{height :'+0+'%;width :'+$("#helper-rule").width()+'px;}#wrap-pointer-origin{width:'+$("#helper-rule").width()+'px;}');
  $("#fix-texture-rule").html('#texture-rule{width:'+$("#helper-rule").width()+'px;height:'+$("#helper-rule").height()+'px;}');
  $("#slideOrgfix").html('#slider-origin::-webkit-slider-thumb{height :'+((40 * $("#helper-rule").height())/100)+'px;width :'+((40 * $("#helper-rule").height())/100)+'px;}');
  $('#box-pointer-origin').css("left","calc("+$('#slider-origin').val()+"% - "+($('#slider-origin').val() * $("#box-pointer-origin").width())/100+"px)");
  $("#wrap-pointer-origin").css("left",-$("#box-pointer-origin").width()/2+"px");
  $("#slider-origin").css("left",-$("#box-pointer-origin").width()/2+"px");
  var rectH = $("#helper-pointer-rule")[0].getBoundingClientRect();
  $("#helper-pointer-drawer").css("top",-rectH.width/2+"px");


  resetOriginRule();

  
}// End copyWH() 




function confWidth_Height () {
  var aspectRatio = 792/613;
  //var s = $('#helperPanZoom').panzoom("getMatrix")[0];
  var s = 1;
  var mywidth=$(window).width();
  if( mywidth > 1002 ){
    mywidth=1002;
  }
  var myheight=mywidth*aspectRatio;
    do {
            mywidth=mywidth-0.1;
            myheight=mywidth*aspectRatio;
        } 
    while (myheight > $(window).height()-70);
        if( ($(window).width() - mywidth) < 40 ){
            mywidth=mywidth-20;
            myheight=mywidth*aspectRatio;
        }
      margtop = ($(window).height()-myheight)/2;
      margtop = margtop-($("#top-header").height()/2);
    $("#style-pageA4").remove();
    $( '<style id="style-pageA4">.pageA4 { position:relative;width:'+mywidth+'px;height:'+myheight+'px;margin:0 auto;margin-top:'+margtop+'px; }</style>' ).appendTo( "head" )
    $("#style-pagePanZoom").remove();
    $( '<style id="style-pagePanZoom">.pagePanZoom {width:'+mywidth*s+'px;height:'+myheight*s+'px;}</style>' ).appendTo( "head" );
  }//end confWidth_Height ()













 

function resetOriginRule () {
    initSliderOrigin();
    var pI = $("#helper-pointer-left")[0].getBoundingClientRect();
    pIX = pI.right;
    pIY = pI.top;
    var pP = $("#helper-pointer-origin")[0].getBoundingClientRect();
    pPX = pP.right;
    pPY = pP.top;
    var dist = Math.sqrt( Math.pow((pIX-pPX), 2) + Math.pow((pIY-pPY), 2) );

    var inioft = $("#rule").offset().top;
    var iniofl = $("#rule").offset().left;
    $("#rule").css("transform-origin",dist+"px 0% 0px");
    var newoft  = $("#rule").offset().top;
    var newofl  = $("#rule").offset().left;
    var distop  =inioft-newoft;
    var disleft =iniofl-newofl;
    $("#rule").css("top",parseFloat($("#rule").css("top"))+(distop)+"px");
    $("#rule").css("left",parseFloat($("#rule").css("left"))+(disleft)+"px");
    $("#rule").css("left",parseFloat($("#rule").css("left")) / ($("#rule").parent().width() / 100)+"%");  
    $("#rule").css("top",parseFloat($("#rule").css("top")) / ($("#rule").parent().height() / 100)+"%");

}//end updtateOriginRule






function initSliderOrigin () {
    $("#slider-origin").val(1);
    var valueOfInput = parseFloat($("#slider-origin").val());
    var pad = (valueOfInput * $("#box-pointer-origin").width())/100 ;
    $('#box-pointer-origin').css("left","calc("+valueOfInput+"% - "+pad+"px)");
}//end initSliderOrigin ()

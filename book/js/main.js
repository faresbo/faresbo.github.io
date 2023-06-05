$(document).ready(function () {

$("body").css("visibility","visible");


$(document).on("click",'#btn-next',function(e){
  $('.flipbook').turn('next');
});

$(document).on("click",'#btn-prev',function(e){
  $('.flipbook').turn('previous');
});
    var h, w;
    w=getWidth()*2;
    h=getHeight();
    var ratio_book = 1;
    if(w > $(window).width()*0.9 ){
        w = $(window).width()*0.8;
        h = Math.round((w/2)*ratio_book);
      }
    $('.bookcontainer').height(h);
    $('.bookcontainer').width(w);
    var  cm= (($(window).height()-h)/2) / 2;
    console.log(  )
    if ( cm > 100 ){
    }
    $('.OuterWrapBkCt').css('margin-top',(cm)+'px');




$(window).resize(function() {
      confWh();
      $('.flipbook').turn('size', $('.bookcontainer').width(), $('.bookcontainer').height());
      zoomFactor = (100 * $(".contenu_page").height())/565;
      $(".scalefix").css('zoom',zoomFactor+'%');
});
  $('.flipbook').turn({
      duration: 300,
      display: "double",
      width:w,
      height:h,
      elevation: 50,
      gradients: true,
      autoCenter: true,
      acceleration: false,
      pages:12
  });
$("#label-page i").text($('.flipbook').turn('pages'));
$('.flipbook').bind('turned', function(e, page) {   
  $("#label-page span").text($('.flipbook').turn('page'));
});

$(document).on("click",'.btn-audio',function(e){
if($(this).hasClass("active")){
  return;
}
if($(".btn-audio").hasClass("active")){
  return;
}
$(this).addClass("pause");
var pop = null;
$('audio').each(function(){
  var pop = Popcorn($(this)[0]);
  pop.currentTime(0);
  pop.pause();
  pop.destroy();
 });
  $(".btn-audio").removeClass("active");
  $(this).addClass("active");
  $("body").addClass("audio-Playing");
var pop = Popcorn($(this).next()[0]);

var wordTimes = {
  "wl1": { start: 0.0, end: 0.506 },
  "wl2": { start: 0.507, end: 1.00 },
  "wl3": { start:  1.01, end: 1.565 },
  "wl4": { start: 1.566, end: 2.017 },
  "wl5": { start: 2.018, end: 2.345 },
  "wl6": { start: 2.346, end: 3.00 },
};

if( $(this).hasClass("_p1") ){
  var wordTimes = {
  "wl1": { start: 0.0, end: 0.506 },
  "wl2": { start: 0.507, end: 1.00 },
  "wl3": { start:  1.01, end: 1.565 },
  "wl4": { start: 1.566, end: 2.017 },
  "wl5": { start: 2.018, end: 2.345 },
  "wl6": { start: 2.346, end: 3.00 },
};
}else{
  var wordTimes = {
  "_wl1": { start: 0.0, end: 0.805 },
  "_wl2": { start: 0.806, end: 1.10 },
  "_wl3": { start:  0.942, end: 1.303 },
  "_wl4": { start: 1.304, end: 1.581 },
  "_wl5": { start: 1.582, end: 2.200 },
};
}

$.each(wordTimes, function(id, time) {
     pop.footnote({
        start: time.start,
        end: time.end,
        text: '',
        target: id,
        effect: "applyclass",
        applyclass: "selected"
    });
});
pop.play();
pop.cue( $(this).next().attr("lonAudio"), function() {
  this.currentTime( 0 );
  $(".btn-audio").removeClass("active");
  $(".btn-audio").removeClass("pause");
  $("body").removeClass("audio-Playing");
  pop.destroy();
  pop.pause();
  pop.currentTime(0);
});

});







    zoomFactor = (100 * $(".contenu_page").height())/565;
    $(".scalefix").css('zoom',zoomFactor+'%');



})//end ready




function confWh () {
    w=getWidth()*2;
    h=getHeight();
    var ratio_book = 1;
    if(w > $(window).width()*0.9 ){
        w = $(window).width()*0.8;
        h = Math.round((w/2)*ratio_book);
      }
    $('.bookcontainer').height(h);
    $('.bookcontainer').width(w);
    var  cm= (($(window).height()-h)/2)-25;
    if ( cm > 100 ){
    }
    $('.OuterWrapBkCt').css('margin-top',cm+'px');

}//end conwh()
function getHeight () {
   return $(window).height()-43-$(window).height()*0.1;
}
function getWidth () {
   return Math.round(getHeight() / 1);
}
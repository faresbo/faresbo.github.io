$(document).ready(function () {



  //$(window).width();
/*
  if( $("img").width() > $(window).width()){
    $("img").attr("height",parseInt($("img").attr("height"))+"%")
  }
*/
    $("img").attr("height","90%");
    do {
            $("img").attr("height",parseInt($("img").attr("height") ) - 0.1+"%")
        } 
    while ($("img").width() > $(window).width() - 50);


    $("#pageA169").css("width",$("img").css("width"));
    $("#pageA169").css("height",$("img").css("height"));
      

$(window).on("resize",function  () {
    $("img").attr("height","90%");

    do {
            $("img").attr("height",parseInt($("img").attr("height") ) - 0.1+"%")
        } 
    while ($("img").width() > $(window).width() - 50);


    $("#pageA169").css("width",$("img").css("width"));
    $("#pageA169").css("height",$("img").css("height"));
      


  var zoomFactor= (145.5 * $("img").width())/1230;
  var corsf = (zoomFactor / 100);

  $("#scalefix").html('.scalefix{transform : scale('+ zoomFactor/100 +')}');




})



  var zoomFactor= (145.5 * $("img").width())/1230;
var corsf = (zoomFactor / 100);
  $("#scalefix").html('.scalefix{transform : scale('+ zoomFactor/100 +')}');






$(document).on("click",'#btn-reset',function(e){
    e.stopPropagation();  
    $("#modal-winner").hide();
    $("#car1").css("left","0.5%");
    $("#car2").css("left","0.5%");
});
 

$(document).on("click",'.read-question',function(e){
    //let playSound = () => new Audio().play()
new Audio("mp3/cons2.mp3").play();
});
 



$(document).on("click",".read-mot",function  (argument) {
  new Audio("mp3/"+$(this).attr("m")+".mp3").play();
  return;
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
console.log(voices);
msg.voice = voices[0]; 

/*
msg.volume = 1; // From 0 to 1
msg.rate = 1; // From 0.1 to 10
msg.pitch = 2; // From 0 to 2
*/
msg.text = $(this).html();
msg.lang = 'fr';
speechSynthesis.speak(msg);

})// click...



init();
function init ( e ) {
  

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("mode");
console.log(c);
if( c == "auto" ){

}else{

$(".auto").hide();
$(".send").show();
}
$(".auto").hide();
$(".send").show();
$(".auto").show();
$(".send").hide();
/////////////////////////////////////////////////////////////////
interact('.element-to-drag')
  .draggable({
    restrict: {
          restriction: ".content-activite",
    },
    onstart: function (event) {
      $(".element-to-drag").css("box-shadow","none")
      $(event.target).removeClass("justdroped");
      //$(event.target).css("cursor","none")
      //$(event.target).parent().css("cursor","none")
    },
    onmove: dragMoveListener,
    onend: function (event) {
     //$(event.target).css("cursor","move")
     //$(event.target).parent().css("cursor","move")

        $(event.target).css("transform","");
        $(event.target).attr("data-x","");
        $(event.target).attr("data-y","");
        if( !$(event.target).hasClass("justdroped") ){
          $(event.target).css("left",$(event.target).attr("_oleft")+"%");
          $(event.target).css("top",$(event.target).attr("_otop")+ "%");
          $(event.target).attr("myans", "");
          //console.log("Revert this element to the original position");
        }//end if
    }
  });
  function dragMoveListener (event) {
    var sF = corsf;
    console.log(corsf)
    sF = 1;
    var target = event.target;
    var  x = ((parseFloat(target.getAttribute('data-x')) || 0) + event.dx / corsf);
    var  y = ((parseFloat(target.getAttribute('data-y')) || 0) + event.dy / corsf);
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }








///////////////////////////////////////////
interact('.drop-zone').dropzone({
  accept: '.element-to-drag',
  overlap: 0.3,
  ondragenter: function (event) {
    $(event.target).addClass("active");
  },  
  ondragleave: function (event) {
    $(event.target).removeClass("active");
  },
  ondrop: function (event) {

console.log( $(event.relatedTarget).attr('ans'));
console.log( $(event.target).attr('ans') );

$(event.relatedTarget).css("left",$(event.target).attr("_left")+"%");
$(event.relatedTarget).css("top",$(event.target).attr("_top")+"%");
$(event.relatedTarget).addClass("justdroped")
$(event.relatedTarget).attr("myans",$(event.target).attr('ans'))
/*
console.log($(event.relatedTarget).attr('ans'));
console.log($(event.target).attr('ans'));

$(event.relatedTarget).css("opacity","1");

console.log('change top left')
console.log(event.relatedTarget)

$(event.relatedTarget).css("left",$(event.relatedTarget).attr("_left")+"%");
$(event.relatedTarget).css("top",$(event.relatedTarget).attr("_top")+"%");
console.log($(event.target).attr("_left"))
console.log(event.relatedTarget)

*/
if( $(event.relatedTarget).attr('ans') == $(event.target).attr('ans')  ){



}else{


//$(event.relatedTarget).attr("data-x","0");
//$(event.relatedTarget).attr("data-y","0");
}

//reload() btn
//prod color
//notif bravo

/*
        $(event.relatedTarget).css("transform",'translate('+0+'%, '+0+'%)');
        $(event.target).children().remove();
        $(event.relatedTarget).clone().css("opacity","1").appendTo($(event.target));
        var dropElm = $(event.target).attr("id");
        var answerUser = $(event.relatedTarget).attr("data-letter");
        var corAns = parseInt($(event.target).next(".q-op").children("span").text()) + parseInt($(event.target).next(".q-op").children("i").text());
        var prog = $(event.target).closest(".wrap-question").attr("wcar");
      console.log('hello!');
      */
  },

});
















}// init...
 


$(document).on("click",".btn-verifier",function  (argument) {
  console.log("verifie on ajouter un box shadow red")
  //    box-shadow: 0 0 10px red;


$(".element-to-drag").each(function  (argument) {
  console.log( $(this).attr("myans") , $(this).attr("ans") );
  if( $(this).attr("myans") == $(this).attr("ans")  ){
    console.log("Right anwser!");
    $(this).css("box-shadow","0 0 10px green");
  }else{
    $(this).css("box-shadow","0 0 10px red");

    console.log("false anwser!")
  }
  console.log( );
})// each...


})// btn-verifier...



$(document).on("click",".btn-Envoyer",function  (argument) {
  
var nbr_good = 0;
var nbr_tot = $(".element-to-drag").length;
for (var i = 0; i < $(".element-to-drag").length; i++) {
  
  if( $(".element-to-drag").eq(i).attr("myans") == $(".element-to-drag").eq(i).attr("ans")  ){
    //$(".element-to-drag").eq(i).css("box-shadow","0 0 10px green");
    nbr_good+=1;
  }else{
    //$(".element-to-drag").eq(i).css("box-shadow","0 0 10px red");
  }
};

 

alert("Send score ,data,user,activite_id escape+btoa")
/*
$(".element-to-drag").each(function  (argument) {
  console.log( $(this).attr("myans") , $(this).attr("ans") );
  if( $(this).attr("myans") == $(this).attr("ans")  ){
    console.log("Right anwser!");
    $(this).css("box-shadow","0 0 10px green");
  }else{
    $(this).css("box-shadow","0 0 10px red");

    console.log("false anwser!")
  }
  console.log( );
})// each...
*/

})// btn-Envoyer...



 })//end ready












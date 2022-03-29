$(document).ready(function () {



  //$(window).width();
/*
  if( $("img").width() > $(window).width()){
    $("img").attr("height",parseInt($("img").attr("height"))+"%")
  }
*/
    $(".helper-resize-ratio").attr("height","90%");
    do {
            $(".helper-resize-ratio").attr("height",parseInt($(".helper-resize-ratio").attr("height") ) - 0.1+"%")
        } 
    while ($(".helper-resize-ratio").width() > $(window).width() - 50);


    $("#pageA169").css("width",$(".helper-resize-ratio").css("width"));
    $("#pageA169").css("height",$(".helper-resize-ratio").css("height"));
       
  var zoomFactor= (145.5 * $(".helper-resize-ratio").width())/1230;
  var corsf = (zoomFactor / 100);
        $("#scalefix").html('.scalefix{transform : scale('+ zoomFactor/100 +')}');


$(window).on("resize",function  () {
    $(".helper-resize-ratio").attr("height","90%");

    do {
            $(".helper-resize-ratio").attr("height",parseInt($(".helper-resize-ratio").attr("height") ) - 0.1+"%")
        } 
    while ($(".helper-resize-ratio").width() > $(window).width() - 50);


    $("#pageA169").css("width",$(".helper-resize-ratio").css("width"));
    $("#pageA169").css("height",$(".helper-resize-ratio").css("height"));
      


  var zoomFactor= (145.5 * $(".helper-resize-ratio").width())/1230;
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
new Audio("mp3/cons01.mp3").play();
});
 



$(document).on("click",".read-mot",function  (argument) {
  
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


var line1 =     new LeaderLine(
      $(".dot1")[0],
      $(".arr1")[0]
    );
line1.setOptions({ // element-1, element-2
  color: 'rgba(0, 0, 0, 1)', // translucent
 path:"straight",
  });

var line2 =     new LeaderLine(
      $(".dot2")[0],
      $(".arr2")[0]
    );

line2.setOptions({ // element-1, element-2
  color: 'rgba(0, 0, 0, 1)', // translucent
 path:"straight",
  });

var line3 =     new LeaderLine(
      $(".dot3")[0],
      $(".arr3")[0]
    );


line3.setOptions({ // element-1, element-2
  color: 'rgba(0, 0, 0, 1)', // translucent
 path:"straight",
  });



init();
function init ( e ) {

setTimeout(function  (argument) {
   window.dispatchEvent(new Event('resize'));

}, 500);// body...

 

setTimeout(function  (argument) {
   window.dispatchEvent(new Event('resize'));

}, 1000);// body...

setTimeout(function  (argument) {
   window.dispatchEvent(new Event('resize'));

}, 3000);// body...

 


var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("mode");
console.log(c);
if( c == "auto" ){
$(".auto").show();
$(".send").hide();
}else{

$(".auto").hide();
$(".send").show();
}

$(".auto").show();
$(".send").hide();
/////////////////////////////////////////////////////////////////
interact('.arrow')
  .draggable({
    restrict: {
          restriction: ".content-activite",
    },
    onstart: function (event) {
      $(".arrow").css("box-shadow","none")
      $(event.target).removeClass("justdroped");

  eval('line'+1).setOptions({ // element-1, element-2
    color: 'black', // translucent
    path:"straight",
    });  eval('line'+2).setOptions({ // element-1, element-2
    color: 'black', // translucent
    path:"straight",
    });  eval('line'+3).setOptions({ // element-1, element-2
    color: 'black', // translucent
    path:"straight",
    });

      //$(event.target).css("cursor","none")
      //$(event.target).parent().css("cursor","none")
    },
    onmove: dragMoveListener,
    onend: function (event) {
        $(event.target).css("transform","");
        $(event.target).attr("data-x","");
        $(event.target).attr("data-y","");
        $(".drop-zone").removeClass("active")


        if( !$(event.target).hasClass("justdroped") ){
          $(event.target).css("left",$(event.target).attr("_oleft")+"%");
          $(event.target).css("top",$(event.target).attr("_otop")+ "%");
          $(event.target).attr("myans", "");
          //console.log("Revert this element to the original position");
        }//end if
      line1.position();
      line2.position();
      line3.position();
    }
  });
  function dragMoveListener (event) {
    var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
    matches = $(".scalefix").css('-webkit-transform').match(matrixRegex);
    var sF = corsf;
    console.log()
    corsf = matches[1]
    sF = 1;

  line1.position();
  line2.position();
  line3.position();



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
  accept: '.arrow',
  overlap: 0.3,
  ondragenter: function (event) {
    $(event.target).addClass("active");
  },  
  ondragleave: function (event) {
    $(event.target).removeClass("active");
  },
  ondrop: function (event) {

//console.log( $(event.relatedTarget).attr('ans'));
//console.log( $(event.target).attr('ans') );

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


 
var nbr_good = 0;
var nbr_tot = $(".arrow").length;
for (var i = 0; i < $(".arrow").length; i++) {
  
  if( $(".arrow").eq(i).attr("myans") == $(".arrow").eq(i).attr("ans")  ){
    //$(".element-to-drag").eq(i).css("box-shadow","0 0 10px green");
   
    eval('line'+(i+1)).setOptions({ // element-1, element-2
    color: 'green', // translucent
    path:"straight",
    });


    nbr_good+=1;
  }else{
     eval('line'+(i+1)).setOptions({ // element-1, element-2
    color: 'red', // translucent
    path:"straight",
    });
    //$(".element-to-drag").eq(i).css("box-shadow","0 0 10px red");
  }
};


})// btn-verifier...



$(document).on("click",".btn-Envoyer",function  (argument) {
  




 
var nbr_good = 0;
var nbr_tot = $(".arrow").length;
for (var i = 0; i < $(".arrow").length; i++) {
  
  if( $(".arrow").eq(i).attr("myans") == $(".arrow").eq(i).attr("ans")  ){
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







function adjustLine(from, to, line){

  var fT = from.offsetTop  + from.offsetHeight/2;
  var tT = to.offsetTop    + to.offsetHeight/2;
  var fL = from.offsetLeft + from.offsetWidth/2;
  var tL = to.offsetLeft   + to.offsetWidth/2;
  
  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top+'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
}




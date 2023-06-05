var page_scale = 1;



$(document).on("click","#btn-Prev",function  (argument) {
  if( $(".page.active").prev().length ){
      $(".page.active").removeClass("active")
                    .prev().addClass("active");
                    //console.log( $(".page.active").index())
                    $(".doc-page-number span").html($(".page.active").index()+1);

  };


  if( $(".doc-page-number span").html() == 1 ){
    $("#btn-Prev").css("opacity","0.5");
    $("#btn-Next").css("opacity","1");
  }else{
      $("#btn-Prev").css("opacity","1");
      $("#btn-Next").css("opacity","1");
    }
  
})//...s


$(document).on("click","#btn-Next",function  (argument) {




  if( $(".page.active").next().length ){
      $(".page.active").removeClass("active")
                    .next().addClass("active");
                    $(".doc-page-number span").html($(".page.active").index()+1);

   };



if( $(".doc-page-number span").html() == 5 ){
      setupResult();
      $("#btn-Prev").css("opacity","1");
      $("#btn-Next").css("opacity","0.5");
    }else{
      $("#btn-Prev").css("opacity","1");
      $("#btn-Next").css("opacity","1");
    }





   
})//...






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
    $("img.helper-resize-ratio").attr("height","90%");

    do {
            $("img.helper-resize-ratio").attr("height",parseInt($("img.helper-resize-ratio").attr("height") ) - 0.1+"%")
        } 
    while ($("img.helper-resize-ratio").width() > $(window).width() - 50);



    $("#pageA169").css("width", parseFloat($("img.helper-resize-ratio").css("width"))-00+"px");
    $("#pageA169").css("height",parseFloat($("img.helper-resize-ratio").css("height"))-60+"px");
      


  var zoomFactor= (145.5 * $("img.helper-resize-ratio").width())/1230;
  var corsf = (zoomFactor / 100);
page_scale = (zoomFactor / 100);
  $("#scalefix").html('.scalefix{transform : scale('+ zoomFactor/100 +')}');




})



  var zoomFactor= (145.5 * $("img.helper-resize-ratio").width())/1230;
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
//console.log(voices);
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
//console.log(c);
if( c == "auto" ){

}else{

//$(".auto").hide();
//$(".send").show();
}


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////P2////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////




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
          ////console.log("Revert this element to the original position");
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
    //console.log()
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
interact('#p2 .drop-zone').dropzone({
  accept: '.arrow',
  overlap: 0.3,
  ondragenter: function (event) {
    $(event.target).addClass("active");
  },  
  ondragleave: function (event) {
    $(event.target).removeClass("active");
  },
  ondrop: function (event) {

////console.log( $(event.relatedTarget).attr('ans'));
////console.log( $(event.target).attr('ans') );

$(event.relatedTarget).css("left",$(event.target).attr("_left")+"%");
$(event.relatedTarget).css("top",$(event.target).attr("_top")+"%");
$(event.relatedTarget).addClass("justdroped")
$(event.relatedTarget).attr("myans",$(event.target).attr('ans'))
/*
//console.log($(event.relatedTarget).attr('ans'));
//console.log($(event.target).attr('ans'));

$(event.relatedTarget).css("opacity","1");

//console.log('change top left')
//console.log(event.relatedTarget)

$(event.relatedTarget).css("left",$(event.relatedTarget).attr("_left")+"%");
$(event.relatedTarget).css("top",$(event.relatedTarget).attr("_top")+"%");
//console.log($(event.target).attr("_left"))
//console.log(event.relatedTarget)

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
      //console.log('hello!');
      */
  },

});










/////////////////////////////////////////////////////////////////
interact('#p3 .element-to-drag')
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
          ////////console.log("Revert this element to the original position");
        }//end if
    }
  });
  function dragMoveListener (event) {
    var sF = corsf;
    //////console.log(corsf);
    if(!corsf){
    corsf = 1;
    }  
    sF = 1;
    //////console.log(corsf);
    var target = event.target;
    var  x = ((parseFloat(target.getAttribute('data-x')) || 0) + event.dx / page_scale);
    var  y = ((parseFloat(target.getAttribute('data-y')) || 0) + event.dy / page_scale);
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



$(event.relatedTarget).css("left",$(event.target).attr("_left")+"%");
$(event.relatedTarget).css("top",$(event.target).attr("_top")+"%");
$(event.relatedTarget).addClass("justdroped")
$(event.relatedTarget).attr("myans",$(event.target).attr('ans'))
/*
//////console.log($(event.relatedTarget).attr('ans'));
//////console.log($(event.target).attr('ans'));

$(event.relatedTarget).css("opacity","1");

//////console.log('change top left')
//////console.log(event.relatedTarget)

$(event.relatedTarget).css("left",$(event.relatedTarget).attr("_left")+"%");
$(event.relatedTarget).css("top",$(event.relatedTarget).attr("_top")+"%");
//////console.log($(event.target).attr("_left"))
//////console.log(event.relatedTarget)

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
      //////console.log('hello!');
      */
  },

});













}// init...
 
 

 })//end ready












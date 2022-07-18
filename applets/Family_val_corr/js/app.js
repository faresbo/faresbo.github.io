
$(document).on("click",".p4 .btn-rest",function  (e) {

$(".p4 .notification").hide();
$("input").prop( "checked", false );

})// btn-rest...



$(document).on("click",".p3 .btn-rest",function  (e) {
  //alert("gg")
$(".element-to-drag").each(function(e) {
   $(this).css("left",$(this).attr("_oleft")+"%");
  $(this).css("top",$(this).attr("_otop")+ "%");
  $(this).attr("myans", "");
  $(this).css("box-shadow","")
})
$(".p3 .notification").hide();

})// btn-rest...



$(document).on("click",".p2 .btn-rest",function  (e) {
  $(".arw-an").attr("stroke","black");
  $(".arw-an").attr("marker-end","url(#triangle_000)");
  $(".p2 .notification").hide();
  $(".arw-an").each(function(e) {
    var targetarrow = ($(this).attr("id"));
      $("#c"+targetarrow).attr("cx",$("#c"+targetarrow).attr("_cx")); 
      $("#c"+targetarrow).attr("cy",$("#c"+targetarrow).attr("_cy") );
      $("#"+targetarrow).attr("x2",$("#c"+targetarrow).attr("_cx"));
      $("#"+targetarrow).attr("y2",$("#c"+targetarrow).attr("_cy"));
      $("#"+targetarrow).attr("myans",null);
      /**/
  })//  
})// btn-rest...

$(document).on("click","#btnPrev",function  (argument) {
  if( $(".doc-page-number span").html() >= 2 ){
      $(".page.active").removeClass("active")
                    .prev().addClass("active");
                     $(".doc-page-number span").html(($(".page.active").index()+1) - 5);

  };
})//...


$(document).on("click","#btnnext",function  (argument) {


     if(  $(".doc-page-number span").html() <=4 ){


      $(".page.active").removeClass("active")
                    .next().addClass("active");
                    $(".doc-page-number span").html(($(".page.active").index()+1) - 5);

   };

    if( $(".doc-page-number span").html() == 5 ){
      setupResult();
    }


})//...




function setupResult ( ) {
var score_1 = 0;
var nbr_ans = 0;
var nbr_goodex1 = 0;
var nbr_totex1 = $(".arw-an").length;
for (var ie1 = 0; ie1 < $(".arw-an").length; ie1++) {
if( $(".arw-an").eq(ie1).attr("myans") == $(".arw-an").eq(ie1).attr("corans")  ){
    nbr_goodex1+=1;
};
}//end for
var taux_ex1 = ((nbr_goodex1/nbr_totex1) * 100);
score_1 = parseInt(taux_ex1);

$(".tex1").html(score_1+'%');
$(".barex1").css("width",score_1+'%');


if( score_1 < 50 ){
$(".barex1").css("background-color",'red');
 $(".tex1").css("color",'red');

}else{
$(".barex1").css("background-color",'green');
 $(".tex1").css("color",'green');

}

var score_2 = 0;
var nbr_goodex2 = 0;
var nbr_totex2 = $(".element-to-drag").length;
for (var ie2 = 0; ie2 < $(".element-to-drag").length; ie2++) {
   if( $(".element-to-drag").eq(ie2).attr("myans") == $(".element-to-drag").eq(ie2).attr("ans")  ){
      nbr_goodex2 += 1;
  } 
}//end for
var taux_ex2 = ((nbr_goodex2/nbr_totex2) * 100);
score_2 = parseInt(taux_ex2);

$(".tex2").html(score_2+'%');
$(".barex2").css("width",score_2+'%');

if( score_2 < 50 ){
 $(".tex2").css("color",'red');
 $(".barex2").css("background-color",'red');
}else{
 $(".tex2").css("color",'green');
 $(".barex2").css("background-color",'green');
}



var score_3 = 0;



var v = $('.p4 input:checked').attr("id");
if(v == "brother"){
 score_3 = 100; 
}
$(".tex3").html(score_3+'%');
$(".barex3").css("width",score_3+'%');


if( score_3 < 50 ){
 $(".tex3").css("color",'red');

$(".barex3").css("background-color",'red');
}else{

$(".barex3").css("background-color",'green');
 $(".tex3").css("color",'green');

}


var score_T = parseInt((score_1 + score_2 + score_3) / 3);

$(".texT").html(score_T+'%');
$(".barexT").css("width",score_T+'%');
if( score_T < 50 ){
$(".barexT").css("background-color",'red');
 $(".texT").css("color",'red');

}else{
$(".barexT").css("background-color",'green');
 $(".texT").css("color",'green');

}

 



}// setupResult...




$(document).on("click", ".p4 .btn-verifier",function  (e) {
  
var v = $('.p4 input:checked').attr("id");
if(!v){
  $(".p4 .notification").hide();
  $(".p4 .nowork").show();
  return;
}



 

if ( v != 'brother'){
  $(".p4 .notification").hide();
  $(".p4 .allfail").show();
  return;
}

 
if (  v == 'brother' ){
  $(".p4 .notification").hide();
  $(".p4 .success").show();
  return;
}




})// body...

$(document).on("click",".label-checkbox",function  (e) {
  $(this).find("input").trigger("click");
})
$(document).on("click","input",function  (e) {

e.stopPropagation()
if( $(this).is(':checked') ){
  $("input").prop( "checked", false );
  $(this).prop( "checked", true );
}


})// click...



































/////////////////////////////////////////////////////////////////
interact('.p3 .element-to-drag')
  .draggable({
    restrict: {
          restriction: ".content-activite",
    },
    onstart: function (event) {
      //$("html").css("touch-action","none");
      $(".element-to-drag").css("box-shadow","none");
      $(".p3 .notification").hide();
      $(event.target).removeClass("justdroped");
      //$(event.target).css("cursor","none")
      //$(event.target).parent().css("cursor","none")
    },
    onmove: dragMoveListener,
    onend: function (event) {
      //$("html").css("touch-action","");

     //$(event.target).css("cursor","move")
     //$(event.target).parent().css("cursor","move")

        $(event.target).css("transform","");
        $(event.target).attr("data-x","");
        $(event.target).attr("data-y","");
        if( !$(event.target).hasClass("justdroped") ){
          $(event.target).css("left",$(event.target).attr("_oleft")+"%");
          $(event.target).css("top",$(event.target).attr("_otop")+ "%");
          $(event.target).attr("myans", "");
         }//end if
    }
  });
  function dragMoveListener (event) {
    var sF = 1;
    var page_scale = 1;

    if(  $('.p3dud').css("transform").includes("0.7")  ){
    page_scale = 0.7;
 } 



     
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

if( $(event.relatedTarget).attr('ans') == $(event.target).attr('ans')  ){
}else{


}

  },

});







$(document).on("click",".p3 .btn-verifier",function  (argument) {
  //    box-shadow: 0 0 10px red;
 



var nbr_ans = 0;
var nbr_good = 0;
var nbr_tot = $(".element-to-drag").length;
 
for (var i = 0; i < $(".element-to-drag").length; i++) {

   if($(".element-to-drag").eq(i).attr("myans")){
    nbr_ans+=1;
  }  


   if( $(".element-to-drag").eq(i).attr("myans") == $(".element-to-drag").eq(i).attr("ans")  ){
    $(".element-to-drag").eq(i).css("box-shadow","0 0 10px green");
     nbr_good += 1;
  }else{
    $(".element-to-drag").eq(i).css("box-shadow","0 0 10px red");
   }

}//end for


if(nbr_ans == 0){
  $(".p3 .notification").hide();
  $(".p3 .nowork").show();
  return;
}


if (nbr_good == 0){
  $(".p3 .notification").hide();
  $(".p3 .allfail").show();
  return;
}

if (nbr_good < nbr_tot){
  $(".p3 .notification").hide();
  $(".p3 .somefail").show();
  return;
}

if (nbr_good == nbr_tot){
  $(".p3 .notification").hide();
  $(".p3 .success").show();
  return;
}


 


})// btn-verifier...

























$(document).on("click",".p2 .btn-verifier",function  (argument) {
 

 


var nbr_ans = 0;
var nbr_good = 0;
var nbr_tot = $(".arw-an").length;
 
for (var i = 0; i < $(".arw-an").length; i++) {
  if($(".arw-an").eq(i).attr("myans")){
    nbr_ans+=1;
  }  


if( $(".arw-an").eq(i).attr("myans") == $(".arw-an").eq(i).attr("corans")  ){
    nbr_good+=1;
    $(".arw-an").eq(i).attr("stroke","green");
    $(".arw-an").eq(i).attr("marker-end","url(#triangle_green)");

    }else{
      $(".arw-an").eq(i).attr("stroke","red");
    $(".arw-an").eq(i).attr("marker-end","url(#triangle_red)");

    }


 
  /*
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
  */
};

/*
$(this).hide();
$(this).prev().hide();
$(this).next().show();

*/



if(nbr_ans == 0){
  $(".p2 .notification").hide();
  $(".p2 .nowork").show();
  return;
}

if (nbr_good == 0){
  $(".p2 .notification").hide();
  $(".p2 .allfail").show();
  return;
}

if (nbr_good < nbr_tot){
  $(".p2 .notification").hide();
  $(".p2 .somefail").show();
  return;
}

if (nbr_good == nbr_tot){
  $(".p2 .notification").hide();
  $(".p2 .success").show();
  return;
}


})// btn-verifier...

$(document).on("click",".p2 .btn-solution",function  (argument) {
  $(this).hide();
  $(this).next().show();
});


$(document).on("click",".p2 .btn-answers",function  (argument) {
  $(this).hide();
  $(this).prev().show();
});




$(document).on("mouseout touchend",".drop-zone",function  (e) {
 
 $(".drop-zone").css("box-shadow","0px 3px 5px rgb(0 0 0 / 40%)");
  
})// body...


$(document).on("mousemove touchmove",".drop-zone",function  (e) {
if( movearrow ){
   $(".drop-zone").css("box-shadow","0px 3px 5px rgb(0 0 0 / 40%)");
   $(this).css("box-shadow","0 0 10px blue");
}

})// body...

var lX= 0;
var lY= 0;

$(document).on("mousemove touchmove",'.stage_draw_svg',function(e){

 
if( movearrow ){
 
     var x =  e.clientX - $(this).offset().left ;
    var y =  e.clientY - $(this).offset().top ;


    if( !x ){
      x = ( e.originalEvent.touches[0].clientX - $(this).offset().left );
      y = ( e.originalEvent.touches[0].clientY - $(this).offset().top );
      lX = e.originalEvent.touches[0].clientX;
      lY = e.originalEvent.touches[0].clientY;
    }

    var offset = $('.stage_draw_svg').offset();
    // Then refer to 
     x = (x * 300)/388
    y = (y * 58)/71


var element = $('.stage_draw_svg')[0];

if(  $('.stage_draw_svg').css("transform").includes("0.55")  ){
    x = x / 0.55;
    y = y / 0.55;
}else{
  x = x / 0.9;
    y = y / 0.9;
} 



    $("#c"+targetarrow).attr("cx",x);
    $("#c"+targetarrow).attr("cy",y);
    $("#"+targetarrow).attr("x2",x);
    $("#"+targetarrow).attr("y2",y);


}//end movearrow

})


var movearrow = false;
var targetarrow = null;
var arrow_answer = null;
 

$(document).on("mousedown touchstart",'.drag-help-arrw',function(e){
   movearrow = true;
  targetarrow = $(this).attr("target");
  $(this).css("pointer-events","none");
  $(".arw-an").attr("stroke","black");
  $(".arw-an").attr("marker-end","url(#triangle_000)");
  $(".p2 .notification").hide();
$("body").css("overflow","hidden");

 

})

//drop zone
 $(document).on("mouseup touchend",'.stage_draw_svg',function(e){
$("body").css("overflow","");

      


var $elm = $(document.elementFromPoint( parseInt(e.view.lX)   , parseInt(e.view.lY)   ));

if(movearrow && ($(e.target).hasClass("drop-zone") || $elm.hasClass("drop-zone") )  ){

  var padtop = 0;
  if(targetarrow != "line1"){
    padtop += 10;
  }
 var x = $(e.target).attr("_left");
var py = parseInt($(e.target).attr("_top")) ;
var ans = $(e.target).attr("ans");
if( !x ){
    var x = $elm.attr("_left");
    var py = parseInt($elm.attr("_top")) ;
    var ans = $elm.attr("ans");
}
    $("#c"+targetarrow).attr("cx",x);
    $("#c"+targetarrow).attr("cy",py+padtop);

    $("#"+targetarrow).attr("x2",x);
    $("#"+targetarrow).attr("y2",py+padtop);
    $("#"+targetarrow).attr("myans", ans );


}else{
    $("#c"+targetarrow).attr("cx",$("#c"+targetarrow).attr("_cx")); 
    $("#c"+targetarrow).attr("cy",$("#c"+targetarrow).attr("_cy") );
    $("#"+targetarrow).attr("x2",$("#c"+targetarrow).attr("_cx"));
    $("#"+targetarrow).attr("y2",$("#c"+targetarrow).attr("_cy"));
    $("#"+targetarrow).attr("myans",null);
}








   $("#c"+targetarrow).css("pointer-events","all");
   movearrow = false;
   targetarrow = null;
  $(".drop-zone").css("box-shadow","0px 3px 5px rgb(0 0 0 / 40%)");


})




$(document).on("click",".cap-play",function  ( e ) {
 $(this).hide();
 $(this).next().show();
}) // click...

$(document).on("click",".p1-audio",function  ( e ) {
  
 new Audio("mp3/"+$(this).attr("text")+".mp3").play();

}) // click...



 




$(document).on("click",".btn-toggle-mode",function  ( ) {



if( !$(this).hasClass("dark_") ){

  $(".Mdark").hide();
  $(".Mlight").show();
  $("html").css("filter","invert(1) hue-rotate(.5turn)");
  $("img").css("opacity","1");
  $("img").css("filter","invert(1) hue-rotate(.5turn)");
  $("transition").css("filter","opacity .25s ease-in-out");
  $(".mbig").css("filter","none");
  $(".mbig").css("opacity","1");



}else{
 
  $(".Mlight").hide();
  $(".Mdark").show();
  $("html").css("filter","none");
  $("img").css("opacity","1");
  $("img").css("filter","none");
  $("transition").css("filter","none");
$(".mbig").css("filter","none");
$(".mbig").css("opacity","1");
}
$(this).toggleClass("dark_");

})

$("#btn-Prev").css("opacity","0.5");
$("#btn-Next").css("opacity","1");






function setupResult ( ) {

 
    //////console.log( $(".p2").attr("is_ans") );
    //////console.log( $(".p2").attr("score") );
    //////console.log( $(".p3").attr("is_ans") );
    //////console.log( $(".p3").attr("score") );
    //////console.log( $(".p4").attr("is_ans") );
    //////console.log( $(".p4").attr("score") );


var score_t = 0;

if( $(".p2").attr("is_ans") ){
  $(".tex1").html($(".p2").attr("score")+'%');
  score_t += parseInt($(".p2").attr("score"));
  $(".barex1").css("width",$(".p2").attr("score")+'%');
if( $(".p2").attr("score") < 50 ){
 $(".barex1").css("background-color",'red');
 $(".tex1").css("color",'red');
}else{
  $(".barex1").css("background-color",'green');
  $(".tex1").css("color",'green');
 }
}else{
    $(".tex1").html(0+'%');
    $(".barex1").css("width",0+'%');
    $(".barex1").css("background-color",'red');
    $(".tex1").css("color",'red');
}



if( $(".p3").attr("is_ans") ){
  score_t += parseInt($(".p3").attr("score"));

  $(".tex2").html($(".p3").attr("score")+'%');
  $(".barex2").css("width",$(".p3").attr("score")+'%');
if( $(".p3").attr("score") < 50 ){
 $(".barex2").css("background-color",'red');
 $(".tex2").css("color",'red');
}else{
  $(".barex2").css("background-color",'green');
  $(".tex2").css("color",'green');
 }
}else{
    $(".tex2").html(0+'%');
    $(".barex2").css("width",0+'%');
    $(".barex2").css("background-color",'red');
    $(".tex2").css("color",'red');
}



if( $(".p4").attr("is_ans") ){
  score_t += parseInt($(".p4").attr("score"));

  $(".tex3").html($(".p4").attr("score")+'%');
  $(".barex3").css("width",$(".p4").attr("score")+'%');
if( $(".p4").attr("score") < 50 ){
 $(".barex3").css("background-color",'red');
 $(".tex3").css("color",'red');
}else{
  $(".barex3").css("background-color",'green');
  $(".tex3").css("color",'green');
 }
}else{
  $(".tex3").html(0+'%');
  $(".barex3").css("width",0+'%');
  $(".barex3").css("background-color",'red');
  $(".tex3").css("color",'red');
}


score_t = ( score_t / 3 );
score_t =parseInt(score_t);

 
$(".texT").html(score_t+'%');
$(".barexT").css("width",score_t+'%');
if( score_t < 50 ){
$(".barexT").css("background-color",'red');
 $(".texT").css("color",'red');

}else{
$(".barexT").css("background-color",'green');
 $(".texT").css("color",'green');

}


 return; 
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







$(document).on("click",".p4 .btn-rest",function  (e) {

$(".p4 .notification").hide();
$("input").prop( "checked", false );

})// btn-rest...




$(document).on("click",".p4 .btn-toggle-ans-cor",function  ( e ) {
 
 if( !$(this).hasClass("active") ){
  $(".p4 .left-toggle").hide();
  $(".p4 .right-toggle").show();
  
 

  $(".label-checkbox").eq(1).trigger("click");
$(".label-checkbox").css("box-shadow","");
$(".label-checkbox").eq(1).css("box-shadow","0 0 10px blue");
 
  
}else{

  $(".p4 .left-toggle").show();
  $(".p4 .right-toggle").hide();


  var data_ans = $(".p4").attr("data_ans");
  $(".label-checkbox").css("box-shadow","");
  $("#"+data_ans).trigger("click");
  if( data_ans == 'brother' ){
    $("#"+data_ans).parent().css("box-shadow","0 0 10px green");
  }else{
    $("#"+data_ans).parent().css("box-shadow","0 0 10px red");
  }

}
$(this).toggleClass("active");
}) // btn-toggle-ans-cor...





$(document).on("click", ".p4 .btn-verifier",function  (e) {
  
 
$(".p4").attr("is_ans","true");
$(".p4").attr("data_ans",$('.p4 input:checked').attr("id"));
var score_act = 0;
if($('.p4 input:checked').attr("id") == "brother"){
  score_act = 100;
}

if(  score_act > 0 && $('.p4 input:checked').attr("id")){
$('.p4 input:checked').parent().css("box-shadow","0 0 10px green")
}else{
  $('.p4 input:checked').parent().css("box-shadow","0 0 10px red")

}

$(".p4").attr("score",score_act);
 $(".label-checkbox").css("pointer-events","none");
$(this).hide();
$(this).prev().hide();
$(this).next().show();


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






$(document).on("click",".p3 .btn-rest",function  (e) {
  //alert("gg")
$(".element-to-drag").each(function(e){
  $(this).css("left",$(this).attr("_oleft")+"%");
  $(this).css("top",$(this).attr("_otop")+ "%");
  $(this).attr("myans", "");
  $(this).css("box-shadow","")
})
$(".p3 .notification").hide();

})// btn-rest...






$(document).on("click",".p3 .btn-toggle-ans-cor",function  ( e ) {
 
 if( !$(this).hasClass("active") ){
  $(".p3 .left-toggle").hide();
  $(".p3 .right-toggle").show();
  
console.log("ffffffffffffffffffffffff");
  $(".element-to-drag").each(function(e) {
   $(this).css("left",$(this).attr("_cleft")+"%");
  $(this).css("top",$(this).attr("_ctop")+ "%");
  $(this).attr("myans", "");
  $(this).css("box-shadow","0 0 10px blue");
})

 
  
}else{

  $(".p3 .left-toggle").show();
  $(".p3 .right-toggle").hide();


  var data_ans = $(".p3").attr("data_ans");
  data_ans = atob(data_ans);
  data_ans = JSON.parse(data_ans);
  console.log( data_ans );
  for (var i = 0; i < data_ans.length; i++) {
    $(".element-to-drag").eq(i).css("left",data_ans[i].left);
    $(".element-to-drag").eq(i).css("top",data_ans[i].top);
    $(".element-to-drag").eq(i).attr("myans",data_ans[i].myans);
  if( $(".element-to-drag").eq(i).attr("myans") == $(".element-to-drag").eq(i).attr("ans")  ){
    $(".element-to-drag").eq(i).css("box-shadow","0 0 10px green");
   }else{
  $ (".element-to-drag").eq(i).css("box-shadow","0 0 10px red");
  }
  }



  
}
$(this).toggleClass("active");
}) // btn-toggle-ans-cor...
















$(document).on("click",".p3 .btn-verifier",function  (argument) {
  //    box-shadow: 0 0 10px red;
 


var nbr_ans = 0;
var nbr_good = 0;
var nbr_tot = $(".element-to-drag").length;
 
var data_ans = [];
 



for (var i = 0; i < $(".element-to-drag").length; i++) {

 
 data_ans.push({
  id:i,
  top:$(".element-to-drag").eq(i)[0].style.top,
  left:$(".element-to-drag").eq(i)[0].style.left,
  myans:$(".element-to-drag").eq(i).attr("myans"),
})

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

 
$(".p3").attr("is_ans","true");
$(".p3").attr("data_ans",btoa(JSON.stringify(data_ans)));

var score_act = parseInt((nbr_good / nbr_tot) * 100);
$(".p3").attr("score",score_act);
 $(".element-to-drag").css("pointer-events","none");
$(this).hide();
$(this).prev().hide();
$(this).next().show();


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











$(document).on("click",".p2 .btn-toggle-ans-cor",function  ( e ) {
 
 if( !$(this).hasClass("active") ){
  $(".p2 .left-toggle").hide();
  $(".p2 .right-toggle").show();
  

  $(".arw-an").attr("stroke","blue");
  $(".arw-an").attr("marker-end","url(#triangle_0000ff)");
  $(".arw-an").each(function(e) {
    var targetarrow = ($(this).attr("id"));
      $("#c"+targetarrow).attr("cx",$("#c"+targetarrow).attr("__cx")); 
      $("#c"+targetarrow).attr("cy",$("#c"+targetarrow).attr("__cy") );
      $("#"+targetarrow).attr("x2",$("#c"+targetarrow).attr("__cx"));
      $("#"+targetarrow).attr("y2",$("#c"+targetarrow).attr("__cy"));
      $("#"+targetarrow).attr("myans",null);
      /**/
  })//

 
  
}else{
  $(".p2 .left-toggle").show();
  $(".p2 .right-toggle").hide();

  var data_ans = $(".p2").attr("data_ans");
  data_ans = atob(data_ans);
  data_ans = JSON.parse(data_ans);
  console.log( data_ans );
  for (var i = 0; i < data_ans.length; i++) {
      var targetarrow = data_ans[i].id;
      $("#c"+targetarrow).attr("cx",data_ans[i].x2); 
      $("#c"+targetarrow).attr("cy",data_ans[i].y2 );
      $("#"+targetarrow).attr("x2",data_ans[i].x2);
      $("#"+targetarrow).attr("y2",data_ans[i].y2);
      $("#"+targetarrow).attr("myans",data_ans[i].myans);


if( $("#"+targetarrow).attr("myans") == $("#"+targetarrow).attr("corans")  ){
    $("#"+targetarrow).attr("stroke","green");
    $("#"+targetarrow).attr("marker-end","url(#triangle_green)");

    }else{
      $("#"+targetarrow).attr("stroke","red");
      $("#"+targetarrow).attr("marker-end","url(#triangle_red)");

    }


  };

  



  
}
$(this).toggleClass("active");
}) // btn-toggle-ans-cor...













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






$(document).on("click",".p2 .btn-verifier",function  (argument) {
 


var nbr_ans = 0;
var nbr_good = 0;
var nbr_tot = $(".arw-an").length;
var data_ans = [];
 
for (var i = 0; i < $(".arw-an").length; i++) {
data_ans.push({
  id:$(".arw-an").eq(i).attr("id"),
  x2:$(".arw-an").eq(i).attr("x2"),
  y2:$(".arw-an").eq(i).attr("y2"),
  myans:$(".arw-an").eq(i).attr("myans"),
})
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

$(".p2").attr("is_ans","true");
$(".p2").attr("data_ans",btoa(JSON.stringify(data_ans)));
var score_act = parseInt((nbr_good / nbr_tot) * 100);
$(".p2").attr("score",score_act);
 $(".drag-help-arrw").css("pointer-events","none");
$(this).hide();
$(this).prev().hide();
$(this).next().show();

/**/

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

  $(".arw-an").attr("stroke","blue");
  $(".arw-an").attr("marker-end","url(#triangle_0000ff)");
  $(".arw-an").each(function(e) {
    var targetarrow = ($(this).attr("id"));
      $("#c"+targetarrow).attr("cx",$("#c"+targetarrow).attr("__cx")); 
      $("#c"+targetarrow).attr("cy",$("#c"+targetarrow).attr("__cy") );
      $("#"+targetarrow).attr("x2",$("#c"+targetarrow).attr("__cx"));
      $("#"+targetarrow).attr("y2",$("#c"+targetarrow).attr("__cy"));
      $("#"+targetarrow).attr("myans",null);
      /**/
  })//



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
 
     var x =  e.clientX  ;
    var y =  e.clientY   ;
     x = 0;
 //console.log(e);
var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
    matches = $(".scalefix").css('transform').match(matrixRegex);

   var parentOffset = $(this).offset(); 
   //or $(this).offset(); if you really just want the current element's offset
   var relX = e.pageX - parentOffset.left;
   relX = relX / matches[1];

   var relY = e.pageY - parentOffset.top;
    relY = relY / matches[1];

 


     $("#c"+targetarrow).attr("cx",relX);
    $("#c"+targetarrow).attr("cy",relY);
    $("#"+targetarrow).attr("x2",relX);
    $("#"+targetarrow).attr("y2",relY);


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



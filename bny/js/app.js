




 

$(document).on("click","#btnPrev",function  ( ) {
  if( $(".doc-page-number span").html() >= 2 ){
      $(".page.active").removeClass("active")
                    .prev().addClass("active");
                     $(".doc-page-number span").html(($(".page.active").index()+1) - 5);

  };
})//...


$(document).on("click","#btnnext",function  ( ) {


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
console.log($(".p4").attr("score"));
  $(".tex3").html($(".p4").attr("score")+'%');
  $(".barex3").css("width",$(".p4").attr("score")+'%');
if( $(".p4").attr("score") < 50 ){
 $(".barex3").css("background-color",'red');
 $(".tex3").css("color",'red');
}else{
  $(".barex3").css("background-color",'green');
  $(".tex3").css("color",'green');
 }
}else

{

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





}// setupResult...



 

 

$(document).on("click",".chkimg",function  (argument) {
 
  $(".chkimg").css("box-shadow",'');
  $(".p2 .notification").hide();



  $(".chkimg").not(this).removeClass("active");

    if( $(this).hasClass("active")  ){
    $(this).removeClass("active")
   }else{
        $(this).addClass("active")
   }



})// body...



$(document).on("click",".p2 .btn-answers",function  (argument) {

  $(this).hide();
  $(this).prev().show();
  var data_ans = $(".p2").attr("data_ans");
  data_ans = (data_ans);
   $(".chkimg").css("box-shadow",'none');
$(".chkimg").removeClass("active");

if( data_ans ){
  $(".chkimg").eq(data_ans).addClass("active");
}


if( $(".chkimg.active").attr("id") == "pomme" ){
  $(".chkimg.active").css("box-shadow",'0 0 10px green');
   return;
}else{
  $(".chkimg.active").css("box-shadow",'0 0 10px red')
 }

 
});





$(document).on("click", ".p2 .btn-rest",function  (e) {

$(".chkimg").removeClass("active");
$(".p2 .notification").hide();
});


$(document).on("click",".p2 .btn-solution",function  (argument) {
  $(this).hide();
  $(this).next().show();
  $(".chkimg").removeClass("active");
   $(".chkimg").css("box-shadow",'none');

  $("#pomme").addClass("active");
  $("#pomme").css("box-shadow",'0 0 10px blue');




//$(".p3 .notification").hide();



});




$(document).on("click", ".p2 .btn-verifier",function  (e) {
 
var score_act = 0;
if( $(".chkimg.active").attr("id") == "pomme" ){
score_act = 100;
}
$(".p2").attr("is_ans","true");
$(".p2").attr("data_ans", $(".chkimg.active").index );

console.log($(".chkimg.active").index());


$(".p2").attr("score",score_act);
 $(".chkimg").css("pointer-events","none");
$(this).hide();
$(this).prev().hide();
$(this).next().show();


if( !$(".chkimg.active").length ){
   $(".p2 .notification").hide();
  $(".p2 .nowork").show();
  return; 
}


if( $(".chkimg.active").attr("id") == "pomme" ){
  $(".chkimg.active").css("box-shadow",'0 0 10px green');
  $(".p2 .notification").hide();
  $(".p2 .success").show();
  return;
}else{
  $(".chkimg.active").css("box-shadow",'0 0 10px red')
  $(".p2 .notification").hide();
  $(".p2 .allfail").show();
}




})// body...










$(document).on("click", ".p3 .btn-rest",function  (e) {

 $(".p3 .notification").hide();
 $(".drg").css("box-shadow","");

 $("#imgcontainer").append($("#good").html())
 $("#imgcontainer").append($("#bad").html())
$("#good").html(" ");
$("#bad").html(" ");


$("#imgcontainer .drg").draggable({
       // helper: 'clone',
      start: function( event, ui ) {
            $(this).css("z-index","100");          
   $(".p3 .notification").hide();

 $(".drg").css("box-shadow","");

      },
      stop: function( event, ui ) {
            $(this).css("z-index","0");            

            //$(this).css("opacity","1");
            //$(this).removeClass("active");            
            //$(this).removeClass("no");

$(".drop-td").removeClass("active");
        $(ui.helper).css("background","");
        $(ui.helper).css("transform","");
        console.log($(this).css("top"));
        if( $(this).css("top") != "0px"){
          $(this).attr("style","position: relative;")
          $(this).detach().appendTo("#imgcontainer")
        }
      }
    });



});






$(document).on("click",".p3 .btn-answers",function  (argument) {

  $(this).hide();
  $(this).prev().show();
  var data_ans = $(".p3").attr("data_ans");
  data_ans = atob(data_ans);
  data_ans = JSON.parse(data_ans);
  console.log( data_ans );
  $("#good").html(data_ans.good);
  $("#bad").html(data_ans.bad);
  $("#imgcontainer").html(data_ans.divs);

 if ( $("#good #bunny").length > 0 ){
  $("#bunny").css("box-shadow",'0 0 10px green');
  //greeen box
}else{
  $("#bunny").css("box-shadow",'0 0 10px red');

  //red box
}
if ( $("#bad #reg1").length > 0 ){
  $("#reg1").css("box-shadow",'0 0 10px green');

}else{
  $("#reg1").css("box-shadow",'0 0 10px red');
}


if ( $("#bad #reg2").length > 0 ){
  $("#reg2").css("box-shadow",'0 0 10px green');

}else{
  $("#reg2").css("box-shadow",'0 0 10px red');
}

if ( $("#bad #reg3").length > 0 ){
  $("#reg3").css("box-shadow",'0 0 10px green');

}else{
  $("#reg3").css("box-shadow",'0 0 10px red');
}

});






$(document).on("click",".p3 .btn-solution",function  (argument) {
  $(this).hide();
  $(this).next().show();

$("#imgcontainer").html(` `);

  $("#good").html(`<img class="drg ui-draggable ui-draggable-handle" id="bunny" src="icons/bunny.png" draggable="false" alt="" style="box-shadow:0 0 10px blue;position: relative; z-index: 0; width: 80px; inset: 0px auto auto 0px; height: 113px;">`)
$("#bad").html(`<img class="drg ui-draggable ui-draggable-handle" id="reg1" src="icons/reg1.png" draggable="false" alt="" style="box-shadow:0 0 10px blue;position: relative; z-index: 0; width: 80px; inset: 0px auto auto 0px; height: 95px;">
<img class="drg ui-draggable ui-draggable-handle" id="reg2" src="icons/reg2.png" draggable="false" alt="" style="box-shadow:0 0 10px blue;position: relative; z-index: 0; width: 80px; inset: 0px auto auto 0px; height: 75px;">
<img class="drg ui-draggable ui-draggable-handle" id="reg3" src="icons/reg3.png" draggable="false" alt="" style="box-shadow:0 0 10px blue;position: relative; z-index: 0; width: 80px; inset: 0px auto auto 0px; height: 75px;">
`);


});



$(document).on("click", ".p3 .btn-verifier",function  (e) {


$(".p3").attr("is_ans","true");

 $(".drag-help-arrw").css("pointer-events","none");
$(this).hide();
$(this).prev().hide();
$(this).next().show();
 var good = $("#good").html();
 var bad = $("#bad").html();
 var divs = $("#imgcontainer").html();
var obj = {
  good:good,
  bad:bad,
  divs:divs,
}

$(".p3").attr("data_ans",btoa( JSON.stringify(obj) ));


if( $("#good img").length == 0 &&  $("#good img").length == 0  ){
   $(".p3 .notification").hide();
  $(".p3 .nowork").show();
  return; 
}//end


var scoreex2 = 0;
if ( $("#good #bunny").length > 0 ){
  scoreex2 +=1;
  $("#bunny").css("box-shadow",'0 0 10px green');
  //greeen box
}else{
  $("#bunny").css("box-shadow",'0 0 10px red');

  //red box
}
if ( $("#bad #reg1").length > 0 ){
  scoreex2 +=1;
  $("#reg1").css("box-shadow",'0 0 10px green');

}else{
  $("#reg1").css("box-shadow",'0 0 10px red');
}


if ( $("#bad #reg2").length > 0 ){
  scoreex2 +=1;
  $("#reg2").css("box-shadow",'0 0 10px green');

}else{
  $("#reg2").css("box-shadow",'0 0 10px red');
}

if ( $("#bad #reg3").length > 0 ){
  scoreex2 +=1;
  $("#reg3").css("box-shadow",'0 0 10px green');

}else{
  $("#reg3").css("box-shadow",'0 0 10px red');
}
 
$(".p3").attr("score",parseInt((scoreex2 / 4) * 100));
console.log( scoreex2 );

 
if(scoreex2 == 0 ){
   $(".p3 .notification").hide();
  $(".p3 .allfail").show();
   return
}
if(scoreex2 < 4 ){
   $(".p3 .notification").hide();
  $(".p3 .somefail").show();
   return
}
if(scoreex2 == 4 ){
   $(".p3 .notification").hide();
  $(".p3 .success").show();
   return
}


});







$(document).on("click",".p4 .btn-rest",function  (e) {

   $(".p4 .notification").hide();

$("#sortcontainer" ).html(inisort)
$('#sortcontainer p').removeClass("fail success")

})// btn-rest...


 


$(document).on("click",".p4 .btn-solution",function  (argument) {
   $(this).hide();
   $(this).next().show();
   $("#sortcontainer").html(`
    <!--<span corrOrdre = "2">Il reçoit une pomme sur la tête.</span>-->
   <p corrordre="0" class="jq-sortable-handle" style="pointer-events: none;"> <span style="pointer-events: none;box-shadow: blue 0px 0px 10px;">A big bunny wakes up.</span></p><p corrordre="1" class="jq-sortable-handle" style="pointer-events: none;"> <span style="pointer-events: none;box-shadow: blue 0px 0px 10px;">He goes out of his den.</span></p><p corrordre="2" class="jq-sortable-handle" style="pointer-events: none;"> <span style="box-shadow: blue 0px 0px 10px;">The butterfly is crushed by a rock.</span></p>
   <p class="jq-sortable-handle" corrordre="3" style="pointer-events: none;"><span style="pointer-events: none;box-shadow: blue 0px 0px 10px;">The rabbit decides to take revenge.</span></p><p corrordre="4" class="jq-sortable-handle" style="pointer-events: none;"> <span style="pointer-events: none;box-shadow: blue 0px 0px 10px;">Rinky is hit by a trunk.</span></p> 
   <p corrordre="5" class="jq-sortable-handle" style="pointer-events: none;"> <span style="pointer-events: none;box-shadow: blue 0px 0px 10px;">Gimera is catapulted.</span></p><p corrordre="6" class="ii-sortable-handle" style="pointer-events: none;"> <span style="pointer-events: none;box-shadow: blue 0px 0px 10px;">Frank (the leader of the rodents), is transformed into a kite.</span></p>  
`);
  


});


$(document).on("click",".p4 .btn-answers",function  (argument) {

  $(this).hide();
  $(this).prev().show();
  var data_ans = $(".p4").attr("data_ans");
  data_ans = atob(data_ans); 
  $("#sortcontainer").html(data_ans);
     $('#sortcontainer p').each(function(index, anchor) {
      
        if(index == $(this).attr("corrOrdre")){
            $(this).addClass("success");
         }else{
            $(this).addClass("fail")
        }
    });

 
});








$(document).on("click", ".p4 .btn-verifier",function  (e) {


 $("#sortcontainer").sortable("destroy"); //call widget-function destroy
  $("#sortcontainer p").removeClass('ui-state-default');


$(".p4").attr("is_ans","true");
$(".p4").attr("data_ans",btoa( $("#sortcontainer").html() ));
 $("#sortcontainer p").css("pointer-events","none");
$(this).hide();
$(this).prev().hide();
$(this).next().show();


$('#sortcontainer p').removeClass("fail success")
var scoreex3 = 0;

for (var i = 0; i < $('#sortcontainer p').length; i++) {
   if( i == $('#sortcontainer p').eq(i).attr("corrOrdre")){
    console.log("success")
         $('#sortcontainer p').eq(i).addClass("success");
          scoreex3 += 1;
   }else{
       $('#sortcontainer p').eq(i).addClass("fail")

   }
};
 

  $(".p4").attr("score",parseInt(parseFloat( scoreex3 / 7 ) * 100 ));
 if(scoreex3 == 0 ){
   $(".p4 .notification").hide();
  $(".p4 .allfail").show();
   return
}
if(scoreex3 < 7 ){
   $(".p4 .notification").hide();
  $(".p4 .somefail").show();
   return
}
if(scoreex3 == 7 ){
   $(".p4 .notification").hide();
  $(".p4 .success").show();
   return
}


})//  ...








 


$( "#sortcontainer" ).sortable();

 

var inisort = $( "#sortcontainer" ).html() 
$("#sortcontainer" ).sortable({
            //revert: true,
      forcePlaceholderSize: true,
      placeholder: "ui-state-highlight",
      start: function( event, ui ) {
$('#sortcontainer p').removeClass("fail success");
   $(".p4 .notification").hide();

      }
        });





















$("#imgcontainer .drg").draggable({
       // helper: 'clone',
      start: function( event, ui ) {
            $(this).css("z-index","100");          
            $(".drg").css("box-shadow","");
            $(".p3 .notification").hide();

      },
      stop: function( event, ui ) {
            $(this).css("z-index","0");            

            //$(this).css("opacity","1");
            //$(this).removeClass("active");            
            //$(this).removeClass("no");

$(".drop-td").removeClass("active");
        $(ui.helper).css("background","");
        $(ui.helper).css("transform","");
        console.log($(this).css("top"));
        if( $(this).css("top") != "0px"){
          $(this).attr("style","position: relative;")
          $(this).detach().appendTo("#imgcontainer")
        }
      }
    });

$(".drop-td").droppable({
       over: function( event, ui ) {
        $(this).addClass("active");
       },       
       out: function( event, ui ) {
        $(this).removeClass("active");
       },
       drop: function(event, ui) {
            //$(ui.draggable).remove();
            //$(ui.draggable).css("opacity","0");
            //$(ui.draggable).addClass("nono");
            //$(ui.draggable).removeClass("drg ui-draggable ui-draggable-handle");
            //$(ui.draggable).draggable({disabled: true});
            $(ui.draggable).css("top","0");
            $(ui.draggable).css("left","0");

            $(ui.draggable).appendTo($(this))

        }
    });

function restDrag()  {


    $(".drop-td .drg").detach().appendTo("#imgcontainer")

}

// Assuming currentPage is already defined and holds the current page number
document.querySelectorAll('marker, line, ellipse').forEach((element, index) => {
  // Update the id of each element
  //console.log(  $(element).closest(".task").index() )

  const originalId = element.id;
  element.id += `_page${ $(element).closest(".task").index()}`;
  
  // If the element is a line and has a marker-end attribute
  if (element.tagName === 'line' && element.hasAttribute('marker-end')) {
      // Get the original marker ID referenced in the marker-end attribute
      const markerUrl = element.getAttribute('marker-end');
      const markerId = markerUrl.match(/#(\w+)/)[1]; // Extract the ID part after the '#'
      
      // Update the marker-end attribute to reference the new marker ID
      const newMarkerUrl = markerUrl.replace(markerId, markerId + `_page${   $(element).closest(".task").index()   }`);
      element.setAttribute('marker-end', newMarkerUrl);
  }


    // If the element is an ellipse and has a target attribute
    if (element.tagName === 'ellipse' && element.hasAttribute('target')) {
      // Get the original target ID referenced in the target attribute
      const targetId = element.getAttribute('target');
      
      // Update the target attribute to reference the new line ID
      const newTargetId = targetId + `_page${ $(element).closest(".task").index()  }`;
      element.setAttribute('target', newTargetId);
  }




});


$(document).on("click",".btn-rest-arrow",function  (e) {
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







$(document).on("click",".btn-verifier-arrow",function  (argument) {
 
 
if( $(this).find("span").text().trim() != "أتحقق" ){
  $("#btnnext").trigger("click");
  return
}


  var nbr_ans = 0;
  var nbr_good = 0;
  var nbr_tot = $(this).parent().find(".arw-an").length;
  console.log(nbr_tot)
  var data_ans = [];

  for (var ii = 0; ii < $(this).parent().find(".arw-an").length; ii++) {
    if($(this).parent().find(".arw-an").eq(ii).attr("myans")){
      nbr_ans+=1;
    }  
  }

if( !nbr_ans ){
  $(this).parent().find(".notification").hide();
  $(this).parent().find(".nowork").show();
  return;
}

for (var i = 0; i < $(this).parent().find(".arw-an").length; i++) {
  data_ans.push({
    id:$(this).parent().find(".arw-an").eq(i).attr("id"),
    x2:$(this).parent().find(".arw-an").eq(i).attr("x2"),
    y2:$(this).parent().find(".arw-an").eq(i).attr("y2"),
    myans:$(this).parent().find(".arw-an").eq(i).attr("myans"),
  })
    if($(this).parent().find(".arw-an").eq(i).attr("myans")){
    //  nbr_ans+=1;
    }  
     if( $(this).parent().find(".arw-an").eq(i).attr("myans") == $(this).parent().find(".arw-an").eq(i).attr("corans")  ){
      nbr_good+=1;
      $(this).parent().find(".arw-an").eq(i).attr("stroke","green");
       $(this).parent().find(".arw-an").eq(i).attr("marker-end","url(#triangle_green"+$(this).parent().find(".arw-an").eq(i).attr("id").match(/_page(\d+)/)[0])+")";
  
      }else{
        $(this).parent().find(".arw-an").eq(i).attr("stroke","red");
        $(this).parent().find(".arw-an").eq(i).attr("marker-end","url(#triangle_red"+$(this).parent().find(".arw-an").eq(i).attr("id").match(/_page(\d+)/)[0])+")";
  
      }

      
  };
  







  //$(".p2").attr("is_ans","true");
  //$(".p2").attr("data_ans",btoa(JSON.stringify(data_ans)));
  var score_act = parseInt((nbr_good / nbr_tot) * 100);
  //$(".p2").attr("score",score_act);
  //$(this).parent().find(".drag-help-arrw").css("pointer-events","none");
  //$(this).hide();
  //$(this).prev().hide();
  //$(this).next().show();
  
  /**/
  
  if(nbr_ans == 0){
    $(this).parent().find(".notification").hide();
    $(this).parent().find(".nowork").show();
    return;
  }
  
  if (nbr_good == 0){
    $(this).parent().find(".notification").hide();
    $(this).parent().find(".allfail").show();
    return;
  }
  
  if (nbr_good < nbr_tot){
    $(this).parent().find(".notification").hide();
    $(this).parent().find(".allfail").show();
    return;
  }
  
  if (nbr_good == nbr_tot){
    $(this).parent().find(".drag-help-arrw").css("pointer-events","none");
    $(this).parent().find(".notification").hide();
    $(this).parent().find(".success").show();


    $(this).find("span").html("    أواصل");
    $(this).find("svg").html(`<path style="transform: scale(0.5) translate(30px, 1px);" d="M21.2 45.2 0 24 21.2 2.8 25.2 6.85 8.05 24 25.2 41.15Z"></path>`)
    
    if( $(".doc-page-number span").first().text() == $(".doc-page-number span").last().text() ){
     $(this).hide();
    } 
    




    return;
  }
  
  
  })// btn-verifier...
  











function isHoveringOver(x, y, element) {
  const rect = element.getBoundingClientRect();
  return (
      x > rect.left &&
      x < rect.right &&
      y > rect.top &&
      y < rect.bottom
  );
}
/*
$(document).on("pointerout",".drop-zone",function  (e) {
 console.log("pointer out")
 $(".drop-zone").css("box-shadow","0px 3px 5px rgb(0 0 0 / 40%)");
  
})// body...


$(document).on("touchmove",".drop-zone",function  (e) {

console.log("poiter                              move")

if( movearrow ){
   $(".drop-zone").css("box-shadow","0px 3px 5px rgb(0 0 0 / 40%)");
   $(this).css("box-shadow","0 0 10px blue");
}

})// body...
*/


$('ellipse').each(function() {
  var cx = $(this).attr('cx');
  var cy = $(this).attr('cy');
  $(this).attr('_cx', cx);
  $(this).attr('_cy', cy);
});

var lX= 0;
var lY= 0;

$(document).on("pointermove",'.stage_draw_svg',function(e){


 
 e = e.originalEvent;

//the hover effect
 $(this).find('.drop-zone').each(function() {
  if (isHoveringOver(e.clientX, e.clientY, this)) {
    $(this).css("box-shadow","0 0 10px blue");
  } else {
    $(this).css("box-shadow","0px 3px 5px rgb(0 0 0 / 40%)");
    $(this).css("box-shadow","none");
  }
});







 // console.log(  e  );
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
    relX = relX * (480/845)
    relY = relY * (480/845)
    $("#c"+targetarrow).attr("cx",relX);
    $("#c"+targetarrow).attr("cy",relY);
    $("#"+targetarrow).attr("x2",relX);
    $("#"+targetarrow).attr("y2",relY);


}//end movearrow

})


var movearrow = false;
var targetarrow = null;
var arrow_answer = null;
 

$(document).on("pointerdown",'.drag-help-arrw',function(e){

  if(  $(this).parent().closest(".task").find(".nowork").css("display") == "block" ){
    $(this).parent().closest(".task").find(".nowork").hide();
  }

  movearrow = true;
  targetarrow = $(this).attr("target");
  $(this).css("pointer-events","none");
  $(".arw-an").attr("stroke","black");

$(".arw-an").each(function() {
    // Get the current element's id
    const elementId = $(this).attr("id");
    
    // Extract the page number from the id using a regular expression
    const pageNumberMatch = elementId.match(/_page(\d+)/);
    
    // If a match is found, update the marker-end attribute
    if (pageNumberMatch) {
        const pageNumber = pageNumberMatch[1];
        $(this).attr("marker-end", "url(#triangle_000" + `_page${pageNumber})`);
    }
});



  $(".p2 .notification").hide();
  $("body").css("overflow","hidden");

})

//drop zone
 $(document).on("pointerup",'.stage_draw_svg',function(e){

e = e.originalEvent;
$("body").css("overflow","");
var $elm = $(document.elementFromPoint( parseInt(e.clientX)   , parseInt(e.clientY)   ));

 
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





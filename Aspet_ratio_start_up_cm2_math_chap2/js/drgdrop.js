








$(document).on("click",".btn-verifier-dd",function  (argument) {
  
if( $(this).find("span").text().trim() != "أتحقق" ){
  $("#btnnext").trigger("click");
  return
}

 
var nbrfaute = 0;
  for (var i = 0; i < $(this).parent().find(".element-to-drag").length; i++) {


   
     
    
      if( $(this).parent().find(".element-to-drag").eq(i).attr("myans") == $(this).parent().find(".element-to-drag").eq(i).attr("ans")  ){
        $(this).parent().find(".element-to-drag").eq(i).css("box-shadow","0 0 10px green");

      }else{
        nbrfaute+= 1;
        $(this).parent().find(".element-to-drag").eq(i).css("box-shadow","0 0 10px red");
      }
   
   }//end for
  

if( nbrfaute > 0 ){
  

  $(this).parent().find(".notification").hide();
  $(this).parent().find(".allfail").show();
  return;

}else{
  
  $(this).parent().find(".notification").hide();
  $(this).parent().find(".success").show();


  $(this).find("span").html("    أواصل");
  $(this).find("svg").html(`<path style="transform: scale(0.5) translate(30px, 1px);" d="M21.2 45.2 0 24 21.2 2.8 25.2 6.85 8.05 24 25.2 41.15Z"></path>`)
  
  if( $(".doc-page-number span").first().text() == $(".doc-page-number span").last().text() ){
   $(this).hide();
  }

}



});











$('[class*="element-to-drag"]').each(function() {
  // Access the inline style attribute directly
  var inlineStyle = $(this).attr('style');

  // Create a regular expression to extract the top and left percentages
  var topMatch = inlineStyle.match(/top:\s*([\d.]+%)/);
  var leftMatch = inlineStyle.match(/left:\s*([\d.]+%)/);

  // If a match is found, assign it to the corresponding attribute
  if (topMatch) {
      $(this).attr('_otop', topMatch[1]);
  }
  if (leftMatch) {
      $(this).attr('_oleft', leftMatch[1]);
  }
});


var zoomFactor= (145.5 * $("img.helper-resize-ratio").width())/1230;
var corsf = (zoomFactor / 100);
/////////////////////////////////////////////////////////////////
interact('.element-to-drag')
  .draggable({
    restrict: {
          restriction: ".content-activite",
    },
    onstart: function (event) { 
      
      $(event.target).closest(".task").find(".notification").hide();


      $(event.target).closest(".task").find(".element-to-drag").css("box-shadow","none")
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
          $(event.target).css("left",$(event.target).attr("_oleft")+"");
          $(event.target).css("top",$(event.target).attr("_otop")+ "");
          $(event.target).attr("myans", "");
          console.log("Revert this element to the original position");
        }//end if


        console.log("drop event")


    }
  });
  function dragMoveListener (event) {
    var sF = corsf;
    ////console.log(corsf);
    if(!corsf){
    corsf = 1;
    }  
    sF = 1;
    ////console.log(corsf);
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
////console.log($(event.relatedTarget).attr('ans'));
////console.log($(event.target).attr('ans'));

$(event.relatedTarget).css("opacity","1");

////console.log('change top left')
////console.log(event.relatedTarget)

$(event.relatedTarget).css("left",$(event.relatedTarget).attr("_left")+"%");
$(event.relatedTarget).css("top",$(event.relatedTarget).attr("_top")+"%");
////console.log($(event.target).attr("_left"))
////console.log(event.relatedTarget)

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
      ////console.log('hello!');
      */
  },

});












$(document).on("click","input.ex-input",function (params) {
  
  $(this).closest(".task").find('input.ex-input').css("box-shadow","none")
  $(this).closest(".task").find(".notification").hide();
})//end 


$(document).on("click",".btn-verifier-input",function  (argument) {
 
 
if( $(this).find("span").text().trim() != "أتحقق" ){
  $("#btnnext").trigger("click");
  return
}



let allEmpty = true;

$('input.ex-input').each(function() {
    if ($(this).val().trim() !== '') {
        allEmpty = false;
        return false; // Break the loop if at least one input is not empty
    }
});

 if( allEmpty ){
  

  
  $(this).parent().find(".notification").hide();
  $(this).parent().find(".nowork").show();
  return;
 }


 let allCorrect = true;

 $('input.ex-input').each(function() {
     let userAnswer = $(this).val().trim();
     let correctAnswer = $(this).attr('ans');

     if (userAnswer === correctAnswer) {
         $(this).css('box-shadow', '0px 0px 10px green');
     } else {
         $(this).css('box-shadow', '0px 0px 10px red');
         allCorrect = false;
     }
 });


if(allCorrect){


   $(this).parent().find(".notification").hide();
  $(this).parent().find(".success").show();


  $(this).find("span").html("    أواصل");
  $(this).find("svg").html(`<path style="transform: scale(0.5) translate(30px, 1px);" d="M21.2 45.2 0 24 21.2 2.8 25.2 6.85 8.05 24 25.2 41.15Z"></path>`)
  
  if( $(".doc-page-number span").first().text() == $(".doc-page-number span").last().text() ){
   $(this).hide();
  }


}else{


  $(this).parent().find(".notification").hide();
  $(this).parent().find(".allfail").show();
  return;

}




 




  
  })// btn-verifier...
  








 

 

   
/*
setTimeout(function (params) {

  var header = $('header');
  header.css('transform', `translate(-500px, ${0 }px)`);

  var boundingBox = header[0].getBoundingClientRect();
  const translateY = getTranslateY(header);
  header.css('transform', `translate(-500px, ${-boundingBox.top }px)`);


}, 3000); // Recursively call the function
*/
/*

$(window).resize(function() {
  var header = $('header');

  header.css('transform', `translate(-500px, ${0 }px)`);

   var boundingBox = header[0].getBoundingClientRect();
  const translateY = getTranslateY(header);
  header.css('transform', `translate(-500px, ${-boundingBox.top }px)`);




});
*/
 




function getTranslateY(element) {
  const transform = $(element).css('transform');
  if (transform === 'none') {
      return 0;
  }
  const matrix = transform.match(/^matrix\((.+)\)$/)[1].split(', ');
  return parseFloat(matrix[5]);
}




$(document).on("click",".btn-verifier-qcm",function (params) {
  

if( $(this).find("span").text().trim() != "أتحقق" ){
  $("#btnnext").trigger("click");
  return
}


  if( $(this).parent().find('input[type="checkbox"]:checked').length == 0 ){
    $(this).parent().find(".notification.nowork").show();
      return
  }





 if( $(this).parent().find('input[type="checkbox"]:checked').attr("c") ){
  $(this).parent().find(".notification.success").show();
  $(this).parent().find('input[type="checkbox"]:checked').parent().css("box-shadow","0 0 10px green")

$(this).find("span").html("    أواصل");
$(this).find("svg").html(`<path style="transform: scale(0.5) translate(30px, 1px);" d="M21.2 45.2 0 24 21.2 2.8 25.2 6.85 8.05 24 25.2 41.15Z"></path>`)

if( $(".doc-page-number span").first().text() == $(".doc-page-number span").last().text() ){
 $(this).hide();
} 


 }else{
  $(this).parent().find(".notification.fail").show();  
  $(this).parent().find('input[type="checkbox"]:checked').parent().css("box-shadow","0 0 10px red")

 }

  
})//end 

$(document).on("click",".btn-rest",function  (e) {

  $(this).parent().find(".notification").hide();
  $(this).parent().find(".title-q").css("box-shadow","")
  
  $(this).parent().find("input").prop( "checked", false );
  
  })// btn-rest...
  


$(document).on("click",".title-q",function (params) {
  $(this).parent().find(".notification").hide();
  $(this).parent().find(".title-q").css("box-shadow","");

  $(this).parent().find('.title-q input').prop('checked', false);

  $(this).find('input').prop('checked', true);
  // Check the associated checkbox within the clicked .title-q
  // $(this).find('.title-q input').prop('checked', true);
})

 
var currentPage = 1; // Start on the first task
var totalPages = $(".task").length; // Total number of tasks

// Initialize display
$(".task").hide(); // Hide all tasks initially
$(".task").eq(currentPage - 1).show(); // Show the first task
updatePageNumber();

// Previous button click handler
$(document).on("click", "#btnPrev", function() {
    if (currentPage > 1) {
        $(".task").eq(currentPage - 1).hide(); // Hide current task
        currentPage--; // Decrement page
        $(".task").eq(currentPage - 1).show(); // Show previous task
        updatePageNumber();
    }
});

// Next button click handler
$(document).on("click", "#btnnext", function() {
    if (currentPage < totalPages) {
        $(".task").eq(currentPage - 1).hide(); // Hide current task
        currentPage++; // Increment page
        $(".task").eq(currentPage - 1).show(); // Show next task
        updatePageNumber();
    }
});

// Function to update the page number display
function updatePageNumber() {
  //console.log(currentPage)
    $(".doc-page-number span").first().text(currentPage);
    $(".doc-page-number span").last().text(totalPages);
}









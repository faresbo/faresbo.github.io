





$(document).on("click", ".btn-cursor", function () {
  $(".btn-tool").removeClass("active");
  $(this).addClass("active");
  $("body").removeClass();
  $("body").addClass("cursor");
});
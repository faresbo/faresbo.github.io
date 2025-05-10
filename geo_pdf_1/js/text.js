

$(document).on("click", ".btn-text", function () {
    $(".btn-tool").removeClass("active");
    $(this).addClass("active");
    $("body").removeClass();
    $("body").addClass("text-tool");
  });
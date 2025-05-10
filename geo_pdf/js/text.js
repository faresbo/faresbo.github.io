
/**/

let currentIndex = 0;
var listidtemps = [];

 

let currentPageNumber = 1;

function onPageChange() {
    const newPage = PDFViewerApplication.pdfViewer.currentPageNumber;
    if (newPage !== currentPageNumber) {
        currentPageNumber = newPage;
        currentIndex = 0;
        //console.log("User navigated to page:", currentPageNumber);
    }
}

// Poll or hook into PDF.js viewer updates
setInterval(onPageChange, 500);










$(document).on("keydown", function (e) {
    var selectedPage = PDFViewerApplication.pdfViewer.currentPageNumber;

  if (e.key === 'AltGraph') {

    var tosortElements = $('.page').eq(selectedPage - 1).find(".tosort");

    for (var i = 0; i < tosortElements.length; i++) {
        var element = tosortElements[i]; // This is a DOM element
        // If you want to use jQuery methods, wrap it with $()
        var $element = $(element);
        // Do something with $element or element
        listidtemps.push($element.attr('id'));
    }
    listidtemps = [...new Set(listidtemps)];
    //console.log(listidtemps);
    //$("#"+listidtemps[0]).hide();
    $("#" + listidtemps.join(", #")).hide();

 
  }




if (e.key === '<' && !e.ctrlKey) {
  listidtemps = [];
  var tosortElements = $('.page').eq(selectedPage - 1).find(".tosort");
  console.log(tosortElements.length)
  for (var i = 0; i < tosortElements.length; i++) {
      var element = tosortElements[i]; // This is a DOM element
      var $element = $(element);
      listidtemps.push($element.attr('id'));
  }
  listidtemps = [...new Set(listidtemps)];
  if(currentIndex === 0) {
    $("#" + listidtemps.join(", #")).hide();
  }  
  $("#" + listidtemps[currentIndex]).show();

  currentIndex = (currentIndex + 1) % listidtemps.length;
} 

if (e.key === '>' && !e.ctrlKey) {
  // Collect elements with class .tosort from the current page
  var tosortElements = $('.page').eq(selectedPage - 1).find(".tosort");

  // Update listidtemps with unique IDs
  for (var i = 0; i < tosortElements.length; i++) {
    var element = tosortElements[i];
    var $element = $(element);
    listidtemps.push($element.attr('id'));
  }
  listidtemps = [...new Set(listidtemps)]; // Remove duplicates
  // Move to previous index (looping correctly even when negative)
  currentIndex = (currentIndex - 1 + listidtemps.length) % listidtemps.length;

  // First, hide all elements after currentIndex
  for (var j = currentIndex ; j < listidtemps.length; j++) {
    $("#" + listidtemps[j]).hide();
  }

  // Show all elements from the start up to currentIndex
  for (var k = 0; k <= currentIndex; k++) {
    $("#" + listidtemps[k]).show();
  }
  console.log(currentIndex);
}

/**/
/*
  if (e.key === '<' && !e.ctrlKey) {
    var selectedPage = PDFViewerApplication.pdfViewer.currentPageNumber;
     const $boxtexts =    $('.page').eq(selectedPage-1).find(".layer-text .add-text-container")
    console.log($boxtexts.length)
    if ($boxtexts.length === 0) return;
     $boxtexts.hide();
     $('.page')
     .eq(selectedPage - 1)
     .find(".layer-text .add-text-container")
     .slice(0, currentIndex + 0) // select from index 0 to currentIndex inclusive
     .show();
      currentIndex = (currentIndex + 1) % $boxtexts.length;

  }

*/
  
  /*else   if (e.key === '>') {

  
    
  }else   if (e.key === 'AltGraph') {
    var selectedPage = PDFViewerApplication.pdfViewer.currentPageNumber;
    $('.page').eq(selectedPage-1).find(".layer-text .add-text-container").hide();
  }
  */
});



const toolbarOptions = [
  // First row
  [
    { 'direction': 'rtl' },
    'bold', 'italic', 'underline',
    { font: [] },{ size: [false,  'small', 'large', 'huge' ] },
  ],
  // Second row
  [    

    { align: [] },
    { color: [] }, { background: [] },
    { list: 'ordered' }, { list: 'bullet' },
    'clean'
  ]
];

/* 
var quill = new Quill('.add-text-container.active .my-editor-quill', {
  theme: 'snow', // Specify theme in configuration
  modules: {
      toolbar: toolbarOptions, // Pass the array of tools
    }
});
*/
var quill = '';


setInterval(function() {
  if (!$(parent.document).find("body").hasClass("text-tool")) {    
    $("body").removeClass("text-tool");
  } else {
    $("body").addClass("text-tool");
  }
}, 1000);


$(document).on('click', function (e) {

if($(parent.document).find("body").hasClass("text-tool")){

 

  if($(".drag-ended").length) {
      return
  }

  // Check if click happened outside the add-text-container
  if (!$(e.target).closest('.add-text-container').length  && $('.add-text-container.active').length)   { 
      ////console.log("click outside");
      var html_content = $('.add-text-container.active .my-editor-quill').html(); // Clear the editor content
      const content = quill.root.innerHTML;
      $(".add-text-container.active").html(` <div class="move handle" title="Move">
              <svg style="zoom: .7;fill:white;fill: white;transform: translate(5px, 5px);" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80 310-250l57-57 73 73v-206H235l73 72-58 58L80-480l169-169 57 57-72 72h206v-206l-73 73-57-57 170-170 170 170-57 57-73-73v206h205l-73-72 58-58 170 170-170 170-57-57 73-73H520v205l72-73 58 58L480-80Z"/></svg>
              </div>
              <div class="delete" title="Delete">
                  <svg style="zoom: .7;fill:white;fill: white;transform: translate(7px, 8px);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
              </div>
              <div class="content-text my-editor-quill "   id="">
             `+html_content+`
              </div>`);
              $(".add-text-container.active").removeClass("active ui-draggable")
              $(".add-text-container.active").find(".ql-editor").attr("contenteditable",false)

              $('.add-text-container').each(function () {
                  let editor = $(this).find('.my-editor-quill');
                  if (editor.length) {
                      let text = editor.text().trim();
                      if (text) {
                          //////console.log('Found text:', text);
                          // You can perform additional actions here if needed
                      } else {
                          $(this).remove()
                      }
                  }
              });

  }


}//has text-tool

});

$(document).on('click', '.layer-text', function (e) {





if($(parent.document).find("body").hasClass("text-tool")){



  if (!$(e.target).closest('.add-text-container').length  && ! $('.add-text-container').hasClass("active")) { 
      e.stopPropagation();

    ////console.log("click inside");
      var pageX = e.originalEvent.pageX;
      var pageY = e.originalEvent.pageY;
      var x = e.originalEvent.offsetX  / Ss;
      var y = e.originalEvent.offsetY  / Ss;
      
      $(this).append(`<div id="a${Math.floor(Date.now() ) }" class="tosort add-text-container active" style="height:50px;width:140px;top:`+y+`px;left:`+x+`px;">
              <div class="move handle" title="Move" style="">
                  <svg style="zoom: .7;fill:white;fill: white;transform: translate(5px, 5px);" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80 310-250l57-57 73 73v-206H235l73 72-58 58L80-480l169-169 57 57-72 72h206v-206l-73 73-57-57 170-170 170 170-57 57-73-73v206h205l-73-72 58-58 170 170-170 170-57-57 73-73H520v205l72-73 58 58L480-80Z"/></svg>
              </div>
              <div class="delete" title="Delete">
                  <svg style="zoom: .7;fill:white;fill: white;transform: translate(7px, 8px);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
              </div>
              <div class="content-text my-editor-quill" style="height:30px;width:140px;" id="">
                 
              </div>
          </div>`);
          activateDraggable(  $(".add-text-container.active")  )
          
       
  }//end if

}//has text-tool

})





$(document).on('mouseup', '.my-editor-quill', function () {
  if($(parent.document).find("body").hasClass("text-tool")){

  const $editor = $(this).find(".ql-editor"); // Get the editor that triggered the event
  const $container = $editor.closest('.add-text-container'); // Find the parent container
  // Synchronize the parent's dimensions with the editor's
  const editorWidth = $editor.outerWidth();
  const editorHeight = $editor.outerHeight();

  const containerWidth = $container.outerWidth();
  const containerHeight = $container.outerHeight();

  ////console.log(  editorWidth , containerWidth );
  ////console.log(  editorHeight , containerHeight );
  if( containerWidth > editorWidth && containerHeight >  editorHeight ){}
  $container.css({
      width: (editorWidth + 3) + 'px',
      height: (editorHeight + 3)  + 'px',
  });
}//has text-tool

});


$(document).on('click', '.add-text-container', function (e) {
  if($(parent.document).find("body").hasClass("text-tool")){

if( $('.add-text-container').hasClass("active") ){
  return;
}
  e.stopPropagation()


  if( !$(this).hasClass("active") ){
      $(this).addClass("active");
      activateDraggable($(this));
  }
}//has text-tool


});


function activateDraggable(elm) {
  
  quill = new Quill('.add-text-container.active .my-editor-quill', {
      theme: 'snow', // Specify theme in configuration
      modules: {
          toolbar: toolbarOptions, // Pass the array of tools
        }
  });
  quill.format('size', 'small');


  elm.draggable({
      handle: ".handle",
      drag: function(e, ui) {


        
    
          var x = e.pageX   ;
          var y = e.pageY  ;
  
  
          var parentElement = $(this).closest('.layer-text');
          var boundingBox = parentElement[0].getBoundingClientRect();
  
          var xoff = boundingBox.left  ;
          var yoff = boundingBox.top;
  
         //////console.log((x - xoff) / Ss);
         //////console.log(  ( y - yoff) / Ss  );

            ui.position.left = (x - xoff) / Ss  ;
            ui.position.top =  ( y - yoff) / Ss ;
      },
      stop: function(event, ui) {
          const $this = $(this);
          $this.addClass('drag-ended');

          // Remove the class after 1 second (1000ms)
          setTimeout(function() {
              $this.removeClass('drag-ended');
          }, 1000);
      }
  });

}//end activateDraggable
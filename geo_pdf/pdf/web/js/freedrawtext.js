
//color = $(".draw-color.active").attr("color");
//





var points = [];
var arr = [];
var arrx = [];
var arry = [];
var arrt = [];
var arrid = [];

var isDrawing = false; // Flag to track drawing state
var timeoutId; // Stores the timeout reference
var firsttstamp = 0;
 


$(document).on("pointerdown",".stage_draw_svg",function (e) {

  size = parseInt( $(parent.document).find(".btn-size.active .box-size").html() );
 
  var pageX = e.originalEvent.pageX;
  var pageY = e.originalEvent.pageY;
  var x = e.originalEvent.offsetX /  Ss;
  var y = e.originalEvent.offsetY /  Ss;
  if( !$(parent.document).find("body").hasClass("freedrawtext"))
    return

  const newPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  isDrawing = true; 
   clearTimeout(timeoutId);


  newPath.setAttribute("class", "x r");
  newPath.setAttribute("fill", $(parent.document).find(".btn-color.active div").css("background-color") );
  newPath.setAttribute("arrx", "");
  $(this)[0].appendChild(newPath);
  path = $(this)[0].querySelector("path:last-child");

  points = [[x, y, e.originalEvent.pressure]];

  arrx = [parseInt( pageX )];  firsttstamp = Date.now();
  arrt.push(0);

  arry = [parseInt(pageY)];
  render();



})//end stage_draw_svg



$(document).on("pointermove",".stage_draw_svg",function (e) {
  
  if( !$(parent.document).find("body").hasClass("freedrawtext"))
    return

  if (e.originalEvent.buttons === 1) {
    if (path) {
      var currentTimestamp = Date.now();
      var timeDiff = currentTimestamp - firsttstamp;
      arrt.push(timeDiff);
      var pageX = e.originalEvent.pageX;
      var pageY = e.originalEvent.pageY;
      var x = e.originalEvent.offsetX /  Ss;
      var y = e.originalEvent.offsetY /  Ss;

      arrx.push(parseInt(pageX));
      arry.push(parseInt(pageY));


      points = [...points, [x, y, e.originalEvent.pressure]];
      render();
    }
  }


})//end stage_draw_svg


$(document).on("pointerup",".stage_draw_svg",function (e) {
  if( !$(parent.document).find("body").hasClass("freedrawtext"))
    return
  
  if (path) {
 
var Mysvg =     $(this)[0];
    path = $(this)[0].querySelector("path:last-child");
    path.setAttribute("arrx",JSON.stringify(arrx));
    path.setAttribute("arry",JSON.stringify(arry));
    path.setAttribute("arrt",JSON.stringify(arrt));
    
    path = null;
    isDrawing = false;


    timeoutId = setTimeout(() => {
      if (!isDrawing) {
        var rPaths = $(this)[0].querySelectorAll('path.r');
        // Create a group element
        var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        // Move each path with class 'r' into the group and remove the class 'r'
        var options = {
          //  width : 2601,         //int, width of the writing area, default: undefined
          //height : 1301,        //int, height of the writing area, default: undefined
          
           language : "en", //string, language of input trace, default: "zh_TW"
           numOfReturn : 5,    //int, number of maximum returned results, default: undefined
          };
      console.log( rPaths )
   var T = [];
        rPaths.forEach(function(path) {

           if ( !path.getAttribute("arry") ){
            $("path").removeClass("r");

            return;
          }
          group.appendChild(path.cloneNode(true)); // Clone the path node
          path.parentNode.removeChild(path); // Remove the original path
          T.push([
              JSON.parse(path.getAttribute("arrx")),
              JSON.parse(path.getAttribute("arry")),
              JSON.parse(path.getAttribute("arrt"))
          ])


        });

        Mysvg.appendChild(group);

        handwriting.recognize( T , options , function  (e) {
          console.log(e);
          if( !e )
            return;
          if( e.length > 0 ){


              var lastG = group;
              var bbox = lastG.getBBox();
              var newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
              newText.setAttribute("x", bbox.x);
              newText.setAttribute("y", bbox.y + bbox.height); // Adjust y position based on your requirement
              var defaultFontSize = 16;
              newText.setAttribute("font-size", defaultFontSize + "px");
              function adjustFontSize() {
                  var textWidth = newText.getComputedTextLength(); // Measure the text width
                  var availableWidth = bbox.width; // Width of the bounding box
                  var scale = availableWidth / textWidth; // Calculate scale factor
                  var newFontSize = Math.floor(defaultFontSize * scale); // Calculate new font size
                  newText.setAttribute("font-size", newFontSize + "px"); // Set new font size
                  newText.setAttribute("style",'font-family: "Kaushan Script", cursive; font-size:'+newFontSize+'px;')

                  var bbox_ = newText.getBBox();
                  var borderRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                  borderRect.setAttribute("x", bbox_.x);
                  borderRect.setAttribute("y", bbox_.y);
                  borderRect.setAttribute("width", bbox_.width);
                  borderRect.setAttribute("height", bbox_.height);
                  borderRect.setAttribute("fill", "none"); // No fill
                  borderRect.setAttribute("stroke", "blue"); // Border color
                  borderRect.setAttribute("stroke-width", "2"); // Border width
                  //Mysvg.appendChild(borderRect);
              }
              newText.setAttribute("fill",  $(parent.document).find(".btn-color.active div").css("background-color"));
              newText.setAttribute("class", "x" );
              newText.textContent = e[0];
              setTimeout(adjustFontSize, 100); // Adjust this timeout as needed
              lastG.parentNode.removeChild(lastG);
              Mysvg.appendChild(newText);
          }else{
            var rPaths = $(this)[0].querySelectorAll('path.r');
            rPaths.forEach(function(path) {
              $(path).removeClass("r")
            })

          }



        });// body...


        console.log(T);

        var pathto =  Mysvg.querySelector("g:last-child");
        var bbox = pathto.getBBox();
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", bbox.x);
        rect.setAttribute("y", bbox.y);
        rect.setAttribute("width", bbox.width);
        rect.setAttribute("height", bbox.height);
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", "red");
         //Mysvg.appendChild(rect);






      }
    }, 1500);


  }
})//end stage_draw_svg









 


//  $("#bkg-free-draw").css("fill",'red');



$(document).on("click", ".btn-draw-text", function () {

  $(".btn-tool").removeClass("active");
  $(this).addClass("active");
  $("body").removeClass();
  $("body").addClass("freedrawtext");
  //console.log( $("body").css("background-color") );

});



function handlePointerDown(e) {
  
} //end 



function handlePointerUp(e) {
  
} //end handlePointerUp



var points = [];

var arr = [];
var arrx = [];
var arry = [];
var arrt = [];
var arrid = [];




var svg = document.querySelector("#svgElement");
var path = svg.querySelector("path");
var path = null;
var color = "white";
var size = "5";
/*
$(document).on("pointerdown", ".freedraw #svgElement", function (e) {

});
*/

svg.addEventListener("pointerdown", handlePointerDown);
svg.addEventListener("pointermove", handlePointerMove);
svg.addEventListener("pointerup", handlePointerUp);


var isDrawing = false; // Flag to track drawing state
var timeoutId; // Stores the timeout reference
var firsttstamp = 0;

function handlePointerDown(e) { 
 
  if( !$("body").hasClass("freedrawtext"))
    return
  const newPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  isDrawing = true;
  clearTimeout(timeoutId);

  newPath.setAttribute("class", "x r");
  newPath.setAttribute("fill", color);
  newPath.setAttribute("arrx", "");
  svg.appendChild(newPath);
  path = document.querySelector("#svgElement > path:last-child");
  points = [[e.pageX, e.pageY, e.pressure]];

  arrx = [parseInt(e.pageX)];  firsttstamp = Date.now();
  arrt.push(0);

  arry = [parseInt(e.pageY)];
  render();
 } //end handlePointerMove



/*
$(document).on("pointermove", ".freedraw #svgElement", function (e) {
 
});
*/
function handlePointerMove(e) { 
  
  if( !$("body").hasClass("freedrawtext"))
    return

  if (e.buttons === 1) {
    if (path) {
      var currentTimestamp = Date.now();
      var timeDiff = currentTimestamp - firsttstamp;
      arrt.push(timeDiff);
      arrx.push(parseInt(e.pageX));
      arry.push(parseInt(e.pageY));


      points = [...points, [e.pageX, e.pageY, e.pressure]];
      render();
    }
  }
} //end handlePointerMove





function handlePointerUp(e) { 
  
  if( !$("body").hasClass("freedrawtext"))
    return
  
  if (path) {
 
    path = document.querySelector("#svgElement > path:last-child");
    path.setAttribute("arrx",JSON.stringify(arrx));
    path.setAttribute("arry",JSON.stringify(arry));
    path.setAttribute("arrt",JSON.stringify(arrt));
    
    path = null;
    isDrawing = false;


    timeoutId = setTimeout(() => {
      if (!isDrawing) {
        var rPaths = document.querySelectorAll('#svgElement > path.r');
        // Create a group element
        var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        // Move each path with class 'r' into the group and remove the class 'r'
        var options = {
          //  width : 2601,         //int, width of the writing area, default: undefined
          //height : 1301,        //int, height of the writing area, default: undefined
          
           language : "en", //string, language of input trace, default: "zh_TW"
           numOfReturn : 5,    //int, number of maximum returned results, default: undefined
          };
      
   var T = [];
        rPaths.forEach(function(path) {

          group.setAttribute("class", "x");
  group.appendChild(path.cloneNode(true)); // Clone the path node


          path.parentNode.removeChild(path); // Remove the original path
          T.push([
            JSON.parse(path.getAttribute("arrx")),
            JSON.parse(path.getAttribute("arry")),
            JSON.parse(path.getAttribute("arrt"))
          ])
        });

        svg.appendChild(group);

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
              newText.setAttribute("style",'font-family: "Kaushan Script", cursive;')
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
                  borderRect.setAttribute("class", "x");

                  document.querySelector("#svgElement").appendChild(borderRect);
              }
              newText.setAttribute("fill", color);
              newText.setAttribute("class", "x");

              newText.textContent = e[0];
              setTimeout(adjustFontSize, 100); // Adjust this timeout as needed
              //lastG.parentNode.removeChild(lastG);
              document.querySelector("#svgElement").appendChild(newText);
          }



        });// body...


        console.log(T);

        var pathto =  document.querySelector("#svgElement > g:last-child");
        var bbox = pathto.getBBox();
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", bbox.x);
        rect.setAttribute("y", bbox.y);
        rect.setAttribute("width", bbox.width);
        rect.setAttribute("height", bbox.height);
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", "red");
        rect.setAttribute("class","x");
         svg.appendChild(rect);






      }
    }, 2000);


  }
} //end handlePointerMove





/*
$(document).on("pointerup", ".freedraw #svgElement", function (e) {

  
});
*/

function render() {
  path.setAttribute(
    "d",
    getSvgPathFromStroke(
      ae(points, {
        size: size,
        thinning: 0.5,
        smoothing: 0.5,
        streamline: 0.5,
      })
    )
  );
}

// @ref https://github.com/steveruizok/perfect-freehand#rendering
function getSvgPathFromStroke(stroke) {
  if (!stroke.length) return "";

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"]
  );

  d.push("Z");
  return d.join(" ");
}

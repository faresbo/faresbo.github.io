




$(document).on("click", ".btn-draw", function () {
  $(".btn-tool").removeClass("active");
  $(this).addClass("active");
  $("body").removeClass();
  $("body").addClass("freedraw");
});

 





var points = [];

var svg = document.querySelector("#svgElement");
//console.log(svg);
var path = svg.querySelector("path");
var path = null;
var color = "white";
var size = 5;



/*
$(document).on("pointerdown", ".freedraw #svgElement", function (e) {

});
*/

svg.addEventListener("pointerdown", handlePointerDown);
svg.addEventListener("pointermove", handlePointerMove);
svg.addEventListener("pointerup", handlePointerUp);


function handlePointerDown(e) { 
  if( !$("body").hasClass("freedraw"))
    return
  const newPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  newPath.setAttribute("class", "x");
  newPath.setAttribute("fill", color);
  svg.appendChild(newPath);
  path = document.querySelector("#svgElement > path:last-child");
  points = [[e.pageX, e.pageY, e.pressure]];
  
  render();
 } //end handlePointerMove



/*
$(document).on("pointermove", ".freedraw #svgElement", function (e) {
 
});
*/
function handlePointerMove(e) { 
  
console.log( "Ter fer" );

  if( !$("body").hasClass("freedraw"))
    return

  if (e.buttons === 1) {
    if (path) {
      points = [...points, [e.pageX, e.pageY, e.pressure]];
      render();
    }
  }
} //end handlePointerMove




function handlePointerUp(e) { 
  
  if( !$("body").hasClass("freedraw"))
    return
  
  if (path) {
    path = null;
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

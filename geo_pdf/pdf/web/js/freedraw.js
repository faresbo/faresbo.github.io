
//color = $(".draw-color.active").attr("color");
//




var points = [];

 var path ="";
var path = null;
var color = "red";
var size = 12;



$(document).on("pointerdown",".stage_draw_svg",function (e) {



  
   size = parseInt( $(parent.document).find(".btn-size.active .box-size").html() );
  // console.log( Ss )
     var pageX = e.originalEvent.pageX;
     var pageY = e.originalEvent.pageY;
    var x = e.originalEvent.offsetX /  Ss;
  var y = e.originalEvent.offsetY /  Ss;
/*
    const rectt = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectt.setAttribute('class',  "x"); // X position
    rectt.setAttribute('x',  x*Ss); // X position
    rectt.setAttribute('y',  y*Ss); // Y position
    rectt.setAttribute('width', 5); // Width of the rectangle
    rectt.setAttribute('height', 5); // Height of the rectangle
    rectt.setAttribute('fill', 'blue'); // Fill color
    last_svg_draw[0].appendChild(rectt);
*/
 


  if( !$(parent.document).find("body").hasClass("freedraw"))
    return

    const newPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
  );
    newPath.setAttribute("class", "x tosort");
    newPath.setAttribute("id","a"+ Math.floor(Date.now() )  ); //  
    newPath.setAttribute("fill",  $(parent.document).find(".btn-color.active div").css("background-color")  );
   // newPath.setAttribute("fill",  "red"  );
   $(this)[0].appendChild(newPath);
path = newPath;

    points = [[x*Ss, y*Ss, e.originalEvent.pressure]];
 
    render();





})//end stage_draw_svg




$(document).on("pointermove",".stage_draw_svg",function (e) {
  size = parseInt( $(parent.document).find(".btn-size.active .box-size").html() );

   if( !$(parent.document).find("body").hasClass("freedraw"))
    return

    //console.log( e.originalEvent.buttons );
    //console.log( e.originalEvent.pageX,e.originalEvent.pageY );

    //if (e.originalEvent.buttons === 1) {
      if (path) {
       // //console.log(  Ss );
       // //console.log( e.originalEvent.pageX );
        var pageX = e.originalEvent.pageX;
        var pageY = e.originalEvent.pageY;
        var x = e.originalEvent.offsetX  / Ss;
        var y = e.originalEvent.offsetY  / Ss;
       // //console.log(x , Ss);
        points = [...points, [x*Ss, y*Ss, e.originalEvent.pressure]];
        //console.log( points );
        render();
      }
    //}
})//end stage_draw_svg






$(document).on("pointerup",".stage_draw_svg",function (e) {

  
  if( !$(parent.document).find("body").hasClass("freedraw"))
    return

if (path) {
  path = null;
}
})//end stage_draw_svg











function render() {
//console.log(  size )
  
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

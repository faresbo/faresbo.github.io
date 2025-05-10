
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
 


var _points = [];

var _svg = document.querySelector("#svgElement");
var _path = "";
var _path = null;
var color = "white";
var size = "5";


var arr = [];
var arrx = [];
var arry = [];
var arrt = [];
var arrid = [];



$(document).on("pointerdown",".stage_draw_svg",function (e) {

  size = parseInt( $(parent.document).find(".btn-size.active .box-size").html() );
  color = $(parent.document).find(".btn-color.active div").css("background-color")  
 
  var pageX = e.originalEvent.pageX;
  var pageY = e.originalEvent.pageY;
  var x = e.originalEvent.offsetX /  Ss;
  var y = e.originalEvent.offsetY /  Ss;
  if( !$(parent.document).find("body").hasClass("shapedraw"))
    return

  const newPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  isDrawing = true; 
   clearTimeout(timeoutId);
   const uniqueId =
   Date.now().toString(36) + Math.random().toString(36).substr(2);
   arrid.push(uniqueId);
   newPath.setAttribute("id", ""+uniqueId);

  newPath.setAttribute("class", "x r");
  newPath.setAttribute("fill", $(parent.document).find(".btn-color.active div").css("background-color") );
  newPath.setAttribute("arrx", "");
  $(this)[0].appendChild(newPath);
  path = $(this)[0].querySelector("path:last-child");

  points = [[x*Ss, y*Ss, e.originalEvent.pressure]];

  arrx = [parseInt( pageX )];  firsttstamp = Date.now();
  arrt.push(0);

  arry = [parseInt(pageY)];
  render();



})//end stage_draw_svg



$(document).on("pointermove",".stage_draw_svg",function (e) {
  
  if( !$(parent.document).find("body").hasClass("shapedraw"))
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


      points = [...points, [x*Ss, y*Ss, e.originalEvent.pressure]];
      render();
    }
  }


})//end stage_draw_svg


$(document).on("pointerup",".stage_draw_svg",function (e) {
  var _svg_ = $(this)[0];
  if (  $(parent.document).find("body").hasClass("shapedraw") ) {
    /*
    if (Math.abs(outlines.PathLength(toRecognize)) > 1e-5) {
      alert("")
    }*/
    _path = null;


    isDrawing = false;
    // Start a timeout that will remove paths after 1 second of inactivity
    timeoutId = setTimeout(() => {
      if (!isDrawing) {
         recoGoogle(arr, arrx,arry,arrt, arrid  , _svg_ );
        arr = [];
        arrid = [];
        arrx = [];
        arry = [];
       }
    }, 500);


  }
});

function _render() {
  _path.setAttribute(
    "d",
    getSvgPathFromStroke(
      ae(_points, {
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





async function recoGoogle(arr, arrx, arry, arrt, arrid , _svg_) {
  var p1 = arr[0];
  var p2 = arr[arr.length - 1];  
  var _p1 = arr[0];
  var _p2 = arr[arr.length - 1];
 
  var options = {
    language: "en", //string, language of input trace, default: "zh_TW"
    numOfReturn: 5, //int, number of maximum returned results, default: undefined
  };

  handwriting.recognize([[arrx, arry, arrt]], options, function (e) {
    console.log(e);
    const characters = e;
    const coloredRegex =
      /[\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}\u{1F9B6}-\u{1F9B9}\u{1F9BB}-\u{1F9C0}\u{1F9C1}-\u{1F9C3}\u{1F9C5}-\u{1F9C6}\u{1F9C8}-\u{1F9CA}\u{1F9CD}\u{1F9CF}\u{1F9D1}-\u{1F9DD}\u{1F9DF}\u{1F9E0}\u{1F9E1}\u{1F9E2}-\u{1F9E7}\u{1F9E8}-\u{1F9EF}\u{1F9F0}\u{1F9F1}\u{1F9F2}-\u{1F9FF}\u{1F6F3}-\u{1F6F8}\u{1F6F9}\u{1F6FA}\u{1F6FB}\u{1F6FC}\u{1F6FD}-\u{1F6FF}]/u;

    // Filter out colored characters
    e = characters.filter((char) => !coloredRegex.test(char));

 
    var shape_name = "";
    if (e[0] == "o" || e[0] == "。" || e[0] == "0"  || e[0] == "O" ) {
      shape_name = "Circle";
    }

    if (
      e[0] == "ロ" ||
      e[0] == "口" ||
      e[0] == "▫" ||
      e[0] == "▫" ||
      e[0] == "◻" ||
      e[0] == "☐" ||
      e[0] == "◾" ||
      e[0] == "◼" ||
      e[0] == "⬜" ||
      e[0] == "🗀" ||
      e[1] == "ロ" ||
      e[1] == "口" ||
      e[1] == "▫" ||
      e[1] == "▫" ||
      e[1] == "◻" ||
      e[1] == "☐" ||
      e[1] == "◾" ||
      e[1] == "◼" ||
      e[1] == "⬜"
    ) {
      shape_name = "Rectangle";
    }
    ["ー", "一", "-", "_", "─"];
    if (
      e[0] == "ー" ||
      e[0] == "一" ||
      e[0] == "─" ||
      e[0] == "\\" ||
      e[1] == "\\" ||
      e[0] == "/" ||
      e[1] == "/" ||
      e[0] == "／" ||
      e[1] == "／" ||
      e[0] == "|" ||
      e[1] == "|" ||
      e[0] == "।'" ||
      e[1] == "।'" 
    ) {
      shape_name = "Line";
    }
    if (
      e[0] == "→" ||
      e[1] == "→" ||
      e[0] == "⟶" ||
      e[1] == "⟶" ||
      e[0] == "➡" ||
      e[1] == "➡" ||
      e[0] == "⇀" ||
      e[1] == "⇀" ||

      e[0] == "乛" ||
      e[1] == "乛" ||
      e[0] == "⊸" ||
      e[1] == "⊸" ||
      e[0] == "⇝" ||
      e[1] == "⇝'" ||
      e[0] == "⇢'" ||
      e[0] == "↘" ||
      e[1] == "↘" ||
      e[0] == "↗" ||
      e[1] == "↗" ||
      e[0] == "↓" ||
      e[1] == "↓" ||
      e[0] == "↑" ||
      e[1] == "↑" ||
      e[0] == "โ" ||
      e[1] == "โ" ||
      e[0] == "↖" ||
      e[1] == "↖" ||
      e[0] == "←" ||
      e[1] == "←" ||
      e[0] == "↙" ||
      e[1] == "↙" 
    ) {

      shape_name = "Arrow";
    }



    if (shape_name == "") {
      console.log("Shape not recoginzed!");
      return;
    }

    var pathIds = arrid;
     var boundingBoxes = [];

    for (var i = 0; i < pathIds.length; i++) {
      var path = document.getElementById(pathIds[i]);
 
      var bbox = path.getBBox();
      boundingBoxes.push(bbox);
      path.remove();
    }
 

    drawPredictShape(shape_name, boundingBoxes, _p1, _p2 , arr , _svg_);
  });
} //end recoGoogle

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

var split = function (arr) {
  var splitHelper = function (arr, odd, even) {
    if (arr.length == 0) {
      return { odd: odd, even: even };
    }
    odd.push(parseFloat(arr.splice(0, 1)[0]));
    arr[0] && even.push(parseFloat(arr.splice(0, 1)[0]));
    return splitHelper(arr, odd, even);
  };
  return splitHelper(arr, [], []);
};

function googleRecoApiText(arr) {
  return new Promise((resolve) => {
    // Define the URL for the request
    const url =
      "https://www.google.com.tw/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8";

    // Define the data to be sent
    const data = {
      options: "enable_pre_space",
      requests: [
        {
          writing_guide: {
            writing_area_width: undefined,
            writing_area_height: undefined,
          },
          pre_context: "",
          max_num_results: 10,
          language: "en-EN",
          ink: [
            arr,
            // Add your ink data here
          ],
        },
      ],
    };

    // Configure the request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // Send the request using Fetch API
    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          resolve("Network response was not ok");
        }
        return response.json(); // Parse response JSON
      })
      .then((data) => {
        // Handle the response data
        resolve(data);
      })
      .catch((error) => {
        // Handle errors
        resolve("There was a problem with the fetch operation:", error);
      });
  });
} //end googleRecoApiText

var diff_square = {
  2500: {
    name: "BOX DRAWINGS LIGHT HORIZONTAL",
  },
  2501: {
    name: "BOX DRAWINGS HEAVY HORIZONTAL",
  },
  2502: {
    name: "BOX DRAWINGS LIGHT VERTICAL",
  },
  2503: {
    name: "BOX DRAWINGS HEAVY VERTICAL",
  },
  2504: {
    name: "BOX DRAWINGS LIGHT TRIPLE DASH HORIZONTAL",
  },
  2505: {
    name: "BOX DRAWINGS HEAVY TRIPLE DASH HORIZONTAL",
  },
  2506: {
    name: "BOX DRAWINGS LIGHT TRIPLE DASH VERTICAL",
  },
  2507: {
    name: "BOX DRAWINGS HEAVY TRIPLE DASH VERTICAL",
  },
  2508: {
    name: "BOX DRAWINGS LIGHT QUADRUPLE DASH HORIZONTAL",
  },
  2509: {
    name: "BOX DRAWINGS HEAVY QUADRUPLE DASH HORIZONTAL",
  },
  2510: {
    name: "BOX DRAWINGS LIGHT DOWN AND LEFT",
  },
  2511: {
    name: "BOX DRAWINGS DOWN LIGHT AND LEFT HEAVY",
  },
  2512: {
    name: "BOX DRAWINGS DOWN HEAVY AND LEFT LIGHT",
  },
  2513: {
    name: "BOX DRAWINGS HEAVY DOWN AND LEFT",
  },
  2514: {
    name: "BOX DRAWINGS LIGHT UP AND RIGHT",
  },
  2515: {
    name: "BOX DRAWINGS UP LIGHT AND RIGHT HEAVY",
  },
  2516: {
    name: "BOX DRAWINGS UP HEAVY AND RIGHT LIGHT",
  },
  2517: {
    name: "BOX DRAWINGS HEAVY UP AND RIGHT",
  },
  2518: {
    name: "BOX DRAWINGS LIGHT UP AND LEFT",
  },
  2519: {
    name: "BOX DRAWINGS UP LIGHT AND LEFT HEAVY",
  },
  2520: {
    name: "BOX DRAWINGS VERTICAL HEAVY AND RIGHT LIGHT",
  },
  2521: {
    name: "BOX DRAWINGS DOWN LIGHT AND RIGHT UP HEAVY",
  },
  2522: {
    name: "BOX DRAWINGS UP LIGHT AND RIGHT DOWN HEAVY",
  },
  2523: {
    name: "BOX DRAWINGS HEAVY VERTICAL AND RIGHT",
  },
  2524: {
    name: "BOX DRAWINGS LIGHT VERTICAL AND LEFT",
  },
  2525: {
    name: "BOX DRAWINGS VERTICAL LIGHT AND LEFT HEAVY",
  },
  2526: {
    name: "BOX DRAWINGS UP HEAVY AND LEFT DOWN LIGHT",
  },
  2527: {
    name: "BOX DRAWINGS DOWN HEAVY AND LEFT UP LIGHT",
  },
  2528: {
    name: "BOX DRAWINGS VERTICAL HEAVY AND LEFT LIGHT",
  },
  2529: {
    name: "BOX DRAWINGS DOWN LIGHT AND LEFT UP HEAVY",
  },
  2530: {
    name: "BOX DRAWINGS DOWN HEAVY AND HORIZONTAL LIGHT",
  },
  2531: {
    name: "BOX DRAWINGS RIGHT LIGHT AND LEFT DOWN HEAVY",
  },
  2532: {
    name: "BOX DRAWINGS LEFT LIGHT AND RIGHT DOWN HEAVY",
  },
  2533: {
    name: "BOX DRAWINGS HEAVY DOWN AND HORIZONTAL",
  },
  2534: {
    name: "BOX DRAWINGS LIGHT UP AND HORIZONTAL",
  },
  2535: {
    name: "BOX DRAWINGS LEFT HEAVY AND RIGHT UP LIGHT",
  },
  2536: {
    name: "BOX DRAWINGS RIGHT HEAVY AND LEFT UP LIGHT",
  },
  2537: {
    name: "BOX DRAWINGS UP LIGHT AND HORIZONTAL HEAVY",
  },
  2538: {
    name: "BOX DRAWINGS UP HEAVY AND HORIZONTAL LIGHT",
  },
  2539: {
    name: "BOX DRAWINGS RIGHT LIGHT AND LEFT UP HEAVY",
  },
  2540: {
    name: "BOX DRAWINGS UP HEAVY AND DOWN HORIZONTAL LIGHT",
  },
  2541: {
    name: "BOX DRAWINGS DOWN HEAVY AND UP HORIZONTAL LIGHT",
  },
  2542: {
    name: "BOX DRAWINGS VERTICAL HEAVY AND HORIZONTAL LIGHT",
  },
  2543: {
    name: "BOX DRAWINGS LEFT UP HEAVY AND RIGHT DOWN LIGHT",
  },
  2544: {
    name: "BOX DRAWINGS RIGHT UP HEAVY AND LEFT DOWN LIGHT",
  },
  2545: {
    name: "BOX DRAWINGS LEFT DOWN HEAVY AND RIGHT UP LIGHT",
  },
  2546: {
    name: "BOX DRAWINGS RIGHT DOWN HEAVY AND LEFT UP LIGHT",
  },
  2547: {
    name: "BOX DRAWINGS DOWN LIGHT AND UP HORIZONTAL HEAVY",
  },
  2548: {
    name: "BOX DRAWINGS UP LIGHT AND DOWN HORIZONTAL HEAVY",
  },
  2549: {
    name: "BOX DRAWINGS RIGHT LIGHT AND LEFT VERTICAL HEAVY",
  },
  2550: {
    name: "BOX DRAWINGS DOUBLE HORIZONTAL",
  },
  2551: {
    name: "BOX DRAWINGS DOUBLE VERTICAL",
  },
  2552: {
    name: "BOX DRAWINGS DOWN SINGLE AND RIGHT DOUBLE",
  },
  2553: {
    name: "BOX DRAWINGS DOWN DOUBLE AND RIGHT SINGLE",
  },
  2554: {
    name: "BOX DRAWINGS DOUBLE DOWN AND RIGHT",
  },
  2555: {
    name: "BOX DRAWINGS DOWN SINGLE AND LEFT DOUBLE",
  },
  2556: {
    name: "BOX DRAWINGS DOWN DOUBLE AND LEFT SINGLE",
  },
  2557: {
    name: "BOX DRAWINGS DOUBLE DOWN AND LEFT",
  },
  2558: {
    name: "BOX DRAWINGS UP SINGLE AND RIGHT DOUBLE",
  },
  2559: {
    name: "BOX DRAWINGS UP DOUBLE AND RIGHT SINGLE",
  },
  2560: {
    name: "BOX DRAWINGS DOUBLE VERTICAL AND RIGHT",
  },
  2561: {
    name: "BOX DRAWINGS VERTICAL SINGLE AND LEFT DOUBLE",
  },
  2562: {
    name: "BOX DRAWINGS VERTICAL DOUBLE AND LEFT SINGLE",
  },
  2563: {
    name: "BOX DRAWINGS DOUBLE VERTICAL AND LEFT",
  },
  2564: {
    name: "BOX DRAWINGS DOWN SINGLE AND HORIZONTAL DOUBLE",
  },
  2565: {
    name: "BOX DRAWINGS DOWN DOUBLE AND HORIZONTAL SINGLE",
  },
  2566: {
    name: "BOX DRAWINGS DOUBLE DOWN AND HORIZONTAL",
  },
  2567: {
    name: "BOX DRAWINGS UP SINGLE AND HORIZONTAL DOUBLE",
  },
  2568: {
    name: "BOX DRAWINGS UP DOUBLE AND HORIZONTAL SINGLE",
  },
  2569: {
    name: "BOX DRAWINGS DOUBLE UP AND HORIZONTAL",
  },
  2570: {
    name: "BOX DRAWINGS LIGHT ARC UP AND RIGHT",
  },
  2571: {
    name: "BOX DRAWINGS LIGHT DIAGONAL UPPER RIGHT TO LOWER LEFT",
  },
  2572: {
    name: "BOX DRAWINGS LIGHT DIAGONAL UPPER LEFT TO LOWER RIGHT",
  },
  2573: {
    name: "BOX DRAWINGS LIGHT DIAGONAL CROSS",
  },
  2574: {
    name: "BOX DRAWINGS LIGHT LEFT",
  },
  2575: {
    name: "BOX DRAWINGS LIGHT UP",
  },
  2576: {
    name: "BOX DRAWINGS LIGHT RIGHT",
  },
  2577: {
    name: "BOX DRAWINGS LIGHT DOWN",
  },
  2578: {
    name: "BOX DRAWINGS HEAVY LEFT",
  },
  2579: {
    name: "BOX DRAWINGS HEAVY UP",
  },
  2580: {
    name: "UPPER HALF BLOCK",
  },
  2581: {
    name: "LOWER ONE EIGHTH BLOCK",
  },
  2582: {
    name: "LOWER ONE QUARTER BLOCK",
  },
  2583: {
    name: "LOWER THREE EIGHTHS BLOCK",
  },
  2584: {
    name: "LOWER HALF BLOCK",
  },
  2585: {
    name: "LOWER FIVE EIGHTHS BLOCK",
  },
  2586: {
    name: "LOWER THREE QUARTERS BLOCK",
  },
  2587: {
    name: "LOWER SEVEN EIGHTHS BLOCK",
  },
  2588: {
    name: "FULL BLOCK",
  },
  2589: {
    name: "LEFT SEVEN EIGHTHS BLOCK",
  },
  2590: {
    name: "RIGHT HALF BLOCK",
  },
  2591: {
    name: "LIGHT SHADE",
  },
  2592: {
    name: "MEDIUM SHADE",
  },
  2593: {
    name: "DARK SHADE",
  },
  2594: {
    name: "UPPER ONE EIGHTH BLOCK",
  },
  2595: {
    name: "RIGHT ONE EIGHTH BLOCK",
  },
  2596: {
    name: "QUADRANT LOWER LEFT",
  },
  2597: {
    name: "QUADRANT LOWER RIGHT",
  },
  2598: {
    name: "QUADRANT UPPER LEFT",
  },
  2599: {
    name: "QUADRANT UPPER LEFT AND LOWER LEFT AND LOWER RIGHT",
  },
  "22bf": {
    name: "RIGHT TRIANGLE",
  },
  "23b8": {
    name: "LEFT VERTICAL BOX LINE",
  },
  "23b9": {
    name: "RIGHT VERTICAL BOX LINE",
  },
  "23ba": {
    name: "HORIZONTAL SCAN LINE-1",
  },
  "23bb": {
    name: "HORIZONTAL SCAN LINE-3",
  },
  "23bc": {
    name: "HORIZONTAL SCAN LINE-7",
  },
  "23bd": {
    name: "HORIZONTAL SCAN LINE-9",
  },
  "250a": {
    name: "BOX DRAWINGS LIGHT QUADRUPLE DASH VERTICAL",
  },
  "250b": {
    name: "BOX DRAWINGS HEAVY QUADRUPLE DASH VERTICAL",
  },
  "250c": {
    name: "BOX DRAWINGS LIGHT DOWN AND RIGHT",
  },
  "250d": {
    name: "BOX DRAWINGS DOWN LIGHT AND RIGHT HEAVY",
  },
  "250e": {
    name: "BOX DRAWINGS DOWN HEAVY AND RIGHT LIGHT",
  },
  "250f": {
    name: "BOX DRAWINGS HEAVY DOWN AND RIGHT",
  },
  "251a": {
    name: "BOX DRAWINGS UP HEAVY AND LEFT LIGHT",
  },
  "251b": {
    name: "BOX DRAWINGS HEAVY UP AND LEFT",
  },
  "251c": {
    name: "BOX DRAWINGS LIGHT VERTICAL AND RIGHT",
  },
  "251d": {
    name: "BOX DRAWINGS VERTICAL LIGHT AND RIGHT HEAVY",
  },
  "251e": {
    name: "BOX DRAWINGS UP HEAVY AND RIGHT DOWN LIGHT",
  },
  "251f": {
    name: "BOX DRAWINGS DOWN HEAVY AND RIGHT UP LIGHT",
  },
  "252a": {
    name: "BOX DRAWINGS UP LIGHT AND LEFT DOWN HEAVY",
  },
  "252b": {
    name: "BOX DRAWINGS HEAVY VERTICAL AND LEFT",
  },
  "252c": {
    name: "BOX DRAWINGS LIGHT DOWN AND HORIZONTAL",
  },
  "252d": {
    name: "BOX DRAWINGS LEFT HEAVY AND RIGHT DOWN LIGHT",
  },
  "252e": {
    name: "BOX DRAWINGS RIGHT HEAVY AND LEFT DOWN LIGHT",
  },
  "252f": {
    name: "BOX DRAWINGS DOWN LIGHT AND HORIZONTAL HEAVY",
  },
  "253a": {
    name: "BOX DRAWINGS LEFT LIGHT AND RIGHT UP HEAVY",
  },
  "253b": {
    name: "BOX DRAWINGS HEAVY UP AND HORIZONTAL",
  },
  "253c": {
    name: "BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL",
  },
  "253d": {
    name: "BOX DRAWINGS LEFT HEAVY AND RIGHT VERTICAL LIGHT",
  },
  "253e": {
    name: "BOX DRAWINGS RIGHT HEAVY AND LEFT VERTICAL LIGHT",
  },
  "253f": {
    name: "BOX DRAWINGS VERTICAL LIGHT AND HORIZONTAL HEAVY",
  },
  "254a": {
    name: "BOX DRAWINGS LEFT LIGHT AND RIGHT VERTICAL HEAVY",
  },
  "254b": {
    name: "BOX DRAWINGS HEAVY VERTICAL AND HORIZONTAL",
  },
  "254c": {
    name: "BOX DRAWINGS LIGHT DOUBLE DASH HORIZONTAL",
  },
  "254d": {
    name: "BOX DRAWINGS HEAVY DOUBLE DASH HORIZONTAL",
  },
  "254e": {
    name: "BOX DRAWINGS LIGHT DOUBLE DASH VERTICAL",
  },
  "254f": {
    name: "BOX DRAWINGS HEAVY DOUBLE DASH VERTICAL",
  },
  "255a": {
    name: "BOX DRAWINGS DOUBLE UP AND RIGHT",
  },
  "255b": {
    name: "BOX DRAWINGS UP SINGLE AND LEFT DOUBLE",
  },
  "255c": {
    name: "BOX DRAWINGS UP DOUBLE AND LEFT SINGLE",
  },
  "255d": {
    name: "BOX DRAWINGS DOUBLE UP AND LEFT",
  },
  "255e": {
    name: "BOX DRAWINGS VERTICAL SINGLE AND RIGHT DOUBLE",
  },
  "255f": {
    name: "BOX DRAWINGS VERTICAL DOUBLE AND RIGHT SINGLE",
  },
  "256a": {
    name: "BOX DRAWINGS VERTICAL SINGLE AND HORIZONTAL DOUBLE",
  },
  "256b": {
    name: "BOX DRAWINGS VERTICAL DOUBLE AND HORIZONTAL SINGLE",
  },
  "256c": {
    name: "BOX DRAWINGS DOUBLE VERTICAL AND HORIZONTAL",
  },
  "256d": {
    name: "BOX DRAWINGS LIGHT ARC DOWN AND RIGHT",
  },
  "256e": {
    name: "BOX DRAWINGS LIGHT ARC DOWN AND LEFT",
  },
  "256f": {
    name: "BOX DRAWINGS LIGHT ARC UP AND LEFT",
  },
  "257a": {
    name: "BOX DRAWINGS HEAVY RIGHT",
  },
  "257b": {
    name: "BOX DRAWINGS HEAVY DOWN",
  },
  "257c": {
    name: "BOX DRAWINGS LIGHT LEFT AND HEAVY RIGHT",
  },
  "257d": {
    name: "BOX DRAWINGS LIGHT UP AND HEAVY DOWN",
  },
  "257e": {
    name: "BOX DRAWINGS HEAVY LEFT AND LIGHT RIGHT",
  },
  "257f": {
    name: "BOX DRAWINGS HEAVY UP AND LIGHT DOWN",
  },
  "258a": {
    name: "LEFT THREE QUARTERS BLOCK",
  },
  "258b": {
    name: "LEFT FIVE EIGHTHS BLOCK",
  },
  "258c": {
    name: "LEFT HALF BLOCK",
  },
  "258d": {
    name: "LEFT THREE EIGHTHS BLOCK",
  },
  "258e": {
    name: "LEFT ONE QUARTER BLOCK",
  },
  "258f": {
    name: "LEFT ONE EIGHTH BLOCK",
  },
  "259a": {
    name: "QUADRANT UPPER LEFT AND LOWER RIGHT",
  },
  "259b": {
    name: "QUADRANT UPPER LEFT AND UPPER RIGHT AND LOWER LEFT",
  },
  "259c": {
    name: "QUADRANT UPPER LEFT AND UPPER RIGHT AND LOWER RIGHT",
  },
  "259d": {
    name: "QUADRANT UPPER RIGHT",
  },
  "259e": {
    name: "QUADRANT UPPER RIGHT AND LOWER LEFT",
  },
  "259f": {
    name: "QUADRANT UPPER RIGHT AND LOWER LEFT AND LOWER RIGHT",
  },
  "25a0": {
    name: "BLACK SQUARE",
  },
  "25a1": {
    name: "WHITE SQUARE",
  },
  "25a2": {
    name: "WHITE SQUARE WITH ROUNDED CORNERS",
  },
  "25a3": {
    name: "WHITE SQUARE CONTAINING BLACK SMALL SQUARE",
  },
  "25a4": {
    name: "SQUARE WITH HORIZONTAL FILL",
  },
  "25a5": {
    name: "SQUARE WITH VERTICAL FILL",
  },
  "25a6": {
    name: "SQUARE WITH ORTHOGONAL CROSSHATCH FILL",
  },
  "25a7": {
    name: "SQUARE WITH UPPER LEFT TO LOWER RIGHT FILL",
  },
  "25a8": {
    name: "SQUARE WITH UPPER RIGHT TO LOWER LEFT FILL",
  },
  "25a9": {
    name: "SQUARE WITH DIAGONAL CROSSHATCH FILL",
  },
  "25aa": {
    name: "BLACK SMALL SQUARE",
  },
  "25ab": {
    name: "WHITE SMALL SQUARE",
  },
  "25ac": {
    name: "BLACK RECTANGLE",
  },
  "25ad": {
    name: "WHITE RECTANGLE",
  },
  "25ae": {
    name: "BLACK VERTICAL RECTANGLE",
  },
  "25af": {
    name: "WHITE VERTICAL RECTANGLE",
  },
  "25b0": {
    name: "BLACK PARALLELOGRAM",
  },
  "25b1": {
    name: "WHITE PARALLELOGRAM",
  },
  "25b2": {
    name: "BLACK UP-POINTING TRIANGLE",
  },
  "25b3": {
    name: "WHITE UP-POINTING TRIANGLE",
  },
  "25b4": {
    name: "BLACK UP-POINTING SMALL TRIANGLE",
  },
  "25b5": {
    name: "WHITE UP-POINTING SMALL TRIANGLE",
  },
  "25b6": {
    name: "BLACK RIGHT-POINTING TRIANGLE",
  },
  "25b7": {
    name: "WHITE RIGHT-POINTING TRIANGLE",
  },
  "25b8": {
    name: "BLACK RIGHT-POINTING SMALL TRIANGLE",
  },
  "25b9": {
    name: "WHITE RIGHT-POINTING SMALL TRIANGLE",
  },
  "25ba": {
    name: "BLACK RIGHT-POINTING POINTER",
  },
  "25bb": {
    name: "WHITE RIGHT-POINTING POINTER",
  },
  "25bc": {
    name: "BLACK DOWN-POINTING TRIANGLE",
  },
  "25bd": {
    name: "WHITE DOWN-POINTING TRIANGLE",
  },
  "25be": {
    name: "BLACK DOWN-POINTING SMALL TRIANGLE",
  },
  "25bf": {
    name: "WHITE DOWN-POINTING SMALL TRIANGLE",
  },
  "25c0": {
    name: "BLACK LEFT-POINTING TRIANGLE",
  },
  "25c1": {
    name: "WHITE LEFT-POINTING TRIANGLE",
  },
  "25c2": {
    name: "BLACK LEFT-POINTING SMALL TRIANGLE",
  },
  "25c3": {
    name: "WHITE LEFT-POINTING SMALL TRIANGLE",
  },
  "25c4": {
    name: "BLACK LEFT-POINTING POINTER",
  },
  "25c5": {
    name: "WHITE LEFT-POINTING POINTER",
  },
  "25c6": {
    name: "BLACK DIAMOND",
  },
  "25c7": {
    name: "WHITE DIAMOND",
  },
  "25c8": {
    name: "WHITE DIAMOND CONTAINING BLACK SMALL DIAMOND",
  },
  "25c9": {
    name: "FISHEYE",
  },
  "25ca": {
    name: "LOZENGE",
  },
  "25cb": {
    name: "WHITE CIRCLE",
  },
  "25cc": {
    name: "DOTTED CIRCLE",
  },
  "25cd": {
    name: "CIRCLE WITH VERTICAL FILL",
  },
  "25ce": {
    name: "BULLSEYE",
  },
  "25cf": {
    name: "BLACK CIRCLE",
  },
  "25d0": {
    name: "CIRCLE WITH LEFT HALF BLACK",
  },
  "25d1": {
    name: "CIRCLE WITH RIGHT HALF BLACK",
  },
  "25d2": {
    name: "CIRCLE WITH LOWER HALF BLACK",
  },
  "25d3": {
    name: "CIRCLE WITH UPPER HALF BLACK",
  },
  "25d4": {
    name: "CIRCLE WITH UPPER RIGHT QUADRANT BLACK",
  },
  "25d5": {
    name: "CIRCLE WITH ALL BUT UPPER LEFT QUADRANT BLACK",
  },
  "25d6": {
    name: "LEFT HALF BLACK CIRCLE",
  },
  "25d7": {
    name: "RIGHT HALF BLACK CIRCLE",
  },
  "25d8": {
    name: "INVERSE BULLET",
  },
  "25d9": {
    name: "INVERSE WHITE CIRCLE",
  },
  "25da": {
    name: "UPPER HALF INVERSE WHITE CIRCLE",
  },
  "25db": {
    name: "LOWER HALF INVERSE WHITE CIRCLE",
  },
  "25dc": {
    name: "UPPER LEFT QUADRANT CIRCULAR ARC",
  },
  "25dd": {
    name: "UPPER RIGHT QUADRANT CIRCULAR ARC",
  },
  "25de": {
    name: "LOWER RIGHT QUADRANT CIRCULAR ARC",
  },
  "25df": {
    name: "LOWER LEFT QUADRANT CIRCULAR ARC",
  },
  "25e0": {
    name: "UPPER HALF CIRCLE",
  },
  "25e1": {
    name: "LOWER HALF CIRCLE",
  },
  "25e2": {
    name: "BLACK LOWER RIGHT TRIANGLE",
  },
  "25e3": {
    name: "BLACK LOWER LEFT TRIANGLE",
  },
  "25e4": {
    name: "BLACK UPPER LEFT TRIANGLE",
  },
  "25e5": {
    name: "BLACK UPPER RIGHT TRIANGLE",
  },
  "25e6": {
    name: "WHITE BULLET",
  },
  "25e7": {
    name: "SQUARE WITH LEFT HALF BLACK",
  },
  "25e8": {
    name: "SQUARE WITH RIGHT HALF BLACK",
  },
  "25e9": {
    name: "SQUARE WITH UPPER LEFT DIAGONAL HALF BLACK",
  },
  "25ea": {
    name: "SQUARE WITH LOWER RIGHT DIAGONAL HALF BLACK",
  },
  "25eb": {
    name: "WHITE SQUARE WITH VERTICAL BISECTING LINE",
  },
  "25ec": {
    name: "WHITE UP-POINTING TRIANGLE WITH DOT",
  },
  "25ed": {
    name: "UP-POINTING TRIANGLE WITH LEFT HALF BLACK",
  },
  "25ee": {
    name: "UP-POINTING TRIANGLE WITH RIGHT HALF BLACK",
  },
  "25ef": {
    name: "LARGE CIRCLE",
  },
  "25f0": {
    name: "WHITE SQUARE WITH UPPER LEFT QUADRANT",
  },
  "25f1": {
    name: "WHITE SQUARE WITH LOWER LEFT QUADRANT",
  },
  "25f2": {
    name: "WHITE SQUARE WITH LOWER RIGHT QUADRANT",
  },
  "25f3": {
    name: "WHITE SQUARE WITH UPPER RIGHT QUADRANT",
  },
  "25f4": {
    name: "WHITE CIRCLE WITH UPPER LEFT QUADRANT",
  },
  "25f5": {
    name: "WHITE CIRCLE WITH LOWER LEFT QUADRANT",
  },
  "25f6": {
    name: "WHITE CIRCLE WITH LOWER RIGHT QUADRANT",
  },
  "25f7": {
    name: "WHITE CIRCLE WITH UPPER RIGHT QUADRANT",
  },
  "25f8": {
    name: "UPPER LEFT TRIANGLE",
  },
  "25f9": {
    name: "UPPER RIGHT TRIANGLE",
  },
  "25fa": {
    name: "LOWER LEFT TRIANGLE",
  },
  "25fb": {
    name: "WHITE MEDIUM SQUARE",
  },
  "25fc": {
    name: "BLACK MEDIUM SQUARE",
  },
  "25fd": {
    name: "WHITE MEDIUM SMALL SQUARE",
  },
  "25fe": {
    name: "BLACK MEDIUM SMALL SQUARE",
  },
  "25ff": {
    name: "LOWER RIGHT TRIANGLE",
  },
  "26aa": {
    name: "MEDIUM WHITE CIRCLE",
  },
  "26ab": {
    name: "MEDIUM BLACK CIRCLE",
  },
  "26ac": {
    name: "MEDIUM SMALL WHITE CIRCLE",
  },
  "2b12": {
    name: "SQUARE WITH TOP HALF BLACK",
  },
  "2b13": {
    name: "SQUARE WITH BOTTOM HALF BLACK",
  },
  "2b14": {
    name: "SQUARE WITH UPPER RIGHT DIAGONAL HALF BLACK",
  },
  "2b15": {
    name: "SQUARE WITH LOWER LEFT DIAGONAL HALF BLACK",
  },
  "2b16": {
    name: "DIAMOND WITH LEFT HALF BLACK",
  },
  "2b17": {
    name: "DIAMOND WITH RIGHT HALF BLACK",
  },
  "2b18": {
    name: "DIAMOND WITH TOP HALF BLACK",
  },
  "2b19": {
    name: "DIAMOND WITH BOTTOM HALF BLACK",
  },
  "2b1a": {
    name: "DOTTED SQUARE",
  },
  "2b1b": {
    name: "BLACK LARGE SQUARE",
  },
  "2b1c": {
    name: "WHITE LARGE SQUARE",
  },
  "2b1d": {
    name: "BLACK VERY SMALL SQUARE",
  },
  "2b1e": {
    name: "WHITE VERY SMALL SQUARE",
  },
  "2b1f": {
    name: "BLACK PENTAGON",
  },
  "2b20": {
    name: "WHITE PENTAGON",
  },
  "2b21": {
    name: "WHITE HEXAGON",
  },
  "2b22": {
    name: "BLACK HEXAGON",
  },
  "2b23": {
    name: "HORIZONTAL BLACK HEXAGON",
  },
  "2b24": {
    name: "BLACK LARGE CIRCLE",
  },
  "2b25": {
    name: "BLACK MEDIUM DIAMOND",
  },
  "2b26": {
    name: "WHITE MEDIUM DIAMOND",
  },
  "2b27": {
    name: "BLACK MEDIUM LOZENGE",
  },
  "2b28": {
    name: "WHITE MEDIUM LOZENGE",
  },
  "2b29": {
    name: "BLACK SMALL DIAMOND",
  },
  "2b2a": {
    name: "BLACK SMALL LOZENGE",
  },
  "2b2b": {
    name: "WHITE SMALL LOZENGE",
  },
  "2b2c": {
    name: "BLACK HORIZONTAL ELLIPSE",
  },
  "2b2d": {
    name: "WHITE HORIZONTAL ELLIPSE",
  },
  "2b2e": {
    name: "BLACK VERTICAL ELLIPSE",
  },
  "2b2f": {
    name: "WHITE VERTICAL ELLIPSE",
  },
  "2b53": {
    name: "BLACK RIGHT-POINTING PENTAGON",
  },
  "2b54": {
    name: "WHITE RIGHT-POINTING PENTAGON",
  },
  "2b55": {
    name: "HEAVY LARGE CIRCLE",
  },
  "2b56": {
    name: "HEAVY OVAL WITH OVAL INSIDE",
  },
  "2b57": {
    name: "HEAVY CIRCLE WITH CIRCLE INSIDE",
  },
  "2b58": {
    name: "HEAVY CIRCLE",
  },
  "2b59": {
    name: "HEAVY CIRCLED SALTIRE",
  },
  "1f532": {
    name: "BLACK SQUARE BUTTON",
  },
  "1f533": {
    name: "WHITE SQUARE BUTTON",
  },
  "1f534": {
    name: "LARGE RED CIRCLE",
  },
  "1f535": {
    name: "LARGE BLUE CIRCLE",
  },
  "1f536": {
    name: "LARGE ORANGE DIAMOND",
  },
  "1f537": {
    name: "LARGE BLUE DIAMOND",
  },
  "1f538": {
    name: "SMALL ORANGE DIAMOND",
  },
  "1f539": {
    name: "SMALL BLUE DIAMOND",
  },
  ffe4: {
    name: "FULLWIDTH BROKEN BAR",
  },
  ffe8: {
    name: "HALFWIDTH FORMS LIGHT VERTICAL",
  },
  ffed: {
    name: "HALFWIDTH BLACK SQUARE",
  },
  ffee: {
    name: "HALFWIDTH WHITE CIRCLE",
  },
  ff40: {
    name: "FULLWIDTH GRAVE ACCENT",
  },
  ffe3: {
    name: "FULLWIDTH MACRON",
  },
};





function recoShape(aarr ,   _svg_) {
  var st = Date.now();
  var match = recognizer.Recognize(aarr);
  var took = Date.now() - st;
  //console.log(took, match.Name, round(match.Score, 2));
  console.log(match.Name);
  console.log(match.Score);


  var svg =   _svg_
  var pathIds = arrid;
  var boundingBoxes = [];
  var p1 = "";
  var p2 = "";

  for (var i = 0; i < pathIds.length; i++) {
    var path = document.getElementById(pathIds[i]);
    console.log();

    
    var bbox = path.getBBox();
    boundingBoxes.push(bbox);
    path.remove();
  }


    switch (match.Name) {
    case "Rectangle":
      appendRecct(boundingBoxes);
      break;
    case "Circle":
      appendCircle(boundingBoxes);
      // code block
      break;

    case "Triangle_rectangle_right":
      appendTriangleRectangle_right(boundingBoxes);
      // code block
      break;

    case "Triangle_rectangle_left":
      appendTriangleRectangle_left(boundingBoxes);
      // code block
      break;

    case "Triangle":
      appendTriangle(boundingBoxes);
      // code block
      break;
    case "Ellipse":
      appendEllipse(boundingBoxes);
      // code block
      break;
      case "Line":
        appendLine(arr[0], arr[arr.length - 1]);
        // code block
        break; 

        case "Arrow":
        appendArrow(arr[0], arr[arr.length - 1]);
        // code block
        break;

    default:
      console.log(match.Name);
    // code block
  }
 } //end recoShape



 function drawPredictShape( name , boundingBoxes, p1,p2 , arr , _svg_) {
console.log( _svg_ );
console.log( boundingBoxes );
  switch (name) {
    case "Rectangle":
      appendRecct(boundingBoxes, _svg_);
      break;
    case "Circle":
      //appendCircle(boundingBoxes);
      appendEllipse(boundingBoxes, _svg_);

      // code block
      break;

    case "Triangle_rectangle_right":
      appendTriangleRectangle_right(boundingBoxes, _svg_);
      // code block
      break;

    case "Triangle_rectangle_left":
      appendTriangleRectangle_left(boundingBoxes, _svg_);
      // code block
      break;

    case "Triangle":
      appendTriangle(boundingBoxes, _svg_);
      // code block
      break;
    case "Ellipse":
      appendEllipse(boundingBoxes, _svg_);
      // code block
      break;
    case "Line":
       appendLine(p1,p2, _svg_);
      // code block
      break;
      case "Arrow":
        appendArrow(p1,p2,arr, _svg_);
        // code block
        break;

    default:
      console.log(name);
    // code block
  }

 }//drawPredictShape



  
function appendTriangleRectangle_left(boundingBoxes, _svg_) {
  var svg =  _svg_;
  var rectData = boundingBoxes[0];

  var x1 = rectData.x + rectData.width; // Bottom-right corner of the rectangle
  var y1 = rectData.y + rectData.height;

  var x2 = rectData.x; // Bottom-left corner of the rectangle
  var y2 = rectData.y + rectData.height;

  var x3 = rectData.x + rectData.width; // Top-right corner of the rectangle
  var y3 = rectData.y;

  // Create a polygon element for the triangle
  var triangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  triangle.setAttribute(
    "points",
    x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3
  );
  triangle.setAttribute("fill", "none");
  triangle.setAttribute("stroke", color);
  triangle.setAttribute("stroke-width", size);
  triangle.setAttribute("class", "x");

  // Append the triangle to the SVG container
  svg.appendChild(triangle);
} //end





function appendRecct(boundingBoxes, _svg_) {
  var svg =   _svg_
  var rectData = boundingBoxes[0];
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", rectData.x);
  rect.setAttribute("y", rectData.y);
  rect.setAttribute("width", rectData.width);
  rect.setAttribute("height", rectData.height);
  rect.setAttribute("fill", "none");
  rect.setAttribute("stroke", color);
  rect.setAttribute("stroke-width", size);
  rect.setAttribute("class", "x");
  svg.appendChild(rect);
} //end

function appendCircle(boundingBoxes, _svg_) {
  var svg =    _svg_
  var rectData = boundingBoxes[0];
  var cx = rectData.x + rectData.width / 2;
  var cy = rectData.y + rectData.height / 2;
  var r = Math.min(rectData.width, rectData.height) / 2;
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", color);
  circle.setAttribute("stroke-width", size);
  circle.setAttribute("class", "x");
  svg.appendChild(circle);
} //end

function appendTriangle(boundingBoxes, _svg_) {
  var svg =   _svg_
  var rectData = boundingBoxes[0];
  var x1 = rectData.x + rectData.width / 2; // Top center of the rectangle
  var y1 = rectData.y;
  var x2 = rectData.x;
  var y2 = rectData.y + rectData.height;
  var x3 = rectData.x + rectData.width;
  var y3 = rectData.y + rectData.height;
  // Create a polygon element for the triangle
  var triangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  triangle.setAttribute(
    "points",
    x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3
  );
  triangle.setAttribute("fill", "none");
  triangle.setAttribute("stroke", color);
  triangle.setAttribute("stroke-width", size);  triangle.setAttribute("class", "x");

  // Append the triangle to the SVG container
  svg.appendChild(triangle);
} //end

function appendEllipse(boundingBoxes, _svg_) {
  var svg =   _svg_;
  console.log( boundingBoxes);
  var rectData = boundingBoxes[0];
  var cx = rectData.x + rectData.width / 2;
  var cy = rectData.y + rectData.height / 2;
  var rx = rectData.width / 2;
  var ry = rectData.height / 2;
  var ellipse = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  ellipse.setAttribute("cx", cx);
  ellipse.setAttribute("cy", cy);
  ellipse.setAttribute("rx", rx);
  ellipse.setAttribute("ry", ry);
  ellipse.setAttribute("fill", "none");
  ellipse.setAttribute("stroke", color);
  ellipse.setAttribute("stroke-width", size);
  ellipse.setAttribute("class", "x");

  // Append the ellipse to the SVG container
  svg.appendChild(ellipse);
} //end



function appendTriangleRectangle_right(boundingBoxes, _svg_) {
  var svg =  _svg_
  // Rectangle data
  var rectData = boundingBoxes[0];

  // Calculate coordinates of triangle vertices
  var x1 = rectData.x; // Bottom-left corner of the rectangle
  var y1 = rectData.y + rectData.height;

  var x2 = rectData.x; // Top-left corner of the rectangle
  var y2 = rectData.y;

  var x3 = rectData.x + rectData.width; // Bottom-right corner of the rectangle
  var y3 = rectData.y + rectData.height;

  // Create a polygon element for the triangle
  var triangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  triangle.setAttribute(
    "points",
    x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3
  );
  triangle.setAttribute("fill", "none");
  triangle.setAttribute("class", "x");
  triangle.setAttribute("stroke", color);
  triangle.setAttribute("stroke-width", size);

  // Append the triangle to the SVG container
  svg.appendChild(triangle);
} //end



function appendLine(p1,p2, _svg_) {

  var svg =   _svg_;
  // Create a line element
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", p1.X);
  line.setAttribute("y1", p1.Y);
  line.setAttribute("x2", p2.X);
  line.setAttribute("y2", p2.Y);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", size);
  line.setAttribute("class", "x");


  // Append the line to the SVG container
  svg.appendChild(line);
} //end


function appendArrow(  p1, p2 , pathPoints , _svg_) {

 
// Iterate through the array of points to detect direction changes
for (var i = 1; i < pathPoints.length - 1; i++) {
  var angle1 = calculateAngle(pathPoints[i - 1], pathPoints[i]);
  var angle2 = calculateAngle(pathPoints[i], pathPoints[i + 1]);

  // Check if the sign of angles changes
  if (Math.sign(angle1) !== Math.sign(angle2)) {
       p2 =  pathPoints[i];
   }
}

  var arrowSize = size * 5;
 
// Create a line element
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("x1", p1.X);
line.setAttribute("y1", p1.Y);
line.setAttribute("x2", parseInt(p2.X) + 0);
line.setAttribute("y2", parseInt(p2.Y) + 0);
line.setAttribute("stroke", color); // Assuming color is defined
line.setAttribute("stroke-width", size); // Assuming size is defined
line.setAttribute("class", "x");
line.setAttribute("stroke-linecap", "round"); // Rounded line end
// Calculate the angle of the line
var angle = Math.atan2(p2.Y - p1.Y, p2.X - p1.X);
// Calculate points for the arrowhead
var arrowX1 = p2.X - arrowSize * Math.cos(angle - Math.PI / 6);
var arrowY1 = p2.Y - arrowSize * Math.sin(angle - Math.PI / 6);
var arrowX2 = p2.X - arrowSize * Math.cos(angle + Math.PI / 6);
var arrowY2 = p2.Y - arrowSize * Math.sin(angle + Math.PI / 6);
var arrowhead = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
arrowhead.setAttribute("points", p2.X + "," + p2.Y + " " + arrowX1 + "," + arrowY1 + " " + arrowX2 + "," + arrowY2);
arrowhead.setAttribute("fill", color); // Arrowhead color same as line color
arrowhead.setAttribute("class", "x");
var translateX =   size * 5 * Math.cos(angle);
var translateY =   size * 5 * Math.sin(angle);
 arrowhead.setAttribute("style", 'transform: translate('+translateX+'px, '+translateY+'px);'); // Arrowhead color same as line color


// Append line and arrowhead to the SVG container
 _svg_.appendChild(line);
_svg_.appendChild(arrowhead);
  
}
function getPathDirection(pathPoints) {
  var direction = "";
  for (var i = 1; i < pathPoints.length; i++) {
      if (pathPoints[i].X > pathPoints[i - 1].X) {
          direction = "left to right";
      } else if (pathPoints[i].X < pathPoints[i - 1].X) {
          direction = "right to left";
      }
  }
  return direction;
}

// Function to calculate angle between two points
function calculateAngle(point1, point2) {
  return Math.atan2(point2.Y - point1.Y, point2.X - point1.X);
}
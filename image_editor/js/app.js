


$(document).on("click",".btn-mode",function ( e ) {
  $(".btn-mode").css("color","white");
  $(".btn-mode svg").css("fill","white"); 

  $(this).css("color","#00c6fd");
  $(this).find("svg").css("fill","#00c6fd");

  $("canvas").removeClass("pick");

})


/*****************************Canvas**************************/
   


$(document).on("click","#eraser",function  ( ) {
  

  $("#imageCanvas").toggleClass("eraser");
  if( $("#imageCanvas").hasClass("eraser")  ){
    $("canvas").css("cursor", generateCursorCSS(radius) )

          $("#imageCanvas.eraser")[0].addEventListener('mousemove', function(e) {
            if( !$("#imageCanvas").hasClass("eraser")  ){
              return;
            }
          if (e.buttons !== 1) return;  
          $("canvas").css("cursor", generateCursorCSS(radius) )
          var pos = getXY(e);
          erase( pos.x , pos.y   ); 
          
      });

  }else{
    $("canvas").css("cursor", "default" );

      $("#imageCanvas").removeClass("eraser");      
      $(".btn-mode").css("color","white");
      $(".btn-mode svg").css("fill","white"); 

        
  }



})//end 
 
 
var  radius = 20;
var  pi2 = Math.PI * 2;
// Function to change eraser size
function changeEraserSize(radius) {
    eraserRadius = radius;
}
function getXY(e) {
   var rect = canvas.getBoundingClientRect();
   return {
       x: e.clientX - rect.left,
       y: e.clientY - rect.top
   }
}
/// simply draws an arc in any color - due to comp mode
/// it will erase rather than draw
function erase(x, y) {
  ctx.globalCompositeOperation = 'destination-out'; // Set the composite mode to erase

   ctx.beginPath();
   ctx.arc(x, y, radius, 0, pi2);
   ctx.fill();

   ctx.globalCompositeOperation = 'destination-out'; // Set the composite mode to erase
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2);
   ctx.fill();
   ctx.globalCompositeOperation = 'source-over'; // Reset composite mode to default




}

function generateCursorCSS(radius) {
  // Create SVG data for circular cursor
  var svgData = '<svg xmlns="http://www.w3.org/2000/svg" width="' + (radius * 2) + '" height="' + (radius * 2) + '" viewBox="0 0 ' + (radius * 2) + ' ' + (radius * 2) + '"><circle cx="' + radius + '" cy="' + radius + '" r="' + radius + '" fill="black"/></svg>';

  // Encode SVG data
  var encodedData = encodeURIComponent(svgData);

  // Generate CSS for cursor
  var css = 'url(\'data:image/svg+xml;utf8,' + encodedData + '\') ' + radius + ' ' + radius + ', auto';

  return css;
}


/******************************Download***********************/

$(document).on("click","#download",function (e) {
  
  var dataURL = canvas.toDataURL('image/png');
 // Create link element
 var link = document.createElement('a');
 link.href = dataURL;
 link.download =   '100.png'; // Set the default filename for download
 link.click();

})//end download




/*****************************Remove color********************/
$(document).on("click","#replace",function ( e ) {
  $("canvas").toggleClass("pick");
  if( !$("canvas").hasClass("pick") ){
    
  $(".btn-mode").css("color","white");
  $(".btn-mode svg").css("fill","white"); 

  $("canvas").css("cursor", "default" );


  }else{
    $("canvas").css("cursor", "crosshair" );

  }

})

$(document).on("click","canvas.pick",function  (e) {
  var asw = ($(this).width() / $(this)[0].width)
  var ash = ($(this).height()/ $(this)[0].height)
  var x = (e.offsetX) / asw;
  var y = (e.offsetY) / ash;
   var canvas = $(this)[0];
  var p = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
  var hex = rgbToHex(p[0],p[1],p[2]);
  var rgb = hexToRgb(hex) 
  console.log(rgb);
  console.log(p);
  removeColorThreshold(rgb, 20);

});

/**************************Invert image***********************/

$(document).on("click","#invert",function (e) {

  console.log(   $(".rtt").css("transform")  );

  if( "matrix(-1, 0, 0, -1, 0, -5)" != $(".rtt").css("transform")  ){
   
       $(".rtt").css("transform","rotate(180deg) translateY(5px)");  }else{     $(".rtt").css("transform","translateY(-5px)");

   }

  // Get the canvas width and height
var width = canvas.width;
var height = canvas.height;

// Get the image data for the entire canvas
var imageData = ctx.getImageData(0, 0, width, height);
var data = imageData.data;

// Loop through each pixel and invert its color
for (var i = 0; i < data.length; i += 4) {
    // Invert red, green, and blue channels
    data[i] = 255 - data[i];       // Red
    data[i + 1] = 255 - data[i + 1]; // Green
    data[i + 2] = 255 - data[i + 2]; // Blue
    // No need to invert alpha channel
}

// Put the modified image data back onto the canvas
ctx.putImageData(imageData, 0, 0);

$(".btn-mode").css("color","white");
$(".btn-mode svg").css("fill","white")

})


/*****************************crop************************** */

var cropper = "";
$(document).on("click", "#btn-crop", function (e) {
  cropper = new Cropper($("#imageCanvas")[0], {
    disabled: true,
  });
  $(".crop-controls").show();
  $(".btn-mode").hide();
}); //end

$(document).on("click", "#btn-crop-close", function (e) {
  cropper.destroy();
  $(".crop-controls").hide();
  $(".btn-mode").show();

}); //end

$(document).on("click", "#btn-crop-ok", function (e) {
  $(".crop-controls").hide();
  $(".btn-mode").show();

  var croppedCanvas = cropper.getCroppedCanvas();
  var croppedImageDataURL = croppedCanvas.toDataURL("image/jpeg");
  //console.log(croppedImageDataURL);
  // Create a new Image element
  var image = new Image();
  // Set the source of the image
  image.src = croppedImageDataURL;
  // When the image is loaded
  image.onload = function () {
    ////console.log("Fares bouali");
    ////console.log( image );
    //resizeCanvas(image.width, image.height);
    renderImage(image) ;
    cropper.destroy();
  };
}); //end


/*************************************************************** */
/*************************************************************** */
///////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
var _img = "";
var canvas = document.getElementById("imageCanvas");
var ctx = canvas.getContext("2d");

var imageInput = document.getElementById("imageInput");
var zoomFactor = 1.0; // Initial zoom factor
var zoomStep = 0.1; // Zoom step for each increment/decrement

imageInput.addEventListener("change", function (e) {
  $("#canvasContainer").show();
  $(".btn-mode").css("display","inline-block");
  $(".start").hide();
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
      _img = img;
      zoomFactor = 1.0; // Reset zoom factor when loading new image
      resizeCanvas(img.width, img.height); // Resize canvas based on image size
      renderImage(img);   

    };
    img.src = event.target.result;
  };

    reader.readAsDataURL(file);

});

function renderImage(img) {
  //console.log(img);
  var centerX = canvas.width / 2 - (img.width / 2) * zoomFactor;
  var centerY = canvas.height / 2 - (img.height / 2) * zoomFactor;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous image
  ctx.drawImage(
    img,
    centerX,
    centerY,
    img.width * zoomFactor,
    img.height * zoomFactor
  );
}

function resizeCanvas(width, height) {
  // Adjust canvas size based on image size and zoom factor
  canvas.width = width * zoomFactor;
  canvas.height = height * zoomFactor;
}

// Zoom in
document.getElementById("zoomIn").addEventListener("click", function () {
  zoomFactor += zoomStep;
  var img = _img;
  resizeCanvas(img.width, img.height);
  renderImage(img);
});

// Zoom out
document.getElementById("zoomOut").addEventListener("click", function () {
  zoomFactor -= zoomStep;
  if (zoomFactor < zoomStep) zoomFactor = zoomStep; // Ensure zoom factor doesn't go negative
  var img = _img;
  resizeCanvas(img.width, img.height);
  renderImage(img);
});


$(document).on("click","#open",function (params) {

   $("#imageInput").trigger("click")

})//




function hexToRgb(hex) {
  // Remove the # if it's included
  hex = hex.replace(/^#/, '');

  // Parse the hex string into individual color components
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values as an object
  return [r,g,b];
}
function removeColorThreshold(colorToRemove, threshold) {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  // Iterate through each pixel
  for (var i = 0; i < data.length; i += 4) {
      // Calculate the difference between the target color and the current pixel's color
      var diffR = Math.abs(data[i] - colorToRemove[0]);
      var diffG = Math.abs(data[i + 1] - colorToRemove[1]);
      var diffB = Math.abs(data[i + 2] - colorToRemove[2]);

      // Check if the difference is within the threshold
      if (diffR <= threshold && diffG <= threshold && diffB <= threshold) {
          // Set the alpha channel of the matching pixel to 0 (transparent)
          data[i + 3] = 0;
      }
  }

  // Put the modified image data back to the canvas
  ctx.putImageData(imageData, 0, 0);
}

function removeColor(colorToRemove) {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  // Iterate through each pixel
  for (var i = 0; i < data.length; i += 4) {
      // Check if the current pixel's color matches the color to remove
      if (data[i] === colorToRemove[0] && data[i + 1] === colorToRemove[1] && data[i + 2] === colorToRemove[2]) {
          // Set the alpha channel of the matching pixel to 0 (transparent)
          data[i + 3] = 0;
      }
  }

  // Put the modified image data back to the canvas
  ctx.putImageData(imageData, 0, 0);
}

// Remove red color from the canvas
 
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

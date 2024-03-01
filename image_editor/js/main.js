
var _img = '';
window.onload = function() {
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');
  
    var imageInput = document.getElementById('imageInput');
    var zoomFactor = 1.0; // Initial zoom factor
    var zoomStep = 0.1; // Zoom step for each increment/decrement
  
    imageInput.addEventListener('change', function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
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
      var centerX = (canvas.width / 2) - (img.width / 2) * zoomFactor;
      var centerY = (canvas.height / 2) - (img.height / 2) * zoomFactor;
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous image
      ctx.drawImage(img, centerX, centerY, img.width * zoomFactor, img.height * zoomFactor);
    }
  
    function resizeCanvas(width, height) {
      // Adjust canvas size based on image size and zoom factor
      canvas.width = width * zoomFactor;
      canvas.height = height * zoomFactor;
    }
  
    // Zoom in
    document.getElementById('zoomIn').addEventListener('click', function() {
      zoomFactor += zoomStep;
      var img = _img;
      resizeCanvas(img.width, img.height);
      renderImage(img);
    });
  
    // Zoom out
    document.getElementById('zoomOut').addEventListener('click', function() {
      zoomFactor -= zoomStep;
      if (zoomFactor < zoomStep) zoomFactor = zoomStep; // Ensure zoom factor doesn't go negative
      var img = _img;
      resizeCanvas(img.width, img.height);
      renderImage(img);
    });
  };
  
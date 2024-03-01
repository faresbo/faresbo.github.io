
    // Initialize Fabric.js canvas
    var canvas = new fabric.Canvas('canvas');

    // Set canvas dimensions to fit the screen
    canvas.setDimensions({
        width: window.innerWidth * 0.8, // 80% of the window width
        height: window.innerHeight * 0.8 // 80% of the window height
    });

    // Function to handle file input change
    function handleFileSelect(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            var imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = function() {
                var image = new fabric.Image(imgObj);
                // Center the image on canvas
                image.set({
                    left: canvas.width / 2 - image.width / 2,
                    top: canvas.height / 2 - image.height / 2
                });
                canvas.add(image);
            };
        };
        reader.readAsDataURL(file);
    }

    // Add event listener to file input
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);


/*
window.onload = function() {
    var canvas = new fabric.Canvas('canvas');
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
          //resizeCanvas(img.width, img.height); // Resize canvas based on image size
          renderImage(img);
        };
        img.src = event.target.result;
      };
  
      reader.readAsDataURL(file);
    });
  
    function renderImage(img) {
      console.log( img.src )
    fabric.Image.fromURL(img.src, function(fabricImg) {
        var centerX = (canvas.width / 2) - (fabricImg.width * fabricImg.scaleX / 2) * zoomFactor;
        var centerY = (canvas.height / 2) - (fabricImg.height * fabricImg.scaleY / 2) * zoomFactor;
        
        // Clear canvas
        canvas.clear();
        
        // Set image position and size
        fabricImg.set({
            left: centerX,
            top: centerY,
            scaleX: zoomFactor,
            scaleY: zoomFactor
        });

        // Add image to the canvas
        console.log( fabricImg )
        canvas.add(fabricImg);
    }, { crossOrigin: 'Anonymous' }); // Set crossOrigin to handle CORS issues if necessary
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
  */
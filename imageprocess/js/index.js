var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $timeout) {
  var toggleNav = document.getElementById('toggle-nav'),
    toggleTool = document.getElementById('toggle-tool'),
    closeNav = document.getElementById('close-nav'),
    tools = document.getElementById('tools'),
    menu = document.getElementById('menu'),
    main = document.getElementById('main'),
    nav = document.getElementById('nav'),
    fileSelect = document.getElementById('image-file'),
    fileURL = document.getElementById('image-url'),
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

  toggleNav.addEventListener('click',function() {
    nav.classList.toggle('nav-open');
  }, false);

  closeNav.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
  }, false);

  toggleTool.addEventListener('click', openTools, false);
  
  function openTools() {
    tools.classList.toggle('tool-open');
    if(tools.classList.contains('tool-open')) {
      main.style.width = main.clientWidth - 220 +'px'; 
    } else {
      main.style.width = '100%'; 
    }
  }
  canvas.addEventListener("dragenter", disable, false);
  canvas.addEventListener("dragover", disable, false);
  canvas.addEventListener("drop", drop, false);

  function disable(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  
  function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    
    let files = e.dataTransfer.files[0];
    let type = 'drop';
    imageLoader(files, type);
  }

  fileSelect.addEventListener('change', imageLoader, false);
  fileURL.addEventListener('change', imageUrl, false);
  
  function imageLoader(files, type) {
    if(files) {
      var reader = new FileReader();
      reader.onload = function() {
        $scope.img = new Image();
        $scope.img.onload = function() {
          draw($scope.img);
        }
        $scope.img.src = reader.result;
      }
    }
    if(type) {
      $scope.fileName = files.name;
      reader.readAsDataURL(files); 
    } else {
      reader.readAsDataURL(fileSelect.files[0]);
      $scope.fileName = fileSelect.files[0].name;
    }
    resizeCanvas();
  }
  
  function resizeCanvas() {
    let w = main.clientWidth;
    let h = main.clientHeight;
    ctx.canvas.width = w * 0.9;
    ctx.canvas.height = h * 0.8;
    ctx.canvas.style.width = w * 0.9;
    ctx.canvas.style.height = h * 0.9;
  }
  
  function imageUrl() {
    if($scope.fileURL) {
      $scope.img = new Image();
      $scope.img.crossOrigin = 'Anonymous';
      $scope.img.src = $scope.fileURL;
      $scope.img.onload = function() {
        draw($scope.img);       
      }
    }
    resizeCanvas();
  }
  
  function draw(img) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let hRatio = ctx.canvas.width / img.width;
    let vRatio =  ctx.canvas.height / img.height;
    let ratio  = Math.min ( hRatio, vRatio );
    let centerShift_x = ( ctx.canvas.width - img.width*ratio ) / 2;
    let centerShift_y = ( ctx.canvas.height - img.height*ratio ) / 2;  
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
                              centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  

     $scope.pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }
  function load() {
    ctx.font="30px Verdana";
    ctx.fillText("Drop image here",10,90);
  }
  load();
  // $scope
  $scope.edit = function() {
    $scope.mode = 'Edit';
    $scope.editMODE = true;
    // openTools();
  }
  $scope.function1 = function() {
    
  }
  $scope.function2 = function() {
    
  }
  $scope.function3 = function() {
    
  }
  $scope.function4 = function() {
    
  }
  
  //scope function
  $scope.brightAdjust = function() {
    let slider = document.getElementById('bright-slider');
		$scope.bright = parseInt(slider.value, 10);
    
    draw($scope.img);
    
		let l = $scope.pixels.data.length;
		for(let i = 0; i < l; i += 4) {
			$scope.pixels.data[i] = $scope.pixels.data[i] + $scope.bright;
			$scope.pixels.data[i + 1] = $scope.pixels.data[i + 1] + $scope.bright;
			$scope.pixels.data[i + 2] = $scope.pixels.data[i + 2] + $scope.bright;
		}
		ctx.putImageData($scope.pixels, 0, 0);
  }
  
  $scope.color = function() {
    let red = document.getElementById('red-slider'),
        green = document.getElementById('green-slider'),
        blue = document.getElementById('blue-slider');
    $scope.red = parseInt(red.value, 10);
    $scope.green = parseInt(green.value, 10);
    $scope.blue = parseInt(blue.value, 10);
    
    if($scope.red != 0 || $scope.green != 0 || $scope.blue != 0 )
    draw($scope.img);
    
		let l = $scope.pixels.data.length;
    for(let i = 0; i < l; i += 4) {
			$scope.pixels.data[i] = $scope.pixels.data[i] + $scope.red;
			$scope.pixels.data[i + 1] = $scope.pixels.data[i + 1] + $scope.green;
			$scope.pixels.data[i + 2] = $scope.pixels.data[i + 2] + $scope.blue;
		}
    ctx.putImageData($scope.pixels, 0, 0);
  }
});
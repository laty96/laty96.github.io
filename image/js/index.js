var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $timeout) {
  var toggleNav = document.getElementById("toggle-nav"),
    toggleTool = document.getElementById("toggle-tool"),
    closeNav = document.getElementById("close-nav"),
    tools = document.getElementById("tools"),
    menu = document.getElementById("menu"),
    main = document.getElementById("main"),
    nav = document.getElementById("nav"),
    fileSelect = document.getElementById("image-file"),
    fileURL = document.getElementById("image-url"),
    canvas = document.getElementById("canvas"),
    dropzone = document.getElementById("dropzone"),
    ctx = canvas.getContext("2d");

  toggleNav.addEventListener(
    "click",
    function() {
      nav.classList.toggle("nav-open");
    },
    false
  );

  closeNav.addEventListener(
    "click",
    function() {
      nav.classList.toggle("nav-open");
    },
    false
  );

  toggleTool.addEventListener("click", openTools, false);

  function openTools() {
    tools.classList.toggle("tool-open");
    if (tools.classList.contains("tool-open")) {
      main.style.width = main.clientWidth - 220 + "px";
    } else {
      main.style.width = "100%";
    }
  }
  dropzone.addEventListener("dragenter", disable, false);
  dropzone.addEventListener("dragover", disable, false);
  dropzone.addEventListener("drop", drop, false);
  canvas.addEventListener("click", pick);

  var pick = function(event) {
    let x = event.clientX - 220;
    let y = event.clientY - 50;
    // let pixel = ctx.getImageData(x, y, 1, 1);
    // let data = pixel.data;
    // let rgba = 'rgba(' + data[0] + ', ' + data[1] +
    //            ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    // $scope.rgba = rgba;
    // console.log(x, y);
  };

  function disable(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    let files = e.dataTransfer.files[0];
    if (
      files.name
        .split(".")
        .pop()
        .toLowerCase() != "tif" ||
      files.name
        .split(".")
        .pop()
        .toLowerCase() != "tiff"
    ) {
      reset();
      imageLoader(files);
    } else {
      let type = "drop";
      imageLoader(files, type);
    }
  }

  fileSelect.addEventListener("change", imageLoader, false);
  fileURL.addEventListener("change", imageUrl, false);

  function imageLoader(files, type) {
    if (files) {
      if (
        files.name
          .split(".")
          .pop()
          .toLowerCase() == "tif" ||
        files.name
          .split(".")
          .pop()
          .toLowerCase() == "tiff"
      ) {
        loadTifImage(files);
      } else {
        var reader = new FileReader();
        reader.onload = function() {
          $scope.img = new Image();
          $scope.img.onload = function() {
            draw($scope.img);
          };
          $scope.img.src = reader.result;
        };
      }
    }
    if (type) {
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
    if ($scope.fileURL) {
      $scope.img = new Image();
      $scope.img.crossOrigin = "Anonymous";
      $scope.img.src = $scope.fileURL;
      $scope.img.onload = function() {
        draw($scope.img);
      };
    }
    resizeCanvas();
  }

  function draw(img) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let hRatio = ctx.canvas.width / img.width;
    let vRatio = ctx.canvas.height / img.height;
    let ratio = Math.min(hRatio, vRatio);
    let centerShift_x = (ctx.canvas.width - img.width * ratio) / 2;
    let centerShift_y = (ctx.canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );

    $scope.pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  function load() {
    ctx.font = "30px Verdana";
    ctx.fillText("Drop image here", 10, 90);
  }
  load();
  // $scope
  $scope.edit = function() {
    $scope.mode = "Edit";
    $scope.editMODE = true;
    // openTools();
  };
  $scope.function1 = function() {};
  $scope.function2 = function() {};
  $scope.function3 = function() {};
  $scope.function4 = function() {};

  //scope function
  $scope.brightAdjust = function() {
    let slider = document.getElementById("bright-slider");
    $scope.bright = parseInt(slider.value, 10);

    if ($scope.img) {
      draw($scope.img);

      let l = $scope.pixels.data.length;
      for (let i = 0; i < l; i += 4) {
        $scope.pixels.data[i] = $scope.pixels.data[i] + $scope.bright;
        $scope.pixels.data[i + 1] = $scope.pixels.data[i + 1] + $scope.bright;
        $scope.pixels.data[i + 2] = $scope.pixels.data[i + 2] + $scope.bright;
      }
      ctx.putImageData($scope.pixels, 0, 0);
    }
  };

  $scope.color = function() {
    let red = document.getElementById("red-slider"),
      green = document.getElementById("green-slider"),
      blue = document.getElementById("blue-slider");
    $scope.red = parseInt(red.value, 10);
    $scope.green = parseInt(green.value, 10);
    $scope.blue = parseInt(blue.value, 10);

    if ($scope.red != 0 || $scope.green != 0 || $scope.blue != 0) {
      draw($scope.img);

      let l = $scope.pixels.data.length;
      for (let i = 0; i < l; i += 4) {
        $scope.pixels.data[i] = $scope.pixels.data[i] + $scope.red;
        $scope.pixels.data[i + 1] = $scope.pixels.data[i + 1] + $scope.green;
        $scope.pixels.data[i + 2] = $scope.pixels.data[i + 2] + $scope.blue;
      }
      ctx.putImageData($scope.pixels, 0, 0);
    }
  };

  //  end

  // Warn if overriding existing method
  if (Array.prototype.equals)
    console.warn(
      "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
    );
  // attach the .equals method to Array's prototype to call it on any array
  Array.prototype.equals = function(array) {
    // if the other array is a falsy value, return
    if (!array) return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length) return false;

    for (let i = 0, l = this.length; i < l; i++) {
      // Check if we have nested arrays
      if (this[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this[i].equals(array[i])) return false;
      } else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "equals", { enumerable: false });

  //XLAVT
  var height, width, imageRe, imageSrc;

  class PixelGroup {
    constructor(groupID, r, g, b, numberOfPixel) {
      this.groupID = groupID;
      this.r = r;
      this.g = g;
      this.b = b;
      this.numberOfPixel = numberOfPixel;
    }
  }
  class X_Matrix {
    constructor(x, y, groupID) {
      this.x = x;
      this.y = y;
      this.groupID = groupID;
    }
  }
  class MiMatrix {
    constructor(x, y, groupID) {
      this.x = x;
      this.y = y;
      this.groupID = groupID;
    }
  }
  class X0_Matrix {
    constructor(x, y, groupID) {
      this.x = x;
      this.y = y;
      this.groupID = groupID;
    }
  }
  class Distance {
    constructor(value, groupID) {
      this.value = value;
      this.groupID = groupID;
    }
  }
  class Ci_Matrix {
    constructor(C00, C01, C10, C11, groupID) {
      this.C00 = C00;
      this.C01 = C01;
      this.C10 = C10;
      this.C11 = C11;
      this.groupID = groupID;
    }
  }
  
  var pixelGroupList = [];
  var X_MatrixList = [];
  var MiMatrixList = [];
  var M_Avg = [];
  var CiMatrixList = [];
  var C_Inverted = [];
  var X0MatrixList = [];
  var distanceList = [];

  function reset() {
    pixelGroupList = [];
    X_MatrixList = [];
    MiMatrixList = [];
    M_Avg = [];
    CiMatrixList = [];
    C_Inverted = [];
    X0MatrixList = [];
    distanceList = [];
  }
  function loadTifImage(file) {
    Tiff.initialize({ TOTAL_MEMORY: 300000000 });
    var tifreader = new FileReader();
    tifreader.onload = (function(theFile) {
      return function(e) {
        let buffer = e.target.result;
        let tiff = new Tiff({ buffer: buffer });
        let canvastif = tiff.toCanvas();
        width = tiff.width();
        height = tiff.height();
        if (canvastif) {
          document.getElementById("dropzone").innerHTML = "";
          document.getElementById("dropzone").appendChild(canvastif);
        }
        let dataT = canvastif
          .getContext("2d")
          .getImageData(0, 0, width, height);
        console.log(dataT);
        imageSrc = dataT;
        imageRe = dataT;
        // groupDivide(width, height, imageSrc);
        data = dataT.data;
        $("canvas").attr("id", "canvas");
        $("#canvas").on("click", pick);
      };
    })(file);
    tifreader.readAsArrayBuffer(file);
  }

  //
  function groupDivide(w, h, src) {
    console.log("groupdivide run", w, h);

    let groupID = -1,
      co = [],
      temp = [0,0,0],
      datas = src.data;

    for (let j = 0; j < datas.length; j += 4) {
      let y = j % w;
      let x = Math.ceil(j / w);
      
      co[0] = datas[j];
      co[1] = datas[j + 1];
      co[2] = datas[j + 2];
      if (!co.equals(temp)) {
        if (groupID < 0) {
          groupID++;
          let pxg = new PixelGroup();
          pxg.groupID = groupID;
          pxg.numberOfPixel = 1;
          pxg.r = co[0];
          pxg.g = co[1];
          pxg.b = co[2];
          pixelGroupList.push(pxg);
          let xmt = new X_Matrix();
          xmt.groupID = groupID;
          xmt.x = x;
          xmt.y = y;
          X_MatrixList.push(xmt);
        } else {
            let isGroupExist = false;
            for (let i = 0; i < pixelGroupList.length; i++) {
              if (co[0] == pixelGroupList[i].r && co[1] == pixelGroupList[i].g && co[2] == pixelGroupList[i].b) {
                isGroupExist = true;
                pixelGroupList[i].numberOfPixel += 1;
                let xmt = new X_Matrix(x,y , pixelGroupList[i].groupID);
                X_MatrixList.push(xmt);
                break;
              }
            }

            if (isGroupExist === false) {
              groupID++;
              let pxg2 = new PixelGroup();
              pxg2.groupID = groupID;
              pxg2.numberOfPixel = 1;
              pxg2.r = co[0];
              pxg2.g = co[1];
              pxg2.b = co[2];
              pixelGroupList.push(pxg2);
              let xmt = new X_Matrix(x, y, groupID);
              X_MatrixList.push(xmt);
            }
        }
      }
    }

  }

  function matrixMCal() {
    console.log("matrixMCal run");
    for (let i = 0; i < X_MatrixList.length; i++) {
      if (MiMatrixList.length < 1) {
        let mmt = new MiMatrix(
          X_MatrixList[i].x,
          X_MatrixList[i].y,
          X_MatrixList[i].groupID
        );
        MiMatrixList.push(mmt);
      } else {
        let isGroupExist = false;
        for (let j = 0; j < MiMatrixList.length; j++) {
          if (MiMatrixList[j].groupID == X_MatrixList[i].groupID) {
            isGroupExist = true;
            MiMatrixList[j].x += X_MatrixList[i].x;
            MiMatrixList[j].y += X_MatrixList[i].y;
            break;
          }
        }
        if (isGroupExist === false) {
          let mmt = new MiMatrix(
            X_MatrixList[i].x,
            X_MatrixList[i].y,
            X_MatrixList[i].groupID
          );
          MiMatrixList.push(mmt);
        }
      }
    }

    for (let k = 0; k < MiMatrixList.length; k++) {
      for (let j = 0; j < pixelGroupList.length; j++) {
        if (MiMatrixList[k].groupID == pixelGroupList[j].groupID) {
          MiMatrixList[k].x =
            MiMatrixList[k].x / pixelGroupList[j].numberOfPixel;
          MiMatrixList[k].y =
            MiMatrixList[k].y / pixelGroupList[j].numberOfPixel;
          break;
        }
      }
    }

    M_Avg[0] = M_Avg[1] = 0;
    for (let h = 0; h < MiMatrixList.length; h++) {
      M_Avg[0] += MiMatrixList[h].x;
      M_Avg[1] += MiMatrixList[h].y;
    }
    M_Avg[0] = M_Avg[0] / MiMatrixList.length;
    M_Avg[1] = M_Avg[1] / MiMatrixList.length;
  }

  function X0Cal() {
    console.log("x0cal run");
    for (let i = 0; i < X_MatrixList.length; i++) {
      let x0m = new X0_Matrix();
      x0m.groupID = X_MatrixList[i].groupID;
      x0m.x = X_MatrixList[i].x;
      x0m.y = X_MatrixList[i].y;
      X0MatrixList.push(x0m);
    }
  }



  function CCal() {
    let CanCInverted = true;
    for (let j = 0; j < X0MatrixList.length; j++) {
      if (MiMatrixList.length < 1) {
        let cmt = new Ci_Matrix();
        cmt.GroupID = X0MatrixList[j].GroupID;
        cmt.C00 = X0MatrixList[j].x * X0MatrixList[j].x;
        cmt.C01 = X0MatrixList[j].x * X0MatrixList[j].y;
        cmt.C10 = X0MatrixList[j].y * X0MatrixList[j].x;
        cmt.C11 = X0MatrixList[j].y * X0MatrixList[j].y;
        CiMatrixList.push(cmt);
      } else {
        let IsGroupExist = false;
        for (let k = 0; k < CiMatrixList.length; k++) {
          if (CiMatrixList[k].groupID == X0MatrixList[j].groupID) {
            IsGroupExist = true;
            CiMatrixList[k].C00 =
              CiMatrixList[k].C00 + X0MatrixList[j].x * X0MatrixList[j].x;
            CiMatrixList[k].C01 =
              CiMatrixList[k].C01 + X0MatrixList[j].x * X0MatrixList[j].y;
            CiMatrixList[k].C10 =
              CiMatrixList[k].C10 + X0MatrixList[j].y * X0MatrixList[j].x;
            CiMatrixList[k].C11 =
              CiMatrixList[k].C11 + X0MatrixList[j].y * X0MatrixList[j].y;
            break;
          }
        }
        if (IsGroupExist === false) {
          let cmt = new Ci_Matrix();
          cmt.groupID = X0MatrixList[j].GroupID;
          cmt.C00 = X0MatrixList[j].x * X0MatrixList[j].x;
          cmt.C01 = X0MatrixList[j].x * X0MatrixList[j].y;
          cmt.C10 = X0MatrixList[j].y * X0MatrixList[j].x;
          cmt.C11 = X0MatrixList[j].y * X0MatrixList[j].y;
          CiMatrixList.push(cmt);
        }
      }
    }
    C_Inverted[0] = 0;
    C_Inverted[1] = 0;
    C_Inverted[2] = 0;
    C_Inverted[3] = 0;
    for (let c = 0; c < CiMatrixList.length; c++) {
      C_Inverted[0] += CiMatrixList[c].C00;
      C_Inverted[1] += CiMatrixList[c].C01;
      C_Inverted[2] += CiMatrixList[c].C10;
      C_Inverted[3] += CiMatrixList[c].C11;
    }
    C_Inverted[0] = C_Inverted[0] / X_MatrixList.length;
    C_Inverted[1] = C_Inverted[1] / X_MatrixList.length;
    C_Inverted[2] = C_Inverted[2] / X_MatrixList.length;
    C_Inverted[3] = C_Inverted[3] / X_MatrixList.length;

    let temp = C_Inverted[0];
    let detC = C_Inverted[0] * C_Inverted[3] - C_Inverted[2] * C_Inverted[1];
    if (detC === 0) CanCInverted = false;
    else {
      C_Inverted[0] = 1 / detC * C_Inverted[3];
      C_Inverted[1] = -1 / detC * C_Inverted[1];
      C_Inverted[2] = -1 / detC * C_Inverted[2];
      C_Inverted[3] = 1 / detC * temp;
    }
    return CanCInverted;
  }

  function classify(a, b, imageSrc) {
    let x = a,
      y = b;
    for (let i = 0; i < MiMatrixList.length; i++) {
      let dtc = new Distance();
      dtc.groupID = MiMatrixList[i].groupID;
      dtc.value = Math.sqrt(
        ((x - MiMatrixList[i].x) * C_Inverted[0] +
          (y - MiMatrixList[i].y) * C_Inverted[2]) *
          (x - MiMatrixList[i].x) +
          ((x - MiMatrixList[i].x) * C_Inverted[1] +
            (y - MiMatrixList[i].y) * C_Inverted[3]) *
            (y - MiMatrixList[i].y)
      );
      distanceList.push(dtc);
    }
    let min = distanceList[0].value,
      groupID = distanceList[0].groupID;
    for (let j = 0; j < distanceList.length; j++) {
      if (distanceList[j].value < min) {
        min = distanceList[j].value;
        groupID = distanceList[j].groupID;
      }
    }
    let color = [];
    for (let k = 0; k < pixelGroupList.length; k++) {
      if (groupID == pixelGroupList[k].groupID)
        color[0] = pixelGroupList[k].r;
        color[1] = pixelGroupList[k].g;  
        color[2] = pixelGroupList[k].b;
      // console.log(color);
    }
    
    let can = document.createElement("CANVAS"),
      ctxcan = can.getContext("2d");
    let imgData = ctx.createImageData(imageSrc.width, imageSrc.height);
    can.width = imageSrc.width;
    can.height = imageSrc.height;
    for (let p = 0; p < imgData.data.length; p += 4) {
      imgData.data[p] = color[0];
      imgData.data[p + 1] = color[1];
      imgData.data[p + 2] = color[2];
      imgData.data[p + 3] = 255;
    }
    
    let img = new Image();
    img.crossOrigin = 'Anomymous';
    img.src = 'assets/res.png';
    img.onload = function() {
      let newcan = document.createElement("CANVAS"),
          ctxnew = newcan.getContext('2d');
        let hRatio = ctxnew.canvas.width / img.width;
        let vRatio = ctxnew.canvas.height / img.height;
        let ratio = Math.min(hRatio, vRatio);
        let centerShift_x = (ctxnew.canvas.width - img.width * ratio) / 2;
        let centerShift_y = (ctxnew.canvas.height - img.height * ratio) / 2;
        ctxnew.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
    );
      document.getElementById("result").innerHTML = "";
      document.getElementById("result").appendChild(newcan);
    }
    
    ctxcan.putImageData(imgData, 0,0);
    // console.log(imgData);
    // document.getElementById("result").innerHTML = "";
    // document.getElementById("result").appendChild(can);
        // console.log(pixelGroupList.length);

  }

  function readImgBtn() {
    // console.log("read clicked" + imageSrc.width, imageSrc.height, imageSrc);

    groupDivide(imageSrc.width, imageSrc.height, imageSrc);
    matrixMCal();
    X0Cal();
    if (CCal() === true) {
      // document.getElementById("classify").disabled = true;
    } else {
      console.log("Fail to classify.");
      document.getElementById("read").disabled = false;
    }

    // console.log('CiMatrixList:' + CiMatrixList);
    // console.log('X0MatrixList:' + X0MatrixList);
    // console.log('MiMatrixList:' + MiMatrixList);
    // console.log('X_MatrixList' + X_MatrixList);
  }

  function classifyBtn(src) {
    let img = src;
    for (let i = 0; i < 5000; i += 4) {
      let x = Math.ceil(i / img.width),
          y = i % img.width;
      if (img.data[i] === 0 || img.data[i + 1] === 0 || img.data[i + 2] === 0) {
        classify(x, y, img);
      }
    }
  }

  function classifyBtnClick() {
    classifyBtn(imageSrc);
  }
  document.getElementById("read").addEventListener("click", readImgBtn, false);
  document
    .getElementById("classify")
    .addEventListener("click", classifyBtnClick, false);
  //end
});

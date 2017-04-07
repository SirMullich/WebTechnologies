var uploadItem = function(canvas, item){
  var cnt = canvas.getContext('2d');
  var parent = $(canvas).parent();
  var fileReader = new FileReader();

  fileReader.onload = function(e){
    var img = new Image();
    img.src = e.target.result;
    img.onload = function(){
      var left = (parseInt(parent.css('width'))-img.width)/2;
      var top  = (parseInt(parent.css('height'))  -img.height)/2;
      top < 0 ? top = 0: top = top;
      left < 0 ? left = 0 : left = left;
      // $(canvas).css({
      //   marginLeft : left,
      //   marginTop  : top
      // });
      canvas.width  = img.width;
      canvas.height = img.height;
      cnt.drawImage(img, 0, 0, img.width, img.height);
    };
  };

  fileReader.readAsDataURL(item);
};

var filters = {
  inverse: function(imgData){
    var sp = imgData;
    var ll = function(vl){
      return 255 - vl;
    };
    for(var i = 0; i < imgData.length; i+=4){
      sp[i] = ll(sp[i]);
      sp[i+1] = ll(sp[i+1]);
      sp[i+2] = ll(sp[i+2]);
    }
    return sp;
  },

  noise: function(imgData){
    var sp = imgData;
    var coefficient = 0.02;
    var ll = function(vl){
      var g_VALUE = Math.random()*100;
      if(g_VALUE <= coefficient*100){
        if(Math.floor(Math.random()*25) == 2)
          return 255;
        else
          return vl;
      }
      return vl;
    };

    for(var i = 0; i < imgData.length; i+=4){
      sp[i] = ll(sp[i]);
      sp[i+1] = ll(sp[i+1]);
      sp[i+2] = ll(sp[i+2]);
    }
    return sp;
  },

  treshold: function(imgData){
    var sp = imgData;
    var ll = function(vl){
    	return vl>128?0:255;
    };
    for(var i = 0; i < imgData.length; i+=4){
      var mean = (sp[i] + sp[i+1] + sp[i+2])/3;
      sp[i] = ll(mean);
      sp[i+1] = ll(mean);
      sp[i+2] = ll(mean);
    }
    return sp;
  }, 

  grayscale: function(imgData){
    var sp = imgData;
    var ll = function(vl){
    	return vl>128?0:255;
    };
    for(var i = 0; i < imgData.length; i+=4){
    	var r = sp[i];
    	var g = sp[i+1];
    	var b = sp[i+2];
    	var v = 0.2126*r + 0.7152*g + 0.0722*b;
      sp[i] = sp[i+1] = sp[i+2] = v;
    }
    return sp;
  }, 

  addBrightness: function(imgData){
    var sp = imgData;

    for(var i = 0; i < imgData.length; i+=4){
    	sp[i] += 20;
      sp[i+1] += 20;
      sp[i+2] += 20;
    }
    return sp;
  }, 

  decreaseBrightness: function(imgData){
    var sp = imgData;

    for(var i = 0; i < imgData.length; i+=4){
    	sp[i] -= 20;
      sp[i+1] -= 20;
      sp[i+2] -= 20;
    }
    return sp;
  }, 

  increaseContrast: function(imgData){
    var sp = imgData;
    var amount = 2;

    for(var i = 0; i < imgData.length; i+=4){
    	var r = sp[i];
    	var g = sp[i+1];
    	var b = sp[i+2];

      r = ((((r / 255) - 0.5) * amount) + 0.5) * 255 ; 
      g = ((((g / 255) - 0.5) * amount) + 0.5) * 255 ; 
      b = ((((b / 255) - 0.5) * amount) + 0.5) * 255 ; 

	    if(r < 0)  
          r = 0 ; 
      else if(r > 255) 
          r = 255 ; 
      if(g < 0)  
          g = 0 ; 
      else if(g > 255) 
          g = 255 ; 
      if(b < 0)  
          b = 0 ; 
      else if(b > 255) 
          b = 255 ; 
	    sp[i] = r;
      sp[i+1] = g;
      sp[i+2] = b;
    }
    return sp;
  }, 

  decreaseContrast: function(imgData){
    var sp = imgData;
    var amount = -0.1;

    for(var i = 0; i < imgData.length; i+=4){
    	var r = sp[i];
    	var g = sp[i+1];
    	var b = sp[i+2];

      r = ((((r / 255) - 0.5) * amount) + 0.5) * 255 ; 
      g = ((((g / 255) - 0.5) * amount) + 0.5) * 255 ; 
      b = ((((b / 255) - 0.5) * amount) + 0.5) * 255 ; 

	    if(r < 0)  
          r = 0 ; 
      else if(r > 255) 
          r = 255 ; 
      if(g < 0)  
          g = 0 ; 
      else if(g > 255) 
          g = 255 ; 
      if(b < 0)  
          b = 0 ; 
      else if(b > 255) 
          b = 255 ; 
	    sp[i] = r;
      sp[i+1] = g;
      sp[i+2] = b;
    }
    return sp;
  },

  duotoneRed: function(imgData){
  	var sp = imgData;
  	for(var i = 0; i < imgData.length; i+=4){
    	var r = sp[i];
	  	var g = sp[i+1];
	  	var b = sp[i+2];
	  	r = (r + g + b) / 3;
  		sp[i] = r;
    }
    return sp;
  }, 

  duotoneGreen: function(imgData){
  	var sp = imgData;
  	for(var i = 0; i < imgData.length; i+=4){
    	var r = sp[i];
	  	var g = sp[i+1];
	  	var b = sp[i+2];
	  	g = (r + g + b) / 3;
  		sp[i+1] = g;
    }
    return sp;
  }, 

  duotoneBlue: function(imgData){
  	var sp = imgData;
  	for(var i = 0; i < imgData.length; i+=4){
    	var r = sp[i];
	  	var g = sp[i+1];
	  	var b = sp[i+2];
	  	b = (r + g + b) / 3;
  		sp[i+2] = b;
    }
    return sp;
  }
};

var draw = function(canvas, imgData){
  var cont = canvas.getContext('2d');
  var currImgData = cont.getImageData(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < currImgData.data.length; i += 4){
    currImgData.data[i]   = imgData[i];
    currImgData.data[i+1] = imgData[i+1];
    currImgData.data[i+2] = imgData[i+2];
  }
  cont.putImageData(currImgData, 0, 0);
};

var process = function(filterCallback, canvas){
  var imgData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
  var tmp = filterCallback(imgData.data);
  draw(canvas, tmp);
};

	// Colors
var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";

var curColor = colorPurple;
var clickColor = new Array();

var clickSize = new Array();
var curSize = "normal";

var clickTool = new Array();
var curTool = "marker";

var run = function(canvas){
  $('.dropzone').on('dragleave', function(e){
    $(this).removeClass('dragging');
    return false;
  })
  .on('drop', function(e){
    $(this).addClass('dropped');
    var originalEvent = e.originalEvent;
    var dataTransfer  = originalEvent.dataTransfer;
    var files = dataTransfer.files || [];

    // for(var i = 0; i < files.length; i++)
    //   uploadItem(canvas, files[i]);

    uploadItem(canvas, files[0]);

    return false;
  })
  .on('dragover', function(e){
    $(this).addClass('dragging');
    return false;
  });

  // var isDrawing = false;
  // var oldX = null,
  //   oldY = null;

  // var drawPoint = function(x, y){
  //   // How we get context?
  //   var context = $('canvas')[0].getContext('2d');
  //   context.lineJoin = "round";
  //   context.lineWidth = 1;

  //   context.beginPath();
  //   context.moveTo(oldX || x, oldY || y);
  //   context.lineTo(x, y);
  //   context.closePath();
  //   context.stroke();

  //   oldX = x;
  //   oldY = y;
  // };

  canvas.height = 200;
  canvas.width = 300;

  // $(canvas).on('mousedown', function(e){
  //   isDrawing = true;
  //   drawPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  // }).on('mouseup', function(e){
  //   isDrawing = false;
  //   drawPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  //   oldX = null;
  //   oldY = null;
  // }).on('mousemove', function(e){
  //   if(isDrawing){
  //     drawPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  //   }
  // });

  var clickX = new Array();
	var clickY = new Array();
	var clickDrag = new Array();
	var paint;



	function addClick(x, y, dragging)
	{
	  clickX.push(x);
	  clickY.push(y);
	  clickDrag.push(dragging);
	  // console.log(curTool);
	  if(curTool == "eraser"){
	    clickColor.push("#FEFEFE");
  	} else if (curTool == "marker") {
		  clickColor.push(curColor);
		}
	  clickSize.push(curSize);
	}

	function redraw(){
		var context = $('canvas')[0].getContext('2d');
	  // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	  
	  // context.strokeStyle = "#df4b26";
	  context.lineJoin = "round";
				
	  for(var i=0; i < clickX.length; i++) {		
	    context.beginPath();
	    if(clickDrag[i] && i){
	      context.moveTo(clickX[i-1], clickY[i-1]);
	     }else{
	       context.moveTo(clickX[i], clickY[i]);
	     }
	     context.lineTo(clickX[i], clickY[i]);
	     context.closePath();
	     context.strokeStyle = clickColor[i];
	     if (clickSize[i] == "small") {
	     	context.lineWidth = 2;
	     } else if (clickSize[i] == "normal") {
	     	context.lineWidth = 5;
	     } else if (clickSize[i] == "large") {
	     	context.lineWidth = 8;
	     } else if (clickSize[i] == "huge") {
	     	context.lineWidth = 20;
	     }
	     context.stroke();
	  }
	}

	var isSelecting = false;
  var oldX = null,
    oldY = null;

  var drawSelect = function(x, y){
    // How we get context?
    var context = $('canvas')[0].getContext('2d');
    context.lineJoin = "round";
    context.lineWidth = 2;

    context.beginPath();
    // context.moveTo(oldX || x, oldY || y);
    context.moveTo(oldX, oldY);
    context.lineTo(oldX, y);
    context.lineTo(x, y);
    context.lineTo(x, oldY);
    context.closePath();
    context.strokeStyle = "#010101";
    if (curTool == "marker" || curTool == "eraser") {
    	context.stroke();
    }
    if (!isSelecting && curTool == "select") {
    	context.stroke();
    }
    
  };

  $(canvas).mousedown(function(e){
		if (curTool == "marker" || curTool == "eraser") {
			paint = true;
		  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		  redraw();
		} else if (curTool == "select") {
			isSelecting = true;
			oldX = e.pageX - this.offsetLeft;
			oldY = e.pageY - this.offsetTop;
			// var mask = context.createImageData(200, 200);
  		drawSelect(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		}
	  
	}).mousemove(function(e){
		if (curTool == "marker" || curTool == "eraser") {
			if(paint){
		    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
		    redraw();
	  	}	
		} else if (curTool == "select") {
	  	if(isSelecting){
		    drawSelect(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		    // console.log("selecting...");
		  }
	  }
	}).mouseup(function(e){
		if (curTool == "marker" || curTool == "eraser") {
			paint = false;
		} else if (curTool == "select") {
			isSelecting = false;
	    drawSelect(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	    oldX = null;
	    oldY = null;
		}
	}).mouseleave(function(e){

			paint = false;
			isSelecting = false;

	});

};

$(document).ready(function(){
  var canvas = $('#canvas');
  run(canvas[0]);

  // Когда пользователь нажимает на кнопку
  $('.js-button-action').click(function(){
    var filter = $(this).data('filter');
    process(filters[filter], $('#canvas')[0]);
  });

  $('.js-changeColor').click(function(){
    curColor = $(this).data('filter');

  });

  $('.js-changeSize').click(function(){
    curSize = $(this).data('filter');

  });

  $('.js-changeTool').click(function(){
    curTool = $(this).data('filter');

  });
});

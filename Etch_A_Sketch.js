$(document).ready(function() {
	displayGrid(16);	//default box size

	$(".square").mouseenter(function() {
		$(this).css("background", "white");
	});

	$("#default").click(function() {
		setGrid();
		$(".square").mouseenter(function() {
			$(this).css("background", "white");
		})
	});

	$("#random").click(function() {
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", randomColor());
		});
	});

	$("#opacity").click(function() {
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			reduceOpacity($(this));
		});
	});

	$("#clear").click(function() {
		clean();
	});

});

function displayGrid(n) {

	var size = 960;
	var boxsize = (960 - 2*n)/n;
	var wrap = $(".grid").html("");

	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append($("<div></div>").addClass("square").height(boxsize).width(boxsize));
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}
};

function clean() {
	
	$(".square").css("background", "black").css("opacity", "1");
}

function setGrid() {

	var n = prompt("Please enter how many rows and columns (between 4 and 128).");

	while (n < 4 || n > 128) {
		var n = prompt("Please enter how many rows and columns (between 4 and 128)."); 
	}

	displayGrid(n);
};

Number.prototype.toHex = function() {
	if(this < 16) {
		return '0' + this.toString(16);
	}

	return this.toString(16);
};

function randomColor() {

	var red = Math.floor(256 * Math.random());
	var green = Math.floor(256 * Math.random());
	var blue = Math.floor(256 * Math.random());

	return "#" + red.toHex() + green.toHex() + blue.toHex();
};

function reduceOpacity(elem) {

	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1;

	if(nextOpacity > 0) {
		elem.css('opacity', nextOpacity);
	}
	else {
		elem.css('opacity', 0);
	}
};


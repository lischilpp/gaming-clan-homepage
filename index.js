Element.prototype.index = function() {
    return Array.prototype.indexOf.call(this.parentNode.children, this);
}

function getMousePosition(e) {
	var x, y = 0;
	if (e.pageX && e.pageY) {
		x = e.pageX;
		y = e.pageY;
	}else if (e.clientX && e.clientY) {
		x = e.clientX + (document.documentElement.scrollLeft ?
			document.documentElement.scrollLeft :
			document.body.scrollLeft);
		y = e.clientY + (document.documentElement.scrollTop ?
			document.documentElement.scrollTop :
			document.body.scrollTop);
	}
   	return {
		x: x,
		y: y
	}
}

function setBackgroundParallaxPosition(rx, ry) {
	var factor = 10;
	rx = ( (rx > 0.5) ? (rx-0.5)*2 : -(1-rx-0.5)*2) * factor;
	ry = ( (ry > 0.5) ? -(ry-0.5)*2 : (1-ry-0.5)*2 ) * factor;
    var accuracy = 10;
    rx = Math.round((-12.5+rx)*accuracy)/accuracy;
    ry = Math.round((-12.5-ry)*accuracy)/accuracy;
	var bgPos = ''+rx+'px '+ry+'px';
	document.getElementsByTagName('html')[0].style.backgroundPosition = bgPos;
}

window.oncontextmenu = function(e) {
    e.preventDefault();
    return false;
}

window.addEventListener('DOMContentLoaded', function() {
	window.onmousemove = function(e) {
		var mPOS = getMousePosition(e);
		setBackgroundParallaxPosition(mPOS.x/window.innerWidth, mPOS.y/window.innerHeight);
	}
}, false);
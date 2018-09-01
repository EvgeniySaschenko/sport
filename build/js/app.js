'use strict';

var ajax = function ajax(url, data, callback) {
	var cb = callback || function () {};
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, false);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(data);
	return (xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (xhr.responseText != '') return cb(xhr.responseText);
		} else {
			console.log('err');
		}
	})();
};
"use strict";

function currentYPosition() {
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) return self.pageYOffset;
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) return document.body.scrollTop;
		return 0;
}

function elmYPosition(eID) {
		var elm = document.getElementById(eID);
		var y = elm.offsetTop;
		var node = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
				node = node.offsetParent;
				y += node.offsetTop;
		}return y;
}

function smoothScroll(eID) {
		var startY = currentYPosition();
		var stopY = elmYPosition(eID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
				scrollTo(0, stopY);return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
				for (var i = startY; i < stopY; i += step) {
						setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
						leapY += step;if (leapY > stopY) leapY = stopY;timer++;
				}return;
		}
		for (var i = startY; i > stopY; i -= step) {
				setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
				leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
		}
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiLCJzbW9vdGhTY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWpheCA9IGZ1bmN0aW9uIGFqYXgodXJsLCBkYXRhLCBjYWxsYmFjaykge1xuXHR2YXIgY2IgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4aHIub3BlbignUE9TVCcsIHVybCwgZmFsc2UpO1xuXHR4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHR4aHIuc2VuZChkYXRhKTtcblx0cmV0dXJuICh4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRpZiAoeGhyLnJlc3BvbnNlVGV4dCAhPSAnJykgcmV0dXJuIGNiKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZXJyJyk7XG5cdFx0fVxuXHR9KSgpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3VycmVudFlQb3NpdGlvbigpIHtcblx0XHQvLyBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcblx0XHRpZiAoc2VsZi5wYWdlWU9mZnNldCkgcmV0dXJuIHNlbGYucGFnZVlPZmZzZXQ7XG5cdFx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgNiAtIHN0YW5kYXJkcyBtb2RlXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHQvLyBJbnRlcm5ldCBFeHBsb3JlciA2LCA3IGFuZCA4XG5cdFx0aWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cdFx0cmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGVsbVlQb3NpdGlvbihlSUQpIHtcblx0XHR2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcblx0XHR2YXIgeSA9IGVsbS5vZmZzZXRUb3A7XG5cdFx0dmFyIG5vZGUgPSBlbG07XG5cdFx0d2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHRcdFx0XHR5ICs9IG5vZGUub2Zmc2V0VG9wO1xuXHRcdH1yZXR1cm4geTtcbn1cblxuZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVJRCkge1xuXHRcdHZhciBzdGFydFkgPSBjdXJyZW50WVBvc2l0aW9uKCk7XG5cdFx0dmFyIHN0b3BZID0gZWxtWVBvc2l0aW9uKGVJRCk7XG5cdFx0dmFyIGRpc3RhbmNlID0gc3RvcFkgPiBzdGFydFkgPyBzdG9wWSAtIHN0YXJ0WSA6IHN0YXJ0WSAtIHN0b3BZO1xuXHRcdGlmIChkaXN0YW5jZSA8IDEwMCkge1xuXHRcdFx0XHRzY3JvbGxUbygwLCBzdG9wWSk7cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcblx0XHRpZiAoc3BlZWQgPj0gMjApIHNwZWVkID0gMjA7XG5cdFx0dmFyIHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMjUpO1xuXHRcdHZhciBsZWFwWSA9IHN0b3BZID4gc3RhcnRZID8gc3RhcnRZICsgc3RlcCA6IHN0YXJ0WSAtIHN0ZXA7XG5cdFx0dmFyIHRpbWVyID0gMDtcblx0XHRpZiAoc3RvcFkgPiBzdGFydFkpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA8IHN0b3BZOyBpICs9IHN0ZXApIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoXCJ3aW5kb3cuc2Nyb2xsVG8oMCwgXCIgKyBsZWFwWSArIFwiKVwiLCB0aW1lciAqIHNwZWVkKTtcblx0XHRcdFx0XHRcdGxlYXBZICs9IHN0ZXA7aWYgKGxlYXBZID4gc3RvcFkpIGxlYXBZID0gc3RvcFk7dGltZXIrKztcblx0XHRcdFx0fXJldHVybjtcblx0XHR9XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA+IHN0b3BZOyBpIC09IHN0ZXApIHtcblx0XHRcdFx0c2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIiArIGxlYXBZICsgXCIpXCIsIHRpbWVyICogc3BlZWQpO1xuXHRcdFx0XHRsZWFwWSAtPSBzdGVwO2lmIChsZWFwWSA8IHN0b3BZKSBsZWFwWSA9IHN0b3BZO3RpbWVyKys7XG5cdFx0fVxufSJdfQ==

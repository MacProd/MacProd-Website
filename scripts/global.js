



setInterval(
function updateClock() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
	var ms = date.getMilliseconds();

    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
	ms = ((ms < 100) && (9 < ms)) ? "0" + ms : ms;
	ms = (ms < 10) ? "00" + ms : ms;
    
    var time = h + ":" + m + ":" + s + ":" + ms;
	
	document.getElementById("clock").innerHTML = time;
	
}
	

	
, 7);







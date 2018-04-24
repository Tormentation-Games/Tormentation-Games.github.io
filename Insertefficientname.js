	var donutBite = 0
function redirectTo(sUrl) {
	window.location.href = (sUrl);
	}
function eatDonut() {
	donutBite += 1;
	if (donutBite != 4) {
		document.getElementById('donut').src = "Doughnut-eaten" + donutBite + ".png"
	} else {
		donutBite = 0
		alert("Here's another one, made just for you <3")
		document.getElementById('donut').src = "Doughnut.png"
	}
}

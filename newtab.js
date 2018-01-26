(function showTime() {
	var now = new Date();
	var h = ("0" + now.getHours()).slice(-2);
	var m = ("0" + now.getMinutes()).slice(-2);
	document.getElementById('time').innerHTML = h + ":" + m;
	t = setTimeout(function() {
		showTime();
	}, 1000);
})();

function showWidgets() {
	var windowWidth = window.innerWidth;
	document.getElementById("calendar-container").style.display = "none";
	document.getElementById("filler").style.display = "none";
	document.getElementById("weather-container").style.display = "none";

	if (windowWidth >= calendarWidth + weatherWidth) {
		document.getElementById("calendar-container").style.display = "block";
		document.getElementById("filler").style.display = "block";
		document.getElementById("weather-container").style.display = "block";
	} else if (windowWidth >= calendarWidth) {
		document.getElementById("calendar-container").style.display = "block";
	} else if (windowWidth >= weatherWidth) {
		document.getElementById("weather-container").style.display = "block";
	}
};

window.onresize = function() {
	showWidgets();
};

// TODO make this dynamic
(function setBackground() {
	var currentTime = new Date().getHours();
	switch (currentTime) {
	case 2:
	case 3:
	case 4:
		document.body.style.backgroundImage = "url(\"resources/night2.jpg\")";
		break;
	case 5:
	case 6:
	case 7:
		document.body.style.backgroundImage = "url(\"resources/morning0.jpg\")";
		break;
	case 8:
	case 9:
		document.body.style.backgroundImage = "url(\"resources/morning1.jpg\")";
		break;
	case 10:
	case 11:
	case 12:
		document.body.style.backgroundImage = "url(\"resources/day0.jpg\")";
		break;
	case 13:
	case 14:
	case 15:
		document.body.style.backgroundImage = "url(\"resources/day1.jpg\")";
		break;
	case 16:
	case 17:
		document.body.style.backgroundImage = "url(\"resources/afternoon.jpg\")";
		break;
	case 18:
	case 19:
		document.body.style.backgroundImage = "url(\"resources/evening.jpg\")";
		break;
	case 20:
	case 21:
	case 22:
		document.body.style.backgroundImage = "url(\"resources/night0.jpg\")";
		break;
	case 23:
	case 0:
	case 1:
		document.body.style.backgroundImage = "url(\"resources/night1.jpg\")";
		break;
	}
})();

document.getElementById('calendar').src = calendar;
document.getElementById('weather').src = weather;

document.getElementById("search").addEventListener("keydown", search);

function search() {
	// key 13 = enter key
	if (event.keyCode == 13) {
		var query = document.getElementById("search").value.trim();
		if (query.length < 1) {
			return;
		}
		document.location.href = "https://www.google.com/search?q="
				+ encodeURIComponent(query);
	}
}
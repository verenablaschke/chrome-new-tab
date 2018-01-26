var calendarWidth = 1020;
var weatherWidth = 495;

// get the calendar sources (and other properties) from the HTML snippet at
// https://calendar.google.com/calendar/embedhelper
var calendar = "https://calendar.google.com/calendar/embed?" +
		"showTitle=0&" +
		"showNav=0&" +
		"showDate=0&" +
		"showPrint=0&" +
		"showTabs=0&" +
		"showCalendars=0&" +
		"showTz=0&" +
		// the height might need to be adjusted for your screen size
		"height=350&" +
		"wkst=2&" +
		"bgcolor=%23FFFFFF&" +
		// repeat for every sub-calendar you want to include:
		// (colours are optional)
		// "src=calendar-id&" +
		// "color=%23hex-number&" +
		"ctz=Europe%2FBerlin";

// iFrame source URL for a weather widget
var weather = "";
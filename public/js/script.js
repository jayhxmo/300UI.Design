$('body').plusAnchor({
    easing: 'easeInOutExpo',
    speed:  700
});

var download = function(day) {
	$.post(
		"/download",
		{
			"email": "jayhxmo@gmail.com",
			"day": day,
		},
		function (data) {
			alert(data);
			console.log(data);
		},
		"json"
	);
};
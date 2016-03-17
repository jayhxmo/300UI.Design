$('body').plusAnchor({
    easing: 'easeInOutExpo',
    speed:  700
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var download = function(day) {
	var email = $('#downloadForm input').val();
	
	if (validateEmail(email)) {
		$('#downloadForm input').attr('placeholder', 'Enjoy! Check your email inbox (and spam). :)');
		$('#downloadForm input').css('background-color', '#fdfdfd');
		$('#downloadForm input').css('border', '3px solid #eee');
		console.log($('#downloadForm input').outerWidth());
		$('#downloadForm input').outerWidth('35.3125em');
		console.log($('#downloadForm input').outerWidth());
		$('#downloadForm input').val('');
		$('#downloadForm input').prop('disabled', true);
		$('#downloadForm button').addClass('display-none');

		$.post(
			"/download",
			{
				"email": "jayhxmo@gmail.com",
				"day": day,
			},
			function (data) {
			},
			"json"
		);
	}

	else {
		$('#downloadForm input').css('border', '3px solid #e74c3c');
	}
};

function validate() {
	$('#downloadForm input').css('border', '3px solid #eee');
}
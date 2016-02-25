$(document).ready(function(){
    $('body').plusAnchor({
        easing: 'easeInOutExpo',
        speed:  700
    });
});

$('#react-content').magnificPopup({
	delegate: 'a',
	type: 'image'
});
$(document).ready(function(){
    $('body').plusAnchor({
        easing: 'easeInOutExpo',
        speed:  700
    });
});

// $('.main').magnificPopup({
// 	key: 'main-popup',
// 	delegate: 'button',
// 	items: {
// 		src: '<div class="white-popup">Dynamically created popup</div>',
// 		type: 'inline'
// 	},
// });
var data = [
  {
    username: "Brad Frost", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.
    
    userWebsite_href: 'http://www.bradfrostweb.com', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.
    
    userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1561258552/brad_frost_bigger.png', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
    
    userLocation: 'Pittsburgh, PA'
  },
];


$('#main').magnificPopup({ 
	delegate: 'a',
	key: 'my-popup', 
	items: data,
	type: 'inline',
  inline: {
    // Define markup. Class names should match key names.
    markup: '<div class="white-popup"><div class="mfp-close"></div>'+
              '<a class="mfp-userWebsite">'+
                '<div class="mfp-userAvatarUrl"></div>'+
                '<h2 class="mfp-username"></h2>'+
              '</a>'+
              '<div class="mfp-userLocation"></div>'+
            '</div>'
  },
});
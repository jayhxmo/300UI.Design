var all = [
	{ day: 100, title: 'Hundred', tags: 'hundred, ui, congrats' },
	{ day: 99, title: 'YG Artists', tags: 'singer, artist, k-pop' },
	{ day: 98, title: 'Splash Screen', tags: 'loading, launch screen' },
	{ day: 97, title: 'Lock Screen', tags: 'linux, home, password' },
	{ day: 96, title: 'Timeline', tags: 'life, timeline, story' },
	{ day: 95, title: 'Dropdown', tags: 'navigation, web' },
	{ day: 94, title: 'Razer Sale', tags: 'sale, advertisement, banner' },
	{ day: 93, title: 'Explore Products', tags: 'sunglasses, products, e-commerce' },
	{ day: 92, title: 'Profile Cards', tags: 'fifa, players, stats' },
	{ day: 91, title: 'Testimonials', tags: 'quotes, feedback, reviews' },
	{ day: 90, title: 'Crowdfunding Campaign', tags: 'kickstarter, pebble, funding' },
	{ day: 89, title: 'Maps', tags: 'google maps, directions, navigation' },
	{ day: 88, title: 'Product Catalog', tags: 'clothes, purchase, e-commerce' },
	{ day: 87, title: 'Empty State', tags: 'instagram, empty, nothing' },
	{ day: 86, title: '6502 IDE', tags: 'code, ide, snake' },
	{ day: 85, title: 'Password Reset', tags: 'password, email, inbox' },
	{ day: 84, title: 'Analytics', tags: 'google analytics, graph, sessions' },
	{ day: 83, title: 'Social Squares', tags: 'follow me' },
	{ day: 82, title: 'Available for Hire', tags: 'freelance, internship, work' },
	{ day: 81, title: 'Football', tags: 'manchester united, football, soccer' },
	{ day: 80, title: 'Schedule', tags: 'day, plan, calendar' },
	{ day: 79, title: 'Reviews', tags: 'san francisco, feedback' },
	{ day: 78, title: 'Sleep Analytics', tags: 'sleep, graph, time' },
	{ day: 77, title: 'Weather Widget', tags: 'sunny, new york, widget' },
	{ day: 76, title: 'Countdown', tags: 'time, hackathon, infuture' },
	{ day: 75, title: 'Apply to InFuture', tags: 'hackathon, appy, new york city' },
	{ day: 74, title: 'Tutorial Tour', tags: 'tutorial, info, tips' },
	{ day: 73, title: 'Error Alert', tags: 'error, wrong, try again' },
	{ day: 72, title: 'Intro', tags: 'snapchat, welcome, sign up' },
	{ day: 71, title: 'About Phone', tags: 'android, status, info' },
	{ day: 70, title: 'File Storage', tags: 'folder, storage, psd' },
	{ day: 69, title: 'Leaderboard', tags: 'ranking, me, game' },
	{ day: 68, title: 'Computer Performance', tags: 'task manager, windows' },
	{ day: 67, title: 'Conversations', tags: 'messages, messenger, friends' },
	{ day: 66, title: 'Blog', tags: 'me, blog, posts' },
	{ day: 65, title: 'Register Your Product', tags: 'samsung galaxy s6' },
	{ day: 64, title: 'Welcome', tags: 'spotify, intro, tutorial' },
	{ day: 63, title: 'Profile Settings', tags: 'account, profile, settings' },
	{ day: 62, title: 'Goal Card', tags: 'goal, plan, cards' },
	{ day: 61, title: 'EasyCTF', tags: 'ctf, problems, answer' },
	{ day: 60, title: 'InFuture is Coming Soon', tags: 'hackathon, subscribe, new york city' },
	{ day: 59, title: 'Compass', tags: 'direction, navigation' },
	{ day: 58, title: '300 UI in 300 Days', tags: 'pinterest, posts, filter' },
	{ day: 57, title: 'Recent Activities', tags: 'news, feed, updates' },
	{ day: 56, title: 'Submit Assignment', tags: 'schoology, submit, files' },
	{ day: 55, title: 'Samsung Galaxy S6', tags: 'samsung, product, landing page' },
	{ day: 54, title: 'Choose Genre', tags: 'spotify, windows' },
	{ day: 53, title: 'Clock', tags: 'material design, watch' },
	{ day: 52, title: 'Error 404', tags: 'error, lonely, missing page' },
	{ day: 51, title: 'Text Editor', tags: 'sublime text, code, html, css' },
	{ day: 50, title: 'Text Editor: Side Panel', tags: 'sublime text, code' },
	{ day: 49, title: 'Quiz', tags: 'trivia, question, answer' },
	{ day: 48, title: 'Muzli', tags: 'design, inspiration, material design' },
	{ day: 47, title: 'Welcome to Dribbble', tags: 'dribbble, debut, animation' },
	{ day: 46, title: 'Movie Card', tags: 'martian, movie, imdb' },
	{ day: 45, title: 'Payment History', tags: 'paypal, pricing, money' },
	{ day: 44, title: 'Card Payment', tags: 'order, purchase, visa' },
	{ day: 43, title: 'Product Search', tags: 'search, products, amazon' },
	{ day: 42, title: 'Team Management', tags: 'team, people, material design' },
	{ day: 41, title: 'Pricing Plans', tags: 'pricing, services, tiers' },
	{ day: 40, title: 'Projects', tags: 'behance, portfolio' },
	{ day: 39, title: 'Snapchat: Part 2', tags: 'edit, snap' },
	{ day: 38, title: 'Snapchat: Part 1', tags: 'camera, snap' },
	{ day: 37, title: 'Medium', tags: 'article, preview' },
	{ day: 36, title: 'Survey', tags: 'rating, services, feedback' },
	{ day: 35, title: 'Converter', tags: 'temperature, fahrenheit, celsius' },
	{ day: 34, title: 'Call Widget', tags: 'facetime, skype, call' },
	{ day: 33, title: 'Tour card', tags: 'seoul, korea, info' },
	{ day: 32, title: 'Equalizer', tags: 'audio, widget' },
	{ day: 31, title: 'Notebook', tags: 'journal, diary, notes' },
	{ day: 30, title: 'Order Food', tags: 'korean, food, material design' },
	{ day: 29, title: 'Daily Reminder', tags: 'android, alert' },
	{ day: 28, title: 'Settings', tags: 'notification, setup, account' },
	{ day: 27, title: 'Product Card', tags: 'pebble, watch, purchase' },
	{ day: 26, title: 'Flash Cards', tags: 'quizlet, vocab, study' },
	{ day: 25, title: 'Quote Card', tags: 'material design, quotes' },
	{ day: 24, title: 'Membership Card', tags: 'gym, membership, pass' },
	{ day: 23, title: 'Track Your Order', tags: 'order, delivery' },
	{ day: 22, title: 'Photo Filter', tags: 'instagram, photo, edit' },
	{ day: 21, title: 'Search', tags: 'spotlight, photoshop' },
	{ day: 20, title: 'Speedometer', tags: 'internet, speed' },
	{ day: 19, title: 'Game Card', tags: 'fifa, purchase, xbox' },
	{ day: 18, title: 'Login Form', tags: 'sign in, sign up' },
	{ day: 17, title: 'The New York Times', tags: 'ahmed, clock bomb, news' },
	{ day: 16, title: 'Stopwatch', tags: 'alarm, clock, timer, app' },
	{ day: 15, title: 'Calculator', tags: 'ios, app' },
	{ day: 14, title: 'Phone Verification', tags: 'authentication, verification' },
	{ day: 13, title: 'Email Client', tags: 'email, windows, app' },
	{ day: 12, title: 'Downloads', tags: 'material design' },
	{ day: 11, title: 'Weather', tags: 'weather, widget' },
	{ day: 10, title: 'Twitter Profile', tags: 'social, me' },
	{ day: 9, title: 'Brandon\'s Website', tags: 'branding, web' },
	{ day: 8, title: 'Calendar', tags: 'ios, widget' },
	{ day: 7, title: 'Subscribe to hackBCA', tags: 'hackathon, subscription' },
	{ day: 6, title: 'Facebook Profile', tags: 'social, me' },
	{ day: 5, title: 'Personal Website', tags: 'branding, portfolio, web' },
	{ day: 4, title: 'Status Lock Screen', tags: 'app, android' },
	{ day: 3, title: 'To-Do List', tags: 'app, windows, productivity' },
	{ day: 2, title: 'Lock Screen Music Player', tags: 'app, ios, music' },
	{ day: 1, title: 'Messaging App', tags: 'app, messaging' },
];

var highlightIndex = [100, 99, 98, 94, 93, 92, 88, 86, 84, 82, 79, 78, 69, 63, 56, 55, 52, 51, 47, 46, 45, 44, 41, 40, 35, 32, 31, 30, 22, 21, 15, 14, 13, 11, 5, 2];
var popularIndex = [100, 93, 90, 89, 88, 86, 84, 83, 82, 81, 79, 78, 73, 70, 63, 55, 52, 51, 48, 44, 41, 28, 15, 5];
var highlights = [];
var popular = [];

var hIC = 0;
var pIC = 0;
all.forEach(function(entry) {
	if (entry['day'] == highlightIndex[hIC]) {
		highlights.push(entry);
		hIC++;
	}

	if (entry['day'] == popularIndex[pIC]) {
		popular.push(entry);
		pIC++;
	}
});

console.log(highlights);

var UIs = highlights;

var RepeatModule = React.createClass({
	openModal: function(day) {
		var s = $('html').scrollTop();    
		$('html').css('overflow', 'hidden');
		$('html').scrollTop(s);	

		var UIindex = UIs.length - day;

		if (UIs.length == highlights.length) {
			console.log('Highlights');
			UIindex = highlightIndex.indexOf(day);
		}

		else if (UIs.length == popular.length) {
			console.log('Popular');
			UIindex = popularIndex.indexOf(day);
		}

		console.log(UIindex);
		console.log(UIs[UIindex]);

		$.featherlight(
			'<html>' +
				'<head>' +
				'</head>' +
				'<body>' +
					'<div class="img-container">' +
						'<img class="showcase" src="images/UIs/Day ' + day + ' - UI.jpg">' +
					'</div>' +
					'<div class="info">' +
						'<h4 class="credits">Designed by <a href="http://dribbble.com/jayhxmo">Jay Mo</a></h4>' +
						'<h2 class="title">Day ' + day + ' - ' + UIs[UIindex]['title'] + '</h2>' +
						'<h4 class="tags">' + UIs[UIindex]['tags'] + '</h4>' +
					'</div>' +
					'<div class="download">' +
						'<form>' +
							'<h5 class="download-info">Download (ZIP containing PSD) is Sent Via Email</h5>' +
							'<input type="email" placeholder="Email address">' +
							'<button>Download</button>' +
							'<h5 class="stats">Downloaded: 420 times &middot; Size: 1.4MB</h6>' + 
							'<h6 class="disclaimer">Don\'t worry, I hate spam too. There will also be an unsubscribe<br>button in the email if you choose not to get future updates.</h6>' +
						'</form>' +
					'</div>' +
				'</body>' +
			'</html>',
			{
				'jquery/image/html/ajax/text': 'html',
			}
		);

		$.featherlight.defaults.afterClose = function() {
			var s = $('html').scrollTop();    
			$('html').css('overflow', 'auto');
			$('html').scrollTop(s);
			$(this).remove();
		};

		$('.featherlight-content').addClass('featherlight-close');
		$('.featherlight-content div').click(function(e) {
        	e.stopPropagation();
   		});
	},
	getInitialState: function() {
		return { UIs: [] }
	},
	render: function() {
		var _this = this,
		listUIs = this.props.UIs.map(function(ui) {
			return (
				<div className='UI' id={'day-' + ui.day}>
					<a href='#' id={'UI-' + ui.day} onClick={_this.openModal.bind(null, ui.day)}>
						<div className='day'>{ui.day}</div>
						<div className='visible-container'>
							<div className='vertical-center'>
								<h1 className='name'>{ui.title}</h1>
								<h5 className='tags'><span>{ui.tags}</span></h5>
								<button className='view'>View Work <span className='arrow'></span></button>
							</div>
						</div>
					</a>
				</div>
			);
		});

		return (
			<div id='ui-container'>
				{listUIs}
			</div>
		);
	}
});

ReactDOM.render(<RepeatModule UIs={UIs} />, document.querySelector('main'));

$("#all").click(function(){
	UIs = all;
	$('#all').addClass('active');
	$('#highlights').removeClass('active');
	$('#popular').removeClass('active');
	ReactDOM.render(<RepeatModule UIs={UIs} />, document.querySelector('main'));
});

$('#highlights').click(function(){
	UIs = highlights;
	$('#all').removeClass('active');
	$('#highlights').addClass('active');
	$('#popular').removeClass('active');
	ReactDOM.render(<RepeatModule UIs={UIs} />, document.querySelector('main'));
});

$('#popular').click(function(){
	UIs = popular;
	$('#all').removeClass('active');
	$('#highlights').removeClass('active');
	$('#popular').addClass('active');
	ReactDOM.render(<RepeatModule UIs={UIs} />, document.querySelector('main'));
});
var UIs = [
	{ day: 100, title: 'Hundred', tags: '' },
	{ day: 99, title: 'YG Artists', tags: '' },
	{ day: 98, title: 'Splash Screen', tags: '' },
	{ day: 97, title: 'Lock Screen', tags: '' },
	{ day: 96, title: 'Timeline', tags: '' },
	{ day: 95, title: 'Dropdown', tags: '' },
	{ day: 94, title: 'Razer Sale', tags: '' },
	{ day: 93, title: 'Explore Products', tags: '' },
	{ day: 92, title: 'Profile Cards', tags: '' },
	{ day: 91, title: 'Testimonials', tags: '' },
	{ day: 90, title: 'Crowdfunding Campaign', tags: '' },
	{ day: 89, title: 'Maps', tags: '' },
	{ day: 88, title: 'Product Catalog', tags: '' },
	{ day: 87, title: 'Empty State', tags: '' },
	{ day: 86, title: '6502 IDE', tags: '' },
	{ day: 85, title: 'Password Reset', tags: '' },
	{ day: 84, title: 'Analytics', tags: '' },
	{ day: 83, title: 'Social Squares', tags: '' },
	{ day: 82, title: 'Available for Hire', tags: '' },
	{ day: 81, title: 'Football', tags: '' },
	{ day: 80, title: 'Schedule', tags: '' },
	{ day: 79, title: 'Reviews', tags: '' },
	{ day: 78, title: 'Sleep Analytics', tags: '' },
	{ day: 77, title: 'Weather Widget', tags: '' },
	{ day: 76, title: 'Countdown', tags: '' },
	{ day: 75, title: 'Apply to InFuture', tags: '' },
	{ day: 74, title: 'Tutorial Tour', tags: '' },
	{ day: 73, title: 'Error Alert', tags: '' },
	{ day: 72, title: 'Intro', tags: '' },
	{ day: 71, title: 'File Storage', tags: '' },
	{ day: 70, title: 'Leaderboard', tags: '' },
	{ day: 69, title: 'InFuture', tags: '' },
	{ day: 68, title: 'Computer Performance', tags: '' },
	{ day: 67, title: 'Conversations', tags: '' },
	{ day: 66, title: 'Blog', tags: '' },
	{ day: 65, title: 'Register Your Product', tags: '' },
	{ day: 64, title: 'Welcome', tags: '' },
	{ day: 63, title: 'Profile Settings', tags: '' },
	{ day: 62, title: 'Goal Card', tags: '' },
	{ day: 61, title: 'EasyCTF', tags: '' },
	{ day: 60, title: 'InFuture is Coming Soon', tags: '' },
	{ day: 59, title: 'Compass', tags: '' },
	{ day: 58, title: '300 UI in 300 Days', tags: '' },
	{ day: 57, title: 'Recent Activities', tags: '' },
	{ day: 56, title: 'Submit Assignment', tags: '' },
	{ day: 55, title: 'Samsung Galaxy S6', tags: '' },
	{ day: 54, title: 'Choose Genre', tags: '' },
	{ day: 53, title: 'Clock', tags: '' },
	{ day: 52, title: 'Error 404', tags: '' },
	{ day: 51, title: 'Text Editor', tags: '' },
	{ day: 50, title: 'Text Editor: Side Panel', tags: '' },
	{ day: 49, title: 'Quiz', tags: '' },
	{ day: 48, title: 'Muzli', tags: '' },
	{ day: 47, title: 'Welcome to Dribbble', tags: '' },
	{ day: 46, title: 'Movie Card', tags: '' },
	{ day: 45, title: 'Payment History', tags: '' },
	{ day: 44, title: 'Card Payment', tags: '' },
	{ day: 43, title: 'Product Search', tags: '' },
	{ day: 42, title: 'Team Management', tags: '' },
	{ day: 41, title: 'Pricing Plans', tags: '' },
	{ day: 40, title: 'Projects', tags: '' },
	{ day: 39, title: 'Snapchat: Part 2', tags: '' },
	{ day: 38, title: 'Snapchat: Part 1', tags: '' },
	{ day: 37, title: 'Medium', tags: '' },
	{ day: 36, title: 'Survey', tags: '' },
	{ day: 35, title: 'Converter', tags: '' },
	{ day: 34, title: 'Call Widget', tags: '' },
	{ day: 33, title: 'Tour card', tags: '' },
	{ day: 32, title: 'Equalizer', tags: '' },
	{ day: 31, title: 'Notebook', tags: '' },
	{ day: 30, title: 'Order Food', tags: '' },
	{ day: 29, title: 'Daily Reminder', tags: '' },
	{ day: 28, title: 'Settings', tags: '' },
	{ day: 27, title: 'Product Card', tags: '' },
	{ day: 26, title: 'Flash Cards', tags: '' },
	{ day: 25, title: 'Quote Card', tags: '' },
	{ day: 24, title: 'Membership Card', tags: '' },
	{ day: 23, title: 'Track Your Order', tags: '' },
	{ day: 22, title: 'Photo Filter', tags: '' },
	{ day: 21, title: 'Search', tags: '' },
	{ day: 20, title: 'Speedometer', tags: '' },
	{ day: 19, title: 'Game Card', tags: '' },
	{ day: 18, title: 'Login Form', tags: '' },
	{ day: 17, title: 'The New York Times', tags: '' },
	{ day: 16, title: 'Stopwatch', tags: '' },
	{ day: 15, title: 'Calculator', tags: '' },
	{ day: 14, title: 'Phone Verification', tags: '' },
	{ day: 13, title: 'Email Client', tags: '' },
	{ day: 12, title: 'Downloads', tags: '' },
	{ day: 11, title: 'Weather', tags: '' },
	{ day: 10, title: 'Twitter Profile', tags: '' },
	{ day: 9, title: 'Brandon\'s Website', tags: '' },
	{ day: 8, title: 'Calendar', tags: '' },
	{ day: 7, title: 'Subscribe to hackBCA', tags: '' },
	{ day: 6, title: 'Facebook Profile', tags: '' },
	{ day: 5, title: 'Personal Website', tags: '' },
	{ day: 4, title: 'Status Lock Screen', tags: '' },
	{ day: 3, title: 'To-Do List', tags: '' },
	{ day: 2, title: 'Lock Screen Music Player', tags: '' },
	{ day: 1, title: 'Messaging App', tags: 'app, messaging' },
];

var RepeatModule = React.createClass({
	getInitialState: function() {
		return { UIs: [] }
	},
	render: function() {

		var listUIs = this.props.UIs.map(function(ui) {
			return (
				<div className='UI' id={'day-' + ui.day}>
					<a href={'?day=' + ui.day}>
						<div className="day">{ui.day}</div>
						<div className="visible-container">
							<div className="vertical-center">
								<h1 className="name">{ui.title}</h1>
								<h5 className="tags"><span>{ui.tags}</span></h5>
								<button className="view">View Work <span className="arrow"></span></button>
							</div>
						</div>
					</a>
				</div>
			);
		});

		return (
			<div className='ui-container'>
				{listUIs}
			</div>
		);
	}
});

ReactDOM.render(<RepeatModule UIs={UIs} />, 				
	document.getElementById('react-content'));
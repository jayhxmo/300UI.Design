var UIs = [
	{ day: 1, title: 'Messaging App', tags: 'app, calculator, ios' },
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
								<h5 className="tags">
									<span className="tag">app</span>
									<span className="tag">calculator</span>
									<span className="tag">ios</span>
								</h5>
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



// var RepeatModule = React.createClass({
// 	getInitialState: function() {
// 		return { UIs: [
// 			{ day: 1, title: 'Messaging App', tags: 'app, calculator, ios' },
// 		]}
// 	},
// 	render: function() {		
// 		var listUIs = this.props.UIs.map(function(ui) {
// 			return (
// 				<div class='UI' id={'day-' + ui.day}>
// 					hey
// 				</div>
// 			);
// 		});

// 		return (
// 			<div className='pure-menu'>
// 				<h3>The Gospels</h3>
// 				<ul>
// 					{listUIs}
// 				</ul>
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(<RepeatModule UIs={UIs} />, 				
// 	document.getElementById('react-content'));


// 	// 
// 	// 					
						
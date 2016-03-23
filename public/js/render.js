// var all = db.something;
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

var UIs = highlights;

var RepeatModule = React.createClass({
	openModal: function(day) {
		var s = $('html').scrollTop();    
		$('html').css('overflow', 'hidden');
		$('html').scrollTop(s);	

		var UIindex = UIs.length - day;

		if (UIs.length == highlights.length) {
			// console.log('Highlights');
			UIindex = highlightIndex.indexOf(day);
		}

		else if (UIs.length == popular.length) {
			// console.log('Popular');
			UIindex = popularIndex.indexOf(day);
		}

		$.featherlight(
			'<html>' +
				'<head>' +
				'</head>' +
				'<body>' +
					'<div class="img-container">' +
						'<img class="showcase" src="images/UIs/full/Day ' + day + ' - UI.jpg">' +
					'</div>' +
					'<div class="info">' +
						'<h4 class="credits">Designed by <a href="http://dribbble.com/jayhxmo">Jay Mo</a></h4>' +
						'<h2 class="title">Day ' + day + ' - ' + UIs[UIindex]['title'] + '</h2>' +
						'<h4 class="tags">' + UIs[UIindex]['tags'] + '</h4>' +
					'</div>' +
					'<div class="download">' +
						'<form id="downloadForm" onsubmit="download(' + day + '); return false">' +
							'<h5 class="download-info">Download (ZIP containing PSD) is Sent Via Email</h5>' +
							'<input id="email" oninput="validate()" type="email" placeholder="Email address">' +
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
	shouldComponentUpdate: function(nextProps, nextState) {
	    return true;
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
	transition();
});

$('#highlights').click(function(){
	UIs = highlights;
	$('#all').removeClass('active');
	$('#highlights').addClass('active');
	$('#popular').removeClass('active');
	transition();
});

$('#popular').click(function(){
	UIs = popular;
	$('#all').removeClass('active');
	$('#highlights').removeClass('active');
	$('#popular').addClass('active');
	transition();
});

function transition() {
	$('#ui-container').addClass('visible-none');
	setTimeout(function(){ 
		ReactDOM.render(<RepeatModule UIs={[]} />, document.querySelector('main'));
		ReactDOM.render(<RepeatModule UIs={UIs} />, document.querySelector('main'));
		$('#ui-container').removeClass('visible-none');
    }, 300);  
}
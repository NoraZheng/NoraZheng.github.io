$(function() {
	$('#main').smoothState();

	//document ready
	$('.menu-button').on('click', () => {
		console.log('hi');
		$('.menu').toggleClass('show-menu');
		$('.menu-button').toggleClass('menu-button-close');
		$('main').toggleClass('hide-main');
	});
	// end of document ready
});

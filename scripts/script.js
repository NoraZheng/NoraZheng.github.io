$(document).ready(function() {
	// document ready

	$('.menu-button').on('click', () => {
		$('.menu').toggleClass('show-menu');
		$('.menu-button').toggleClass('menu-button-close');
		$('main').toggleClass('hide-main');
	});
}); // end of document ready

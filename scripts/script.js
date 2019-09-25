// for arrow key navigation
const page = {};
const currentPage = window.location.pathname;
switch (currentPage) {
	case '/':
		page.nextPage = 'portfolio.html';
		page.prevPage = 'contact.html';
		break;
	case '/index.html':
		page.nextPage = 'portfolio.html';
		page.prevPage = 'contact.html';
		break;
	case '/portfolio.html':
		page.nextPage = 'about-me.html';
		page.prevPage = 'index.html';
		break;
	case '/about-me.html':
		page.nextPage = 'contact.html';
		page.prevPage = 'portfolio.html';
		break;
	case '/contact.html':
		page.nextPage = 'index.html';
		page.prevPage = 'about-me.html';
		break;
}

const toggleMenu = () => {
	$('.menu').toggleClass('show-menu');
	$('.menu-button').toggleClass('menu-button-close');
	$('main').toggleClass('hide-main');
};

$(function() {
	$('#main').smoothState();
	//document ready

	$(document).keydown(function(e) {
		switch (e.key) {
			case 'ArrowLeft':
				window.location.pathname = page.prevPage;
				break;
			case 'ArrowUp':
				window.location.pathname = page.prevPage;
				break;
			case 'ArrowRight':
				window.location.pathname = page.nextPage;
				break;
			case 'ArrowDown':
				window.location.pathname = page.nextPage;
				break;
		}
		e.preventDefault();
	});
	$('.menu-button').on('click', () => {
		toggleMenu();
	});
	// end of document ready
});

// for arrow key navigation
const page = {};
const currentPage = window.location.pathname;
console.log(currentPage);
switch (currentPage) {
	case '/':
		page.nextPage = 'about-me.html';
		page.prevPage = 'contact.html';
		break;
	case '/index.html':
		page.nextPage = 'about-me.html';
		page.prevPage = 'contact.html';
		break;
	case '/about-me.html':
		page.nextPage = 'portfolio.html';
		page.prevPage = 'index.html';
		break;
	case '/portfolio.html':
		page.nextPage = 'contact.html';
		page.prevPage = 'about-me.html';
		break;
	case '/contact.html':
		page.nextPage = 'index.html';
		page.prevPage = 'portfolio.html';
		break;
}

page.toggleMenu = () => {
	$('.menu').toggleClass('show-menu');
	$('.menu-button').toggleClass('menu-button-close');
	$('main').toggleClass('hide-main');
};

$(function() {
	$('#main').smoothState({ blacklist: '.no-smoothState' });
	//document ready

	$(document).keyup(function(e) {
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
	});
	$('.menu-button').on('click', () => {
		page.toggleMenu();
	});
	// end of document ready
});

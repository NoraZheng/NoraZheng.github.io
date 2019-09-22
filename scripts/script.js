$(document).ready(function() {
  // document ready

  $('.menu-button').on('click', () => {
    $('.menu').toggleClass('show-menu');
    $('.menu-button').toggleClass('menu-button-close');
  });
}); // end of document ready

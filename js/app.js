jQuery(document).ready(function($) {
	var navbar = $(".navbar");

	$(window).scroll(function(){
		if ($(document).scrollTop() > 0 && navbar.hasClass('navbar-transparent')) {
			navbar.removeClass('navbar-transparent');
			navbar.addClass('navbar-custom');

		}else if($(document).scrollTop() == 0){
			navbar.addClass('navbar-transparent');
			navbar.removeClass('navbar-custom');
		}
	})

});
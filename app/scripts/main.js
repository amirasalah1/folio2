$(document).ready(function () {
	$('.carousel').carousel({
		interval: 2300
	});
	var homeoff = $('.home').offset().top - $('header').offset().top,
	aboutoff = $('.about').offset().top - $('header').offset().top,
	serviceoff = $('.services').offset().top - $('header').offset().top,
	mworkoff = $('.work').offset().top - $('header').offset().top,
	conoff = $('.contact').offset().top - $('header').offset().top;
	$('.navigation .home').click(function(){
		event.preventDefault();
		$('body,html').animate({scrollTop: homeoff });
	});
	$('.navigation .aboutdiv').click(function(){
		event.preventDefault();
		$('body,html').animate({scrollTop: aboutoff });
	});
	$('.navigation .service').click(function(){
		event.preventDefault();
		$('body,html').animate({scrollTop: serviceoff });
	});
	$('.navigation .mwork').click(function(){
		event.preventDefault();
		$('body,html').animate({scrollTop: mworkoff });
	});
	$('.navigation .con').click(function(){
		event.preventDefault();
		$('body,html').animate({scrollTop: conoff });
	});
	/************/
	$('.work-samples li').hover(function(){
		$(this).find('.green-overlay').animate({'margin-top':0}, {queue: false}, 'linear');
     	}, function(){
     		$(this).find('.green-overlay').animate({'margin-top':240}, {queue: false}, 'linear');
     	});
});

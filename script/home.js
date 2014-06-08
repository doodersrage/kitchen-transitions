$(function(){
	// pull center block to fill full vertical
	$('.container').height($(window).height());
	
	$(window).resize(function(){
		$('.container').height($(window).height());
	});
	
	// fade out on click
	$('nav a').bind('click', function(e){
		// prevent default link click action
		e.preventDefault();
		
		// gather clicked link href
		clkHref = $(this).attr('href');
		
		$('.container').fadeOut('slow',function(){
			window.location = clkHref;
		});
	});
		
	// init home background gallery
	$.vegas('slideshow', {
		delay: 7000,
		backgrounds:[
			{ src:'img/home-bg.jpg', fade: 4000 },
			{ src:'img/home-bg1.jpg', fade: 4000 },
			{ src:'img/home-bg3.jpg', fade: 4000 }
		]
	})();
});

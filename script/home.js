$(function(){
	// pull center block to fill full vertical
	$('.container').height($(window).height());
	
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
});

//jQuery
$(document).ready(function($) {
	/*Content Swapping*/
	//Links in nav-bar
	$('nav li').click(function() {
		$('.active').addClass('topMenu').removeClass('active');//Replace active with topMenu in nav-bar
		$(this).addClass('active').removeClass('topMenu');//Replace topMenu with active in nav-bar
		$('section:nth-of-type('+$(this).data('rel')+')').stop().fadeIn(400, 'linear').siblings('section').stop().fadeOut(400, 'linear');//FadeIn/Out content
	});
	//Links in page
	$('a').click(function() {
		$('section:nth-of-type('+$(this).data('rel')+')').stop().fadeIn(400, 'linear').siblings('section').stop().fadeOut(400, 'linear');//FadeIn/Out content
		$('.active').addClass('topMenu').removeClass('active');//Replace active with topMenu in nav-bar
		$('nav li:nth-of-type('+$(this).data('rel')+')').addClass('active').removeClass('topMenu');//Replace topMenu with active in nav-bar
	});
	
	/*Nav Link hover*/
	$("nav li").hover(function(){
        $(this).fadeTo(250, 0.7);
        }, function(){
        $(this).fadeTo(250, 1);
    });
	
	/*Page Link Hover*/
	$("#ucdlink").hover(function(){
		$("#mainImage").attr("src", "./imgs/ucd.gif");
	},  function(){
		$("#mainImage").attr("src", "./imgs/brian_cropped.jpg");
	});
	$("#projects-link").hover(function(){
		$("#mainImage").attr("src", "./imgs/appIcon.png");
	},  function(){
		$("#mainImage").attr("src", "./imgs/brian_cropped.jpg");
	});
})(jQuery);
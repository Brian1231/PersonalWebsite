
//jQuery
$(document).ready(function($) {
	/*Content Swapping*/
	//Links in nav-bar
	$('nav li').click(function() {
		var sectionNumber = $(this).data('rel');
		$('.active').addClass('topMenu').removeClass('active');//Replace active with topMenu in nav-bar
		$(this).addClass('active').removeClass('topMenu');//Replace topMenu with active in nav-bar
		
		$('section:nth-of-type(' + sectionNumber + ')').siblings('section').fadeOut(400, 'linear');//FadeOut
		$('section:nth-of-type(' + sectionNumber + ')').delay(400).fadeIn(400, 'linear');//FadeIn
		//$('section:nth-of-type(' + sectionNumber + ')').fadeIn(400, 'linear').siblings('section').fadeOut(400, 'linear');//FadeIn/Out content
	});
	//Links in page
	$('a').click(function() {
		var sectionNumber = $(this).data('rel');
		$('section:nth-of-type(' + sectionNumber + ')').siblings('section').fadeOut(400, 'linear');//FadeOut
		$('section:nth-of-type(' + sectionNumber + ')').delay(400).fadeIn(400, 'linear');//FadeIn
		$('.active').addClass('topMenu').removeClass('active');//Replace active with topMenu in nav-bar
		$('nav li:nth-of-type('+sectionNumber+')').addClass('active').removeClass('topMenu');//Replace topMenu with active in nav-bar
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
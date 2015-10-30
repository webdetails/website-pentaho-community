$(document).ready(function(){
	$('#whats-new-images .preview-block img').hover(function() {
		var current = $(this);
		var link = $(this).attr('src');
		var currentLink = $('#image-set-display-1').attr('src');

		if(link != currentLink) {
			current.closest('.screen-previewer').find('.preview-block').removeClass('active');
			current.parent().addClass('active');
			$('#image-set-display-1').stop().hide().attr('src',link).fadeIn(500);
		}
	});
	$('#marketplace-images .preview-block img').hover(function() {
		var current = $(this);
		var link = $(this).attr('src');
		var currentLink = $('#image-set-display-2').attr('src');

		if(link != currentLink) {
			current.closest('.screen-previewer').find('.preview-block').removeClass('active');
			current.parent().addClass('active');
			$('#image-set-display-2').stop().hide().attr('src',link).fadeIn(500);
		}
	});

	$('#marketplace-tab').click(function() {
		$('#carouselSliderDiv').addClass('second');
	});

	$('#description-tab').click(function() {
		$('#carouselSliderDiv').removeClass('second');
	});

	$('#buttonDownloadCE, #buttonDownloadCE-small').click(function() {
		$('html, body').animate({
	        scrollTop: $("#downloadList").offset().top
	    }, 2000);
	});

	$('.mainConceptOption').click(function() {
		$conceptContainer = $(this).closest('.row');
		$conceptContainer.find('.mainConceptOption').removeClass('active');
		$conceptContainer.find('.mainConceptContent').removeClass('active');
		$(this).addClass('active');
		var myID = $(this).attr('id');
		myID = "" + myID + "Content";
		$conceptContainer.find('#'+myID).addClass('active');
	});

	if (!Modernizr.svg) {
		navbarSrc = $("a.navbar-brand img").attr("src");
		navbarSrc = navbarSrc.replace('svg','png');
	  	$("a.navbar-brand img").attr("src", navbarSrc);
	}
	$("a.navbar-brand").attr("target", "_blank");
});

function removeOpen() {
	if((($('.dropdown-menu').is(":hover") == false) && ($('.dropdown').is(":hover") == false)) && ($(window).width() > 920)) {
		$('.dropdown').removeClass('open');
	}
}

function filterItems(input) {
	$('.dev-item').hide();
	searchingTitle = input.toUpperCase();

	$('.dev-item').each(function() {
		itemTitle = $(this).find('p.in-development-title').text().toUpperCase();
		if(itemTitle.indexOf(searchingTitle) > 0) {
			$(this).show();
		}
	});

	if(input == '') {
		$('.dev-item').show();
	}
}

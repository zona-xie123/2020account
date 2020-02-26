$(document).ready(function () {
	//rellax
	var rellax = new Rellax('.rellax', {
		center: true,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	  });
			 //faq_down
			 $('.qa-section').each(function(i) {
		
				var _number = i;
				$(this).click(function() {
					$(this).toggleClass('active-qa')
						$('.answer').eq(_number).slideToggle(200);
				});
		});
		// Variables
		var clickedTab = $(".tabs > .active");
		var tabWrapper = $(".tab__content");
		var activeTab = tabWrapper.find(".active");
	
		
		// Show tab on page load
		activeTab.show();
		$(".tabs > li").on("click", function() {
			
			// Remove class from active tab
			$(".tabs > li").removeClass("active");
			
			// Add class active to clicked tab
			$(this).addClass("active");
			
			// Update clickedTab variable
			clickedTab = $(".tabs .active");
			
			// fade out active tab
			activeTab.fadeOut(250, function() {
				
				// Remove active class all tabs
				$(".tab__content > li").removeClass("active");
				
				// Get index of clicked tab
				var clickedTabIndex = clickedTab.index();
	
				// Add class active to corresponding tab
				$(".tab__content > li").eq(clickedTabIndex).addClass("active");
				
				// update new active tab
				activeTab = $(".tab__content > .active");
				
				// Update variable
				activeTabHeight = activeTab
				
				// Animate height of wrapper to new tab height
				tabWrapper.stop().animate({
					height: activeTabHeight
				}, 250, function() {
					
					// Fade in active tab
					activeTab.fadeIn(250);
					
				});
			});
		});
		
	    //jQuery for page scrolling feature - requires jQuery Easing plugin
		$('.kv .scroll-down a').bind('click', function(event) {
			// alert("hi");
			 var $anchor = $(this);
			 $('html, body').stop().animate({
			   scrollTop: ($($anchor.attr('href')).offset().top - 100)
			 }, 1500);
			 event.preventDefault();
		   });
		   			//錨點
		$('nav ul li a').click(function () {

			//Animate
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 50
			}, 400);
			return false;
		});

	// 選單置頂
	$(window).scroll(function () {
		if ($(this).scrollTop() > 480) {
			$('header').addClass('navFixed');
		} else {
			$('header').removeClass('navFixed');
		}
	});
	//faq_down
	$('.qa .qa-section h4').each(function (i) {

		var _number = i;
		$(this).click(function () {
			$(this).toggleClass('active-qa')
			$('.qa .qa-section p').eq(_number).slideToggle(200);
		});
	});
	$('.gifts .precautions h3').click(function () {
		$('.gifts .precautions h3').toggleClass('rotate-arrow')
		$('.precautions ol').slideToggle();
	})
	// nav
	$('.main-nav ul li a').click(function () {
		$('.target-burger,.main-nav,header .container').removeClass('toggled')
		// $('.navbar-toggle').removeClass('active-toggle')
	})

	var gotop = $('.top-btn');
	gotop.click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			gotop.fadeIn();
		} else {
			gotop.stop().fadeOut();
		}
	});
	FastClick.attach(document.body);
	$('a.target-burger').click(function (e) {
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
	});
})
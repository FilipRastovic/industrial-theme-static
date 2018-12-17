$(document).ready(function(){(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link 
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scrolla
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 54
  // });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

	// Growth Phases Tabs
	var phase = 0;
	var phase2 = 0;
	$('.phaseLeft .phaseNav').each(function(){
		phase++;
		$(this).attr('index', 'item-'+phase);
	});
	$('.phaseRight .phaseContent').each(function(){
		phase2++;
		$(this).attr('index', 'item-'+phase2);
	});
	$('.phaseLeft .phaseNav').click(function(){
		var item = $(this).attr('index');
		$('.phaseLeft .phaseNav').removeClass('activeTab');
		$('.phaseRight .phaseContent').removeClass('activeTab');
		$(this).addClass('activeTab');
    $('.phaseRight .phaseContent').filter('[index='+item+']').addClass('activeTab');
    
  });
  $('.phaseLeft .phaseNav,.phaseRight .phaseContent').filter('[index="item-1"]').addClass('activeTab');
	if ($(window).width() > 600) {
    
	}
	// if ($(window).width() < 767) {
    // $('.phaseContent').filter('index,', 'item-1').addClass('activeTab');
		// $('#phases .phaseRight').insertAfter('.phaseNav.activeTab');
		// $('.phaseLeft .phaseNav').click(function(){
		// 	$('#phases .phaseRight').insertAfter('.phaseNav.activeTab');
		// });
  // }
  
  AOS.init();
$("#cta-portfolio").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#portfolio").offset().top
  }, 400);
});

$("#scroll-top").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#page-top").offset().top
  }, 700);
});

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
       // document.getElementById("scroll-top").style.display = "block";
    } else {
       // document.getElementById("scroll-top").style.display = "none";
    }
}


});
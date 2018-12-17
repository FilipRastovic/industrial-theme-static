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
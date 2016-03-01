// Write any custom javascript functions here
$(document).ready(function(){

  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

   $('.menu-text a').on('click', function(e) {
   	e.preventDefault();
   	console.log("shippar3");
   	var target = $(this.hash);
   	//console.log(target);
   	//$(target).smoothScroll();
	$('html,body').animate({
		scrollTop:target.offset().top-76
	}, 1000);

   	/*
    $.smoothScroll({
      scrollElement: $('div.scrollme'),
      scrollTarget: target
    }); */
    return false;
  });


 
});
// Write any custom javascript functions here
$(document).ready(function(){

/*
one_list=$("#n_list_one");
one= new Foundation.Magellan(one_list, data-bar-offset);
two_list=$("#drop2");
two= new Foundation.Magellan(two_list);

*/


  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,

 
  });

   

//nav bar controls:
$(window).scroll(function() {
	var scroll=$(window).scrollTop();
    if (scroll >= 50) {
        $('#logo-image').attr('src', './media/logo2.png')
        $(".title-bar").addClass("padding-on-my-header");
    }
    if (scroll < 50) {
        $(".title-bar").removeClass("padding-on-my-header");
        $('#logo-image').attr('src', './media/logo1.png')
    }
});

$('#menue_btn').on('click', function(e) {
   	e.preventDefault();
   	var target = $(this.hash);
   	//console.log(target);
   	//$(target).smoothScroll();
	$("#drop2").toggleClass("hidden");

    return false;
  });

 
});
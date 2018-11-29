


// $(document).ready(function () {
// console.log(curcol.c2);

// 	$('.curcol.c2').click(function(){
// 		$('.glasses.t1').attr("src","img/gla_color_1.jpeg");
// 	});
// });


$(function() {
	$('.top').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow'); 
		return false;
	});
	 
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 400){
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});
});

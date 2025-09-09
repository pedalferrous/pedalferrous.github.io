$(document).ready(function() {

	$('.glow-image').each(function (index) {
		var num = Math.random() * 2;
    	$(this).css('animation-delay', num.toString() + "s");
	});

});

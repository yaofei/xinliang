
var url = document.location.href;

$('#nav-top').find('a').each(function(index, node) {
	if (node.href == url) {
		$(node).parent().addClass('active');
	}
	else {
		$(node).parent().removeClass("active");
	}
	
});



/*$(document).ready(function() {
	$('h3').addClass('spacing');
})*/
//Landing Page Animation
$(document).ready(function () {
    setTimeout(function () {
        $("#main").removeClass("is-loading");
    }, 100)
});

// Back-to-top-button
var btn = $('#button');

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '300');
});

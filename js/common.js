$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	document.querySelector('.modal__close').addEventListener('click', () => {
		document.querySelector('.modal__menu').style.transform = 'translateY(-100%)'
		setTimeout(()=> {
			document.querySelector('.modal__menu').style.display = 'none'
		}, 500)
	})
	document.querySelector('.modal__btn').addEventListener('click', () => {
		document.querySelector('.modal__menu').style.display = 'flex'
		setTimeout(()=> {
			document.querySelector('.modal__menu').style.transform = 'translateY(0%)'
		}, 500)
	})
	document.querySelectorAll('.modal__nav .nav__link').forEach(element => {
		element.addEventListener('click', () => {
			document.querySelector('.modal__menu').style.transform = 'translateY(-100%)'
			setTimeout(()=> {
				document.querySelector('.modal__menu').style.display = 'none'
			}, 500)
		})
	});

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	
	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

});

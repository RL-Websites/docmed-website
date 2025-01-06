$(document).ready(function () {
	$(".question-btn").click(function () {
		const targetId = $(this).data("toggle");
		const $target = $("#" + targetId);

		$(".answer").not($target).slideUp();
		$(".accordion__icon")
			.not($(this).find(".accordion__icon"))
			.removeClass("rotate-180")
			.addClass("rotate-0");

		$target.slideToggle();

		const $icon = $(this).find(".accordion__icon");
		if ($icon.hasClass("rotate-180")) {
			$icon.removeClass("rotate-180").addClass("rotate-0");
		} else {
			$icon.removeClass("rotate-0").addClass("rotate-180");
		}
	});
	// Accordion configuration done

	const header = $("header");

	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 100) {
			header.addClass("sticky");
		} else {
			header.removeClass("sticky");
		}
	});
	// Header Sticky added

	var currentPath = window.location.pathname;

	$(".header__menus a").each(function () {
		if ($(this).attr("href") === currentPath) {
			$(".header__menus a").removeClass("active");
			$(this).addClass("active");
		}
	});
});

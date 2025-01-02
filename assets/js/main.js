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
});

document.addEventListener("DOMContentLoaded", () => {
	if (typeof WOW === "function") {
		new WOW().init();
	}

	const slideUp = (element, duration = 300) => {
		if (window.getComputedStyle(element).display === "none") {
			return;
		}
		element.style.transitionProperty = "height, margin, padding";
		element.style.transitionDuration = `${duration}ms`;
		element.style.boxSizing = "border-box";
		element.style.height = `${element.offsetHeight}px`;
		// force repaint
		element.offsetHeight;
		element.style.overflow = "hidden";
		element.style.height = "0";
		element.style.paddingTop = "0";
		element.style.paddingBottom = "0";
		element.style.marginTop = "0";
		element.style.marginBottom = "0";

		window.setTimeout(() => {
			element.style.display = "none";
			element.style.removeProperty("height");
			element.style.removeProperty("padding-top");
			element.style.removeProperty("padding-bottom");
			element.style.removeProperty("margin-top");
			element.style.removeProperty("margin-bottom");
			element.style.removeProperty("overflow");
			element.style.removeProperty("transition-duration");
			element.style.removeProperty("transition-property");
		}, duration);
	};

	const slideDown = (element, duration = 300) => {
		if (window.getComputedStyle(element).display !== "none") {
			return;
		}
		element.style.removeProperty("display");
		let { display } = window.getComputedStyle(element);
		if (display === "none") {
			display = "block";
		}
		element.style.display = display;

		const height = element.scrollHeight;
		element.style.overflow = "hidden";
		element.style.height = "0";
		element.style.paddingTop = "0";
		element.style.paddingBottom = "0";
		element.style.marginTop = "0";
		element.style.marginBottom = "0";
		element.offsetHeight;
		element.style.transitionProperty = "height, margin, padding";
		element.style.transitionDuration = `${duration}ms`;
		element.style.height = `${height}px`;
		element.style.removeProperty("padding-top");
		element.style.removeProperty("padding-bottom");
		element.style.removeProperty("margin-top");
		element.style.removeProperty("margin-bottom");

		window.setTimeout(() => {
			element.style.removeProperty("height");
			element.style.removeProperty("overflow");
			element.style.removeProperty("transition-duration");
			element.style.removeProperty("transition-property");
		}, duration);
	};

	const hamburger = document.querySelector(".hamburger");
	const menu = document.querySelector(".mnu_top");

	if (hamburger && menu) {
		hamburger.addEventListener("click", () => {
			const shouldOpen = hamburger.classList.toggle("is-active");
			if (shouldOpen) {
				slideDown(menu, 300);
			} else {
				slideUp(menu, 300);
			}
		});
	}

	const navReviewItems = document.querySelectorAll(".nav_rev > div");
	const reviews = document.querySelectorAll(".item_rev");

	const activateReview = (reviewId) => {
		if (!reviewId) return;
		const targetReview = document.getElementById(reviewId);
		if (!targetReview || targetReview.classList.contains("active")) {
			return;
		}

		reviews.forEach((review) => review.classList.remove("active"));
		targetReview.classList.add("active");

		navReviewItems.forEach((navItem) => {
			navItem.classList.toggle("active", navItem.dataset.revid === reviewId);
		});
	};

	navReviewItems.forEach((navItem) => {
		navItem.addEventListener("click", () => {
			activateReview(navItem.dataset.revid);
		});
	});
});

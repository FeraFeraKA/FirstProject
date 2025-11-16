document.addEventListener("DOMContentLoaded", () => {
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

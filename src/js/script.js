// Navbar Fixed
window.onscroll = () => {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

// Swiper

var swiper = new Swiper("#portfolio-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	navigation: {
		nextEl: "#next",
		prevEl: "#prev",
	},
});

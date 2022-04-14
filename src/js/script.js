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

const cards = document.querySelectorAll(".card");
if (cards.length != 0) {
	cards.forEach((card) => {
		const autoScroll = () => {
			const p = card.querySelector("p");
			let maxScroll = p.scrollHeight - p.clientHeight;
			if (maxScroll != 0) {
				const scroll = setInterval(() => {
					p.scrollTop += 1;
					p.scrollTop == maxScroll ? clearInterval(scroll) : [];
				}, 50);

				p.onwheel = () => {
					clearInterval(scroll);
				};
				card.onmouseout = () => {
					card.classList.remove("active");
					clearInterval(scroll);
				};
				card.ontouchend = () => {
					card.classList.remove("active");
					clearInterval(scroll);
				};
			}
			// console.log(maxScroll);
		};
		card.addEventListener("mouseover", () => {
			card.classList.add("active");
			autoScroll();
		});
		card.addEventListener("touchstart", () => {
			card.classList.add("active");
			autoScroll();
		});
	});
}

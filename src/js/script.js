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
		const p = card.querySelector("p");
		const h = card.querySelector("h5");
		const resetScrolh5 = () => {};
		const autoScroll = () => {
			let maxScroll = p.scrollHeight - p.clientHeight;
			let maxScrollh5 = h.scrollWidth - h.clientWidth;
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
			if (maxScrollh5 != 0) {
				const scrollh5 = setInterval(() => {
					h.scrollLeft += 1;
					h.scrollLeft == maxScrollh5 ? clearInterval(scrollh5) : [];
				}, 50);

				card.addEventListener("mouseout", () => {
					card.classList.remove("active");
					clearInterval(scrollh5);
					h.scrollLeft = 0;
				});
				card.addEventListener("touchend", () => {
					card.classList.remove("active");
					clearInterval(scrollh5);
					h.scrollLeft = 0;
				});
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

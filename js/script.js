$(document).ready(function () {
	$('.menu__items').click(function () {
		if ($(this).children().length > 0) {
			$('.menu__arrow').toggleClass('menu__arrow--rotate')
			$('.header__bottom').toggleClass('header__bottom--active')
			$('body').toggleClass('bg_active');
		}
	})

	const swiperScreen = new Swiper('.swiper.phone-screen', {
		centeredSlides: true,
		speed: 2000,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2.6,
			},
			768: {
				slidesPerView: 2.05,
			},
			1250: {
				slidesPerView: 2.5,
			}
		}
	});

	const swiperPortfolio = new Swiper('.swiper.portfolio', {
		speed: 2000,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: swiperScreen,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},

	});

	const swiperLeft = new Swiper('.swiper.direction-left', {
		slidesPerView: 'auto',
		centeredSlides: true,
		freeMode: true,
		loop: true,
		speed: 5000,
		disableOnInteraction: false,
		autoplay: {
			delay: 1,
		},
		spaceBetween: 20,
		breakpoints: {
			768: {
				spaceBetween: 40
			}
		}
	});

	const swiperRight = new Swiper('.swiper.direction-right', {
		slidesPerView: 'auto',
		centeredSlides: true,
		freeMode: true,
		loop: true,
		speed: 5000,
		disableOnInteraction: false,
		autoplay: {
			delay: 1,
			reverseDirection: true,
		},
		spaceBetween: 20,
		breakpoints: {
			768: {
				spaceBetween: 40
			}
		}
	});

	$(".swiper.direction-left").mouseenter(function () {
		swiperLeft.autoplay.stop();
	});

	$(".swiper.direction-left").mouseleave(function () {
		swiperLeft.autoplay.start();
	});

	$(".swiper.direction-right").mouseenter(function () {
		swiperRight.autoplay.stop();
	});

	$(".swiper.direction-right").mouseleave(function () {
		swiperRight.autoplay.start();
	});

	$('.submenu__items').click(function () {
		$('.submenu__items').removeClass('submenu__items--active')
		$(this).addClass('submenu__items--active')

		let itemData = $(this).attr('data')
		
		$('.submenu__content').removeClass('submenu__content--active')
		$(this)
			.parents('.submenu')
			.siblings('.submenu__content-wrap')
			.children(`[data=\"${itemData}\"]`)
			.addClass('submenu__content--active')
	})
})
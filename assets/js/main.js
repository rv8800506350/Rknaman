
// hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],

        onInitialized: function(event) {
        var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
        doAnimations($firstAnimatingElements);
        },

        onChanged: function(event){
        var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
        doAnimations($firstAnimatingElements);
        }
    });

    //hero slider do animations
    function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationDuration = $this.data('duration');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay,
                'animation-duration': $animationDuration,
                '-webkit-animation-duration': $animationDuration,
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
//

 window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        const topbar = document.querySelector(".header-top");

        if (window.scrollY > 100) {
            navbar.classList.add("fixed");
            topbar.classList.add("hide-topbar");
        } else {
            navbar.classList.remove("fixed");
            topbar.classList.remove("hide-topbar");
        }
    });


    //
var swiper = new Swiper(".gallery_slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 1113000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    576: { slidesPerView: 2.2 },
    768: { slidesPerView: 2.2 },
    992: { slidesPerView: 4.3 },
  },
});


var swiper = new Swiper(".products_slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    576: { slidesPerView: 2.2 },
    768: { slidesPerView: 2.2 },
    992: { slidesPerView: 3.3 },
  },
});

// =====================================
    // aboutus
    // =====================================

    new Swiper(".aboutus_main_slider", {

        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 800,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        breakpoints: {

            0:{slidesPerView:1},
            576:{slidesPerView:1},
            768:{slidesPerView:1},
            992:{slidesPerView:1},
            1200:{slidesPerView:1},

        },

    });

     // =====================================
    // aboutus overlay
    // =====================================

    new Swiper(".aboutus_overlay_slider", {

        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 1000,

        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },

        breakpoints: {

            0:{slidesPerView:1},
            576:{slidesPerView:1},
            768:{slidesPerView:1},
            992:{slidesPerView:1},
            1200:{slidesPerView:1},

        },

    });

// ================= TESTIMONIALS SWIPER =================
function initTestimonialsSwiper() {

  const sliderEl = document.querySelector(".testimonials_swiper_slider");
  const paginationEl = document.querySelector(".testimonials_section .swiper-pagination");

  if (!sliderEl || !paginationEl) return;

  // destroy old swiper
  if (window.testimonialsSwiper) {
    window.testimonialsSwiper.destroy(true, true);
  }

  window.testimonialsSwiper = new Swiper(".testimonials_swiper_slider", {

    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 1000,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    observer: true,
    observeParents: true,

    pagination: {
      el: ".testimonials_section .swiper-pagination",
      clickable: true,

      renderBullet: function (index, className) {

        let img = window.testiImages[index];

        return `
          <span class="${className}">
            <img src="${img}" alt="testimonial">
          </span>
        `;
      },
    },

    navigation: {
      nextEl: ".testimonials_section .swiper-button-next",
      prevEl: ".testimonials_section .swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },
    },
  });
}

// init
document.addEventListener("DOMContentLoaded", function () {
  initTestimonialsSwiper();
});
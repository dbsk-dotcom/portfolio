
//fullpage 초기화
$('#fullpage').fullpage({
  // responsiveWidth: 1100, // 일반 스크롤로 변경 
  navigation: true, //기본값 false
  navigationPosition: 'right', //기본값 right
  navigationTooltips: ['Visual', 'Business', 'Value', 'Slogan'],
  showActiveTooltip: false,//네비 글자 노출\

  onLeave: function (origin, destination, direction, trigger) {

    if (destination == 6) {
      $("#fp-nav").fadeOut();
    } else {
      $("#fp-nav").fadeIn();
    }

    if (destination == 1) {
      $("#header").fadeIn();
    } else {
      $("#header").fadeOut();
    }

  }// 마지막 푸터에는 내비게이션 뜨지 않게
});

//WOW
new WOW().init();


// swiper
// 이상하게 구현됨
const visual_list = new Swiper(".visual_list", {
  // autoplay: {
  //   delay: 7000, // 슬라이드가 머무르는 시간, 5000=5초
  //   disableOnInteraction: true, // 스와이프 후 자동 재생이 비활성화 되지 않음
  // },

  spaceBetween: 0,
  parallax: true,
  effect: "fade",
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // on: {
  //   slideChange: function () {
  //     // Remove animation classes from all slides
  //     $('.swiper-slide').find('.wow').removeClass('animate__fadeInUp');

  //     // Add animation class to the active slide
  //     const activeSlide = $('.swiper-slide-active').find('.wow');
  //     activeSlide.addClass('animate__fadeInUp');
  //   }
  // }
});




// visual_list 넣으면 이상해짐
// const visual_list = new Swiper(".visual_list", {
//   spaceBetween: 0,
//   loop: false,
//   effect: "fade",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

// });

// business
// document.addEventListener("DOMContentLoaded", function () {
//   const bizItems = document.querySelectorAll(".business_txt .biz");

//   bizItems.forEach((item) => {
//     item.addEventListener("mouseenter", function () {
//       bizItems.forEach((el) => el.classList.remove("hover"));
//       this.classList.add("hover");
//     });

//     item.addEventListener("mouseleave", function () {
//       this.classList.remove("hover");
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const licenseItems = document.querySelectorAll(".business_txt2 .license_equipment");

//   licenseItems.forEach((item) => {
//     item.addEventListener("mouseenter", function () {
//       licenseItems.forEach((el) => el.classList.remove("hover")); // 기존 hover 클래스 제거
//       this.classList.add("hover"); // 현재 요소에 hover 클래스 추가
//     });

//     item.addEventListener("mouseleave", function () {
//       this.classList.remove("hover"); // 마우스를 떼면 hover 클래스 제거

//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  function initHoverEvents() {
    const bizItems = document.querySelectorAll(".business_txt .biz");
    const licenseItems = document.querySelectorAll(".business_txt2 .license_equipment");

    // 1100px 이상일 때만 동작
    if (window.innerWidth > 1024) {
      // bizItems hover 이벤트
      bizItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          bizItems.forEach((el) => el.classList.remove("hover"));
          this.classList.add("hover");
        });

        item.addEventListener("mouseleave", function () {
          this.classList.remove("hover");
        });
      });

      // licenseItems hover 이벤트
      licenseItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          licenseItems.forEach((el) => el.classList.remove("hover"));
          this.classList.add("hover");
        });

        item.addEventListener("mouseleave", function () {
          this.classList.remove("hover");
        });
      });
    }
  }

  // 초기 실행
  initHoverEvents();

  // 창 크기가 변경될 때마다 이벤트 다시 초기화
  window.addEventListener("resize", function () {
    // 1100px 이하로 줄어들면 이벤트를 제거
    if (window.innerWidth <= 1024) {
      const bizItems = document.querySelectorAll(".business_txt .biz");
      const licenseItems = document.querySelectorAll(".business_txt2 .license_equipment");

      bizItems.forEach((item) => {
        item.removeEventListener("mouseenter", function () { });
        item.removeEventListener("mouseleave", function () { });
      });

      licenseItems.forEach((item) => {
        item.removeEventListener("mouseenter", function () { });
        item.removeEventListener("mouseleave", function () { });
      });
    } else {
      // 1100px 이상이면 이벤트를 다시 추가
      initHoverEvents();
    }
  });
});














/* SOLUTION slide */
const solution_list = new Swiper('.solution_list', {
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: { //768px 이상에서 
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
  },
});


/* PARTNER slide */
const partner_list = new Swiper('.partner_list', {
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1024: { //1024px 이상에서 
      slidesPerView: 6,
      spaceBetween: 80,
    },
    1400: {
      slidesPerView: 8,
      spaceBetween: 100,
    },
  },
});
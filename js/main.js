// fullpage 초기화
$('#fullpage').fullpage({
  //옵션
  responsiveWidth: 1024, // 일반 스크롤로 변경
  navigation: true, //기본값 false
  navigationPosition: 'left', // 기본값 right
  navigationTooltips: ['SINSWAY', 'Solution', 'Business', 'Partner'], // 노출되는 네비 글자를 여기에 입력
  showActiveTooltip: true, // 기본값 false , 네비 글자가 보이게 하는 것
  onLeave: function (origin, destination, direction, trigger) {
    //destination 1번섹션을 떠나서 2번섹션에 도달했을때
    //색인 사용
    if (destination == 2 || destination == 4) {
      $("#header,#fp-nav").addClass("active")
    } else {
      $("#header,#fp-nav").removeClass("active")
    }


    if (destination == 5) {
      $("#fp-nav").fadeOut();
    } else {
      $("#fp-nav").fadeIn();
    }
  }
});

//mgnb
$(".ham").click(function () {
  $("this").fadeToggle("active");
  $(".mgnb_wrap").fadeToggle();
  let txt = $(".ham").text();
  console.log(txt);
  if (txt == "메뉴보기") {
    //조건이 만족했을 때 실행문 true
    $(".ham").text("메뉴닫기");
  } else {
    //조건이 만족하지 않았을 때 실행문 false
    $(".ham").text("메뉴보기");
  }
});


/* solution_list */
const solution_list = new Swiper(".solution_list", {
  slidesPerView: "3.5", // 한 슬라이드에 보여줄 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
});

/* partner_list */
const partner_list = new Swiper(".partner_list", {

  autoplay: {
    delay: 0, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  speed: 6000,
  loop: true,
  slidesPerView: "8", // 한 슬라이드에 보여줄 갯수
  spaceBetween: 100, // 슬라이드 사이 여백
});
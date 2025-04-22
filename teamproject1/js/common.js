
/* 2차 menu */
$(".gnb > li").hover(function () {
  $(this).find(".menu1").stop().slideToggle();

  let menu2 = $(this).find(".menu2");
  if (menu2.is(":hidden")) {
    menu2.css("display", "flex").hide().stop().slideToggle();
  } else {
    menu2.stop().slideToggle(function () {
      $(this).css("display", "none");
    });
  }
});








//mobile menu
$(".ham").click(function () {
  $(this).toggleClass("active");
  $(".mgnb_wrap").toggleClass("active");

});


$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});







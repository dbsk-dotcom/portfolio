

// depth2
$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().fadeIn();
  $("#header").addClass("active");
});

$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().fadeOut();
  $("#header").removeClass("active");
});

//search

$(".btn_search").click(function () {
  $(this).toggleClass("active"); // .btn_search에 active 클래스 토글
  $(".search").fadeToggle(); // .search 박스를 토글 애니메이션으로 표시/숨김
  $("#header").toggleClass("active"); // #header에 active 클래스 토글
});



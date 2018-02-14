$(function() {
  $.scrollify({
    section : ".think-section",
    easing: "easeOutExpo",
    scrollSpeed: 1700,
    scrollbars: false,
    updateHash: false,
    touchScroll:true
  });
  new WOW().init();
});

$(document).ready(function() {

  var windowHeight = $(window).height();
  var windowScrollPosTop = $(window).scrollTop();
  var windowScrollPosBottom = windowHeight + windowScrollPosTop;


// jQuery reveral on scroll method. Set opacity on element to 0 before using

  $.fn.revealOnScroll = function() {
    return this.each(function() {

      var objectOffset = $(this).offset();
      var objectOffsetTop = objectOffset.top;

      if (!$(this).hasClass("complete")) {
        if (windowScrollPosBottom > objectOffsetTop) {
          $(this).css("opacity", 1).addClass("complete");
        };
      };
    })
  }

  $(window).scroll(function() {
    windowHeight = $(window).height();
    windowScrollPosTop = $(window).scrollTop();
    windowScrollPosBottom = windowHeight + windowScrollPosTop;

    $(".about-me").revealOnScroll();




  });

});

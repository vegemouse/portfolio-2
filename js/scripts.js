$(document).ready(function() {

  // smooth scroll function
  $(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

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

    $("#about").revealOnScroll();

  });

});

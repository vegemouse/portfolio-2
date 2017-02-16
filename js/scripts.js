var projects = [
  {
    name: "Edythe Swidler LMFT",
    description: "A business website for Edythe Swidler, a therapist in Sacramento, CA",
    pageURL: "http://www.edytheswidlermft.com/",
    repoURL: "https://github.com/vegemouse/chc",
    imageURL: "img/thumbnails/chc-screen.png"
  },
  {
    name: "Haven",
    description: "Haven is a resource management and survival game built using Angular 2.",
    pageURL: "https://haven-e5b1e.firebaseapp.com/",
    repoURL: "https://github.com/vegemouse/Haven",
    imageURL: "img/thumbnails/haven-screen.png"
  },
  {
    name: "SciFi Artblog",
    description: "A Sci-Fi inspired artblog with CRUD capabilities built using Ember with Firebase",
    pageURL: "https://artblog-ac8d6.firebaseapp.com/",
    repoURL: "https://github.com/vegemouse/artblog",
    imageURL: "img/thumbnails/artblog-screen.png"
  },
  {
    name: "Planeswalkr",
    description: "A simple database of Magic The Gathering players built using Angular 2 and Firebase.",
    pageURL: "https://mtg-finder.firebaseapp.com/",
    repoURL: "https://github.com/vegemouse/planeswalkr",
    imageURL: "img/thumbnails/planeswalkr-screen.png"
  },
  {
    name: "Tofu",
    description: "A website built to advertise tofu made using pure HTML and CSS. Fully responsive.",
    pageURL: "https://vegemouse.github.io/tofu/",
    repoURL: "https://github.com/vegemouse/tofu",
    imageURL: "img/thumbnails/tofu-screen.png"
  },
  {
    name: "Epicodus Track Suggester",
    description: "A Javascript quiz used to determine with Epicodus track would be best for you.",
    pageURL: "https://vegemouse.github.io/track-suggester/",
    repoURL: "https://github.com/vegemouse/track-suggester",
    imageURL: "img/thumbnails/track-screen.png"
  },
  {
    name: "Oregon Wild",
    description: "A rebuild of the Arctic Wild site using Flexbox.",
    pageURL: "https://vegemouse.github.io/oregon-wild/",
    repoURL: "https://github.com/vegemouse/oregon-wild",
    imageURL: "img/thumbnails/oregon-screen.png"
  },
  {
    name: "Tap Room",
    description: "This app tracks taps for various beer taps built using Angular 2.",
    pageURL: "https://github.com/vegemouse/tap-list",
    repoURL: "https://github.com/vegemouse/tap-list",
    imageURL: "img/thumbnails/tap-screen.png"
  },
  {
    name: "Quiz Page",
    description: "Quiz Landing Page displaying transparent cards built using Sass and Bourbon Neat.",
    pageURL: "https://vegemouse.github.io/quiz-page",
    repoURL: "https://github.com/vegemouse/quiz-page",
    imageURL: "img/thumbnails/quiz-screen.png"
  },
  {
    name: "Dino Eggs",
    description: "Mock product website design for dinosaur eggs. Created using CSS Flexbox.",
    pageURL: "https://vegemouse.github.io/dinosaur-page",
    repoURL: "https://github.com/vegemouse/dinosaur-page",
    imageURL: "img/thumbnails/dino-screen.png"
  },
  {
    name: "Rilakumma",
    description: "A Rilakkuma 'about' page built using old fashion floats and media queries.",
    pageURL: "https://vegemouse.github.io/rilakkuma",
    repoURL: "https://github.com/vegemouse/rilakkuma",
    imageURL: "img/thumbnails/rilakkuma-screen.png"
  },
  {
    name: "Think With Google Clone",
    description: "A rebuild of the 'Think With Google' heading. Built without a grid framework using media queries.",
    pageURL: "https://vegemouse.github.io/think-with-google-clone/",
    repoURL: "https://github.com/vegemouse/think-with-google-clone",
    imageURL: "img/thumbnails/think-screen.png"
  },
  {
    name: "Pizza Ordering Website",
    description: "Mock website for ordering pizzas built with Javascript objects and constructors.",
    pageURL: "https://vegemouse.github.io/pizza/",
    repoURL: "https://github.com/vegemouse/pizza",
    imageURL: "img/thumbnails/pizza-screen.png"
  },
  {
    name: "Pig Dice",
    description: "Pig Dice game built using Javascript and jQuery.",
    pageURL: "https://vegemouse.github.io/pig-dice/",
    repoURL: "https://github.com/vegemouse/pig-dice",
    imageURL: "img/thumbnails/pig-dice-screen.png"
  },
  {
    name: "Ping Pong",
    description: "JavaScript 'ping pong' test application.",
    pageURL: "https://vegemouse.github.io/ping-pong/",
    repoURL: "https://github.com/vegemouse/ping-pong",
    imageURL: "img/thumbnails/ping-pong-screen.png"
  }
]



$(document).ready(function() {

  // display projects
  projects.forEach(function(project) {
    $("#projects").append("<div class='project'><img src='" + project.imageURL + "' alt='" + project.name + "'><div class='project-description'><div class='description-content'><a href='" + project.pageURL + "' target='_blank'><h5>" + project.name + "</h5></a><p>" + project.description + "</p><a href='" + project.pageURL + "' target='_blank'><i class='fa fa-window-maximize' aria-hidden='true'></i></a><a href='" + project.repoURL + "' target='_blank'><i class='fa fa-github-alt' aria-hidden='true'></i></a></div></div></div>")
  })

  // smooth scroll function
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: ($(hash).offset().top - 50)
      }, 400, function(){
        window.location.hash = hash;
      });
    } // End if
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
    $("#projects").revealOnScroll();
    $("#contact").revealOnScroll();
  });

});

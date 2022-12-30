gsap.registerPlugin(ScrollTrigger);

$(function () {
  var lastScrollTop = 0,
    delta = 15;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && lastScrollTop > 0) {
      // downscroll code
      $("header").css("top", "-160px");
      $("header").removeClass("header-bg");
    } else {
      // upscroll code
      $("header").css("top", "0px");
      $("header").addClass("header-bg");
    }
    lastScrollTop = st;
  });
});


let slideContainer = document.querySelector(".builder");

if (slideContainer) {
  let sections = gsap.utils.toArray(".b_section");

  gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: slideContainer,
        pin: true,
        scrub: 0.1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000"
      }
    });
}



// const builderBtn = document.querySelector("a.builderBtn");
// const builderPage = document.querySelector(".builder");

// if (builderBtn) {

//   const close = builderPage.querySelector(".uk-offcanvas-close");

//   builderBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     builderPage.classList.toggle("display");
//     // $("body").css("overflow-y", "hidden");
//   });

//   close.addEventListener("click", () => {
//     builderPage.classList.remove("display");
//     // $("body").css("overflow-y", "scroll");
//   });

// }


const aboutShowDiv = document.querySelector(".intro .desc");

if (aboutShowDiv) {
  const btn = aboutShowDiv.querySelector(".show_btn");

  btn.addEventListener("click", () => {
    aboutShowDiv.classList.toggle("display");
  });
}


const intro = document.querySelector(".intro_wrap .intro");

if (intro) {
  const bLink = intro.querySelector(".desc .show_btn");
  const imgPin = intro.querySelector(".image .img");

  bLink.addEventListener("click", () => {

    const mm = gsap.matchMedia();
    mm.add("(min-width:769px)", () => {
      gsap.to(".img", {
        scrollTrigger: {
          trigger: intro,
          start: "top top",
          end: "bottom bottom",
          pin: imgPin,
        },
      });
    });
    mm.add("(max-width:768px)", () => {
      gsap.to(".img", {
        scrollTrigger: {
          pin: false,
        },
      });
    });
  });
}


$(document).ready(function () {
  $(".pub-slider").slick ({
    centerPadding: "0px",
    arrows: false,
    dots: true,
    autoplay: false,
    draggable: true,
    speed: 1100,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-left'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          dots: false
        },
      },
    ],
  });
});


$(document).ready(function () {
  $(".press-slider").slick ({
    centerPadding: "0px",
    arrows: false,
    dots: true,
    autoplay: false,
    draggable: true,
    speed: 1100,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-left'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          dots: false
        },
      },
    ],
  });
});



const service = document.querySelector(".services");

if (service) {
  const mm = gsap.matchMedia();
  mm.add("(min-width:769px)", () => {
    gsap.to(".heading", {
      scrollTrigger: {
        trigger: ".services .heading",
        start: "top-=8% top",
        pin: ".services .heading",
        pinSpacing: false,
        endTrigger: service,
        end: "bottom center",
      },
    });
  });
  mm.add("(max-width:768px)", () => {
    gsap.to(".heading", {
      scrollTrigger: {
        pin: false,
      },
    });
  });
}


$(document).ready(function () {
  $(".clients-slider").slick({
    slidesToShow: 5,
    // slidesToScroll: 20,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 481,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 100,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});


$(document).ready(function () {
  $(".rev-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    draggable: true,
    cssEase: "linear",
    arrows: true,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-left'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },

      {
        breakpoint: 100,
        settings: {
          centerMode: false,
        },
      },
    ],
  });
});

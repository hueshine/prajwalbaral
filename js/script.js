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

const aboutShowDiv = document.querySelector(".intro .desc");

if (aboutShowDiv) {
  const btn = aboutShowDiv.querySelector(".show_btn");
  const wrap = document.querySelector(".intro_wrap .intro ");

  btn.addEventListener("click", () => {
    aboutShowDiv.classList.toggle("display");
    wrap.classList.toggle("displayed");
  });
}

const intro = document.querySelector(".intro_wrap .intro");

if (intro) {
  const descheight = intro.querySelector(".desc");
  const bLink = intro.querySelector(".desc .show_btn");
  const imgPin = intro.querySelector(".image .img");

  bLink.addEventListener("click", () => {
    console.log(descheight.offsetHeight);

    ScrollTrigger.create({
      trigger: intro,
      start: "top top",
      end: "bottom bottom",
      pin: imgPin,
    });
  });
}

gsap.utils.toArray(".pub-slider").forEach((container) => {
  let children = gsap.utils.toArray(container.children); // number of slides
  let slick = $(container).slick({
    centerPadding: "0px",
    arrows: false,
    dots: true,
    autoplay: false,
    draggable: true,
    speed: 1100,
    slidesToShow: 3,
    waitForAnimate: false,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top+=20%",
      endtrigger: container,
      end: "+=500",
      scrub: true,
      pin: ".slick-wrapper",
    },
  });
  let changeSlide = () =>
    slick.slick(tl.scrollTrigger.direction < 0 ? "slickPrev" : "slickNext");
  children.forEach((child, i) => tl.add(changeSlide, i + 1));
  tl.set({}, { delay: 1 });
});

gsap.utils.toArray(".press-slider").forEach((container) => {
  let children = gsap.utils.toArray(container.children); // number of slides
  let slick = $(container).slick({
    centerPadding: "0px",
    arrows: false,
    dots: true,
    autoplay: false,
    draggable: true,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top+=20%",
      endtrigger: container,
      end: "+=500",
      scrub: true,
      pin: ".press",
    },
  });
  let changeSlide = () =>
    slick.slick(tl.scrollTrigger.direction < 0 ? "slickPrev" : "slickNext");
  children.forEach((child, i) => tl.add(changeSlide, i + 1));
  tl.set({}, { delay: 1 });
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
        // markers: true
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

// const displayed = document.querySelector(".intro_wrap .displayed");

// if (displayed) {
//     console.log("working");

//     const mm = gsap.matchMedia();
//     mm.add("(min-width:769px)", () => {
//         gsap.to(".img", {
//             scrollTrigger: {
//                 trigger: ".intro",
//                 start: "top top",
//                 pin: true,
//                 pinSpacing: false,
//                 endTrigger: ".intro ",
//                 end: "bottom bottom",
//                 markers: true
//             },
//         });
//     });
//     mm.add("(max-width:768px)", () => {
//         gsap.to(".img", {
//             scrollTrigger: {
//                 pin: false,
//             },
//         });
//     });
// }

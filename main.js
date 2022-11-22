const menu = document.querySelector(".nav__links");

const menuButton = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("nav__open");
});

// Sticky Menu
window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Counter Up JS
$(document).ready(function ($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom;
  }
  //Count up code
  function countUp() {
    $(".timer").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      ended = $this.attr("ended");

      if (ended != "true" && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500, //duration of counting
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
        $this.attr("ended", "true");
      }
    });
  }
  //Start animation on page-load
  if (isScrolledIntoView(".timer")) {
    countUp();
  }
  //Start animation on screen
  $(document).scroll(function () {
    if (isScrolledIntoView(".timer")) {
      countUp();
    }
  });
});

//back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//  Redirect
function Redirect() {
  window.location = "https://www.w3schools.com/";
}
// Slick slider

$(document).ready(function () {
  $(".slick-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon>
    </button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 3000,
  });
});

// detail popup
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
// parallax
let heading = $("#heading");

let desc = $("#desc");
let button = $("#buttons");

let layer = $("#main");

let heading2 = $("#heading-2");

let desc2 = $("#desc-2");

let button2 = $("#buttons-2");

let heading3 = $("#heading-3");

let desc3 = $("#desc-3");

let button3 = $("#buttons-3");

layer.mousemove(function (e) {
  let ivalueX = (e.pageX * -1) / 20;
  let ivalueY = (e.pageY * -1) / 10;
  let cvalueX = (e.pageX * -1) / 30;
  let cvalueY = (e.pageY * -1) / 20;
  heading.css(
    "transform",
    "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)"
  );
  desc.css("transform", "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)");
  button.css(
    "transform",
    "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)"
  );
  heading2.css(
    "transform",
    "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)"
  );
  desc2.css("transform", "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)");
  button2.css(
    "transform",
    "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)"
  );
  heading3.css(
    "transform",
    "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)"
  );
  desc3.css("transform", "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)");
  button3.css(
    "transform",
    "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)"
  );
});
layer.mouseout(function (e) {
  heading.css("transform", "translate3d(none)");
  desc.css("transform", "translate3d(none)");
  button.css("transform", "translate3d(none)");
  heading2.css("transform", "translate3d(none)");
  desc2.css("transform", "translate3d(none)");
  button2.css("transform", "translate3d(none)");
  heading3.css("transform", "translate3d(none)");
  desc3.css("transform", "translate3d(none)");
  button3.css("transform", "translate3d(none)");
});

// Service carousel
$(".service-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  margin: 25,
  dots: true,
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,

    },
  },
});




$(document).ready(function () {
  // Toggle menu open when navbar-toggler is clicked
  $(".navbar-toggler").click(function () {
    $("body, html").addClass("toggle-menu");
  });

  // Close menu when cross icon is clicked
  $(".ico-close").click(function () {
    $("body, html").removeClass("toggle-menu");
  });

  // Close menu only when clicking outside the menu or the cross icon
  $(document).on("click", function (e) {
    if (
      $(".navbar-collapse").hasClass("show") && // Check if menu is open
      !$(e.target).closest(".navbar-collapse, .navbar-toggler, .navbar-nav").length // Allow clicks inside navbar items
    ) {
      $("body, html").removeClass("toggle-menu");
    }
  });

  // Fixed header on scroll
  if ($(window).width() >= 768) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 150) {
        $("header").addClass("fixed-header");
      } else {
        $("header").removeClass("fixed-header");
      }
    });
  }

  // Populate menu content
  var menu = $(".navbar-collapse").html();
  var em = $(".ht-detail").html();
  $(".m-menu-scroll").html(menu);
  $(".m-menu-scroll .navbar-nav").after(em);
});
let currentSlide = 0;
const slider = document.querySelector(".vt-list");
const items = document.querySelectorAll(".vt-item");

function getItemsPerView() {
  if (window.innerWidth <= 576) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}



// document.addEventListener("DOMContentLoaded", function () {
//   const lazyLoadYouTube = (element) => {
//     const videoSrc = element.dataset.src;
//     const iframe = document.createElement("iframe");
//     iframe.setAttribute("loading", "lazy");
//     iframe.setAttribute("width", "100%");
//     iframe.setAttribute("height", "240");
//     iframe.setAttribute("src", videoSrc);
//     iframe.setAttribute("title", "YouTube video player");
//     iframe.setAttribute("frameborder", "0");
//     iframe.setAttribute(
//       "allow",
//       "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     );
//     iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
//     iframe.setAttribute("allowfullscreen", true);

//     element.parentElement.replaceChild(iframe, element);
//   };

//   const lazyVideos = document.querySelectorAll(".lazy-video");

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         lazyLoadYouTube(entry.target);
//         observer.unobserve(entry.target);
//       }
//     });
//   });

//   lazyVideos.forEach((video) => {
//     observer.observe(video);
//   });

//   // For immediate video load on click (if user prefers clicking over scrolling)
//   document.querySelectorAll(".play-button").forEach((button) => {
//     button.addEventListener("click", function () {
//       const image = this.previousElementSibling;
//       lazyLoadYouTube(image);
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const lazyVideos = document.querySelectorAll(".lazy-video");

//   lazyVideos.forEach((video) => {
//     video.addEventListener("click", function () {
//       const videoSrc = this.dataset.src + "?autoplay=1&rel=0";
//       const iframe = document.createElement("iframe");

//       iframe.setAttribute("src", videoSrc);
//       iframe.setAttribute("frameborder", "0");
//       iframe.setAttribute("allow", "autoplay; encrypted-media");
//       iframe.setAttribute("allowfullscreen", "true");
//       iframe.style.width = "100%";
//       iframe.style.height = "100%";

//       this.innerHTML = ""; // Clear thumbnail and play button
//       this.appendChild(iframe);
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const lazyVideos = document.querySelectorAll(".lazy-video");

  lazyVideos.forEach((video) => {
    video.addEventListener("click", function () {
      const videoSrc = this.dataset.src + "?autoplay=1&rel=0";
      const iframe = document.createElement("iframe");

      iframe.setAttribute("src", videoSrc);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.style.width = "100%";
      iframe.style.height = "100%";

      this.innerHTML = ""; // Clear the thumbnail and play button
      this.appendChild(iframe);
    });
  });
});






const scrollArea = document.querySelector(
  ".social-validation-section-scroll-area"
);
const imageList = document.querySelector(
  ".social-validation-section-image-list"
);


// Clone the images to allow infinite scrolling
imageList.innerHTML += imageList.innerHTML;

// Start the scrolling loop
let scrollOffset = 0;

function infiniteScroll() {
  scrollOffset -= 1; // Adjust speed here
  if (Math.abs(scrollOffset) >= imageList.scrollWidth / 2) {
    scrollOffset = 0; // Reset to simulate infinite loop
  }
  imageList.style.transform = `translateX(${scrollOffset}px)`;
  requestAnimationFrame(infiniteScroll); // Continuously call the function
}

infiniteScroll();

function toggleAccordion(header) {
  const item = header.parentElement;
  const currentlyActive = document.querySelector(".accordion-item.active");

  if (currentlyActive && currentlyActive !== item) {
    currentlyActive.classList.remove("active");
  }

  item.classList.toggle("active");
}

//header subtabs
document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.querySelectorAll(".dropdown-toggle");

  dropdownToggle.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var submenu = this.nextElementSibling;
      submenu.classList.toggle("show");
    });
  });

  // Close submenu when clicking outside
  document.addEventListener("click", function () {
    document
      .querySelectorAll(".dropdown-menu.submenu")
      .forEach(function (submenu) {
        submenu.classList.remove("show");
      });
  });
});














// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the result section
  const appointmentButton1 = document.querySelector("#btn");
 
    
  const enquiryForm = document.getElementById("enquiry-form");


 
appointmentButton1.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      block: "start", // Adjusted to align the top of the section with the viewport
    });
  });



});






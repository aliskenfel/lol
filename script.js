document.addEventListener("DOMContentLoaded", function () {
  // Show the loader immediately on page load
  document.querySelector(".loader-wrapper").style.display = "flex";

  // Hide the loader when all resources (including images) are loaded
  window.addEventListener("load", function () {
      document.querySelector(".loader-wrapper").style.display = "none";
  });

  const container = document.querySelector('.container');

  let isScrolling = false;
  let scrollTimer;

  window.addEventListener("scroll", function () {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
          isScrolling = false;
      }, 100);
  });

  function smoothScroll() {
      if (isScrolling) {
          requestAnimationFrame(smoothScroll);
          const currentScrollTop = window.scrollY;
          scrollContainer.scrollTop += (currentScrollTop - scrollContainer.scrollTop) / 5;
      }
  }

  window.addEventListener("wheel", function () {
      isScrolling = false;
  });

  window.addEventListener("resize", function () {
      isScrolling = false;
  });

  window.addEventListener("scroll", function () {
      if (!isScrolling) {
          requestAnimationFrame(smoothScroll);
      }

      const scrollY = window.scrollY;
      if (scrollY > 50) { // Adjust the scroll position where the transformation happens
          container.classList.add('island');
      } else {
          container.classList.remove('island');
      }
  });
});

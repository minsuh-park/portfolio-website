/* =========================================================
   Minsuh Park — Portfolio
   Shared behavior: mobile nav toggle
   ========================================================= */
(function () {
  "use strict";

  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelector(".nav-links");

  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    links.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close the mobile menu when a nav link is chosen
  links.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      closeMenu();
    }
  });

  // Close the mobile menu when resizing back up to desktop width
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();

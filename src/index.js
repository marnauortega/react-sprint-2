import * as bootstrap from "/node_modules/bootstrap/dist/js/bootstrap.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------- FADE IN ANIMATIONS ---------- */

let fadeOnScroll = function (element, top = "50%") {
  gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: element,
        start: `${top} bottom`,
        // markers: true,
      },
    }
  );
};

const sections = gsap.utils.toArray(document.querySelectorAll(".section"));

sections.forEach((e) => fadeOnScroll(e));

/* ---------- HAMBURGER MENU ---------- */

const hambBtn = document.querySelector("#hamb-btn");
const navLogo = document.querySelector("#nav-logo");
const menuBg = document.querySelector("#menu-background");
const menuIcons = document.querySelector("#menu-icons");

let state = "collapsed";

hambBtn.addEventListener("click", function () {
  menuBg.classList.toggle("shown");
  menuIcons.classList.toggle("shown");

  if (state === "collapsed") {
    // Cause bug when bundling:
    // navLogo.src = "images/logo-light.svg";
    // hambBtn.style.backgroundImage = 'url("/src/images/icon-close.svg")';
    // Instead:
    navLogo.classList.toggle("logo-light");
    hambBtn.classList.toggle("icon-close");
    state = "expanded";
  } else if (state === "expanded") {
    // Cause bug when bundling:
    // navLogo.src = "images/logo.svg";
    // hambBtn.style.backgroundImage = 'url("/src/images/icon-hamburger.svg")';
    // Instead:
    navLogo.classList.toggle("logo-light");
    hambBtn.classList.toggle("icon-close");
    state = "collapsed";
  }
});

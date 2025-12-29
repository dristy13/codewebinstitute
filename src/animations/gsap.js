import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUpOnScroll = (selector) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
};

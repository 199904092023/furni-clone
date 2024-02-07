import gsap from "gsap";

export const headingAnimate = () => {
  let timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline
    .fromTo(".app-bar", { y: "-100%", ease: "bounce.in" }, { y: "0%" })
    .fromTo(".main-logo", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
    .fromTo(".menu-bar",{x:"100vw",opacity:0},{x:0,ease:"back",duration:1.4,opacity:1})
};


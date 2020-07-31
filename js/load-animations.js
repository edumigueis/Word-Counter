var tl = new TimelineLite();
tl.from(".left-wrapper", {
  duration: 1.3,
  ease: Power1.easeOut,
  x: "-45vw",
}).to(".left-wrapper", { duration: 1.3, x: 0 });

var tl2 = new TimelineLite();
tl2
  .from(".main-form", {
    duration: 1,
    ease: Power1.easeOut,
    y: "-10vh",
    opacity: 0,
  })
  .to(".main-form", { duration: 1, y: 0, opacity: 1 });

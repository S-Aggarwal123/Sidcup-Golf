let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  // console.log(dets);

  // console.log(dets.x);

  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + "px";

  // sirf itna krne se mera blur ka left corner hi pointer k sath chl rha h

  //to mujhe sath chlane m ya to kuch pixels m add kr du crsr m ya phir minus kr du blur se

  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

//nav k sare h4

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    elem.style.color = "#000";
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #fff";
    crsr.style.backgroundColor = "#95C11E";
    elem.style.color = "#fff";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",

  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",

    // markers: true,
    start: "top -20%",
    end: "top -30%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  // duration: 5,

  scrollTrigger: {
    trigger: "#main",

    // scroller: "#body",

    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 1,
  },
});

gsap.from("#about-us img , #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 58%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  duration: 1,
  opacity: 0,
  stagger: 0.1,

  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    end: " top 72%",
    scrub: 1,
  },
});

gsap.to("#colon1", {
  x: -40,
  y: -40,
  duration: 1,

  scrollTrigger: {
    trigger: "#colon1 ",
    scroller: "body",
    // markers: true,
    start: "top 5%",
    end: "top 1%",
    scrub: 3,
  },
});

gsap.to("#colon2", {
  x: -40,
  y: -40,
  duration: 1,

  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    start: "top 45%",
    end: "top 40%",
    scrub: 3,
  },
});

gsap.from("#page4 h1", {
  y: 90,

  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 100%",
    // markers: true,
    scrub: 1,
  },
});

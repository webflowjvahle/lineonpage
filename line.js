// Split text and GSAP Animation
let typeSplit;

// Split the text up
function runSplit() {
  typeSplit = new SplitType(".split-lines", {
    types: "lines, words",
  });
  $(".line").append("<div class='line-mask'></div>");
  createAnimation();
}
runSplit();

function createAnimation() {
  $(".line").each(function (index) {
    let tl = gsap.timeline();
    tl.to($(this).find(".line-mask"), {
      width: "0%",
      duration: 5,
    });
  });
}

gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');

const showDemo = () => {
  document.body.style.overflow = 'auto';


  // (w.scrollWidth - section.offsetWidth) * -1]
  gsap.utils.toArray('section').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = index % 2 ? ['-100%', '80%'] : [w.scrollWidth * 1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1 } });


  });
};

imagesLoaded(images).on('always', showDemo);

document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1 });

});

const isHover = e => e.parentElement.querySelector(':hover') === e;    

const redArea = document.getElementById('ska');
const myCursor = document.getElementById('csr')
document.addEventListener('mousemove', function checkHover() {
  const hoveredRed = isHover(redArea);
  if (hoveredRed === true) {
    myCursor.style.background = 'white'
  } else {
    myCursor.style.background = 'red'
  }

});

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
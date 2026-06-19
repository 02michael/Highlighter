gsap.registerPlugin(DrawSVGPlugin);

const containers = document.querySelectorAll('.link');
const allPaths = document.querySelectorAll('.stroke-path');

// hide all paths initially
allPaths.forEach(path => {
  gsap.set(path, { drawSVG: '0% 0%', opacity: 0 });
});

containers.forEach(container => {
  const paths = container.querySelectorAll('.stroke-path');

  container.addEventListener('click', () => {
    // active class
    containers.forEach(c => c.classList.remove('active'));
    container.classList.add('active');

    // reset all paths
    gsap.to(allPaths, {
      drawSVG: '0% 0%',
      opacity: 0,
      duration: 0.3
    });

    // animate both overlapping paths for this word
    gsap.to(paths, {
      drawSVG: '0% 100%',
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      // stagger: 0.5 // slight offset between the two strokes
    });
  });
});


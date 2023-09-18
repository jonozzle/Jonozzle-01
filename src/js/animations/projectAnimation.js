import gsap from 'gsap';

const projectAnimation = (container) => {
  const h1 = container.querySelectorAll('header');
  const h2 = container.querySelectorAll('main');
  const timeline = gsap.timeline({});
  const bgColor = container.dataset.bgColor || '#ffffff';
  container.style.backgroundColor = bgColor;
  timeline

    .from(h1, {
      y: 100,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: "power2.out",
      clearProps: "all",
    }, 0)

    .from(h2, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })


    .eventCallback('onStart', () => {
      container.classList.add('transition-active');
    })
    .eventCallback('onComplete', () => {
      container.classList.remove('transition-active');
    });

  return timeline;
};

export default projectAnimation;







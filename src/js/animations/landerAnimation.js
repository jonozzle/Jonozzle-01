import gsap from 'gsap';

const landerAnimation = (container) => {
  const text = container.querySelectorAll('.lander-fill');
  const nav = container.querySelectorAll('.nav-about');
  const timeline = gsap.timeline({});
  const bgColor = container.dataset.bgColor || '#ffffff';
  container.style.backgroundColor = bgColor;
  timeline

    .from(text, {
      y: "100vh",
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: "power2.out",
    }, 0)
    .from(nav, {
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

export default landerAnimation;







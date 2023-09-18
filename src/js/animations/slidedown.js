import gsap from 'gsap';

const slidedown = (container) => {
  const timeline = gsap.timeline();
  const bgColor = container.dataset.bgColor || '#ffffff';
  container.style.backgroundColor = bgColor;
  timeline
    .fromTo(container, { yPercent: 0, autoAlpha: 1 }, { yPercent: 100, autoAlpha: 1, duration: 2, ease: "power2.out", })


    .eventCallback('onStart', () => {
      container.classList.add('transition-active');
    })
    .eventCallback('onComplete', () => {
      container.classList.remove('transition-active');

    });
  return timeline;
};

export default slidedown;

import gsap from 'gsap';

const fadeout = (container) => {
  const timeline = gsap.timeline({});
  const bgColor = container.dataset.bgColor || '#ffffff';
  container.style.backgroundColor = bgColor;
  timeline
    .fromTo(container, { opacity: 1 }, { opacity: 0, duration: 2, ease: "power2.out", })

    .eventCallback('onStart', () => {
      container.classList.add('transition-active');
    })
    .eventCallback('onComplete', () => {
      container.classList.remove('transition-active');
    });

  return timeline;
};

export default fadeout;







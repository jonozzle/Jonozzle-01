import gsap from 'gsap';

const slideup = (container) => {
  const timeline = gsap.timeline({});
  const bgColor = container.dataset.bgColor || '#ffffff';
  container.style.backgroundColor = bgColor;
  timeline
    .fromTo(container, { top: "100vh" }, { top: "0vh", duration: 2, ease: "power2.out", })

    .eventCallback('onStart', () => {
      container.classList.add('transition-active');
    })
    .eventCallback('onComplete', () => {
      container.classList.remove('transition-active');
    });

  return timeline;
};

export default slideup;







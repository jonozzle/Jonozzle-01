import gsap from 'gsap';

const slideup_end = (container) => {
  const timeline = gsap.timeline();
  timeline
    .to(container, { yPercent: 100, autoAlpha: 1, duration: 1 })
    .eventCallback('onStart', () => container.classList.add('transition-active')) // Add the class on transition start
    .eventCallback('onComplete', () => container.classList.remove('transition-active')); // Remove the class on transition complete
  return timeline;
};

export default slideup_end;

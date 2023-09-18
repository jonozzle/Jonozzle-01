import gsap from 'gsap';

const homeAnimation = (container) => {
  const text = container.querySelectorAll('.title-fill');
  const nav = container.querySelectorAll('.nav-about');
  const lander = container.querySelectorAll('.lander');
  const timeline = gsap.timeline({});
  const bgColor = container.dataset.bgColor || '#ffffff';
  container.style.backgroundColor = bgColor;

  const firstThreeText = Array.from(text).slice(0, 3);

  timeline

    .set(lander, {
      display: 'flex'
    })

    .to(lander, {
      delay: 8,
      yPercent: -100,
      duration: 1.5,
      ease: "power2.out",
    }, 0
    )

    .from(firstThreeText, {
      delay: 7.85,
      y: 50,
      opacity: 0,
      stagger: 0.35,
      duration: 0.75,
      ease: "power2.out",
      clearProps: "all",
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

export default homeAnimation;







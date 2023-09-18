import gsap from 'gsap';

const stick = (container) => {
    const bgColor = container.dataset.bgColor || '#ffffff';
    container.style.backgroundColor = bgColor;
    return gsap.to(container, { autoAlpha: 1, duration: 2 })
};


export default stick;

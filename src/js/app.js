import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import fitty from 'fitty';

import { slideup, slideup_end, slidedown, stick, lettershuffle, imagebounce, MouseTrail, homeAnimation, fadeout, landerAnimation, projectAnimation, mobileimages, jonozzle, landerword } from './animations';

barba.use(barbaPrefetch);

function fittext() {
  if (window.innerWidth >= 1024) {
    fitty('.project-title');
  }
}

window.addEventListener('resize', fittext);

/*
const addAnimatingClass = (container) => {
  container.classList.add('is-animating');
};

const removeAnimatingClass = (container) => {
  container.classList.remove('is-animating');
};
*/





barba.init({
  debug: true,
  transitions: [

    /*
        {
          sync: true,
          name: 'lander',
          to: {
            namespace: ['lander']
          },
    
          once: ({ next }) => {
            landerAnimation(next.container),
              fittext();
            lettershuffle();
    
          },
          leave: ({ current }) => fadeout(current.container),
          enter: ({ next }) => {
    
            fittext();
            lettershuffle();
            imagebounce();
            MouseTrail();
            homeAnimation(next.container);
          },
        },
    */
    /*
        {
          sync: true,
          name: 'lander-home',
          from: {
            namespace: ['lander'],
          },
          to: {
            namespace: ['home']
          },
    
    
          leave: ({ current }) => {
            fadeout(current.container),
              fittext();
            lettershuffle();
            imagebounce();
            MouseTrail();
          },
          enter: ({ next }) => {
            fittext();
            lettershuffle();
            imagebounce();
            MouseTrail();
            homeAnimation(next.container);
          },
        },
    */

    {
      sync: true,
      name: 'home',
      to: {
        namespace: ['home']
      },

      once: ({ next }) => {
        landerword();
        MouseTrail();
        homeAnimation(next.container);
        fittext();
        imagebounce();
        lettershuffle();
        mobileimages();
        jonozzle();
      },

      leave: ({ current }) => slidedown(current.container),
      enter: ({ next }) => {
        stick(next.container);

        fittext();
        imagebounce();
        MouseTrail();
        lettershuffle();
        mobileimages();
        jonozzle();
      },
    },




    {
      sync: true,
      name: 'project',
      to: {
        namespace: ['project']
      },
      once: ({ next }) => {
        projectAnimation(next.container);
        jonozzle();

      },
      leave: ({ current }) => stick(current.container),
      enter: ({ next }) => { slideup(next.container); },
    },
  ],
});





barba.hooks.after(({ next }) => {
  window.scrollTo(0, 0);
});

/*
barba.hooks.beforeEnter(({ next }) => {
  // initAnimation(next.container);
  fittext(document);
  MouseTrail(next.container);
  imagebounce(next.container);
});
*/





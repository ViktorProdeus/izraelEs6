import './vendor/swiper';
import './vendor/move-to';
import './vendor/iMask';
import {forEachPolyfill} from './utils/polyfill-foreach';

forEachPolyfill();

window.addEventListener(`load`, () => {

  const tabsContainerBlock = document.querySelector(`.programs__list-wrapper`);

  if (tabsContainerBlock) {
    const breakpoint = matchMedia(`(min-width:768px)`);
    let mySwiper;

    const breakpointChecker = function () {

      if (breakpoint.matches === true) {

        if (mySwiper) {
          mySwiper.destroy(true, true);
        }

        return;

      } else if (breakpoint.matches === false) {

        enableSwiper();
      }
    };


    const enableSwiper = function () {


      // eslint-disable-next-line no-undef
      mySwiper = new Swiper(tabsContainerBlock, {

        slidesPerView: `auto`,
        freeMode: true,

        scrollbar: {
          el: `.swiper-scrollbar`,
          hide: true
        },

      });

    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }

  const izraelSliderBlock = document.querySelector(`.izrael__slider`);

  if (izraelSliderBlock) {
    const breakpoint = matchMedia(`(min-width:1024px)`);
    let mySwiper;

    const breakpointChecker = function () {

      if (breakpoint.matches === true) {

        if (mySwiper) {
          mySwiper.destroy(true, true);
        }

        return;

      } else if (breakpoint.matches === false) {

        enableSwiper();
      }
    };

    const enableSwiper = function () {
      // eslint-disable-next-line no-undef
      mySwiper = new Swiper(izraelSliderBlock, {

        loop: true,

        pagination: {
          el: `.izrael__pagination`,
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          }
        }

      });

    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }

  const reviewsSliderBlock = document.querySelector(`.reviews__slider`);

  if (reviewsSliderBlock) {

    // eslint-disable-next-line no-undef
    const reviewsSlider = new Swiper(reviewsSliderBlock, {
      loop: true,
      autoHeight: true,

      pagination: {
        el: `.swiper-pagination`,
        type: `fraction`,
      },
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      }
    });

    reviewsSlider.slideNext();
  }


  const phoneInputs = document.querySelectorAll(`.want input, .popup__phone input, .contacts__feedback-phone input`);

  const validatePhone = () => {
    if (phoneInputs.length) {
      phoneInputs.forEach((el) => {
        const input = el;
        // eslint-disable-next-line no-undef
        return new IMask(input, {
          mask: `+{7}(000)000-00-00`
        });
      });
    }
  };

  validatePhone();


  // moveTo
  // eslint-disable-next-line no-undef
  const moveTo = new MoveTo();

  const mouseButton = document.querySelector(`.intro__button`);

  if (mouseButton) {

    const aboutBlock = document.querySelector(`.about`);

    mouseButton.addEventListener(`click`, function () {
      moveTo.move(aboutBlock);
    });
  }

  const footerLogo = document.querySelector(`.main-footer__logo`);

  if (footerLogo) {
    const introBlock = document.querySelector(`.intro`);

    footerLogo.addEventListener(`click`, function () {
      moveTo.move(introBlock);
    });
  }
});

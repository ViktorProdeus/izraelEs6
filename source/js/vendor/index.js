import Swiper from 'swiper';
import IMask from 'imask';
import MoveTo from 'moveTo';

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


  const phoneInputWant = document.querySelector(`.want input`);

  if (phoneInputWant) {
    const wantPhoneMask = new IMask(phoneInputWant, {
      mask: `+{7}(000)000-00-00`,
    });
  }

  const phoneInputPopup = document.querySelector(`.popup__phone input`);

  if (phoneInputPopup) {
    const popupPhoneMask = new IMask(phoneInputPopup, {
      mask: `+{7}(000)000-00-00`,
    });
  }

  const phoneInputContacts = document.querySelector(`.contacts__feedback-phone input`);

  if (phoneInputContacts) {
    const contactsPhoneMask = new IMask(phoneInputContacts, {
      mask: `+{7}(000)000-00-00`,
    });
  }

  // moveTo
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

const body = document.querySelector(`body`);
const popups = document.querySelectorAll(`.popup`);
const popupWrappers = document.querySelectorAll(`.popup__wrapper`);
const buttonsOrder = document.querySelectorAll(`.open-order-js`);
const buttonsClose = document.querySelectorAll(`.popup__close`);
const buttonPopup = document.querySelector(`.popup__btn-js`);

const getScrollbarWidth = function () {
  const outer = document.createElement(`div`);
  outer.style.visibility = `hidden`;
  outer.style.overflow = `scroll`;
  outer.style.msOverflowStyle = `scrollbar`;
  body.appendChild(outer);
  const inner = document.createElement(`div`);
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

const disableScrolling = function () {
  const scrollWidth = getScrollbarWidth();
  body.setAttribute(`style`, `padding-right: ` + scrollWidth + `px;`);
  body.classList.add(`body-fixed`);
};

const enableScrolling = function () {
  body.removeAttribute(`style`);
  body.classList.remove(`body-fixed`);
};


const saveNameInStorage = function (el) {
  el.value = localStorage.getItem(`name`);
  el.oninput = function () {
    localStorage.setItem(`name`, el.value);
  };
};

const savePhoneInStorage = function (el) {
  el.value = localStorage.getItem(`phone`);
  el.oninput = function () {
    localStorage.setItem(`phone`, el.value);
  };
};


const showElements = function (buttons, popup) {
  const inputName = document.querySelector(`.form-js [name=popup-name]`);
  const inputphone = document.querySelector(`.form-js [name=popup-phone]`);

  Array.prototype.forEach.call(buttons, function (i) {
    i.addEventListener(`click`, function (evt) {
      evt.preventDefault();

      disableScrolling();

      popup.classList.add(`popup--show`);
      inputName.focus();
      saveNameInStorage(inputName);
      savePhoneInStorage(inputphone);
    });
  });
};

const hideElements = function (buttons, popup) {
  Array.prototype.forEach.call(buttons, function (i) {
    i.addEventListener(`click`, function (evt) {
      evt.preventDefault();

      enableScrolling();

      popup.classList.remove(`popup--show`);
    });
  });
};

window.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    Array.prototype.forEach.call(popups, function (element) {

      if (element.classList.contains(`popup--show`)) {

        enableScrolling();
        element.classList.remove(`popup--show`);
      }
    });
  }
});

Array.prototype.forEach.call(popupWrappers, function (element) {
  element.addEventListener(`mousedown`, function (evt) {
    if (evt.target === element && evt.which === 1 || evt.target === buttonPopup) {

      enableScrolling();
      element.parentElement.classList.remove(`popup--show`);
    }
  });
});

export {
  showElements,
  hideElements,
  disableScrolling,
  buttonsOrder,
  buttonsClose
};

import {
  popupOrder,
  popupSuccess,
  submitBtns
} from './modules/const';

import {
  activateTabs,
  activateAccordion
} from './modules/utilsForModules';

import {
  showElements,
  hideElements,
  buttonsOrder,
  buttonsClose
} from './modules/popups';

import {
  borderPhone,
  addInputsListener,
  checkNameInputsValidity,
  checkPhoneInputsValidity,
  checkBoxValidity,
  checkNameInputValidity,
  checkPhoneInputValidity,
  checkBoxValidate,
  returnParent,
  showSuccessMessages,
  checkbox
} from './modules/validate';

import {forEachPolyfill} from './utils/polyfill-foreach';

forEachPolyfill();

window.addEventListener(`load`, () => {
  const programsBlock = document.querySelectorAll(`.programs`);

  if (programsBlock) {
    const tabs = document.querySelectorAll(`.programs__item-tab`);
    const activeTab = `programs__item-tab--active`;
    const itemsContent = document.querySelectorAll(`.programs__item-content`);
    const activeClass = `programs__item-content--active`;

    activateTabs(tabs, activeTab, itemsContent, activeClass);
  }

  const questionsBlock = document.querySelectorAll(`.questions`);

  if (questionsBlock) {
    const tabs = document.querySelectorAll(`.questions__tabs-item`);
    const activeTab = `questions__tabs-item--active`;

    activateAccordion(tabs, activeTab);
  }

  if (popupOrder) {
    showElements(buttonsOrder, popupOrder);
    hideElements(buttonsClose, popupOrder);
  }

  if (popupSuccess) {
    hideElements(buttonsClose, popupSuccess);
  }

  if (submitBtns) {

    submitBtns.forEach(function (el) {
      let btn = el;

      btn.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        addInputsListener();

        const parent = returnParent(evt.target, `form-js`);
        const phoneInput = parent.querySelector(`input[type=tel]`);
        const textInput = parent.querySelector(`input[type=text]`);
        const checkboxInput = parent.querySelector(`input[type=checkbox]`);
        const form = parent.querySelector(`form`);

        const clearFirstForm = () => {
          form.reset();
          phoneInput.classList.remove(`correct`);
          showSuccessMessages();
        };

        const clearSecondForm = () => {
          form.reset();
          phoneInput.classList.remove(`correct`);
          textInput.classList.remove(`correct`);
          borderPhone.classList.remove(`contacts__phone-border--show`);
          showSuccessMessages();
        };

        const clearThirdForm = () => {
          form.reset();
          phoneInput.classList.remove(`correct`);
          textInput.classList.remove(`correct`);
          showSuccessMessages();
        };

        if (!textInput) {
          checkPhoneInputValidity(phoneInput);

          if (checkPhoneInputsValidity(phoneInput)) {
            setTimeout(clearFirstForm, 500);
          }

        } else if (!checkboxInput) {
          checkPhoneInputValidity(phoneInput);
          checkNameInputValidity(textInput);

          if (checkNameInputsValidity(textInput) && checkPhoneInputsValidity(phoneInput)) {
            setTimeout(clearSecondForm, 500);
          }

        } else {
          checkBoxValidate(checkbox);
          checkPhoneInputValidity(phoneInput);
          checkNameInputValidity(textInput);

          if (checkNameInputsValidity(textInput) && checkPhoneInputsValidity(phoneInput) && checkBoxValidity(checkbox)) {
            setTimeout(clearThirdForm, 500);
          }
        }
      });
    });
  }
});

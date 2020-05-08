import {popupOrder, popupSuccess, submitBtns} from './const';
import {activateTabs, activateAccordion} from './utils';
import {showElements, hideElements, buttonsOrder, buttonsClose} from './popups';
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
} from './validate';



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

        if (!textInput) {
          checkPhoneInputValidity(phoneInput);

          if (checkPhoneInputsValidity(phoneInput)) {
            setTimeout(function () {
              form.reset();
              phoneInput.classList.remove(`correct`);
              showSuccessMessages();
            }, 500);
          }

        } else if (!checkboxInput) {
          checkPhoneInputValidity(phoneInput);
          checkNameInputValidity(textInput);

          if (checkNameInputsValidity(textInput) && checkPhoneInputsValidity(phoneInput)) {
            setTimeout(function () {
              form.reset();

              phoneInput.classList.remove(`correct`);
              textInput.classList.remove(`correct`);

              borderPhone.classList.remove(`contacts__phone-border--show`);

              showSuccessMessages();
            }, 500);
          }

        } else {
          checkBoxValidate(checkbox);
          checkPhoneInputValidity(phoneInput);
          checkNameInputValidity(textInput);

          if (checkNameInputsValidity(textInput) && checkPhoneInputsValidity(phoneInput) && checkBoxValidity(checkbox)) {
            setTimeout(function () {
              form.reset();
              phoneInput.classList.remove(`correct`);
              textInput.classList.remove(`correct`);
              showSuccessMessages();
            }, 500);
          }
        }
      });
    });
  }
});

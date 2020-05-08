import {popupOrder, popupSuccess} from './const';
import {disableScrolling} from './popups';

const inputs = document.querySelectorAll(`.form-js input`);
const nameInputs = document.querySelectorAll(`.form-js input[type=text]`);
const phoneInputs = document.querySelectorAll(`.form-js input[type=tel]`);
const borderPhone = document.querySelector(`.contacts__phone-border`);

const checkbox = document.querySelector(`.popup__checkbox input`);
const inputFeedbackPhone = document.querySelector(`.contacts__feedback-phone input[type=tel]`);


const inputsSuccessHandler = function () {
  phoneInputs.forEach(function (i) {
    if (i.value.length === 16) {
      i.classList.add(`correct`);
    } else {
      i.classList.remove(`correct`);
    }
  });

  nameInputs.forEach(function (i) {
    if (i.value.length > 0) {
      i.classList.add(`correct`);
    } else {
      i.classList.remove(`correct`);
    }
  });
};

const showBorderPhone = function () {
  if (inputFeedbackPhone.value.length >= 2) {
    borderPhone.classList.add(`contacts__phone-border--show`);

  } else {
    borderPhone.classList.remove(`contacts__phone-border--show`);
  }
};

if (inputFeedbackPhone) {

  inputFeedbackPhone.oninput = showBorderPhone;

  if (!inputFeedbackPhone) {
    inputFeedbackPhone.oninput = false;
  }
}

inputs.forEach(function (i) {
  i.addEventListener(`input`, inputsSuccessHandler);
});

const removeStyle = function (evt) {
  evt.target.classList.remove(`error`);
};

const nameInputsChangeHandler = function (evt) {
  removeStyle(evt);
};

const phoneInputsChangeHandler = function (evt) {
  removeStyle(evt);
};

const checkboxChangeHandler = function () {
  checkbox.parentNode.classList.remove(`popup__checkbox--error`);
};

const addInputsListener = function () {
  checkbox.addEventListener(`change`, checkboxChangeHandler);

  nameInputs.forEach(function (i) {
    i.addEventListener(`input`, nameInputsChangeHandler);
  });

  phoneInputs.forEach(function (i) {
    i.addEventListener(`input`, phoneInputsChangeHandler);
  });
};

const checkNameInputsValidity = function (el) {
  let flag = true;
  if (el.value === `` || el.value.length < 1) {
    flag = false;
  }
  return flag;
};

const checkPhoneInputsValidity = function (el) {
  let flag = true;
  if (el.value.length < 16) {
    flag = false;
  }
  return flag;
};

const checkBoxValidity = function (el) {
  let flag = true;

  if (!el.checked) {
    flag = false;
  }

  return flag;
};

const checkPhoneInputValidity = function (el) {
  if (!checkPhoneInputsValidity(el)) {
    el.classList.add(`error`);
  }
};

const checkNameInputValidity = function (el) {
  if (!checkNameInputsValidity(el)) {
    el.classList.add(`error`);
  }
};

const checkBoxValidate = function (el) {
  if (!checkBoxValidity(el)) {
    el.parentNode.classList.add(`popup__checkbox--error`);
  }
};


const returnParent = function (el, cssClass) {
  let element = el;
  let cls = cssClass;
  while (!element.classList.contains(cls)) {
    element = element.parentElement;

    if (!element) {
      break;
    }
  }
  return element;
};

const showSuccessMessages = function () {
  popupOrder.classList.remove(`popup--show`);
  popupSuccess.classList.add(`popup--show`);
  disableScrolling();
};

export {
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
};

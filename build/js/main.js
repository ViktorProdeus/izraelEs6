/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/const */ \"./js/modules/const.js\");\n/* harmony import */ var _modules_utilsForModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utilsForModules */ \"./js/modules/utilsForModules.js\");\n/* harmony import */ var _modules_popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popups */ \"./js/modules/popups.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validate */ \"./js/modules/validate.js\");\n/* harmony import */ var _utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/polyfill-foreach */ \"./js/utils/polyfill-foreach.js\");\n\n\n\n\n\nObject(_utils_polyfill_foreach__WEBPACK_IMPORTED_MODULE_4__[\"forEachPolyfill\"])();\nwindow.addEventListener(\"load\", function () {\n  var programsBlock = document.querySelectorAll(\".programs\");\n\n  if (programsBlock) {\n    var tabs = document.querySelectorAll(\".programs__item-tab\");\n    var activeTab = \"programs__item-tab--active\";\n    var itemsContent = document.querySelectorAll(\".programs__item-content\");\n    var activeClass = \"programs__item-content--active\";\n    Object(_modules_utilsForModules__WEBPACK_IMPORTED_MODULE_1__[\"activateTabs\"])(tabs, activeTab, itemsContent, activeClass);\n  }\n\n  var questionsBlock = document.querySelectorAll(\".questions\");\n\n  if (questionsBlock) {\n    var _tabs = document.querySelectorAll(\".questions__tabs-item\");\n\n    var _activeTab = \"questions__tabs-item--active\";\n    Object(_modules_utilsForModules__WEBPACK_IMPORTED_MODULE_1__[\"activateAccordion\"])(_tabs, _activeTab);\n  }\n\n  if (_modules_const__WEBPACK_IMPORTED_MODULE_0__[\"popupOrder\"]) {\n    Object(_modules_popups__WEBPACK_IMPORTED_MODULE_2__[\"showElements\"])(_modules_popups__WEBPACK_IMPORTED_MODULE_2__[\"buttonsOrder\"], _modules_const__WEBPACK_IMPORTED_MODULE_0__[\"popupOrder\"]);\n    Object(_modules_popups__WEBPACK_IMPORTED_MODULE_2__[\"hideElements\"])(_modules_popups__WEBPACK_IMPORTED_MODULE_2__[\"buttonsClose\"], _modules_const__WEBPACK_IMPORTED_MODULE_0__[\"popupOrder\"]);\n  }\n\n  if (_modules_const__WEBPACK_IMPORTED_MODULE_0__[\"popupSuccess\"]) {\n    Object(_modules_popups__WEBPACK_IMPORTED_MODULE_2__[\"hideElements\"])(_modules_popups__WEBPACK_IMPORTED_MODULE_2__[\"buttonsClose\"], _modules_const__WEBPACK_IMPORTED_MODULE_0__[\"popupSuccess\"]);\n  }\n\n  if (_modules_const__WEBPACK_IMPORTED_MODULE_0__[\"submitBtns\"]) {\n    _modules_const__WEBPACK_IMPORTED_MODULE_0__[\"submitBtns\"].forEach(function (el) {\n      var btn = el;\n      btn.addEventListener(\"click\", function (evt) {\n        evt.preventDefault();\n        Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"addInputsListener\"])();\n        var parent = Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"returnParent\"])(evt.target, \"form-js\");\n        var phoneInput = parent.querySelector(\"input[type=tel]\");\n        var textInput = parent.querySelector(\"input[type=text]\");\n        var checkboxInput = parent.querySelector(\"input[type=checkbox]\");\n        var form = parent.querySelector(\"form\");\n\n        var clearFirstForm = function clearFirstForm() {\n          form.reset();\n          phoneInput.classList.remove(\"correct\");\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"showSuccessMessages\"])();\n        };\n\n        var clearSecondForm = function clearSecondForm() {\n          form.reset();\n          phoneInput.classList.remove(\"correct\");\n          textInput.classList.remove(\"correct\");\n          _modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"borderPhone\"].classList.remove(\"contacts__phone-border--show\");\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"showSuccessMessages\"])();\n        };\n\n        var clearThirdForm = function clearThirdForm() {\n          form.reset();\n          phoneInput.classList.remove(\"correct\");\n          textInput.classList.remove(\"correct\");\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"showSuccessMessages\"])();\n        };\n\n        if (!textInput) {\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkPhoneInputValidity\"])(phoneInput);\n\n          if (Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkPhoneInputsValidity\"])(phoneInput)) {\n            setTimeout(clearFirstForm, 500);\n          }\n        } else if (!checkboxInput) {\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkPhoneInputValidity\"])(phoneInput);\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkNameInputValidity\"])(textInput);\n\n          if (Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkNameInputsValidity\"])(textInput) && Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkPhoneInputsValidity\"])(phoneInput)) {\n            setTimeout(clearSecondForm, 500);\n          }\n        } else {\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkBoxValidate\"])(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkbox\"]);\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkPhoneInputValidity\"])(phoneInput);\n          Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkNameInputValidity\"])(textInput);\n\n          if (Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkNameInputsValidity\"])(textInput) && Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkPhoneInputsValidity\"])(phoneInput) && Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkBoxValidity\"])(_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"checkbox\"])) {\n            setTimeout(clearThirdForm, 500);\n          }\n        }\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/const.js":
/*!*****************************!*\
  !*** ./js/modules/const.js ***!
  \*****************************/
/*! exports provided: popupOrder, popupSuccess, submitBtns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupOrder\", function() { return popupOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupSuccess\", function() { return popupSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitBtns\", function() { return submitBtns; });\nvar popupOrder = document.querySelector(\".popup--order\");\nvar popupSuccess = document.querySelector(\".popup--success\");\nvar submitBtns = document.querySelectorAll(\".submit-js\");\n\n\n//# sourceURL=webpack:///./js/modules/const.js?");

/***/ }),

/***/ "./js/modules/popups.js":
/*!******************************!*\
  !*** ./js/modules/popups.js ***!
  \******************************/
/*! exports provided: showElements, hideElements, disableScrolling, buttonsOrder, buttonsClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showElements\", function() { return showElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElements\", function() { return hideElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableScrolling\", function() { return disableScrolling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonsOrder\", function() { return buttonsOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonsClose\", function() { return buttonsClose; });\nvar body = document.querySelector(\"body\");\nvar popups = document.querySelectorAll(\".popup\");\nvar popupWrappers = document.querySelectorAll(\".popup__wrapper\");\nvar buttonsOrder = document.querySelectorAll(\".open-order-js\");\nvar buttonsClose = document.querySelectorAll(\".popup__close\");\nvar buttonPopup = document.querySelector(\".popup__btn-js\");\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.overflow = \"scroll\";\n  outer.style.msOverflowStyle = \"scrollbar\";\n  body.appendChild(outer);\n  var inner = document.createElement(\"div\");\n  outer.appendChild(inner);\n  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;\n  outer.parentNode.removeChild(outer);\n  return scrollbarWidth;\n};\n\nvar disableScrolling = function disableScrolling() {\n  var scrollWidth = getScrollbarWidth();\n  body.setAttribute(\"style\", \"padding-right: \".concat(scrollWidth, \"px;\"));\n  body.classList.add(\"body-fixed\");\n};\n\nvar enableScrolling = function enableScrolling() {\n  body.removeAttribute(\"style\");\n  body.classList.remove(\"body-fixed\");\n};\n\nvar saveNameInStorage = function saveNameInStorage(el) {\n  el.value = localStorage.getItem(\"name\");\n\n  el.oninput = function () {\n    localStorage.setItem(\"name\", el.value);\n  };\n};\n\nvar savePhoneInStorage = function savePhoneInStorage(el) {\n  el.value = localStorage.getItem(\"phone\");\n\n  el.oninput = function () {\n    localStorage.setItem(\"phone\", el.value);\n  };\n};\n\nvar showElements = function showElements(buttons, popup) {\n  var inputName = document.querySelector(\".form-js [name=popup-name]\");\n  var inputphone = document.querySelector(\".form-js [name=popup-phone]\");\n  buttons.forEach(function (i) {\n    i.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n      disableScrolling();\n      popup.classList.add(\"popup--show\");\n      inputName.focus();\n      saveNameInStorage(inputName);\n      savePhoneInStorage(inputphone);\n    });\n  });\n};\n\nvar hideElements = function hideElements(buttons, popup) {\n  buttons.forEach(function (i) {\n    i.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n      enableScrolling();\n      popup.classList.remove(\"popup--show\");\n    });\n  });\n};\n\nwindow.addEventListener(\"keydown\", function (evt) {\n  if (evt.keyCode === 27) {\n    evt.preventDefault();\n    popups.forEach(function (element) {\n      if (element.classList.contains(\"popup--show\")) {\n        enableScrolling();\n        element.classList.remove(\"popup--show\");\n      }\n    });\n  }\n});\npopupWrappers.forEach(function (element) {\n  element.addEventListener(\"mousedown\", function (evt) {\n    if (evt.target === element && evt.which === 1 || evt.target === buttonPopup) {\n      enableScrolling();\n      element.parentElement.classList.remove(\"popup--show\");\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./js/modules/popups.js?");

/***/ }),

/***/ "./js/modules/utilsForModules.js":
/*!***************************************!*\
  !*** ./js/modules/utilsForModules.js ***!
  \***************************************/
/*! exports provided: activateAccordion, removeClass, activateTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateAccordion\", function() { return activateAccordion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateTabs\", function() { return activateTabs; });\nvar removeClass = function removeClass(elem, className) {\n  elem.forEach(function (i) {\n    i.classList.remove(className);\n  });\n};\n\nvar activateAccordion = function activateAccordion(tabs, activeTab) {\n  tabs.forEach(function (tab) {\n    tab.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n\n      if (tab.classList.contains(activeTab)) {\n        removeClass(tabs, activeTab);\n      } else {\n        removeClass(tabs, activeTab);\n        tab.classList.add(activeTab);\n      }\n    });\n  });\n};\n\nvar activateTabs = function activateTabs(tabs, activeTab, itemsContent, activeClass) {\n  tabs.forEach(function (tab, i) {\n    tab.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n\n      if (tabs) {\n        removeClass(tabs, activeTab);\n        tab.classList.add(activeTab);\n      }\n\n      if (itemsContent) {\n        removeClass(itemsContent, activeClass);\n        itemsContent[i].classList.add(activeClass);\n      }\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/utilsForModules.js?");

/***/ }),

/***/ "./js/modules/validate.js":
/*!********************************!*\
  !*** ./js/modules/validate.js ***!
  \********************************/
/*! exports provided: borderPhone, addInputsListener, checkNameInputsValidity, checkPhoneInputsValidity, checkBoxValidity, checkNameInputValidity, checkPhoneInputValidity, checkBoxValidate, returnParent, showSuccessMessages, checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"borderPhone\", function() { return borderPhone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addInputsListener\", function() { return addInputsListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkNameInputsValidity\", function() { return checkNameInputsValidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkPhoneInputsValidity\", function() { return checkPhoneInputsValidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkBoxValidity\", function() { return checkBoxValidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkNameInputValidity\", function() { return checkNameInputValidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkPhoneInputValidity\", function() { return checkPhoneInputValidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkBoxValidate\", function() { return checkBoxValidate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"returnParent\", function() { return returnParent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSuccessMessages\", function() { return showSuccessMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkbox\", function() { return checkbox; });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./js/modules/const.js\");\n/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popups */ \"./js/modules/popups.js\");\n\n\nvar inputs = document.querySelectorAll(\".form-js input\");\nvar nameInputs = document.querySelectorAll(\".form-js input[type=text]\");\nvar phoneInputs = document.querySelectorAll(\".form-js input[type=tel]\");\nvar borderPhone = document.querySelector(\".contacts__phone-border\");\nvar checkbox = document.querySelector(\".popup__checkbox input\");\nvar inputFeedbackPhone = document.querySelector(\".contacts__feedback-phone input[type=tel]\");\n\nvar inputsSuccessHandler = function inputsSuccessHandler() {\n  phoneInputs.forEach(function (i) {\n    if (i.value.length === 16) {\n      i.classList.add(\"correct\");\n    } else {\n      i.classList.remove(\"correct\");\n    }\n  });\n  nameInputs.forEach(function (i) {\n    if (i.value.length > 0) {\n      i.classList.add(\"correct\");\n    } else {\n      i.classList.remove(\"correct\");\n    }\n  });\n};\n\nvar showBorderPhone = function showBorderPhone() {\n  if (inputFeedbackPhone.value.length >= 2) {\n    borderPhone.classList.add(\"contacts__phone-border--show\");\n  } else {\n    borderPhone.classList.remove(\"contacts__phone-border--show\");\n  }\n};\n\nif (inputFeedbackPhone) {\n  inputFeedbackPhone.oninput = showBorderPhone;\n\n  if (!inputFeedbackPhone) {\n    inputFeedbackPhone.oninput = false;\n  }\n}\n\ninputs.forEach(function (i) {\n  i.addEventListener(\"input\", inputsSuccessHandler);\n});\n\nvar removeStyle = function removeStyle(evt) {\n  evt.target.classList.remove(\"error\");\n};\n\nvar nameInputsChangeHandler = function nameInputsChangeHandler(evt) {\n  removeStyle(evt);\n};\n\nvar phoneInputsChangeHandler = function phoneInputsChangeHandler(evt) {\n  removeStyle(evt);\n};\n\nvar checkboxChangeHandler = function checkboxChangeHandler() {\n  checkbox.parentNode.classList.remove(\"popup__checkbox--error\");\n};\n\nvar addInputsListener = function addInputsListener() {\n  checkbox.addEventListener(\"change\", checkboxChangeHandler);\n  nameInputs.forEach(function (i) {\n    i.addEventListener(\"input\", nameInputsChangeHandler);\n  });\n  phoneInputs.forEach(function (i) {\n    i.addEventListener(\"input\", phoneInputsChangeHandler);\n  });\n};\n\nvar checkNameInputsValidity = function checkNameInputsValidity(el) {\n  var flag = true;\n\n  if (el.value === \"\" || el.value.length < 1) {\n    flag = false;\n  }\n\n  return flag;\n};\n\nvar checkPhoneInputsValidity = function checkPhoneInputsValidity(el) {\n  var flag = true;\n\n  if (el.value.length < 16) {\n    flag = false;\n  }\n\n  return flag;\n};\n\nvar checkBoxValidity = function checkBoxValidity(el) {\n  var flag = true;\n\n  if (!el.checked) {\n    flag = false;\n  }\n\n  return flag;\n};\n\nvar checkPhoneInputValidity = function checkPhoneInputValidity(el) {\n  if (!checkPhoneInputsValidity(el)) {\n    el.classList.add(\"error\");\n  }\n};\n\nvar checkNameInputValidity = function checkNameInputValidity(el) {\n  if (!checkNameInputsValidity(el)) {\n    el.classList.add(\"error\");\n  }\n};\n\nvar checkBoxValidate = function checkBoxValidate(el) {\n  if (!checkBoxValidity(el)) {\n    el.parentNode.classList.add(\"popup__checkbox--error\");\n  }\n};\n\nvar returnParent = function returnParent(el, cssClass) {\n  var element = el;\n  var cls = cssClass;\n\n  while (!element.classList.contains(cls)) {\n    element = element.parentElement;\n\n    if (!element) {\n      break;\n    }\n  }\n\n  return element;\n};\n\nvar showSuccessMessages = function showSuccessMessages() {\n  _const__WEBPACK_IMPORTED_MODULE_0__[\"popupOrder\"].classList.remove(\"popup--show\");\n  _const__WEBPACK_IMPORTED_MODULE_0__[\"popupSuccess\"].classList.add(\"popup--show\");\n  Object(_popups__WEBPACK_IMPORTED_MODULE_1__[\"disableScrolling\"])();\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/validate.js?");

/***/ }),

/***/ "./js/utils/polyfill-foreach.js":
/*!**************************************!*\
  !*** ./js/utils/polyfill-foreach.js ***!
  \**************************************/
/*! exports provided: forEachPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEachPolyfill\", function() { return forEachPolyfill; });\nvar forEachPolyfill = function forEachPolyfill() {\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/polyfill-foreach.js?");

/***/ })

/******/ });
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleModal */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _modules_scrollToSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollToSection */ \"./src/modules/scrollToSection.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkInputsAll */ \"./src/modules/checkInputsAll.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n\n\n\n\n\n\n\n\n\n // scrolling to section\n\n(0,_modules_scrollToSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // calling a modal window\n\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // top slider\n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // scroll to top\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // checking form inputs\n\n(0,_modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // send form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // faq accordeon\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // slider carousel\n\nvar carousel = new _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nvar options = {\n  main: 'container'\n};\ncarousel.init();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeonBlock = document.querySelector('.accordeon'),\n      elems = accordeonBlock.querySelectorAll('.element'),\n      elemsContent = accordeonBlock.querySelectorAll('.element-content');\n  elems.forEach(function (item) {\n    item.classList.remove('active');\n  });\n  elemsContent.forEach(function (item) {\n    item.style.display = 'none';\n  });\n\n  var setActive = function setActive(index) {\n    for (var i = 0; i < elems.length; i++) {\n      if (i === index) {\n        elems[i].classList.add('active');\n        console.log(elemsContent[i]);\n        elemsContent[i].style.display = 'block';\n      } else {\n        elems[i].classList.remove('active');\n        console.log(elemsContent[i]);\n        elemsContent[i].style.display = 'none';\n      }\n    }\n  };\n\n  accordeonBlock.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.title');\n\n    if (target) {\n      elems.forEach(function (item, index) {\n        if (item === target.parentNode) {\n          console.log(item, index);\n          setActive(index);\n        }\n      });\n    }\n  });\n  /* const removeActive = (elems, selector) => {\r\n      elems.forEach(item => {\r\n          item.classList.remove(selector);\r\n          item.lastChild.previousSibling.style.display = 'none';\r\n      });\r\n  };\r\n  \r\n  removeActive(elemsContent, 'active');\r\n  \r\n  elemsContent.forEach((item) => {\r\n      item.addEventListener('click', (event) => {\r\n          let target = event.target;\r\n          removeActive(elemsContent, 'active');\r\n          \r\n          target.parentNode.classList.toggle('active');\r\n          if (target.parentNode.classList.contains('active')) {\r\n              target.nextSibling.nextSibling.style.display = 'block';\r\n          } else {\r\n              target.nextSibling.nextSibling.style.display = 'none';\r\n          }\r\n      })\r\n  }); */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/checkInputsAll.js":
/*!***************************************!*\
  !*** ./src/modules/checkInputsAll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _maskPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maskPhone */ \"./src/modules/maskPhone.js\");\n\n\nvar checkInputsAll = function checkInputsAll() {\n  var deleteHyphenSpace = function deleteHyphenSpace(str) {\n    str = str.trim();\n    str = str.replace(/ +/g, ' ');\n    str = str.replace(/\\-+/g, '\\-');\n    str = str.replace(/^-/g, '');\n    str = str.replace(/-$/g, '');\n    return str;\n  };\n\n  var inputsAll = document.querySelectorAll('input');\n  inputsAll.forEach(function (item) {\n    if (item.classList.contains('tel')) {\n      item.setAttribute('required', true);\n    }\n\n    item.addEventListener('input', function (event) {\n      if (event.target.name === 'fio') {\n        var nameValue = event.target.value;\n        event.target.value = nameValue.replace(/[;\\+\\>\\<\\*\\!\\=\\.@:\\?\\,#\\$\\%^\\&\\}{\\[\\]\\^\\\"\\\\\\|\\/\\_)(\\w]/gi, '');\n      } else if (event.target.classList.contains('tel')) {\n        (0,_maskPhone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.' + event.target.classList[1]);\n      }\n    });\n    item.addEventListener('blur', function (event) {\n      if (event.target.name === 'fio') {\n        var nameValue = event.target.value;\n        event.target.value = deleteHyphenSpace(nameValue)[0].toUpperCase() + deleteHyphenSpace(nameValue).slice(1, deleteHyphenSpace(nameValue).length).toLowerCase();\n      } else if (event.target.name === 'tel') {\n        event.target.value = deleteHyphenSpace(event.target.value);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInputsAll);\n\n//# sourceURL=webpack://diplom/./src/modules/checkInputsAll.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf(\"_\");\n\n    if (i != -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return \"\\\\d{1,\" + a.length + \"}\";\n    }).replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type == \"blur\" && this.value.length < 5) {\n      this.value = \"\";\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener(\"input\", mask);\n      elem.addEventListener(\"focus\", mask);\n      elem.addEventListener(\"blur\", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack://diplom/./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/scrollToSection.js":
/*!****************************************!*\
  !*** ./src/modules/scrollToSection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollToSection = function scrollToSection() {\n  var mobileMenu = document.querySelector('.mobile-menu');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('ul')) {\n      var targetUlList = target.closest('a');\n      event.preventDefault();\n      var href = targetUlList.getAttribute('href').slice(1);\n      var scrollTarget = document.getElementById(href);\n      var topOffset = mobileMenu.offsetHeight;\n      var elementPosition = scrollTarget.getBoundingClientRect().top;\n      var offsetPosition = elementPosition - topOffset;\n      window.scrollBy({\n        top: offsetPosition,\n        behavior: 'smooth'\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToSection);\n\n//# sourceURL=webpack://diplom/./src/modules/scrollToSection.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так(',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\n      nameErrorMessage = 'Имя должно содержать больше одной буквы!',\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay');\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 14px;\\n                                    color: black\";\n  forms.forEach(function (item) {\n    var input = item.querySelector('input');\n    item.addEventListener('submit', function (event) {\n      if (input.value.length < 2) {\n        event.preventDefault();\n        item.appendChild(statusMessage);\n        statusMessage.textContent = nameErrorMessage;\n      } else {\n        event.preventDefault();\n        item.appendChild(statusMessage);\n        var formData = new FormData(item);\n        var body = {};\n        formData.forEach(function (val, key) {\n          body[key] = val;\n        });\n        statusMessage.textContent = loadMessage;\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status network not 200!');\n          }\n\n          statusMessage.textContent = successMessage;\n          setTimeout(function () {\n            statusMessage.textContent = '';\n          }, 3000);\n          setTimeout(function () {\n            modalCallback.style.display = 'none';\n            modalOverlay.style.display = 'none';\n          }, 1500);\n        })[\"catch\"](function (error) {\n          statusMessage.textContent = errorMessage;\n          console.error(error);\n          setTimeout(function () {\n            statusMessage.textContent = '';\n          }, 3000);\n          setTimeout(function () {\n            modalCallback.style.display = 'none';\n            modalOverlay.style.display = 'none';\n          }, 1500);\n        });\n        var inputs = item.querySelectorAll('input');\n        inputs.forEach(function (i) {\n          if (!i.classList.contains('button')) {\n            i.value = '';\n          }\n        });\n      }\n    });\n\n    var postData = function postData(body) {\n      return fetch('./server.php', {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(body),\n        credentials: 'include'\n      });\n    };\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel() {\n    _classCallCheck(this, SliderCarousel);\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      console.log(42);\n    }\n  }]);\n\n  return SliderCarousel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);\n\n//# sourceURL=webpack://diplom/./src/modules/sliderCarousel.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var scrollUp = document.querySelector('.up');\n  var servicesSection = document.querySelector('.services-section');\n  document.addEventListener('scroll', function () {\n    var scrollTop = document.documentElement.scrollTop;\n    var servicesSectionTop = servicesSection.getBoundingClientRect().top;\n\n    if (scrollTop > servicesSectionTop) {\n      scrollUp.style.display = 'block';\n      scrollUp.addEventListener('click', function (event) {\n        window.scrollBy({\n          top: -scrollTop,\n          behavior: 'smooth'\n        });\n      });\n    } else {\n      scrollUp.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  var modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('callback-btn') || target.classList.contains('button-services') || target.classList.contains('absolute')) {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    } else if (target.closest('.modal-close') || target.classList.contains('modal-overlay')) {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://diplom/./src/modules/toggleModal.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var itemSlide = document.querySelectorAll('.item'),\n      table = document.querySelectorAll('.table');\n  var currentSlide = 0;\n  var interval;\n\n  var prevSlide = function prevSlide(item, table, index) {\n    item[index].style.background = \"url(images/slide\".concat(index + 1, \".jpg) 50% 50% no-repeat\");\n    item[index].style.backgroundSize = 'cover';\n    table[index].style.opacity = '0';\n    table[index].style.visibility = 'hidden';\n    item[index].style.display = 'none';\n  };\n\n  var nextSlide = function nextSlide(item, table, index) {\n    item[index].style.background = \"url(images/slide\".concat(index + 1, \".jpg) 50% 50% no-repeat\");\n    item[index].style.backgroundSize = 'cover';\n    table[index].style.opacity = '1';\n    table[index].style.visibility = 'visible';\n    item[index].style.display = 'block';\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(itemSlide, table, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= itemSlide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(itemSlide, table, currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6ba2519b756f47a884f")
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
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

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var itemSlide = document.querySelectorAll('.item'),\n      table = document.querySelectorAll('.table'),\n      sliderTop = document.querySelector('.top-slider');\n  var itemActive = document.createElement('style');\n  itemActive.cssText = \".active {\\n                        opacity: 1;\\n                        -webkit-transition: opacity .5s;\\n                        transition: opacity .5s;\\n                    }\";\n  document.getElementsByTagName('head')[0].appendChild(itemActive);\n  console.log(itemActive);\n  var currentSlide = 0;\n  var interval;\n\n  var prevSlide = function prevSlide(elem, index) {\n    elem[index].style.background = \"url(images/slide\".concat(index + 1, \".jpg) 50% 50% no-repeat\");\n    elem[index].style.backgroundSize = 'cover';\n    elem[index].style.opacity = '0';\n    elem[index].style.transition = 'opacity .5s';\n    elem[index].style.display = 'none'; // elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index) {\n    elem[index].style = \"\\n                        background: url(images/slide\".concat(index + 1, \".jpg) 50% 50% no-repeat; \\n                        background-size: cover;\")\n    /* opacity: 1;\r\n    -webkit-transition: opacity .5s;\r\n    transition: opacity .5s;` */\n    ;\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(itemSlide, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= itemSlide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(itemSlide, currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  startSlide();\n  console.log(sliderTop);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("98591698bf85099f2170")
/******/ })();
/******/ 
/******/ }
);
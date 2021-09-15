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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var itemSlide = document.querySelectorAll('.item'),\n      table = document.querySelectorAll('.table'),\n      sliderTop = document.querySelector('.top-slider');\n  var currentSlide = 0;\n  var interval;\n\n  var prevSlide = function prevSlide(item, table, index) {\n    item[index].style.background = \"url(images/slide\".concat(index + 1, \".jpg) 50% 50% no-repeat\");\n    item[index].style.backgroundSize = 'cover';\n    table[index].style.opacity = '0';\n    table[index].style.visibility = 'hidden'; // item[index].style.transition = 'opacity .5s';\n\n    item[index].style.display = 'none'; // elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(item, table, index) {\n    item[index].style.background = \"url(images/slide\".concat(index + 1, \".jpg) 50% 50% no-repeat\");\n    item[index].style.backgroundSize = 'cover';\n    table[index].style.opacity = '1';\n    table[index].style.visibility = 'visible';\n    item[index].style.display = 'block';\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(itemSlide, table, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= itemSlide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(itemSlide, table, currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8809493f9a2457f7f608")
/******/ })();
/******/ 
/******/ }
);
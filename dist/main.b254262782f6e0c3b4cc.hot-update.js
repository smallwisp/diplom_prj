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

/***/ "./src/modules/scrollToSection.js":
/*!****************************************!*\
  !*** ./src/modules/scrollToSection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _this = undefined;\n\nvar scrollToSection = function scrollToSection() {\n  var mobileMenu = document.querySelector('.mobile-menu');\n  mobileMenu.querySelectorAll('a[href^=\"#\"').forEach(function (link) {\n    // console.log(link);\n    // if (!link.classList.contains('callback-btn')) {\n    link.addEventListener('click', function (event) {\n      event.preventDefault();\n\n      var href = _this.getAttribute('href').slice(1);\n\n      console.log(href);\n    }); // }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToSection);\n\n//# sourceURL=webpack://diplom/./src/modules/scrollToSection.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("972e9076d9f00f3ce1bd")
/******/ })();
/******/ 
/******/ }
);
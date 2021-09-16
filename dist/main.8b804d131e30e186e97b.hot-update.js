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

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector('.accordeon'),\n      elemsContent = document.querySelectorAll('.element');\n\n  var setActive = function setActive(elems, target, selector) {\n    elems.forEach(function (item) {\n      item.classList.remove(selector);\n    });\n    target.classList.toggle(selector);\n  }; // setActive();\n\n\n  elemsContent.forEach(function (item) {\n    item.classList.remove('active');\n    item.lastChild.style.display = 'none';\n  });\n  /* elemsContent.forEach(item => {\r\n      item.addEventListener('click', (event) => {\r\n          let target = event.target;\r\n            console.log(target.nextSibling.nextSibling);\r\n          // setActive(elemsContent, target.parentNode, 'active');\r\n          target.parentNode.classList.toggle('active');\r\n          if (target.parentNode.classList.contains('active')) {\r\n              target.nextSibling.nextSibling.style.display = 'block';\r\n          } else {\r\n              target.nextSibling.nextSibling.style.display = 'none';\r\n          }\r\n      })\r\n  }); */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c24ce01d209f53bad531")
/******/ })();
/******/ 
/******/ }
);
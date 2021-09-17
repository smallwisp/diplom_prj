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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var elemsContent = document.querySelectorAll('.element');\n  /* const removeActive = (elems, selector) => {\r\n      elems.forEach(item => {\r\n          item.classList.remove(selector);\r\n          item.lastChild.previousSibling.style.display = 'none';\r\n      });\r\n  };\r\n  \r\n  removeActive(elemsContent, 'active');\r\n  \r\n  elemsContent.forEach((item) => {\r\n      item.addEventListener('click', (event) => {\r\n          let target = event.target;\r\n          removeActive(elemsContent, 'active');\r\n          \r\n          target.parentNode.classList.toggle('active');\r\n          if (target.parentNode.classList.contains('active')) {\r\n              target.nextSibling.nextSibling.style.display = 'block';\r\n          } else {\r\n              target.nextSibling.nextSibling.style.display = 'none';\r\n          }\r\n      })\r\n  }); */\n\n  var removeActive = function removeActive(index) {\n    for (var i = 0; i < elemsContent.length; i++) {\n      if (index === i) {\n        elemsContent[i].classListюф;\n      }\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("79596f526797bff84326")
/******/ })();
/******/ 
/******/ }
);
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

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  // alert('ok');\n  var callbackBtn = document.querySelectorAll('.callback-btn'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalClose = document.querySelector('.modal-close');\n  console.log(callbackBtn);\n  /* document.addEventListener('click', (event) => {\r\n      console.log(event.target);\r\n  }); */\n\n  callbackBtn.forEach(function (item) {\n    item.addEventListener('click', function () {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    });\n  });\n  modalCallback.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('modal-close')) {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    } else {}\n  });\n  modalOverlay.addEventListener('click', function (event) {\n    /* let target = event.target;\r\n    target = target.closest('.modal-overlay');\r\n    if (!target) { */\n    modalCallback.style.display = 'none';\n    modalOverlay.style.display = 'none'; // }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://diplom/./src/modules/toggleModal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4d49cba46d6f0601e2ff")
/******/ })();
/******/ 
/******/ }
);
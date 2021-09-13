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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  // alert('ok');\n  var callbackBtn = document.querySelectorAll('.callback-btn'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalClose = document.querySelector('.modal-close');\n  console.log(callbackBtn);\n  document.addEventListener('click', function (event) {\n    console.log(event.target);\n    var target = event.target;\n\n    if (target.classList.contains('callback-btn')) {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    } else if (target.classList.closest('modal-close') || target.classList.contains('modal-overlay')) {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    }\n\n    ;\n  });\n  /* callbackBtn.forEach((item) => {\r\n      item.addEventListener('click', () => {\r\n          modalCallback.style.display = 'block';\r\n          modalOverlay.style.display = 'block';\r\n      })\r\n  });\r\n    modalCallback.addEventListener('click', event => {\r\n          let target = event.target;\r\n            if (target.classList.contains('modal-close')) {\r\n              modalCallback.style.display = 'none';\r\n              modalOverlay.style.display = 'none';\r\n          } else {\r\n            }\r\n    });\r\n    modalOverlay.addEventListener('click', (event) => {\r\n      \r\n          modalCallback.style.display = 'none';\r\n          modalOverlay.style.display = 'none';\r\n      // }\r\n          \r\n  }) */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://diplom/./src/modules/toggleModal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a818888d96b8c39e3221")
/******/ })();
/******/ 
/******/ }
);
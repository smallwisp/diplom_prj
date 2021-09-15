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

/***/ "./src/modules/checkInputsAll.js":
/*!***************************************!*\
  !*** ./src/modules/checkInputsAll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _maskPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maskPhone */ \"./src/modules/maskPhone.js\");\n\n\nvar checkInputsAll = function checkInputsAll() {\n  var deleteHyphenSpace = function deleteHyphenSpace(str) {\n    str = str.trim();\n    str = str.replace(/ +/g, ' ');\n    str = str.replace(/\\-+/g, '\\-');\n    str = str.replace(/^-/g, '');\n    str = str.replace(/-$/g, '');\n    return str;\n  };\n\n  var inputsAll = document.querySelectorAll('input');\n  inputsAll.forEach(function (item) {\n    if (item.classList.contains('tel')) {\n      item.setAttribute('required', true);\n    }\n\n    item.addEventListener('input', function (event) {\n      console.log(event.target.name);\n\n      if (event.target.name === 'fio') {\n        var nameValue = event.target.value;\n        event.target.value = nameValue.replace(/[;\\+\\>\\<\\*\\!\\=\\.@:\\?\\,#\\$\\%^\\&\\}{\\[\\]\\^\\\"\\\\\\|\\/\\_)(\\w]/gi, '');\n      } else if (event.target.classList.contains('tel')) {\n        var elems = document.querySelectorAll(event.target.classList);\n        console.log(event.target.classList[1]); // event.target.value = event.target.value.replace(/[а-яА-Яa-zA-Z;\\>\\<\\*)(\\=\\.@:\\?\\,#\\$\\%^\\&\\}{\\[\\]\\^\\\"\\\\\\|\\/\\_]/gi, '');\n\n        (0,_maskPhone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.' + event.target.className);\n      }\n    });\n    item.addEventListener('blur', function (event) {\n      if (event.target.name === 'fio') {\n        var nameValue = event.target.value;\n        event.target.value = deleteHyphenSpace(nameValue)[0].toUpperCase() + deleteHyphenSpace(nameValue).slice(1, deleteHyphenSpace(nameValue).length).toLowerCase();\n      } else if (event.target.name === 'tel') {\n        event.target.value = deleteHyphenSpace(event.target.value);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInputsAll);\n\n//# sourceURL=webpack://diplom/./src/modules/checkInputsAll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d76762baea2094284b7f")
/******/ })();
/******/ 
/******/ }
);
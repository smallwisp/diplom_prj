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

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap;\n\n    _classCallCheck(this, SliderCarousel);\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      console.log(this);\n      this.addClass();\n      this.addStyles();\n    }\n  }, {\n    key: \"addClass\",\n    value: function addClass() {\n      this.main.classList.add('slider-carousel');\n      this.wrap.classList.add('slider-carousel__wrap');\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('slider-carousel__item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyles\",\n    value: function addStyles() {\n      var style = document.createElement('style');\n      style.id = 'sliderCarousel-style';\n      style.textContent = \"\\n            .slider-carousel {\\n                overflow: hidden !important;\\n            }\\n            .slider-carousel__wrap {\\n                display: flex !important;\\n                transition: transform 0.5s !important;\\n                will-change: transform !important;\\n            }\\n            slider-carousel__item {\\n                flex: 0 0 50% !important;\\n                margin: auto 0 !important;\\n            }\\n            \";\n      document.head.appendChild(style);\n    }\n  }]);\n\n  return SliderCarousel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);\n\n//# sourceURL=webpack://diplom/./src/modules/sliderCarousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("00d350230a851826d417")
/******/ })();
/******/ 
/******/ }
);
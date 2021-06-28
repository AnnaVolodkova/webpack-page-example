/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_text_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/text.txt */ \"./src/assets/text.txt\");\n/* harmony import */ var _scripts_rainbow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/rainbow */ \"./src/scripts/rainbow.js\");\n/* harmony import */ var _scripts_rainbow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_rainbow__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.pcss */ \"./src/styles/main.pcss\");\n/* eslint-disable no-console */\n\n\n\n\ntry {\n  var studentElem = document.getElementById('student'); // eslint-disable-next-line no-undef\n\n  studentElem.innerText = \"\".concat(_assets_text_txt__WEBPACK_IMPORTED_MODULE_0__).concat(\"Anna Volodkova\");\n} catch (err) {\n  console.error(err);\n}\n\ntry {\n  var babelElem = document.getElementById('babel'); // eslint-disable-next-line\n\n  var _text = undefined !== null && undefined !== void 0 ? undefined : 'Babel loader работает!';\n\n  babelElem.innerText = _text;\n} catch (err) {\n  console.error(err);\n}\n\n//# sourceURL=webpack://volodkova_anna/./src/index.js?");

/***/ }),

/***/ "./src/scripts/rainbow.js":
/*!********************************!*\
  !*** ./src/scripts/rainbow.js ***!
  \********************************/
/***/ (() => {

eval("var elem = document.getElementById('rainbow');\nvar colors = ['#524650', '#918384', '#af8b40', '#ad6453', '#605544', '#d8c18f'];\nvar counter = 0;\n\nif (elem) {\n  setInterval(function () {\n    var color = counter % colors.length;\n    counter += 1;\n    elem.bgColor = colors[color];\n  }, 1000);\n}\n\n//# sourceURL=webpack://volodkova_anna/./src/scripts/rainbow.js?");

/***/ }),

/***/ "./src/styles/main.pcss":
/*!******************************!*\
  !*** ./src/styles/main.pcss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://volodkova_anna/./src/styles/main.pcss?");

/***/ }),

/***/ "./src/assets/text.txt":
/*!*****************************!*\
  !*** ./src/assets/text.txt ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"Define plugin работает: \";\n\n//# sourceURL=webpack://volodkova_anna/./src/assets/text.txt?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
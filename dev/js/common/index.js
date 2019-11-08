/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"common-chunk"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/common/img__map-pin.svg":
/*!***********************************************!*\
  !*** ./assets/images/common/img__map-pin.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/common/img__map-pin.svg\";\n\n//# sourceURL=webpack:///./assets/images/common/img__map-pin.svg?");

/***/ }),

/***/ "./assets/images/favicons/android-chrome-192x192.png":
/*!***********************************************************!*\
  !*** ./assets/images/favicons/android-chrome-192x192.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/favicons/android-chrome-192x192.png\";\n\n//# sourceURL=webpack:///./assets/images/favicons/android-chrome-192x192.png?");

/***/ }),

/***/ "./assets/images/favicons/android-chrome-512x512.png":
/*!***********************************************************!*\
  !*** ./assets/images/favicons/android-chrome-512x512.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/favicons/android-chrome-512x512.png\";\n\n//# sourceURL=webpack:///./assets/images/favicons/android-chrome-512x512.png?");

/***/ }),

/***/ "./docs/tpl-email/tpl-email_v1.html":
/*!******************************************!*\
  !*** ./docs/tpl-email/tpl-email_v1.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"docs/tpl-email/tpl-email_v1.html\";\n\n//# sourceURL=webpack:///./docs/tpl-email/tpl-email_v1.html?");

/***/ }),

/***/ "./js/common.js":
/*!**********************!*\
  !*** ./js/common.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_common_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/common/style.scss */ \"./scss/common/style.scss\");\n/* harmony import */ var _scss_common_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_common_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/favicons/android-chrome-192x192.png */ \"./assets/images/favicons/android-chrome-192x192.png\");\n/* harmony import */ var _assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/favicons/android-chrome-512x512.png */ \"./assets/images/favicons/android-chrome-512x512.png\");\n/* harmony import */ var _assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_common_img_map_pin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/common/img__map-pin.svg */ \"./assets/images/common/img__map-pin.svg\");\n/* harmony import */ var _assets_images_common_img_map_pin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_common_img_map_pin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _order_php__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.php */ \"./js/order.php\");\n/* harmony import */ var _order_php__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_order_php__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sendmailsmtpclass_php__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sendmailsmtpclass.php */ \"./js/sendmailsmtpclass.php\");\n/* harmony import */ var _sendmailsmtpclass_php__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sendmailsmtpclass_php__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _docs_tpl_email_tpl_email_v1_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../docs/tpl-email/tpl-email_v1.html */ \"./docs/tpl-email/tpl-email_v1.html\");\n/* harmony import */ var _docs_tpl_email_tpl_email_v1_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_docs_tpl_email_tpl_email_v1_html__WEBPACK_IMPORTED_MODULE_6__);\n// стили\n // файлы\n\n\n\n\n\n\n\n\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\"); // IMG drag none\n\n\n$('img, a').on('dragstart', function () {\n  return false;\n});\nconsole.log('hello common');\n\n//# sourceURL=webpack:///./js/common.js?");

/***/ }),

/***/ "./js/order.php":
/*!**********************!*\
  !*** ./js/order.php ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"js/order.php\";\n\n//# sourceURL=webpack:///./js/order.php?");

/***/ }),

/***/ "./js/sendmailsmtpclass.php":
/*!**********************************!*\
  !*** ./js/sendmailsmtpclass.php ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"js/sendmailsmtpclass.php\";\n\n//# sourceURL=webpack:///./js/sendmailsmtpclass.php?");

/***/ }),

/***/ "./scss/common/style.scss":
/*!********************************!*\
  !*** ./scss/common/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/common/style.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./js/common.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/common.js */\"./js/common.js\");\n\n\n//# sourceURL=webpack:///multi_./js/common.js?");

/***/ })

/******/ });
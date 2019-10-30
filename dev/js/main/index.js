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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./js/main/index.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/ymaps/dist/ymaps.esm.js":
/*!***********************************************!*\
  !*** ../node_modules/ymaps/dist/ymaps.esm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ymaps$1 = {\n  load: function load() {\n    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '//api-maps.yandex.ru/2.1/?lang=en_RU';\n\n    var getNsParamValue = function getNsParamValue() {\n      var results = src.match(/[\\\\?&]ns=([^&#]*)/);\n      return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));\n    };\n\n    if (!this.promise) {\n      this.promise = new Promise(function (resolve, reject) {\n        var scriptElement = document.createElement('script');\n        scriptElement.onload = resolve;\n        scriptElement.onerror = reject;\n        scriptElement.type = 'text/javascript';\n        scriptElement.src = src;\n        document.body.appendChild(scriptElement);\n      }).then(function () {\n        var ns = getNsParamValue();\n\n        if (ns && ns !== 'ymaps') {\n          (0, eval)(\"var ymaps = \".concat(ns, \";\"));\n        }\n\n        return new Promise(function (resolve) {\n          return ymaps.ready(resolve);\n        });\n      });\n    }\n\n    return this.promise;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ymaps$1);\n\n\n//# sourceURL=webpack:///../node_modules/ymaps/dist/ymaps.esm.js?");

/***/ }),

/***/ "./assets/images/common/img__map-pin.svg":
/*!***********************************************!*\
  !*** ./assets/images/common/img__map-pin.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/common/img__map-pin.6d4c38.svg\";\n\n//# sourceURL=webpack:///./assets/images/common/img__map-pin.svg?");

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

/***/ "./js/main/client.js":
/*!***************************!*\
  !*** ./js/main/client.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _units_gifts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units/gifts.js */ \"./js/main/units/gifts.js\");\n/* harmony import */ var _units_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units/modal.js */ \"./js/main/units/modal.js\");\n/* harmony import */ var _units_teamSlider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./units/teamSlider.js */ \"./js/main/units/teamSlider.js\");\n/* harmony import */ var _units_services_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./units/services.js */ \"./js/main/units/services.js\");\n/* harmony import */ var _units_utm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./units/utm.js */ \"./js/main/units/utm.js\");\n/* harmony import */ var _units_yandexMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./units/yandexMap */ \"./js/main/units/yandexMap/index.js\");\n\n\n\n\n\n\n\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\n$(document).ready(function () {\n  // инициализировать работу модального окна\n  Object(_units_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // инициализировать работу слоя \"Подарки\"\n\n  Object(_units_gifts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // инициализировать работу слайдера - слой \"Команда\"\n\n  Object(_units_teamSlider_js__WEBPACK_IMPORTED_MODULE_2__[\"initTeamSlider\"])(); // иницилизировать работу слоя \"Услуги\"\n\n  Object(_units_services_js__WEBPACK_IMPORTED_MODULE_3__[\"initServicesLayerHandle\"])(); // иницилизировать utm-метки\n\n  Object(_units_utm_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // инициализировать работу яндекс-карт\n\n  Object(_units_yandexMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // https://api-maps.yandex.ru/2.1/?lang=ru_RU\n  // try {\n  //   const maps = await ymaps.load();\n  //   const mapContainer = document.createElement(\"div\");\n  //   mapContainer.style.height = \"512px\";\n  //   mapContainer.style.width = \"512px\";\n  //   app.removeChild(button);\n  //   app.appendChild(mapContainer);\n  //   new maps.Map(mapContainer, {\n  //     center: [-8.369326, 115.166023],\n  //     zoom: 8\n  //   });\n  // } catch (error) {\n  //   console.error(\"Something went wrong\", error);\n  // }\n  // ymaps\n  //   .load()\n  //   .then(maps => {\n  //     const map = new maps.Map('contactsMap', {\n  //       center: [-8.369326, 115.166023],\n  //       zoom: 7,\n  //     });\n  //   })\n  //   .catch(error => console.log('Failed to load Yandex Maps', error));\n  // ymaps.load('https://api-maps.yandex.ru/2.1/?lang=en_US').then(maps => {\n  //   new maps.Map('contactsMap', {\n  //     center: [-8.369326, 115.166023],\n  //     zoom: 7,\n  //   });\n  // })\n  //   .catch(error => console.log('Failed to load Yandex Maps', error));\n  // });\n  // let arrServces = [];\n  // // выбор подарка\n  // $('.action__form-button').click(function() {\n  //   $('.modal-form-data').attr('value', 'Кнопка - заказать диагностику');\n  // });\n  // $('.contacts__form-button').click(function() {\n  //   $('.modal-form-data').attr('value', 'Кнопка - оставить заявку - футер');\n  // });\n  // $('.gifts-form__button__service_true').click(function() {\n  //   const dataForm = $('.form-block__input').val();\n  //   $('.modal-form-service').attr('value', JSON.stringify(arrServces));\n  // });\n  // let curModalInfo = $(\n  //   '.card-gift__border_no-opacity .card-gift__desc-text'\n  // ).text();\n  // $('.modal-form-gifts').attr('value', curModalInfo);\n  // $('.card-gift').click(function() {\n  //   curModalInfo = $('.card-gift__desc-text', this).text();\n  //   $('.modal-form-gifts').attr('value', curModalInfo);\n  //   $('.card-gift').removeClass(\n  //     'card-gift__border_no-opacity card-gift__number__display_none'\n  //   );\n  //   $('.card-gift .card-gift__number').removeClass(\n  //     'card-gift__number__display_none'\n  //   );\n  //   $('.card-gift ul').addClass('card-gift__ul-choose__display_none');\n  //   $(this).addClass('card-gift__border_no-opacity');\n  //   $('ul', this).removeClass('card-gift__ul-choose__display_none');\n  //   $('.card-gift__number', this).addClass('card-gift__number__display_none');\n  // });\n  // const currenWokersList = [\n  //   'bondarec',\n  //   'latipov',\n  //   'ponomarev',\n  //   'siromyatnikov',\n  //   'sviderskiy',\n  //   'tenkov',\n  // ];\n  // let currentNumWorker = 0;\n  // const wokers = {\n  //   latipov: [\n  //     'Латыпов Тимур',\n  //     'Механик',\n  //     '35 лет',\n  //     'Опыт работы с Land Rover 10 лет',\n  //     'Количество нормо - часов за прошлый год:',\n  //     '2421',\n  //     'Любимая модель Ленд Ровер',\n  //     'Land Rover Discovery Sport 2.0D 180hp',\n  //   ],\n  //   bondarec: [\n  //     'Бондарец Сергей',\n  //     'Механик',\n  //     '32 года',\n  //     'Опыт работы с Land Rover 8 лет',\n  //     'Количество нормо - часов за прошлый год:',\n  //     '2619',\n  //     'Любимая модель Ленд Ровер',\n  //     'Range Rover Sport 2 3.0SC 340hp',\n  //   ],\n  //   ponomarev: [\n  //     'Пономарев Владислав',\n  //     'Руководитель сервиса',\n  //     '28 лет',\n  //     'Опыт работы с Land Rover 6 лет',\n  //     'Количество согласованных часов за прошлый год:',\n  //     '9860',\n  //     'Любимая модель Ленд Ровер',\n  //     'Range Rover L405 4.4d 339hp',\n  //   ],\n  //   siromyatnikov: [\n  //     'Сыромятников Станислав',\n  //     'Старший механик',\n  //     '37 лет',\n  //     'Опыт работы с Land Rover 12 лет',\n  //     'Количество нормо - часов за прошлый год:',\n  //     '3012',\n  //     'Любимая модель Ленд Ровер',\n  //     'Range Rover 3 5.0SC 510hp',\n  //   ],\n  //   sviderskiy: [\n  //     'Свидерский Андрей',\n  //     'Мастер - приемщик',\n  //     '37 лет',\n  //     'Опыт работы с Land Rover 10 лет',\n  //     'Количество согласованных часов за прошлый год:',\n  //     '8244',\n  //     'Любимая модель Ленд Ровер',\n  //     'Land Rover Discovery 4 3.0d 245hp',\n  //   ],\n  //   tenkov: [\n  //     'Теньков Алексей',\n  //     'Механик',\n  //     '35 лет',\n  //     'Опыт работы с Land Rover 7 лет',\n  //     'Количество нормо - часов за прошлый год:',\n  //     '2527',\n  //     'Любимая модель Ленд Ровер',\n  //     'Land Rover Freelander 2.2d 190hp',\n  //   ],\n  // };\n  // function changePersonalInfo($idName) {\n  //   // изменяем информацию\n  //   $('.personal-preview__name').text(`${wokers[$idName][0]}`);\n  //   $('.personal-preview__vacancy').text(\n  //     `${wokers[$idName][1]} / ${wokers[$idName][2]}`\n  //   );\n  //   $('.personal-preview__experience').text(`${wokers[$idName][3]}`);\n  //   $('.personal-preview__add-text__first-feature').html(\n  //     `${wokers[$idName][4]}<br>${wokers[$idName][5]}<br><br>`\n  //   );\n  //   $('.personal-preview__add-text__second-feature').text(\n  //     `${wokers[$idName][6]} — ${wokers[$idName][7]}`\n  //   );\n  //   // меняем фото\n  //   $('.personal-preview__img-wrap > img').attr(\n  //     'src',\n  //     `/assets/images/pages/home/img__team-person-${$idName}.jpg`\n  //   );\n  // }\n  // function setCurrentNumWorker($idName) {\n  //   currentNumWorker = currenWokersList.indexOf($idName);\n  // }\n  // function setRedBorder(context) {\n  //   $('.team__preview-circle').removeClass('team__preview-circle__border_true');\n  //   $(context).addClass('team__preview-circle__border_true');\n  // }\n  // // галерея - сотрудники\n  // $('.team__preview-circle').click(function() {\n  //   changePersonalInfo(this.id);\n  //   setCurrentNumWorker(this.id);\n  //   setRedBorder(this);\n  //   // console.log(currentNumWorker);\n  // });\n  // // стрелки\n  // $(\n  //   '.personal-preview__arrow__position_left, .personal-preview__arrow-svg__left_true'\n  // ).click(function() {\n  //   if (currentNumWorker === 0) {\n  //     currentNumWorker = 6;\n  //   }\n  //   currentNumWorker -= 1;\n  //   changePersonalInfo(currenWokersList[currentNumWorker]);\n  //   const context = `#${currenWokersList[currentNumWorker]}`;\n  //   setRedBorder($(context));\n  //   // console.log(currentNumWorker);\n  // });\n  // $(\n  //   '.personal-preview__arrow__position_right, .personal-preview__arrow-svg__right_true'\n  // ).click(function() {\n  //   if (currentNumWorker === 5) {\n  //     currentNumWorker = -1;\n  //   }\n  //   currentNumWorker += 1;\n  //   changePersonalInfo(currenWokersList[currentNumWorker]);\n  //   const context = `#${currenWokersList[currentNumWorker]}`;\n  //   setRedBorder($(context));\n  //   // console.log(currentNumWorker);\n  // });\n  // $('#checkbox-service-01').prop('checked', true);\n  // $('#checkbox-service-02').prop('checked', true);\n  // let cntCheckedServices = 2;\n  // function setArrServices() {\n  //   arrServces = [];\n  //   $('.service__choose-item-text').each(function() {\n  //     arrServces.push($(this).text());\n  //   });\n  // }\n  // setArrServices();\n  // // услуги\n  // $('.service__form-card-checkbox').click(function() {\n  //   const curIdName = this.id;\n  //   const curNumElement = curIdName.slice(-1);\n  //   if ($(this).is(':checked')) {\n  //     cntCheckedServices += 1;\n  //     $(this)\n  //       .parent('.service__card-form')\n  //       .next('.service__white-background')\n  //       .addClass('service__white-background__visibility_hidden');\n  //     $(this)\n  //       .next('.service__form-text-checkbox')\n  //       .text('выбрано');\n  //     const serviceText = $(this)\n  //       .closest('.service__cards-wrap-item')\n  //       .find('.service__form-card-label')\n  //       .text();\n  //     $('.service__choose-list').append(\n  //       `<div class=\"service__choose-item-wrap\" id=\"service_0${curNumElement}\"><p class=\"service__choose-item-text\">${serviceText}</p><div class=\"service__choose-item-number-wrap\"><p class=\"service__choose-item-number\">0${cntCheckedServices}</p></div></div>`\n  //     );\n  //   }\n  //   // удаление\n  //   else {\n  //     cntCheckedServices -= 1;\n  //     $(this)\n  //       .next('.service__form-text-checkbox')\n  //       .text('выбрать');\n  //     $(this)\n  //       .parent('.service__card-form')\n  //       .next('.service__white-background')\n  //       .removeClass('service__white-background__visibility_hidden');\n  //     $(`#service_0${curNumElement}`).remove();\n  //   }\n  //   $('.service__span-cnt-sevices').text(cntCheckedServices);\n  //   setArrServices();\n  // });\n  // Open/close modal\n  // $(\n  //   '.action__form-button, .modal__form__close-text-wrap, .modal__form__close-icon, .contacts__form-button'\n  // ).click(function() {\n  //   $('.modal-wrapper').toggleClass(\n  //     'modal-wrapper__active modal-wrapper__inactive'\n  //   );\n  // $('.open-modal-ask').click(function() {\n  //   $('.modal__form-service').val($(this).attr('data-service'));\n  //   $('.modal_active').toggleClass('modal_active modal_inactive');\n  //   $('.modal-ask').toggleClass('modal_active modal_inactive');\n  // });\n  // $('.open-modal-callback').click(function() {\n  //   $('.modal__form-service').val($(this).attr('data-service'));\n  //   $('.modal_active').toggleClass('modal_active modal_inactive');\n  //   $('.modal-callback').toggleClass('modal_active modal_inactive');\n  // });\n  // $('.close').click(function() {\n  //   $('.modal_active').toggleClass('modal_active modal_inactive');\n  // });\n  // $('body').keydown(function(e) {\n  //   if (e.keyCode == 27) {\n  //     $('.modal_active').toggleClass('modal_active modal_inactive');\n  //   }\n  // });\n  // });\n  // $('form').submit(function() {\n  //   // Check required fields\n  //   const allRequiredFields = $(this).find('input[required]');\n  //   let flagEmpty = false;\n  //   allRequiredFields.each(function(indx, element) {\n  //     if ($(element).val() === '') flagEmpty = true;\n  //   });\n  //   if (flagEmpty) {\n  //     alert('Заполните поля формы!');\n  //     return false;\n  //   }\n  // E-mail Ajax Send\n  //   const th = $(this);\n  //   // console.log(decodeURI(th.serialize()));\n  //   $.ajax({\n  //     type: 'POST',\n  //     url: '/js/order.php',\n  //     data: th.serialize(),\n  //   }).done(function() {\n  //     // Go to Thanks page\n  //     $(location).attr('href', '/thankyou.html');\n  //     // Open Thanks window\n  //     // alert(\n  //     //   'Заявка успешно отправлена! В ближайшее время наш менеджер свяжется с Вами.'\n  //     // );\n  //     setTimeout(function() {\n  //       // Done Functions\n  //       $('.modal-wrapper').toggleClass(\n  //         'modal-wrapper__active modal-wrapper__inactive'\n  //       );\n  //     }, 1000);\n  //   });\n  //   return false;\n  // });\n  // Get UTM function\n  // function getUTM(name) {\n  //   const target = location.search.match(new RegExp(`${name}=([^&]+)`));\n  //   return target ? target[1] : 'Не используется';\n  // }\n  // Call get UTM function\n  // $('.utm_medium').val(getUTM('utm_medium'));\n  // $('.utm_source').val(getUTM('utm_source'));\n  // $('.utm_campaign').val(getUTM('utm_campaign'));\n  // $('.utm_term').val(getUTM('utm_term'));\n  // $('.utm_content').val(getUTM('utm_content'));\n  // // Scroll to id function\n  // function scrollToId(navigationClass) {\n  // \t$(navigationClass).click(function () {\n  // \t\tvar targetUrl = $(this).attr('href');\n  // \t\tvar targetDest = $(targetUrl).offset().top;\n  // \t\t$('html, body').animate({scrollTop: targetDest}, 300);\n  // \t\treturn false;\n  // \t});\n  // }\n  // // Call Scroll to id\n  // scrollToId('.main-menu__link');\n  // // Calc raiting\n  // if($('section').is('.reviews')) {\n  // \tvar raitingSum = 0;\n  // \tvar raitingAvg = 0;\n  // \tvar raitingCount = $('[itemprop=\"ratingValue\"]').length;\n  // \t$('[itemprop=\"ratingValue\"]').each(function() {\n  // \t\traitingSum += Number.parseInt($(this).text());\n  // \t});\n  // \traitingAvg = Math.round((raitingSum / raitingCount) * 10) / 10;\n  // \t$('.reviews__org-raiting').text(raitingAvg);\n  // \t$('.reviews__org-count').text(raitingCount);\n  // }\n  // Yandex map\n  // let contactMap;\n  // function init() {\n  //   contactMap = new ymaps.Map('contactsMap', {\n  //     // http://dimik.github.io/ymaps/examples/location-tool/\n  //     center: [55.79665307, 37.596462],\n  //     zoom: 15,\n  //     controls: [],\n  //   });\n  //   contactMap.controls.add('zoomControl', {\n  //     float: 'none',\n  //     position: {\n  //       left: 10,\n  //       top: 140,\n  //     },\n  //   });\n  //   contactMap.behaviors\n  //     .enable(['drag', 'rightMouseButtonMagnifier'])\n  //     .disable('scrollZoom');\n  //   // Pin param\n  //   const contactPin = new ymaps.Placemark(\n  //     [55.79665307, 37.596462],\n  //     {\n  //       balloonContentHeader: 'Сервис Ленд Ровер LR-Avangard',\n  //       balloonContentBody:\n  //         '<p>Специализированный сервис Ленд Ровер в Москве</p>',\n  //       hintContent: 'Сервис Ленд Ровер LR-Avangard',\n  //     },\n  //     {\n  //       iconLayout: 'default#image',\n  //       iconImageHref: '/images/common/img__map-pin.svg',\n  //       iconImageSize: [142, 58],\n  //       iconImageOffset: [-90, -62],\n  //     }\n  //   );\n  //   if ($('div').is('#contactsMap')) {\n  //     ymaps.ready(init);\n  //   }\n  //   // Add to map\n  //   contactMap.geoObjects.add(contactPin);\n  // }\n  // IMG drag none\n  //   $('img, a').on('dragstart', function() {\n  //     return false;\n  //   });\n}); // End ready\n\n//# sourceURL=webpack:///./js/main/client.js?");

/***/ }),

/***/ "./js/main/index.js":
/*!**************************!*\
  !*** ./js/main/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/main/style.scss */ \"./scss/main/style.scss\");\n/* harmony import */ var _scss_main_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/favicons/android-chrome-192x192.png */ \"./assets/images/favicons/android-chrome-192x192.png\");\n/* harmony import */ var _assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/favicons/android-chrome-512x512.png */ \"./assets/images/favicons/android-chrome-512x512.png\");\n/* harmony import */ var _assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_common_img_map_pin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/common/img__map-pin.svg */ \"./assets/images/common/img__map-pin.svg\");\n/* harmony import */ var _assets_images_common_img_map_pin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_common_img_map_pin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.js */ \"./js/main/client.js\");\n\n\n\n\n // const urls = [\n//   'https://api.github.com/users/iliakan',\n//   'https://api.github.com/users/remy',\n//   'https://api.github.com/users/jeresig',\n// ];\n// Преобразуем каждый URL в промис, возвращённый fetch\n// const requests = urls.map(url => fetch(url));\n// console.log(requests);\n\n//# sourceURL=webpack:///./js/main/index.js?");

/***/ }),

/***/ "./js/main/units/data/wokersInfoData.js":
/*!**********************************************!*\
  !*** ./js/main/units/data/wokersInfoData.js ***!
  \**********************************************/
/*! exports provided: currentWokersListData, wokersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentWokersListData\", function() { return currentWokersListData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wokersData\", function() { return wokersData; });\nvar currentWokersListData = ['bondarec', 'latipov', 'ponomarev', 'siromyatnikov', 'sviderskiy', 'tenkov'];\nvar wokersData = {\n  latipov: ['Латыпов Тимур', 'Механик', '35 лет', 'Опыт работы с Land Rover 10 лет', 'Количество нормо - часов за прошлый год:', '2421', 'Любимая модель Ленд Ровер', 'Land Rover Discovery Sport 2.0D 180hp'],\n  bondarec: ['Бондарец Сергей', 'Механик', '32 года', 'Опыт работы с Land Rover 8 лет', 'Количество нормо - часов за прошлый год:', '2619', 'Любимая модель Ленд Ровер', 'Range Rover Sport 2 3.0SC 340hp'],\n  ponomarev: ['Пономарев Владислав', 'Руководитель сервиса', '28 лет', 'Опыт работы с Land Rover 6 лет', 'Количество согласованных часов за прошлый год:', '9860', 'Любимая модель Ленд Ровер', 'Range Rover L405 4.4d 339hp'],\n  siromyatnikov: ['Сыромятников Станислав', 'Старший механик', '37 лет', 'Опыт работы с Land Rover 12 лет', 'Количество нормо - часов за прошлый год:', '3012', 'Любимая модель Ленд Ровер', 'Range Rover 3 5.0SC 510hp'],\n  sviderskiy: ['Свидерский Андрей', 'Мастер - приемщик', '37 лет', 'Опыт работы с Land Rover 10 лет', 'Количество согласованных часов за прошлый год:', '8244', 'Любимая модель Ленд Ровер', 'Land Rover Discovery 4 3.0d 245hp'],\n  tenkov: ['Теньков Алексей', 'Механик', '35 лет', 'Опыт работы с Land Rover 7 лет', 'Количество нормо - часов за прошлый год:', '2527', 'Любимая модель Ленд Ровер', 'Land Rover Freelander 2.2d 190hp']\n};\n\n//# sourceURL=webpack:///./js/main/units/data/wokersInfoData.js?");

/***/ }),

/***/ "./js/main/units/gifts.js":
/*!********************************!*\
  !*** ./js/main/units/gifts.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var curModalInfo = $('.card-gift__border_no-opacity .card-gift__desc-text').text();\n  $('.modal-form-gifts').attr('value', curModalInfo);\n  $('.card-gift').click(function () {\n    curModalInfo = $('.card-gift__desc-text', this).text();\n    $('.modal-form-gifts').attr('value', curModalInfo);\n    $('.card-gift').removeClass('card-gift__border_no-opacity card-gift__number__display_none');\n    $('.card-gift .card-gift__number').removeClass('card-gift__number__display_none');\n    $('.card-gift ul').addClass('card-gift__ul-choose__display_none');\n    $(this).addClass('card-gift__border_no-opacity');\n    $('ul', this).removeClass('card-gift__ul-choose__display_none');\n    $('.card-gift__number', this).addClass('card-gift__number__display_none');\n  });\n});\n\n//# sourceURL=webpack:///./js/main/units/gifts.js?");

/***/ }),

/***/ "./js/main/units/modal.js":
/*!********************************!*\
  !*** ./js/main/units/modal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $('.action__form-button, .modal__form__close-text-wrap, .modal__form__close-icon, .contacts__form-button').click(function () {\n    $('.modal-wrapper').toggleClass('modal-wrapper__active modal-wrapper__inactive');\n  });\n  $('.open-modal-ask').click(function () {\n    $('.modal__form-service').val($(this).attr('data-service'));\n    $('.modal_active').toggleClass('modal_active modal_inactive');\n    $('.modal-ask').toggleClass('modal_active modal_inactive');\n  });\n  $('.open-modal-callback').click(function () {\n    $('.modal__form-service').val($(this).attr('data-service'));\n    $('.modal_active').toggleClass('modal_active modal_inactive');\n    $('.modal-callback').toggleClass('modal_active modal_inactive');\n  });\n  $('.close').click(function () {\n    $('.modal_active').toggleClass('modal_active modal_inactive');\n  });\n});\n\n//# sourceURL=webpack:///./js/main/units/modal.js?");

/***/ }),

/***/ "./js/main/units/services.js":
/*!***********************************!*\
  !*** ./js/main/units/services.js ***!
  \***********************************/
/*! exports provided: initServicesLayerHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initServicesLayerHandle\", function() { return initServicesLayerHandle; });\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\nvar servicesHandleObject = {\n  cntCheckedServices: 2,\n  // установить обработчик на переключатель карточки-услуги\n  addClickHandle: function addClickHandle() {\n    $('.service__form-card-checkbox').click(function () {\n      var currentElement = $(this);\n\n      if (currentElement.attr('checked') === 'checked') {\n        servicesHandleObject.switchOffService(currentElement);\n      } else {\n        servicesHandleObject.switchOnService(currentElement);\n      }\n\n      servicesHandleObject.updateCntCheckedServices();\n    });\n  },\n  // выбрать услугу\n  switchOnService: function switchOnService(checkBoxElement) {\n    var curIdName = checkBoxElement[0].id;\n    var curNumElement = curIdName.slice(-1);\n    servicesHandleObject.cntCheckedServices += 1;\n    checkBoxElement.parent().parent('.service__card-form').next('.service__white-background').addClass('service__white-background__visibility_hidden');\n    checkBoxElement.next().children('.service__form-text-checkbox').text('выбрано');\n    var serviceText = checkBoxElement.closest('.service__cards-wrap-item').find('.service__form-card-label').text();\n    $('.service__span-cnt-sevices').text(servicesHandleObject.cntCheckedServices);\n    $('.service__choose-list').append(\"<div class=\\\"service__choose-item-wrap\\\" id=\\\"service_0\".concat(curNumElement, \"\\\">\\n          <p class=\\\"service__choose-item-text\\\">\").concat(serviceText, \"</p>\\n          <div class=\\\"service__choose-item-number-wrap\\\">\\n              <p class=\\\"service__choose-item-number\\\">0\").concat(servicesHandleObject.cntCheckedServices, \"</p>\\n          </div>\\n      </div>\"));\n    checkBoxElement.attr('checked', 'checked');\n  },\n  // отменить выбор услуги\n  switchOffService: function switchOffService(checkBoxElement) {\n    var curIdName = checkBoxElement[0].id;\n    var curNumElement = curIdName.slice(-1);\n    servicesHandleObject.cntCheckedServices -= 1;\n    checkBoxElement.next().children('.service__form-text-checkbox').text('выбрать');\n    checkBoxElement.parent().parent('.service__card-form').next('.service__white-background').removeClass('service__white-background__visibility_hidden');\n    $(\"#service_0\".concat(curNumElement)).remove();\n    $('.service__span-cnt-sevices').text(servicesHandleObject.cntCheckedServices);\n    checkBoxElement.removeAttr('checked');\n  },\n  // обновить количество выбранных сервис-услуг\n  updateCntCheckedServices: function updateCntCheckedServices() {\n    $('.service__choose-list .service__choose-item-number').each(function (indx, element) {\n      $(element).text(\"0\".concat(indx + 1));\n    });\n  }\n};\nvar initServicesLayerHandle = servicesHandleObject.addClickHandle;\n\n\n//# sourceURL=webpack:///./js/main/units/services.js?");

/***/ }),

/***/ "./js/main/units/teamSlider.js":
/*!*************************************!*\
  !*** ./js/main/units/teamSlider.js ***!
  \*************************************/
/*! exports provided: initTeamSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTeamSlider\", function() { return initTeamSlider; });\n/* harmony import */ var _data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/wokersInfoData.js */ \"./js/main/units/data/wokersInfoData.js\");\n\n\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\nvar TeamSlider = {\n  // номер текущего слайда\n  currentNumWorker: 0,\n  // количество слайдов\n  maximumNumWorker: null,\n  // объект с путями к картинке вида\n  // { bondarec: \"/assets/images/pages/home/img__team-person-bondarec.d0a396.jpg\"}\n  srcImagesList: {},\n  // инициализировать srcImagesList, maximumNumWorker\n  initSrcImagesList: function initSrcImagesList() {\n    var listImagesSrc = $('.team__photos img').map(function (indx, element) {\n      return $(element).attr('src');\n    }); // console.log(listImagesSrc);\n\n    listImagesSrc = listImagesSrc.get();\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = listImagesSrc[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var fullImgSr = _step.value;\n        var imgSrc = fullImgSr.slice(0, -11);\n        var lastDashindex = imgSrc.lastIndexOf('-');\n        var idName = imgSrc.slice(lastDashindex + 1);\n        TeamSlider.srcImagesList[idName] = fullImgSr;\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    this.maximumNumWorker = _data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"currentWokersListData\"].length;\n  },\n  // инициалзировать слайд - основная фунцкция (export)\n  initSlider: function initSlider() {\n    TeamSlider.initSrcImagesList(); // инициализировать переключение слайдера при нажатии на превью картинок\n\n    $('.team__preview-circle').click(function () {\n      TeamSlider.changePersonalInfo(this.id);\n      TeamSlider.setCurrentNumWorker(this.id);\n      TeamSlider.setRedBorder(this);\n      console.log(TeamSlider.srcImagesList);\n    }); // инициализировать обработку кнопок со стрелками\n\n    TeamSlider.initArrowHandle();\n  },\n  // обновить информацию на слайде\n  changePersonalInfo: function changePersonalInfo($idName) {\n    $('.personal-preview__name').text(\"\".concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][0]));\n    $('.personal-preview__vacancy').text(\"\".concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][1], \" / \").concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][2]));\n    $('.personal-preview__experience').text(\"\".concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][3]));\n    $('.personal-preview__add-text__first-feature').html(\"\".concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][4], \"<br>\").concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][5], \"<br><br>\"));\n    $('.personal-preview__add-text__second-feature').text(\"\".concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][6], \" \\u2014 \").concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"wokersData\"][$idName][7])); // обновить фото\n\n    $('.personal-preview__img-wrap > img').attr('src', TeamSlider.srcImagesList[$idName]);\n  },\n  // установить текущий номер слайда\n  setCurrentNumWorker: function setCurrentNumWorker($idName) {\n    this.currentNumWorker = _data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"currentWokersListData\"].indexOf($idName);\n  },\n  // установить рамку возле текущей картинки с превью\n  setRedBorder: function setRedBorder(context) {\n    $('.team__preview-circle').removeClass('team__preview-circle__border_true');\n    $(context).addClass('team__preview-circle__border_true');\n  },\n  // инициализировать обработку кнопок со стрелками\n  initArrowHandle: function initArrowHandle() {\n    // инициализровать обработку левой стрелки\n    $('.personal-preview__arrow__position_left, .personal-preview__arrow-svg__left_true').click(function () {\n      if (TeamSlider.currentNumWorker === 0) {\n        TeamSlider.currentNumWorker = TeamSlider.maximumNumWorker;\n      }\n\n      TeamSlider.currentNumWorker -= 1;\n      TeamSlider.changePersonalInfo(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"currentWokersListData\"][TeamSlider.currentNumWorker]);\n      var context = \"#\".concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"currentWokersListData\"][TeamSlider.currentNumWorker]);\n      TeamSlider.setRedBorder($(context));\n    }); // инициализровать обработку правой стрелки\n\n    $('.personal-preview__arrow__position_right, .personal-preview__arrow-svg__right_true').click(function () {\n      if (TeamSlider.currentNumWorker === TeamSlider.maximumNumWorker - 1) {\n        TeamSlider.currentNumWorker = -1;\n      }\n\n      TeamSlider.currentNumWorker += 1;\n      TeamSlider.changePersonalInfo(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"currentWokersListData\"][TeamSlider.currentNumWorker]);\n      var context = \"#\".concat(_data_wokersInfoData_js__WEBPACK_IMPORTED_MODULE_0__[\"currentWokersListData\"][TeamSlider.currentNumWorker]);\n      TeamSlider.setRedBorder($(context));\n    });\n  }\n}; // инициализация srcImagesList, maximumNumWorker\n\nvar initTeamSlider = TeamSlider.initSlider;\n\n\n//# sourceURL=webpack:///./js/main/units/teamSlider.js?");

/***/ }),

/***/ "./js/main/units/utm.js":
/*!******************************!*\
  !*** ./js/main/units/utm.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var getUTM = function getUTM(name) {\n    var target = window.location.search.match(new RegExp(\"\".concat(name, \"=([^&]+)\")));\n    return target ? target[1] : 'Не используется';\n  };\n\n  $('.utm_medium').val(getUTM('utm_medium'));\n  $('.utm_source').val(getUTM('utm_source'));\n  $('.utm_campaign').val(getUTM('utm_campaign'));\n  $('.utm_term').val(getUTM('utm_term'));\n  $('.utm_content').val(getUTM('utm_content'));\n});\n\n//# sourceURL=webpack:///./js/main/units/utm.js?");

/***/ }),

/***/ "./js/main/units/yandexMap/index.js":
/*!******************************************!*\
  !*** ./js/main/units/yandexMap/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return yandexMap; });\n/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ymaps */ \"../node_modules/ymaps/dist/ymaps.esm.js\");\n\nfunction yandexMap() {\n  var contactMap = null;\n  ymaps__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(function (maps) {\n    contactMap = new maps.Map('contactsMap', {\n      // http://dimik.github.io/ymaps/examples/location-tool/\n      center: [55.79665307, 37.596462],\n      zoom: 15,\n      controls: []\n    });\n    contactMap.controls.add('zoomControl', {\n      \"float\": 'none',\n      position: {\n        left: 10,\n        top: 140\n      }\n    });\n    contactMap.behaviors.enable(['drag', 'rightMouseButtonMagnifier']).disable('scrollZoom'); // Pin param\n\n    var contactPin = new maps.Placemark([55.79665307, 37.596462], {\n      balloonContentHeader: 'Сервис Ленд Ровер LR-Avangard',\n      balloonContentBody: '<p>Специализированный сервис Ленд Ровер в Москве</p>',\n      hintContent: 'Сервис Ленд Ровер LR-Avangard'\n    }, {\n      iconLayout: 'default#image',\n      iconImageHref: 'assets/images/common/img__map-pin.svg',\n      iconImageSize: [142, 58],\n      iconImageOffset: [-90, -62]\n    });\n    contactMap.geoObjects.add(contactPin);\n  })[\"catch\"](function (error) {\n    return console.log('Failed to load Yandex Maps', error);\n  });\n}\n\n//# sourceURL=webpack:///./js/main/units/yandexMap/index.js?");

/***/ }),

/***/ "./scss/main/style.scss":
/*!******************************!*\
  !*** ./scss/main/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/main/style.scss?");

/***/ })

/******/ });
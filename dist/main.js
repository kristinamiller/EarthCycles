/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ecosystem-view.js":
/*!*******************************!*\
  !*** ./src/ecosystem-view.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass EcosystemView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.ecosystem = new _ecosystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.animate = this.animate.bind(this);\n  }\n\n  start() {\n    this.ecosystem.draw();\n    requestAnimationFrame(this.animate); //like an event handler \n    // this.makeBase();\n  }\n\n  // makeBase() {\n  //   let baseImage = new Image();\n  //   baseImage.src = '../assets/images/gradient-lake-background.png';\n  //   baseImage.onload = function () {\n  //     this.ctx.drawImage(baseImage, 0, 0);\n  //   }\n  // }\n\n  animate() {\n    requestAnimationFrame(this.animate);\n    this.ecosystem.update();\n    this.ecosystem.draw();\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EcosystemView);\n\n//# sourceURL=webpack:///./src/ecosystem-view.js?");

/***/ }),

/***/ "./src/ecosystem.js":
/*!**************************!*\
  !*** ./src/ecosystem.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raindrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raindrop */ \"./src/raindrop.js\");\n\n\nclass Ecosystem {\n  constructor(ctx, ecosystem) {\n    this.ctx = ctx;\n    this.ecosystem = ecosystem;\n    this.rain = false;\n    this.raindrops = [];\n  }\n\n  update() {\n    this.makeRain();\n    //checks if its raining or not. if it's true, make rain.\n  }\n\n  addRaindrops() {\n    if (this.raindrops.length < 500) {\n      for (let i = 0; i < 50; i++) {\n        let newRaindrop = new _raindrop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ ctx: this.ctx })\n        this.raindrops.push(newRaindrop);\n      }\n    }\n\n  }\n\n\n  makeRain() {\n    this.addRaindrops();\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n\n    this.raindrops.forEach((raindrop) => {\n      raindrop.draw();\n      raindrop.fall();\n    })\n    //draw all the things. sun, rain, clouds, etc.\n    //iterates through raindrops array and draws each one. \n    // \n  }\n\n  \n  \n\n  //handle click - when someone clicks cloud, updates \n  // look up vanilla dom click event handler\n  // look up positioning of clicks on canvas\n  //\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ecosystem);\n\n//# sourceURL=webpack:///./src/ecosystem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n/* harmony import */ var _ecosystem_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecosystem-view */ \"./src/ecosystem-view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"mycanvas\");\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  const ecosystem = new _ecosystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  new _ecosystem_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, ecosystem).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/raindrop.js":
/*!*************************!*\
  !*** ./src/raindrop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass Raindrop {\n  constructor(options = {}) {\n    this.color = this.generateColor();\n    this.radius = 10;\n    this.pos = this.generatePosition();\n    this.vel = this.generateVelocity();\n    this.ctx = options.ctx;\n    this.fall = this.fall.bind(this);\n  }\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n  generatePosition() {\n    let xPos = Math.floor((Math.random() * (window.innerWidth)));\n    return [xPos, 0];\n  }\n\n  generateVelocity() {\n    let velocities = [2, 2.5, 3];\n    let vel = velocities[Math.floor(Math.random()*velocities.length)]\n    return vel;\n  }\n\n  generateColor() {\n    let colors = [\"rgba(42, 75, 180, 0.692)\", \"rgba(42, 75, 180, 0.992)\", \"rgba(42, 81, 180, 0.767)\", \"rgba(42, 61, 180, 0.367)\"];\n    let color = colors[Math.floor(Math.random() * colors.length)]\n    return color;\n  }\n\n  generateRadius() {\n    let radius = this.getRandomNum(5, 10);\n    return radius;\n  }\n  \n\n  draw() {\n    this.ctx.beginPath();\n    // this.ctx.fillStyle = this.color;\n    // this.ctx.fillRect(this.pos[0], this.pos[1], 0.5, 5);\n    this.ctx.moveTo(this.pos[0], this.pos[1])\n    this.ctx.lineTo(this.pos[0], (this.pos[1]+ 10));\n    this.ctx.strokeStyle = this.color;\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n    // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n  }\n\n  fall() {\n    if (this.pos[1] > window.innerHeight) {\n      this.pos = this.generatePosition();\n    }\n    this.vel = this.generateVelocity();\n    this.pos[1] += this.vel;\n    this.vel = this.vel + 0.3;\n\n    // this.pos[1] += 1;\n  }\n\n\n\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Raindrop);\n\n//# sourceURL=webpack:///./src/raindrop.js?");

/***/ })

/******/ });
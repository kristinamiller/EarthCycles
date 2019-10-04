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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass EcosystemView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.ecosystem = new _ecosystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.animate = this.animate.bind(this);\n  }\n\n  start() {\n    let context = this.ctx;\n    let ecosystem = this.ecosystem;\n    let baseImage = new Image();\n    let that = this;\n    baseImage.src = '../assets/images/gradient-lake-background.png';\n    baseImage.onload = function () {\n      context.drawImage(baseImage, 0, 0, window.innerWidth, 500);\n      ecosystem.draw();\n      requestAnimationFrame(that.animate); \n    }\n  }\n\n\n\n  animate() {\n    requestAnimationFrame(this.animate);\n    this.ecosystem.update();\n    this.ecosystem.draw();\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EcosystemView);\n\n//# sourceURL=webpack:///./src/ecosystem-view.js?");

/***/ }),

/***/ "./src/ecosystem.js":
/*!**************************!*\
  !*** ./src/ecosystem.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raindrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raindrop */ \"./src/raindrop.js\");\n/* harmony import */ var _evaporation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaporation */ \"./src/evaporation.js\");\n/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun */ \"./src/sun.js\");\n\n\n\n\nclass Ecosystem {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.rain = false;\n    this.raindrops = [];\n    this.evaporation = new _evaporation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ctx: this.ctx});\n    this.sun = new _sun__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    this.count = 0;\n  }\n\n  update() {\n    this.makeRain();\n    // this.evaporation.evaporate();\n    // this.makeBase();\n    //checks if its raining or not. if it's true, make rain.\n  }\n\n  addRaindrops() {\n    // if (this.raindrops.length < 100) {\n      // console.log(this.raindrops.length)\n      for (let i = 0; i < 50; i++) {\n        let newRaindrop = new _raindrop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ ctx: this.ctx, ecosystem: this })\n        this.raindrops.push(newRaindrop);\n      }\n    \n  }\n\n  makeRain() {\n    this.addRaindrops();\n  }\n\n  removeRaindrop(raindrop) {\n    this.raindrops.splice(this.raindrops.indexOf(raindrop),1);\n  };\n\n  draw() {\n    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    \n    let context = this.ctx;\n    let baseImage = new Image();\n    baseImage.src = '../assets/images/gradient-lake-background.png';\n    let ratio = window.innerWidth / baseImage.width;\n    let height = baseImage.height * ratio;\n    let width = baseImage.width * ratio;\n\n    context.drawImage(baseImage, 0, window.innerHeight - height, width, height);\n\n    this.sun.draw();\n    \n    this.raindrops.forEach((raindrop) => {\n      raindrop.draw();\n      raindrop.fall();\n    })\n\n\n    // this.evaporation.draw();\n\n  }\n\n  \n  makeBase() {\n    let context = this.ctx;\n    let baseImage = new Image();\n    baseImage.src = '../assets/images/gradient-lake-background.png';\n    baseImage.onload = function () {\n      console.log(\"test\");\n      context.drawImage(baseImage, -100, -100);\n    }\n  }\n\n  //handle click - when someone clicks cloud, updates \n  // look up vanilla dom click event handler\n  // look up positioning of clicks on canvas\n  //\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ecosystem);\n\n//# sourceURL=webpack:///./src/ecosystem.js?");

/***/ }),

/***/ "./src/evaporation.js":
/*!****************************!*\
  !*** ./src/evaporation.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Evaporation {\n  constructor(options = {}) {\n    this.ctx = options.ctx;\n    this.pos = [100, window.innerHeight * 0.8];\n    this.origin = [100, window.innerHeight * 0.8];\n    this.x1 = this.pos[0];\n    this.x2 = this.pos[0] - 30;\n    this.x2origin = this.pos[0] - 30;\n    this.x3 = this.pos[0] + 30;\n    this.x3origin = this.pos[0] + 30;\n    this.x4 = this.pos[0];\n    this.squiggleCount = 0.5;\n    this.squiggleCount2 = -0.5;\n  }\n\n  draw() {\n    let y1 = this.pos[1];\n    let y2 = y1 - 40;\n    let y3 = y1 - 50;\n    let y4 = y1 - 90;\n    let y5 = y1 - 120;\n    let y6 = y1 - 150;\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.x1, y1)\n    this.ctx.bezierCurveTo(this.x2, y2, this.x3, y3, this.x4, y4);\n    // this.ctx.bezierCurveTo(this.x4, y4, this.x2, y5, this.x1, y6);\n    this.ctx.strokeStyle = \"green\";\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n  }\n\n  evaporate() {\n    let opposite = 0;\n    if (this.x1 > this.origin[0] + 10) {\n      this.squiggleCount = -0.5;\n    }\n    if (this.x1 < this.origin[0] - 10) {\n      this.squiggleCount = 0.5;\n    }\n    if (this.x2 > this.origin[0] + 30) {\n      this.squiggleCount2 = -0.5;\n    }\n    if (this.x2 < this.origin[0] - 30) {\n      this.squiggleCount2 = 0.5;\n    }\n\n    this.x1 += this.squiggleCount;\n    this.x3 += this.squiggleCount;\n\n    this.x2 += this.squiggleCount2;\n    this.x4 += this.squiggleCount2;\n    \n   }\n  \n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evaporation);\n\n\n//# sourceURL=webpack:///./src/evaporation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n/* harmony import */ var _ecosystem_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecosystem-view */ \"./src/ecosystem-view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"mycanvas\");\n  // canvasEl.width = 300;\n  // canvasEl.height = 200;\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  const ecosystem = new _ecosystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  new _ecosystem_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, ecosystem).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/raindrop.js":
/*!*************************!*\
  !*** ./src/raindrop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass Raindrop {\n  constructor(options = {}) {\n    this.color = this.generateColor();\n    this.radius = 10;\n    this.pos = this.generatePosition();\n    this.vel = this.generateVelocity();\n    this.ctx = options.ctx;\n    this.fall = this.fall.bind(this);\n    this.ecosystem = options.ecosystem;\n    this.raindropLength = this.generateLength();\n    this.count = 0;\n  }\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n  generatePosition() {\n    let xPos = Math.floor((Math.random() * (window.innerWidth)));\n    let yPositions = [-1, -5, -2];\n    let yPos = yPositions[Math.floor(Math.random() * yPositions.length)]\n    return [xPos, yPos];\n  }\n\n  generateVelocity() {\n    let velocities = [4, 5, 6];\n    let vel = velocities[Math.floor(Math.random()*velocities.length)]\n    return vel;\n  }\n\n  generateLength() {\n    return this.getRandomNum(10, 20);\n  }\n\n  generateColor() {\n    let colors = [\n      \"rgba(207, 204, 247, 0.86)\", \n      \"rgba(207, 204, 247, 0.96)\", \n      \"rgba(162, 156, 235, 0.66)\"\n      ];\n    let color = colors[Math.floor(Math.random() * colors.length)]\n    return color;\n  }\n\n  generateRadius() {\n    let radius = this.getRandomNum(5, 10);\n    return radius;\n  }\n  \n\n  draw() {\n    let length = this.raindropLength;\n    // console.log(length)\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.pos[0], this.pos[1])\n    this.ctx.lineTo(this.pos[0], (this.pos[1] + 10));\n    this.ctx.strokeStyle = this.color;\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n  }\n\n  fall() {\n\n    // let stoppingPoint = this.getRandomNum(window.innerHeight * 0.71, window.innerHeight * 0.51)\n    //   if (this.count < 10) {\n    //     console.log(stoppingPoint);\n    //     this.count += 1\n    //   }\n    if (this.pos[1] > window.innerHeight * 0.7) {\n      this.ecosystem.removeRaindrop(this);\n    }\n  \n    this.pos[1] += this.vel;\n    this.vel = this.vel + 0.3;\n\n    // this.pos[1] += 1;\n  }\n\n\n\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Raindrop);\n\n//# sourceURL=webpack:///./src/raindrop.js?");

/***/ }),

/***/ "./src/sun.js":
/*!********************!*\
  !*** ./src/sun.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sun {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/sun.png';\n    this.ctx = ctx;\n  }\n\n\n\n\n  draw() {\n    this.ctx.drawImage(this.image, 0, 0);\n    \n  }\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sun);\n\n//# sourceURL=webpack:///./src/sun.js?");

/***/ })

/******/ });
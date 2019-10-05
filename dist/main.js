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

/***/ "./src/cloud.js":
/*!**********************!*\
  !*** ./src/cloud.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Cloud {\n  constructor(ctx, pos) {\n    this.ctx = ctx;\n    this.width = 200;\n    this.height = 100;\n    this.increment = 0.5;\n    this.pos = pos;\n    this.color = \"rgb(215, 232, 250)\";\n    // this.color = \"white\";\n    this.vel = 1;\n  }\n\n\n\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 15, this.pos[1] + 35, 25, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"pink\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] - 30, this.pos[1] + 30, 35, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"green\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] - 80, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"purple\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] - 40, this.pos[1] + 5, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"blue\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 60, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 45, this.pos[1] + 5, 20, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = this.color;\n    // this.ctx.fillStyle = \"green\";\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 15, this.pos[1] - 25, 35, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"green\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 5, this.pos[1] - 5, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = this.color;\n    // this.ctx.fillStyle = \"green\";\n    this.ctx.fill();\n\n  }\n\n  animate() {\n    if (this.pos[0] > window.innerWidth - 100) {\n\n    }\n    this.pos[0] += this.vel;\n\n\n  }\n\n  // pulse() {\n  //   if (this.width > 230) {\n  //     this.increment = -0.5;\n  //   } \n  //   if (this.width < 200) {\n  //     this.increment = 0.5;\n  //   }\n  //   this.width += this.increment;\n  //   this.height += this.increment;\n  //   this.pos[0] -= (this.increment / 2);\n  //   this.pos[1] -= (this.increment / 2);\n  // }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cloud);\n\n//# sourceURL=webpack:///./src/cloud.js?");

/***/ }),

/***/ "./src/cow.js":
/*!********************!*\
  !*** ./src/cow.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Cow {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/cow-eating-grass.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n    this.bubbleRadius = 10;\n    this.increment = 0.5;\n    this.vel = 0;\n    this.bubblePos = [280, 350];\n  }\n\n\n  draw() {\n    let ratio = window.innerWidth * 0.0003;\n    let height = this.image.height * ratio;\n    let width = this.image.width * ratio;\n    // let height = 200;\n    // let width = 200;\n\n    this.ctx.drawImage(this.image, window.innerWidth * 0.2, window.innerHeight * 0.43, width, height);\n  }\n\n  makeFart(numBubbles) {\n    for (let i = 0; i < numBubbles; i++) {\n      this.ctx.beginPath();\n      this.ctx.arc(this.bubblePos[0], this.bubblePos[1], this.bubbleRadius, 0, 2 * Math.PI, false);\n      this.ctx.fillStyle = \"rgba(224, 135, 94, 0.949)\";\n      this.ctx.fill();\n    }\n\n  }\n\n  animate() {\n    this.makeFart(1);\n    if (this.bubbleRadius > 30) {\n      this.increment = 0;\n      this.vel = 1;\n      this.makeFart(1);\n    }\n    this.bubbleRadius += this.increment;\n    // this.bubblePos[1] -= this.vel;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cow);\n\n//# sourceURL=webpack:///./src/cow.js?");

/***/ }),

/***/ "./src/ecosystem-view.js":
/*!*******************************!*\
  !*** ./src/ecosystem-view.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass EcosystemView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.ecosystem = new _ecosystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.animate = this.animate.bind(this);\n  }\n\n  start() {\n    let context = this.ctx;\n    let ecosystem = this.ecosystem;\n    let baseImage = new Image();\n    let that = this;\n    baseImage.src = '../assets/images/ecosystem-background.png';\n    baseImage.onload = function () {\n      context.drawImage(baseImage, 0, 0, window.innerWidth, 500);\n      ecosystem.draw();\n      requestAnimationFrame(that.animate); \n    }\n  }\n\n\n\n  animate() {\n    requestAnimationFrame(this.animate);\n    this.ecosystem.update();\n    this.ecosystem.draw();\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EcosystemView);\n\n//# sourceURL=webpack:///./src/ecosystem-view.js?");

/***/ }),

/***/ "./src/ecosystem.js":
/*!**************************!*\
  !*** ./src/ecosystem.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raindrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raindrop */ \"./src/raindrop.js\");\n/* harmony import */ var _evaporation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaporation */ \"./src/evaporation.js\");\n/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun */ \"./src/sun.js\");\n/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloud */ \"./src/cloud.js\");\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _mushroom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mushroom */ \"./src/mushroom.js\");\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ \"./src/factory.js\");\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fish */ \"./src/fish.js\");\n/* harmony import */ var _cow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cow */ \"./src/cow.js\");\n\n\n\n\n\n\n\n\n\n\nclass Ecosystem {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.rain = false;\n    this.raindrops = [];\n    this.evaporation = [];\n    this.sun = new _sun__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    this.tree = new _tree__WEBPACK_IMPORTED_MODULE_4__[\"default\"](ctx);\n    this.mushroom = new _mushroom__WEBPACK_IMPORTED_MODULE_5__[\"default\"](ctx);\n    this.factory = new _factory__WEBPACK_IMPORTED_MODULE_6__[\"default\"](ctx);\n    this.fish = new _fish__WEBPACK_IMPORTED_MODULE_7__[\"default\"](ctx);\n    this.cow = new _cow__WEBPACK_IMPORTED_MODULE_8__[\"default\"](ctx);\n    this.clouds = [];\n    this.cloud = new _cloud__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\n    this.count = 0;\n    this.ratio = 0.8;\n  }\n\n  update() {\n    // this.makeRain();\n    this.makeEvaporation();\n\n    this.clouds.forEach((cloud) => {\n      // cloud.draw();\n      // cloud.animate();\n    })\n    // this.cloud.animate();\n    //checks if its raining or not. if it's true, make rain.\n  }\n\n\n  draw() {\n    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    \n    let context = this.ctx;\n    let baseImage = new Image();\n    baseImage.src = '../assets/images/ecosystem-background.png';\n    this.ratio = window.innerWidth / baseImage.width;\n    let height = baseImage.height * this.ratio;\n    let width = baseImage.width * this.ratio;\n\n    context.drawImage(baseImage, 0, window.innerHeight - height, width, height);\n\n    this.sun.draw();\n    \n    this.addClouds(3);\n    this.clouds.forEach((cloud) => {\n      cloud.draw();\n      // cloud.animate();\n    })\n    this.tree.draw();\n    this.mushroom.draw();\n    // this.factory.draw();\n    this.fish.draw();\n    this.cow.draw();\n    this.cow.animate();\n    \n    this.raindrops.forEach((raindrop) => {\n      raindrop.draw();\n      raindrop.fall();\n    })\n\n\n    this.evaporation.forEach((squiggle) => {\n      squiggle.draw();\n      squiggle.evaporate();\n    })\n\n  }\n  \n  //rain ***********\n\n  addRaindrops() {\n    let numRaindrops = window.innerWidth * 0.08;\n      for (let i = 0; i < numRaindrops; i++) {\n        let newRaindrop = new _raindrop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ ctx: this.ctx, ecosystem: this })\n        this.raindrops.push(newRaindrop);\n      }\n  }\n\n  makeRain() {\n    this.addRaindrops();\n  }\n\n  removeRaindrop(raindrop) {\n    this.raindrops.splice(this.raindrops.indexOf(raindrop),1);\n  };\n\n//clouds\n  addClouds(numClouds) {\n    let positions = [\n      [window.innerWidth * 0.25, window.innerHeight * 0.1],\n      [window.innerWidth * 0.45, window.innerHeight * 0.2],\n      [(window.innerWidth * 0.45) + 40, window.innerHeight * 0.2],\n      [window.innerWidth * 0.9, window.innerHeight * 0.15],\n      [window.innerWidth * 0.73, window.innerHeight * 0.22],\n    ]\n\n    for (let i = 0; i < numClouds; i++) {\n      let newCloud = new _cloud__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, positions[i])\n      this.clouds.push(newCloud);\n    }\n  }\n\n//evaporation\n\n  makeEvaporation() {\n\n\n    for (let i = 0; i < 3; i++) {\n      new _evaporation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ ctx: this.ctx })\n      this.evaporation.push()\n    }\n\n\n  }\n\n\n\n\n  \n  makeBase() {\n    let context = this.ctx;\n    let baseImage = new Image();\n    baseImage.src = '../assets/images/ecosystem-background.png';\n    baseImage.onload = function () {\n      console.log(\"test\");\n      context.drawImage(baseImage, -100, -100);\n    }\n  }\n\n  //handle click - when someone clicks cloud, updates \n  // look up vanilla dom click event handler\n  // look up positioning of clicks on canvas\n  //\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ecosystem);\n\n//# sourceURL=webpack:///./src/ecosystem.js?");

/***/ }),

/***/ "./src/evaporation.js":
/*!****************************!*\
  !*** ./src/evaporation.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Evaporation {\n  constructor(options = {}) {\n    this.ctx = options.ctx;\n    this.pos = [window.innerWidth * 0.7, window.innerHeight * 0.7];\n    this.origin = [window.innerWidth * 0.7, window.innerHeight * 0.7];\n    this.x1 = this.pos[0];\n    this.x2 = this.pos[0] - 30;\n    this.x2origin = this.pos[0] - 30;\n    this.x3 = this.pos[0] + 30;\n    this.x3origin = this.pos[0] + 30;\n    this.x4 = this.pos[0];\n    this.squiggleCount = 0.5;\n    this.squiggleCount2 = -0.5;\n  }\n\n  draw() {\n    let y1 = this.pos[1];\n    let y2 = y1 - 40;\n    let y3 = y1 - 50;\n    let y4 = y1 - 90;\n    let y5 = y1 - 120;\n    let y6 = y1 - 150;\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.x1, y1)\n    this.ctx.bezierCurveTo(this.x2, y2, this.x3, y3, this.x4, y4);\n    // this.ctx.bezierCurveTo(this.x4, y4, this.x2, y5, this.x1, y6);\n    this.ctx.strokeStyle = \"white\";\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n  }\n\n  evaporate() {\n    let opposite = 1;\n    if (this.x1 > this.origin[0] + 10) {\n      this.squiggleCount = -0.5;\n    }\n    if (this.x1 < this.origin[0] - 10) {\n      this.squiggleCount = 0.5;\n    }\n    if (this.x2 > this.origin[0] + 10) {\n      opposite = 1;\n    }\n    if (this.x2 < this.origin[0] - 10) {\n      opposite = -1;\n    }\n\n    this.x1 += this.squiggleCount;\n    this.x3 += this.squiggleCount;\n\n    this.x2 -= opposite;\n    this.x4 -= opposite;\n    \n   }\n  \n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evaporation);\n\n\n//# sourceURL=webpack:///./src/evaporation.js?");

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Factory {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/factory1.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n  }\n\n\n  draw() {\n\n    let ratio = window.innerWidth * 0.0004;\n    let height = this.image.height * ratio;\n    let width = this.image.width * ratio;\n    // let height = 200;\n    // let width = 200;\n\n    this.ctx.drawImage(this.image, window.innerWidth * 0.05, window.innerHeight * 0.3, width, height);\n  }\n\n  makeSmoke() {\n    \n  }\n\n  animate() {\n \n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Factory);\n\n//# sourceURL=webpack:///./src/factory.js?");

/***/ }),

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Fish {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/cute-orange-fish.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n  }\n\n\n  draw() {\n    let ratio = window.innerWidth * 0.00005;\n    let height = this.image.height * ratio;\n    let width = this.image.width * ratio;\n    // let height = 200;\n    // let width = 200;\n\n    this.ctx.drawImage(this.image, window.innerWidth * 0.7, window.innerHeight * 0.8, width, height);\n  }\n\n  makeSmoke() {\n\n  }\n\n  animate() {\n\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fish);\n\n//# sourceURL=webpack:///./src/fish.js?");

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

/***/ "./src/mushroom.js":
/*!*************************!*\
  !*** ./src/mushroom.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Mushroom {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/mushrooms.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n  }\n\n\n  draw() {\n\n    let ratio = window.innerWidth * 0.00006;\n    let height = this.image.height * ratio;\n    let width = this.image.width * ratio;\n    // let height = 200;\n    // let width = 200;\n\n    this.ctx.drawImage(this.image, window.innerWidth * 0.4, window.innerHeight * 0.55, width, height);\n  }\n\n  animate() {\n    if (this.width > 230) {\n      this.increment = -0.5;\n    }\n    if (this.width < 200) {\n      this.increment = 0.5;\n    }\n    this.width += this.increment;\n    this.height += this.increment;\n    this.pos[0] -= (this.increment / 2);\n    this.pos[1] -= (this.increment / 2);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mushroom);\n\n//# sourceURL=webpack:///./src/mushroom.js?");

/***/ }),

/***/ "./src/raindrop.js":
/*!*************************!*\
  !*** ./src/raindrop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass Raindrop {\n  constructor(options = {}) {\n    this.color = this.generateColor();\n    this.radius = 10;\n    this.pos = this.generatePosition();\n    this.vel = this.generateVelocity();\n    this.ctx = options.ctx;\n    this.fall = this.fall.bind(this);\n    this.ecosystem = options.ecosystem;\n    this.raindropLength = this.generateLength();\n    this.count = 0;\n  }\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n  generatePosition() {\n    let xPos = Math.floor((Math.random() * (window.innerWidth)));\n    let yPositions = [-10, -20, -30, -40, -50, -60, -70, -80, -90, -100 ];\n    let yPos = yPositions[Math.floor(Math.random() * yPositions.length)]\n    return [xPos, yPos]\n  }\n\n  generateVelocity() {\n    let velocities = [4, 5, 6];\n    let vel = velocities[Math.floor(Math.random()*velocities.length)]\n    return vel;\n  }\n\n  generateLength() {\n    return this.getRandomNum(10, 20);\n  }\n\n  generateColor() {\n    let colors = [\n      \"rgba(207, 204, 247, 0.86)\", \n      \"rgba(207, 204, 247, 0.96)\", \n      \"rgba(192, 176, 235, 0.66)\"\n      ];\n    let color = colors[Math.floor(Math.random() * colors.length)]\n    return color;\n  }\n\n  generateRadius() {\n    let radius = this.getRandomNum(5, 10);\n    return radius;\n  }\n  \n\n  draw() {\n    let lengths = [10, 13, 17];\n    let length = lengths[Math.floor(Math.random() * lengths.length)]\n    this.raindropLength = length;\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.pos[0], this.pos[1])\n    this.ctx.lineTo(this.pos[0] + 2, (this.pos[1] + length));\n    this.ctx.strokeStyle = this.color;\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n  }\n\n  fall() {\n    let ratios = [0.5, 0.6, 0.7, 0.71, 0.72, 0.73];\n    let ratio = ratios[Math.floor(Math.random() * ratios.length)]\n    if (this.pos[1] > window.innerHeight * ratio) {\n      this.ecosystem.removeRaindrop(this);\n      this.splash([this.pos[0] + 2, this.pos[1] + this.raindropLength])\n    }\n  \n    this.pos[0] += 0.2;\n    this.pos[1] += this.vel;\n    this.vel = this.vel + 0.1;\n  }\n\n  splash(position) {\n    let lengths = [5, 10, 15];\n    let length = lengths[Math.floor(Math.random() * lengths.length)]\n\n    this.ctx.beginPath();\n    this.ctx.moveTo(position[0] + 1, position[1] - 1);\n    this.ctx.lineTo(position[0] + 2, position[1] - length);\n    this.ctx.strokeStyle = \"rgba(207, 204, 247, 0.897)\";\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n\n    this.ctx.beginPath();\n    this.ctx.moveTo(position[0] - 1, position[1] + 1);\n    this.ctx.lineTo(position[0] - 2, position[1] - length);\n    this.ctx.strokeStyle = \"rgba(207, 204, 247, 0.897)\";\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n  }\n\n\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Raindrop);\n\n//# sourceURL=webpack:///./src/raindrop.js?");

/***/ }),

/***/ "./src/sun.js":
/*!********************!*\
  !*** ./src/sun.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sun {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/sun2.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n  }\n\n\n\n\n  draw() {\n\n    let ratio = window.innerWidth * 0.00005;\n    // let height = this.image.height * ratio;\n    // let width = this.image.width * ratio;\n    let height = 200;\n    let width = 200;\n\n    this.ctx.drawImage(this.image, window.innerWidth * 0.65, 50, width, height);\n  }\n\n  animate() {\n    if (this.width > 230) {\n      this.increment = -0.5;\n    }\n    if (this.width < 200) {\n      this.increment = 0.5;\n    }\n    this.width += this.increment;\n    this.height += this.increment;\n    this.pos[0] -= (this.increment / 2);\n    this.pos[1] -= (this.increment / 2);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sun);\n\n//# sourceURL=webpack:///./src/sun.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Tree {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/deciduous-tree.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n  }\n\n\n  draw() {\n\n    let ratio = window.innerWidth * 0.00006;\n    let height = this.image.height * ratio;\n    let width = this.image.width * ratio;\n    // let height = 200;\n    // let width = 200;\n\n    this.ctx.drawImage(this.image, window.innerWidth * 0.4, window.innerHeight * 0.18, width, height);\n  }\n\n  animate() {\n    if (this.width > 230) {\n      this.increment = -0.5;\n    }\n    if (this.width < 200) {\n      this.increment = 0.5;\n    }\n    this.width += this.increment;\n    this.height += this.increment;\n    this.pos[0] -= (this.increment / 2);\n    this.pos[1] -= (this.increment / 2);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tree);\n\n//# sourceURL=webpack:///./src/tree.js?");

/***/ })

/******/ });
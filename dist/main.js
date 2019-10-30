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

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass Bubble {\n  constructor(options = {}) {\n    this.color = options.color;\n    this.finalColor = `rgba(\n      ${this.color[0]},\n      ${this.color[1]},\n      ${this.color[2]},\n      ${this.transparency}\n      )`\n    this.colorChange = options.colorChange;\n    this.transparency = 1;\n    this.minRadius = options.minRadius;\n    this.maxRadius = options.maxRadius;\n    this.pos = options.pos.slice();\n    this.startPos = options.pos.slice();\n    this.vel = options.vel;\n    this.ctx = options.ctx;\n    this.increment = options.increment;\n    this.boundary = options.boundary;\n    this.animate = this.animate.bind(this);\n    \n    \n    // this.ecosystem = options.ecosystem;\n    // this.backgroundHeight = options.backgroundHeight;\n    // this.backgroundTop = options.backgroundTop;\n  }\n\n\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0], this.pos[1], this.minRadius, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = `${this.finalColor}`;\n    this.ctx.fill();\n  }\n\n  animate() {\n    if (this.minRadius > this.maxRadius) {\n      this.increment = 0;\n    }\n    if (this.pos[0] < this.startPos[0] - this.boundary || this.pos[0] > this.startPos[0] + this.boundary) {\n      this.vel[0] = 0;\n    }\n\n    this.minRadius += this.increment;\n    this.pos[0] -= this.vel[0];\n    this.pos[1] -= this.vel[1];\n\n    this.transparency -= this.colorChange;\n      this.finalColor = `rgba(\n      ${this.color[0]},\n      ${this.color[1]},\n      ${this.color[2]},\n      ${this.transparency}\n      )`\n    \n    \n\n  }\n  \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/cloud.js":
/*!**********************!*\
  !*** ./src/cloud.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Cloud {\n  constructor(ctx, pos) {\n    this.ctx = ctx;\n    this.width = 200;\n    this.height = 100;\n    this.increment = 0.5;\n    this.pos = pos;\n    this.color = \"rgb(215, 232, 250)\";\n    this.vel = 1;\n    this.raining = false;\n    if (this.pos) {\n      this.rect = [this.pos[0] - 110, this.pos[1] - 50, this.pos[0] + 90, this.pos[1] + 50]\n    }\n  }\n\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 15, this.pos[1] + 35, 25, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"pink\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] - 30, this.pos[1] + 30, 35, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"green\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] - 80, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"purple\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] - 40, this.pos[1] + 5, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"blue\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 60, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 45, this.pos[1] + 5, 20, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = this.color;\n    // this.ctx.fillStyle = \"green\";\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 15, this.pos[1] - 25, 35, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = \"green\";\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0] + 5, this.pos[1] - 5, 30, 0, 2 * Math.PI, false);\n    this.ctx.fillStyle = this.color;\n    // this.ctx.fillStyle = \"green\";\n    this.ctx.fill();\n\n\n  }\n\n  animate() {\n    if (this.pos[0] > window.innerWidth - 100) {\n      this.vel = -1;\n    }\n    if (this.pos[0] < 100) {\n      this.vel = 1;\n    }\n    this.pos[0] += this.vel;\n    this.rect = [this.pos[0] - 110, this.pos[1] - 50, this.pos[0] + 90, this.pos[1] + 50]\n  }\n\n  \n\n  // pulse() {\n  //   if (this.width > 230) {\n  //     this.increment = -0.5;\n  //   } \n  //   if (this.width < 200) {\n  //     this.increment = 0.5;\n  //   }\n  //   this.width += this.increment;\n  //   this.height += this.increment;\n  //   this.pos[0] -= (this.increment / 2);\n  //   this.pos[1] -= (this.increment / 2);\n  // }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cloud);\n\n//# sourceURL=webpack:///./src/cloud.js?");

/***/ }),

/***/ "./src/cow.js":
/*!********************!*\
  !*** ./src/cow.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n\n\n\nclass Cow {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/cow-eating-grass.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n    this.bubbleRadius = 10;\n    this.increment = 0.2;\n    this.vel = 0;\n    this.bubblePos = [280, 350];\n    this.space = [];\n    this.pos = [];\n    this.rect = [];\n    this.increment = 0.1;\n    this.vel = [0, 0.5];\n    this.bubblePos = [];\n    this.bubbleEmerging = false;\n    this.bubbles = [];\n    this.color = [120, 79, 8];\n    this.colorChange = 0.003;\n    this.smokeRadius = 15;\n    this.boundary = 300;\n    this.bubbleCount = 0;\n    this.maxBubbles = 8;\n  }\n\n\n  draw(backgroundHeight, backgroundTop) {\n    let ratio = window.innerWidth * 0.00035;\n    this.height = this.image.height * ratio;\n    this.width = this.image.width * ratio;\n    let bottom = (backgroundHeight * 0.82) + backgroundTop;\n    let topX = window.innerWidth * 0.25;\n    let topY = bottom - this.height;\n\n    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);\n    this.pos = [topX, topY];\n\n    this.rect = [\n      this.pos[0] + this.width * 0.05,\n      this.pos[1] + this.height * 0.2,\n      this.pos[0] + this.width * 0.9,\n      this.pos[1] + this.height * 0.6]\n\n    // this.ctx.fillStyle = \"rgb(215, 232, 250, 0.4)\";\n    // this.ctx.fillRect(this.pos[0] + this.width * 0.05, this.pos[1] + this.height * 0.2, this.width * 0.9, this.height * 0.6)\n\n\n  }\n\n  makeFart() {\n    if (this.bubblePos.length === 0) {\n      this.bubblePos = [this.pos[0] + (this.width * 0.08), this.pos[1] + (this.height * 0.3)];\n    }\n\n    let startPos = this.bubblePos.slice();\n\n    if (!this.bubbleEmerging) {\n      this.addBubble();\n    }\n    for (let i = 0; i < this.bubbles.length; i++) {\n      this.bubbles[i].draw();\n      this.bubbles[i].animate();\n      if (this.bubbles[i].pos[1] < startPos[1] - 5) {\n        this.bubbleEmerging = false;\n      }\n      if (this.bubbles[i].pos[1] < window.innerHeight * 0.3) {\n        this.bubbles.splice(i, 1);\n      }\n    }\n    this.bubbles.forEach((bubble) => {\n      if (bubble.pos[1] > startPos[1] - 5) {\n        this.bubbleEmerging = true;\n      }\n    })\n\n  }\n\n  addBubble() {\n    let velocities = [\n      [0, 0.6],\n      [-0.1, 0.6],\n      [0.1, 0.6],\n      [0.3, 0.6],\n      [-0.3, 0.6],\n      [-0.2, 0.6],\n      [0.2, 0.6]\n    ]\n    let vel = velocities[Math.floor(Math.random() * velocities.length)]\n    let minRadii = [10, 5, 8, 12, 14]\n    let minRadius = minRadii[Math.floor(Math.random() * minRadii.length)]\n    let maxRadii = [18, 12, 14, 20, 25, 30]\n    let maxRadius = maxRadii[Math.floor(Math.random() * maxRadii.length)]\n    let startPositions = [\n      this.bubblePos,\n      [this.bubblePos[0] + 20, this.bubblePos[1] + 10]\n    ]\n    let startPos = startPositions[Math.floor(Math.random() * startPositions.length)]\n      if (!this.bubbleEmerging && this.bubbleCount < this.maxBubbles) {\n        let bubble1 = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          color: this.color,\n          colorChange: this.colorChange,\n          minRadius: 8,\n          maxRadius: maxRadius,\n          pos: startPositions[0],\n          vel: vel,\n          ctx: this.ctx,\n          increment: this.increment,\n          boundary: this.boundary\n        })\n        this.bubbles.push(bubble1);\n        this.bubbleCount += 1;\n    }\n\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cow);\n\n//# sourceURL=webpack:///./src/cow.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raindrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raindrop */ \"./src/raindrop.js\");\n/* harmony import */ var _evaporation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaporation */ \"./src/evaporation.js\");\n/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun */ \"./src/sun.js\");\n/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloud */ \"./src/cloud.js\");\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _mushroom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mushroom */ \"./src/mushroom.js\");\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ \"./src/factory.js\");\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fish */ \"./src/fish.js\");\n/* harmony import */ var _cow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cow */ \"./src/cow.js\");\n\n\n\n\n\n\n\n\n\n\nclass Ecosystem {\n  constructor(ctx, canvasEl) {\n    this.canvas = canvasEl;\n    this.ctx = ctx;\n    this.screenDimensions = [];\n    this.backgroundTop = 0;\n    this.backgroundHeight = 500;\n    this.backgroundWidth = 500;\n    this.raindrops = [];\n    this.raining = false;\n    this.evaporations = [];\n    this.evaporating = false;\n    this.sun = new _sun__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    this.tree = new _tree__WEBPACK_IMPORTED_MODULE_4__[\"default\"](ctx);\n    this.mushroom = new _mushroom__WEBPACK_IMPORTED_MODULE_5__[\"default\"](ctx);\n    this.factory = new _factory__WEBPACK_IMPORTED_MODULE_6__[\"default\"](ctx);\n    this.factorySmoking = false;\n    this.fish = new _fish__WEBPACK_IMPORTED_MODULE_7__[\"default\"](ctx);\n    this.cow = new _cow__WEBPACK_IMPORTED_MODULE_8__[\"default\"](ctx);\n    this.cowFarting = false;\n    this.clouds = [];\n    this.cloud = new _cloud__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\n    this.count = 0;\n    this.ratio = 0.8;\n    \n    \n    this.elements = [\n      this.sun,\n      this.tree,\n      this.mushroom,\n      this.factory, \n      this.cow,\n      this.fish\n    ];\n\n    this.makeRain = this.makeRain.bind(this)\n\n  }\n\n\n\n  update() {\n    if (this.raining) {\n      this.makeRain();\n      this.stopRainListener();\n    } else {\n      this.makeRainListener();\n    }\n\n    if (this.evaporating) {\n      this.makeEvaporation();\n      this.stopEvaporationListener();\n    } else {\n      this.evaporations = [];\n      this.makeEvaporationListener();\n    }\n\n\n\n    this.clouds.forEach((cloud) => {\n      // cloud.animate();\n    })\n   \n  }\n\n\n  draw() {\n    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    \n    let context = this.ctx;\n    let baseImage = new Image();\n    baseImage.src = '../assets/images/ecosystem-background.png';\n    this.ratio = window.innerWidth / baseImage.width;\n    this.backgroundWidth = baseImage.width * this.ratio;\n    this.backgroundHeight = baseImage.height * this.ratio;\n    this.backgroundTop = window.innerHeight - this.backgroundHeight;\n    // console.log(baseImage.width);\n    context.drawImage(baseImage, 0, this.backgroundTop, this.backgroundWidth, this.backgroundHeight);\n    this.sun.draw();\n    \n    this.addClouds(3);\n    this.clouds.forEach((cloud) => {\n      cloud.draw();\n      // cloud.animate();\n    })\n    this.tree.draw(this.backgroundHeight, this.backgroundTop);\n    this.mushroom.draw(this.backgroundHeight, this.backgroundTop);\n    this.fish.draw(this.backgroundHeight, this.backgroundTop);\n    this.cow.draw(this.backgroundHeight, this.backgroundTop);\n    this.makeCowListener();\n    // this.cow.makeFart();\n    this.factory.draw(this.backgroundHeight, this.backgroundTop);\n    // this.factory.makeSmoke();\n    \n    this.raindrops.forEach((raindrop) => {\n      raindrop.draw();\n      raindrop.fall();\n    })\n    \n\n    //this was my attempt to make the evaporation move when the screen moves. \n    let posY = (this.backgroundHeight * 0.78) + this.backgroundTop;\n    let positions = [\n      [window.innerWidth * 0.7, posY],\n      [window.innerWidth * 0.75, posY],\n      [window.innerWidth * 0.8, posY],\n      [window.innerWidth * 0.85, posY],\n      [window.innerWidth * 0.9, posY]\n    ]\n\n    for (let i = 0; i < this.evaporations.length; i++) {\n      this.evaporations[i].draw(positions[i]);\n      this.evaporations[i].evaporate();\n    }\n\n    // this.ctx.font = '38px sans-serif';\n    // this.ctx.fillStyle = \"white\";\n    // this.ctx.fillText('Evaporation', positions[0][0] + 20, positions[0][1] + 30);\n\n    if (this.factorySmoking) {\n      this.factory.makeSmoke();\n      this.stopFactoryListener();\n    } else {\n      this.factory.bubbles = [];\n      this.factory.bubbleEmerging = false;\n      this.makeFactoryListener();\n    }\n\n    if (this.cowFarting) {\n      this.cow.makeFart();\n      \n      if (this.cow.bubbles.length == 0) {\n          this.cowFarting = false;\n          this.cow.bubbleEmerging = false;\n          this.cow.bubbleCount = 0;\n      }\n    } \n\n  }\n\n  // cow\n\n  makeCowListener() {\n    let that = this;\n    let coordinates;\n    if (this.cow.rect) {\n      coordinates = this.cow.rect;\n    }\n    document.addEventListener('click', function (event) {\n      let x = event.pageX;\n      let y = event.pageY;\n      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {\n        that.cowFarting = true;\n      }\n    })\n  }\n  \n\n  // factory\n\n  makeFactoryListener() {\n \n    let that = this;\n    document.addEventListener('click', function (event) {\n      let coordinates =[\n        that.factory.pos[0],\n        that.factory.pos[1],\n        that.factory.pos[0] + that.factory.width,\n        that.factory.pos[1] + that.factory.height\n      ];\n      let x = event.pageX;\n      let y = event.pageY;\n      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {\n        that.factorySmoking = true;\n        \n      }\n    })\n  }\n\n  stopFactoryListener() {\n    let that = this;\n    document.addEventListener('click', function (event) {\n      let coordinates = [\n        that.factory.pos[0],\n        that.factory.pos[1],\n        that.factory.pos[0] + that.factory.width,\n        that.factory.pos[1] + that.factory.height\n      ];\n      let x = event.pageX;\n      let y = event.pageY;\n      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {\n        that.factorySmoking = false;\n      }\n    })\n  }\n\n\n\n\n   //evaporation\n\n  makeEvaporation() {\n    let posY = (this.backgroundHeight * 0.78) + this.backgroundTop;\n    let positions = [\n      [window.innerWidth * 0.7, posY],\n      [window.innerWidth * 0.75, posY],\n      [window.innerWidth * 0.8, posY],\n      [window.innerWidth * 0.85, posY],\n      [window.innerWidth * 0.9, posY]\n    ]\n\n    if (this.evaporations.length < 5) {\n      for (let i = 0; i < 5; i++) {\n        let squiggle = new _evaporation__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, positions[i]);\n        this.evaporations.push(squiggle);\n      }\n    }\n  }\n\n  makeEvaporationListener() {\n    let rectStart = [window.innerWidth * 0.5,\n      (this.backgroundHeight * 0.74) + this.backgroundTop]\n    let rectEnd = [\n      rectStart[0] + (window.innerWidth * 0.5),\n      rectStart[1] + this.backgroundHeight * 0.1\n    ]\n    let that = this;\n    document.addEventListener('click', function (event) {\n      let x = event.pageX;\n      let y = event.pageY;\n      if (x > rectStart[0] && x < rectEnd[0] && y > rectStart[1] && y < rectEnd[1]) {\n        that.evaporating = true;\n      }\n\n    })\n  }\n\n  stopEvaporationListener() {\n    let rectStart = [window.innerWidth * 0.5,\n    (this.backgroundHeight * 0.74) + this.backgroundTop]\n    let rectEnd = [\n      rectStart[0] + (window.innerWidth * 0.5),\n      rectStart[1] + this.backgroundHeight * 0.1\n    ]\n    let that = this;\n    document.addEventListener('click', function (event) {\n      let x = event.pageX;\n      let y = event.pageY;\n      if (x > rectStart[0] && x < rectEnd[0] && y > rectStart[1] && y < rectEnd[1]) {\n        that.evaporating = false;\n      }\n    })\n  }\n  \n  //rain ***********\n\n  makeRainListener() {\n    let clouds = this.clouds;\n    let that = this;\n    document.addEventListener('click', function (event) {\n      let x = event.pageX;\n      let y = event.pageY;\n      clouds.forEach((cloud) => {\n        let coordinates = cloud.rect;\n        if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {\n          that.raining = true;\n        }\n      })\n    })\n  }\n\n  stopRainListener() {\n    let clouds = this.clouds;\n    let that = this;\n    document.addEventListener('click', function (event) {\n      let x = event.pageX;\n      let y = event.pageY;\n      clouds.forEach((cloud) => {\n        let coordinates = cloud.rect;\n        if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {\n          that.raining = false;\n        }\n      })\n    })\n  }\n\n  addRaindrops() {\n    let numRaindrops = window.innerWidth * 0.08;\n      for (let i = 0; i < numRaindrops; i++) {\n        let newRaindrop = new _raindrop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ \n          ctx: this.ctx, \n          ecosystem: this, \n          backgroundHeight: this.backgroundHeight, backgroundTop: this.backgroundTop })\n        this.raindrops.push(newRaindrop);\n      }\n  }\n\n  makeRain() {\n    this.addRaindrops();\n  }\n\n  removeRaindrop(raindrop) {\n    this.raindrops.splice(this.raindrops.indexOf(raindrop),1);\n  };\n\n//clouds\n  addClouds(numClouds) {\n    if (this.clouds.length < numClouds) {\n      let positions = [\n        [window.innerWidth * 0.25, window.innerHeight * 0.1],\n        [window.innerWidth * 0.55, window.innerHeight * 0.2],\n        [(window.innerWidth * 0.55) + 40, window.innerHeight * 0.2],\n        [window.innerWidth * 0.9, window.innerHeight * 0.15],\n        [window.innerWidth * 0.73, window.innerHeight * 0.22],\n      ]\n\n      for (let i = 0; i < numClouds; i++) {\n        let newCloud = new _cloud__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, positions[i])\n        this.clouds.push(newCloud);\n        this.elements.push(newCloud);\n      }\n    } \n\n  }\n\n\n\n\n\n\n  \n  makeBase() {\n    let context = this.ctx;\n    let baseImage = new Image();\n    baseImage.src = '../assets/images/ecosystem-background.png';\n    baseImage.onload = function () {\n      // console.log(\"test\");\n      context.drawImage(baseImage, -100, -100);\n    }\n  }\n\n  //handle click - when someone clicks cloud, updates \n  // look up vanilla dom click event handler\n  // look up positioning of clicks on canvas\n  //\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ecosystem);\n\n//# sourceURL=webpack:///./src/ecosystem.js?");

/***/ }),

/***/ "./src/evaporation.js":
/*!****************************!*\
  !*** ./src/evaporation.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Evaporation {\n  constructor(ctx, pos) {\n    this.ctx = ctx;\n    this.pos = pos;\n    this.origin = this.pos.slice();\n    this.x1 = this.pos[0];\n    this.x2 = this.pos[0] - 15;\n    this.x3 = this.pos[0] + 15;\n    this.x4 = this.pos[0];\n    this.y1 = this.pos[1];\n    this.squiggleCount = 0.8;\n    this.squiggleCount2 = -0.5;\n\n  }\n\n  draw(pos) {\n    // this.ctx.beginPath();\n    // this.ctx.rect(100, 100, 200, 500);\n    // this.ctx.fillStyle = \"red\";\n    // this.ctx.fill();\n    this.pos = pos;\n\n    let y2 = this.y1 - 40;\n    let y3 = this.y1 - 50;\n    let y4 = this.y1 - 90;\n    let y5 = this.y1 - 120;\n    let y6 = this.y1 - 150;\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.x1, this.y1)\n    this.ctx.bezierCurveTo(this.x2, y2, this.x3, y3, this.x4, y4);\n    // this.ctx.bezierCurveTo(this.x4, y4, this.x2, y5, this.x1, y6);\n    this.ctx.strokeStyle = \"white\";\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.x4, y4 - 10);\n    this.ctx.lineTo(this.x4 + 5, y4);\n    this.ctx.lineTo(this.x4 - 5, y4);\n    this.ctx.fillStyle = \"white\";\n    this.ctx.stroke();\n    this.ctx.fill();\n\n   \n\n  }\n\n  evaporate() {\n    if (this.x3 > this.origin[0] + 20) {\n      this.squiggleCount = 0.8;\n    }\n    if (this.x3 < this.origin[0] - 20) {\n      this.squiggleCount = -0.8;\n    }\n\n\n    // this.x1 -= this.squiggleCount;\n    this.x3 -= this.squiggleCount;\n\n    this.x2 += this.squiggleCount;\n    this.x4 += this.squiggleCount * 0.5;\n    // this.rise();\n   }\n  \n   rise() {\n     this.y1 -= 1;\n   }\n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evaporation);\n\n\n//# sourceURL=webpack:///./src/evaporation.js?");

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n\n\nclass Factory {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/factory2.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n    this.pos = [0,0];\n    this.color = [50, 51, 61];\n    this.colorChange = 0;\n    this.smokeRadius = 15;\n    this.width = 100;\n    this.height = 100;\n    this.increment = 0.4;\n    this.vel = [0, 1];\n    this.smokePos = [];\n    this.bubbleEmerging = false;\n    this.bubbles = [];\n    this.boundary = 20;\n\n    if (this.pos) {\n      this.rect = [this.pos[0], this.pos[1], this.pos[0] + this.width, this.pos[1] + this.height]\n    }\n  }\n\n\n\n  draw(backgroundHeight, backgroundTop) {\n\n    let ratio = window.innerWidth * 0.0005;\n    this.height = this.image.height * ratio;\n    this.width = this.image.width * ratio;\n    let bottom = (backgroundHeight * 0.75) + backgroundTop;\n    let topX = window.innerWidth * 0.02;\n    let topY = bottom - this.height;\n\n    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);\n    this.pos = [topX, topY];\n\n    // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)\n\n  }\n\n  makeSmoke() {\n    \n    if (this.smokePos.length === 0) {\n      this.smokePos = [this.pos[0] + (this.width * 0.6), this.pos[1] + (this.height * 0.25)];\n    }\n\n    let startPos = this.smokePos.slice();\n\n    if (!this.bubbleEmerging) {\n      this.addBubble();\n    }\n    for (let i = 0; i < this.bubbles.length; i++) {\n      this.bubbles[i].draw();\n      this.bubbles[i].animate(); \n      if (this.bubbles[i].pos[1] < startPos[1] - 3) {\n        this.bubbleEmerging = false;\n      } \n      if (this.bubbles[i].pos[1] < -40) {\n        this.bubbles.splice(i, 1);\n      }\n    }\n    this.bubbles.forEach((bubble) => {\n      if (bubble.pos[1] > startPos[1] - 3) {\n        this.bubbleEmerging = true;\n      } \n     \n    })\n  }\n\n  addBubble() {\n    let velocities = [\n      [0,0.8],\n      [-0.1, 0.8],\n      [0.1, 0.8],\n      [0.3,0.8],\n      [-0.3,0.8],\n      [0.4,0.8],\n      [-0.4,0.8],\n      [-0.2, 0.8],\n      [0.2, 0.8]\n    ] \n    let vel = velocities[Math.floor(Math.random() * velocities.length)]\n    let minRadii = [10, 5, 8, 12, 14]\n    let minRadius = minRadii[Math.floor(Math.random() * minRadii.length)]\n    let maxRadii = [22, 25, 28, 30, 32]\n    let maxRadius = maxRadii[Math.floor(Math.random() * maxRadii.length)]\n    let startPositions = [\n      this.smokePos,\n      [this.smokePos[0] + this.width * 0.08, this.smokePos[1] + this.height * 0.06]\n    ]\n    let startPos = startPositions[Math.floor(Math.random() * startPositions.length)]\n\n    if (!this.bubbleEmerging && this.bubbles.length < 50) {\n      let bubble1 = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        color: this.color,\n        minRadius: 8,\n        maxRadius: maxRadius,\n        pos: startPositions[0],\n        vel: vel,\n        ctx: this.ctx,\n        increment: this.increment,\n        boundary: this.boundary\n      })\n      this.bubbles.push(bubble1);\n      let bubble2 = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        color: this.color,\n        colorChange: this.colorChange,\n        minRadius: 5,\n        maxRadius: maxRadius,\n        pos: startPositions[1],\n        vel: vel,\n        ctx: this.ctx,\n        increment: this.increment,\n        boundary: this.boundary\n      })\n      this.bubbles.push(bubble2);\n    }\n  }\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Factory);\n\n//# sourceURL=webpack:///./src/factory.js?");

/***/ }),

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Fish {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/cute-orange-fish.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n    this.pos = [0, 0];\n    if (this.pos) {\n      this.rect = [this.pos[0], this.pos[1], this.pos[0] + this.width, this.pos[1] + this.height]\n    }\n  }\n\n\n  draw(backgroundHeight, backgroundTop) {\n    let ratio = window.innerWidth * 0.00005;\n    // let height = this.image.height * ratio;\n    // let width = this.image.width * ratio;\n\n    // this.ctx.drawImage(this.image, window.innerWidth * 0.7, window.innerHeight * 0.8, width, height);\n\n    this.height = this.image.height * ratio;\n    this.width = this.image.width * ratio;\n    let bottom = (backgroundHeight * 0.95) + backgroundTop;\n    let topX = window.innerWidth * 0.7;\n    let topY = bottom - this.height;\n\n    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);\n    this.pos = [topX, topY];\n\n    // this.ctx.fillStyle = \"rgb(215, 232, 250, 0.4)\";\n    // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)\n  }\n\n\n\n  animate() {\n\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fish);\n\n//# sourceURL=webpack:///./src/fish.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n/* harmony import */ var _ecosystem_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecosystem-view */ \"./src/ecosystem-view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"mycanvas\");\n  // canvasEl.width = 300;\n  // canvasEl.height = 200;\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n\n\n  const ctx = canvasEl.getContext(\"2d\");\n\n  const ecosystem = new _ecosystem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvasEl);\n  new _ecosystem_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, ecosystem).start();\n  // let button = document.getElementById(\"water-cycle\")\n  // button.addEventListener(\"click\", (e) => {\n  //   //call ecosystem function. \n  // })\n\n\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mushroom.js":
/*!*************************!*\
  !*** ./src/mushroom.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Mushroom {\n  constructor(ctx) {\n    this.image = new Image();\n    this.image.src = '../assets/images/mushrooms.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n    this.pos = [0, 0];\n    if (this.pos) {\n      this.rect = [this.pos[0], this.pos[1], this.pos[0] + this.width, this.pos[1] + this.height]\n    }\n  }\n\n\n  draw(backgroundHeight, backgroundTop) {\n\n    let ratio = window.innerWidth * 0.00006;\n\n    this.height = this.image.height * ratio;\n    this.width = this.image.width * ratio;\n    let bottom = (backgroundHeight * 0.74) + backgroundTop;\n    let topX = window.innerWidth * 0.52;\n    let topY = bottom - this.height;\n\n    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);\n    this.pos = [topX, topY];\n\n    // this.ctx.fillStyle = \"rgb(215, 232, 250, 0.4)\";\n    // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)\n\n\n\n\n  }\n\n  animate() {\n    if (this.width > 230) {\n      this.increment = -0.5;\n    }\n    if (this.width < 200) {\n      this.increment = 0.5;\n    }\n    this.width += this.increment;\n    this.height += this.increment;\n    this.pos[0] -= (this.increment / 2);\n    this.pos[1] -= (this.increment / 2);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mushroom);\n\n//# sourceURL=webpack:///./src/mushroom.js?");

/***/ }),

/***/ "./src/raindrop.js":
/*!*************************!*\
  !*** ./src/raindrop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\nclass Raindrop {\n  constructor(options = {}) {\n    this.color = this.generateColor();\n    this.radius = 10;\n    this.pos = this.generatePosition();\n    this.vel = this.generateVelocity();\n    this.ctx = options.ctx;\n    this.fall = this.fall.bind(this);\n    this.ecosystem = options.ecosystem;\n    this.raindropLength = this.generateLength();\n    this.count = 0;\n    this.backgroundHeight = options.backgroundHeight;\n    this.backgroundTop = options.backgroundTop;\n  }\n\n  getRandomNum(min, max) {\n    Math.floor((Math.random() * (max - min) + min))\n  }\n\n  generatePosition() {\n    let xPos = Math.floor((Math.random() * (window.innerWidth)));\n    let yPositions = [-10, -20, -30, -40, -50, -60, -70, -80, -90, -100 ];\n    let yPos = yPositions[Math.floor(Math.random() * yPositions.length)]\n    return [xPos, yPos]\n  }\n\n  generateVelocity() {\n    let velocities = [4, 5, 6];\n    let vel = velocities[Math.floor(Math.random()*velocities.length)]\n    return vel;\n  }\n\n  generateLength() {\n    return this.getRandomNum(10, 20);\n  }\n\n  generateColor() {\n    let colors = [\n      \"rgba(207, 204, 247, 0.86)\", \n      \"rgba(207, 204, 247, 0.96)\", \n      \"rgba(192, 176, 235, 0.66)\"\n      ];\n    let color = colors[Math.floor(Math.random() * colors.length)]\n    return color;\n  }\n\n  generateRadius() {\n    let radius = this.getRandomNum(5, 10);\n    return radius;\n  }\n  \n\n  draw() {\n    let lengths = [10, 13, 17];\n    let length = lengths[Math.floor(Math.random() * lengths.length)]\n    this.raindropLength = length;\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.pos[0], this.pos[1])\n    this.ctx.lineTo(this.pos[0] + 2, (this.pos[1] + length));\n    this.ctx.strokeStyle = this.color;\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n  }\n\n  fall() {\n    let ratios = [0.55, 0.6, 0.69, 0.7, 0.7, 0.7];\n    let ratio = ratios[Math.floor(Math.random() * ratios.length)]\n    if (this.pos[1] > ((this.backgroundHeight * (ratio + 0.1)) + this.backgroundTop)) {\n      this.ecosystem.removeRaindrop(this);\n      this.splash([this.pos[0] + 2, this.pos[1] + this.raindropLength])\n    }\n  \n    this.pos[0] += 0.2;\n    this.pos[1] += this.vel;\n    this.vel = this.vel + 0.1;\n  }\n\n  splash(position) {\n    let lengths = [5, 10, 15];\n    let length = lengths[Math.floor(Math.random() * lengths.length)]\n\n    this.ctx.beginPath();\n    this.ctx.moveTo(position[0] + 1, position[1] - 1);\n    this.ctx.lineTo(position[0] + 2, position[1] - length);\n    this.ctx.strokeStyle = \"rgba(207, 204, 247, 0.897)\";\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n\n    this.ctx.beginPath();\n    this.ctx.moveTo(position[0] - 1, position[1] + 1);\n    this.ctx.lineTo(position[0] - 2, position[1] - length);\n    this.ctx.strokeStyle = \"rgba(207, 204, 247, 0.897)\";\n    this.ctx.lineWidth = 1;\n    this.ctx.stroke();\n  }\n\n\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Raindrop);\n\n//# sourceURL=webpack:///./src/raindrop.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecosystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecosystem */ \"./src/ecosystem.js\");\n\n\n\nclass Tree {\n  constructor(ctx, backgroundHeight, backgroundWidth) {\n    this.image = new Image();\n    this.image.src = '../assets/images/deciduous-tree.png';\n    this.ctx = ctx;\n    this.ratio = window.innerWidth * 0.00005;\n    this.width = this.image.width * this.ratio;\n    this.height = this.image.height * this.ratio;\n  }\n\n\n  draw(backgroundHeight, backgroundTop) {\n\n    let ratio = window.innerWidth * 0.00006;\n    let height = this.image.height * ratio;\n    let width = this.image.width * ratio;\n    let bottom = (backgroundHeight * 0.74) + backgroundTop;\n    let top = bottom - height;\n\n    this.ctx.drawImage(this.image, window.innerWidth * 0.4, top, width, height);\n\n\n\n//figuring out where to draw evaporation station\n   \n  }\n\n  animate() {\n    if (this.width > 230) {\n      this.increment = -0.5;\n    }\n    if (this.width < 200) {\n      this.increment = 0.5;\n    }\n    this.width += this.increment;\n    this.height += this.increment;\n    this.pos[0] -= (this.increment / 2);\n    this.pos[1] -= (this.increment / 2);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tree);\n\n//# sourceURL=webpack:///./src/tree.js?");

/***/ })

/******/ });
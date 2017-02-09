(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-material"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-material"], factory);
	else if(typeof exports === 'object')
		exports["mdCollectionPagination"] = factory(require("angular"), require("angular-material"));
	else
		root["mdCollectionPagination"] = factory(root["angular"], root["angular-material"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _template = __webpack_require__(4);

var _template2 = _interopRequireDefault(_template);

var _controller = __webpack_require__(3);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _template2.default,
  controller: _controller2.default,
  controllerAs: 'vm',
  bindings: {
    collection: '<',
    paginatedCollection: '=',
    perPage: '<',
    navigationLength: '<'
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollectionPaginationController = function () {
  function CollectionPaginationController() {
    _classCallCheck(this, CollectionPaginationController);
  }

  _createClass(CollectionPaginationController, [{
    key: "$onChanges",
    value: function $onChanges() {
      this.perPage = this.perPage || 5;
      this.shownIndexesCount = this.navigationLength || 5;
      this.lastIndex = Math.ceil(this.collection.length / this.perPage) - 1;
      this.allIndexes = [];
      for (var i = 0; i <= this.lastIndex; this.allIndexes.push(i++)) {}
      this.beginning();
    }
  }, {
    key: "beginning",
    value: function beginning() {
      this.selectedIndex = 0;
      this.indexesOffset = 0;
      this.update();
    }
  }, {
    key: "end",
    value: function end() {
      this.selectedIndex = this.lastIndex;
      while (this.indexesOffset + this.shownIndexesCount <= this.lastIndex) {
        this.indexesOffset += this.shownIndexesCount;
      }this.update();
    }
  }, {
    key: "select",
    value: function select(index) {
      this.selectedIndex = index;
      this.update();
    }
  }, {
    key: "previousIndexes",
    value: function previousIndexes() {
      this.selectedIndex = this.indexesOffset - 1;
      this.indexesOffset -= this.shownIndexesCount;
      this.update();
    }
  }, {
    key: "nextIndexes",
    value: function nextIndexes() {
      this.indexesOffset += this.shownIndexesCount;
      this.selectedIndex = this.indexesOffset;
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var offset = this.selectedIndex * this.perPage;
      this.paginatedCollection = this.collection.slice(offset, offset + this.perPage);
    }
  }]);

  return CollectionPaginationController;
}();

exports.default = CollectionPaginationController;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<section layout=\"row\" layout-align=\"center center\" layout-wrap ng-show=\"vm.allIndexes.length > 1\">\n  <md-button class=\"md-icon-button md-raised md-primary\" ng-click=\"vm.beginning()\">\n    <<\n  </md-button>\n  <md-button class=\"md-icon-button md-raised\" ng-click=\"vm.previousIndexes()\" ng-hide=\"vm.indexesOffset === 0\">\n    ...\n  </md-button>\n  <md-button class=\"md-icon-button md-raised\" ng-class=\"{ 'md-accent': index === vm.selectedIndex }\"\n             ng-click=\"vm.select(index)\" ng-repeat=\"index in vm.allIndexes | limitTo : vm.shownIndexesCount : vm.indexesOffset\">\n    {{ index + 1 }}\n  </md-button>\n  <md-button class=\"md-icon-button md-raised\" ng-click=\"vm.nextIndexes()\"\n             ng-show=\"vm.indexesOffset + vm.shownIndexesCount <= vm.lastIndex\">\n    ...\n  </md-button>\n  <md-button class=\"md-icon-button md-raised md-primary\" ng-click=\"vm.end()\">\n    >>\n  </md-button>\n</section>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

__webpack_require__(2);

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('mdCollectionPagination', ['ng', 'ngMaterial']).component('mdCollectionPagination', _component2.default).name;

/***/ })
/******/ ]);
});
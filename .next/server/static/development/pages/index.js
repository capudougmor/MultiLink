module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Links.jsx":
/*!******************************!*\
  !*** ./components/Links.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Projetos Node\\00React\\MultLink\\components\\Links.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import logo from "https://i.ibb.co/PFs4jPc/curriculum-Img.png"

const Links = ({
  href,
  imgUrl,
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: imgUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ }),

/***/ "./database/api.js":
/*!*************************!*\
  !*** ./database/api.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  title: "Curriculum",
  link: "https://capudougmor.github.io/",
  imgUrl: "https://i.ibb.co/PFs4jPc/curriculum-Img.png"
}, {
  title: "PalpiteBox",
  link: "https://palpite-box-silk.vercel.app/",
  imgUrl: "https://i.ibb.co/zH6jXfv/Palpite-Box-Img.png"
}, {
  title: "Proffy",
  link: "https://next-level-week2-sandy.vercel.app/",
  imgUrl: "https://raw.githubusercontent.com/capudougmor/NextLevelWeek2/master/.github/layout.png"
}, {
  title: "Be The Hero",
  link: "https://omnistack.vercel.app/",
  imgUrl: "https://i.ibb.co/NnM27dL/Be-The-Hero-Img.png"
}, {
  title: "Ecoleta",
  link: "https://github.com/capudougmor/NSW",
  imgUrl: "https://i.ibb.co/HBpBNZz/41.png"
}, {
  title: "Notas fácil",
  link: "https://github.com/capudougmor/CRUDNotasComNode",
  imgUrl: "https://i.ibb.co/G3mGY1c/Nota-Facil.gif"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Links */ "./components/Links.jsx");
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/api */ "./database/api.js");
var _jsxFileName = "D:\\Projetos Node\\00React\\MultLink\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  const items = _database_api__WEBPACK_IMPORTED_MODULE_2__["default"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "img",
    src: "https://avatars0.githubusercontent.com/u/60409911?s=400&u=8fdd6fe687515b06f34e33f6a4811e82d1f31712&v=4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Douglas Mendes Assun\xE7\xE3o")), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, items.map(item => {
    return __jsx("div", {
      className: "card",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "box",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx(_components_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: item.link,
      imgUrl: item.imgUrl,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 65
      }
    }, item.title))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projetos Node\00React\MultLink\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaW5rcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvYXBpLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkxpbmtzIiwiaHJlZiIsImltZ1VybCIsImNoaWxkcmVuIiwibGlua3MiLCJ0aXRsZSIsImxpbmsiLCJJbmRleCIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ3RGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBRTtBQUFDQyxNQUFEO0FBQU9DLFFBQVA7QUFBZUM7QUFBZixDQUFGLEtBQWdDO0FBQzVDLFNBQ0UsbUVBQ0U7QUFBRyxRQUFJLEVBQUVGLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFQyxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVJQyxRQUZKLENBREYsQ0FERjtBQVFELENBVEQ7O0FBV2VILG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUEsTUFBTUksS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFLFlBRFQ7QUFFRUMsTUFBSSxFQUFFLGdDQUZSO0FBR0VKLFFBQU0sRUFBRTtBQUhWLENBRFksRUFPWjtBQUNFRyxPQUFLLEVBQUUsWUFEVDtBQUVFQyxNQUFJLEVBQUUsc0NBRlI7QUFHRUosUUFBTSxFQUFFO0FBSFYsQ0FQWSxFQWFaO0FBQ0VHLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRSw0Q0FGUjtBQUdFSixRQUFNLEVBQUU7QUFIVixDQWJZLEVBbUJaO0FBQ0VHLE9BQUssRUFBRSxhQURUO0FBRUVDLE1BQUksRUFBRSwrQkFGUjtBQUdFSixRQUFNLEVBQUU7QUFIVixDQW5CWSxFQXlCWjtBQUNFRyxPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsb0NBRlI7QUFHRUosUUFBTSxFQUFFO0FBSFYsQ0F6QlksRUErQlo7QUFDRUcsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLGlEQUZSO0FBR0VKLFFBQU0sRUFBRTtBQUhWLENBL0JZLENBQWQ7QUEwQ2VFLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFFQTtBQUNBOztBQUdBLE1BQU1HLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU1DLEtBQUssR0FBR0MscURBQWQ7QUFFQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyx3R0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUpGLENBREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRCxLQUFLLENBQUNFLEdBQU4sQ0FBVUMsSUFBSSxJQUFJO0FBQ2xCLFdBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRDtBQUFPLFVBQUksRUFBRUEsSUFBSSxDQUFDTCxJQUFsQjtBQUF3QixZQUFNLEVBQUVLLElBQUksQ0FBQ1QsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtTLElBQUksQ0FBQ04sS0FBVixDQUE5QyxDQURGLENBREYsQ0FERjtBQU9ELEdBUkMsQ0FESixDQURGLENBUkYsQ0FERjtBQXlCRCxDQTVCRDs7QUE4QmVFLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vIGltcG9ydCBsb2dvIGZyb20gXCJodHRwczovL2kuaWJiLmNvL1BGczRqUGMvY3VycmljdWx1bS1JbWcucG5nXCJcclxuXHJcbmNvbnN0IExpbmtzID0gKCB7aHJlZiwgaW1nVXJsLCBjaGlsZHJlbn0gKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWdVcmx9IC8+ICAgICAgXHJcbiAgICAgICAgeyBjaGlsZHJlbiB9IFxyXG4gICAgICA8L2E+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtzIiwiXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkN1cnJpY3VsdW1cIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jYXB1ZG91Z21vci5naXRodWIuaW8vXCIsXHJcbiAgICBpbWdVcmw6IFwiaHR0cHM6Ly9pLmliYi5jby9QRnM0alBjL2N1cnJpY3VsdW0tSW1nLnBuZ1wiXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB0aXRsZTogXCJQYWxwaXRlQm94XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGFscGl0ZS1ib3gtc2lsay52ZXJjZWwuYXBwL1wiLFxyXG4gICAgaW1nVXJsOiBcImh0dHBzOi8vaS5pYmIuY28vekg2alhmdi9QYWxwaXRlLUJveC1JbWcucG5nXCJcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlByb2ZmeVwiLFxyXG4gICAgbGluazogXCJodHRwczovL25leHQtbGV2ZWwtd2VlazItc2FuZHkudmVyY2VsLmFwcC9cIixcclxuICAgIGltZ1VybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2FwdWRvdWdtb3IvTmV4dExldmVsV2VlazIvbWFzdGVyLy5naXRodWIvbGF5b3V0LnBuZ1wiXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB0aXRsZTogXCJCZSBUaGUgSGVyb1wiLFxyXG4gICAgbGluazogXCJodHRwczovL29tbmlzdGFjay52ZXJjZWwuYXBwL1wiLFxyXG4gICAgaW1nVXJsOiBcImh0dHBzOi8vaS5pYmIuY28vTm5NMjdkTC9CZS1UaGUtSGVyby1JbWcucG5nXCJcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkVjb2xldGFcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NhcHVkb3VnbW9yL05TV1wiLFxyXG4gICAgaW1nVXJsOiBcImh0dHBzOi8vaS5pYmIuY28vSEJwQk5aei80MS5wbmdcIlxyXG4gIH0sXHJcbiAgXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTm90YXMgZsOhY2lsXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXB1ZG91Z21vci9DUlVETm90YXNDb21Ob2RlXCIsXHJcbiAgICBpbWdVcmw6IFwiaHR0cHM6Ly9pLmliYi5jby9HM21HWTFjL05vdGEtRmFjaWwuZ2lmXCJcclxuICB9LFxyXG5cclxuXHJcbiAgXHJcbiAgXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpbmtzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtzJ1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhYmFzZS9hcGknXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWcnIHNyYz1cImh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjA0MDk5MTE/cz00MDAmdT04ZmRkNmZlNjg3NTE1YjA2ZjM0ZTMzZjZhNDgxMWU4MmQxZjMxNzEyJnY9NFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+RG91Z2xhcyBNZW5kZXMgQXNzdW7Dp8OjbzwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7IGl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94JyA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rcyBocmVmPXtpdGVtLmxpbmt9IGltZ1VybD17aXRlbS5pbWdVcmx9ID48bGk+e2l0ZW0udGl0bGV9PC9saT48L0xpbmtzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIFxyXG4gICAgPC8+XHJcbiAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXggICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
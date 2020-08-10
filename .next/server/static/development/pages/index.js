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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: imgUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("a", {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, children, " "));
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
    src: "https://i.ibb.co/0ZRTMVW/Image.png",
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
    return __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx(_components_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: item.link,
      imgUrl: item.imgUrl,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 19
      }
    }, item.title));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaW5rcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvYXBpLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkxpbmtzIiwiaHJlZiIsImltZ1VybCIsImNoaWxkcmVuIiwibGlua3MiLCJ0aXRsZSIsImxpbmsiLCJJbmRleCIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ3RGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBRTtBQUFDQyxNQUFEO0FBQU9DLFFBQVA7QUFBZUM7QUFBZixDQUFGLEtBQWdDO0FBQzVDLFNBQ0UsbUVBQ0U7QUFBSyxPQUFHLEVBQUVELE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxRQUFJLEVBQUVELElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQkUsUUFBbkIsTUFGRixDQURGO0FBTUQsQ0FQRDs7QUFTZUgsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQSxNQUFNSSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxPQUFLLEVBQUUsWUFEVDtBQUVFQyxNQUFJLEVBQUUsZ0NBRlI7QUFHRUosUUFBTSxFQUFFO0FBSFYsQ0FEWSxFQU9aO0FBQ0VHLE9BQUssRUFBRSxZQURUO0FBRUVDLE1BQUksRUFBRSxzQ0FGUjtBQUdFSixRQUFNLEVBQUU7QUFIVixDQVBZLEVBYVo7QUFDRUcsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsTUFBSSxFQUFFLDRDQUZSO0FBR0VKLFFBQU0sRUFBRTtBQUhWLENBYlksRUFtQlo7QUFDRUcsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLCtCQUZSO0FBR0VKLFFBQU0sRUFBRTtBQUhWLENBbkJZLEVBeUJaO0FBQ0VHLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxvQ0FGUjtBQUdFSixRQUFNLEVBQUU7QUFIVixDQXpCWSxFQStCWjtBQUNFRyxPQUFLLEVBQUUsYUFEVDtBQUVFQyxNQUFJLEVBQUUsaURBRlI7QUFHRUosUUFBTSxFQUFFO0FBSFYsQ0EvQlksQ0FBZDtBQTBDZUUsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUVBO0FBQ0E7O0FBR0EsTUFBTUcsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUMsS0FBSyxHQUFHQyxxREFBZDtBQUVBLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLG9DQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBSkYsQ0FERixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lELEtBQUssQ0FBQ0UsR0FBTixDQUFVQyxJQUFJLElBQUk7QUFDbEIsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUksTUFBQyx5REFBRDtBQUFPLFVBQUksRUFBRUEsSUFBSSxDQUFDTCxJQUFsQjtBQUF3QixZQUFNLEVBQUVLLElBQUksQ0FBQ1QsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQ1MsSUFBSSxDQUFDTixLQUFwRCxDQUFKLENBREY7QUFJRCxHQUxDLENBREosQ0FERixDQVJGLENBREY7QUFzQkQsQ0F6QkQ7O0FBMkJlRSxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vLyBpbXBvcnQgbG9nbyBmcm9tIFwiaHR0cHM6Ly9pLmliYi5jby9QRnM0alBjL2N1cnJpY3VsdW0tSW1nLnBuZ1wiXHJcblxyXG5jb25zdCBMaW5rcyA9ICgge2hyZWYsIGltZ1VybCwgY2hpbGRyZW59ICkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW1nIHNyYz17aW1nVXJsfSAvPiAgICAgIFxyXG4gICAgICA8YSBocmVmPXtocmVmfSAgPnsgY2hpbGRyZW4gfSA8L2E+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtzIiwiXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkN1cnJpY3VsdW1cIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jYXB1ZG91Z21vci5naXRodWIuaW8vXCIsXHJcbiAgICBpbWdVcmw6IFwiaHR0cHM6Ly9pLmliYi5jby9QRnM0alBjL2N1cnJpY3VsdW0tSW1nLnBuZ1wiXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB0aXRsZTogXCJQYWxwaXRlQm94XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGFscGl0ZS1ib3gtc2lsay52ZXJjZWwuYXBwL1wiLFxyXG4gICAgaW1nVXJsOiBcImh0dHBzOi8vaS5pYmIuY28vekg2alhmdi9QYWxwaXRlLUJveC1JbWcucG5nXCJcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlByb2ZmeVwiLFxyXG4gICAgbGluazogXCJodHRwczovL25leHQtbGV2ZWwtd2VlazItc2FuZHkudmVyY2VsLmFwcC9cIixcclxuICAgIGltZ1VybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2FwdWRvdWdtb3IvTmV4dExldmVsV2VlazIvbWFzdGVyLy5naXRodWIvbGF5b3V0LnBuZ1wiXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB0aXRsZTogXCJCZSBUaGUgSGVyb1wiLFxyXG4gICAgbGluazogXCJodHRwczovL29tbmlzdGFjay52ZXJjZWwuYXBwL1wiLFxyXG4gICAgaW1nVXJsOiBcImh0dHBzOi8vaS5pYmIuY28vTm5NMjdkTC9CZS1UaGUtSGVyby1JbWcucG5nXCJcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkVjb2xldGFcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NhcHVkb3VnbW9yL05TV1wiLFxyXG4gICAgaW1nVXJsOiBcImh0dHBzOi8vaS5pYmIuY28vSEJwQk5aei80MS5wbmdcIlxyXG4gIH0sXHJcbiAgXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTm90YXMgZsOhY2lsXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXB1ZG91Z21vci9DUlVETm90YXNDb21Ob2RlXCIsXHJcbiAgICBpbWdVcmw6IFwiaHR0cHM6Ly9pLmliYi5jby9HM21HWTFjL05vdGEtRmFjaWwuZ2lmXCJcclxuICB9LFxyXG5cclxuXHJcbiAgXHJcbiAgXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpbmtzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtzJ1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhYmFzZS9hcGknXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWcnIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vMFpSVE1WVy9JbWFnZS5wbmdcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxPkRvdWdsYXMgTWVuZGVzIEFzc3Vuw6fDo288L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgeyBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpPjxMaW5rcyBocmVmPXtpdGVtLmxpbmt9IGltZ1VybD17aXRlbS5pbWdVcmx9ID57aXRlbS50aXRsZX08L0xpbmtzPjwvbGk+XHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIFxyXG4gICAgPC8+XHJcbiAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXggICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
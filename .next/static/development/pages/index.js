(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Links.jsx":
/*!******************************!*\
  !*** ./components/Links.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\Projetos Node\\00React\\MultLink\\components\\Links.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Links = function Links(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, children));
};

_c = Links;
/* harmony default export */ __webpack_exports__["default"] = (Links);

var _c;

$RefreshReg$(_c, "Links");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./database/api.js":
/*!*************************!*\
  !*** ./database/api.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var links = [{
  title: "GitHub",
  link: "https://github.com/capudougmor"
}, {
  title: "Linkedin",
  link: "https://www.linkedin.com/in/douglasmendesassuncao"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5CProjetos%20Node%5C00React%5CMultLink%5Cpages%5Cindex.jsx!./":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5CProjetos%20Node%5C00React%5CMultLink%5Cpages%5Cindex.jsx ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Links */ "./components/Links.jsx");
/* harmony import */ var _database_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/api */ "./database/api.js");
var _this = undefined,
    _jsxFileName = "D:\\Projetos Node\\00React\\MultLink\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import avatar from '../assets/garota.png'

var Index = function Index() {
  var items = _database_api__WEBPACK_IMPORTED_MODULE_2__["default"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "img",
    src: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2016/05/c6904b9a52796f1c0353a3306e16b16e.jpg.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "dev"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, items.map(function (item) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(_components_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: item.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, item.title));
  })));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 1:
/*!********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=D%3A%5CProjetos%20Node%5C00React%5CMultLink%5Cpages%5Cindex.jsx ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=D%3A%5CProjetos%20Node%5C00React%5CMultLink%5Cpages%5Cindex.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5CProjetos%20Node%5C00React%5CMultLink%5Cpages%5Cindex.jsx!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmtzLmpzeCIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbIkxpbmtzIiwiaHJlZiIsImNoaWxkcmVuIiwibGlua3MiLCJ0aXRsZSIsImxpbmsiLCJJbmRleCIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3BDLFNBQ0UsbUVBQ0U7QUFBRyxRQUFJLEVBQUVELElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQkMsUUFBbkIsQ0FERixDQURGO0FBS0QsQ0FORDs7S0FBTUYsSztBQVFTQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUEsa0RBQU1HLEtBQUssR0FBRyxDQUNaO0FBQ0VDLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRFksRUFNWjtBQUNFRCxPQUFLLEVBQUUsVUFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQU5ZLENBQWQ7QUFZZUYsb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBd0Q7QUFDL0U7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsZ0s7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7Q0FFQTs7QUFHQSxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLE1BQU1DLEtBQUssR0FBR0MscURBQWQ7QUFFQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLDJIQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO0FBQ2xCLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMseURBQUQ7QUFBTyxVQUFJLEVBQUVBLElBQUksQ0FBQ0wsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQkssSUFBSSxDQUFDTixLQUEvQixDQUFKLENBREY7QUFJRCxHQUxDLENBREosQ0FMRixDQURGO0FBZ0JELENBbkJEOztLQUFNRSxLO0FBcUJTQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBMaW5rcyA9ICgge2hyZWYsIGNoaWxkcmVufSApID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgaHJlZj17aHJlZn0gID57IGNoaWxkcmVuIH08L2E+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtzIiwiXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdpdEh1YlwiLFxyXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vY2FwdWRvdWdtb3JcIlxyXG4gIH0sXHJcbiAgXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGlua2VkaW5cIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RvdWdsYXNtZW5kZXNhc3N1bmNhb1wiXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaW5rcyIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRDpcXFxcUHJvamV0b3MgTm9kZVxcXFwwMFJlYWN0XFxcXE11bHRMaW5rXFxcXHBhZ2VzXFxcXGluZGV4LmpzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtzJ1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhYmFzZS9hcGknXHJcbi8vIGltcG9ydCBhdmF0YXIgZnJvbSAnLi4vYXNzZXRzL2dhcm90YS5wbmcnXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZycgc3JjPVwiaHR0cHM6Ly9rYW50by5sZWdpYW9kb3NoZXJvaXMuY29tLmJyL3c3NjAtaDM5OC1jZmlsbC93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNS9jNjkwNGI5YTUyNzk2ZjFjMDM1M2EzMzA2ZTE2YjE2ZS5qcGcuanBlZ1wiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMT5kZXY8L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgeyBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGk+PExpbmtzIGhyZWY9e2l0ZW0ubGlua30gPntpdGVtLnRpdGxlfTwvTGlua3M+PC9saT5cclxuXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=
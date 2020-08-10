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
 // import logo from "https://i.ibb.co/PFs4jPc/curriculum-Img.png"

var Links = function Links(_ref) {
  var href = _ref.href,
      imgUrl = _ref.imgUrl,
      children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: imgUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("a", {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, children, " "));
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




var Index = function Index() {
  var items = _database_api__WEBPACK_IMPORTED_MODULE_2__["default"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "img",
    src: "https://i.ibb.co/0ZRTMVW/Image.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Douglas Mendes Assun\xE7\xE3o")), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, items.map(function (item) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx(_components_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: item.link,
      imgUrl: item.imgUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 19
      }
    }, item.title));
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmtzLmpzeCIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbIkxpbmtzIiwiaHJlZiIsImltZ1VybCIsImNoaWxkcmVuIiwibGlua3MiLCJ0aXRsZSIsImxpbmsiLCJJbmRleCIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZ0M7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM1QyxTQUNFLG1FQUNFO0FBQUssT0FBRyxFQUFFRCxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsUUFBSSxFQUFFRCxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJFLFFBQW5CLE1BRkYsQ0FERjtBQU1ELENBUEQ7O0tBQU1ILEs7QUFTU0Esb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBLGtEQUFNSSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxPQUFLLEVBQUUsWUFEVDtBQUVFQyxNQUFJLEVBQUUsZ0NBRlI7QUFHRUosUUFBTSxFQUFFO0FBSFYsQ0FEWSxFQU9aO0FBQ0VHLE9BQUssRUFBRSxZQURUO0FBRUVDLE1BQUksRUFBRSxzQ0FGUjtBQUdFSixRQUFNLEVBQUU7QUFIVixDQVBZLEVBYVo7QUFDRUcsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsTUFBSSxFQUFFLDRDQUZSO0FBR0VKLFFBQU0sRUFBRTtBQUhWLENBYlksRUFtQlo7QUFDRUcsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLCtCQUZSO0FBR0VKLFFBQU0sRUFBRTtBQUhWLENBbkJZLEVBeUJaO0FBQ0VHLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxvQ0FGUjtBQUdFSixRQUFNLEVBQUU7QUFIVixDQXpCWSxFQStCWjtBQUNFRyxPQUFLLEVBQUUsYUFEVDtBQUVFQyxNQUFJLEVBQUUsaURBRlI7QUFHRUosUUFBTSxFQUFFO0FBSFYsQ0EvQlksQ0FBZDtBQTBDZUUsb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQXdEO0FBQy9FO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLGdLOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixNQUFNQyxLQUFLLEdBQUdDLHFEQUFkO0FBRUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUMsb0NBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FKRixDQURGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO0FBQ2xCLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMseURBQUQ7QUFBTyxVQUFJLEVBQUVBLElBQUksQ0FBQ0wsSUFBbEI7QUFBd0IsWUFBTSxFQUFFSyxJQUFJLENBQUNULE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0NTLElBQUksQ0FBQ04sS0FBcEQsQ0FBSixDQURGO0FBSUQsR0FMQyxDQURKLENBREYsQ0FSRixDQURGO0FBc0JELENBekJEOztLQUFNRSxLO0FBMkJTQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vIGltcG9ydCBsb2dvIGZyb20gXCJodHRwczovL2kuaWJiLmNvL1BGczRqUGMvY3VycmljdWx1bS1JbWcucG5nXCJcclxuXHJcbmNvbnN0IExpbmtzID0gKCB7aHJlZiwgaW1nVXJsLCBjaGlsZHJlbn0gKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWdVcmx9IC8+ICAgICAgXHJcbiAgICAgIDxhIGhyZWY9e2hyZWZ9ICA+eyBjaGlsZHJlbiB9IDwvYT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua3MiLCJcclxuY29uc3QgbGlua3MgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ3VycmljdWx1bVwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NhcHVkb3VnbW9yLmdpdGh1Yi5pby9cIixcclxuICAgIGltZ1VybDogXCJodHRwczovL2kuaWJiLmNvL1BGczRqUGMvY3VycmljdWx1bS1JbWcucG5nXCJcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBhbHBpdGVCb3hcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wYWxwaXRlLWJveC1zaWxrLnZlcmNlbC5hcHAvXCIsXHJcbiAgICBpbWdVcmw6IFwiaHR0cHM6Ly9pLmliYi5jby96SDZqWGZ2L1BhbHBpdGUtQm94LUltZy5wbmdcIlxyXG4gIH0sXHJcbiAgXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUHJvZmZ5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vbmV4dC1sZXZlbC13ZWVrMi1zYW5keS52ZXJjZWwuYXBwL1wiLFxyXG4gICAgaW1nVXJsOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jYXB1ZG91Z21vci9OZXh0TGV2ZWxXZWVrMi9tYXN0ZXIvLmdpdGh1Yi9sYXlvdXQucG5nXCJcclxuICB9LFxyXG4gIFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJlIFRoZSBIZXJvXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vb21uaXN0YWNrLnZlcmNlbC5hcHAvXCIsXHJcbiAgICBpbWdVcmw6IFwiaHR0cHM6Ly9pLmliYi5jby9Obk0yN2RML0JlLVRoZS1IZXJvLUltZy5wbmdcIlxyXG4gIH0sXHJcbiAgXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRWNvbGV0YVwiLFxyXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vY2FwdWRvdWdtb3IvTlNXXCIsXHJcbiAgICBpbWdVcmw6IFwiaHR0cHM6Ly9pLmliYi5jby9IQnBCTlp6LzQxLnBuZ1wiXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB0aXRsZTogXCJOb3RhcyBmw6FjaWxcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NhcHVkb3VnbW9yL0NSVUROb3Rhc0NvbU5vZGVcIixcclxuICAgIGltZ1VybDogXCJodHRwczovL2kuaWJiLmNvL0czbUdZMWMvTm90YS1GYWNpbC5naWZcIlxyXG4gIH0sXHJcblxyXG5cclxuICBcclxuICBcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlua3MiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkQ6XFxcXFByb2pldG9zIE5vZGVcXFxcMDBSZWFjdFxcXFxNdWx0TGlua1xcXFxwYWdlc1xcXFxpbmRleC5qc3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rcydcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YWJhc2UvYXBpJ1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1nJyBzcmM9XCJodHRwczovL2kuaWJiLmNvLzBaUlRNVlcvSW1hZ2UucG5nXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMT5Eb3VnbGFzIE1lbmRlcyBBc3N1bsOnw6NvPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHsgaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaT48TGlua3MgaHJlZj17aXRlbS5saW5rfSBpbWdVcmw9e2l0ZW0uaW1nVXJsfSA+e2l0ZW0udGl0bGV9PC9MaW5rcz48L2xpPlxyXG5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4ICAiLCJtb2R1bGUuZXhwb3J0cyA9IGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NTsiXSwic291cmNlUm9vdCI6IiJ9
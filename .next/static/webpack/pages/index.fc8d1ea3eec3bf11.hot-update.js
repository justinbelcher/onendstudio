"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useDeviceSize.ts":
/*!************************************!*\
  !*** ./src/hooks/useDeviceSize.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar LARGE_THRESHOLD = 400;\nvar useIsLarge = function() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        width: undefined,\n        height: undefined\n    }), windowSize = ref[0], setWindowSize = ref[1];\n    var handleResize = function() {\n        setWindowSize({\n            width: window.innerWidth,\n            height: window.innerHeight\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (true) {\n            handleResize();\n            window.addEventListener(\"resize\", handleResize);\n            return function() {\n                return window.removeEventListener(\"resize\", handleResize);\n            };\n        }\n    }, []);\n    return windowSize.width > LARGE_THRESHOLD;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useIsLarge);\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRGV2aWNlU2l6ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBNEM7QUFPNUMsSUFBTUUsZUFBZSxHQUFHLEdBQUc7QUFFM0IsSUFBTUMsVUFBVSxHQUFHLFdBQWU7SUFDaEMsSUFBb0NILEdBR2xDLEdBSGtDQSwrQ0FBUSxDQUFPO1FBQ2pESSxLQUFLLEVBQUVDLFNBQVM7UUFDaEJDLE1BQU0sRUFBRUQsU0FBUztLQUNsQixDQUFDLEVBSEtFLFVBQVUsR0FBbUJQLEdBR2xDLEdBSGUsRUFBRVEsYUFBYSxHQUFJUixHQUdsQyxHQUg4QjtJQUtoQyxJQUFNUyxZQUFZLEdBQUcsV0FBTTtRQUN6QkQsYUFBYSxDQUFDO1lBQ1pKLEtBQUssRUFBRU0sTUFBTSxDQUFDQyxVQUFVO1lBQ3hCTCxNQUFNLEVBQUVJLE1BQU0sQ0FBQ0UsV0FBVztTQUMzQixDQUFDLENBQUM7S0FDSjtJQUVEWCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLElBQTZCLEVBQUU7WUFDakNRLFlBQVksRUFBRSxDQUFDO1lBQ2ZDLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFSixZQUFZLENBQUMsQ0FBQztZQUNoRCxPQUFPO3VCQUFNQyxNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO2FBQUEsQ0FBQztTQUNqRTtLQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPRixVQUFVLENBQUNILEtBQUssR0FBR0YsZUFBZSxDQUFDO0NBQzNDO0FBRUQsK0RBQWVDLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlRGV2aWNlU2l6ZS50cz84Njk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBTaXplIHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMQVJHRV9USFJFU0hPTEQgPSA0MDA7XHJcblxyXG5jb25zdCB1c2VJc0xhcmdlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlPFNpemU+KHtcclxuICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93U2l6ZSh7XHJcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHdpbmRvd1NpemUud2lkdGggPiBMQVJHRV9USFJFU0hPTEQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJc0xhcmdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMQVJHRV9USFJFU0hPTEQiLCJ1c2VJc0xhcmdlIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useDeviceSize.ts\n"));

/***/ })

});
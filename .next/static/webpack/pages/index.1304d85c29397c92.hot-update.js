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

/***/ "./src/hooks/useIsLargescreen.ts":
/*!***************************************!*\
  !*** ./src/hooks/useIsLargescreen.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useIsLargescreen = function() {\n    var hasWindow = \"object\" !== \"undefined\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        width: undefined,\n        height: undefined\n    }), windowSize = ref[0], setWindowSize = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var handleResize = function handleResize() {\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        };\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return function() {\n            return window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        hasWindow\n    ]);\n    return windowSize.width > 400;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useIsLargescreen);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlSXNMYXJnZXNjcmVlbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBNEM7QUFPNUMsSUFBTUUsZ0JBQWdCLEdBQUcsV0FBZTtJQUN0QyxJQUFNQyxTQUFTLEdBQUcsUUFBYSxLQUFLLFdBQVc7SUFFL0MsSUFBb0NILEdBR2xDLEdBSGtDQSwrQ0FBUSxDQUFPO1FBQ2pESSxLQUFLLEVBQUVDLFNBQVM7UUFDaEJDLE1BQU0sRUFBRUQsU0FBUztLQUNsQixDQUFDLEVBSEtFLFVBQVUsR0FBbUJQLEdBR2xDLEdBSGUsRUFBRVEsYUFBYSxHQUFJUixHQUdsQyxHQUg4QjtJQUtoQ0MsZ0RBQVMsQ0FBQyxXQUFNO1lBQ0xRLFlBQVksR0FBckIsU0FBU0EsWUFBWSxHQUFHO1lBQ3RCRCxhQUFhLENBQUM7Z0JBQ1pKLEtBQUssRUFBRU0sTUFBTSxDQUFDQyxVQUFVO2dCQUN4QkwsTUFBTSxFQUFFSSxNQUFNLENBQUNFLFdBQVc7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7UUFDREYsTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQyxDQUFDO1FBRWhEQSxZQUFZLEVBQUUsQ0FBQztRQUNmLE9BQU87bUJBQU1DLE1BQU0sQ0FBQ0ksbUJBQW1CLENBQUMsUUFBUSxFQUFFTCxZQUFZLENBQUM7U0FBQSxDQUFDO0tBQ2pFLEVBQUU7UUFBQ04sU0FBUztLQUFDLENBQUMsQ0FBQztJQUVoQixPQUFPSSxVQUFVLENBQUNILEtBQUssR0FBRyxHQUFHLENBQUM7Q0FDL0I7QUFFRCwrREFBZUYsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUlzTGFyZ2VzY3JlZW4udHM/MGVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBTaXplIHtcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHVzZUlzTGFyZ2VzY3JlZW4gPSAoKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGhhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGU8U2l6ZT4oe1xuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93U2l6ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbaGFzV2luZG93XSk7XG5cbiAgcmV0dXJuIHdpbmRvd1NpemUud2lkdGggPiA0MDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJc0xhcmdlc2NyZWVuO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlSXNMYXJnZXNjcmVlbiIsImhhc1dpbmRvdyIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useIsLargescreen.ts\n"));

/***/ })

});
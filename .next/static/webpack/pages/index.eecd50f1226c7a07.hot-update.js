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

/***/ "./src/hooks/useDevice.ts":
/*!********************************!*\
  !*** ./src/hooks/useDevice.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useIsLargescreen() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        width: undefined,\n        height: undefined\n    }), windowSize = ref[0], setWindowSize = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var handleResize = // Handler to call on window resize\n        function handleResize() {\n            // Set window width/height to state\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        };\n        // Add event listener\n        window.addEventListener(\"resize\", handleResize);\n        // Call handler right away so state gets updated with initial window size\n        handleResize();\n        // Remove event listener on cleanup\n        return function() {\n            return window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty array ensures that effect is only run on mount\n    return windowSize;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRGV2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUE0QztBQU81QyxTQUFTRSxnQkFBZ0IsR0FBWTtJQUNuQyxJQUFvQ0YsR0FHbEMsR0FIa0NBLCtDQUFRLENBQU87UUFDakRHLEtBQUssRUFBRUMsU0FBUztRQUNoQkMsTUFBTSxFQUFFRCxTQUFTO0tBQ2xCLENBQUMsRUFIS0UsVUFBVSxHQUFtQk4sR0FHbEMsR0FIZSxFQUFFTyxhQUFhLEdBQUlQLEdBR2xDLEdBSDhCO0lBS2hDQyxnREFBUyxDQUFDLFdBQU07WUFFTE8sWUFBWSxHQURyQixtQ0FBbUM7UUFDbkMsU0FBU0EsWUFBWSxHQUFHO1lBQ3RCLG1DQUFtQztZQUNuQ0QsYUFBYSxDQUFDO2dCQUNaSixLQUFLLEVBQUVNLE1BQU0sQ0FBQ0MsVUFBVTtnQkFDeEJMLE1BQU0sRUFBRUksTUFBTSxDQUFDRSxXQUFXO2FBQzNCLENBQUMsQ0FBQztTQUNKO1FBQ0QscUJBQXFCO1FBQ3JCRixNQUFNLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRUosWUFBWSxDQUFDLENBQUM7UUFDaEQseUVBQXlFO1FBQ3pFQSxZQUFZLEVBQUUsQ0FBQztRQUNmLG1DQUFtQztRQUNuQyxPQUFPO21CQUFNQyxNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO1NBQUEsQ0FBQztLQUNqRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsdURBQXVEO0lBQy9ELE9BQU9GLFVBQVUsQ0FBQztDQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlRGV2aWNlLnRzPzNiMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgU2l6ZSB7XG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB1c2VJc0xhcmdlc2NyZWVuKCk6IGJvb2xlYW4ge1xuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPih7XG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXG4gICAgICBzZXRXaW5kb3dTaXplKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnRcbiAgcmV0dXJuIHdpbmRvd1NpemU7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VJc0xhcmdlc2NyZWVuIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useDevice.ts\n"));

/***/ })

});
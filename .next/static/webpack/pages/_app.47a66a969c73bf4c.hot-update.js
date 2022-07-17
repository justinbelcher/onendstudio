"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Page.tsx":
/*!*********************************!*\
  !*** ./src/components/Page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/stitches.config */ \"./src/styles/stitches.config.js\");\n/* harmony import */ var _components_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Flex */ \"./src/components/Flex.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Footer */ \"./src/components/Footer.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar Layout = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"div\", {\n    gridTemplateColumns: \"1fr\",\n    gridTemplateAreas: \"'nav' 'content'\",\n    \"@large\": {\n        gridTemplateRows: \"150px 1fr\"\n    },\n    \"@small\": {\n        gridTemplateRows: \"64px 1fr\"\n    }\n});\n_c = Layout;\nvar Page = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Flex__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        as: \"section\",\n        direction: \"column\",\n        css: {\n            minHeight: \"100%\",\n            fontFamily: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.fonts.primary,\n            backgroundColor: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.colors.siteBg\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Page.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Page.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"Layout\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXdEO0FBRXBCO0FBQ1k7QUFDUjtBQUV4QyxJQUFNSyxNQUFNLEdBQUdMLCtEQUFNLENBQUMsS0FBSyxFQUFFO0lBQzNCTSxtQkFBbUIsRUFBRSxLQUFLO0lBQzFCQyxpQkFBaUIsRUFBRSxpQkFBaUI7SUFDcEMsUUFBUSxFQUFFO1FBQ1JDLGdCQUFnQixFQUFFLFdBQVc7S0FDOUI7SUFDRCxRQUFRLEVBQUU7UUFDUkEsZ0JBQWdCLEVBQUUsVUFBVTtLQUM3QjtDQUNGLENBQUM7QUFUSUgsS0FBQUEsTUFBTTtBQVdMLElBQU1JLElBQUksR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO0lBQzdCLHFCQUNFLDhEQUFDUix3REFBSTtRQUNIUyxFQUFFLEVBQUMsU0FBUztRQUNaQyxTQUFTLEVBQUMsUUFBUTtRQUNsQkMsR0FBRyxFQUFFO1lBQ0hDLFNBQVMsRUFBRSxNQUFNO1lBQ2pCQyxVQUFVLEVBQUVkLHdFQUFtQjtZQUMvQmlCLGVBQWUsRUFBRWpCLHdFQUFtQjtTQUNyQztrQkFFRCw0RUFBQ0ksTUFBTTs7OEJBQ0wsOERBQUNGLDhEQUFVOzs7O3lCQUFHO2dCQUNiTyxRQUFROzhCQUNULDhEQUFDTiwwREFBTTs7Ozt5QkFBRzs7Ozs7O2lCQUNIOzs7OzthQUNKLENBQ1A7Q0FDSCxDQUFDO0FBbEJXSyxNQUFBQSxJQUFJO0FBb0JqQiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2UudHN4PzMwY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCB0aGVtZSB9IGZyb20gXCJAc3R5bGVzL3N0aXRjaGVzLmNvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IEZsZXggZnJvbSBcIkBjb21wb25lbnRzL0ZsZXhcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIkBjb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQGNvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBzdHlsZWQoXCJkaXZcIiwge1xyXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyXCIsXHJcbiAgZ3JpZFRlbXBsYXRlQXJlYXM6IFwiJ25hdicgJ2NvbnRlbnQnXCIsXHJcbiAgXCJAbGFyZ2VcIjoge1xyXG4gICAgZ3JpZFRlbXBsYXRlUm93czogXCIxNTBweCAxZnJcIixcclxuICB9LFxyXG4gIFwiQHNtYWxsXCI6IHtcclxuICAgIGdyaWRUZW1wbGF0ZVJvd3M6IFwiNjRweCAxZnJcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cInNlY3Rpb25cIlxyXG4gICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICBjc3M9e3tcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnRzLnByaW1hcnksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2l0ZUJnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ0aGVtZSIsIkZsZXgiLCJOYXZpZ2F0aW9uIiwiRm9vdGVyIiwiTGF5b3V0IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZFRlbXBsYXRlUm93cyIsIlBhZ2UiLCJjaGlsZHJlbiIsImFzIiwiZGlyZWN0aW9uIiwiY3NzIiwibWluSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRzIiwicHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInNpdGVCZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Page.tsx\n"));

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/fonts.css */ \"./src/styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Page */ \"./src/components/Page.tsx\");\n\n\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, pageProps), void 0, false, {\n            fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJCO0FBQ0E7QUFFUztBQUVyQixTQUFTQyxLQUFLLENBQUMsS0FBd0IsRUFBRTtRQUF4QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUztJQUNsRCxxQkFDRSw4REFBQ0gsd0RBQUk7a0JBQ0gsNEVBQUNFLFNBQVMscUZBQUtDLFNBQVM7Ozs7Z0JBQUk7Ozs7O1lBQ3ZCLENBQ1A7Q0FDSDtBQU51QkYsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAc3R5bGVzL2ZvbnRzLmNzc1wiO1xyXG5pbXBvcnQgXCJAc3R5bGVzL3Jlc2V0LmNzc1wiO1xyXG5cclxuaW1wb3J0IFBhZ2UgZnJvbSBcIkBjb21wb25lbnRzL1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9QYWdlPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});
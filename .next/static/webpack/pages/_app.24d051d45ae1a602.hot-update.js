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

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LargeLayout\": function() { return /* binding */ LargeLayout; },\n/* harmony export */   \"PageLayout\": function() { return /* binding */ PageLayout; },\n/* harmony export */   \"SmallLayout\": function() { return /* binding */ SmallLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/stitches.config */ \"./src/styles/stitches.config.js\");\n/* harmony import */ var _hooks_usIsLarge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/usIsLarge */ \"./src/hooks/usIsLarge.ts\");\n/* harmony import */ var _components_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Flex */ \"./src/components/Flex.tsx\");\n/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Grid */ \"./src/components/Grid.tsx\");\n/* harmony import */ var _components_GridItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/GridItem */ \"./src/components/GridItem.tsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Logo */ \"./src/components/Logo.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Navigation */ \"./src/components/Navigation.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LargeLayout = function(param) {\n    var children = param.children;\n    _s();\n    var isLarge = (0,_hooks_usIsLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return isLarge ? children : null;\n};\n_s(LargeLayout, \"hitIKFMBueTuU6OVKjG6ZGk8Na8=\", false, function() {\n    return [\n        _hooks_usIsLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LargeLayout;\nvar SmallLayout = function(param) {\n    var children = param.children;\n    _s1();\n    var isLarge = (0,_hooks_usIsLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return isLarge ? null : children;\n};\n_s1(SmallLayout, \"hitIKFMBueTuU6OVKjG6ZGk8Na8=\", false, function() {\n    return [\n        _hooks_usIsLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c1 = SmallLayout;\nvar PageLayout = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Flex__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        as: \"section\",\n        direction: \"column\",\n        css: {\n            minHeight: \"100%\",\n            fontFamily: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.fonts.primary,\n            backgroundColor: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.colors.siteBg\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LargeLayout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    rows: \"150px 1fr\",\n                    columns: \"1fr 1px 1fr\",\n                    areas: \"'brand separator nav' 'intro separator lede'\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Layout.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Layout.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GridItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            as: \"separator\",\n                            css: {\n                                backgroundColor: \"$border\",\n                                height: \"100vh\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Layout.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Layout.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Layout.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallLayout, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Layout.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Justin\\\\dev\\\\onendstudio\\\\src\\\\components\\\\Layout.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = PageLayout;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LargeLayout\");\n$RefreshReg$(_c1, \"SmallLayout\");\n$RefreshReg$(_c2, \"PageLayout\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnRDtBQUVOO0FBRU47QUFDQTtBQUNRO0FBQ047QUFDVTs7QUFFekMsSUFBTU8sV0FBVyxHQUFHLGdCQUFrQjtRQUFmQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3BDLElBQU1DLE9BQU8sR0FBR1IsNERBQVUsRUFBRTtJQUM1QixPQUFPUSxPQUFPLEdBQUdELFFBQVEsR0FBRyxJQUFJLENBQUM7Q0FDbEMsQ0FBQztHQUhXRCxXQUFXOztRQUNOTix3REFBVTs7O0FBRGZNLEtBQUFBLFdBQVc7QUFLakIsSUFBTUcsV0FBVyxHQUFHLGdCQUFrQjtRQUFmRixRQUFRLFNBQVJBLFFBQVE7O0lBQ3BDLElBQU1DLE9BQU8sR0FBR1IsNERBQVUsRUFBRTtJQUM1QixPQUFPUSxPQUFPLEdBQUcsSUFBSSxHQUFHRCxRQUFRLENBQUM7Q0FDbEMsQ0FBQztJQUhXRSxXQUFXOztRQUNOVCx3REFBVTs7O0FBRGZTLE1BQUFBLFdBQVc7QUFLakIsSUFBTUMsVUFBVSxHQUFHLGdCQUFrQjtRQUFmSCxRQUFRLFNBQVJBLFFBQVE7SUFDbkMscUJBQ0UsOERBQUNOLHdEQUFJO1FBQ0hVLEVBQUUsRUFBQyxTQUFTO1FBQ1pDLFNBQVMsRUFBQyxRQUFRO1FBQ2xCQyxHQUFHLEVBQUU7WUFDSEMsU0FBUyxFQUFFLE1BQU07WUFDakJDLFVBQVUsRUFBRWhCLHdFQUFtQjtZQUMvQm1CLGVBQWUsRUFBRW5CLHdFQUFtQjtTQUNyQzs7MEJBRUQsOERBQUNPLFdBQVc7MEJBQ1YsNEVBQUNKLHdEQUFJO29CQUNIbUIsSUFBSSxFQUFDLFdBQVc7b0JBQ2hCQyxPQUFPLEVBQUMsYUFBYTtvQkFDckJDLEtBQUssRUFBQyw4Q0FBOEM7O3NDQUVwRCw4REFBQ25CLHdEQUFNOzs7O2lDQUFHO3NDQUNWLDhEQUFDQyw4REFBVTs7OztpQ0FBRztzQ0FDZCw4REFBQ0YsNERBQVE7NEJBQ1BRLEVBQUUsRUFBQyxXQUFXOzRCQUNkRSxHQUFHLEVBQUU7Z0NBQUVLLGVBQWUsRUFBRSxTQUFTO2dDQUFFTSxNQUFNLEVBQUUsT0FBTzs2QkFBRTs7Ozs7aUNBQ3BEO3dCQUNEakIsUUFBUTs7Ozs7O3lCQUNKOzs7OztxQkFDSzswQkFDZCw4REFBQ0UsV0FBVzs7OztxQkFBZTs7Ozs7O2FBQ3RCLENBQ1A7Q0FDSCxDQUFDO0FBN0JXQyxNQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC50c3g/ZGU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aGVtZSB9IGZyb20gXCJAc3R5bGVzL3N0aXRjaGVzLmNvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHVzZUlzTGFyZ2UgZnJvbSBcIkBob29rcy91c0lzTGFyZ2VcIjtcclxuXHJcbmltcG9ydCBGbGV4IGZyb20gXCJAY29tcG9uZW50cy9GbGV4XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAY29tcG9uZW50cy9HcmlkXCI7XHJcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiQGNvbXBvbmVudHMvR3JpZEl0ZW1cIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQGNvbXBvbmVudHMvTG9nb1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiQGNvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhcmdlTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGlzTGFyZ2UgPSB1c2VJc0xhcmdlKCk7XHJcbiAgcmV0dXJuIGlzTGFyZ2UgPyBjaGlsZHJlbiA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU21hbGxMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgaXNMYXJnZSA9IHVzZUlzTGFyZ2UoKTtcclxuICByZXR1cm4gaXNMYXJnZSA/IG51bGwgOiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cInNlY3Rpb25cIlxyXG4gICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICBjc3M9e3tcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnRzLnByaW1hcnksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2l0ZUJnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TGFyZ2VMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIHJvd3M9XCIxNTBweCAxZnJcIlxyXG4gICAgICAgICAgY29sdW1ucz1cIjFmciAxcHggMWZyXCJcclxuICAgICAgICAgIGFyZWFzPVwiJ2JyYW5kIHNlcGFyYXRvciBuYXYnICdpbnRybyBzZXBhcmF0b3IgbGVkZSdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICA8R3JpZEl0ZW1cclxuICAgICAgICAgICAgYXM9XCJzZXBhcmF0b3JcIlxyXG4gICAgICAgICAgICBjc3M9e3sgYmFja2dyb3VuZENvbG9yOiBcIiRib3JkZXJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xhcmdlTGF5b3V0PlxyXG4gICAgICA8U21hbGxMYXlvdXQ+PC9TbWFsbExheW91dD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidGhlbWUiLCJ1c2VJc0xhcmdlIiwiRmxleCIsIkdyaWQiLCJHcmlkSXRlbSIsIkhlYWRlciIsIk5hdmlnYXRpb24iLCJMYXJnZUxheW91dCIsImNoaWxkcmVuIiwiaXNMYXJnZSIsIlNtYWxsTGF5b3V0IiwiUGFnZUxheW91dCIsImFzIiwiZGlyZWN0aW9uIiwiY3NzIiwibWluSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRzIiwicHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInNpdGVCZyIsInJvd3MiLCJjb2x1bW5zIiwiYXJlYXMiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n"));

/***/ })

});
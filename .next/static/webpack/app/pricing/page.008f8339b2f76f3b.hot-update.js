"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pricing/page",{

/***/ "(app-pages-browser)/./app/components/Layout.js":
/*!**********************************!*\
  !*** ./app/components/Layout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"(app-pages-browser)/./app/components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                            children: \"Steve's Car Detailing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().navLinks), \" \").concat(menuOpen ? (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().navActive) : \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/\",\n                                    onClick: toggleMenu,\n                                    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/about\",\n                                    onClick: toggleMenu,\n                                    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/contact\",\n                                    onClick: toggleMenu,\n                                    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/pricing\",\n                                    onClick: toggleMenu,\n                                    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: \"Pricing\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/booking\",\n                                    onClick: toggleMenu,\n                                    className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem), \" \").concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().cta)),\n                                    children: \"Request A Quote\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburger),\n                            onClick: toggleMenu,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().line), \" \").concat(menuOpen ? (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().line1) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().line), \" \").concat(menuOpen ? (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().line2) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().line), \" \").concat(menuOpen ? (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().line3) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa9 2024 Steve's Car Detailing. All rights reserved.\"\n                }, void 0, false, {\n                    fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/SteveBenner/Desktop/stevedetails/app/components/Layout.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUM7QUFDSjtBQUNZO0FBRTFCLFNBQVNHLE9BQU8sS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sYUFBYTtRQUNqQkQsWUFBWSxDQUFDRDtJQUNmO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdQLHFFQUFnQjs7MEJBQzlCLDhEQUFDUztnQkFBT0YsV0FBV1Asa0VBQWE7MEJBQzlCLDRFQUFDTTtvQkFBSUMsV0FBV1Asa0VBQWE7O3NDQUMzQiw4REFBQ007NEJBQUlDLFdBQVdQLGdFQUFXO3NDQUFFOzs7Ozs7c0NBQzdCLDhEQUFDWTs0QkFBSUwsV0FBVyxHQUFzQkosT0FBbkJILG9FQUFlLEVBQUMsS0FBb0MsT0FBakNHLFdBQVdILHFFQUFnQixHQUFHOzs4Q0FDbEUsOERBQUNELGlEQUFJQTtvQ0FBQ2dCLE1BQUs7b0NBQUlDLFNBQVNYO29DQUFZRSxXQUFXUCxvRUFBZTs4Q0FBRTs7Ozs7OzhDQUNoRSw4REFBQ0QsaURBQUlBO29DQUFDZ0IsTUFBSztvQ0FBU0MsU0FBU1g7b0NBQVlFLFdBQVdQLG9FQUFlOzhDQUFFOzs7Ozs7OENBQ3JFLDhEQUFDRCxpREFBSUE7b0NBQUNnQixNQUFLO29DQUFXQyxTQUFTWDtvQ0FBWUUsV0FBV1Asb0VBQWU7OENBQUU7Ozs7Ozs4Q0FDdkUsOERBQUNELGlEQUFJQTtvQ0FBQ2dCLE1BQUs7b0NBQVdDLFNBQVNYO29DQUFZRSxXQUFXUCxvRUFBZTs4Q0FBRTs7Ozs7OzhDQUN2RSw4REFBQ0QsaURBQUlBO29DQUFDZ0IsTUFBSztvQ0FBV0MsU0FBU1g7b0NBQVlFLFdBQVcsR0FBc0JQLE9BQW5CQSxvRUFBZSxFQUFDLEtBQWMsT0FBWEEsK0RBQVU7OENBQUk7Ozs7Ozs7Ozs7OztzQ0FFNUYsOERBQUNNOzRCQUFJQyxXQUFXUCxxRUFBZ0I7NEJBQUVnQixTQUFTWDs7OENBQ3pDLDhEQUFDQztvQ0FBSUMsV0FBVyxHQUFrQkosT0FBZkgsZ0VBQVcsRUFBQyxLQUFnQyxPQUE3QkcsV0FBV0gsaUVBQVksR0FBRzs7Ozs7OzhDQUM1RCw4REFBQ007b0NBQUlDLFdBQVcsR0FBa0JKLE9BQWZILGdFQUFXLEVBQUMsS0FBZ0MsT0FBN0JHLFdBQVdILGlFQUFZLEdBQUc7Ozs7Ozs4Q0FDNUQsOERBQUNNO29DQUFJQyxXQUFXLEdBQWtCSixPQUFmSCxnRUFBVyxFQUFDLEtBQWdDLE9BQTdCRyxXQUFXSCxpRUFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEUsOERBQUN3QjswQkFBTXRCOzs7Ozs7MEJBQ1AsOERBQUN1QjtnQkFBT2xCLFdBQVdQLGtFQUFhOzBCQUM5Qiw0RUFBQzBCOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlYO0dBaEN3QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xheW91dC5qcz8xMzlkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oIW1lbnVPcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+U3RldmUncyBDYXIgRGV0YWlsaW5nPC9kaXY+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZMaW5rc30gJHttZW51T3BlbiA/IHN0eWxlcy5uYXZBY3RpdmUgOiAnJ31gfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaWNpbmdcIiBvbkNsaWNrPXt0b2dnbGVNZW51fSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+UHJpY2luZzwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va2luZ1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lbnVJdGVtfSAke3N0eWxlcy5jdGF9YH0+UmVxdWVzdCBBIFF1b3RlPC9MaW5rPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ2VyfSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGluZX0gJHttZW51T3BlbiA/IHN0eWxlcy5saW5lMSA6ICcnfWB9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5lfSAke21lbnVPcGVuID8gc3R5bGVzLmxpbmUyIDogJyd9YH0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmV9ICR7bWVudU9wZW4gPyBzdHlsZXMubGluZTMgOiAnJ31gfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxwPiZjb3B5OyAyMDI0IFN0ZXZlJ3MgQ2FyIERldGFpbGluZy4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ0b2dnbGVNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZGVyIiwibmF2YmFyIiwibG9nbyIsIm5hdiIsIm5hdkxpbmtzIiwibmF2QWN0aXZlIiwiaHJlZiIsIm9uQ2xpY2siLCJtZW51SXRlbSIsImN0YSIsImhhbWJ1cmdlciIsImxpbmUiLCJsaW5lMSIsImxpbmUyIiwibGluZTMiLCJtYWluIiwiZm9vdGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Layout.js\n"));

/***/ })

});
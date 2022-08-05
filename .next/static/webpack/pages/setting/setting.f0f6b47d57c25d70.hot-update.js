"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/setting/setting",{

/***/ "./pages/setting/setting.js":
/*!**********************************!*\
  !*** ./pages/setting/setting.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Setting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/contexts/theme-context */ \"./components/contexts/theme-context.js\");\n/* harmony import */ var _components_contexts_user_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/contexts/user-context */ \"./components/contexts/user-context.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Setting() {\n    _s();\n    var dark = (0,_components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__.useDark)();\n    var user = (0,_components_contexts_user_context__WEBPACK_IMPORTED_MODULE_2__.useGetUser)();\n    var setDark = (0,_components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__.useSetDark)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 dark:bg-gray-900 h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-gray-900 dark:text-white\",\n                    children: [\n                        \"Wanna change some preferences \",\n                        user,\n                        \"?\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-5 bg-blue-400 rounded-md p-2 text-white dark:text-gray-900\",\n                    onClick: function() {\n                        return setDark(!dark);\n                    },\n                    children: \"Dark Toggle\"\n                }, void 0, false, {\n                    fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n            lineNumber: 13,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n};\n_s(Setting, \"b+sOx0GaksVnOjKi5F9Pq9nQjgc=\", false, function() {\n    return [\n        _components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__.useDark,\n        _components_contexts_user_context__WEBPACK_IMPORTED_MODULE_2__.useGetUser,\n        _components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__.useSetDark\n    ];\n});\n_c = Setting;\nvar _c;\n$RefreshReg$(_c, \"Setting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5nL3NldHRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFHbUQ7QUFDbUI7QUFFdkQsU0FBU0csT0FBTyxHQUFHOztJQUM5QixJQUFNQyxJQUFJLEdBQUdKLDJFQUFPLEVBQUU7SUFDdEIsSUFBTUssSUFBSSxHQUFHSCw2RUFBVSxFQUFFO0lBQ3pCLElBQU1JLE9BQU8sR0FBR0wsOEVBQVUsRUFBRTtJQUM1QixxQkFDSSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsdUNBQXVDO2tCQUNwRCw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVzs7OEJBQ3hCLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsK0JBQStCOzt3QkFBQyxnQ0FDZjt3QkFBQ0gsSUFBSTt3QkFBQyxHQUN0Qzs7Ozs7O3dCQUFNOzhCQUNOLDhEQUFDSSxRQUFNO29CQUFDRCxTQUFTLEVBQUMsK0RBQStEO29CQUFDRSxPQUFPLEVBQUU7K0JBQU1KLE9BQU8sQ0FBQyxDQUFDRixJQUFJLENBQUM7cUJBQUE7OEJBQUUsYUFBVzs7Ozs7d0JBQVM7Ozs7OztnQkFDakk7Ozs7O1lBQ0YsQ0FDTjtDQUNQO0dBZHVCRCxPQUFPOztRQUNkSCx1RUFBTztRQUNQRSx5RUFBVTtRQUNQRCwwRUFBVTs7O0FBSE5FLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZy9zZXR0aW5nLmpzPzQzNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICB1c2VEYXJrLFxuICAgIHVzZVNldERhcmtcbiAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRleHRzL3RoZW1lLWNvbnRleHQnO1xuICBpbXBvcnQgeyB1c2VHZXRVc2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250ZXh0cy91c2VyLWNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nKCkge1xuICAgIGNvbnN0IGRhcmsgPSB1c2VEYXJrKCk7XG4gICAgY29uc3QgdXNlciA9IHVzZUdldFVzZXIoKTtcbiAgICBjb25zdCBzZXREYXJrID0gdXNlU2V0RGFyaygpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktOTAwIGgtc2NyZWVuJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgIFdhbm5hIGNoYW5nZSBzb21lIHByZWZlcmVuY2VzIHt1c2VyfT9cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J210LTUgYmctYmx1ZS00MDAgcm91bmRlZC1tZCBwLTIgdGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS05MDAnIG9uQ2xpY2s9eygpID0+IHNldERhcmsoIWRhcmspfT5EYXJrIFRvZ2dsZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG59Il0sIm5hbWVzIjpbInVzZURhcmsiLCJ1c2VTZXREYXJrIiwidXNlR2V0VXNlciIsIlNldHRpbmciLCJkYXJrIiwidXNlciIsInNldERhcmsiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/setting/setting.js\n"));

/***/ })

});
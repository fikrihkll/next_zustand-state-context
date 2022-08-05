"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/setting/setting";
exports.ids = ["pages/setting/setting"];
exports.modules = {

/***/ "./components/contexts/theme-context.js":
/*!**********************************************!*\
  !*** ./components/contexts/theme-context.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContextProvider\": () => (/* binding */ ThemeContextProvider),\n/* harmony export */   \"useDark\": () => (/* binding */ useDark),\n/* harmony export */   \"useSetDark\": () => (/* binding */ useSetDark)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useTheme = ()=>{\n    const { 0: dark , 1: setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    return {\n        dark,\n        setDarkTheme: (isDarkStatus)=>setDark(isDarkStatus)\n    };\n};\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst ThemeContextProvider = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: useTheme(),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/components/contexts/theme-context.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\nconst useSetDark = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext).setDarkTheme;\nconst useDark = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext).dark;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHRzL3RoZW1lLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTREO0FBRTVELE1BQU1HLFFBQVEsR0FBRyxJQUFNO0lBQ25CLE1BQU0sS0FBQ0MsSUFBSSxNQUFFQyxPQUFPLE1BQUlMLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRXRDLE9BQU87UUFDSEksSUFBSTtRQUNKRSxZQUFZLEVBQUUsQ0FBQ0MsWUFBWSxHQUFLRixPQUFPLENBQUNFLFlBQVksQ0FBQztLQUN4RCxDQUFDO0NBQ0w7QUFFRCxNQUFNQyxZQUFZLGlCQUFHTixvREFBYSxDQUFDLElBQUksQ0FBQztBQUVqQyxNQUFNTyxvQkFBb0IsR0FBRyxDQUFDLEVBQUNDLFFBQVEsR0FBQyxpQkFDM0MsOERBQUNGLFlBQVksQ0FBQ0csUUFBUTtRQUFDQyxLQUFLLEVBQUVULFFBQVEsRUFBRTtrQkFBR08sUUFBUTs7Ozs7aUJBQXlCLENBQzlFO0FBRUssTUFBTUcsVUFBVSxHQUFHLElBQU1aLGlEQUFVLENBQUNPLFlBQVksQ0FBQyxDQUFDRixZQUFZLENBQUM7QUFDL0QsTUFBTVEsT0FBTyxHQUFHLElBQU1iLGlEQUFVLENBQUNPLFlBQVksQ0FBQyxDQUFDSixJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4cGVyaW1lbnRhbC8uL2NvbXBvbmVudHMvY29udGV4dHMvdGhlbWUtY29udGV4dC5qcz81NmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZVRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGRhcmssXG4gICAgICAgIHNldERhcmtUaGVtZTogKGlzRGFya1N0YXR1cykgPT4gc2V0RGFyayhpc0RhcmtTdGF0dXMpXG4gICAgfTtcbn07XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlVGhlbWUoKX0+e2NoaWxkcmVufTwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IHVzZVNldERhcmsgPSAoKSA9PiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkuc2V0RGFya1RoZW1lO1xuZXhwb3J0IGNvbnN0IHVzZURhcmsgPSAoKSA9PiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkuZGFyazsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVRoZW1lIiwiZGFyayIsInNldERhcmsiLCJzZXREYXJrVGhlbWUiLCJpc0RhcmtTdGF0dXMiLCJUaGVtZUNvbnRleHQiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVNldERhcmsiLCJ1c2VEYXJrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contexts/theme-context.js\n");

/***/ }),

/***/ "./components/contexts/user-context.js":
/*!*********************************************!*\
  !*** ./components/contexts/user-context.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContextProvider\": () => (/* binding */ UserContextProvider),\n/* harmony export */   \"useGetUser\": () => (/* binding */ useGetUser),\n/* harmony export */   \"useSetUser\": () => (/* binding */ useSetUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useUser = ()=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"?\");\n    return {\n        user,\n        setUser: (newUser)=>setUser(newUser)\n    };\n};\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst UserContextProvider = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: useUser(),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/components/contexts/user-context.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\nconst useSetUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext).setUser;\nconst useGetUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext).user;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHRzL3VzZXItY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEQ7QUFFNUQsTUFBTUcsT0FBTyxHQUFHLElBQU07SUFDbEIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFFckMsT0FBTztRQUNISSxJQUFJO1FBQ0pDLE9BQU8sRUFBRSxDQUFDQyxPQUFPLEdBQUtELE9BQU8sQ0FBQ0MsT0FBTyxDQUFDO0tBQ3pDO0NBQ0o7QUFFRCxNQUFNQyxXQUFXLGlCQUFHTCxvREFBYSxDQUFDLElBQUksQ0FBQztBQUVoQyxNQUFNTSxtQkFBbUIsR0FBRyxDQUFDLEVBQUNDLFFBQVEsR0FBQyxpQkFDMUMsOERBQUNGLFdBQVcsQ0FBQ0csUUFBUTtRQUFDQyxLQUFLLEVBQUVSLE9BQU8sRUFBRTtrQkFBR00sUUFBUTs7Ozs7aUJBQXdCLENBQzNFO0FBRUssTUFBTUcsVUFBVSxHQUFHLElBQU1YLGlEQUFVLENBQUNNLFdBQVcsQ0FBQyxDQUFDRixPQUFPLENBQUM7QUFDekQsTUFBTVEsVUFBVSxHQUFHLElBQU1aLGlEQUFVLENBQUNNLFdBQVcsQ0FBQyxDQUFDSCxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4cGVyaW1lbnRhbC8uL2NvbXBvbmVudHMvY29udGV4dHMvdXNlci1jb250ZXh0LmpzPzIyYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlVXNlciA9ICgpID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIj9cIik7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2V0VXNlcjogKG5ld1VzZXIpID0+IHNldFVzZXIobmV3VXNlcilcbiAgICB9XG59O1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZVVzZXIoKX0+e2NoaWxkcmVufTwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgY29uc3QgdXNlU2V0VXNlciA9ICgpID0+IHVzZUNvbnRleHQoVXNlckNvbnRleHQpLnNldFVzZXI7XG5leHBvcnQgY29uc3QgdXNlR2V0VXNlciA9ICgpID0+IHVzZUNvbnRleHQoVXNlckNvbnRleHQpLnVzZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VVc2VyIiwidXNlciIsInNldFVzZXIiLCJuZXdVc2VyIiwiVXNlckNvbnRleHQiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2V0VXNlciIsInVzZUdldFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contexts/user-context.js\n");

/***/ }),

/***/ "./pages/setting/setting.js":
/*!**********************************!*\
  !*** ./pages/setting/setting.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SettingWrapper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/contexts/theme-context */ \"./components/contexts/theme-context.js\");\n/* harmony import */ var _components_contexts_user_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contexts/user-context */ \"./components/contexts/user-context.js\");\n\n\n\n\nfunction Setting() {\n    const dark = (0,_components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_2__.useDark)();\n    const user = (0,_components_contexts_user_context__WEBPACK_IMPORTED_MODULE_3__.useGetUser)();\n    const setDark = (0,_components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_2__.useSetDark)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"re-rendered\");\n        let isDark = localStorage.getItem(\"is_dark\");\n        if (isDark === true) {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n        localStorage.setItem(\"is_dark\", dark);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 dark:bg-gray-900 h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-gray-900 dark:text-white\",\n                    children: [\n                        \"Wanna change some preferences \",\n                        user,\n                        \"?\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-5 bg-blue-400 rounded-md p-2 text-white dark:text-gray-900\",\n                    onClick: ()=>setDark(!dark),\n                    children: \"Dark Toggle\"\n                }, void 0, false, {\n                    fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n            lineNumber: 28,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\nfunction SettingWrapper() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contexts_user_context__WEBPACK_IMPORTED_MODULE_3__.UserContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contexts_theme_context__WEBPACK_IMPORTED_MODULE_2__.ThemeContextProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Setting, {}, void 0, false, {\n                fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fikrihkl/Documents/Project/Next JS/next-experimental/pages/setting/setting.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5nL3NldHRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWtDO0FBS2lCO0FBQ3dDO0FBRTNGLFNBQVNNLE9BQU8sR0FBRztJQUNmLE1BQU1DLElBQUksR0FBR04sMkVBQU8sRUFBRTtJQUN0QixNQUFNTyxJQUFJLEdBQUdKLDZFQUFVLEVBQUU7SUFDekIsTUFBTUssT0FBTyxHQUFHUCw4RUFBVSxFQUFFO0lBRTVCRixnREFBUyxDQUFDLElBQU07UUFDWlUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSUMsTUFBTSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSUYsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQkcsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUMvQyxNQUFNO1lBQ0xILFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDbEQ7UUFFRE4sWUFBWSxDQUFDTyxPQUFPLENBQUMsU0FBUyxFQUFFYixJQUFJLENBQUMsQ0FBQztLQUN2QyxDQUFDO0lBRUoscUJBQ0ksOERBQUNjLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVDQUF1QztrQkFDcEQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzhCQUN4Qiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLCtCQUErQjs7d0JBQUMsZ0NBQ2Y7d0JBQUNkLElBQUk7d0JBQUMsR0FDdEM7Ozs7Ozt3QkFBTTs4QkFDTiw4REFBQ2UsUUFBTTtvQkFBQ0QsU0FBUyxFQUFDLCtEQUErRDtvQkFBQ0UsT0FBTyxFQUFFLElBQU1mLE9BQU8sQ0FBQyxDQUFDRixJQUFJLENBQUM7OEJBQUUsYUFBVzs7Ozs7d0JBQVM7Ozs7OztnQkFDakk7Ozs7O1lBQ0YsQ0FDTjtDQUNQO0FBRWMsU0FBU2tCLGNBQWMsR0FBRztJQUNyQyxxQkFDSSw4REFBQ3BCLGtGQUFtQjtrQkFDaEIsNEVBQUNGLG9GQUFvQjtzQkFDakIsNEVBQUNHLE9BQU87Ozs7b0JBQUc7Ozs7O2dCQUNROzs7OztZQUNMLENBQ3pCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV4cGVyaW1lbnRhbC8uL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5qcz80MzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgdXNlRGFyayxcbiAgICB1c2VTZXREYXJrLFxuICAgIFRoZW1lQ29udGV4dFByb3ZpZGVyLFxuICB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGV4dHMvdGhlbWUtY29udGV4dCc7XG4gIGltcG9ydCB7IHVzZUdldFVzZXIsIFVzZXJDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRleHRzL3VzZXItY29udGV4dCc7XG5cbmZ1bmN0aW9uIFNldHRpbmcoKSB7XG4gICAgY29uc3QgZGFyayA9IHVzZURhcmsoKTtcbiAgICBjb25zdCB1c2VyID0gdXNlR2V0VXNlcigpO1xuICAgIGNvbnN0IHNldERhcmsgPSB1c2VTZXREYXJrKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlLXJlbmRlcmVkXCIpO1xuICAgICAgICBsZXQgaXNEYXJrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc19kYXJrXCIpO1xuICAgICAgICBpZiAoaXNEYXJrID09PSB0cnVlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNfZGFya1wiLCBkYXJrKTtcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTkwMCBoLXNjcmVlbic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICBXYW5uYSBjaGFuZ2Ugc29tZSBwcmVmZXJlbmNlcyB7dXNlcn0/XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtdC01IGJnLWJsdWUtNDAwIHJvdW5kZWQtbWQgcC0yIHRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktOTAwJyBvbkNsaWNrPXsoKSA9PiBzZXREYXJrKCFkYXJrKX0+RGFyayBUb2dnbGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nV3JhcHBlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VXNlckNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDxUaGVtZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8U2V0dGluZyAvPlxuICAgICAgICAgICAgPC9UaGVtZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPC9Vc2VyQ29udGV4dFByb3ZpZGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlRGFyayIsInVzZVNldERhcmsiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsInVzZUdldFVzZXIiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwiU2V0dGluZyIsImRhcmsiLCJ1c2VyIiwic2V0RGFyayIsImNvbnNvbGUiLCJsb2ciLCJpc0RhcmsiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIlNldHRpbmdXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/setting/setting.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/setting/setting.js"));
module.exports = __webpack_exports__;

})();
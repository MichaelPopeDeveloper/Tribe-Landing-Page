module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ContentFeed/View/index.tsx":
/*!***********************************************!*\
  !*** ./components/ContentFeed/View/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "@heroicons/react/solid");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\micha\\Desktop\\Projects_2020\\TweetCloneLandingPage\\src\\client\\components\\ContentFeed\\View\\index.tsx";

/* This example requires Tailwind CSS v2.0+ */

const positions = [{
  id: 1,
  title: 'Back End Developer',
  type: 'Full-time',
  location: 'Remote',
  department: 'Engineering',
  closeDate: '2020-01-07',
  closeDateFull: 'January 7, 2020'
}, {
  id: 2,
  title: 'Front End Developer',
  type: 'Full-time',
  location: 'Remote',
  department: 'Engineering',
  closeDate: '2020-01-07',
  closeDateFull: 'January 7, 2020'
}, {
  id: 3,
  title: 'User Interface Designer',
  type: 'Full-time',
  location: 'Remote',
  department: 'Design',
  closeDate: '2020-01-14',
  closeDateFull: 'January 14, 2020'
}];
function Example() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-white shadow overflow-hidden sm:rounded-md left-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "divide-y divide-gray-200",
      children: positions.map(position => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "block hover:bg-gray-50",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "px-4 py-4 sm:px-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-sm font-medium text-indigo-600 truncate",
                children: position.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-2 flex-shrink-0 flex",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                  children: position.type
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-2 sm:flex sm:justify-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "sm:flex",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "flex items-center text-sm text-gray-500",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["UsersIcon"], {
                    className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, this), position.department]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["LocationMarkerIcon"], {
                    className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 23
                  }, this), position.location]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-2 flex items-center text-sm text-gray-500 sm:mt-0",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["CalendarIcon"], {
                  className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["Closing on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                    dateTime: position.closeDate,
                    children: position.closeDateFull
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 34
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)
      }, position.id, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/ContentFeed/index.tsx":
/*!******************************************!*\
  !*** ./components/ContentFeed/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./components/ContentFeed/View/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_View__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Main/View/index.tsx":
/*!****************************************!*\
  !*** ./components/Main/View/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "@heroicons/react/outline");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\micha\\Desktop\\Projects_2020\\TweetCloneLandingPage\\src\\client\\components\\Main\\View\\index.tsx";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/



const navigation = [{
  name: 'Product',
  href: '#'
}, {
  name: 'Features',
  href: '#'
}, {
  name: 'Marketplace',
  href: '#'
}, {
  name: 'Company',
  href: '#'
}];
function Main({
  ContentFeed
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "relative bg-white overflow-hidden",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden lg:block lg:absolute lg:inset-0",
      "aria-hidden": "true",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        className: "absolute top-0 left-1/2 transform translate-x-64 -translate-y-8",
        width: 640,
        height: 784,
        fill: "none",
        viewBox: "0 0 640 784",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pattern", {
            id: "9ebea6f4-a1f5-4d96-8c4e-4c2abf658047",
            x: 118,
            y: 0,
            width: 20,
            height: 20,
            patternUnits: "userSpaceOnUse",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
              x: 0,
              y: 0,
              width: 4,
              height: 4,
              className: "text-gray-200",
              fill: "currentColor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          y: 72,
          width: 640,
          height: 640,
          className: "text-gray-50",
          fill: "currentColor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: 118,
          width: 404,
          height: 784,
          fill: "url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative pt-6 pb-16 sm:pb-24 lg:pb-32",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        children: ({
          open
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            className: "relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6",
            "aria-label": "Global",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex items-center flex-1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center justify-between w-full md:w-auto",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Workflow"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "h-8 w-auto sm:h-10",
                    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "-mr-2 flex items-center md:hidden",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Button, {
                    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "sr-only",
                      children: "Open main menu"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["MenuIcon"], {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hidden md:block md:ml-10 md:space-x-10",
                children: navigation.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: item.href,
                  className: "font-medium text-gray-500 hover:text-gray-900",
                  children: item.name
                }, item.name, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 23
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hidden md:block text-right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50",
                  children: "Log in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Transition"], {
            show: open,
            as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
            enter: "duration-150 ease-out",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "duration-100 ease-in",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Panel, {
              focus: true,
              static: true,
              className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "px-5 pt-4 flex items-center justify-between",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "-mr-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Button, {
                      className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Close main menu"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 27
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["XIcon"], {
                        className: "h-6 w-6",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "px-2 pt-2 pb-3 space-y-1",
                  children: navigation.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: item.href,
                    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                    children: item.name
                  }, item.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 25
                  }, this))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  className: "block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100",
                  children: "Log in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lg:grid lg:grid-cols-12 lg:gap-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base",
                children: "Coming soon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "block text-gray-900",
                  children: "Speak your mind"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "block text-indigo-600",
                  children: "to the world"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl",
              children: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-base font-medium text-gray-900",
                children: "Sign up to get notified when it\u2019s ready."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                action: "#",
                method: "POST",
                className: "mt-3 sm:flex",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  htmlFor: "email",
                  className: "sr-only",
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "email",
                  id: "email",
                  className: "block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300",
                  placeholder: "Enter your email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "submit",
                  className: "mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto",
                  children: "Notify me"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mt-3 text-sm text-gray-500",
                children: ["We care about the protection of your data. Read our", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  className: "font-medium text-gray-900 underline",
                  children: "Privacy Policy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 19
                }, this), "."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentFeed, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden",
              width: 640,
              height: 784,
              fill: "none",
              viewBox: "0 0 640 784",
              "aria-hidden": "true",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pattern", {
                  id: "4f4f415c-a0e9-44c2-9601-6ded5a34a13e",
                  x: 118,
                  y: 0,
                  width: 20,
                  height: 20,
                  patternUnits: "userSpaceOnUse",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 0,
                    y: 0,
                    width: 4,
                    height: 4,
                    className: "text-gray-200",
                    fill: "currentColor"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                y: 72,
                width: 640,
                height: 640,
                className: "text-gray-50",
                fill: "currentColor"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                x: 118,
                width: 404,
                height: 784,
                fill: "url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Main/index.tsx":
/*!***********************************!*\
  !*** ./components/Main/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./components/Main/View/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_View__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main */ "./components/Main/index.tsx");
/* harmony import */ var _components_ContentFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContentFeed */ "./components/ContentFeed/index.tsx");


var _jsxFileName = "C:\\Users\\micha\\Desktop\\Projects_2020\\TweetCloneLandingPage\\src\\client\\pages\\index.tsx";

// Components



const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ContentFeed: _components_ContentFeed__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@headlessui/react");

/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250ZW50RmVlZC9WaWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbi9WaWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhlYWRsZXNzdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwb3NpdGlvbnMiLCJpZCIsInRpdGxlIiwidHlwZSIsImxvY2F0aW9uIiwiZGVwYXJ0bWVudCIsImNsb3NlRGF0ZSIsImNsb3NlRGF0ZUZ1bGwiLCJFeGFtcGxlIiwibWFwIiwicG9zaXRpb24iLCJWaWV3IiwibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiTWFpbiIsIkNvbnRlbnRGZWVkIiwib3BlbiIsIml0ZW0iLCJGcmFnbWVudCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlORCxDOzs7Ozs7Ozs7Ozs7QUQ3T0Q7QUFBQTtBQUFBO0FBRWVGLDRHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVGQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUyxJQUFjLEdBQUcsTUFBTTtBQUN6QixzQkFBTztBQUFBLDJCQUNILHFFQUFDLHdEQUFEO0FBQU0saUJBQVcsRUFBRUosK0RBQVdBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxtQkFBUDtBQUdILENBSkQ7O0FBTWVJLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDYkEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cclxuaW1wb3J0IHsgQ2FsZW5kYXJJY29uLCBMb2NhdGlvbk1hcmtlckljb24sIFVzZXJzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcblxyXG5jb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ0JhY2sgRW5kIERldmVsb3BlcicsXHJcbiAgICB0eXBlOiAnRnVsbC10aW1lJyxcclxuICAgIGxvY2F0aW9uOiAnUmVtb3RlJyxcclxuICAgIGRlcGFydG1lbnQ6ICdFbmdpbmVlcmluZycsXHJcbiAgICBjbG9zZURhdGU6ICcyMDIwLTAxLTA3JyxcclxuICAgIGNsb3NlRGF0ZUZ1bGw6ICdKYW51YXJ5IDcsIDIwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Zyb250IEVuZCBEZXZlbG9wZXInLFxyXG4gICAgdHlwZTogJ0Z1bGwtdGltZScsXHJcbiAgICBsb2NhdGlvbjogJ1JlbW90ZScsXHJcbiAgICBkZXBhcnRtZW50OiAnRW5naW5lZXJpbmcnLFxyXG4gICAgY2xvc2VEYXRlOiAnMjAyMC0wMS0wNycsXHJcbiAgICBjbG9zZURhdGVGdWxsOiAnSmFudWFyeSA3LCAyMDIwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdVc2VyIEludGVyZmFjZSBEZXNpZ25lcicsXHJcbiAgICB0eXBlOiAnRnVsbC10aW1lJyxcclxuICAgIGxvY2F0aW9uOiAnUmVtb3RlJyxcclxuICAgIGRlcGFydG1lbnQ6ICdEZXNpZ24nLFxyXG4gICAgY2xvc2VEYXRlOiAnMjAyMC0wMS0xNCcsXHJcbiAgICBjbG9zZURhdGVGdWxsOiAnSmFudWFyeSAxNCwgMjAyMCcsXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIHNtOnJvdW5kZWQtbWQgbGVmdC0yXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICB7cG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3Bvc2l0aW9uLmlkfT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBob3ZlcjpiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTQgc206cHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDAgdHJ1bmNhdGVcIj57cG9zaXRpb24udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgZmxleC1zaHJpbmstMCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBzbTpmbGV4IHNtOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0ljb24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtci0xLjUgaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi5kZXBhcnRtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCBzbTptdC0wIHNtOm1sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbk1hcmtlckljb24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtci0xLjUgaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgbXItMS41IGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zaW5nIG9uIDx0aW1lIGRhdGVUaW1lPXtwb3NpdGlvbi5jbG9zZURhdGV9Pntwb3NpdGlvbi5jbG9zZURhdGVGdWxsfTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXc7IiwiLypcclxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgVGFpbHdpbmQgQ1NTIHYyLjArIFxyXG4gIFxyXG4gIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBzb21lIGNoYW5nZXMgdG8geW91ciBjb25maWc6XHJcbiAgXHJcbiAgYGBgXHJcbiAgLy8gdGFpbHdpbmQuY29uZmlnLmpzXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAvLyAuLi5cclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgLy8gLi4uXHJcbiAgICAgIHJlcXVpcmUoJ0B0YWlsd2luZGNzcy9mb3JtcycpLFxyXG4gICAgXVxyXG4gIH1cclxuICBgYGBcclxuKi9cclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUG9wb3ZlciwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQgeyBNZW51SWNvbiwgWEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xyXG4gIHsgbmFtZTogJ1Byb2R1Y3QnLCBocmVmOiAnIycgfSxcclxuICB7IG5hbWU6ICdGZWF0dXJlcycsIGhyZWY6ICcjJyB9LFxyXG4gIHsgbmFtZTogJ01hcmtldHBsYWNlJywgaHJlZjogJyMnIH0sXHJcbiAgeyBuYW1lOiAnQ29tcGFueScsIGhyZWY6ICcjJyB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHsgQ29udGVudEZlZWQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBsZzphYnNvbHV0ZSBsZzppbnNldC0wXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0xLzIgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTY0IC10cmFuc2xhdGUteS04XCJcclxuICAgICAgICAgIHdpZHRoPXs2NDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezc4NH1cclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQwIDc4NFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgICAgICAgaWQ9XCI5ZWJlYTZmNC1hMWY1LTRkOTYtOGM0ZS00YzJhYmY2NTgwNDdcIlxyXG4gICAgICAgICAgICAgIHg9ezExOH1cclxuICAgICAgICAgICAgICB5PXswfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXs0fSBoZWlnaHQ9ezR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cclxuICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgPHJlY3QgeT17NzJ9IHdpZHRoPXs2NDB9IGhlaWdodD17NjQwfSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cclxuICAgICAgICAgIDxyZWN0IHg9ezExOH0gd2lkdGg9ezQwNH0gaGVpZ2h0PXs3ODR9IGZpbGw9XCJ1cmwoIzllYmVhNmY0LWExZjUtNGQ5Ni04YzRlLTRjMmFiZjY1ODA0NylcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHQtNiBwYi0xNiBzbTpwYi0yNCBsZzpwYi0zMlwiPlxyXG4gICAgICAgIDxQb3BvdmVyPlxyXG4gICAgICAgICAgeyh7IG9wZW4gfSkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTd4bCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHNtOnB4LTZcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdsb2JhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG1kOnctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+V29ya2Zsb3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG8gc206aC0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTYwMC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMiBmbGV4IGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHAtMiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgbWQ6bWwtMTAgbWQ6c3BhY2UteC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtpdGVtLm5hbWV9IGhyZWY9e2l0ZW0uaHJlZn0gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHJvdW5kZWQtbWQgc2hhZG93LW1kIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWluZGlnby02MDAgYmctd2hpdGUgaG92ZXI6YmctZ3JheS01MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIHNob3c9e29wZW59XHJcbiAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICBlbnRlcj1cImR1cmF0aW9uLTE1MCBlYXNlLW91dFwiXHJcbiAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICBsZWF2ZT1cImR1cmF0aW9uLTEwMCBlYXNlLWluXCJcclxuICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3Zlci5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICBmb2N1c1xyXG4gICAgICAgICAgICAgICAgICBzdGF0aWNcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgaW5zZXQteC0wIHAtMiB0cmFuc2l0aW9uIHRyYW5zZm9ybSBvcmlnaW4tdG9wLXJpZ2h0IG1kOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbWQgYmctd2hpdGUgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB0LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3Mvd29ya2Zsb3ctbWFyay1pbmRpZ28tNjAwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1tZCBwLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8WEljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDAgaG92ZXI6YmctZ3JheS01MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB4LTUgcHktMyB0ZXh0LWNlbnRlciBmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDAgYmctZ3JheS01MCBob3ZlcjpiZy1ncmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5QYW5lbD5cclxuICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1BvcG92ZXI+XHJcblxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTE2IG14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206bXQtMjQgc206cHgtNiBsZzptdC0zMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpncmlkIGxnOmdyaWQtY29scy0xMiBsZzpnYXAtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnRleHQtY2VudGVyIG1kOm1heC13LTJ4bCBtZDpteC1hdXRvIGxnOmNvbC1zcGFuLTYgbGc6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS01MDAgc206dGV4dC1iYXNlIGxnOnRleHQtc20geGw6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvbWluZyBzb29uXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHNtOnRleHQtNXhsIHhsOnRleHQtNnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS05MDBcIj5TcGVhayB5b3VyIG1pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtaW5kaWdvLTYwMFwiPnRvIHRoZSB3b3JsZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1iYXNlIHRleHQtZ3JheS01MDAgc206bXQtNSBzbTp0ZXh0LXhsIGxnOnRleHQtbGcgeGw6dGV4dC14bFwiPlxyXG4gICAgICAgICAgICAgICAgQW5pbSBhdXRlIGlkIG1hZ25hIGFsaXF1YSBhZCBhZCBub24gZGVzZXJ1bnQgc3VudC4gUXVpIGlydXJlIHF1aSBsb3JlbSBjdXBpZGF0YXQgY29tbW9kby4gRWxpdCBzdW50IGFtZXRcclxuICAgICAgICAgICAgICAgIGZ1Z2lhdCB2ZW5pYW0gb2NjYWVjYXQgZnVnaWF0IGFsaXF1YSBhZCBhZCBub24gZGVzZXJ1bnQgc3VudC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHNtOm1heC13LWxnIHNtOm14LWF1dG8gc206dGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0IGxnOm14LTBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+U2lnbiB1cCB0byBnZXQgbm90aWZpZWQgd2hlbiBpdOKAmXMgcmVhZHkuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cIlBPU1RcIiBjbGFzc05hbWU9XCJtdC0zIHNtOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMyB0ZXh0LWJhc2Ugcm91bmRlZC1tZCBwbGFjZWhvbGRlci1ncmF5LTUwMCBzaGFkb3ctc20gZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOmZsZXgtMSBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIHctZnVsbCBweC02IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHNoYWRvdy1zbSBob3ZlcjpiZy1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOm10LTAgc206bWwtMyBzbTpmbGV4LXNocmluay0wIHNtOmlubGluZS1mbGV4IHNtOml0ZW1zLWNlbnRlciBzbTp3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZ5IG1lXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgV2UgY2FyZSBhYm91dCB0aGUgcHJvdGVjdGlvbiBvZiB5b3VyIGRhdGEuIFJlYWQgb3VyXHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcml2YWN5IFBvbGljeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgcmVsYXRpdmUgc206bWF4LXctbGcgc206bXgtYXV0byBsZzptdC0wIGxnOm1heC13LW5vbmUgbGc6bXgtMCBsZzpjb2wtc3Bhbi02IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktY2VudGVyXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICB7LyogQ29udGVudCBGZWVkICovfVxyXG5cclxuICAgICAgICAgICAgICA8Q29udGVudEZlZWQgLz5cclxuXHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTggc2NhbGUtNzUgb3JpZ2luLXRvcCBzbTpzY2FsZS0xMDAgbGc6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs2NDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezc4NH1cclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQwIDc4NFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0dGVyblxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiNGY0ZjQxNWMtYTBlOS00NGMyLTk2MDEtNmRlZDVhMzRhMTNlXCJcclxuICAgICAgICAgICAgICAgICAgICB4PXsxMTh9XHJcbiAgICAgICAgICAgICAgICAgICAgeT17MH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHk9ezcyfSB3aWR0aD17NjQwfSBoZWlnaHQ9ezY0MH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXsxMTh9IHdpZHRoPXs0MDR9IGhlaWdodD17Nzg0fSBmaWxsPVwidXJsKCM0ZjRmNDE1Yy1hMGU5LTQ0YzItOTYwMS02ZGVkNWEzNGExM2UpXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluJztcclxuaW1wb3J0IENvbnRlbnRGZWVkIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGVudEZlZWQnO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8TWFpbiBDb250ZW50RmVlZD17Q29udGVudEZlZWR9IC8+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoZWFkbGVzc3VpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
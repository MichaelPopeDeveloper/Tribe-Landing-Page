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

/***/ "./components/Features/Feature1/View/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Features/Feature1/View/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\micha\\Desktop\\Projects_2020\\TweetCloneLandingPage\\src\\client\\components\\Features\\Feature1\\View\\index.tsx";
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: "mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-80",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lg:grid lg:grid-cols-12 lg:gap-8 h-screen",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sm:text-center md:max-w-2xl w-full h-72 lg:col-span-6 lg:text-left",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-auto ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: '/PhoneChain.svg'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid justify-items-stretch sm:text-center md:max-w-2xl w-full h-full lg:col-span-6 lg:text-left",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "justify-self-center self-start lg:ml-20 lg:mt-44",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-gray-900 text-4xl tracking-wide font-bold",
            children: "Decentralized Social Media"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lg:text-left w-full mt-5 text-gray-500",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia laborum ipsa animi temporibus nesciunt, debitis dignissimos ea, omnis, pariatur quos obcaecati expedita! Voluptatum unde suscipit eos dolor odit velit?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./components/Features/Feature1/index.tsx":
/*!************************************************!*\
  !*** ./components/Features/Feature1/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./components/Features/Feature1/View/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_View__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Features/Feature2/View/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Features/Feature2/View/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\micha\\Desktop\\Projects_2020\\TweetCloneLandingPage\\src\\client\\components\\Features\\Feature2\\View\\index.tsx";
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: "mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-28",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lg:grid lg:grid-cols-12 lg:gap-8 h-screen",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid justify-items-stretch sm:text-center md:max-w-2xl w-full h-full lg:col-span-6 lg:text-left",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "justify-self-center self-start lg:ml-20 lg:mt-44",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-gray-900 text-4xl tracking-wide font-bold",
            children: "Community Driven"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lg:text-left w-full mt-5 text-gray-500",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia laborum ipsa animi temporibus nesciunt, debitis dignissimos ea, omnis, pariatur quos obcaecati expedita! Voluptatum unde suscipit eos dolor odit velit?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sm:text-center md:max-w-2xl w-full h-72 lg:col-span-6 lg:text-left",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-auto ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: '/AlwaysConnected.svg'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./components/Features/Feature2/index.tsx":
/*!************************************************!*\
  !*** ./components/Features/Feature2/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./components/Features/Feature2/View/index.tsx");

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
/* harmony import */ var _components_Features_Feature1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Features/Feature1 */ "./components/Features/Feature1/index.tsx");
/* harmony import */ var _components_Features_Feature2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Features/Feature2 */ "./components/Features/Feature2/index.tsx");


var _jsxFileName = "C:\\Users\\micha\\Desktop\\Projects_2020\\TweetCloneLandingPage\\src\\client\\pages\\index.tsx";

// Components





const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ContentFeed: _components_ContentFeed__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Features_Feature1__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Features_Feature2__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250ZW50RmVlZC9WaWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmVhdHVyZXMvRmVhdHVyZTEvVmlldy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlcy9GZWF0dXJlMi9WaWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4vVmlldy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoZWFkbGVzc3VpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicG9zaXRpb25zIiwiaWQiLCJ0aXRsZSIsInR5cGUiLCJsb2NhdGlvbiIsImRlcGFydG1lbnQiLCJjbG9zZURhdGUiLCJjbG9zZURhdGVGdWxsIiwiRXhhbXBsZSIsIm1hcCIsInBvc2l0aW9uIiwiVmlldyIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsIk1haW4iLCJDb250ZW50RmVlZCIsIm9wZW4iLCJpdGVtIiwiRnJhZ21lbnQiLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FDaEI7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLG9CQUZUO0FBR0VDLE1BQUksRUFBRSxXQUhSO0FBSUVDLFVBQVEsRUFBRSxRQUpaO0FBS0VDLFlBQVUsRUFBRSxhQUxkO0FBTUVDLFdBQVMsRUFBRSxZQU5iO0FBT0VDLGVBQWEsRUFBRTtBQVBqQixDQURnQixFQVVoQjtBQUNFTixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUscUJBRlQ7QUFHRUMsTUFBSSxFQUFFLFdBSFI7QUFJRUMsVUFBUSxFQUFFLFFBSlo7QUFLRUMsWUFBVSxFQUFFLGFBTGQ7QUFNRUMsV0FBUyxFQUFFLFlBTmI7QUFPRUMsZUFBYSxFQUFFO0FBUGpCLENBVmdCLEVBbUJoQjtBQUNFTixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUseUJBRlQ7QUFHRUMsTUFBSSxFQUFFLFdBSFI7QUFJRUMsVUFBUSxFQUFFLFFBSlo7QUFLRUMsWUFBVSxFQUFFLFFBTGQ7QUFNRUMsV0FBUyxFQUFFLFlBTmI7QUFPRUMsZUFBYSxFQUFFO0FBUGpCLENBbkJnQixDQUFsQjtBQThCZSxTQUFTQyxPQUFULEdBQW1CO0FBQ2hDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHNEQUFmO0FBQUEsMkJBQ0U7QUFBSSxlQUFTLEVBQUMsMEJBQWQ7QUFBQSxnQkFDR1IsU0FBUyxDQUFDUyxHQUFWLENBQWVDLFFBQUQsaUJBQ2I7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBQyx3QkFBdEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsbUNBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMsOENBQWI7QUFBQSwwQkFBNkRBLFFBQVEsQ0FBQ1I7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUsseUJBQVMsRUFBQyx5QkFBZjtBQUFBLHVDQUNFO0FBQUcsMkJBQVMsRUFBQywyRkFBYjtBQUFBLDRCQUNHUSxRQUFRLENBQUNQO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBU0U7QUFBSyx1QkFBUyxFQUFDLGlDQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLFNBQWY7QUFBQSx3Q0FDRTtBQUFHLDJCQUFTLEVBQUMseUNBQWI7QUFBQSwwQ0FDRSxxRUFBQyxnRUFBRDtBQUFXLDZCQUFTLEVBQUMsNENBQXJCO0FBQWtFLG1DQUFZO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFFR08sUUFBUSxDQUFDTCxVQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUtFO0FBQUcsMkJBQVMsRUFBQyw4REFBYjtBQUFBLDBDQUNFLHFFQUFDLHlFQUFEO0FBQW9CLDZCQUFTLEVBQUMsNENBQTlCO0FBQTJFLG1DQUFZO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFFR0ssUUFBUSxDQUFDTixRQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsc0RBQWY7QUFBQSx3Q0FDRSxxRUFBQyxtRUFBRDtBQUFjLDJCQUFTLEVBQUMsNENBQXhCO0FBQXFFLGlDQUFZO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFBLHlEQUNhO0FBQU0sNEJBQVEsRUFBRU0sUUFBUSxDQUFDSixTQUF6QjtBQUFBLDhCQUFxQ0ksUUFBUSxDQUFDSDtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFTRyxRQUFRLENBQUNULEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3Q0QsQzs7Ozs7Ozs7Ozs7O0FDMUVEO0FBQUE7QUFBQTtBQUVlVSw0R0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FlLHFFQUFNO0FBQ2pCLHNCQUNJO0FBQU0sYUFBUyxFQUFDLHdEQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLDJDQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9FQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQUssaUJBQVMsRUFBQyxpR0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxrREFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyx3Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtCSCxDQW5CRCxFOzs7Ozs7Ozs7Ozs7QURGQTtBQUFBO0FBQUE7QUFFZUEsNEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVBZSxxRUFBTTtBQUNqQixzQkFDSTtBQUFNLGFBQVMsRUFBQyx3REFBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxpR0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxrREFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyx3Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBUUk7QUFBSyxpQkFBUyxFQUFDLG9FQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQkgsQ0FuQkQsRTs7Ozs7Ozs7Ozs7O0FGRkE7QUFBQTtBQUFBO0FBRWVBLDRHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsTUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRTtBQUF6QixDQURpQixFQUVqQjtBQUFFRCxNQUFJLEVBQUUsVUFBUjtBQUFvQkMsTUFBSSxFQUFFO0FBQTFCLENBRmlCLEVBR2pCO0FBQUVELE1BQUksRUFBRSxhQUFSO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FIaUIsRUFJakI7QUFBRUQsTUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRTtBQUF6QixDQUppQixDQUFuQjtBQU9lLFNBQVNDLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBK0I7QUFDNUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyx3Q0FBZjtBQUF3RCxxQkFBWSxNQUFwRTtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxpRUFEWjtBQUVFLGFBQUssRUFBRSxHQUZUO0FBR0UsY0FBTSxFQUFFLEdBSFY7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGVBQU8sRUFBQyxhQUxWO0FBQUEsZ0NBT0U7QUFBQSxpQ0FDRTtBQUNFLGNBQUUsRUFBQyxzQ0FETDtBQUVFLGFBQUMsRUFBRSxHQUZMO0FBR0UsYUFBQyxFQUFFLENBSEw7QUFJRSxpQkFBSyxFQUFFLEVBSlQ7QUFLRSxrQkFBTSxFQUFFLEVBTFY7QUFNRSx3QkFBWSxFQUFDLGdCQU5mO0FBQUEsbUNBUUU7QUFBTSxlQUFDLEVBQUUsQ0FBVDtBQUFZLGVBQUMsRUFBRSxDQUFmO0FBQWtCLG1CQUFLLEVBQUUsQ0FBekI7QUFBNEIsb0JBQU0sRUFBRSxDQUFwQztBQUF1Qyx1QkFBUyxFQUFDLGVBQWpEO0FBQWlFLGtCQUFJLEVBQUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBbUJFO0FBQU0sV0FBQyxFQUFFLEVBQVQ7QUFBYSxlQUFLLEVBQUUsR0FBcEI7QUFBeUIsZ0JBQU0sRUFBRSxHQUFqQztBQUFzQyxtQkFBUyxFQUFDLGNBQWhEO0FBQStELGNBQUksRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRixlQW9CRTtBQUFNLFdBQUMsRUFBRSxHQUFUO0FBQWMsZUFBSyxFQUFFLEdBQXJCO0FBQTBCLGdCQUFNLEVBQUUsR0FBbEM7QUFBdUMsY0FBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQTBCRTtBQUFLLGVBQVMsRUFBQyx1Q0FBZjtBQUFBLDhCQUNFLHFFQUFDLHlEQUFEO0FBQUEsa0JBQ0csQ0FBQztBQUFFQztBQUFGLFNBQUQsa0JBQ0M7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLEVBQUMsMkVBRFo7QUFFRSwwQkFBVyxRQUZiO0FBQUEsb0NBSUU7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLG9EQUFmO0FBQUEsd0NBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBQSwwQ0FDRTtBQUFNLDZCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUNFLDZCQUFTLEVBQUMsb0JBRFo7QUFFRSx1QkFBRyxFQUFDLCtEQUZOO0FBR0UsdUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBU0U7QUFBSywyQkFBUyxFQUFDLG1DQUFmO0FBQUEseUNBQ0UscUVBQUMseURBQUQsQ0FBUyxNQUFUO0FBQWdCLDZCQUFTLEVBQUMsNExBQTFCO0FBQUEsNENBQ0U7QUFBTSwrQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBRUUscUVBQUMsaUVBQUQ7QUFBVSwrQkFBUyxFQUFDLFNBQXBCO0FBQThCLHFDQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFpQkU7QUFBSyx5QkFBUyxFQUFDLHdDQUFmO0FBQUEsMEJBQ0dMLFVBQVUsQ0FBQ0gsR0FBWCxDQUFnQlMsSUFBRCxpQkFDZDtBQUFtQixzQkFBSSxFQUFFQSxJQUFJLENBQUNKLElBQTlCO0FBQW9DLDJCQUFTLEVBQUMsK0NBQTlDO0FBQUEsNEJBQ0dJLElBQUksQ0FBQ0w7QUFEUixtQkFBUUssSUFBSSxDQUFDTCxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUE2QkU7QUFBSyx1QkFBUyxFQUFDLDRCQUFmO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFDLG1FQUFoQjtBQUFBLHVDQUNFO0FBQ0Usc0JBQUksRUFBQyxHQURQO0FBRUUsMkJBQVMsRUFBQyx5SUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUEwQ0UscUVBQUMsNERBQUQ7QUFDRSxnQkFBSSxFQUFFSSxJQURSO0FBRUUsY0FBRSxFQUFFRSw4Q0FGTjtBQUdFLGlCQUFLLEVBQUMsdUJBSFI7QUFJRSxxQkFBUyxFQUFDLG9CQUpaO0FBS0UsbUJBQU8sRUFBQyx1QkFMVjtBQU1FLGlCQUFLLEVBQUMsc0JBTlI7QUFPRSxxQkFBUyxFQUFDLHVCQVBaO0FBUUUsbUJBQU8sRUFBQyxvQkFSVjtBQUFBLG1DQVVFLHFFQUFDLHlEQUFELENBQVMsS0FBVDtBQUNFLG1CQUFLLE1BRFA7QUFFRSxvQkFBTSxNQUZSO0FBR0UsdUJBQVMsRUFBQyw4RUFIWjtBQUFBLHFDQUtFO0FBQUsseUJBQVMsRUFBQyxnRkFBZjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQyw2Q0FBZjtBQUFBLDBDQUNFO0FBQUEsMkNBQ0U7QUFDRSwrQkFBUyxFQUFDLFlBRFo7QUFFRSx5QkFBRyxFQUFDLCtEQUZOO0FBR0UseUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBUUU7QUFBSyw2QkFBUyxFQUFDLE9BQWY7QUFBQSwyQ0FDRSxxRUFBQyx5REFBRCxDQUFTLE1BQVQ7QUFBZ0IsK0JBQVMsRUFBQyw0TEFBMUI7QUFBQSw4Q0FDRTtBQUFNLGlDQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFPLGlDQUFTLEVBQUMsU0FBakI7QUFBMkIsdUNBQVk7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQWdCRTtBQUFLLDJCQUFTLEVBQUMsMEJBQWY7QUFBQSw0QkFDR1AsVUFBVSxDQUFDSCxHQUFYLENBQWdCUyxJQUFELGlCQUNkO0FBRUUsd0JBQUksRUFBRUEsSUFBSSxDQUFDSixJQUZiO0FBR0UsNkJBQVMsRUFBQyxxR0FIWjtBQUFBLDhCQUtHSSxJQUFJLENBQUNMO0FBTFIscUJBQ09LLElBQUksQ0FBQ0wsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFoQkYsZUEyQkU7QUFDRSxzQkFBSSxFQUFDLEdBRFA7QUFFRSwyQkFBUyxFQUFDLDZGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQ0Y7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQW9HRTtBQUFNLGlCQUFTLEVBQUMsd0RBQWhCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1FQUFmO0FBQUEsb0NBQ0U7QUFBQSxzQ0FDRTtBQUFNLHlCQUFTLEVBQUMsd0dBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBTSx5QkFBUyxFQUFDLDJFQUFoQjtBQUFBLHdDQUNFO0FBQU0sMkJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFNLDJCQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFVRTtBQUFHLHVCQUFTLEVBQUMsdUVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkYsZUFjRTtBQUFLLHVCQUFTLEVBQUMsaUVBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMscUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFNLHNCQUFNLEVBQUMsR0FBYjtBQUFpQixzQkFBTSxFQUFDLE1BQXhCO0FBQStCLHlCQUFTLEVBQUMsY0FBekM7QUFBQSx3Q0FDRTtBQUFPLHlCQUFPLEVBQUMsT0FBZjtBQUF1QiwyQkFBUyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBSUU7QUFDRSxzQkFBSSxFQUFDLE1BRFA7QUFFRSxzQkFBSSxFQUFDLE9BRlA7QUFHRSxvQkFBRSxFQUFDLE9BSEw7QUFJRSwyQkFBUyxFQUFDLCtJQUpaO0FBS0UsNkJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkYsZUFXRTtBQUNFLHNCQUFJLEVBQUMsUUFEUDtBQUVFLDJCQUFTLEVBQUMseVJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBb0JFO0FBQUcseUJBQVMsRUFBQyw0QkFBYjtBQUFBLCtGQUVFO0FBQUcsc0JBQUksRUFBQyxHQUFSO0FBQVksMkJBQVMsRUFBQyxxQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBNENFO0FBQUsscUJBQVMsRUFBQyw2SEFBZjtBQUFBLG9DQUtFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQU9FO0FBQ0UsdUJBQVMsRUFBQyw4R0FEWjtBQUVFLG1CQUFLLEVBQUUsR0FGVDtBQUdFLG9CQUFNLEVBQUUsR0FIVjtBQUlFLGtCQUFJLEVBQUMsTUFKUDtBQUtFLHFCQUFPLEVBQUMsYUFMVjtBQU1FLDZCQUFZLE1BTmQ7QUFBQSxzQ0FRRTtBQUFBLHVDQUNFO0FBQ0Usb0JBQUUsRUFBQyxzQ0FETDtBQUVFLG1CQUFDLEVBQUUsR0FGTDtBQUdFLG1CQUFDLEVBQUUsQ0FITDtBQUlFLHVCQUFLLEVBQUUsRUFKVDtBQUtFLHdCQUFNLEVBQUUsRUFMVjtBQU1FLDhCQUFZLEVBQUMsZ0JBTmY7QUFBQSx5Q0FRRTtBQUFNLHFCQUFDLEVBQUUsQ0FBVDtBQUFZLHFCQUFDLEVBQUUsQ0FBZjtBQUFrQix5QkFBSyxFQUFFLENBQXpCO0FBQTRCLDBCQUFNLEVBQUUsQ0FBcEM7QUFBdUMsNkJBQVMsRUFBQyxlQUFqRDtBQUFpRSx3QkFBSSxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRixlQW9CRTtBQUFNLGlCQUFDLEVBQUUsRUFBVDtBQUFhLHFCQUFLLEVBQUUsR0FBcEI7QUFBeUIsc0JBQU0sRUFBRSxHQUFqQztBQUFzQyx5QkFBUyxFQUFDLGNBQWhEO0FBQStELG9CQUFJLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFwQkYsZUFxQkU7QUFBTSxpQkFBQyxFQUFFLEdBQVQ7QUFBYyxxQkFBSyxFQUFFLEdBQXJCO0FBQTBCLHNCQUFNLEVBQUUsR0FBbEM7QUFBdUMsb0JBQUksRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlORCxDOzs7Ozs7Ozs7Ozs7QUg3T0Q7QUFBQTtBQUFBO0FBRWVGLDRHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUyxJQUFjLEdBQUcsTUFBTTtBQUN6QixzQkFBTztBQUFBLDRCQUNILHFFQUFDLHdEQUFEO0FBQU0saUJBQVcsRUFBRUosK0RBQVdBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFFSCxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHLGVBR0gscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRztBQUFBLGtCQUFQO0FBS0gsQ0FORDs7QUFRZUksbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cclxuaW1wb3J0IHsgQ2FsZW5kYXJJY29uLCBMb2NhdGlvbk1hcmtlckljb24sIFVzZXJzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcblxyXG5jb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ0JhY2sgRW5kIERldmVsb3BlcicsXHJcbiAgICB0eXBlOiAnRnVsbC10aW1lJyxcclxuICAgIGxvY2F0aW9uOiAnUmVtb3RlJyxcclxuICAgIGRlcGFydG1lbnQ6ICdFbmdpbmVlcmluZycsXHJcbiAgICBjbG9zZURhdGU6ICcyMDIwLTAxLTA3JyxcclxuICAgIGNsb3NlRGF0ZUZ1bGw6ICdKYW51YXJ5IDcsIDIwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Zyb250IEVuZCBEZXZlbG9wZXInLFxyXG4gICAgdHlwZTogJ0Z1bGwtdGltZScsXHJcbiAgICBsb2NhdGlvbjogJ1JlbW90ZScsXHJcbiAgICBkZXBhcnRtZW50OiAnRW5naW5lZXJpbmcnLFxyXG4gICAgY2xvc2VEYXRlOiAnMjAyMC0wMS0wNycsXHJcbiAgICBjbG9zZURhdGVGdWxsOiAnSmFudWFyeSA3LCAyMDIwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdVc2VyIEludGVyZmFjZSBEZXNpZ25lcicsXHJcbiAgICB0eXBlOiAnRnVsbC10aW1lJyxcclxuICAgIGxvY2F0aW9uOiAnUmVtb3RlJyxcclxuICAgIGRlcGFydG1lbnQ6ICdEZXNpZ24nLFxyXG4gICAgY2xvc2VEYXRlOiAnMjAyMC0wMS0xNCcsXHJcbiAgICBjbG9zZURhdGVGdWxsOiAnSmFudWFyeSAxNCwgMjAyMCcsXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIHNtOnJvdW5kZWQtbWQgbGVmdC0yXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICB7cG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3Bvc2l0aW9uLmlkfT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBob3ZlcjpiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTQgc206cHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDAgdHJ1bmNhdGVcIj57cG9zaXRpb24udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgZmxleC1zaHJpbmstMCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBzbTpmbGV4IHNtOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0ljb24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtci0xLjUgaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi5kZXBhcnRtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCBzbTptdC0wIHNtOm1sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbk1hcmtlckljb24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtci0xLjUgaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGlvbi5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgbXItMS41IGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zaW5nIG9uIDx0aW1lIGRhdGVUaW1lPXtwb3NpdGlvbi5jbG9zZURhdGV9Pntwb3NpdGlvbi5jbG9zZURhdGVGdWxsfTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXc7IiwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTE2IG14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206bXQtMjQgc206cHgtNiBsZzptdC04MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmdyaWQgbGc6Z3JpZC1jb2xzLTEyIGxnOmdhcC04IGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc206dGV4dC1jZW50ZXIgbWQ6bWF4LXctMnhsIHctZnVsbCBoLTcyIGxnOmNvbC1zcGFuLTYgbGc6dGV4dC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtYXV0byBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvUGhvbmVDaGFpbi5zdmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggc206dGV4dC1jZW50ZXIgbWQ6bWF4LXctMnhsIHctZnVsbCBoLWZ1bGwgbGc6Y29sLXNwYW4tNiBsZzp0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqdXN0aWZ5LXNlbGYtY2VudGVyIHNlbGYtc3RhcnQgbGc6bWwtMjAgbGc6bXQtNDQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktOTAwIHRleHQtNHhsIHRyYWNraW5nLXdpZGUgZm9udC1ib2xkJz5EZWNlbnRyYWxpemVkIFNvY2lhbCBNZWRpYTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGc6dGV4dC1sZWZ0IHctZnVsbCBtdC01IHRleHQtZ3JheS01MDAnPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV0IG9mZmljaWEgbGFib3J1bSBpcHNhIGFuaW1pIHRlbXBvcmlidXMgbmVzY2l1bnQsIGRlYml0aXMgZGlnbmlzc2ltb3MgZWEsIG9tbmlzLCBwYXJpYXR1ciBxdW9zIG9iY2FlY2F0aSBleHBlZGl0YSEgVm9sdXB0YXR1bSB1bmRlIHN1c2NpcGl0IGVvcyBkb2xvciBvZGl0IHZlbGl0PzwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59IiwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTE2IG14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206bXQtMjQgc206cHgtNiBsZzptdC0yOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmdyaWQgbGc6Z3JpZC1jb2xzLTEyIGxnOmdhcC04IGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggc206dGV4dC1jZW50ZXIgbWQ6bWF4LXctMnhsIHctZnVsbCBoLWZ1bGwgbGc6Y29sLXNwYW4tNiBsZzp0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqdXN0aWZ5LXNlbGYtY2VudGVyIHNlbGYtc3RhcnQgbGc6bWwtMjAgbGc6bXQtNDQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktOTAwIHRleHQtNHhsIHRyYWNraW5nLXdpZGUgZm9udC1ib2xkJz5Db21tdW5pdHkgRHJpdmVuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsZzp0ZXh0LWxlZnQgdy1mdWxsIG10LTUgdGV4dC1ncmF5LTUwMCc+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXQgb2ZmaWNpYSBsYWJvcnVtIGlwc2EgYW5pbWkgdGVtcG9yaWJ1cyBuZXNjaXVudCwgZGViaXRpcyBkaWduaXNzaW1vcyBlYSwgb21uaXMsIHBhcmlhdHVyIHF1b3Mgb2JjYWVjYXRpIGV4cGVkaXRhISBWb2x1cHRhdHVtIHVuZGUgc3VzY2lwaXQgZW9zIGRvbG9yIG9kaXQgdmVsaXQ/PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOnRleHQtY2VudGVyIG1kOm1heC13LTJ4bCB3LWZ1bGwgaC03MiBsZzpjb2wtc3Bhbi02IGxnOnRleHQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWF1dG8gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL0Fsd2F5c0Nvbm5lY3RlZC5zdmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSIsIi8qXHJcbiAgVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyBcclxuICBcclxuICBUaGlzIGV4YW1wbGUgcmVxdWlyZXMgc29tZSBjaGFuZ2VzIHRvIHlvdXIgY29uZmlnOlxyXG4gIFxyXG4gIGBgYFxyXG4gIC8vIHRhaWx3aW5kLmNvbmZpZy5qc1xyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgLy8gLi4uXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIC8vIC4uLlxyXG4gICAgICByZXF1aXJlKCdAdGFpbHdpbmRjc3MvZm9ybXMnKSxcclxuICAgIF1cclxuICB9XHJcbiAgYGBgXHJcbiovXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBvcG92ZXIsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgTWVudUljb24sIFhJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IFtcclxuICB7IG5hbWU6ICdQcm9kdWN0JywgaHJlZjogJyMnIH0sXHJcbiAgeyBuYW1lOiAnRmVhdHVyZXMnLCBocmVmOiAnIycgfSxcclxuICB7IG5hbWU6ICdNYXJrZXRwbGFjZScsIGhyZWY6ICcjJyB9LFxyXG4gIHsgbmFtZTogJ0NvbXBhbnknLCBocmVmOiAnIycgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IENvbnRlbnRGZWVkIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbGc6YWJzb2x1dGUgbGc6aW5zZXQtMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMS8yIHRyYW5zZm9ybSB0cmFuc2xhdGUteC02NCAtdHJhbnNsYXRlLXktOFwiXHJcbiAgICAgICAgICB3aWR0aD17NjQwfVxyXG4gICAgICAgICAgaGVpZ2h0PXs3ODR9XHJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0MCA3ODRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICA8cGF0dGVyblxyXG4gICAgICAgICAgICAgIGlkPVwiOWViZWE2ZjQtYTFmNS00ZDk2LThjNGUtNGMyYWJmNjU4MDQ3XCJcclxuICAgICAgICAgICAgICB4PXsxMTh9XHJcbiAgICAgICAgICAgICAgeT17MH1cclxuICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XHJcbiAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgIDxyZWN0IHk9ezcyfSB3aWR0aD17NjQwfSBoZWlnaHQ9ezY0MH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XHJcbiAgICAgICAgICA8cmVjdCB4PXsxMTh9IHdpZHRoPXs0MDR9IGhlaWdodD17Nzg0fSBmaWxsPVwidXJsKCM5ZWJlYTZmNC1hMWY1LTRkOTYtOGM0ZS00YzJhYmY2NTgwNDcpXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB0LTYgcGItMTYgc206cGItMjQgbGc6cGItMzJcIj5cclxuICAgICAgICA8UG9wb3Zlcj5cclxuICAgICAgICAgIHsoeyBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8bmF2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy03eGwgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBzbTpweC02XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHbG9iYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtZDp3LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPldvcmtmbG93PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy1hdXRvIHNtOmgtMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby02MDAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1yLTIgZmxleCBpdGVtcy1jZW50ZXIgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1tZCBwLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIG1kOm1sLTEwIG1kOnNwYWNlLXgtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17aXRlbS5uYW1lfSBocmVmPXtpdGVtLmhyZWZ9IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCByb3VuZGVkLW1kIHNoYWRvdy1tZCByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1pbmRpZ28tNjAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBzaG93PXtvcGVufVxyXG4gICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgZW50ZXI9XCJkdXJhdGlvbi0xNTAgZWFzZS1vdXRcIlxyXG4gICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgbGVhdmU9XCJkdXJhdGlvbi0xMDAgZWFzZS1pblwiXHJcbiAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgZm9jdXNcclxuICAgICAgICAgICAgICAgICAgc3RhdGljXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGluc2V0LXgtMCBwLTIgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gb3JpZ2luLXRvcC1yaWdodCBtZDpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBwdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTYwMC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuQnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0yIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DbG9zZSBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB0LTIgcGItMyBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweC01IHB5LTMgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGJnLWdyYXktNTAgaG92ZXI6YmctZ3JheS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXIuUGFuZWw+XHJcbiAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC0xNiBteC1hdXRvIG1heC13LTd4bCBweC00IHNtOm10LTI0IHNtOnB4LTYgbGc6bXQtMzJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Z3JpZCBsZzpncmlkLWNvbHMtMTIgbGc6Z2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTp0ZXh0LWNlbnRlciBtZDptYXgtdy0yeGwgbWQ6bXgtYXV0byBsZzpjb2wtc3Bhbi02IGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNTAwIHNtOnRleHQtYmFzZSBsZzp0ZXh0LXNtIHhsOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICBDb21pbmcgc29vblxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMSBibG9jayB0ZXh0LTR4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCBzbTp0ZXh0LTV4bCB4bDp0ZXh0LTZ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktOTAwXCI+U3BlYWsgeW91ciBtaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWluZGlnby02MDBcIj50byB0aGUgd29ybGQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIHNtOm10LTUgc206dGV4dC14bCBsZzp0ZXh0LWxnIHhsOnRleHQteGxcIj5cclxuICAgICAgICAgICAgICAgIEFuaW0gYXV0ZSBpZCBtYWduYSBhbGlxdWEgYWQgYWQgbm9uIGRlc2VydW50IHN1bnQuIFF1aSBpcnVyZSBxdWkgbG9yZW0gY3VwaWRhdGF0IGNvbW1vZG8uIEVsaXQgc3VudCBhbWV0XHJcbiAgICAgICAgICAgICAgICBmdWdpYXQgdmVuaWFtIG9jY2FlY2F0IGZ1Z2lhdCBhbGlxdWEgYWQgYWQgbm9uIGRlc2VydW50IHN1bnQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBzbTptYXgtdy1sZyBzbTpteC1hdXRvIHNtOnRleHQtY2VudGVyIGxnOnRleHQtbGVmdCBsZzpteC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlNpZ24gdXAgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gaXTigJlzIHJlYWR5LjwvcD5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJQT1NUXCIgY2xhc3NOYW1lPVwibXQtMyBzbTpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTMgdGV4dC1iYXNlIHJvdW5kZWQtbWQgcGxhY2Vob2xkZXItZ3JheS01MDAgc2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBzbTpmbGV4LTEgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyB3LWZ1bGwgcHgtNiBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCBzaGFkb3ctc20gaG92ZXI6YmctZ3JheS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTptdC0wIHNtOm1sLTMgc206ZmxleC1zaHJpbmstMCBzbTppbmxpbmUtZmxleCBzbTppdGVtcy1jZW50ZXIgc206dy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmeSBtZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFdlIGNhcmUgYWJvdXQgdGhlIHByb3RlY3Rpb24gb2YgeW91ciBkYXRhLiBSZWFkIG91clxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIHJlbGF0aXZlIHNtOm1heC13LWxnIHNtOm14LWF1dG8gbGc6bXQtMCBsZzptYXgtdy1ub25lIGxnOm14LTAgbGc6Y29sLXNwYW4tNiBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzpqdXN0aWZ5LWNlbnRlclwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgey8qIENvbnRlbnQgRmVlZCAqL31cclxuXHJcbiAgICAgICAgICAgICAgPENvbnRlbnRGZWVkIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS04IHNjYWxlLTc1IG9yaWdpbi10b3Agc206c2NhbGUtMTAwIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NjQwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs3ODR9XHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0MCA3ODRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPHBhdHRlcm5cclxuICAgICAgICAgICAgICAgICAgICBpZD1cIjRmNGY0MTVjLWEwZTktNDRjMi05NjAxLTZkZWQ1YTM0YTEzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeD17MTE4fVxyXG4gICAgICAgICAgICAgICAgICAgIHk9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17MH0gd2lkdGg9ezR9IGhlaWdodD17NH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB5PXs3Mn0gd2lkdGg9ezY0MH0gaGVpZ2h0PXs2NDB9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17MTE4fSB3aWR0aD17NDA0fSBoZWlnaHQ9ezc4NH0gZmlsbD1cInVybCgjNGY0ZjQxNWMtYTBlOS00NGMyLTk2MDEtNmRlZDVhMzRhMTNlKVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbic7XHJcbmltcG9ydCBDb250ZW50RmVlZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRlbnRGZWVkJztcclxuaW1wb3J0IEZlYXR1cmUxIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZXMvRmVhdHVyZTEnO1xyXG5pbXBvcnQgRmVhdHVyZTIgZnJvbSAnLi4vY29tcG9uZW50cy9GZWF0dXJlcy9GZWF0dXJlMic7XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxNYWluIENvbnRlbnRGZWVkPXtDb250ZW50RmVlZH0gLz5cclxuICAgICAgICA8RmVhdHVyZTEgLz5cclxuICAgICAgICA8RmVhdHVyZTIgLz5cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhlYWRsZXNzdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
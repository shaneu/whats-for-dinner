require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _server = __webpack_require__(/*! ./server */ "./src/server.js");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server2.default.start(function () {
  return console.log('GraphQL server is running on http://localhost:4000');
});

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphqlYoga = __webpack_require__(/*! graphql-yoga */ "graphql-yoga");

var _prismaBinding = __webpack_require__(/*! prisma-binding */ "prisma-binding");

var resolvers = {
  Query: {
    recipe: (0, _prismaBinding.forwardTo)('prisma'),
    recipes: (0, _prismaBinding.forwardTo)('prisma'),
    user: (0, _prismaBinding.forwardTo)('prisma')
    // recipes(_, args, context, info) {
    //   return context.prisma.query.recipes(
    //     {
    //       where: {
    //         title_contains: args.searchString,
    //       },
    //     },
    //     info
    //   );
    // },
    // recipe(_, args, context, info) {
    //   return context.prisma.query.recipe(
    //     {
    //       where: {
    //         OR: [{ id: args.id }, { title: args.title }],
    //       },
    //     },
    //     info
    //   );
    // },
    // ingredient(_, args, context, info) {
    //   return context.prisma.query.ingredient(
    //     {
    //       where: {
    //         OR: [{ id: args.id }, { name: args.name }],
    //       },
    //     },
    //     info
    //   );
    // },
  },
  Mutation: {
    createRecipe: function createRecipe(_, args, context, info) {
      return context.prisma.mutation.createRecipe({
        data: {
          title: args.title,
          description: args.description,
          prepTime: args.prepTime,
          cookTime: args.cookTime
        }
      }, info);
    },
    deleteRecipe: function deleteRecipe(_, args, context, info) {
      return context.prisma.mutation.deleteRecipe({
        where: {
          id: args.id
        }
      }, info);
    }
  }
};

exports.default = new _graphqlYoga.GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers,
  context: function context(req) {
    return _extends({}, req, {
      prisma: new _prismaBinding.Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: 'http://localhost:4466'
      })
    });
  }
});

/***/ }),

/***/ "graphql-yoga":
/*!*******************************!*\
  !*** external "graphql-yoga" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-yoga");

/***/ }),

/***/ "prisma-binding":
/*!*********************************!*\
  !*** external "prisma-binding" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prisma-binding");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
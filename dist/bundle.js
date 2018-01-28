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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
__webpack_require__(30);
module.exports = __webpack_require__(6);


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\backup\\bittracker\\js\\app.js'\n    at Error (native)");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(32)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * The complete material palette\n * ---\n * @access public\n * @type map\n * @group themes\n */\n/**\n * Theme any css property based on the current palette, accepting a themable\n * value that will give an contrasted\n * ---\n * Usage example:\n *\n * $foo-palette: (\n *   primary: md-get-palette-color(indigo, 500),\n *   accent: md-get-palette-color(pink, 500),\n *   theme: \"light\"\n * );\n *\n * ---\n * @access public\n * ---\n * @param {color} $type —  The desired color based on material palette\n * @param {string} $type —  A valid hue\n */\n/**\n * Get the current theme mode from the current theme\n * ---\n * Usage example:\n *\n * $theme-mode: md-get-theme-mode()\n *\n * ---\n * @access private\n */\n/**\n * Theme any css property based on the current palette, accepting a themable\n * value that will give an contrasted\n * ---\n * Usage example:\n *\n * .md-foo {\n *   min-width: 88px;\n *   height: 40px;\n *   background: md-theme(primary);\n * }\n *\n * ---\n * @access public\n * ---\n * @param {string} $type —  The themable value\n */\n/**\n * Get a color based on type by theme\n * ---\n * Usage example:\n *\n * $color: md-get-color-by-theme(dark, primary)\n *\n * ---\n * @access public\n * ---\n * @param {string} $color-theme —  The theme color | Accepts dark or light\n * @param {string} $type —  The color type\n */\n/**\n * Get a color based on type only\n * ---\n * Usage example:\n *\n * $color1: md-get-color-by-type(background, dark)\n * $color1: md-get-color-by-type(accent)\n *\n * ---\n * @access public\n * ---\n * @param {string} $type —  The color type\n * @param {string} $theme —  The fallback theme\n */\n/**\n * The default theme palette\n * primary: indigo 500 #3f51b5\n * accent: pink 500 #e91e63\n * theme: light\n *\n * It can be used just before importing the Vue Material stylesheet\n *\n * ---\n * @access public\n * @type colormap\n * @group themes\n */\n/**\n * Temporary variable to store all themable values\n * ---\n * @access private\n * @type map\n * @group themes\n */\n/**\n * Map variable to store all themes to be processed by each component\n * ---\n * @access private\n * @type map\n * @group themes\n */\n/**\n * Store the current theme name\n * ---\n * @access private\n * @type string\n * @group themes\n */\n/**\n * The color contrast values\n * ---\n * @access private\n * @type map\n * @group themes\n */\n/**\n * Hightly based on: \"Using Sass to automatically pick text colors\"\n * https://medium.com/dev-channel/using-sass-to-automatically-pick-text-colors-4ba7645d2796\n */\n/**\n * Precomputed linear color channel values, for use in contrast calculations.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n * ---\n *\n *  Algorithm, for c in 0 to 255:\n *  f(c) {\n *    c = c / 255;\n *    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n *  }\n *\n *  This lookup table is needed since there is no `pow` in SASS.\n *\n * ---\n * @access private\n * @type Map\n * @group themes\n */\n/**\n * Calculate the luminance for a color.\n * ---\n * @access private\n * ---\n * @param {string} $color —  The color to be analysed\n */\n/**\n * Calculate the contrast ratio between two colors.\n * ---\n * @access private\n * ---\n * @param {string} $bg —  The bg color\n * @param {string} $fg —  The fg color to be compared\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns dark or light depending on the contrast ratio.\n * ---\n * @access private\n * ---\n * @param {string} $color —  The desired color to be compared\n */\n/**\n * Override extending the default palette giving new values. It will extend\n * the default values of the palette if has a property missing.\n * ---\n * Usage example:\n *\n * @include md-override-palette ((\n *   accent: blue,\n *   theme: \"dark\"\n * ))\n *\n * ---\n * @access public\n * @param {map} $palette —  The new palette\n */\n/**\n * Create a new theme based on a given palette. It will extend the default\n * values of the palette if has a property missing.\n * ---\n * Usage example:\n *\n * @include md-register-theme(\"alternative\", (\n *   primary: #212121,\n *   accent: #CDDC39,\n *   theme: dark\n * ));\n *\n * ---\n * @access public\n * @param {string} $name —  The theme name to be used with the Vue Material\n * @param {map} $palette [$md-default-palette] —  The theme palette\n */\n/**\n * Theme pieces of a given scss code for all pre registered themes.\n * ---\n * Usage example:\n *\n * .md-button {\n *   min-width: 88px;\n *   height: 40px;\n *   display: inline-block;\n *   border-radius: 2px;\n *   transition: .3s ease;\n *\n *   @include md-theme-component() {\n *     background: md-theme(primary);\n *     color: md-theme(text-primary);\n *   }\n *\n *   &.md-accent {\n *     @include md-theme-component() {\n *       background: md-theme(accent);\n *       color: md-theme(text-accent);\n *     };\n *   }\n * }\n */\n/**\n * Theme pieces of a given scss code for all pre registered themes based on parent.\n * ---\n * Usage example:\n *\n * .md-foo {\n *   @include md-theme-component-relative() {\n *     @include md-theme-property(background, primary);\n *   }\n * }\n */\n/**\n * Theme a single css property\n * ---\n * Usage example:\n *\n * .md-button {\n *   min-width: 88px;\n *   height: 40px;\n *   display: inline-block;\n *   border-radius: 2px;\n *   transition: .3s ease;\n *\n *   @include md-theme-component() {\n *     @include md-theme-property(background, primary);\n *     @include md-theme-property(color, text-primary, primary);\n *   }\n *\n *   &.md-accent {\n *     @include md-theme-component() {\n *       @include md-theme-property(background, accent);\n *       @include md-theme-property(color, text-primary, accent);\n *     }\n *   }\n * }\n *\n * ---\n * @access public\n * @param {string} $property —  The css property\n * @param {string} $type —  A palette type\n * @param {string} $background —  The background color to analyse contrast\n * @param {number} $opacity —  The opacity amount\n */\n/**\n * Theme a single css property darkening the color by a certain amount\n * ---\n * Usage example:\n *\n * .md-button {\n *   min-width: 88px;\n *   height: 40px;\n *   display: inline-block;\n *   border-radius: 2px;\n *   transition: .3s ease;\n *\n *   @include md-theme-component() {\n *     @include md-theme-property-darken(background, primary, background, 10%);\n *     @include md-theme-property(color, text-primary, primary);\n *   }\n * }\n *\n * ---\n * @access public\n * @param {string} $property —  The css property\n * @param {string} $type —  A palette type\n * @param {string} $background —  The background color to analyse contrast\n * @param {string} $darken —  The darken amount to apply to the color\n */\n/**\n * Theme a single css property by\n * ---\n * Usage example:\n *\n * .md-button {\n *   min-width: 88px;\n *   height: 40px;\n *   display: inline-block;\n *   border-radius: 2px;\n *   transition: .3s ease;\n *\n *   @include md-theme-component() {\n *     @include md-theme-property-by-hue(background, grey, 100, toolbar, background);\n *     @include md-theme-property(color, text-primary, background);\n *   }\n * }\n *\n * ---\n * @access public\n * @param {string} $property —  The css property\n * @param {string} $color —  A valid material palette color name\n * @param {string} $hue —  The hue amount to get the hex color\n * @param {string} $type —  The type of variable\n * @param {string} $variant —  The type of constrasted variable\n */\n:root {\n  --md-theme-default-primary: #ff1744;\n  --md-theme-default-accent: #ff5252;\n  --md-theme-default-theme: \"light\"; }\n\n.md-theme-default :not(input):not(textarea)::selection {\n  background-color: #ff5252;\n  background-color: var(--md-theme-default-accent-on-background, #ff5252);\n  color: #fff;\n  color: var(--md-theme-default-text-primary-on-accent, #fff); }\n\n.md-theme-default a:not(.md-button) {\n  color: #ff1744;\n  color: var(--md-theme-default-primary-on-background, #ff1744); }\n  .md-theme-default a:not(.md-button):hover {\n    color: rgba(255, 23, 68, 0.8);\n    color: var(--md-theme-default-primary-on-background, rgba(255, 23, 68, 0.8)); }\n  .md-theme-default a:not(.md-button).md-accent {\n    color: #ff5252;\n    color: var(--md-theme-default-accent-on-background, #ff5252); }\n    .md-theme-default a:not(.md-button).md-accent:hover {\n      color: rgba(255, 82, 82, 0.8);\n      color: var(--md-theme-default-accent-on-background, rgba(255, 82, 82, 0.8)); }\n\nhtml.md-theme-default {\n  background-color: #fafafa;\n  background-color: var(--md-theme-default-background-variant, #fafafa);\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--md-theme-default-text-primary-on-background-variant, rgba(0, 0, 0, 0.87)); }\n\n.md-theme-default .md-caption, .md-theme-default\n.md-display-1, .md-theme-default\n.md-display-2, .md-theme-default\n.md-display-3, .md-theme-default\n.md-display-4 {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--md-theme-default-text-accent-on-background-variant, rgba(0, 0, 0, 0.54)); }\n\n.md-scrollbar.md-theme-default::-webkit-scrollbar-corner, .md-scrollbar.md-theme-default::-webkit-scrollbar-track {\n  background: #e1e1e1;\n  background: var(--md-theme-default-scrollbar-background-on-background-variant, #e1e1e1); }\n\n.md-scrollbar.md-theme-default::-webkit-scrollbar-thumb {\n  background: #757575;\n  background: var(--md-theme-default-scrollbar-on-background-variant, #757575); }\n\nbody {\n  position: relative;\n  height: 100%; }\n\n.md-drawer {\n  width: 230px;\n  max-width: calc(100vw - 125px); }\n\n.md-app {\n  width: 100%; }\n\ndiv#app {\n  height: 100%;\n  position: relative;\n  display: flex; }\n\n.green {\n  color: green; }\n\n.red {\n  color: red; }\n", ""]);

// exports


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(33);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 33:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {"request":{"currencies":[{"fCurrency":"XRP","sCurrency":"USD"},{"fCurrency":"BTC","sCurrency":"USD"},{"fCurrency":"BTC","sCurrency":"XRP"}]}}

/***/ })

/******/ });
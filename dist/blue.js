(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _components = __webpack_require__(111);
	
	var _components2 = _interopRequireDefault(_components);
	
	__webpack_require__(314);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _components2.default;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _n3Alert = __webpack_require__(112);
	
	var _n3Alert2 = _interopRequireDefault(_n3Alert);
	
	var _n3Carousel = __webpack_require__(119);
	
	var _n3Carousel2 = _interopRequireDefault(_n3Carousel);
	
	var _n3Accordion = __webpack_require__(124);
	
	var _n3Accordion2 = _interopRequireDefault(_n3Accordion);
	
	var _n3Affix = __webpack_require__(127);
	
	var _n3Affix2 = _interopRequireDefault(_n3Affix);
	
	var _n3Aside = __webpack_require__(130);
	
	var _n3Aside2 = _interopRequireDefault(_n3Aside);
	
	var _n3CheckboxGroup = __webpack_require__(134);
	
	var _n3CheckboxGroup2 = _interopRequireDefault(_n3CheckboxGroup);
	
	var _n3Checkbox = __webpack_require__(136);
	
	var _n3Checkbox2 = _interopRequireDefault(_n3Checkbox);
	
	var _n3CheckboxBtn = __webpack_require__(143);
	
	var _n3CheckboxBtn2 = _interopRequireDefault(_n3CheckboxBtn);
	
	var _n3Cascader = __webpack_require__(156);
	
	var _n3Cascader2 = _interopRequireDefault(_n3Cascader);
	
	var _n3ToastMethod = __webpack_require__(165);
	
	var _n3ToastMethod2 = _interopRequireDefault(_n3ToastMethod);
	
	var _n3Label = __webpack_require__(169);
	
	var _n3Label2 = _interopRequireDefault(_n3Label);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _n3InputNumber = __webpack_require__(172);
	
	var _n3InputNumber2 = _interopRequireDefault(_n3InputNumber);
	
	var _n3Textarea = __webpack_require__(175);
	
	var _n3Textarea2 = _interopRequireDefault(_n3Textarea);
	
	var _n3Datepicker = __webpack_require__(178);
	
	var _n3Datepicker2 = _interopRequireDefault(_n3Datepicker);
	
	var _n3Timepicker = __webpack_require__(181);
	
	var _n3Timepicker2 = _interopRequireDefault(_n3Timepicker);
	
	var _n3Datetimepicker = __webpack_require__(191);
	
	var _n3Datetimepicker2 = _interopRequireDefault(_n3Datetimepicker);
	
	var _n3Dropdown = __webpack_require__(194);
	
	var _n3Dropdown2 = _interopRequireDefault(_n3Dropdown);
	
	var _n3Modal = __webpack_require__(197);
	
	var _n3Modal2 = _interopRequireDefault(_n3Modal);
	
	var _n3Option = __webpack_require__(200);
	
	var _n3Option2 = _interopRequireDefault(_n3Option);
	
	var _n3Panel = __webpack_require__(203);
	
	var _n3Panel2 = _interopRequireDefault(_n3Panel);
	
	var _n3Popover = __webpack_require__(206);
	
	var _n3Popover2 = _interopRequireDefault(_n3Popover);
	
	var _n3PopConfirm = __webpack_require__(209);
	
	var _n3PopConfirm2 = _interopRequireDefault(_n3PopConfirm);
	
	var _n3Progressbar = __webpack_require__(212);
	
	var _n3Progressbar2 = _interopRequireDefault(_n3Progressbar);
	
	var _n3Progress = __webpack_require__(215);
	
	var _n3Progress2 = _interopRequireDefault(_n3Progress);
	
	var _n3Radio = __webpack_require__(218);
	
	var _n3Radio2 = _interopRequireDefault(_n3Radio);
	
	var _n3RadioBtn = __webpack_require__(221);
	
	var _n3RadioBtn2 = _interopRequireDefault(_n3RadioBtn);
	
	var _n3RadioGroup = __webpack_require__(224);
	
	var _n3RadioGroup2 = _interopRequireDefault(_n3RadioGroup);
	
	var _n3Select = __webpack_require__(227);
	
	var _n3Select2 = _interopRequireDefault(_n3Select);
	
	var _n3Tab = __webpack_require__(230);
	
	var _n3Tab2 = _interopRequireDefault(_n3Tab);
	
	var _n3Tabs = __webpack_require__(233);
	
	var _n3Tabs2 = _interopRequireDefault(_n3Tabs);
	
	var _n3Tooltip = __webpack_require__(185);
	
	var _n3Tooltip2 = _interopRequireDefault(_n3Tooltip);
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3ButtonGroup = __webpack_require__(236);
	
	var _n3ButtonGroup2 = _interopRequireDefault(_n3ButtonGroup);
	
	var _n3Container = __webpack_require__(239);
	
	var _n3Container2 = _interopRequireDefault(_n3Container);
	
	var _n3Row = __webpack_require__(242);
	
	var _n3Row2 = _interopRequireDefault(_n3Row);
	
	var _n3Nav = __webpack_require__(245);
	
	var _n3Nav2 = _interopRequireDefault(_n3Nav);
	
	var _n3SubNav = __webpack_require__(248);
	
	var _n3SubNav2 = _interopRequireDefault(_n3SubNav);
	
	var _n3NavItem = __webpack_require__(251);
	
	var _n3NavItem2 = _interopRequireDefault(_n3NavItem);
	
	var _n3Column = __webpack_require__(254);
	
	var _n3Column2 = _interopRequireDefault(_n3Column);
	
	var _n3Switch = __webpack_require__(257);
	
	var _n3Switch2 = _interopRequireDefault(_n3Switch);
	
	var _n3MultipleInput = __webpack_require__(260);
	
	var _n3MultipleInput2 = _interopRequireDefault(_n3MultipleInput);
	
	var _n3SimplePagination = __webpack_require__(266);
	
	var _n3SimplePagination2 = _interopRequireDefault(_n3SimplePagination);
	
	var _n3Step = __webpack_require__(269);
	
	var _n3Step2 = _interopRequireDefault(_n3Step);
	
	var _n3DataTable = __webpack_require__(272);
	
	var _n3DataTable2 = _interopRequireDefault(_n3DataTable);
	
	var _n3Loading = __webpack_require__(147);
	
	var _n3Loading2 = _interopRequireDefault(_n3Loading);
	
	var _n3Timeline = __webpack_require__(275);
	
	var _n3Timeline2 = _interopRequireDefault(_n3Timeline);
	
	var _n3TimelineItem = __webpack_require__(277);
	
	var _n3TimelineItem2 = _interopRequireDefault(_n3TimelineItem);
	
	var _n3Typeahead = __webpack_require__(262);
	
	var _n3Typeahead2 = _interopRequireDefault(_n3Typeahead);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Tags = __webpack_require__(281);
	
	var _n3Tags2 = _interopRequireDefault(_n3Tags);
	
	var _n3Breadcrumb = __webpack_require__(284);
	
	var _n3Breadcrumb2 = _interopRequireDefault(_n3Breadcrumb);
	
	var _n3BreadcrumbItem = __webpack_require__(287);
	
	var _n3BreadcrumbItem2 = _interopRequireDefault(_n3BreadcrumbItem);
	
	var _n3Form = __webpack_require__(290);
	
	var _n3Form2 = _interopRequireDefault(_n3Form);
	
	var _n3FormItem = __webpack_require__(293);
	
	var _n3FormItem2 = _interopRequireDefault(_n3FormItem);
	
	var _n3Slider = __webpack_require__(183);
	
	var _n3Slider2 = _interopRequireDefault(_n3Slider);
	
	var _n3Slide = __webpack_require__(296);
	
	var _n3Slide2 = _interopRequireDefault(_n3Slide);
	
	var _n3Tree = __webpack_require__(299);
	
	var _n3Tree2 = _interopRequireDefault(_n3Tree);
	
	var _n3Card = __webpack_require__(302);
	
	var _n3Card2 = _interopRequireDefault(_n3Card);
	
	var _n3Uploader = __webpack_require__(305);
	
	var _n3Uploader2 = _interopRequireDefault(_n3Uploader);
	
	var _transition = __webpack_require__(308);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Components = {
	  n3FormItem: _n3FormItem2.default,
	  n3Form: _n3Form2.default,
	  n3Alert: _n3Alert2.default,
	  n3Carousel: _n3Carousel2.default,
	  n3Accordion: _n3Accordion2.default,
	  n3Container: _n3Container2.default,
	  n3Loading: _n3Loading2.default,
	  n3Slide: _n3Slide2.default,
	  n3Row: _n3Row2.default,
	  n3Column: _n3Column2.default,
	  n3Switch: _n3Switch2.default,
	  n3Button: _n3Button2.default,
	  n3ButtonGroup: _n3ButtonGroup2.default,
	  n3Affix: _n3Affix2.default,
	  n3Aside: _n3Aside2.default,
	  n3Checkbox: _n3Checkbox2.default,
	  n3CheckboxBtn: _n3CheckboxBtn2.default,
	  n3CheckboxGroup: _n3CheckboxGroup2.default,
	  n3Datepicker: _n3Datepicker2.default,
	  n3Timepicker: _n3Timepicker2.default,
	  n3Datetimepicker: _n3Datetimepicker2.default,
	  n3Uploader: _n3Uploader2.default,
	  n3Cascader: _n3Cascader2.default,
	  n3Label: _n3Label2.default,
	  n3Input: _n3Input2.default,
	  n3Textarea: _n3Textarea2.default,
	  n3Dropdown: _n3Dropdown2.default,
	  n3Modal: _n3Modal2.default,
	  n3Option: _n3Option2.default,
	  n3Nav: _n3Nav2.default,
	  n3SubNav: _n3SubNav2.default,
	  n3NavItem: _n3NavItem2.default,
	  n3Panel: _n3Panel2.default,
	  n3InputNumber: _n3InputNumber2.default,
	  n3Popover: _n3Popover2.default,
	  n3PopConfirm: _n3PopConfirm2.default,
	  n3Progressbar: _n3Progressbar2.default,
	  n3Progress: _n3Progress2.default,
	  n3Card: _n3Card2.default,
	  n3RadioGroup: _n3RadioGroup2.default,
	  n3Radio: _n3Radio2.default,
	  n3RadioBtn: _n3RadioBtn2.default,
	  n3Select: _n3Select2.default,
	  n3Icon: _n3Icon2.default,
	  n3Tree: _n3Tree2.default,
	  n3Slider: _n3Slider2.default,
	  n3Tab: _n3Tab2.default,
	  n3TimelineItem: _n3TimelineItem2.default,
	  n3Timeline: _n3Timeline2.default,
	  n3MultipleInput: _n3MultipleInput2.default,
	  n3Tabs: _n3Tabs2.default,
	  n3Tooltip: _n3Tooltip2.default,
	  n3Typeahead: _n3Typeahead2.default,
	  n3SimplePagination: _n3SimplePagination2.default,
	  n3Step: _n3Step2.default,
	  n3Tags: _n3Tags2.default,
	  n3DataTable: _n3DataTable2.default,
	  n3Breadcrumb: _n3Breadcrumb2.default,
	  n3BreadcrumbItem: _n3BreadcrumbItem2.default
	};
	
	var install = function install(Vue) {
	  for (var i in Components) {
	    Vue.component(i, Components[i]);
	  }
	
	  // for (let i in transition) {
	  //   Vue.transition(i, transition[i])
	  // }
	
	  Vue.mixin({
	    methods: {
	      n3Toast: _n3ToastMethod2.default
	    }
	  });
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}
	
	Components.install = install;
	
	module.exports = Components;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(118)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Alert.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Alert.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Alert.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Alert.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Alert.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div
	//    v-show="show"
	//    :class="classObj"
	//     transition="fade"
	//     :style="{width:width}">
	
	//     <n3-icon class="{{prefixCls}}-alert-icon" :type="iconType" ></n3-icon>
	
	//     <button v-if="dismissable" type="button" class="{{prefixCls}}-close"
	//       @click="_handleClose" >
	//       <span>&times;</span>
	//     </button>
	
	//     <div v-if="description" class="{{prefixCls}}-alert-content">
	//       <h4>{{message}}</h4>
	//       <p><slot></slot></p>
	//     </div>
	//     <span v-else>
	//         <slot></slot>
	//     </span>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    dismissable: {
	      type: Boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      default: 0
	    },
	    width: {
	      type: String
	    },
	    small: {
	      type: Boolean,
	      default: false
	    },
	    placement: {
	      type: String,
	      default: ''
	    },
	    message: {
	      type: String
	    },
	    description: {
	      type: Boolean,
	      default: false
	    },
	    onClose: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  methods: {
	    _handleClose: function _handleClose(e) {
	      this.show = false;
	      if (_type2.default.isFunction(this.onClose)) {
	        this.onClose();
	      }
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (val) {
	        if (this.placement === 'top' || this.placement === 'bottom') {
	          this.$el.style.marginLeft = -1 * (this.$el.offsetWidth / 2) + 'px';
	        } else if (this.placement === 'center') {
	          this.$el.style.marginLeft = -1 * (this.$el.offsetWidth / 2) + 'px';
	          this.$el.style.marginTop = -1 * (this.$el.offsetHeight / 2) + 'px';
	        }
	      }
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && !!this.duration) {
	        this._timeout = setTimeout(function () {
	          _this.show = false;
	        }, this.duration);
	      }
	    }
	  },
	  computed: {
	    iconType: function iconType() {
	      var type = this.type;
	
	      var map = {
	        success: 'check-circle-o',
	        danger: 'times-circle-o',
	        warning: 'exclamation-circle',
	        info: 'info-circle'
	      };
	      return map[type];
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          type = this.type,
	          placement = this.placement,
	          small = this.small;
	
	      var klass = {};
	
	      klass[prefixCls + '-alert-small'] = small;
	      klass[prefixCls + '-alert'] = true;
	      klass[prefixCls + '-alert-' + type] = true;
	      klass[prefixCls + '-' + placement] = true;
	
	      return klass;
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default
	  }
	};
	// </script>

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	
	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return objectToString(e) === '[object Error]' || e instanceof Error;
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
	  typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	function isPromise(promise) {
	  return isObject(promise) && isFunction(promise.then) && isFunction(promise.catch);
	}
	exports.isPromise = isPromise;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(116)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(117)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Icon.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Icon.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Icon.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Icon.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Icon.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <i :class="[prefixCls + '-fa',prefixCls +'-fa-'+type]" :style="{fontSize:size,color:color}"></i>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    size: {
	      type: String
	    },
	    color: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<i :class=\"[prefixCls + '-fa',prefixCls +'-fa-'+type]\" :style=\"{fontSize:size,color:color}\"></i>";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<div\n   v-show=\"show\"\n   :class=\"classObj\"\n    transition=\"fade\"\n    :style=\"{width:width}\">\n\n    <n3-icon class=\"{{prefixCls}}-alert-icon\" :type=\"iconType\" ></n3-icon>\n\n    <button v-if=\"dismissable\" type=\"button\" class=\"{{prefixCls}}-close\"\n      @click=\"_handleClose\" >\n      <span>&times;</span>\n    </button>\n\n    <div v-if=\"description\" class=\"{{prefixCls}}-alert-content\">\n      <h4>{{message}}</h4>\n      <p><slot></slot></p>\n    </div>\n    <span v-else>\n        <slot></slot>\n    </span>\n  </div>";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(120)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(123)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Carousel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Carousel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Carousel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Carousel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Carousel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _element = __webpack_require__(122);
	
	var _element2 = _interopRequireDefault(_element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // <template>
	// <div class="{{prefixCls}}-carousel {{prefixCls}}-slide">
	//   <ol class="{{prefixCls}}-carousel-indicators" v-show="indicators">
	//     <li v-for="i in indicator" 
	//       transition="fade"
	//       @click="handleIndicatorClick($index)" 
	//       :class="[$index === activeIndex ? prefixCls + '-carousel-active'  : '']">
	//     </li>
	//   </ol>
	//   <div class="{{prefixCls}}-carousel-inner">
	//     <slot></slot>
	//   </div>
	//   <a v-show="controls" class="{{prefixCls}}-carousel-left {{prefixCls}}-carousel-control" @click="prevClick">
	//     <n3-icon type="chevron-left"></n3-icon>
	//   </a>
	//   <a v-show="controls" class="{{prefixCls}}-carousel-right {{prefixCls}}-carousel-control" @click="nextClick">
	//     <n3-icon type="chevron-right"></n3-icon>
	//   </a>
	// </div>
	// </template>
	
	// <script>
	
	
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 5000
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      intervalID: '',
	      indicator: [],
	      activeIndex: 0,
	      isAnimating: false
	    };
	  },
	
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.' + this.prefixCls + '-carousel-item');
	    }
	  },
	  watch: {
	    activeIndex: function activeIndex(newVal, oldVal) {
	      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal);
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default
	  },
	  methods: {
	    handleIndicatorClick: function handleIndicatorClick(index) {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex = index;
	    },
	    slide: function slide(direction, selected, prev) {
	      var _this = this;
	
	      if (this._prevSelectedEvent) this._prevSelectedEvent.remove();
	      if (this._selectedEvent) this._selectedEvent.remove();
	
	      var prevSelectedEl = this.slider[prev];
	      var selectedEl = this.slider[selected];
	      var transitionendFn = function transitionendFn() {
	        [].concat(_toConsumableArray(_this.slider)).forEach(function (el) {
	          _element2.default.setClass(el, _this.prefixCls + '-carousel-item');
	        });
	        _element2.default.addClass(selectedEl, _this.prefixCls + '-carousel-active');
	        _this.isAnimating = false;
	      };
	
	      direction === 'left' ? _element2.default.addClass(selectedEl, this.prefixCls + '-carousel-next') : _element2.default.addClass(selectedEl, this.prefixCls + '-carousel-prev');
	
	      this._prevSelectedEvent = _EventListener2.default.listen(prevSelectedEl, 'transitionend', transitionendFn);
	      this._selectedEvent = _EventListener2.default.listen(selectedEl, 'transitionend', transitionendFn);
	      // remove animation for IE9
	      if (_element2.default.isIE9) {
	        setTimeout(function () {
	          transitionendFn();
	        });
	      }
	      _element2.default.addClass(prevSelectedEl, this.prefixCls + '-carousel-' + direction);
	      _element2.default.addClass(selectedEl, this.prefixCls + '-carousel-' + direction);
	    },
	    nextClick: function nextClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0;
	    },
	    prevClick: function prevClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var el = this.$el;
	    var self = this;
	
	    function intervalManager(flag, func, time) {
	      flag ? self.intervalID = setInterval(func, time) : clearInterval(self.intervalID);
	    }
	    if (this.interval) {
	      intervalManager(true, this.nextClick, this.interval);
	      el.addEventListener('mouseenter', function () {
	        return intervalManager(false);
	      });
	      el.addEventListener('mouseleave', function () {
	        return intervalManager(true, _this2.nextClick, _this2.interval);
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.intervalID) clearInterval(this.intervalID);
	  }
	};
	// </script>

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports.default = EventListener;

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if ((typeof classname === 'undefined' ? 'undefined' : _typeof(classname)) === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	exports.default = {
	  getClass: getClass,
	  removeClass: removeClass,
	  addClass: addClass,
	  setClass: setClass,
	  inBrowser: inBrowser,
	  UA: UA,
	  isIE9: isIE9
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-carousel {{prefixCls}}-slide\">\n  <ol class=\"{{prefixCls}}-carousel-indicators\" v-show=\"indicators\">\n    <li v-for=\"i in indicator\" \n      transition=\"fade\"\n      @click=\"handleIndicatorClick($index)\" \n      :class=\"[$index === activeIndex ? prefixCls + '-carousel-active'  : '']\">\n    </li>\n  </ol>\n  <div class=\"{{prefixCls}}-carousel-inner\">\n    <slot></slot>\n  </div>\n  <a v-show=\"controls\" class=\"{{prefixCls}}-carousel-left {{prefixCls}}-carousel-control\" @click=\"prevClick\">\n    <n3-icon type=\"chevron-left\"></n3-icon>\n  </a>\n  <a v-show=\"controls\" class=\"{{prefixCls}}-carousel-right {{prefixCls}}-carousel-control\" @click=\"nextClick\">\n    <n3-icon type=\"chevron-right\"></n3-icon>\n  </a>\n</div>";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(125)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(126)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Accordion.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Accordion.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Accordion.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Accordion.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Accordion.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    effect: {
	      type: String,
	      default: 'collapse'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  events: {
	    'n3@paneltoggle': function n3Paneltoggle(child) {
	      var children = this.$children;
	      var ret = [];
	
	      if (this.oneAtATime) {
	        children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	
	      children.forEach(function (item) {
	        if (item.index) {
	          ret.push({
	            index: item.index,
	            isOpen: item.isOpen,
	            header: item.header
	          });
	        }
	      });
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(ret);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-panel-group\">\n    <slot></slot>\n  </div>";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(128)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(129)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Affix.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Affix.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Affix.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Affix.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Affix.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {}
	    };
	  },
	
	  methods: {
	    scrolling: function scrolling() {
	      var scrollTop = this.getScroll(window, true);
	      var elementOffset = this.getOffset(this.$el);
	      if (!this.affixed && scrollTop > elementOffset.top) {
	        this.affixed = true;
	        this.styles = {
	          top: this.offset + 'px',
	          left: elementOffset.left + 'px',
	          width: this.$el.offsetWidth + 'px',
	          position: 'fixed'
	        };
	      }
	      if (this.affixed && scrollTop < elementOffset.top) {
	        this.affixed = false;
	        this.styles = {};
	      }
	    },
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	  },
	  ready: function ready() {
	    this._scrollEvent = _EventListener2.default.listen(window, 'scroll', this.scrolling);
	    this._resizeEvent = _EventListener2.default.listen(window, 'resize', this.scrolling);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._scrollEvent) {
	      this._scrollEvent.remove();
	    }
	    if (this._resizeEvent) {
	      this._resizeEvent.remove();
	    }
	  }
	};
	// </script>
	// <template>
	// <div>
	// <div :style="styles">
	//   <slot></slot>
	// </div>
	// </div>
	// </template>
	// <script>

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<div>\n<div :style=\"styles\">\n  <slot></slot>\n</div>\n</div>";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(131)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(133)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Aside.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Aside.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Aside.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Aside.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Aside.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _getScrollBarWidth = __webpack_require__(132);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _element = __webpack_require__(122);
	
	var _element2 = _interopRequireDefault(_element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div 
	//     :style="{width:width}"
	//     :class="classObj"
	//     v-show="show"
	//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
	//     <div class="{{prefixCls}}-aside-dialog">
	//       <div class="{{prefixCls}}-aside-content">
	//         <div class="{{prefixCls}}-aside-header">
	//           <button type="button" class="{{prefixCls}}-close" @click='close'><span>&times;</span></button>
	//           <h4 class="{{prefixCls}}-aside-title">{{header}}</h4>
	//         </div>
	//         <div class="{{prefixCls}}-aside-body">
	//           <slot></slot>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      require: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      default: 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: String,
	      default: '320px'
	    },
	    onShow: {
	      type: Function
	    },
	    onHide: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          placement = this.placement;
	
	      var klass = {};
	
	      klass[prefixCls + '-aside'] = true;
	      klass[prefixCls + '-aside-left'] = placement === 'left';
	      klass[prefixCls + '-aside-right'] = placement === 'right';
	
	      return klass;
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      var prefixCls = this.prefixCls;
	      var body = document.body;
	      backdrop.className = prefixCls + '-aside-backdrop';
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        body.appendChild(backdrop);
	        _element2.default.addClass(body, prefixCls + '-modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        backdrop.className += ' ' + prefixCls + '-aside-in';
	        this._clickEvent = _EventListener2.default.listen(backdrop, 'click', this.close);
	        if (_type2.default.isFunction(this.onShow)) {
	          this.onShow();
	        }
	      } else {
	        if (this._clickEvent) this._clickEvent.remove();
	        backdrop = document.querySelector('.' + prefixCls + '-aside-backdrop');
	        backdrop.className = prefixCls + '-aside-backdrop';
	        setTimeout(function () {
	          _element2.default.removeClass(body, prefixCls + '-modal-open');
	          body.style.paddingRight = '0';
	          body.removeChild(backdrop);
	        }, 300);
	        if (_type2.default.isFunction(this.onHide)) {
	          this.onHide();
	        }
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>

/***/ },
/* 132 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<div \n    :style=\"{width:width}\"\n    :class=\"classObj\"\n    v-show=\"show\"\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\n    <div class=\"{{prefixCls}}-aside-dialog\">\n      <div class=\"{{prefixCls}}-aside-content\">\n        <div class=\"{{prefixCls}}-aside-header\">\n          <button type=\"button\" class=\"{{prefixCls}}-close\" @click='close'><span>&times;</span></button>\n          <h4 class=\"{{prefixCls}}-aside-title\">{{header}}</h4>\n        </div>\n        <div class=\"{{prefixCls}}-aside-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(135)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(155)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Checkbox = __webpack_require__(136);
	
	var _n3Checkbox2 = _interopRequireDefault(_n3Checkbox);
	
	var _n3CheckboxBtn = __webpack_require__(143);
	
	var _n3CheckboxBtn2 = _interopRequireDefault(_n3CheckboxBtn);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    type: {
	      type: String,
	      default: 'checkbox'
	    },
	    options: {
	      type: Array
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	
	  methods: {
	    init: function init() {
	      var children = this.$children;
	      var ret = [];
	      children.forEach(function (item) {
	        item.checked ? ret.push(item.value) : '';
	      });
	      this.value = ret;
	    }
	  },
	  events: {
	    'n3@checkboxChange': function n3CheckboxChange(val) {
	      this.init();
	    }
	  },
	
	  watch: {
	    value: function value() {
	      this.$broadcast('n3@checkboxgroupChange', this.value);
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    },
	    options: function options() {
	      this.init();
	    }
	  },
	
	  ready: function ready() {
	    this.init();
	  },
	
	
	  components: {
	    n3Checkbox: _n3Checkbox2.default,
	    n3CheckboxBtn: _n3CheckboxBtn2.default,
	    validate: _validate2.default
	  }
	
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-btn-group {{prefixCls}}-checkbox-group">
	//     <template v-if="options">
	//       <n3-checkbox
	//         v-if="type==='checkbox'" 
	//         v-for="item in options"
	//         :value="item.value"
	//         :checked="item.checked"
	//         :disabled="item.disabled">
	//         {{item.label}}
	//       </n3-checkbox>
	
	//        <n3-checkbox-btn
	//         v-if="type==='button'" 
	//         v-for="item in options"
	//         :value="item.value"
	//         :checked="item.checked"
	//         :disabled="item.disabled">
	//        {{item.label}}
	//       </n3-checkbox-btn>
	//     </template>
	//     <template v-else>
	//     <slot></slot>
	//     </template>
	
	//     <validate
	//       :name="name"
	//       :rules="rules"
	//       :valid-status.sync="validStatus"
	//       :custom-validate="customValidate" 
	//       :value="value"
	//       :results.sync="validateResults">
	//     </validate>
	
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(142)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Checkbox.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Checkbox.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Checkbox.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Checkbox.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Checkbox.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <label :class="wrapClass">
	//   <span>
	//     <span class="{{prefixCls}}-checkbox-inner">
	//       <n3-icon type="check" color="#fff" class="{{prefixCls}}-checkbox-inner-check"></n3-icon>
	//     </span>
	//     <input
	//       type="checkbox"
	//       class="{{prefixCls}}-checkbox-input"
	//       :disabled="disabled"
	//       :checked="checked"
	//       @click="handleClick"/>
	//   </span>
	//   <span><slot></slot></span>  
	//   <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="checked"
	//     :results.sync="validateResults">
	//   </validate>
	//   </label>
	// </template>
	
	// <script>
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false,
	      twoway: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    validate: _validate2.default,
	    n3Icon: _n3Icon2.default
	  },
	  events: {
	    'n3@checkboxgroupChange': function n3CheckboxgroupChange(val) {
	      this.checked = val.indexOf(this.value) > -1;
	    }
	  },
	  computed: {
	    wrapClass: function wrapClass() {
	      var klass = {};
	      var prefixCls = this.prefixCls,
	          checked = this.checked,
	          disabled = this.disabled;
	
	
	      klass[prefixCls + '-checkbox-label'] = true;
	      klass[prefixCls + '-checkbox-checked'] = checked;
	      klass[prefixCls + '-checkbox-disabled'] = disabled;
	
	      return klass;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.checked = !this.checked;
	      this.$dispatch('n3@checkboxChange', this);
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.checked);
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: {
	      type: String
	    },
	    customValidate: {
	      type: Function
	    },
	    rules: {
	      type: Array
	    },
	    validStatus: {
	      type: String,
	      twoway: true,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      validateResults: {}
	    };
	  }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(140)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(141)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./validate.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./validate.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./validate.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./validate.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./validate.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {},
	    customValidate: {
	      type: Function
	    },
	    rules: {
	      type: Array
	    },
	    name: {
	      type: String
	    },
	    validStatus: {
	      type: String,
	      twoWay: true
	    },
	    results: {
	      type: Object,
	      twoWay: true
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      tips: '',
	      validate: false,
	      status: ''
	    };
	  },
	
	  computed: {
	    _results: {
	      get: function get() {
	        return this.results;
	      },
	      set: function set(val, oldVal) {
	        var self = this;
	        var tips = '';
	        var status = '';
	
	        for (var key in val) {
	          var obj = val[key];
	          if (_type2.default.isObject(obj)) {
	            obj.tips ? tips += obj.tips + '  ' : '';
	            if (obj.validStatus !== 'success') {
	              status = 'error';
	            }
	          }
	        }
	
	        status !== 'error' ? status = 'success' : 0;
	
	        self.status = status;
	
	        if (self.validate) {
	          self.validStatus = self.status;
	        }
	
	        var isvalid = true;
	        self.tips = tips;
	
	        for (var i in val) {
	          var validStatus = val[i]['validStatus'];
	          if (validStatus === 'error') {
	            isvalid = false;
	            break;
	          }
	        }
	
	        var newVal = Object.assign({}, val);
	        newVal.isvalid = isvalid;
	
	        if (this.isEqual(newVal, this.results)) {
	          return;
	        }
	
	        this.results = newVal;
	
	        self.$dispatch('n3@validateChange', {
	          name: self.name,
	          result: self.results
	        });
	      }
	    }
	  },
	  watch: {
	    value: {
	      handler: function handler(newVal, oldVal) {
	        this.valid(newVal);
	      },
	
	      immediate: true
	    }
	  },
	  events: {
	    'n3@openValidate': function n3OpenValidate(val) {
	      this.validate = val;
	      val ? this.validStatus = this.status : this.validStatus = '';
	    }
	  },
	  methods: {
	    isEqual: function isEqual(a, b) {
	      var e = true;
	      var propsA = Object.keys(a);
	      var propsB = Object.keys(b);
	
	      if (propsA.length != propsB.length) {
	        return false;
	      }
	
	      propsA.forEach(function (i) {
	        if (a[i]['validStatus'] != b[i]['validStatus']) {
	          e = false;
	          return false;
	        }
	      });
	
	      return e;
	    },
	    setResult: function setResult(key, value) {
	      var o = Object.assign({}, this.results);
	      o[key] = value;
	      this._results = o;
	    },
	    valid: function valid(val) {
	      if (this.rules || _type2.default.isFunction(this.customValidate)) {
	        this.rulesValid(val);
	      }
	    },
	    rulesItemValid: function rulesItemValid(rule, value) {
	      var self = this;
	      var tip = rule.tip;
	      var type = rule.type;
	
	      switch (type) {
	        case 'required':
	          self.requiredValid(value, tip);
	          break;
	        case 'phone':
	          self.phoneValid(value, tip);
	          break;
	        case 'number':
	          self.numberValid(value, tip);
	          break;
	        case 'telephone':
	          self.telValid(value, tip);
	          break;
	        case 'email':
	          self.emailValid(value, tip);
	          break;
	      }
	
	      if (type.indexOf('maxlength') > -1) {
	        self.maxlengthValid(type, value, tip);
	        return;
	      }
	      if (type.indexOf('minlength') > -1) {
	        self.minlengthValid(type, value, tip);
	        return;
	      }
	    },
	    customValid: function customValid(val) {
	      this.setResult('customValidate', this.customValidate(val));
	    },
	    requiredValid: function requiredValid(val, tip) {
	      var self = this;
	
	      self._results = self._results || {};
	
	      if (_type2.default.isNullOrUndefined(val) || val.length === 0) {
	        self.setResult('requiredValid', {
	          validStatus: 'error',
	          tips: tip || '不能为空'
	        });
	      } else {
	        self.setResult('requiredValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      }
	    },
	    maxlengthValid: function maxlengthValid(type, val, tip) {
	      var self = this;
	      var maxlength = type.split('=')[1] - 0;
	
	      self._results = self._results || {};
	
	      if (val) {
	        if (val.length > maxlength) {
	          self.setResult('maxlengthValid', {
	            validStatus: 'error',
	            tips: tip || '输入字符数不能大于' + maxlength
	          });
	        } else {
	          self.setResult('maxlengthValid', {
	            validStatus: 'success',
	            tips: ''
	          });
	        }
	      }
	    },
	    minlengthValid: function minlengthValid(type, val, tip) {
	      var self = this;
	      var minlength = type.split('=')[1] - 0;
	
	      self._results = self._results || {};
	
	      if (val) {
	        if (val.length < minlength) {
	          self.setResult('minlengthValid', {
	            validStatus: 'error',
	            tips: tip || '输入字符数不能小于' + minlength
	          });
	        } else {
	          self.setResult('minlengthValid', {
	            validStatus: 'success',
	            tips: ''
	          });
	        }
	      }
	    },
	    rulesValid: function rulesValid(value) {
	      var self = this;
	
	      self.rules.forEach(function (val, index) {
	        self.rulesItemValid(val, value);
	      });
	
	      if (_type2.default.isFunction(self.customValidate)) {
	        self.customValid(value);
	      }
	    },
	    phoneValid: function phoneValid(value, tip) {
	      var rule = /^1\d{10}$/;
	
	      if (rule.test(value) || value === '') {
	        this.setResult('isPhoneValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.setResult('isPhoneValid', {
	          validStatus: 'error',
	          tips: tip || '请输入正确的手机号码'
	        });
	      }
	    },
	    numberValid: function numberValid(value, tip) {
	      var rule = /^\d*$/;
	
	      if (rule.test(value) || value === '') {
	        this.setResult('isNumberValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.setResult('isNumberValid', {
	          validStatus: 'error',
	          tips: tip || '请输入数字'
	        });
	      }
	    },
	    telValid: function telValid(value, tip) {
	      var rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
	
	      if (rule.test(value) || value === '') {
	        this.setResult('isTelValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.setResult('isTelValid', {
	          validStatus: 'error',
	          tips: tip || '输入固话格式错误，固话请用-'
	        });
	      }
	    },
	    emailValid: function emailValid(value, tip) {
	      var rule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	
	      if (rule.test(value) || value === '') {
	        this.setResult('isEmailValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.setResult('isEmailValid', {
	          validStatus: 'error',
	          tips: tip || '请输入正确的email'
	        });
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// 	<div class="{{prefixCls}}-err-tip" v-if="validate && tips" >{{tips}}</div>
	// </template>
	
	// <script>

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-err-tip\" v-if=\"validate && tips\" >{{tips}}</div>";

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"wrapClass\">\n  <span>\n    <span class=\"{{prefixCls}}-checkbox-inner\">\n      <n3-icon type=\"check\" color=\"#fff\" class=\"{{prefixCls}}-checkbox-inner-check\"></n3-icon>\n    </span>\n    <input\n      type=\"checkbox\"\n      class=\"{{prefixCls}}-checkbox-input\"\n      :disabled=\"disabled\"\n      :checked=\"checked\"\n      @click=\"handleClick\"/>\n  </span>\n  <span><slot></slot></span>  \n  <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"checked\"\n    :results.sync=\"validateResults\">\n  </validate>\n  </label>";

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(144)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(154)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxBtn.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxBtn.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <n3-button 
	//     @click.prevent="handleClick"
	//     :class="classObj" 
	//     :disabled="disabled"
	//     :type="checked ? 'primary' : 'default'">
	//     <slot></slot>
	//   </n3-button>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false,
	      twoway: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  events: {
	    'n3@checkboxgroupChange': function n3CheckboxgroupChange(val) {
	      this.checked = val.indexOf(this.value) > -1;
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	
	      var klass = {};
	      klass[prefixCls + '-checked-btn'] = true;
	
	      return klass;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.checked = !this.checked;
	      this.$dispatch('n3@checkboxChange', this);
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.checked);
	      }
	    }
	  },
	  components: {
	    n3Button: _n3Button2.default
	  }
	};
	// </script>

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(146)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(153)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Button.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Button.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Button.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Button.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Button.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Loading = __webpack_require__(147);
	
	var _n3Loading2 = _interopRequireDefault(_n3Loading);
	
	var _n3Badge = __webpack_require__(150);
	
	var _n3Badge2 = _interopRequireDefault(_n3Badge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <a :class="classObj">
	//   	<slot></slot>	
	//   	<n3-loading v-if="loading" size="xs" style="position:relative;top:2px"></n3-loading>
	//     <n3-badge  v-if="badge">{{badge}}</n3-badge>
	//   </a>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    size: {
	      type: String
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    badge: {
	      type: [String, Number]
	    },
	    active: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    block: {
	      type: Boolean,
	      default: false
	    },
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          type = this.type,
	          size = this.size,
	          block = this.block,
	          active = this.active,
	          disabled = this.disabled;
	
	      var klass = {};
	
	      klass[prefixCls + '-btn'] = true;
	      klass[prefixCls + '-btn-block'] = block;
	      klass[prefixCls + '-btn-active'] = active;
	      klass[prefixCls + '-btn-disabled'] = disabled;
	      size ? klass[prefixCls + '-btn-' + size] = true : '';
	      type ? klass[prefixCls + '-btn-' + type] = true : '';
	
	      return klass;
	    }
	  },
	  components: {
	    n3Loading: _n3Loading2.default,
	    n3Badge: _n3Badge2.default
	  }
	};
	// </script>

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(148)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(149)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Loading.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Loading.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Loading.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Loading.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Loading.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <span :class="classObj">
	//     <i :class="iclassObj"></i>
	//     <slot></slot>  
	//   </span>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    size: {
	      type: String
	    },
	    center: {
	      type: Boolean
	    },
	    fixed: {
	      type: Boolean,
	      default: false
	    },
	    color: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          center = this.center,
	          fixed = this.fixed;
	
	      var klass = {};
	
	      klass['affix'] = fixed;
	      klass[prefixCls + '-page-loading-con'] = true;
	      klass[prefixCls + '-page-loading-con'] = true;
	      klass[prefixCls + '-loading-center'] = center;
	
	      return klass;
	    },
	    iclassObj: function iclassObj() {
	      var prefixCls = this.prefixCls,
	          type = this.type,
	          size = this.size,
	          color = this.color;
	
	      var klass = {};
	
	      klass[prefixCls + '-page-loading'] = true;
	      type ? klass[prefixCls + '-loading-' + type] = true : '';
	      size ? klass[prefixCls + '-loading-' + size] = true : '';
	      color ? klass['text-' + color] = true : '';
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"classObj\">\n    <i :class=\"iclassObj\"></i>\n    <slot></slot>  \n  </span>";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(151)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(152)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Badge.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Badge.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Badge.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Badge.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Badge.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<span class="{{prefixCls}}-badge">
	// 		<slot></slot>	
	// 	</span>
	// </template>
	// <script>
	exports.default = {
		props: {
			prefixCls: {
				type: String,
				default: 'n3'
			}
		}
	};
	// </script>

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "<span class=\"{{prefixCls}}-badge\">\n\t\t<slot></slot>\t\n\t</span>";

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = "<a :class=\"classObj\">\n  \t<slot></slot>\t\n  \t<n3-loading v-if=\"loading\" size=\"xs\" style=\"position:relative;top:2px\"></n3-loading>\n    <n3-badge  v-if=\"badge\">{{badge}}</n3-badge>\n  </a>";

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "<n3-button \n    @click.prevent=\"handleClick\"\n    :class=\"classObj\" \n    :disabled=\"disabled\"\n    :type=\"checked ? 'primary' : 'default'\">\n    <slot></slot>\n  </n3-button>";

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group {{prefixCls}}-checkbox-group\">\n    <template v-if=\"options\">\n      <n3-checkbox\n        v-if=\"type==='checkbox'\" \n        v-for=\"item in options\"\n        :value=\"item.value\"\n        :checked=\"item.checked\"\n        :disabled=\"item.disabled\">\n        {{item.label}}\n      </n3-checkbox>\n\n       <n3-checkbox-btn\n        v-if=\"type==='button'\" \n        v-for=\"item in options\"\n        :value=\"item.value\"\n        :checked=\"item.checked\"\n        :disabled=\"item.disabled\">\n       {{item.label}}\n      </n3-checkbox-btn>\n    </template>\n    <template v-else>\n    <slot></slot>\n    </template>\n\n    <validate\n      :name=\"name\"\n      :rules=\"rules\"\n      :valid-status.sync=\"validStatus\"\n      :custom-validate=\"customValidate\" \n      :value=\"value\"\n      :results.sync=\"validateResults\">\n    </validate>\n\n  </div>";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(157)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(164)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Cascader.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Cascader.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Cascader.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Cascader.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Cascader.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(160);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="{{prefixCls}}-cascader">
	//     <span class="{{prefixCls}}-cascader-picker">
	//       <n3-input 
	//         :width="width"
	//         :name="name" 
	//         :rules="rules" 
	//         :validate="validate" 
	//         :has-feedback="hasFeedback"
	//         :placeholder="placeholder"
	//         :custom-validate="customValidate"
	//         :value.sync="displayValue"
	//         :readonly="true"
	//         :disabled="disabled"
	//         @click="toggleMenus">
	//       </n3-input>
	//     </span>
	//     <div class="{{prefixCls}}-cascader-menus" v-show="show" transition="fadeDown">
	//       <ul class="{{prefixCls}}-cascader-menu" v-for="(index, menu) in menus">
	//         <li :class="itemClass(index,option)" 
	//           v-for="option in menu" @click="changeOption(index,option)">{{option.label}}
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    options: {
	      type: Array,
	      required: true
	    },
	
	    displayRender: {
	      type: Function,
	      default: function _default(label) {
	        return label.join(' / ');
	      }
	    },
	    expandTrigger: {
	      type: String,
	      default: 'click'
	    },
	    value: {
	      type: Array,
	      twoWay: true
	    },
	    onChange: {
	      type: Function
	    },
	    selectChange: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Input: _n3Input2.default
	  },
	  data: function data() {
	    return {
	      menus: [],
	      selectedOptions: [],
	      displayValue: '',
	      show: false,
	      init: true,
	      inner: false
	    };
	  },
	
	  computed: {
	    selectedValue: function selectedValue() {
	      var self = this;
	      return self.selectedOptions.map(function (option) {
	        return option.value;
	      });
	    },
	    selectedLabel: function selectedLabel() {
	      var self = this;
	      return self.selectedOptions.map(function (option) {
	        return option.label;
	      });
	    }
	  },
	  created: function created() {
	    this.setMenu();
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var self = this;
	    self._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) {
	        self.show = false;
	      }
	    });
	  },
	
	  watch: {
	    options: function options() {
	      this.setMenu();
	    },
	    value: function value() {
	      if (this.inner) {
	        this.inner = false;
	        return;
	      }
	      this.setResult();
	    }
	  },
	  methods: {
	    itemClass: function itemClass(index, option) {
	      var prefixCls = this.prefixCls;
	
	      var klass = {};
	
	      klass[prefixCls + '-cascader-menu-item'] = true;
	      klass[prefixCls + '-cascader-menu-item-selected'] = this.selectedOptions[index] === option;
	      klass[prefixCls + '-cascader-menu-item-disabled'] = option.disabled;
	
	      return klass;
	    },
	    setResult: function setResult() {
	      var self = this;
	      self.displayValue = '';
	      self.selectedOptions = [];
	
	      if (self.value) {
	        self.value.forEach(function (value, i) {
	          if (self.menus[i] && self.menus[i].length) {
	            var option = self.menus[i].filter(function (option) {
	              return option.value === value;
	            });
	            if (option[0]) self.changeOption(i, option[0]);
	          }
	        });
	      }
	    },
	    setMenu: function setMenu() {
	      var self = this;
	      self.menus = [[]];
	      self.displayValue = '';
	      self.init = true;
	
	      self.options.forEach(function (option, i) {
	        self.menus[0].push({
	          label: option.label,
	          value: option.value,
	          children: option.children,
	          disabled: option.disabled
	        });
	      });
	
	      self.setResult();
	      self.init = false;
	    },
	    changeOption: function changeOption(index, option, event) {
	      var self = this;
	      var menus = self.menus.slice(0, index + 1);
	
	      if (option.disabled) {
	        return;
	      }
	
	      self.selectedOptions = self.selectedOptions.slice(0, index + 1);
	      self.selectedOptions[index] = option;
	
	      if (option.children) {
	        menus.push(option.children);
	      }
	
	      if (this.selectChange || !option.children) {
	        self.displayValue = self.displayRender(self.selectedLabel);
	        self.inner = true;
	        self.value = self.selectedValue;
	        if (_type2.default.isFunction(self.onChange) && !this.init) {
	          self.onChange(self.value);
	        }
	      }
	
	      if (!option.children) {
	        self.show = false;
	      }
	
	      self.menus = menus;
	    },
	    toggleMenus: function toggleMenus() {
	      if (this.disabled) return;
	      this.show = !this.show;
	    }
	  }
	};
	// </script>

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(159)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(163)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Input.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Input.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Input.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Input.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Input.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _inputMixin = __webpack_require__(160);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _vueFocus = __webpack_require__(161);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    readonly: {
	      type: Boolean
	    },
	    value: {
	      type: [String, Number],
	      twoway: true
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    },
	    type: {
	      type: String,
	      default: 'text'
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default,
	    validate: _validate2.default
	  },
	  directives: {
	    focusModel: _vueFocus.focusModel
	  },
	  data: function data() {
	    return {
	      validateResults: {}
	    };
	  },
	
	  watch: {
	    value: function value(val) {
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(val);
	      }
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          validStatus = this.validStatus,
	          hasFeedback = this.hasFeedback;
	
	      var klass = {};
	
	      klass[prefixCls + '-has-error'] = validStatus === 'error';
	      klass[prefixCls + '-has-success'] = validStatus === 'success';
	      klass[prefixCls + '-has-warn'] = validStatus === 'warn';
	      klass[prefixCls + '-has-feedback'] = validStatus && hasFeedback;
	      klass[prefixCls + '-input-con'] = true;
	      klass['inline'] = true;
	
	      return klass;
	    }
	  },
	
	  methods: {
	    blur: function blur() {
	      if (_type2.default.isFunction(this.onBlur)) {
	        this.onBlur(this.value);
	      }
	    },
	    focus: function focus() {
	      if (_type2.default.isFunction(this.onFocus)) {
	        this.onFocus(this.value);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div :class="classObj"  :style="{'width':width}">
	//   <input
	//     autoComplete="off"
	//     class="{{prefixCls}}-form-control"
	//     :style="{'width':width}"
	//     :readonly="readonly"
	//     :disabled="disabled"
	//     :placeholder="placeholder"
	// 		:type="type"
	//     @blur="blur"
	//     @focus="focus"
	//     v-focus-model="focused"
	//     v-model="value"  />
	//   <n3-icon
	//     type="check" class="{{prefixCls}}-form-control-feedback"
	//     v-if='validStatus=="success" && hasFeedback'>
	//   </n3-icon>
	
	//   <n3-icon
	//     type="warning" class="{{prefixCls}}-form-control-feedback"
	//     v-if='validStatus=="warning" && hasFeedback'>
	//   </n3-icon>
	
	//   <n3-icon
	//     type="times" class="{{prefixCls}}-form-control-feedback"
	//     v-if='validStatus=="error" && hasFeedback'>
	//   </n3-icon>
	
	//   <validate
	//     :name="name"
	//     :valid-status.sync="validStatus"
	//     :rules="rules"
	//     :custom-validate="customValidate"
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	
	// </div>
	// </template>
	// <script>

/***/ },
/* 160 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    },
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    onBlur: {
	      type: Function
	    },
	    onFocus: {
	      type: Function
	    },
	    width: {
	      type: String,
	      default: '220px'
	    },
	    customValidate: {
	      type: Function
	    },
	    validStatus: {
	      type: String,
	      twoway: true,
	      default: ''
	    },
	    rules: {
	      type: Array
	    },
	    hasFeedback: {
	      type: Boolean,
	      default: true
	    },
	    focused: {
	      type: Boolean,
	      twoway: true,
	      default: false
	    }
	  }
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Vue = __webpack_require__(162);
	Vue = 'default' in Vue ? Vue['default'] : Vue;
	
	var version = '2.0.0';
	
	var compatible = (/^2\./).test(Vue.version);
	if (!compatible) {
	  Vue.util.warn('VueFocus ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
	}
	
	var focus = {
	  inserted: function(el, binding) {
	    if (binding.value) el.focus();
	    else el.blur();
	  },
	
	  componentUpdated: function(el, binding) {
	    if (binding.value) el.focus();
	    else el.blur();
	  },
	};
	
	var mixin = {
	  directives: {
	    focus: focus,
	  },
	};
	
	exports.version = version;
	exports.focus = focus;
	exports.mixin = mixin;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v2.0.3
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vue = factory());
	}(this, (function () { 'use strict';
	
	/*  */
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/*  */
	
	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,
	
	  /**
	   * Server rendering?
	   */
	  _isServer: "client" === 'server'
	};
	
	/*  */
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w\.\$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}
	
	/*  */
	/* globals MutationObserver */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]';
	
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}
	
	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	
	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }
	
	  return function queueNextTick (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx); }
	      : cb;
	    callbacks.push(func);
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	  }
	})();
	
	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var hasProxy;
	var proxyHandlers;
	var initProxy;
	
	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        );
	      }
	      return has || !isAllowed
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	
	var uid$2 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*  */
	
	
	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	
	  resetSchedulerState();
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$1 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};
	
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          "development" !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          );
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val, seen) {
	  var i, keys;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = Array.isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) { traverse(val[i], seen); }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) { traverse(val[keys[i]], seen); }
	    }
	  }
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return
	      }
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	  initWatch(vm);
	}
	
	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      }
	    };
	
	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}
	
	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}
	
	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if ("development" !== 'production' && methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	    }
	  }
	}
	
	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	
	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	};
	
	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}
	
	/*  */
	
	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}
	
	/*  */
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      capture = name.charAt(0) === '!';
	      event = capture ? name.slice(1) : name;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name;
	      remove$$1(event, oldOn[name].invoker);
	    }
	  }
	}
	
	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;
	
	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}
	
	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}
	
	/*  */
	
	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text;
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res
	  }
	}
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}
	
	/*  */
	
	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}
	
	/*  */
	
	var activeInstance = null;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode;
	      {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };
	
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    var prevVnode = vm._vnode;
	    vm._vnode = vnode;
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };
	
	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      {
	        observerState.isSettingProps = false;
	      }
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
	      vm.$forceUpdate();
	    }
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}
	
	/*  */
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }
	
	  if (isObject(Ctor)) {
	    Ctor = Vue$3.extend(Ctor);
	  }
	
	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }
	
	  data = data || {};
	
	  // extract props
	  var propsData = extractProps(data, Ctor);
	
	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;
	
	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  }
	}
	
	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}
	
	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}
	
	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}
	
	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;
	
	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue$3.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };
	
	    var reject = function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };
	
	    var res = factory(resolve, reject);
	
	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}
	
	function extractProps (data, Ctor) {
	  // we are only extrating raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}
	
	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __);
	    b(_, __);
	  }
	}
	
	/*  */
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}
	
	/*  */
	
	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          setTimeout(function () { throw e }, 0);
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	
	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;
	
	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (typeof tree[i] !== 'string') {
	          tree[i].isStatic = true;
	          tree[i].key = "__static__" + index + "_" + i;
	        }
	      }
	    } else {
	      tree.isStatic = true;
	      tree.key = "__static__" + index;
	    }
	    return tree
	  };
	
	  // filter resolution helper
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };
	
	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };
	
	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && "development" !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  };
	
	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        "development" !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };
	
	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  };
	}
	
	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var on = bind$1(vm.$on, vm);
	  var off = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}
	
	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	var uid = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	
	  function initInternalComponent (vm, options) {
	    var opts = vm.$options = Object.create(resolveConstructorOptions(vm));
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent;
	    opts.propsData = options.propsData;
	    opts._parentVnode = options._parentVnode;
	    opts._parentListeners = options._parentListeners;
	    opts._renderChildren = options._renderChildren;
	    opts._componentTag = options._componentTag;
	    if (options.render) {
	      opts.render = options.render;
	      opts.staticRenderFns = options.staticRenderFns;
	    }
	  }
	
	  function resolveConstructorOptions (vm) {
	    var Ctor = vm.constructor;
	    var options = Ctor.options;
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options;
	      var cachedSuperOptions = Ctor.superOptions;
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions;
	        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	        if (options.name) {
	          options.components[options.name] = Ctor;
	        }
	      }
	    }
	    return options
	  }
	}
	
	function Vue$3 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);
	
	var warn = noop;
	var formatComponentName;
	
	{
	  var hasConsole = typeof console !== 'undefined';
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };
	
	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 */
	function normalizeComponents (options) {
	  if (options.components) {
	    var components = options.components;
	    var def;
	    for (var key in components) {
	      var lower = key.toLowerCase();
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        "development" !== 'production' && warn(
	          'Do not use built-in or reserved HTML elements as component ' +
	          'id: ' + key
	        );
	        continue
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue$3.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  normalizeComponents(child);
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, name) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
	      'Invalid default value for prop "' + name + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}
	
	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name;
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	        name = null;
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub
	  };
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = Vue.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	};
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$3);
	
	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	});
	
	Vue$3.version = '2.0.3';
	
	/*  */
	
	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted');
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	);
	
	
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	var isPreTag = function (tag) { return tag === 'pre'; };
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function childNodes (node) {
	  return node.childNodes
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks$1 = ['create', 'update', 'remove', 'destroy'];
	
	function isUndef (s) {
	  return s == null
	}
	
	function isDef (s) {
	  return s != null
	}
	
	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }
	
	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    nodeOps.removeChild(parent, el);
	  }
	
	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i;
	    var data = vnode.data;
	    vnode.isRootInsert = !nested;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        return vnode.elm
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	      createChildren(vnode, children, insertedVnodeQueue);
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }
	
	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, before;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        vnode.isCloned) {
	      vnode.elm = oldVnode.elm;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var bailed = false;
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	
	        createElm(vnode, insertedVnodeQueue);
	
	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm;
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};
	
	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	];
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	};
	
	// skip type checking this file because we need to attach private properties
	// to elements
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
	  updateListeners(on, oldOn, add, remove, vnode.context);
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = undefined;
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0;
	    }
	    cur = props[key];
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};
	
	/*  */
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name;
	  var el = vnode.elm;
	  var oldStyle = oldVnode.data.style || {};
	  var style = vnode.data.style || {};
	
	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	    return
	  }
	
	  var needClone = style.__ob__;
	
	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style);
	  }
	
	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style);
	  }
	
	  for (name in oldStyle) {
	    if (style[name] == null) {
	      el.style[normalize(name)] = '';
	    }
	  }
	  for (name in style) {
	    cur = style[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      el.style[normalize(name)] = cur == null ? '' : cur;
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	};
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}
	
	/*  */
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode;
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance;
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});
	
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}
	
	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (
	      (vnode.tag === 'textarea' || el.type === 'text') &&
	      !binding.modifiers.lazy
	    ) {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matchig
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};
	
	var platformDirectives = {
	  model: model,
	  show: show
	};
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recrusively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if ("development" !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }
	
	    return rawChild
	  }
	};
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || (this.name + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};
	
	/*  */
	
	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;
	
	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);
	
	// install platform patch function
	Vue$3.prototype.__patch__ = config._isServer ? noop : patch$1;
	
	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);
	
	/*  */
	
	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}
	
	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;
	
	/*  */
	
	var decoder = document.createElement('div');
	
	function decode (html) {
	  decoder.innerHTML = html;
	  return decoder.textContent
	}
	
	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */
	
	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */
	
	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>\/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);
	
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	
	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});
	
	// Special Elements (can contain anything)
	var isSpecialTag = makeMap('script,style', true);
	
	var reCache = {};
	
	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;
	
	function decodeAttr (value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value
	    .replace(ltRE, '<')
	    .replace(gtRE, '>')
	    .replace(ampRE, '&')
	    .replace(quoteRE, '"')
	}
	
	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (/^<!--/.test(html)) {
	          var commentEnd = html.indexOf('-->');
	
	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (/^<!\[/.test(html)) {
	          var conditionalEnd = html.indexOf(']>');
	
	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }
	
	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }
	
	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue
	        }
	
	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }
	
	      var text = void 0;
	      if (textEnd >= 0) {
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      } else {
	        text = html;
	        html = '';
	      }
	
	      if (options.chars) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }
	
	    if (html === last) {
	      throw new Error('Error parsing template:\n\n' + html)
	    }
	  }
	
	  // Clean up any remaining tags
	  parseEndTag();
	
	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }
	
	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }
	
	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;
	
	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }
	
	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
	
	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }
	
	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }
	
	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }
	
	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }
	
	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }
	
	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}
	
	/*  */
	
	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;
	
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle; }
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }
	
	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }
	
	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }
	
	  return expression
	}
	
	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}
	
	/*  */
	
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	
	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});
	
	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}
	
	/*  */
	
	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
	}
	
	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}
	
	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}
	
	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}
	
	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}
	
	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}
	
	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return dynamicValue
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}
	
	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}
	
	/*  */
	
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var specialNewlineRE = /\u2028|\u2029/g;
	
	var decodeHTMLCached = cached(decode);
	
	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;
	
	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
	
	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (options.isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }
	
	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs, options.isIE),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }
	
	      if ("client" !== 'server' && isForbiddenTag(element)) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        );
	      }
	
	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }
	
	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);
	
	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;
	
	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }
	
	      function checkRootConstraints (el) {
	        {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            );
	          }
	        }
	      }
	
	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if ("development" !== 'production' && !stack.length && !warned) {
	        // allow 2 root elements with v-if and v-else
	        if (root.if && element.else) {
	          checkRootConstraints(element);
	          root.elseBlock = element;
	        } else {
	          warned = true;
	          warn$1(
	            ("Component template should contain exactly one root element:\n\n" + template)
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.else) {
	          processElse(element, currentParent);
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },
	
	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },
	
	    chars: function chars (text) {
	      if (!currentParent) {
	        if ("development" !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          // #3895 special character
	          text = text.replace(specialNewlineRE, '');
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}
	
	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}
	
	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}
	
	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}
	
	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}
	
	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      "development" !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}
	
	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	  }
	  if (getAndRemoveAttr(el, 'v-else') != null) {
	    el.else = true;
	  }
	}
	
	function processElse (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    prev.elseBlock = el;
	  } else {
	    warn$1(
	      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
	    );
	  }
	}
	
	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}
	
	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget;
	    }
	  }
	}
	
	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}
	
	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        if (modifiers && modifiers.prop) {
	          isProp = true;
	          name = camelize(name);
	          if (name === 'innerHtml') { name = 'innerHTML'; }
	        }
	        if (isProp || platformMustUseProp(name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been deprecated. ' +
	            'Use v-bind or the colon shorthand instead.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}
	
	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}
	
	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}
	
	function makeAttrsMap (attrs, isIE) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}
	
	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}
	
	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}
	
	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;
	
	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}
	
	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}
	
	/*  */
	
	var isStaticKey;
	var isPlatformReservedTag;
	
	var genStaticKeysCached = cached(genStaticKeys$1);
	
	/**
	 * Goal of the optimizier: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || (function () { return false; });
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}
	
	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}
	
	function markStatic (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}
	
	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.once || node.static) {
	      node.staticRoot = true;
	      node.staticInFor = isInFor;
	      return
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	  }
	}
	
	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}
	
	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}
	
	/*  */
	
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*\s*$/;
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};
	
	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;'
	};
	
	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}
	
	function genHandler (
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(genHandler).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}
	
	function genKeyFilter (keys) {
	  var code = keys.length === 1
	    ? normalizeKeyCode(keys[0])
	    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
	  if (Array.isArray(code)) {
	    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
	  } else {
	    return ("if($event.keyCode!==" + code + ")return;")
	  }
	}
	
	function normalizeKeyCode (key) {
	  return (
	    parseInt(key, 10) || // number keyCode
	    keyCodes[key] || // built-in alias
	    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
	  )
	}
	
	/*  */
	
	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + "," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}
	
	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};
	
	/*  */
	
	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var staticRenderFns;
	var currentOptions;
	
	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_h("div")';
	  staticRenderFns = prevStaticRenderFns;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}
	
	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    // hoist static sub-trees out
	    el.staticProcessed = true;
	    staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	    return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el);
	    } else {
	      var data = genData(el);
	      var children = el.inlineTemplate ? null : genChildren(el);
	      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}
	
	function genIf (el) {
	  var exp = el.if;
	  el.ifProcessed = true; // avoid recursion
	  return ("(" + exp + ")?" + (genElement(el)) + ":" + (genElse(el)))
	}
	
	function genElse (el) {
	  return el.elseBlock
	    ? genElement(el.elseBlock)
	    : '_e()'
	}
	
	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}
	
	function genData (el) {
	  if (el.plain) {
	    return
	  }
	
	  var data = '{';
	
	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }
	
	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var ast = el.children[0];
	    if ("development" !== 'production' && (
	      el.children.length > 1 || ast.type !== 1
	    )) {
	      warn$2('Inline-template components must have exactly one child element.');
	    }
	    if (ast.type === 1) {
	      var inlineRenderFns = generate(ast, currentOptions);
	      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}
	
	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}
	
	function genChildren (el) {
	  if (el.children.length) {
	    return '[' + el.children.map(genNode).join(',') + ']'
	  }
	}
	
	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}
	
	function genText (text) {
	  return text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : JSON.stringify(text.text)
	}
	
	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return children
	    ? ("_t(" + slotName + "," + children + ")")
	    : ("_t(" + slotName + ")")
	}
	
	function genComponent (el) {
	  var children = el.inlineTemplate ? null : genChildren(el);
	  return ("_h(" + (el.component) + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}
	
	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (prop.value) + ",";
	  }
	  return res.slice(0, -1)
	}
	
	/*  */
	
	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}
	
	/*  */
	
	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	
	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}
	
	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}
	
	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}
	
	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}
	
	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}
	
	/*  */
	
	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been deprecated. ' +
	        'Use v-bind or the colon shorthand instead.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}
	
	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}
	
	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};
	
	/*  */
	
	function transformNode$1 (el) {
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData$2 (el) {
	  return el.styleBinding
	    ? ("style:(" + (el.styleBinding) + "),")
	    : ''
	}
	
	var style$1 = {
	  transformNode: transformNode$1,
	  genData: genData$2
	};
	
	var modules$1 = [
	  klass$1,
	  style$1
	];
	
	/*  */
	
	var warn$3;
	
	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}
	
	function genCheckboxModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + valueBinding + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}
	
	function genRadioModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', (value + "=" + valueBinding), null, true);
	}
	
	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }
	
	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';
	
	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : "$event";
	  var code = number || type === 'number'
	    ? (value + "=_n(" + valueExpression + ")")
	    : (value + "=" + valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if ("development" !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }
	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	}
	
	function genSelect (el, value) {
	  {
	    el.children.some(checkOptionWarning);
	  }
	  var code = value + "=Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){return \"_value\" in o ? o._value : o.value})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');
	  addHandler(el, 'change', code, null, true);
	}
	
	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}
	
	/*  */
	
	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	/*  */
	
	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};
	
	/*  */
	
	var cache = Object.create(null);
	
	var baseOptions = {
	  isIE: isIE,
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};
	
	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}
	
	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}
	
	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}
	
	/*  */
	
	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});
	
	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);
	
	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }
	
	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating)
	};
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}
	
	Vue$3.compile = compileToFunctions;
	
	return Vue$3;
	
	})));


/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\"  :style=\"{'width':width}\">\n  <input\n    autoComplete=\"off\"\n    class=\"{{prefixCls}}-form-control\"\n    :style=\"{'width':width}\"\n    :readonly=\"readonly\"\n    :disabled=\"disabled\"\n    :placeholder=\"placeholder\"\n\t\t:type=\"type\"\n    @blur=\"blur\"\n    @focus=\"focus\"\n    v-focus-model=\"focused\"\n    v-model=\"value\"  />\n  <n3-icon\n    type=\"check\" class=\"{{prefixCls}}-form-control-feedback\"\n    v-if='validStatus==\"success\" && hasFeedback'>\n  </n3-icon>\n\n  <n3-icon\n    type=\"warning\" class=\"{{prefixCls}}-form-control-feedback\"\n    v-if='validStatus==\"warning\" && hasFeedback'>\n  </n3-icon>\n\n  <n3-icon\n    type=\"times\" class=\"{{prefixCls}}-form-control-feedback\"\n    v-if='validStatus==\"error\" && hasFeedback'>\n  </n3-icon>\n\n  <validate\n    :name=\"name\"\n    :valid-status.sync=\"validStatus\"\n    :rules=\"rules\"\n    :custom-validate=\"customValidate\"\n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n\n</div>";

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-cascader\">\n    <span class=\"{{prefixCls}}-cascader-picker\">\n      <n3-input \n        :width=\"width\"\n        :name=\"name\" \n        :rules=\"rules\" \n        :validate=\"validate\" \n        :has-feedback=\"hasFeedback\"\n        :placeholder=\"placeholder\"\n        :custom-validate=\"customValidate\"\n        :value.sync=\"displayValue\"\n        :readonly=\"true\"\n        :disabled=\"disabled\"\n        @click=\"toggleMenus\">\n      </n3-input>\n    </span>\n    <div class=\"{{prefixCls}}-cascader-menus\" v-show=\"show\" transition=\"fadeDown\">\n      <ul class=\"{{prefixCls}}-cascader-menu\" v-for=\"(index, menu) in menus\">\n        <li :class=\"itemClass(index,option)\" \n          v-for=\"option in menu\" @click=\"changeOption(index,option)\">{{option.label}}\n        </li>\n      </ul>\n    </div>\n  </div>";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (obj) {
	  var instance = new n3Toast({
	    el: document.createElement('div')
	  });
	
	  instance.placement = obj.placement || 'center';
	  instance.type = obj.type || 'default';
	  instance.closeOnClick = obj.closeOnClick;
	  instance.duration = obj.duration === undefined ? 3000 : obj.duration;
	  instance.width = obj.width;
	  instance.text = obj.text;
	
	  _vue2.default.nextTick(function () {
	    instance.$appendTo(document.body);
	    instance.show = true;
	    if (instance.duration > 0) {
	      setTimeout(function () {
	        instance.$remove();
	      }, instance.duration);
	    }
	  });
	};
	
	var _vue = __webpack_require__(162);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var n3Toast = _vue2.default.extend(__webpack_require__(166));

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(167)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(168)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Toast.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Toast.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Toast.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Toast.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Toast.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div 
	//     v-el:dom
	//     :class="classObj"
	// 		transition="fade"
	// 		@click="handleClick"
	// 		v-if="show">
	// 		<h5>{{text}}</h5>
	// 	</div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    top: {
	      type: Boolean,
	      default: false
	    },
	    placement: {
	      type: String,
	      default: 'center'
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    duration: {
	      type: Number,
	      default: 3000
	    },
	    closeOnClick: {
	      type: Boolean,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      twoWay: true,
	      default: false
	    },
	    text: {
	      type: String
	    },
	    width: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	
	  data: function data() {
	    return {
	      setT: ''
	    };
	  },
	
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          placement = this.placement,
	          type = this.type;
	
	      var klass = {};
	
	      klass[prefixCls + '-toast'] = true;
	      klass[prefixCls + '-toast-' + type] = true;
	      klass[prefixCls + '-' + placement] = true;
	
	      return klass;
	    }
	  },
	
	  methods: {
	    handleClick: function handleClick() {
	      if (this.closeOnClick) {
	        this.show = false;
	      }
	    }
	  },
	
	  watch: {
	    show: {
	      handler: function handler(val) {
	        var self = this;
	        this.setT = window.clearTimeout(this.setT);
	
	        if (val) {
	          if (this.placement === 'top' || this.placement === 'bottom') {
	            this.$els.dom.style.marginLeft = -1 * this.$els.dom.offsetWidth / 2 + 'px';
	          } else if (this.placement === 'center') {
	            this.$els.dom.style.marginLeft = -1 * this.$els.dom.offsetWidth / 2 + 'px';
	            this.$els.dom.style.marginTop = -1 * this.$els.dom.offsetHeight / 2 + 'px';
	          }
	        }
	
	        if (val && this.duration) {
	          this.setT = window.setTimeout(function () {
	            self.show = false;
	          }, this.duration);
	        }
	      },
	
	      immediate: true
	    }
	  }
	};
	// </script>

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "<div \n    v-el:dom\n    :class=\"classObj\"\n\t\ttransition=\"fade\"\n\t\t@click=\"handleClick\"\n\t\tv-if=\"show\">\n\t\t<h5>{{text}}</h5>\n\t</div>";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(170)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(171)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Label.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Label.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Label.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Label.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Label.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 170 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<span :class="classObj">
	// 		<slot></slot>
	// 	</span>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    },
	    hover: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          type = this.type,
	          hover = this.hover;
	
	      var klass = {};
	
	      klass[prefixCls + '-label'] = true;
	      klass[prefixCls + '-label-' + type] = true;
	      klass[prefixCls + '-label-hover'] = hover;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"classObj\">\n\t\t<slot></slot>\n\t</span>";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(173)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(174)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3InputNumber.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3InputNumber.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3InputNumber.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3InputNumber.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3InputNumber.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _inputMixin = __webpack_require__(160);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div :class="classObj" :style="{width: width}">
	//   <div class="{{prefixCls}}-input-number-handler-wrap">
	//     <a unselectable="unselectable"
	//       ref="up"
	//       @click="_up"
	//       @mouse.down="preventDefault"
	//       :class="[prefixCls + '-input-number-handler',prefixCls + '-input-number-handler-up',upDisabledClass]">
	//         <n3-icon
	//           class="{{prefixCls}}-input-number-handler-up-inner" 
	//           type="angle-up" 
	//           @click="preventDefault" 
	//           unselectable="unselectable">
	//         </n3-icon>
	//     </a>
	//     <a unselectable="unselectable"
	//        ref="down"
	//        @mouse.down="preventDefault"
	//        @click="_down"
	//        :class="[prefixCls + '-input-number-handler', prefixCls + '-input-number-handler-down', downDisabledClass]">
	//        <n3-icon
	//           class="{{prefixCls}}-input-number-handler-down-inner" 
	//           type="angle-down" 
	//           @click="preventDefault" 
	//           unselectable="unselectable">
	//         </n3-icon>
	//     </a>
	//   </div>
	//   <div :class="prefixCls + '-input-number-input-wrap'">
	//     <n3-input
	//       :on-focus="onFocus"
	//       :on-blur="onBlur" 
	//       :width="width"
	//       :rules="rules" 
	//       :validate="validate"
	//       :placeholder="placeholder"
	//       :custom-validate="customValidate"
	//       :on-blur="_onBlur"
	//       @keydown.stop="_onKeyDown"
	//       :on-change="_onChange"
	//       :readonly="readonly"
	//       :disabled="disabled"
	//       :name="name"
	//       :value.sync="value">
	//     </n3-input> 
	//   </div>
	// </div>
	// </template>
	
	// <script>
	function isValueNumber(value) {
	  return !isNaN(Number(value));
	}
	
	function calNum(num1, num2, symb) {
	  var sq1 = void 0,
	      sq2 = void 0,
	      m = void 0;
	
	  try {
	    sq1 = num1.toString().split('.')[1].length;
	  } catch (e) {
	    sq1 = 0;
	  }
	  try {
	    sq2 = num2.toString().split('.')[1].length;
	  } catch (e) {
	    sq2 = 0;
	  }
	  m = Math.pow(10, Math.max(sq1, sq2));
	
	  if (symb === '+') {
	    return (num1 * m + num2 * m) / m;
	  } else if (symb === '-') {
	    return (num1 * m - num2 * m) / m;
	  }
	}
	
	function preventDefault(e) {
	  e.preventDefault();
	}
	
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    },
	    max: {
	      type: Number
	    },
	    min: {
	      type: Number
	    },
	    value: {
	      type: [Number, String],
	      twoway: true
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    onChange: {
	      type: Function
	    },
	    readonly: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  data: function data() {
	    return {
	      noop: function noop() {},
	      preventDefault: preventDefault,
	      upDisabledClass: '',
	      downDisabledClass: ''
	    };
	  },
	
	
	  components: {
	    n3Input: _n3Input2.default,
	    n3Icon: _n3Icon2.default
	  },
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          disabled = this.disabled,
	          readonly = this.readonly;
	
	      var klass = {};
	
	      klass[prefixCls + '-input-number'] = true;
	      klass[prefixCls + '-input-number-disabled'] = disabled;
	      klass[prefixCls + '-input-number-readonly'] = readonly;
	
	      return klass;
	    }
	  },
	
	  watch: {
	    value: function value(val) {
	      if (isValueNumber(val)) {
	        val = Number(val);
	        if (val >= this.max) {
	          this.upDisabledClass = this.prefixCls + '-input-number-handler-up-disabled';
	        } else if (val <= this.min) {
	          this.downDisabledClass = this.prefixCls + '-input-number-handler-down-disabled';
	        } else {
	          this.upDisabledClass = '';
	          this.downDisabledClass = '';
	        }
	      } else {
	        this.upDisabledClass = this.prefixCls + '-input-number-handler-up-disabled';
	        this.downDisabledClass = this.prefixCls + '-input-number-handler-down-disabled';
	      }
	    }
	  },
	
	  methods: {
	    _setValue: function _setValue(value) {
	      this.value = value;
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(value);
	      }
	    },
	    _onChange: function _onChange(value) {
	      var val = String(value).trim();
	
	      if (!val) {
	        this._setValue(val);
	      } else if (isValueNumber(val)) {
	        val = Number(val);
	        if (val < this.min) return;
	        if (val > this.max) return;
	        this._setValue(val);
	      } else if (val === '-') {
	        if (this.min >= 0) return;
	        this.value = val;
	      }
	    },
	    _onKeyDown: function _onKeyDown(e) {
	      if (e.keyCode === 38) {
	        this._up(e);
	      } else if (e.keyCode === 40) {
	        this._down(e);
	      }
	    },
	    _onBlur: function _onBlur() {
	      if (this.value === '-') {
	        this._setValue('');
	      }
	    },
	    _step: function _step(type, e) {
	      var _this = this;
	
	      if (this.disabled || this.readonly) return;
	
	      var value = Number(this.value);
	      var stepNum = Number(this.step);
	
	      if (isNaN(value)) return;
	      if (type === 'down') value = calNum(value, stepNum, '-');else if (type === 'up') value = calNum(value, stepNum, '+');
	
	      if (value > this.max || value < this.min) return;
	
	      this._setValue(value, function () {
	        _this.focused = true;
	      });
	    },
	    _down: function _down(e) {
	      if (this.downDisabledClass) {
	        return;
	      }
	      this._step('down', e);
	    },
	    _up: function _up(e) {
	      if (this.upDisabledClass) {
	        return;
	      }
	      this._step('up', e);
	    }
	  }
	};
	
	// </script>

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" :style=\"{width: width}\">\n  <div class=\"{{prefixCls}}-input-number-handler-wrap\">\n    <a unselectable=\"unselectable\"\n      ref=\"up\"\n      @click=\"_up\"\n      @mouse.down=\"preventDefault\"\n      :class=\"[prefixCls + '-input-number-handler',prefixCls + '-input-number-handler-up',upDisabledClass]\">\n        <n3-icon\n          class=\"{{prefixCls}}-input-number-handler-up-inner\" \n          type=\"angle-up\" \n          @click=\"preventDefault\" \n          unselectable=\"unselectable\">\n        </n3-icon>\n    </a>\n    <a unselectable=\"unselectable\"\n       ref=\"down\"\n       @mouse.down=\"preventDefault\"\n       @click=\"_down\"\n       :class=\"[prefixCls + '-input-number-handler', prefixCls + '-input-number-handler-down', downDisabledClass]\">\n       <n3-icon\n          class=\"{{prefixCls}}-input-number-handler-down-inner\" \n          type=\"angle-down\" \n          @click=\"preventDefault\" \n          unselectable=\"unselectable\">\n        </n3-icon>\n    </a>\n  </div>\n  <div :class=\"prefixCls + '-input-number-input-wrap'\">\n    <n3-input\n      :on-focus=\"onFocus\"\n      :on-blur=\"onBlur\" \n      :width=\"width\"\n      :rules=\"rules\" \n      :validate=\"validate\"\n      :placeholder=\"placeholder\"\n      :custom-validate=\"customValidate\"\n      :on-blur=\"_onBlur\"\n      @keydown.stop=\"_onKeyDown\"\n      :on-change=\"_onChange\"\n      :readonly=\"readonly\"\n      :disabled=\"disabled\"\n      :name=\"name\"\n      :value.sync=\"value\">\n    </n3-input> \n  </div>\n</div>";

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(176)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(177)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Textarea.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Textarea.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Textarea.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Textarea.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Textarea.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    name: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    },
	    readonly: {
	      type: Boolean
	    },
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    resize: {
	      type: Boolean,
	      default: true
	    },
	    width: {
	      type: String,
	      default: '220px'
	    },
	    maxLength: {
	      type: Number
	    },
	    maxHeight: {
	      type: String
	    },
	    minHeight: {
	      type: String
	    },
	    value: {
	      type: String,
	      twoway: true
	    },
	    validStatus: {
	      type: String,
	      twoway: true,
	      default: ''
	    },
	    customValidate: {
	      type: Function
	    },
	    rules: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      validateResults: {}
	    };
	  },
	
	  components: {
	    validate: _validate2.default
	  },
	  computed: {
	    styleObj: function styleObj() {
	      var resize = this.resize,
	          maxHeight = this.maxHeight,
	          minHeight = this.minHeight;
	
	      var style = {};
	
	      style['maxWidth'] = '100%';
	      style['width'] = '100%';
	      style['maxHeight'] = maxHeight;
	      style['minHeight'] = minHeight;
	      !resize ? style['resize'] = 'none' : '';
	
	      return style;
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          validStatus = this.validStatus;
	
	      var klass = {};
	
	      klass[prefixCls + '-has-error'] = validStatus === 'error';
	      klass[prefixCls + '-has-success'] = validStatus === 'success';
	      klass[prefixCls + '-has-warn'] = validStatus === 'warn';
	
	      klass[prefixCls + '-textarea-con'] = true;
	      klass['inline'] = true;
	
	      return klass;
	    }
	  }
	};
	// </script>
	// <template>
	// <div :class="classObj" :style="{width:width}">
	//   <textarea
	//     class="{{prefixCls}}-form-control"  
	//     :disabled="disabled"
	//     :readonly="readonly"
	//     :maxlength="maxLength"
	//     :style="styleObj"
	//     :name="name"
	//     :placeholder="placeholder"
	//     v-model="value">
	//   </textarea>
	
	//   <validate
	//     :name="name"
	//     :valid-status.sync="validStatus"
	//     :rules="rules"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" :style=\"{width:width}\">\n  <textarea\n    class=\"{{prefixCls}}-form-control\"  \n    :disabled=\"disabled\"\n    :readonly=\"readonly\"\n    :maxlength=\"maxLength\"\n    :style=\"styleObj\"\n    :name=\"name\"\n    :placeholder=\"placeholder\"\n    v-model=\"value\">\n  </textarea>\n\n  <validate\n    :name=\"name\"\n    :valid-status.sync=\"validStatus\"\n    :rules=\"rules\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n\n</div>";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(179)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(180)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(160);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="{{prefixCls}}-datepicker">
	//     <n3-input 
	//     :width="width"
	//     :name="name" 
	//     :rules="rules" 
	//     :validate="validate" 
	//     :has-feedback="hasFeedback"
	//     :placeholder="placeholder"
	//     :custom-validate="customValidate"
	//     :readonly="true"
	//     :disabled="disabled"
	//     @click="inputClick"
	//     :value.sync="value">
	//     </n3-input>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show ="displayDayView" transition="fadeDown">
	//           <div class="{{prefixCls}}-datepicker-inner">
	//               <div class="{{prefixCls}}-datepicker-body">
	//                   <div class="{{prefixCls}}-datepicker-ctrl">
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                         @click="preNextMonthClick(0)">&lt;</span>
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                         @click="preNextMonthClick(1)">&gt;</span>
	//                       <p @click="switchMouthView">
	//                       {{stringifyDayHeader(currDate)}}
	//                       </p>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-weekRange">
	//                       <span v-for="w in weekRange">{{w}}</span>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-dateRange">
	//                       <span 
	//                         v-for="d in dateRange" :class="d.sclass" 
	//                         @click="daySelect(d.date,d.sclass)">
	//                         {{d.text}}
	//                       </span>
	//                   </div>
	//               </div>
	//           </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show ="displayMouthView" >
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                       @click="preNextYearClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextYearClick(1)">&gt;</span>
	//                     <p @click="switchDecadeView">
	//                     {{stringifyYearHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange">
	//                 	<template v-for="m in mouthNames">
	// 	                    <span   
	//                           :class="monthClassObj(m)"
	//                           @click="mouthSelect($index)">
	// 	                      {{m.substr(0,3)}}
	// 	                    </span>
	//                     </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show ="displayYearView" >
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                       @click="preNextDecadeClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextDecadeClick(1)">&gt;</span>
	//                     <p>
	//                     {{stringifyDecadeHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange">
	//                 	<template v-for="decade in decadeRange">
	//                 		<span 
	//                       :class="yearClassObj(decade)"
	// 	                    @click.stop="yearSelect(decade.text)">
	// 	                      {{decade.text}}
	// 	                 	</span>
	// 					        </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	// </div>
	// </template>
	
	// <script>
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'yyyy-MM-dd'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      today: this.stringify(new Date()),
	      weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMouthView: false,
	      displayYearView: false,
	      mouthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    value: function value(val) {
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    }
	  },
	  methods: {
	    monthClassObj: function monthClassObj(m) {
	      var prefixCls = this.prefixCls,
	          value = this.value,
	          mouthNames = this.mouthNames,
	          parse = this.parse,
	          currDate = this.currDate;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = value && parse(value) && mouthNames[parse(value).getMonth()] === m && currDate.getFullYear() === parse(value).getFullYear();
	
	      return klass;
	    },
	    yearClassObj: function yearClassObj(decade) {
	      var prefixCls = this.prefixCls,
	          value = this.value,
	          parse = this.parse;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = value && parse(value) && parse(value).getFullYear() === decade.text;
	
	      return klass;
	    },
	    close: function close() {
	      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
	    },
	    inputClick: function inputClick() {
	      if (this.disabled) return;
	      if (this.displayMouthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, mouths, date);
	      } else {
	        this.currDate = new Date(year + 10, mouths, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, mouths, date);
	      } else {
	        this.currDate = new Date(year + 1, mouths, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMouthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, klass) {
	      if (klass.indexOf(this.prefixCls + '-datepicker-item-disable') > -1) {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMouthView: function switchMouthView() {
	      this.displayDayView = false;
	      this.displayMouthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMouthView = false;
	      this.displayYearView = true;
	    },
	    mouthSelect: function mouthSelect(index) {
	      this.displayMouthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMouth: function parseMouth(date) {
	      return this.mouthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;
	
	      if (isNaN(date.getFullYear())) return '';
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, month).replace(/MMM/g, month).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = _this.prefixCls + '-datepicker-item-disable';
	        });
	
	        if (_i2 === time.day) {
	          if (_this.value) {
	            var valueDate = _this.parse(_this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = _this.prefixCls + '-datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  components: {
	    n3Input: _n3Input2.default
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this2.$el.contains(e.target)) _this2.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-datepicker\">\n    <n3-input \n    :width=\"width\"\n    :name=\"name\" \n    :rules=\"rules\" \n    :validate=\"validate\" \n    :has-feedback=\"hasFeedback\"\n    :placeholder=\"placeholder\"\n    :custom-validate=\"customValidate\"\n    :readonly=\"true\"\n    :disabled=\"disabled\"\n    @click=\"inputClick\"\n    :value.sync=\"value\">\n    </n3-input>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show =\"displayDayView\" transition=\"fadeDown\">\n          <div class=\"{{prefixCls}}-datepicker-inner\">\n              <div class=\"{{prefixCls}}-datepicker-body\">\n                  <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                        @click=\"preNextMonthClick(0)\">&lt;</span>\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                        @click=\"preNextMonthClick(1)\">&gt;</span>\n                      <p @click=\"switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-weekRange\">\n                      <span v-for=\"w in weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-dateRange\">\n                      <span \n                        v-for=\"d in dateRange\" :class=\"d.sclass\" \n                        @click=\"daySelect(d.date,d.sclass)\">\n                        {{d.text}}\n                      </span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show =\"displayMouthView\" >\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                      @click=\"preNextYearClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextYearClick(1)\">&gt;</span>\n                    <p @click=\"switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange\">\n                \t<template v-for=\"m in mouthNames\">\n\t                    <span   \n                          :class=\"monthClassObj(m)\"\n                          @click=\"mouthSelect($index)\">\n\t                      {{m.substr(0,3)}}\n\t                    </span>\n                    </template>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show =\"displayYearView\" >\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                      @click=\"preNextDecadeClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange\">\n                \t<template v-for=\"decade in decadeRange\">\n                \t\t<span \n                      :class=\"yearClassObj(decade)\"\n\t                    @click.stop=\"yearSelect(decade.text)\">\n\t                      {{decade.text}}\n\t                 \t</span>\n\t\t\t\t\t        </template>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(182)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(190)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Slider = __webpack_require__(183);
	
	var _n3Slider2 = _interopRequireDefault(_n3Slider);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(160);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      type: String,
	      default: 'hh:mm:ss'
	    },
	    hourRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 23];
	      }
	    },
	    minuteRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    secondRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    onHide: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  filters: {
	    fix: {
	      read: function read(val) {
	        return this.fix(val, 2);
	      },
	      write: function write(val) {
	        return parseInt(val);
	      }
	    }
	  },
	  watch: {
	    show: function show(val) {
	      if (!val && _type2.default.isFunction(this.onHide)) this.onHide(this.value);
	    },
	
	    time: {
	      deep: true,
	      handler: function handler(val) {
	        var ret = '';
	        this.time.hour > this.hourRange[1] ? this.time.hour = this.hourRange[1] : 0;
	        this.time.minute > this.minuteRange[1] ? this.time.minute = this.minuteRange[1] : 0;
	        this.time.second > this.secondRange[1] ? this.time.second = this.secondRange[1] : 0;
	        this.time.hour < this.hourRange[0] ? this.time.hour = this.hourRange[0] : 0;
	        this.time.minute < this.minuteRange[0] ? this.time.minute = this.minuteRange[0] : 0;
	        this.time.second < this.secondRange[0] ? this.time.second = this.secondRange[0] : 0;
	
	        if (this.hour) {
	          ret += this.fix(this.time.hour, 2) + ':';
	        }
	
	        if (this.minute) {
	          ret += this.fix(this.time.minute, 2) + ':';
	        }
	
	        if (this.second) {
	          ret += this.fix(this.time.second, 2) + ':';
	        }
	
	        ret = ret.substr(0, ret.length - 1);
	
	        this.value = ret;
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    inputClick: function inputClick() {
	      if (this.disabled) return;
	      this.show = !this.show;
	    },
	    fix: function fix(num, length) {
	      num = parseInt(num);
	      num = isNaN(num) ? 0 : num;
	
	      return ('' + num).length < length ? (new Array(length + 1).join('0') + num).slice(-length) : '' + num;
	    },
	    _format: function _format(str) {
	      var a = str.split(':');
	      if (this.hour) {
	        this.time.hour = parseInt(a[0] ? a[0] : 0);
	      }
	      if (this.minute) {
	        this.time.minute = parseInt(a[1] ? a[1] : 0);
	      }
	      if (this.second) {
	        this.time.second = parseInt(a[2] ? a[2] : 0);
	      }
	    }
	  },
	  computed: {
	    hour: function hour() {
	      return this.format.indexOf('hh') > -1;
	    },
	    minute: function minute() {
	      return this.format.indexOf('mm') > -1;
	    },
	    second: function second() {
	      return this.format.indexOf('ss') > -1;
	    }
	  },
	  data: function data() {
	    return {
	      show: false,
	      time: {
	        hour: 0,
	        minute: 0,
	        second: 0
	      }
	    };
	  },
	  created: function created() {
	    this._format(this.value);
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  components: {
	    n3Slider: _n3Slider2.default,
	    n3Input: _n3Input2.default
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-timepicker">
	//     <n3-input 
	//       :width="width"
	//       :name="name" 
	//       :rules="rules" 
	//       :validate="validate" 
	//       :has-feedback="hasFeedback"
	//       :placeholder="placeholder"
	//       :custom-validate="customValidate"
	//       :readonly="true"
	//       :disabled="disabled"
	//       @click="inputClick"
	//       :value.sync="value">
	//     </n3-input>
	//     <div class="{{prefixCls}}-timepicker-popup" v-show="show" transition="fadeDown">
	//       <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="hour" data-role="hour">
	//         <n3-slider 
	//           :value.sync="time.hour" 
	//           orientation="vertical" 
	//           :max="hourRange[1]" :min="hourRange[0]"  
	//           class="{{prefixCls}}-timepicker-slider">
	//         </n3-slider>
	//       </div>
	//       <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="minute" data-role="minute">
	//         <n3-slider 
	//           :value.sync="time.minute" 
	//           orientation="vertical" 
	//           :max="minuteRange[1]" 
	//           :min="minuteRange[0]"  
	//           class="{{prefixCls}}-timepicker-slider">
	//         </n3-slider>
	//       </div>
	//       <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="second" data-role="second">
	//         <n3-slider 
	//           :value.sync="time.second" 
	//           orientation="vertical" 
	//           :max="secondRange[1]" 
	//           :min="secondRange[0]" 
	//           class="{{prefixCls}}-timepicker-slider">
	//         </n3-slider>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(184)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(189)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slider.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slider.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Tooltip = __webpack_require__(185);
	
	var _n3Tooltip2 = _interopRequireDefault(_n3Tooltip);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _element = __webpack_require__(122);
	
	var _element2 = _interopRequireDefault(_element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="inline">
	//     <div :class="classObj" v-el:slider :style="styleObj">
	//       <n3-tooltip  :placement="orientation === 'horizontal' ? 'top' : 'right'" :noresize="true" trigger="mouse">
	//         <div class="{{prefixCls}}-slider-track">
	//           <div class="{{prefixCls}}-slider-track-low"></div>
	//           <div class="{{prefixCls}}-slider-selection" v-el:selection></div>
	//           <div class="{{prefixCls}}-slider-track-high" v-el:no-selection></div>
	//           <div class="{{prefixCls}}-slider-handle {{prefixCls}}-slider-min-slider-handle {{prefixCls}}-slider-round" v-el:min-slider></div>
	//           <div class="{{prefixCls}}-slider-handle {{prefixCls}}-slider-max-slider-handle {{prefixCls}}-slider-round" v-el:max-slider></div>
	//         </div>
	//       </n3-tooltip>
	//     </div>
	//   <input type="hidden" v-model="value">
	//   <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	// </div>
	// </template>
	
	// <script>
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    orientation: {
	      type: String,
	      default: 'horizontal'
	    },
	    tooltip: {
	      type: String,
	      default: 'show'
	    },
	    value: {
	      twoway: true,
	      default: 0
	    },
	    min: {
	      type: Number,
	      default: 0
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    max: {
	      type: Number,
	      default: 10
	    },
	    range: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    width: {
	      type: String,
	      default: '220px'
	    },
	    height: {
	      type: String,
	      default: '220px'
	    },
	    formatter: {
	      type: Function,
	      default: function _default(val) {
	        if (Array.isArray(val)) {
	          return val[0] + ' : ' + val[1];
	        } else {
	          return val;
	        }
	      }
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      flag: false,
	      tempValue: [0, 0],
	      tempFlag: 0,
	      btnValue: 0
	    };
	  },
	
	  computed: {
	    styleObj: function styleObj() {
	      if (this.orientation == 'horizontal') {
	        return {
	          width: this.width
	        };
	      } else {
	        return {
	          height: this.height
	        };
	      }
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          orientation = this.orientation;
	
	      var klass = {};
	
	      klass[prefixCls + '-slider'] = true;
	      klass[prefixCls + '-slider-' + orientation] = true;
	
	      return klass;
	    },
	
	    eValue: {
	      get: function get() {
	        return this.eValue;
	      },
	      set: function set(val) {
	        if (_type2.default.isArray(this.value) && this.range) {
	          this.value = [Math.min(this.tempValue[0], this.tempValue[1]), Math.max(this.tempValue[0], this.tempValue[1])];
	        } else {
	          this.value = this.tempValue[1];
	        }
	      }
	    }
	  },
	  watch: {
	    value: function value(val) {
	      this.setTempValue();
	      this.setPosition();
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    }
	  },
	  methods: {
	    setTempValue: function setTempValue() {
	      var val = this.value;
	      if (_type2.default.isArray(val) && this.range) {
	        _element2.default.removeClass(this.$els.maxSlider, this.prefixCls + '-slider-hide');
	        this.tempValue = val;
	      } else {
	        _element2.default.addClass(this.$els.maxSlider, this.prefixCls + '-slider-hide');
	        this.tempValue = [this.min, val];
	      }
	    },
	    setPosition: function setPosition() {
	      var selection = this.$els.selection;
	      var bar = this.$els.minSlider;
	      var maxBar = this.$els.maxSlider;
	      var rangeSlider = this.$els.slider;
	      var tooltip = bar.parentNode.parentNode.nextElementSibling;
	
	      if (this.orientation === 'horizontal') {
	        bar.style.left = (this.tempValue[1] - this.min) / (this.max - this.min) * 100 + '%';
	        maxBar.style.left = (this.tempValue[0] - this.min) / (this.max - this.min) * 100 + '%';
	        selection.style.width = Math.abs(this.tempValue[1] - this.tempValue[0]) / (this.max - this.min) * 100 + '%';
	        selection.style.left = (Math.min(this.tempValue[0], this.tempValue[1]) - this.min) / (this.max - this.min) * 100 + '%';
	
	        if (_type2.default.isArray(this.value) && this.range) {
	          tooltip.style.left = (this.tempValue[1] + this.tempValue[0] - 2 * this.min) / ((this.max - this.min) * 2) * rangeSlider.offsetWidth + 'px';
	        } else {
	          tooltip.style.left = (this.tempValue[1] - this.min) / (this.max - this.min) * rangeSlider.offsetWidth + 'px';
	        }
	        tooltip.style.top = 0;
	      } else if (this.orientation === 'vertical') {
	        bar.style.top = (this.tempValue[1] - this.min) / (this.max - this.min) * 100 + '%';
	        maxBar.style.top = (this.tempValue[0] - this.min) / (this.max - this.min) * 100 + '%';
	        selection.style.height = Math.abs(this.tempValue[1] - this.tempValue[0]) / (this.max - this.min) * 100 + '%';
	        selection.style.top = (Math.min(this.tempValue[0], this.tempValue[1]) - this.min) / (this.max - this.min) * 100 + '%';
	
	        if (_type2.default.isArray(this.value) && this.range) {
	          tooltip.style.top = (this.tempValue[1] + this.tempValue[0] - 2 * this.min) / ((this.max - this.min) * 2) * rangeSlider.offsetHeight + 'px';
	        } else {
	          tooltip.style.top = (this.tempValue[1] - this.min) / (this.max - this.min) * rangeSlider.offsetHeight + 'px';
	        }
	
	        tooltip.style.left = 0;
	      }
	
	      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.value);
	    },
	    setRange: function setRange(now, range) {
	      return now < 0 ? 0 : now > range ? range : now;
	    },
	    setStep: function setStep(num) {
	      return Math.round(num / this.step) * this.step;
	    },
	    startDrag: function startDrag(bar, maxBar, rangeSlider) {
	      var self = this;
	
	      if (!self.disabled) {
	        _element2.default.removeClass(rangeSlider, this.prefixCls + '-slider-disabled');
	        this._mousedownEvent = _EventListener2.default.listen(rangeSlider, 'mousedown', function (event) {
	          self.flag = true;
	          if (!event) {
	            event = window.event;
	            bar.onselectstart = function () {
	              return false;
	            };
	          }
	          var e = event || window.event;
	          var mousedownPositionPercent;
	
	          if (self.orientation === 'horizontal') {
	            mousedownPositionPercent = self.setRange(e.clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth;
	          } else if (self.orientation === 'vertical') {
	            mousedownPositionPercent = self.setRange(e.clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight;
	          }
	          var value = self.setStep(mousedownPositionPercent * (self.max - self.min) / 100 + self.min);
	
	          if (value * 2 > self.tempValue[0] + self.tempValue[1]) {
	            if (self.tempValue[1] > self.tempValue[0]) {
	              self.tempValue[1] = value;
	              self.btnValue = self.tempValue[0];
	              self.tempFlag = 2;
	            } else {
	              self.tempValue[0] = value;
	              self.btnValue = self.tempValue[1];
	              self.tempFlag = 1;
	            }
	          } else {
	            if (self.tempValue[1] > self.tempValue[0]) {
	              self.tempValue[0] = value;
	              self.btnValue = self.tempValue[1];
	              self.tempFlag = 1;
	            } else {
	              self.tempValue[1] = value;
	              self.btnValue = self.tempValue[0];
	              self.tempFlag = 2;
	            }
	          }
	          self.eValue = value;
	        });
	
	        this._mousemoveEvent = _EventListener2.default.listen(document, 'mousemove', function (event) {
	          var e = event || window.event;
	          if (self.flag) {
	            var mousedownPositionPercent;
	            if (self.orientation === 'horizontal') {
	              mousedownPositionPercent = self.setRange(e.clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth;
	            } else if (self.orientation === 'vertical') {
	              mousedownPositionPercent = self.setRange(e.clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight;
	            }
	            var value = self.setStep(mousedownPositionPercent * (self.max - self.min) / 100 + self.min);
	
	            if (self.tempValue[0] > value && self.tempValue[1] > value) {
	              self.tempFlag = 1;
	            }
	            if (self.tempValue[0] < value && self.tempValue[1] < value) {
	              self.tempFlag = 2;
	            }
	            self.tempValue[self.tempFlag - 1] = value;
	            self.tempValue[self.tempFlag === 1 ? 1 : 0] = self.btnValue;
	            self.eValue = value;
	          }
	        });
	
	        this._mouseupEvent = _EventListener2.default.listen(document, 'mouseup', function (e) {
	          self.flag = false;
	          self.tempFlag = 0;
	        });
	      } else {
	        _element2.default.addClass(rangeSlider, this.prefixCls + '-slider-disabled');
	      }
	    },
	    tooltipInit: function tooltipInit() {
	      var tooltip = this.$els.minSlider.parentNode.parentNode.nextElementSibling;
	
	      tooltip.style.left = 0;
	      tooltip.style.top = 0;
	      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.value);
	
	      if (this.orientation === 'horizontal') {
	        _element2.default.addClass(tooltip, this.prefixCls + '-slider-top');
	        _element2.default.removeClass(tooltip, this.prefixCls + '-slider-right');
	      } else if (this.orientation === 'vertical') {
	        _element2.default.addClass(tooltip, this.prefixCls + '-slider-right');
	        _element2.default.removeClass(tooltip, this.prefixCls + '-slider-top');
	      }
	      if (this.tooltip === 'always') {
	        _element2.default.addClass(tooltip, this.prefixCls + '-slider-tooltip-always');
	        _element2.default.removeClass(tooltip, this.prefixCls + '-slider-tooltip-hide');
	      } else if (this.tooltip === 'hide') {
	        _element2.default.addClass(tooltip, this.prefixCls + '-slider-tooltip-hide');
	        _element2.default.removeClass(tooltip, this.prefixCls + '-slider-tooltip-always');
	      }
	    },
	    init: function init() {
	      var bar = this.$els.minSlider;
	      var rangeSlider = this.$els.slider;
	      var maxBar = this.$els.maxSlider;
	
	      this.startDrag(bar, maxBar, rangeSlider);
	      this.tooltipInit();
	      this.setTempValue();
	      this.setPosition();
	    }
	  },
	  ready: function ready() {
	    this.init();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._mousemoveEvent) {
	      this._mousemoveEvent.remove();
	    }
	    if (this._mousedownEvent) {
	      this._mousedownEvent.remove();
	    }
	    if (this._mouseupEvent) {
	      this._mouseupEvent.remove();
	    }
	  },
	
	  components: {
	    n3Tooltip: _n3Tooltip2.default,
	    validate: _validate2.default
	  }
	};
	// </script>

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(188)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tooltip.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tooltip.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(187);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  mixins: [_popoverMixins2.default],
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          placement = this.placement;
	
	      var klass = {};
	
	      klass[prefixCls + '-tooltip'] = true;
	      klass[prefixCls + '-tooltip-top'] = placement === 'top';
	      klass[prefixCls + '-tooltip-left'] = placement === 'left';
	      klass[prefixCls + '-tooltip-right'] = placement === 'right';
	      klass[prefixCls + '-tooltip-bottom'] = placement === 'bottom';
	
	      return klass;
	    }
	  }
	};
	// </script>
	// <template>
	// <span >
	//   <span v-el:trigger >
	//     <slot>
	//     </slot>
	//   </span>
	//   <div :class="classObj"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect">
	//     <div class="{{prefixCls}}-tooltip-arrow"></div>
	//     <div class="{{prefixCls}}-tooltip-inner">
	//       {{{content}}}
	//     </div>
	//   </div>
	// </span>
	// </template>
	
	// <script>

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopoverMixin = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'scale'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      default: true
	    },
	    placement: {
	      type: String
	    },
	    noresize: {
	      type: Boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      twoWay: true,
	      default: true
	    },
	    onClick: {
	      type: Function
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      }
	    };
	  },
	
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (val && !this.noresize) {
	        this.$nextTick(function () {
	          _this.resize();
	        });
	      }
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	    resize: function resize() {
	      var popover = this.$els.popover;
	      var triger = this.$els.trigger.children[0];
	      popover.style.display = 'block';
	      triger.style.position = 'relative';
	
	      switch (this.placement) {
	        case 'top':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = triger.offsetTop - popover.offsetHeight;
	          break;
	        case 'left':
	          this.position.left = triger.offsetLeft - popover.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'right':
	          this.position.left = triger.offsetLeft + triger.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'bottom':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = triger.offsetTop + triger.offsetHeight;
	          break;
	        default:
	          console.log('Wrong placement prop');
	      }
	      popover.style.top = this.position.top + 'px';
	      popover.style.left = this.position.left + 'px';
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    if (!this.$els.popover) return;
	    var popover = this.$els.popover;
	    var triger = this.$els.trigger.children[0];
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        _this2.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        _this2.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      var input = this.$els.trigger.querySelector('input');
	      if (input) {
	        this._focusEvent = _EventListener2.default.listen(input, 'focus', function () {
	          _this2.show = true;
	        });
	        this._blurEvent = _EventListener2.default.listen(input, 'blur', function () {
	          _this2.show = false;
	        });
	      }
	    } else if (this.trigger === 'mouse') {
	      this._mousedownEvent = _EventListener2.default.listen(triger, 'mousedown', function () {
	        _this2.show = true;
	      });
	      this._mouseupEvent = _EventListener2.default.listen(window, 'mouseup', function () {
	        _this2.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
	      this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	        if (!_this2.$el.contains(e.target)) _this2.show = false;
	        if (_this2.$els.content && _this2.$els.content.contains(e.target) && _type2.default.isFunction(_this2.onClick)) {
	          _this2.onClick(e, _this2);
	        }
	      });
	    }
	    this.resize();
	    popover.style.display = 'none';
	    this.show = false;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) {
	      this._clickEvent.remove();
	      this._closeEvent.remove();
	    }
	    if (this._mousedownEvent) {
	      this._mousedownEvent.remove();
	      this._mouseupEvent.remove();
	    }
	  }
	};
	exports.default = PopoverMixin;

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "<span >\n  <span v-el:trigger >\n    <slot>\n    </slot>\n  </span>\n  <div :class=\"classObj\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\">\n    <div class=\"{{prefixCls}}-tooltip-arrow\"></div>\n    <div class=\"{{prefixCls}}-tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>\n</span>";

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inline\">\n    <div :class=\"classObj\" v-el:slider :style=\"styleObj\">\n      <n3-tooltip  :placement=\"orientation === 'horizontal' ? 'top' : 'right'\" :noresize=\"true\" trigger=\"mouse\">\n        <div class=\"{{prefixCls}}-slider-track\">\n          <div class=\"{{prefixCls}}-slider-track-low\"></div>\n          <div class=\"{{prefixCls}}-slider-selection\" v-el:selection></div>\n          <div class=\"{{prefixCls}}-slider-track-high\" v-el:no-selection></div>\n          <div class=\"{{prefixCls}}-slider-handle {{prefixCls}}-slider-min-slider-handle {{prefixCls}}-slider-round\" v-el:min-slider></div>\n          <div class=\"{{prefixCls}}-slider-handle {{prefixCls}}-slider-max-slider-handle {{prefixCls}}-slider-round\" v-el:max-slider></div>\n        </div>\n      </n3-tooltip>\n    </div>\n  <input type=\"hidden\" v-model=\"value\">\n  <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n</div>";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-timepicker\">\n    <n3-input \n      :width=\"width\"\n      :name=\"name\" \n      :rules=\"rules\" \n      :validate=\"validate\" \n      :has-feedback=\"hasFeedback\"\n      :placeholder=\"placeholder\"\n      :custom-validate=\"customValidate\"\n      :readonly=\"true\"\n      :disabled=\"disabled\"\n      @click=\"inputClick\"\n      :value.sync=\"value\">\n    </n3-input>\n    <div class=\"{{prefixCls}}-timepicker-popup\" v-show=\"show\" transition=\"fadeDown\">\n      <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"hour\" data-role=\"hour\">\n        <n3-slider \n          :value.sync=\"time.hour\" \n          orientation=\"vertical\" \n          :max=\"hourRange[1]\" :min=\"hourRange[0]\"  \n          class=\"{{prefixCls}}-timepicker-slider\">\n        </n3-slider>\n      </div>\n      <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"minute\" data-role=\"minute\">\n        <n3-slider \n          :value.sync=\"time.minute\" \n          orientation=\"vertical\" \n          :max=\"minuteRange[1]\" \n          :min=\"minuteRange[0]\"  \n          class=\"{{prefixCls}}-timepicker-slider\">\n        </n3-slider>\n      </div>\n      <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"second\" data-role=\"second\">\n        <n3-slider \n          :value.sync=\"time.second\" \n          orientation=\"vertical\" \n          :max=\"secondRange[1]\" \n          :min=\"secondRange[0]\" \n          class=\"{{prefixCls}}-timepicker-slider\">\n        </n3-slider>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(192)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(193)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datetimepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datetimepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datetimepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datetimepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datetimepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _watch;
	
	var _n3Slider = __webpack_require__(183);
	
	var _n3Slider2 = _interopRequireDefault(_n3Slider);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(160);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // <template>
	//   <div class="{{prefixCls}}-datepicker {{prefixCls}}-timepicker {{prefixCls}}-datetimepicker" v-el:datetimepicker>
	//     <n3-input
	//       :width="width"
	//       :name="name" 
	//       :rules="rules" 
	//       :validate="validate" 
	//       :has-feedback="hasFeedback"
	//       :placeholder="placeholder"
	//       :custom-validate="customValidate"
	//       :readonly="true"
	//       :disabled="disabled"
	//       @click="inputClick"
	//       :value.sync="value">
	//     </n3-input>
	//       <div 
	//         class="{{prefixCls}}-datepicker-popup" 
	//         v-show="displayDayView" 
	//         :style="{width:popWidth}" 
	//         transition="fadeDown">
	//           <div class="{{prefixCls}}-datepicker-inner" v-el:datepicker>
	//               <div class="{{prefixCls}}-datepicker-body">
	//                   <div class="{{prefixCls}}-datepicker-ctrl">
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                         @click="preNextMonthClick(0)">&lt;</span>
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                         @click="preNextMonthClick(1)">&gt;</span>
	//                       <p @click="switchMouthView">
	//                       {{stringifyDayHeader(currDate)}}
	//                       </p>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-weekRange">
	//                       <span v-for="w in weekRange">{{w}}</span>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-dateRange">
	//                       <span v-for="d in dateRange" 
	//                       :class="[d.sclass,prefixCls + '-datetimepicker-date-span']" 
	//                       @click="daySelect(d.date,d.sclass)">{{d.text}}</span>
	//                   </div>
	//               </div>
	//           </div>
	//           <div class="{{prefixCls}}-timepicker-con">
	//             <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="hour" data-role="hour">
	//               <n3-slider 
	//                 class="{{prefixCls}}-timepicker-slider"
	//                 :value.sync="time.hour" 
	//                 orientation="vertical" 
	//                 :max="hourRange[1]" 
	//                 :min="hourRange[0]" >
	//               </n3-slider>
	//             </div>
	//             <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="minute" data-role="minute">
	//               <n3-slider
	//                 class="{{prefixCls}}-timepicker-slider" 
	//                 :value.sync="time.minute" 
	//                 orientation="vertical" 
	//                 :max="minuteRange[1]" 
	//                 :min="minuteRange[0]" >
	//               </n3-slider>
	//             </div>
	//             <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="second" data-role="second">
	//               <n3-slider 
	//                 class="{{prefixCls}}-timepicker-slider"
	//                 :value.sync="time.second" 
	//                 orientation="vertical" 
	//                 :max="secondRange[1]" 
	//                 :min="secondRange[0]" >
	//               </n3-slider>
	//             </div>
	//           </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show="displayMouthView">
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                       @click="preNextYearClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextYearClick(1)">&gt;</span>
	//                     <p @click="switchDecadeView">
	//                     {{stringifyYearHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange">
	//                 	<template v-for="m in mouthNames">
	// 	                    <span 
	//                         :class="monthClassobj(m)"
	//                         @click="mouthSelect($index)">
	// 	                      {{m.substr(0,3)}}
	// 	                    </span>
	//                     </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show="displayYearView">
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn"
	//                       @click="preNextDecadeClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextDecadeClick(1)">&gt;</span>
	//                     <p>
	//                     {{stringifyDecadeHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange">
	//                 	<template v-for="decade in decadeRange">
	//                 		<span
	//                       :class="yearClassobj(decade)"
	// 	                    @click.stop="yearSelect(decade.text)">
	// 	                      {{decade.text}}
	// 	                  </span>
	// 					        </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	// </div>
	// </template>
	
	// <script>
	
	
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'yyyy-MM-dd hh:mm:ss'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    hourRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 23];
	      }
	    },
	    minuteRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    secondRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    onHide: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMouthView: false,
	      displayYearView: false,
	      time: {
	        hour: 0,
	        minute: 0,
	        second: 0
	      },
	      popWidth: '',
	      date: '',
	      mouthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	    };
	  },
	
	  watch: (_watch = {
	    displayDayView: function displayDayView() {
	      this.dispatchHide();
	    },
	    displayMouthView: function displayMouthView() {
	      this.dispatchHide();
	    },
	    displayYearView: function displayYearView() {
	      this.dispatchHide();
	    },
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  }, _defineProperty(_watch, 'displayDayView', function displayDayView(val) {
	    var _this = this;
	
	    if (val) {
	      this.$nextTick(function () {
	        var width = _this.$els.datepicker.offsetWidth * 1 + 30;
	        console.log(_this.$els.datepicker.offsetWidth);
	        _this.hour ? width += 42 : 0;
	        _this.minute ? width += 42 : 0;
	        _this.second ? width += 42 : 0;
	        _this.popWidth = width + 'px';
	      });
	    }
	  }), _defineProperty(_watch, 'date', function date() {
	    this.value = this.date + ' ' + this.handTime();
	  }), _defineProperty(_watch, 'time', {
	    deep: true,
	    handler: function handler(val) {
	      this.value = this.date + ' ' + this.handTime();
	    }
	  }), _watch),
	  computed: {
	    hour: function hour() {
	      if (this.format.indexOf('hh') > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    minute: function minute() {
	      if (this.format.indexOf('mm') > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    second: function second() {
	      if (this.format.indexOf('ss') > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  },
	  methods: {
	    monthClassobj: function monthClassobj(m) {
	      var prefixCls = this.prefixCls,
	          date = this.date,
	          mouthNames = this.mouthNames,
	          parse = this.parse,
	          currDate = this.currDate;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = date && parse(date) && mouthNames[parse(date).getMonth()] === m && currDate.getFullYear() === parse(date).getFullYear();
	
	      return klass;
	    },
	    yearClassobj: function yearClassobj(decade) {
	      var prefixCls = this.prefixCls,
	          date = this.date,
	          parse = this.parse;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = date && parse(date) && parse(date).getFullYear() === decade.text;
	
	      return klass;
	    },
	    dispatchHide: function dispatchHide() {
	      var show = this.displayDayView || this.displayMouthView || this.displayYearView;
	      if (!show) {
	        if (_type2.default.isFunction(this.onHide)) {
	          this.onHide();
	        }
	      }
	    },
	    close: function close() {
	      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
	    },
	    handTime: function handTime() {
	      var ret = '';
	      this.time.hour > this.hourRange[1] ? this.time.hour = this.hourRange[1] : 0;
	      this.time.minute > this.minuteRange[1] ? this.time.minute = this.minuteRange[1] : 0;
	      this.time.second > this.secondRange[1] ? this.time.second = this.secondRange[1] : 0;
	      this.time.hour < this.hourRange[0] ? this.time.hour = this.hourRange[0] : 0;
	      this.time.minute < this.minuteRange[0] ? this.time.minute = this.minuteRange[0] : 0;
	      this.time.second < this.secondRange[0] ? this.time.second = this.secondRange[0] : 0;
	
	      if (this.hour) {
	        ret += this.fix(this.time.hour, 2) + ':';
	      }
	
	      if (this.minute) {
	        ret += this.fix(this.time.minute, 2) + ':';
	      }
	
	      if (this.second) {
	        ret += this.fix(this.time.second, 2) + ':';
	      }
	
	      return ret.substr(0, ret.length - 1);
	    },
	    fix: function fix(num, length) {
	      num = parseInt(num);
	      num = isNaN(num) ? 0 : num;
	      return ('' + num).length < length ? (new Array(length + 1).join('0') + num).slice(-length) : '' + num;
	    },
	    inputClick: function inputClick() {
	      if (this.disabled) return;
	      if (this.displayMouthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, mouths, date);
	      } else {
	        this.currDate = new Date(year + 10, mouths, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, mouths, date);
	      } else {
	        this.currDate = new Date(year + 1, mouths, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMouthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, klass) {
	      if (klass.indexOf(this.prefixCls + '-datepicker-item-disable') > -1) {
	        return false;
	      } else {
	        this.currDate = date;
	        this.date = this.stringify(this.currDate);
	      }
	    },
	    switchMouthView: function switchMouthView() {
	      this.displayDayView = false;
	      this.displayMouthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMouthView = false;
	      this.displayYearView = true;
	    },
	    mouthSelect: function mouthSelect(index) {
	      this.displayMouthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMouth: function parseMouth(date) {
	      return this.mouthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringifyTime: function stringifyTime(date) {
	      var hour = date.getHours();
	      var minute = date.getMinutes();
	      var second = date.getSeconds();
	
	      return {
	        hour: hour,
	        minute: minute,
	        second: second
	      };
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;
	
	      if (isNaN(date.getFullYear())) return '';
	      var dateFormat = format.split(/\s+/)[0];
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	
	      return dateFormat.replace(/yyyy/g, year).replace(/MMMM/g, month).replace(/MMM/g, month).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this2 = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this2.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = _this2.prefixCls + '-datepicker-item-disable';
	        });
	
	        if (_i2 === time.day) {
	          if (_this2.date) {
	            var valueDate = _this2.parse(_this2.date);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = _this2.prefixCls + '-datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this2.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  created: function created() {
	    if (this.value) {
	      this.date = this.stringify(new Date(this.value));
	      this.time = this.stringifyTime(new Date(this.value));
	    }
	  },
	  ready: function ready() {
	    var _this3 = this;
	
	    var self = this;
	    this.currDate = this.parse(this.date) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!self.displayDayView && !self.displayMouthView && !self.displayMouthView) {
	        return;
	      }
	      var check = e.target.className.indexOf(_this3.prefixCls + '-datetimepicker-date-span') > -1;
	      if (!self.$el.contains(e.target) && !check) self.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  components: {
	    n3Slider: _n3Slider2.default,
	    n3Input: _n3Input2.default
	  },
	  filters: {
	    fix: {
	      read: function read(val) {
	        return this.fix(val, 2);
	      },
	      write: function write(val) {
	        return parseInt(val);
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-datepicker {{prefixCls}}-timepicker {{prefixCls}}-datetimepicker\" v-el:datetimepicker>\n    <n3-input\n      :width=\"width\"\n      :name=\"name\" \n      :rules=\"rules\" \n      :validate=\"validate\" \n      :has-feedback=\"hasFeedback\"\n      :placeholder=\"placeholder\"\n      :custom-validate=\"customValidate\"\n      :readonly=\"true\"\n      :disabled=\"disabled\"\n      @click=\"inputClick\"\n      :value.sync=\"value\">\n    </n3-input>\n      <div \n        class=\"{{prefixCls}}-datepicker-popup\" \n        v-show=\"displayDayView\" \n        :style=\"{width:popWidth}\" \n        transition=\"fadeDown\">\n          <div class=\"{{prefixCls}}-datepicker-inner\" v-el:datepicker>\n              <div class=\"{{prefixCls}}-datepicker-body\">\n                  <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                        @click=\"preNextMonthClick(0)\">&lt;</span>\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                        @click=\"preNextMonthClick(1)\">&gt;</span>\n                      <p @click=\"switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-weekRange\">\n                      <span v-for=\"w in weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-dateRange\">\n                      <span v-for=\"d in dateRange\" \n                      :class=\"[d.sclass,prefixCls + '-datetimepicker-date-span']\" \n                      @click=\"daySelect(d.date,d.sclass)\">{{d.text}}</span>\n                  </div>\n              </div>\n          </div>\n          <div class=\"{{prefixCls}}-timepicker-con\">\n            <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"hour\" data-role=\"hour\">\n              <n3-slider \n                class=\"{{prefixCls}}-timepicker-slider\"\n                :value.sync=\"time.hour\" \n                orientation=\"vertical\" \n                :max=\"hourRange[1]\" \n                :min=\"hourRange[0]\" >\n              </n3-slider>\n            </div>\n            <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"minute\" data-role=\"minute\">\n              <n3-slider\n                class=\"{{prefixCls}}-timepicker-slider\" \n                :value.sync=\"time.minute\" \n                orientation=\"vertical\" \n                :max=\"minuteRange[1]\" \n                :min=\"minuteRange[0]\" >\n              </n3-slider>\n            </div>\n            <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"second\" data-role=\"second\">\n              <n3-slider \n                class=\"{{prefixCls}}-timepicker-slider\"\n                :value.sync=\"time.second\" \n                orientation=\"vertical\" \n                :max=\"secondRange[1]\" \n                :min=\"secondRange[0]\" >\n              </n3-slider>\n            </div>\n          </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show=\"displayMouthView\">\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                      @click=\"preNextYearClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextYearClick(1)\">&gt;</span>\n                    <p @click=\"switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange\">\n                \t<template v-for=\"m in mouthNames\">\n\t                    <span \n                        :class=\"monthClassobj(m)\"\n                        @click=\"mouthSelect($index)\">\n\t                      {{m.substr(0,3)}}\n\t                    </span>\n                    </template>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show=\"displayYearView\">\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\"\n                      @click=\"preNextDecadeClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange\">\n                \t<template v-for=\"decade in decadeRange\">\n                \t\t<span\n                      :class=\"yearClassobj(decade)\"\n\t                    @click.stop=\"yearSelect(decade.text)\">\n\t                      {{decade.text}}\n\t                  </span>\n\t\t\t\t\t        </template>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(195)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(196)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Dropdown.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Dropdown.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Dropdown.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Dropdown.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Dropdown.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      twoWay: true
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    clickClose: {
	      type: Boolean,
	      default: false
	    },
	    effect: {
	      type: String,
	      default: 'fadeDown'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  methods: {
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var el = this.$el;
	    var triger = this.$els.trigger.children[0];
	
	    if (this.trigger === 'click') {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggleDropdown);
	      this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	        if (!_this.clickClose && !el.contains(e.target)) _this.show = false;
	      });
	    } else if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        _this.show = true;
	      });
	      this._closeEvent = _EventListener2.default.listen(this.$el, 'mouseleave', function () {
	        _this.show = false;
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	    if (this._clickEvent) this._clickEvent.remove();
	    if (this._mouseenterEvent) this._mouseenterEvent.remove();
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-dropdown-con">   
	//     <span v-el:trigger> 
	//       <slot name="trigger" ></slot>
	//     </span>
	//     <ul class="{{prefixCls}}-dropdown-menu" v-show="show" :transition="effect">
	//       <slot></slot>
	//     </ul>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-dropdown-con\">   \n    <span v-el:trigger> \n      <slot name=\"trigger\" ></slot>\n    </span>\n    <ul class=\"{{prefixCls}}-dropdown-menu\" v-show=\"show\" :transition=\"effect\">\n      <slot></slot>\n    </ul>\n  </div>";

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(198)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(199)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Modal.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Modal.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getScrollBarWidth = __webpack_require__(132);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _element = __webpack_require__(122);
	
	var _element2 = _interopRequireDefault(_element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      require: true,
	      type: Boolean,
	      twoWay: true
	    },
	    width: {
	      type: String,
	      default: '600px'
	    },
	    effect: {
	      type: String,
	      default: 'fade'
	    },
	    backdrop: {
	      type: Boolean,
	      default: true
	    },
	    onShow: {
	      type: Function
	    },
	    onHide: {
	      type: Function
	    },
	    onConfirm: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Button: _n3Button2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          effect = this.effect;
	
	      var klass = {};
	
	      klass[prefixCls + '-modal'] = true;
	      klass[prefixCls + '-modal-' + effect] = true;
	
	      return klass;
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (val) {
	        if (_type2.default.isFunction(this.onShow)) {
	          this.onShow();
	        }
	      } else {
	        if (_type2.default.isFunction(this.onHide)) {
	          this.onHide();
	        }
	      }
	
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        el.querySelector('.' + this.prefixCls + '-modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return _element2.default.addClass(el, _this.prefixCls + '-modal-in');
	        }, 0);
	        _element2.default.addClass(body, this.prefixCls + '-modal-open');
	        if (!scrollBarWidth) {
	          _element2.default.addClass(body, this.prefixCls + '-modal-hide-y');
	        }
	        if (this.backdrop) {
	          this._blurModalContentEvent = _EventListener2.default.listen(this.$el, 'click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        if (this._blurModalContentEvent) this._blurModalContentEvent.remove();
	        _element2.default.removeClass(el, this.prefixCls + '-modal-in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          _element2.default.removeClass(body, _this.prefixCls + '-modal-open');
	          _element2.default.removeClass(body, _this.prefixCls + '-modal-hide-y');
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    confirm: function confirm() {
	      if (_type2.default.isFunction(this.onConfirm)) {
	        this.onConfirm();
	      }
	    }
	  }
	};
	// </script>
	// <template>
	//   <div :class="classObj">
	//     <div class="{{prefixCls}}-modal-dialog" 
	//       :style="{'width': width}">
	//       <div class="{{prefixCls}}-modal-content">
	//         <slot name="header">
	//           <div class="{{prefixCls}}-modal-header">
	//             <button type="button" class="{{prefixCls}}-close" @click="close"><span>&times;</span></button>
	//             <h4 class="{{prefixCls}}-modal-title" >{{title}}</h4>
	//           </div>
	//         </slot>
	
	//         <div class="{{prefixCls}}-modal-body">
	//           <slot name="body"></slot>
	//         </div>
	
	//         <slot name="footer">
	//           <div class="{{prefixCls}}-modal-footer">
	//             <n3-button  @click="close">取消</n3-button>
	//             <n3-button type="primary" @click="confirm">确定</n3-button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\">\n    <div class=\"{{prefixCls}}-modal-dialog\" \n      :style=\"{'width': width}\">\n      <div class=\"{{prefixCls}}-modal-content\">\n        <slot name=\"header\">\n          <div class=\"{{prefixCls}}-modal-header\">\n            <button type=\"button\" class=\"{{prefixCls}}-close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"{{prefixCls}}-modal-title\" >{{title}}</h4>\n          </div>\n        </slot>\n        \n        <div class=\"{{prefixCls}}-modal-body\">\n          <slot name=\"body\"></slot>\n        </div>\n      \n        <slot name=\"footer\">\n          <div class=\"{{prefixCls}}-modal-footer\">\n            <n3-button  @click=\"close\">取消</n3-button>\n            <n3-button type=\"primary\" @click=\"confirm\">确定</n3-button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(201)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(202)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Option.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Option.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Option.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Option.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Option.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 201 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :value="value" class="{{prefixCls}}-option">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<div :value=\"value\" class=\"{{prefixCls}}-option\">\n    <slot></slot>\n  </div>";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(204)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(205)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Panel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Panel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      default: false
	    },
	    header: {
	      type: String
	    },
	    index: {},
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      height: 0
	    };
	  },
	
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('n3@paneltoggle', this);
	
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange({
	          index: this.index,
	          header: this.header,
	          isOpen: this.isOpen
	        });
	      }
	    }
	  },
	  ready: function ready() {
	    var panel = this.$els.panel;
	    panel.style.display = 'block';
	    if (!this.isOpen) panel.style.display = 'none';
	  }
	};
	// </script>
	// <template>
	// <div class="{{prefixCls}}-panel {{prefixCls}}-panel-default">
	//     <div class="{{prefixCls}}-panel-heading">
	//       <h4 class="{{prefixCls}}-panel-title">
	//         <a @click="toggleIsOpen()">
	//            <slot name="header">
	//             {{header}}
	//            </slot>
	//         </a>
	//       </h4>
	//     </div>
	//     <div
	//       class="{{prefixCls}}-panel-collapse"
	//       v-el:panel
	//       v-show="isOpen"
	//       :transition="$parent.effect">
	//       <div class="{{prefixCls}}-panel-body">
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-panel {{prefixCls}}-panel-default\">\n    <div class=\"{{prefixCls}}-panel-heading\">\n      <h4 class=\"{{prefixCls}}-panel-title\">\n        <a @click=\"toggleIsOpen()\">\n           <slot name=\"header\">\n            {{header}}\n           </slot>\n        </a>\n      </h4>\n    </div>\n    <div\n      class=\"{{prefixCls}}-panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      :transition=\"$parent.effect\">\n      <div class=\"{{prefixCls}}-panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(207)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(208)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Popover.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Popover.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Popover.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Popover.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Popover.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(187);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  mixins: [_popoverMixins2.default],
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          placement = this.placement;
	
	      var klass = {};
	
	      klass[prefixCls + '-popover'] = true;
	      klass[prefixCls + '-popover-top'] = placement === 'top';
	      klass[prefixCls + '-popover-left'] = placement === 'left';
	      klass[prefixCls + '-popover-right'] = placement === 'right';
	      klass[prefixCls + '-popover-bottom'] = placement === 'bottom';
	
	      return klass;
	    }
	  }
	};
	// </script>
	// <template>
	// <span >
	//     <span v-el:trigger >
	//       <slot>
	//       </slot>
	//     </span>
	//     <div 
	//       style="max-width:none"
	//       :class="classObj"
	//       v-el:popover
	//       v-show="show"
	//       :transition="effect">
	//         <div class="{{prefixCls}}-popover-arrow"></div>
	//         <h3 class="{{prefixCls}}-popover-title" v-show="header">{{title}}</h3>
	//         <div class="{{prefixCls}}-popover-content" v-el:content>
	//          <slot name="content"></slot>
	//         </div>
	//     </div>
	// </span>
	// </template>
	
	// <script>

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "<span >\n    <span v-el:trigger >\n      <slot>\n      </slot>\n    </span>\n    <div \n      style=\"max-width:none\"\n      :class=\"classObj\"\n      v-el:popover\n      v-show=\"show\"\n      :transition=\"effect\">\n        <div class=\"{{prefixCls}}-popover-arrow\"></div>\n        <h3 class=\"{{prefixCls}}-popover-title\" v-show=\"header\">{{title}}</h3>\n        <div class=\"{{prefixCls}}-popover-content\" v-el:content>\n         <slot name=\"content\"></slot>\n        </div>\n    </div>\n</span>";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(210)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(211)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3PopConfirm.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3PopConfirm.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3PopConfirm.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3PopConfirm.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3PopConfirm.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Popover = __webpack_require__(206);
	
	var _n3Popover2 = _interopRequireDefault(_n3Popover);
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    effect: {
	      type: String,
	      default: 'scale'
	    },
	    content: {
	      type: String
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    },
	    onConfirm: {
	      type: Function
	    },
	    okText: {
	      type: String,
	      default: '确定'
	    },
	    cancelText: {
	      type: String,
	      default: '取消'
	    }
	  },
	  data: function data() {
	    return {
	      show: true
	    };
	  },
	
	
	  methods: {
	    confirm: function confirm() {
	      var self = this;
	      if (_type2.default.isFunction(this.onConfirm)) {
	        var promise = this.onConfirm();
	        if (_type2.default.isPromise(promise)) {
	          promise.then(function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	              args[_key] = arguments[_key];
	            }
	
	            self.show = false;
	            return args;
	          }).catch(function () {
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	              args[_key2] = arguments[_key2];
	            }
	
	            self.show = false;
	            return Promise.reject(args);
	          });
	        } else {
	          self.show = false;
	        }
	      }
	    }
	  },
	
	  components: {
	    n3Popover: _n3Popover2.default,
	    n3Button: _n3Button2.default
	  }
	};
	// </script>
	// <template>
	// 	<n3-popover 
	// 		:show.sync="show"
	//         :effect="effect"
	//         :header="false" 
	//         :placement="placement" 
	//         trigger="click">
	//         <div slot="content">
	//             <p>{{content}}</p>
	//             <div style="float:right; margin:10px;">
	//               <n3-button size="sm" @click="show = false">{{cancelText}}</n3-button>
	//               <n3-button size="sm" type="primary" @click="confirm">{{okText}}</n3-button>
	//             </div>
	//         </div> 
	//         <slot></slot>
	//       </n3-popover>
	// </template>
	
	// <script>

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "<n3-popover \n\t\t:show.sync=\"show\"\n        :effect=\"effect\"\n        :header=\"false\" \n        :placement=\"placement\" \n        trigger=\"click\">\n        <div slot=\"content\">\n            <p>{{content}}</p>\n            <div style=\"float:right; margin:10px;\">\n              <n3-button size=\"sm\" @click=\"show = false\">{{cancelText}}</n3-button>\n              <n3-button size=\"sm\" type=\"primary\" @click=\"confirm\">{{okText}}</n3-button>\n            </div>\n        </div> \n        <slot></slot>\n      </n3-popover>";

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(213)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(214)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progressbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progressbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progressbar.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progressbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progressbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 213 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div 
	// 	  :class="classObj"
	// 	  :style="{width: now + '%',height: height}">
	// 	  {{label ? now + '%':'' }}
	// 	</div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    height: {
	      type: String,
	      default: '20px'
	    },
	    now: {
	      type: Number,
	      require: true
	    },
	    label: {
	      type: Boolean,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          type = this.type,
	          striped = this.striped,
	          animated = this.animated;
	
	      var klass = {};
	
	      klass[prefixCls + '-progress-bar'] = true;
	      klass[prefixCls + '-progress-bar-' + type] = true;
	      klass[prefixCls + '-progress-bar-striped'] = striped;
	      klass[prefixCls + '-progress-bar-animated'] = animated;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<div \n\t  :class=\"classObj\"\n\t  :style=\"{width: now + '%',height: height}\">\n\t  {{label ? now + '%':'' }}\n\t</div>";

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(216)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(217)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progress.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progress.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progress.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progress.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progress.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="{{prefixCls}}-progress">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-progress\">\n    <slot></slot>\n  </div>";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(219)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(220)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Radio.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Radio.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Radio.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Radio.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Radio.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false,
	      twoway: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    validate: _validate2.default
	  },
	  events: {
	    'n3@radiogroupChange': function n3RadiogroupChange(val) {
	      this.checked = val === this.value;
	    }
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var klass = {};
	      var prefixCls = this.prefixCls,
	          checked = this.checked,
	          disabled = this.disabled;
	
	
	      klass[prefixCls + '-radio-span'] = true;
	      klass[prefixCls + '-radio-checked'] = checked;
	      klass[prefixCls + '-radio-disabled'] = disabled;
	
	      return klass;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      if (this.checked) return;
	      this.checked = true;
	      this.$dispatch('n3@radioChange', this.value);
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.checked);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <label class="{{prefixCls}}-radio-con">
	//   <span :class="wrapClasses">
	//     <span class="{{prefixCls}}-radio-inner"></span> 
	//     <input 
	//     type="radio" 
	//     :disabled="disabled"
	//     :checked="checked"
	//     class="{{prefixCls}}-radio-input" 
	//     @click.prevent="handleClick" >
	//   </span>
	//   <span><slot></slot></span>
	//   <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="checked"
	//     :results.sync="validateResults">
	//   </validate>
	// </label>
	// </template>
	
	// <script>

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "<label class=\"{{prefixCls}}-radio-con\">\n  <span :class=\"wrapClasses\">\n    <span class=\"{{prefixCls}}-radio-inner\"></span> \n    <input \n    type=\"radio\" \n    :disabled=\"disabled\"\n    :checked=\"checked\"\n    class=\"{{prefixCls}}-radio-input\" \n    @click.prevent=\"handleClick\" >\n  </span>\n  <span><slot></slot></span>\n  <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"checked\"\n    :results.sync=\"validateResults\">\n  </validate>\n</label>";

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(222)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(223)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioBtn.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioBtn.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <n3-button 
	//     @click.prevent="handleClick"
	//     :class="classObj" 
	//     :disabled="disabled"
	//     :type="checked ? 'primary' : 'default'">
	//     <slot></slot>
	//   </n3-button>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false,
	      twoway: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  events: {
	    'n3@radiogroupChange': function n3RadiogroupChange(val) {
	      this.checked = val === this.value;
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	
	      var klass = {};
	      klass[prefixCls + '-radio-btn'] = true;
	
	      return klass;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      if (this.checked) return;
	      this.checked = true;
	      this.$dispatch('n3@radioChange', this.value);
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    }
	  },
	  components: {
	    n3Button: _n3Button2.default
	  }
	};
	// </script>

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<n3-button \n    @click.prevent=\"handleClick\"\n    :class=\"classObj\" \n    :disabled=\"disabled\"\n    :type=\"checked ? 'primary' : 'default'\">\n    <slot></slot>\n  </n3-button>";

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(225)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(226)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Radio = __webpack_require__(218);
	
	var _n3Radio2 = _interopRequireDefault(_n3Radio);
	
	var _n3RadioBtn = __webpack_require__(221);
	
	var _n3RadioBtn2 = _interopRequireDefault(_n3RadioBtn);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    type: {
	      type: String,
	      default: 'checkbox'
	    },
	    options: {
	      type: Array
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  methods: {
	    init: function init(val) {
	      if (!_type2.default.isUndefined(val)) {
	        this.value = val;
	      } else {
	        var children = this.$children;
	        var ret = void 0;
	        children.forEach(function (item) {
	          item.checked ? ret = item.value : '';
	        });
	        this.value = ret;
	      }
	    }
	  },
	  events: {
	    'n3@radioChange': function n3RadioChange(val) {
	      this.init(val);
	    }
	  },
	
	  watch: {
	    value: function value() {
	      this.$broadcast('n3@radiogroupChange', this.value);
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    },
	    options: function options() {
	      this.init();
	    }
	  },
	
	  ready: function ready() {
	    this.init();
	  },
	
	
	  components: {
	    n3Radio: _n3Radio2.default,
	    n3RadioBtn: _n3RadioBtn2.default,
	    validate: _validate2.default
	  }
	};
	// </script>
	// <template>
	// <div class="{{prefixCls}}-btn-group {{prefixCls}}-radio-group">
	//     <template v-if="options">
	//         <n3-radio 
	//           v-if="type==='checkbox'" 
	//           v-for="item in options"
	//           :value="item.value"
	//           :checked="item.checked"
	//           :disabled="item.disabled">
	//           {{item.label}}
	//         </n3-radio>
	
	//          <n3-radio-btn 
	//          v-if="type==='button'" 
	//          v-for="item in options"
	//          :value="item.value"
	//          :checked="item.checked"
	//          :disabled="item.disabled">
	//          {{item.label}}
	//         </n3-radio-btn>
	
	//     </template>
	//     <template v-else>
	//     <slot></slot>
	//     </template>
	
	//     <validate
	//       :name="name"
	//       :rules="rules"
	//       :valid-status.sync="validStatus"
	//       :custom-validate="customValidate" 
	//       :value="value"
	//       :results.sync="validateResults">
	//     </validate>
	
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group {{prefixCls}}-radio-group\">\n    <template v-if=\"options\">\n        <n3-radio \n          v-if=\"type==='checkbox'\" \n          v-for=\"item in options\"\n          :value=\"item.value\"\n          :checked=\"item.checked\"\n          :disabled=\"item.disabled\">\n          {{item.label}}\n        </n3-radio>\n\n         <n3-radio-btn \n         v-if=\"type==='button'\" \n         v-for=\"item in options\"\n         :value=\"item.value\"\n         :checked=\"item.checked\"\n         :disabled=\"item.disabled\">\n         {{item.label}}\n        </n3-radio-btn>\n\n    </template>\n    <template v-else>\n    <slot></slot>\n    </template>\n\n    <validate\n      :name=\"name\"\n      :rules=\"rules\"\n      :valid-status.sync=\"validStatus\"\n      :custom-validate=\"customValidate\" \n      :value=\"value\"\n      :results.sync=\"validateResults\">\n    </validate>\n\n  </div>";

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(228)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(229)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Select.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Select.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Badge = __webpack_require__(150);
	
	var _n3Badge2 = _interopRequireDefault(_n3Badge);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="{{prefixCls}}-btn-group {{prefixCls}}-select-group" >
	//     <n3-button  
	//       :style="{width:width}"
	//       :disabled="disabled"
	//       :size="size"
	//       class="{{prefixCls}}-dropdown-toggle"
	//       @click="toggleDropdown">
	
	//       <span  v-if="showPlaceholder || !showselected">{{placeholder}}</span>
	//       <span  v-if="showselected" >
	//         <template v-for="item in selectedItems">
	//           {{{format.call(this._context,item)}}}
	//         </template>
	//       </span>
	//       <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
	//       <n3-badge v-if="badge">{{badge}}</n3-badge>
	//     </n3-button>
	//     <ul 
	//       :style="{maxHeight:menuMaxHeight,width:menuWidth}" 
	//       class="{{prefixCls}}-dropdown-menu" 
	//       v-el:menu 
	//       v-show="show" 
	//       transition="fadeDown">
	//         <li v-if="search">
	//           <n3-input
	//             class="{{prefixCls}}-select-search"
	//             :placeholder="inputPlaceholder"
	//             :value.sync="searchText"
	//             @keydown.enter="addExtra"
	//           ></n3-input>
	//           <n3-icon type="plus-square-o" v-if="extra" @click="addExtra"></n3-icon>
	//         </li>
	//         <li v-if="multiple" class="{{prefixCls}}-select-all">
	//           <a @click.prevent="selectAll">
	//             全选
	//            <n3-icon type="check" v-show="allSelected"></n3-icon>
	//           </a>
	//         </li>
	
	//         <template v-if="options.length">
	//           <li v-for="option in options | filterSearch searchText " 
	//               :value="option.value" 
	//               style="position:relative">
	//             <a @click.prevent="select(option)" >
	//               {{{ option.label }}} 
	//               <n3-icon type="check" v-show="findIndex(option.value) !== -1"></n3-icon>
	//             </a>
	//           </li>
	//         </template>
	//         <slot v-else ></slot>
	//       <div class="{{prefixCls}}-notify" v-show="showNotify" transition="fade">最多选择 {{limit}} 项</div>
	//     </ul>
	//     <div class="clearfix"></div>
	//     <validate
	//       :name="name"
	//       :rules="rules"
	//       :valid-status.sync="validStatus"
	//       :custom-validate="customValidate" 
	//       :value="value"
	//       :results.sync="validateResults">
	//     </validate>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    readonly: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    showselected: {
	      type: Boolean,
	      default: true
	    },
	    inputPlaceholder: {
	      type: String,
	      default: '输入...'
	    },
	    size: {
	      type: String
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    value: {
	      twoWay: true
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    search: {
	      type: Boolean,
	      default: false
	    },
	    extra: {
	      type: Boolean,
	      default: false
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    width: {
	      type: String
	    },
	    menuMaxHeight: {
	      type: String,
	      default: '300px'
	    },
	    menuWidth: {
	      type: String
	    },
	    onChange: {
	      type: Function
	    },
	    format: {
	      type: Function,
	      default: function _default(item) {
	        return item.label;
	      }
	    },
	    cancelled: {
	      type: Boolean,
	      default: true
	    },
	    badge: {
	      type: [String, Number]
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      searchText: '',
	      show: false,
	      showNotify: false
	    };
	  },
	
	  watch: {
	    value: function value(val) {
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(val);
	      }
	    }
	  },
	  components: {
	    n3Button: _n3Button2.default,
	    n3Badge: _n3Badge2.default,
	    n3Icon: _n3Icon2.default,
	    n3Input: _n3Input2.default,
	    validate: _validate2.default
	  },
	  computed: {
	    valueArray: {
	      get: function get() {
	        var a;
	        if (_type2.default.isArray(this.value)) {
	          a = this.value;
	        } else {
	          a = [this.value];
	        }
	        return this.findInOptions(a);
	      },
	      set: function set(value) {
	        var self = this;
	        if (this.multiple) {
	          var ret = [];
	          for (var i = 0; i < value.length; i++) {
	            ret.push(value[i].value);
	          }
	          var timeout = void 0;
	          if (timeout) clearTimeout(timeout);
	          if (ret.length > this.limit) {
	            this.showNotify = true;
	            this.remove(value, this.limit);
	            timeout = setTimeout(function () {
	              self.showNotify = false;
	            }, 1000);
	          } else {
	            this.value = ret;
	          }
	        } else {
	          this.value = value[0] ? value[0].value : '';
	        }
	      }
	    },
	    allSelected: function allSelected() {
	      var options = this.filter(this.options, this.searchText);
	      var values = this.value;
	
	      if (!values || options.length !== values.length || options.length === 0) {
	        return false;
	      }
	
	      for (var i = 0, l = options.length; i < l; i++) {
	        var value = options[i].value;
	        if (values.indexOf(value) === -1) {
	          return false;
	        }
	      }
	      return true;
	    },
	    selectedItems: function selectedItems() {
	      var ret = [];
	      var a = this.valueArray;
	
	      for (var i = 0; i < a.length; i++) {
	        ret.push(a[i]);
	      }
	      return ret;
	    },
	    showPlaceholder: function showPlaceholder() {
	      if (_type2.default.isArray(this.value)) {
	        return this.value.length <= 0;
	      } else {
	        return _type2.default.isNullOrUndefined(this.value) || this.value === '';
	      }
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (!this.options.length) {
	      var options = this.$els.menu.querySelectorAll('.' + this.prefixCls + '-option');
	      var ret = [];
	
	      for (var i = 0, l = options.length; i < l; i++) {
	        var value = options[i].getAttribute('value');
	        var label = options[i].innerHTML;
	
	        ret.push({ value: value, label: label });
	      }
	      this.options = ret;
	    }
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) _this.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  filters: {
	    filterSearch: function filterSearch(value, search) {
	      return this.filter(value, search);
	    }
	  },
	  methods: {
	    filter: function filter(value, search) {
	      if (search === '') return value;
	      var ret = [];
	      for (var i = 0, l = value.length; i < l; i++) {
	        if (value[i] && String(value[i].label).replace(/<.*?>/g, '').indexOf(search) > -1) {
	          ret.push(value[i]);
	        }
	      }
	      return ret;
	    },
	    selectAll: function selectAll() {
	      if (this.allSelected) {
	        this.valueArray = [];
	      } else {
	        this.valueArray = this.filter(this.options, this.searchText);
	      }
	    },
	    addExtra: function addExtra() {
	      if (this.extra && this.searchText.replace(/\s+$|^\s+/g, '')) {
	        this.options.push({ value: this.searchText, label: this.searchText });
	        this.add({ value: this.searchText, label: this.searchText });
	        this.searchText = '';
	      }
	    },
	    findInOptions: function findInOptions(a) {
	      var options = this.options;
	      var ret = [];
	
	      for (var i = 0; i < a.length; i++) {
	        var s = this.find(a[i], options);
	        s != null ? ret.push(s) : 0;
	      }
	      return ret;
	    },
	    find: function find(v, array) {
	      var a = array || this.valueArray;
	      for (var i = 0; i < a.length; i++) {
	        if (v === a[i].value) {
	          return a[i];
	        }
	      }
	      return null;
	    },
	    findIndex: function findIndex(v, array) {
	      var a = array || this.valueArray;
	      for (var i = 0; i < a.length; i++) {
	        if (v === a[i].value) {
	          return i;
	        }
	      }
	      return -1;
	    },
	    add: function add(option) {
	      var a = this.valueArray.slice(0);
	      if (this.multiple) {
	        a.push(option);
	      } else {
	        a = [option];
	      }
	      this.valueArray = a;
	    },
	    remove: function remove(array, index, num) {
	      var a = array.slice(0);
	      num ? a.splice(index, num) : a.splice(index);
	      this.valueArray = a;
	    },
	    select: function select(option) {
	      var index = this.findIndex(option.value);
	      if (this.multiple) {
	        index === -1 ? this.add(option) : this.remove(this.valueArray, index, 1);
	      } else {
	        index === -1 ? this.valueArray = [option] : this.cancelled ? this.valueArray = [] : 0;
	        this.show = false;
	      }
	    },
	    toggleDropdown: function toggleDropdown() {
	      if (!this.disabled && !this.readonly) {
	        this.show = !this.show;
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group {{prefixCls}}-select-group\" >\n    <n3-button  \n      :style=\"{width:width}\"\n      :disabled=\"disabled\"\n      :size=\"size\"\n      class=\"{{prefixCls}}-dropdown-toggle\"\n      @click=\"toggleDropdown\">\n\n      <span  v-if=\"showPlaceholder || !showselected\">{{placeholder}}</span>\n      <span  v-if=\"showselected\" >\n        <template v-for=\"item in selectedItems\">\n          {{{format.call(this._context,item)}}}\n        </template>\n      </span>\n      <n3-icon :type=\"show?'angle-up' : 'angle-down'\" ></n3-icon>\n      <n3-badge v-if=\"badge\">{{badge}}</n3-badge>\n    </n3-button>\n    <ul \n      :style=\"{maxHeight:menuMaxHeight,width:menuWidth}\" \n      class=\"{{prefixCls}}-dropdown-menu\" \n      v-el:menu \n      v-show=\"show\" \n      transition=\"fadeDown\">\n        <li v-if=\"search\">\n          <n3-input\n            class=\"{{prefixCls}}-select-search\"\n            :placeholder=\"inputPlaceholder\"\n            :value.sync=\"searchText\"\n            @keydown.enter=\"addExtra\"\n          ></n3-input>\n          <n3-icon type=\"plus-square-o\" v-if=\"extra\" @click=\"addExtra\"></n3-icon>\n        </li>\n        <li v-if=\"multiple\" class=\"{{prefixCls}}-select-all\">\n          <a @click.prevent=\"selectAll\">\n            全选\n           <n3-icon type=\"check\" v-show=\"allSelected\"></n3-icon>\n          </a>\n        </li>\n\n        <template v-if=\"options.length\">\n          <li v-for=\"option in options | filterSearch searchText \" \n              :value=\"option.value\" \n              style=\"position:relative\">\n            <a @click.prevent=\"select(option)\" >\n              {{{ option.label }}} \n              <n3-icon type=\"check\" v-show=\"findIndex(option.value) !== -1\"></n3-icon>\n            </a>\n          </li>\n        </template>\n        <slot v-else ></slot>\n      <div class=\"{{prefixCls}}-notify\" v-show=\"showNotify\" transition=\"fade\">最多选择 {{limit}} 项</div>\n    </ul>\n    <div class=\"clearfix\"></div>\n    <validate\n      :name=\"name\"\n      :rules=\"rules\"\n      :valid-status.sync=\"validStatus\"\n      :custom-validate=\"customValidate\" \n      :value=\"value\"\n      :results.sync=\"validateResults\">\n    </validate>\n  </div>";

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(231)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(232)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tab.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tab.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 231 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div 
	//     :class="classObj"
	//     v-show="show">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    badge: {
	      type: [String, Number]
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          show = this.show;
	
	      var klass = {};
	
	      klass[prefixCls + '-tab-pane'] = true;
	      klass[prefixCls + '-tab-hide'] = !show;
	
	      return klass;
	    },
	    show: function show() {
	      return this.$parent.activeIndex == this.index;
	    }
	  },
	  created: function created() {
	    if (!this.$parent.list && this.$parent.renderData) {
	      this.$parent.renderData.push({
	        header: this.header,
	        disabled: this.disabled,
	        badge: this.badge
	      });
	    }
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<div \n    :class=\"classObj\"\n    v-show=\"show\">\n    <slot></slot>\n  </div>";

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(234)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(235)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tabs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tabs.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tabs.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tabs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tabs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _n3Badge = __webpack_require__(150);
	
	var _n3Badge2 = _interopRequireDefault(_n3Badge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div>
	//     <ul :class="classObj" >
	//       <li
	//           v-for="r in renderData"
	//           :class="liclassObj($index,r)"
	//           @click.prevent="handleTabListClick($index, r)"
	//           :disabled="r.disabled">
	//           <a href="#">
	//             {{r.header}}
	//             <n3-badge v-if="r.badge">{{r.badge}}</n3-badge>
	//           </a>
	//       </li>
	//     </ul>
	//     <div class="{{prefixCls}}-tab-content">
	//       <div v-if="list">
	//           {{{renderData[activeIndex].content}}}
	//       </div>
	//       <slot v-else></slot>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    pills: {
	      type: Boolean
	    },
	    stacked: {
	      type: Boolean
	    },
	    primary: {
	      type: Boolean
	    },
	    justified: {
	      type: Boolean
	    },
	    size: {
	      type: String
	    },
	    activeIndex: {
	      type: Number,
	      default: 0
	    },
	    onChange: {
	      type: Function
	    },
	    list: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      renderData: []
	    };
	  },
	
	  components: {
	    n3Badge: _n3Badge2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          pills = this.pills,
	          stacked = this.stacked,
	          primary = this.primary,
	          justified = this.justified;
	
	      var klass = {};
	
	      klass[prefixCls + '-nav'] = true;
	      klass['clearfix'] = true;
	      klass[prefixCls + '-nav-tabs'] = true;
	      klass[prefixCls + '-nav-tabs-pills'] = pills;
	      klass[prefixCls + '-nav-tabs-stacked'] = stacked;
	      klass[prefixCls + '-nav-tabs-primary'] = primary;
	      klass[prefixCls + '-nav-tabs-justified'] = justified;
	
	      return klass;
	    }
	  },
	  watch: {
	    list: {
	      handler: function handler() {
	        if (this.list) {
	          this.renderData = this.list;
	        }
	      },
	
	      immediate: true
	    }
	  },
	  methods: {
	    liclassObj: function liclassObj(index, r) {
	      var prefixCls = this.prefixCls,
	          activeIndex = this.activeIndex;
	
	      var klass = {};
	
	      klass[prefixCls + '-nav-tabs-active'] = index === activeIndex;
	      klass[prefixCls + '-nav-tabs-disabled'] = r.disabled;
	
	      return klass;
	    },
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) {
	        this.activeIndex = index;
	      } else {
	        return;
	      }
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(index, el);
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <ul :class=\"classObj\" >\n      <li\n          v-for=\"r in renderData\"\n          :class=\"liclassObj($index,r)\"\n          @click.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\">\n          <a href=\"#\">\n            {{r.header}}\n            <n3-badge v-if=\"r.badge\">{{r.badge}}</n3-badge>\n          </a>\n      </li>\n    </ul>\n    <div class=\"{{prefixCls}}-tab-content\">\n      <div v-if=\"list\">\n          {{{renderData[activeIndex].content}}}\n      </div>\n      <slot v-else></slot>\n    </div>\n  </div>";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(237)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(238)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3ButtonGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3ButtonGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3ButtonGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3ButtonGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3ButtonGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="{{prefixCls}}-btn-group">
	//     <slot></slot>  
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group\">\n    <slot></slot>  \n  </div>";

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(240)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(241)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Container.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Container.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Container.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Container.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Container.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="classObj" >
	//   	<slot></slot>		
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    fluid: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          fluid = this.fluid;
	
	      var klass = {};
	
	      klass[prefixCls + '-container-fluid'] = fluid;
	      klass[prefixCls + '-container'] = !fluid;
	      klass['clearfix'] = true;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" >\n  \t<slot></slot>\t\t\n  </div>";

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(243)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(244)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Row.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Row.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Row.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Row.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Row.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 243 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="{{prefixCls}}-row">
	//   	<slot></slot>		
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-row\">\n  \t<slot></slot>\t\t\n  </div>";

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(246)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(247)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Nav.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Nav.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Nav.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Nav.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Nav.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 246 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<nav class="{{prefixCls}}-collapse {{prefixCls}}-navbar-collapse {{prefixCls}}-navbar-{{theme}} {{prefixCls}}-navbar-{{type}} clearfix">
	// 		<ul class="{{prefixCls}}-nav {{prefixCls}}-navbar-nav">
	// 			<slot></slot>	
	// 		</ul>
	// 	</nav>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'horizontal'
	    },
	    theme: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"{{prefixCls}}-collapse {{prefixCls}}-navbar-collapse {{prefixCls}}-navbar-{{theme}} {{prefixCls}}-navbar-{{type}} clearfix\">\n\t\t<ul class=\"{{prefixCls}}-nav {{prefixCls}}-navbar-nav\">\n\t\t\t<slot></slot>\t\n\t\t</ul>\n\t</nav>";

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(249)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(250)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SubNav.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SubNav.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SubNav.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SubNav.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SubNav.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Dropdown = __webpack_require__(194);
	
	var _n3Dropdown2 = _interopRequireDefault(_n3Dropdown);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <span>
	//   <n3-dropdown :trigger="trigger" :show.sync="show" :click-close="true" effect="collapse">
	//     <div slot="trigger"   class="{{prefixCls}}-sub-nav-trigger" >
	//       <slot name="title"></slot>
	//       <n3-icon class="{{prefixCls}}-sub-nav-fa" :type="show ? 'angle-up' : 'angle-down'" ></n3-icon>
	//     </div>
	//     <slot></slot>  
	//   </n3-dropdown>
	// </span>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    show: {
	      type: Boolean,
	      twoWay: true,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Dropdown: _n3Dropdown2.default,
	    n3Icon: _n3Icon2.default
	  }
	};
	// </script>

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<span>\n  <n3-dropdown :trigger=\"trigger\" :show.sync=\"show\" :click-close=\"true\" effect=\"collapse\">\n    <div slot=\"trigger\"   class=\"{{prefixCls}}-sub-nav-trigger\" >\n      <slot name=\"title\"></slot>\n      <n3-icon class=\"{{prefixCls}}-sub-nav-fa\" :type=\"show ? 'angle-up' : 'angle-down'\" ></n3-icon>\n    </div>\n    <slot></slot>  \n  </n3-dropdown>\n</span>";

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(252)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(253)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3NavItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3NavItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3NavItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3NavItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3NavItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 252 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<li :class="classObj">
	// 		<slot></slot>
	// 	</li>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    active: {
	      type: Boolean
	    },
	    disabled: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          active = this.active,
	          disabled = this.disabled;
	
	      var klass = {};
	
	      klass[prefixCls + '-navbar-active'] = active;
	      klass[prefixCls + '-navbar-disabled'] = disabled;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"classObj\">\n\t\t<slot></slot>\n\t</li>";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(255)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(256)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Column.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Column.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Column.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Column.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Column.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 255 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="classObj" >
	//   	<slot></slot>		
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    col: {
	      type: Number
	    },
	    mode: {
	      type: String,
	      default: 'md'
	    },
	    offset: {
	      type: Number
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          mode = this.mode,
	          offset = this.offset,
	          col = this.col;
	
	      var klass = {};
	
	      klass[prefixCls + '-col-' + mode + '-' + col] = true;
	      offset ? klass[prefixCls + '-col-' + mode + '-offset-' + offset] = true : '';
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" >\n  \t<slot></slot>\t\t\n  </div>";

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(258)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(259)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Switch.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Switch.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Switch.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Switch.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Switch.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: Boolean,
	      twoway: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    ontext: {
	      type: String,
	      default: 'ON'
	    },
	    offtext: {
	      type: String,
	      default: 'OFF'
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    validate: _validate2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          value = this.value,
	          disabled = this.disabled;
	
	      var klass = {};
	
	      klass[prefixCls + '-switch'] = true;
	      klass[prefixCls + '-switch-wrapper'] = true;
	      klass[prefixCls + '-switch-on'] = value;
	      klass[prefixCls + '-switch-off'] = !value;
	      klass[prefixCls + '-switch-id-switch-check-on'] = value && disabled;
	      klass[prefixCls + '-switch-id-switch-check-off'] = !(value && disabled);
	      klass[prefixCls + '-switch-animate'] = true;
	      klass[prefixCls + '-switch-id-switch-check-disabled'] = disabled;
	
	      return klass;
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (this.disabled) return;
	      this.value = !this.value;
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div class="inline">
	//   <div  :class="classObj" @click="toggle">
	//     <div class="{{prefixCls}}-switch-container {{prefixCls}}-switch-on-primary {{prefixCls}}-switch-off-default">
	//       <span class="{{prefixCls}}-switch-handle-on {{prefixCls}}-switch-primary" >{{ontext}}</span>
	//       <span class="{{prefixCls}}-switch-label" >&nbsp;</span>
	//       <span class="{{prefixCls}}-switch-handle-off {{prefixCls}}-switch-default" >{{offtext}}</span>
	//     </div>
	//   </div>
	//   <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	// <div>
	// </template>
	
	// <script>

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inline\">\n  <div  :class=\"classObj\" @click=\"toggle\">\n    <div class=\"{{prefixCls}}-switch-container {{prefixCls}}-switch-on-primary {{prefixCls}}-switch-off-default\">\n      <span class=\"{{prefixCls}}-switch-handle-on {{prefixCls}}-switch-primary\" >{{ontext}}</span>\n      <span class=\"{{prefixCls}}-switch-label\" >&nbsp;</span>\n      <span class=\"{{prefixCls}}-switch-handle-off {{prefixCls}}-switch-default\" >{{offtext}}</span>\n    </div>\n  </div>\n  <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n<div>\n</template>";

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(261)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(265)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3MultipleInput.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3MultipleInput.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3MultipleInput.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3MultipleInput.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3MultipleInput.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _n3Typeahead = __webpack_require__(262);
	
	var _n3Typeahead2 = _interopRequireDefault(_n3Typeahead);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _valMixin = __webpack_require__(138);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(139);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: Array,
	      twoWay: true
	    },
	    position: {
	      type: Number,
	      twoWay: true,
	      default: 0
	    },
	    format: {
	      type: Function,
	      default: function _default(item, index) {
	        return item;
	      }
	    },
	    width: {
	      type: String,
	      default: '220px'
	    },
	    height: {
	      type: String,
	      default: ''
	    },
	    inputWidth: {
	      type: String,
	      default: '50px'
	    },
	    addFormat: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    onChange: {
	      type: Function
	    },
	    query: {
	      type: String,
	      twoway: true,
	      default: function _default() {
	        return '';
	      }
	    },
	    placeholder: {
	      type: String
	    },
	    positionMove: {
	      type: Boolean,
	      default: true
	    },
	    data: {
	      type: Array
	    },
	    render: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    matchCase: {
	      type: Boolean,
	      default: false
	    },
	    onHit: {
	      type: Function
	    },
	    onEnter: {
	      type: Function
	    },
	    dropdownWidth: {
	      type: String,
	      default: '220px'
	    },
	    dropdownHeight: {
	      type: String,
	      default: '300px'
	    },
	    onInputchange: {
	      type: Function
	    },
	    items: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    },
	    onFocus: {
	      type: Function
	    },
	    onBlur: {
	      type: Function
	    }
	  },
	  data: function data() {
	    return {
	      focused: false,
	      empty: true,
	      stopSecond: false
	    };
	  },
	  ready: function ready() {
	    this.$nextTick(function () {
	      this._context.$compile(this.$el);
	    });
	  },
	
	  watch: {
	    query: function query(val) {
	      if (val !== '') {
	        this.empty = false;
	      } else {
	        this.items = [];
	      }
	    },
	    position: function position() {
	      this.focus();
	    },
	    value: function value(val) {
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(val);
	      }
	      this.focus();
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	
	      var klass = {};
	
	      klass[prefixCls + '-form-control'] = true;
	      klass[prefixCls + '-multiple-input'] = true;
	
	      return klass;
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default,
	    n3Typeahead: _n3Typeahead2.default,
	    validate: _validate2.default
	  },
	  methods: {
	    focus: function focus() {
	      var self = this;
	      self.focused = false;
	      setTimeout(function () {
	        if (!self.focused) {
	          self.focused = true;
	        }
	      }, 100);
	    },
	    setIndex: function setIndex(index) {
	      if (!this.positionMove) return;
	      if (this.query) {
	        this.addquery();
	      }
	      this.position = index;
	    },
	    addquery: function addquery(item, that) {
	      var content = that ? item : this.query;
	      var value = this.value.slice(0);
	
	      value.splice(this.position, 0, this.addFormat(content));
	      this.value = value;
	      this.query = '';
	      this.empty = true;
	    },
	    add: function add(item, that) {
	      var _this = this;
	
	      if (this.stopSecond) return;
	
	      if (that && that.show) {
	        this.stopSecond = true;
	        this.addquery(item, that);
	        this.position++;
	        that.reset();
	        setTimeout(function () {
	          _this.stopSecond = false;
	        });
	      } else {
	        if (this.query) {
	          this.addquery();
	          this.position++;
	        }
	      }
	    },
	    clickDel: function clickDel(index) {
	      var value = this.value.slice(0);
	      value.splice(index, 1);
	      this.value = value;
	    },
	    del: function del() {
	      if (this.empty && this.position > 0) {
	        var value = this.value.slice(0);
	        value.splice(this.position - 1, 1);
	        this.value = value;
	        this.position--;
	        this.focus();
	      }
	      this.empty = this.query === '';
	    },
	    left: function left() {
	      if (!this.positionMove) return;
	      if (this.position > 0 && this.query === '') {
	        this.position--;
	      }
	    },
	    right: function right() {
	      if (!this.positionMove) return;
	      if (this.value && this.position < this.value.length && this.query === '') {
	        this.position++;
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div class="inline" >
	//   <div :class="classObj" :style="{width:width,height:height}" @click="focus">
	//     <template v-for="(index,item) in value" track-by="$index">
	//         <template v-if="index == position">
	//             <n3-typeahead
	//               :placeholder="placeholder"
	//               :on-focus="onFocus"
	//               :on-blur="onBlur"
	//               :style="{margin:'0px 5px'}"
	//               :query.sync="query" 
	//               :width='inputWidth'
	//               :items="items"
	//               :on-change="onInputchange"
	//               :dropdown-width="dropdownWidth"
	//               :dropdown-height="dropdownHeight"
	//               :on-hit="add"
	//               :match-case="matchCase"
	//               :limit="limit"
	//               :render="render"
	//               :focused.sync="focused"
	//               :data="data"
	//               @keydown.delete="del" 
	//               @keydown.left="left" 
	//               @keydown.right="right" 
	//               @keydown.enter="add">
	//             </n3-typeahead>
	//         </template>
	//          <template v-else>
	//             <span class="{{prefixCls}}-multiple-input-space"  @click="setIndex(index)"></span>
	//         </template>
	//         <span class="{{prefixCls}}-multiple-input-m-tag" >
	//         {{{format.call(this._context,item,index)}}}
	//         <n3-icon type="times" class="{{prefixCls}}-multiple-close" @click="clickDel(index)"></n3-icon>
	//         </span>
	//     </template>
	
	//     <template v-if="value && value.length == position">
	//       <n3-typeahead
	//         :placeholder="placeholder"
	//         :on-focus="onFocus"
	//         :on-blur="onBlur"
	//         :style="{margin:'0px 5px'}"
	//         :query.sync="query" 
	//         :width='inputWidth'
	//         :items="items"
	//         :on-change="onInputchange"
	//         :dropdown-width="dropdownWidth"
	//         :dropdown-height="dropdownHeight"
	//         :on-hit="add"
	//         :match-case="matchCase"
	//         :limit="limit"
	//         :render="render"
	//         :focused.sync="focused"
	//         :data="data"
	//         @keydown.delete="del" 
	//         @keydown.left="left" 
	//         @keydown.right="right" 
	//         @keydown.enter="add">
	//       </n3-typeahead>
	//     </template>
	//     <template v-else>
	//       <span class="{{prefixCls}}-multiple-input-space {{prefixCls}}-multiple-input-long"  @click="setIndex(value.length)"></span>
	//     </template>
	//   </div>
	//    <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(263)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(264)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Typeahead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Typeahead.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Typeahead.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Typeahead.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Typeahead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _inputMixin = __webpack_require__(160);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  mixins: [_inputMixin2.default],
	  props: {
	    readonly: {
	      type: Boolean
	    },
	    query: {
	      type: String,
	      twoway: true,
	      default: ''
	    },
	    data: {
	      type: Array
	    },
	    render: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    matchCase: {
	      type: Boolean,
	      default: false
	    },
	    addFormat: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    onHit: {
	      type: Function,
	      default: function _default(item) {
	        this.reset();
	        this.query = this.addFormat(item);
	      }
	    },
	    dropdownWidth: {
	      type: String,
	      default: '220px'
	    },
	    dropdownHeight: {
	      type: String,
	      default: '300px'
	    },
	    onChange: {
	      type: Function
	    },
	    items: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  watch: {
	    items: function items(val) {
	      this.show = val && !!val.length;
	    },
	    query: function query(val) {
	      if (val.value === '') {
	        this.items = [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      show: false,
	      noResults: true,
	      current: 0
	    };
	  },
	
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this = this;
	
	      if (this.data && this.query) {
	        return this.data.filter(function (value) {
	          value = _this.matchCase ? value : value.toLowerCase();
	          return value.indexOf(_this.query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  components: {
	    n3Input: _n3Input2.default
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	      if (_type2.default.isFunction(this.onBlur)) {
	        this.onBlur();
	      }
	    },
	    update: function update() {
	      var self = this;
	      if (this.readonly || this.disabled) return;
	      setTimeout(function () {
	        if (!self.query) {
	          self.reset();
	          return false;
	        }
	
	        if (_type2.default.isFunction(self.onChange)) {
	          self.onChange(self.query);
	        } else if (self.data) {
	          self.items = self.primitiveData;
	        }
	      }, 100);
	    },
	    reset: function reset() {
	      this.items = [];
	      this.query = '';
	      this.loading = false;
	      this.show = false;
	    },
	    isActive: function isActive(index) {
	      var klass = this.prefixCls + '-dropdown-active';
	      return this.current === index ? klass : '';
	    },
	    hit: function hit(index) {
	      if (this.items && this.items.length) {
	        index ? this.current = index : '';
	        this.onHit(this.items[this.current], this);
	      }
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    }
	  }
	};
	// </script>
	// <template>
	// <div style="position: relative;display:inline-block"
	//      :class="[show ? prefixCls +'-open' : '']">
	//   <n3-input
	//     :width="width"
	//     :name="name" 
	//     :rules="rules" 
	//     :validate="validate" 
	//     :has-feedback="hasFeedback"
	//     :placeholder="placeholder"
	//     :custom-validate="customValidate"
	//     :readonly="readonly"
	//     :disabled="disabled"
	//     :value.sync="query"
	//     :focused.sync="focused"
	//     :on-focus="onFocus"
	//     :on-blur="blur"
	//     @input="update"
	//     @keydown.esc="show=false"
	//     @keydown.up="up"
	//     @keydown.down="down"
	//     @keydown.enter= "hit(null)"
	//     @keydown.esc="reset"
	//   ></n3-input>
	//   <ul class="{{prefixCls}}-dropdown-menu" :style="{width: dropdownWidth, maxHeight: dropdownHeight}">
	//     <li v-for="item in items" :class="isActive($index)">
	//       <a @mousedown.prevent="hit($index)" >
	//         {{{render.call(this._context,item)}}}
	//       </a>
	//     </li> 
	//   </ul>
	// </div>
	
	// </template>
	
	// <script>

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative;display:inline-block\"\n     :class=\"[show ? prefixCls +'-open' : '']\">\n  <n3-input\n    :width=\"width\"\n    :name=\"name\" \n    :rules=\"rules\" \n    :validate=\"validate\" \n    :has-feedback=\"hasFeedback\"\n    :placeholder=\"placeholder\"\n    :custom-validate=\"customValidate\"\n    :readonly=\"readonly\"\n    :disabled=\"disabled\"\n    :value.sync=\"query\"\n    :focused.sync=\"focused\"\n    :on-focus=\"onFocus\"\n    :on-blur=\"blur\"\n    @input=\"update\"\n    @keydown.esc=\"show=false\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit(null)\"\n    @keydown.esc=\"reset\"\n  ></n3-input>\n  <ul class=\"{{prefixCls}}-dropdown-menu\" :style=\"{width: dropdownWidth, maxHeight: dropdownHeight}\">\n    <li v-for=\"item in items\" :class=\"isActive($index)\">\n      <a @mousedown.prevent=\"hit($index)\" >\n        {{{render.call(this._context,item)}}}\n      </a>\n    </li> \n  </ul>\n</div>";

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inline\" >\n  <div :class=\"classObj\" :style=\"{width:width,height:height}\" @click=\"focus\">\n    <template v-for=\"(index,item) in value\" track-by=\"$index\">\n        <template v-if=\"index == position\">\n            <n3-typeahead\n              :placeholder=\"placeholder\"\n              :on-focus=\"onFocus\"\n              :on-blur=\"onBlur\"\n              :style=\"{margin:'0px 5px'}\"\n              :query.sync=\"query\" \n              :width='inputWidth'\n              :items=\"items\"\n              :on-change=\"onInputchange\"\n              :dropdown-width=\"dropdownWidth\"\n              :dropdown-height=\"dropdownHeight\"\n              :on-hit=\"add\"\n              :match-case=\"matchCase\"\n              :limit=\"limit\"\n              :render=\"render\"\n              :focused.sync=\"focused\"\n              :data=\"data\"\n              @keydown.delete=\"del\" \n              @keydown.left=\"left\" \n              @keydown.right=\"right\" \n              @keydown.enter=\"add\">\n            </n3-typeahead>\n        </template>\n         <template v-else>\n            <span class=\"{{prefixCls}}-multiple-input-space\"  @click=\"setIndex(index)\"></span>\n        </template>\n        <span class=\"{{prefixCls}}-multiple-input-m-tag\" >\n        {{{format.call(this._context,item,index)}}}\n        <n3-icon type=\"times\" class=\"{{prefixCls}}-multiple-close\" @click=\"clickDel(index)\"></n3-icon>\n        </span>\n    </template>\n\n    <template v-if=\"value && value.length == position\">\n      <n3-typeahead\n        :placeholder=\"placeholder\"\n        :on-focus=\"onFocus\"\n        :on-blur=\"onBlur\"\n        :style=\"{margin:'0px 5px'}\"\n        :query.sync=\"query\" \n        :width='inputWidth'\n        :items=\"items\"\n        :on-change=\"onInputchange\"\n        :dropdown-width=\"dropdownWidth\"\n        :dropdown-height=\"dropdownHeight\"\n        :on-hit=\"add\"\n        :match-case=\"matchCase\"\n        :limit=\"limit\"\n        :render=\"render\"\n        :focused.sync=\"focused\"\n        :data=\"data\"\n        @keydown.delete=\"del\" \n        @keydown.left=\"left\" \n        @keydown.right=\"right\" \n        @keydown.enter=\"add\">\n      </n3-typeahead>\n    </template>\n    <template v-else>\n      <span class=\"{{prefixCls}}-multiple-input-space {{prefixCls}}-multiple-input-long\"  @click=\"setIndex(value.length)\"></span>\n    </template>\n  </div>\n   <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n</div>";

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(268)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SimplePagination.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SimplePagination.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SimplePagination.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SimplePagination.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SimplePagination.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<nav v-show="total>0" class='{{prefixCls}}-simple-pagination'>
	//         <div class="{{prefixCls}}-pagination">
	//             <n3-button v-show ="havePrev"  @click="prev" class="{{prefixCls}}-simple-pagination-btn">
	//               <n3-icon type="chevron-left"></n3-icon>
	//             </n3-button>
	//             <span> {{current}} / {{totalpage}}</span>
	//             <n3-button v-show ="haveNext" @click="next" class="{{prefixCls}}-simple-pagination-btn">
	//               <n3-icon type="chevron-right"></n3-icon>
	//             </n3-button>
	//             <n3-input  
	//               width="50px"
	//               class="{{prefixCls}}-simple-pagination-input"
	//               @keyup.enter="go" 
	//               :value.sync="inputValue"></n3-input>
	//             <n3-button @click="go" class="{{prefixCls}}-simple-pagination-btn">跳转</n3-button>
	//         </div>
	//     </nav>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    total: {
	      type: Number
	    },
	    current: {
	      type: Number,
	      twoway: true,
	      default: 1
	    },
	    pagesize: {
	      default: 10
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      inputValue: '',
	      havePrev: true,
	      haveNext: true,
	      totalpage: 0
	    };
	  },
	
	  components: {
	    n3Input: _n3Input2.default,
	    n3Icon: _n3Icon2.default,
	    n3Button: _n3Button2.default
	  },
	  watch: {
	    current: function current(val) {
	      this.inputValue = '';
	      this.checkHave();
	
	      if (_type2.default.isFunction(this.onChange)) {
	        this.onChange(this.current);
	      }
	    },
	    total: function total() {
	      this.init();
	    },
	    pagesize: function pagesize() {
	      this.init();
	    }
	  },
	  ready: function ready() {
	    this.init();
	  },
	
	  methods: {
	    init: function init() {
	      this.current = 1;
	      this.totalpage = Math.ceil(this.total / this.pagesize * 1);
	      this.checkHave();
	    },
	    checkHave: function checkHave() {
	      this.havePrev = this.current > 1;
	      this.haveNext = this.current < this.totalpage;
	    },
	    prev: function prev() {
	      this.go(1 * this.current - 1);
	    },
	    next: function next() {
	      this.go(1 * this.current + 1);
	    },
	    go: function go(page) {
	      if (isNaN(page)) page = this.inputValue;
	      if (isNaN(page)) return;
	
	      page = 1 * page;
	      if (typeof page === 'number') {
	        if (page < 1) {
	          this.curret = 1;
	        } else if (page > this.totalpage) {
	          this.current = this.totalpage;
	        } else {
	          this.current = page;
	        }
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "<nav v-show=\"total>0\" class='{{prefixCls}}-simple-pagination'>\n        <div class=\"{{prefixCls}}-pagination\">\n            <n3-button v-show =\"havePrev\"  @click=\"prev\" class=\"{{prefixCls}}-simple-pagination-btn\">\n              <n3-icon type=\"chevron-left\"></n3-icon>\n            </n3-button>\n            <span> {{current}} / {{totalpage}}</span>\n            <n3-button v-show =\"haveNext\" @click=\"next\" class=\"{{prefixCls}}-simple-pagination-btn\">\n              <n3-icon type=\"chevron-right\"></n3-icon>\n            </n3-button>\n            <n3-input  \n              width=\"50px\"\n              class=\"{{prefixCls}}-simple-pagination-input\"\n              @keyup.enter=\"go\" \n              :value.sync=\"inputValue\"></n3-input>\n            <n3-button @click=\"go\" class=\"{{prefixCls}}-simple-pagination-btn\">跳转</n3-button>\n        </div>\n    </nav>";

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(270)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(271)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Step.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Step.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Step.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Step.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Step.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 270 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//    <ul v-if="round" class="{{prefixCls}}-steps-round-con">
	//    <template v-for="label in labels">
	//       <li :class="[getClassFromIndex($index)]">
	//       <div class="{{prefixCls}}-steps-wrap">
	//         <div class="{{prefixCls}}-steps-round">{{$index + 1}}</div>
	//       </div>
	//       <label>{{label}}</label>
	//     </li>
	//    </template>
	//   </ul>
	
	//   <div v-else class="{{prefixCls}}-steps clearfix">
	//         <template v-for="label in labels">
	//             <div class="{{prefixCls}}-steps-wrap">
	//                 <div :class="getClassFromIndex($index)">
	//                     <label>
	//                       <span class="{{prefixCls}}-steps-round">{{$index + 1}}</span>
	//                       <span>{{label}}</span>
	//                     </label>
	//                     <template v-if="$index < labels.length - 1">
	//                         <i class="{{prefixCls}}-steps-triangle-right-bg"></i>
	//                         <i class="{{prefixCls}}-steps-triangle-right"></i>
	//                     </template>
	//                 </div>
	//             </div>
	//         </template>
	//     </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    labels: {
	      type: Array
	    },
	    current: {
	      type: Number
	    },
	    round: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  methods: {
	    getClassFromIndex: function getClassFromIndex(index) {
	      var ret = '';
	      if (index === this.current - 1) {
	        ret = 'current';
	      } else if (index < this.current - 1) {
	        ret = 'finished';
	      } else {
	        ret = 'todo';
	      }
	
	      return this.prefixCls + '-steps-' + ret;
	    }
	  }
	};
	// </script>

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = "<ul v-if=\"round\" class=\"{{prefixCls}}-steps-round-con\">\n   <template v-for=\"label in labels\">\n      <li :class=\"[getClassFromIndex($index)]\">\n      <div class=\"{{prefixCls}}-steps-wrap\">\n        <div class=\"{{prefixCls}}-steps-round\">{{$index + 1}}</div>\n      </div>\n      <label>{{label}}</label>\n    </li>\n   </template>\n  </ul>\n\n  <div v-else class=\"{{prefixCls}}-steps clearfix\">\n        <template v-for=\"label in labels\">\n            <div class=\"{{prefixCls}}-steps-wrap\">\n                <div :class=\"getClassFromIndex($index)\">\n                    <label>\n                      <span class=\"{{prefixCls}}-steps-round\">{{$index + 1}}</span>\n                      <span>{{label}}</span>\n                    </label>\n                    <template v-if=\"$index < labels.length - 1\">\n                        <i class=\"{{prefixCls}}-steps-triangle-right-bg\"></i>\n                        <i class=\"{{prefixCls}}-steps-triangle-right\"></i>\n                    </template>\n                </div>\n            </div>\n        </template>\n    </div>";

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(273)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(274)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3DataTable.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3DataTable.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3DataTable.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3DataTable.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3DataTable.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3SimplePagination = __webpack_require__(266);
	
	var _n3SimplePagination2 = _interopRequireDefault(_n3SimplePagination);
	
	var _n3Select = __webpack_require__(227);
	
	var _n3Select2 = _interopRequireDefault(_n3Select);
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Input = __webpack_require__(158);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _n3Loading = __webpack_require__(147);
	
	var _n3Loading2 = _interopRequireDefault(_n3Loading);
	
	var _type2 = __webpack_require__(114);
	
	var _type3 = _interopRequireDefault(_type2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    selection: {
	      type: Object
	    },
	    refresh: {
	      type: Function
	    },
	    selectCol: {
	      type: Boolean,
	      default: true
	    },
	    filter: {
	      type: Boolean,
	      default: true
	    },
	    filterList: {
	      type: Array
	    },
	    page: {
	      type: Boolean,
	      default: true
	    },
	    search: {
	      type: Boolean,
	      default: true
	    },
	    striped: {
	      type: Boolean
	    },
	    bordered: {
	      type: Boolean,
	      default: true
	    },
	    hover: {
	      type: Boolean,
	      default: true
	    },
	    responsive: {
	      type: Boolean
	    },
	    columns: {
	      type: Array
	    },
	    source: {
	      type: Array
	    },
	    pagination: {
	      type: Object,
	      twoWay: true,
	      default: function _default() {
	        return {
	          total: 0,
	          current: 1,
	          pagesize: 10
	        };
	      }
	    },
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    onComplete: {
	      type: Function
	    },
	    mergeRule: {
	      type: Object
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      key: 'n3Key',
	      mergeMap: {},
	      isDisabledAll: false,
	      pagesizeFirst: true,
	      filterArr: [],
	      filterMap: {},
	      options: [{ value: 10, label: 10 }, { value: 15, label: 15 }, { value: 25, label: 25 }, { value: 50, label: 50 }, { value: 100, label: 100 }],
	      pagesize: '',
	      query: '',
	      searchMap: {},
	      list: [],
	      sortInfo: {},
	      initSource: [],
	      initColumns: [],
	      selectdCols: [],
	      selectOptions: []
	    };
	  },
	
	  watch: {
	    selectdCols: function selectdCols(val) {
	      var copy = [];
	      for (var i = 0; i < this.initColumns.length; i++) {
	        var c = this.initColumns[i];
	        val.indexOf(c.value) === -1 ? c.show = false : c.show = true;
	        copy.push(Object.assign({}, c));
	      }
	      this.initColumns = copy;
	      this.compileRender();
	    },
	    pagesize: function pagesize(val) {
	      if (this.pagesizeFirst) {
	        this.pagesizeFirst = false;
	        return;
	      }
	      this.pagination.current = 1;
	      this.pagination.pagesize = val;
	      this.pageChange();
	    },
	    source: function source(val) {
	      this.handlerSource();
	      this.render();
	    },
	    columns: function columns(val) {
	      this.init();
	    },
	    filterList: function filterList() {
	      this.handlerFilter();
	    }
	  },
	  created: function created() {
	    var a = [10, 15, 25, 50, 100];
	    this.pagesize = this.pagination.pagesize;
	
	    if (a.indexOf(this.pagesize) === -1) {
	      a.push(this.pagesize);
	      a = a.sort(function (a, b) {
	        return a - b;
	      });
	      this.options = a.map(function (e) {
	        return { value: e, label: e };
	      });
	    }
	  },
	  ready: function ready() {
	    this.init();
	  },
	
	  components: {
	    n3SimplePagination: _n3SimplePagination2.default,
	    n3Select: _n3Select2.default,
	    n3Button: _n3Button2.default,
	    n3Icon: _n3Icon2.default,
	    n3Input: _n3Input2.default,
	    n3Loading: _n3Loading2.default
	  },
	  computed: {
	    checkedRows: {
	      get: function get() {
	        return this.selection.checkRows;
	      },
	      set: function set(val) {
	        var self = this;
	        this.selection.checkRows = val.map(function (i) {
	          return self.delkey(i);
	        });
	      }
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          striped = this.striped,
	          bordered = this.bordered,
	          hover = this.hover,
	          responsive = this.responsive;
	
	      var klass = {};
	
	      klass[prefixCls + '-table'] = true;
	      klass[prefixCls + '-table-striped'] = striped;
	      klass[prefixCls + '-table-bordered'] = bordered;
	      klass[prefixCls + '-table-hover'] = hover;
	      klass[prefixCls + '-table-responsive'] = responsive;
	
	      return klass;
	    },
	    isCheckedAll: function isCheckedAll() {
	      var self = this;
	      var rows = this.checkebleRows.filter(function (record) {
	        return self.checkedValues.indexOf(JSON.stringify(record)) > -1;
	      });
	
	      return this.checkebleRows.length === rows.length;
	    },
	    filters: function filters() {
	      var ret = [];
	      var filters = this.filterArr;
	      for (var i = 0; i < filters.length; i++) {
	        if (filters[i]['value'].length) {
	          ret.push({ dataIndex: filters[i]['dataIndex'], value: filters[i]['value'] });
	        }
	      }
	      return ret;
	    },
	    checkedValues: function checkedValues() {
	      var self = this;
	      var checkedKeys = self.checkedRows.map(function (record) {
	        return JSON.stringify(record);
	      });
	
	      return checkedKeys;
	    },
	    checkebleRows: function checkebleRows() {
	      var self = this;
	      var rows = [];
	
	      if (self.list && self.list.length) {
	        rows = self.list.filter(function (record) {
	          if (self.selection) {
	            return !self.selection.getCheckboxProps || !self.selection.getCheckboxProps(record).disabled;
	          }
	        });
	      }
	      return rows;
	    }
	  },
	  methods: {
	    stringify: function stringify(val) {
	      return JSON.stringify(this.delkey(val));
	    },
	    delkey: function delkey(val) {
	      var a = Object.assign({}, val);
	      delete a[this.key];
	
	      return a;
	    },
	    compare: function compare(a, b) {
	      var e = true;
	      for (var i in a) {
	        if (a[i] != b[i]) {
	          e = false;
	          return false;
	        }
	      }
	      return e;
	    },
	    colspan: function colspan(col, data) {
	      var m = this.mergeRule;
	      if (!m) return 1;
	
	      var ret = m[col.dataIndex] && m[col.dataIndex][data[col.dataIndex]];
	      return ret ? ret.colspan : 1;
	    },
	    rowspan: function rowspan(col, data) {
	      var m = this.mergeRule;
	      if (!m) return 1;
	
	      var ret = m[col.dataIndex] && m[col.dataIndex][data[col.dataIndex]];
	      return ret ? ret.rowspan : 1;
	    },
	    onCheckOne: function onCheckOne(event, record) {
	      var self = this;
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	
	      if (checked) {
	        var array = self.checkedRows;
	        if (self.checkedRows.findIndex(function (item) {
	          return self.compare(item, record);
	        }) === -1) {
	          array.push(record);
	        }
	        self.checkedRows = array;
	      } else {
	        self.checkedRows = self.checkedRows.filter(function (item) {
	          return !self.compare(item, record);
	        });
	      }
	      if (self.selection.onSelect) {
	        self.selection.onSelect(record, checked, self.checkedRows);
	      }
	    },
	    onCheckAll: function onCheckAll(event) {
	      var self = this;
	      var changeRows = [];
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	      if (checked) {
	        (function () {
	          var array = self.checkedRows;
	          self.checkebleRows.forEach(function (record, i) {
	            if (self.checkedRows.findIndex(function (item) {
	              return self.compare(item, record);
	            }) < 0) {
	              array.push(record);
	              changeRows.push(self.delkey(record));
	            }
	          });
	          self.checkedRows = array;
	        })();
	      } else {
	        (function () {
	          var array = self.checkedRows;
	          self.checkebleRows.forEach(function (record, i) {
	            var index = self.checkedRows.findIndex(function (item) {
	              return self.compare(item, record);
	            });
	            if (index >= 0) {
	              array.splice(index, 1);
	              changeRows.push(self.delkey(record));
	            }
	          });
	          self.checkedRows = array;
	        })();
	      }
	      if (self.selection.onSelectAll) {
	        self.selection.onSelectAll(checked, self.checkedRows, changeRows);
	      }
	    },
	    sortStatus: function sortStatus(dataIndex, type) {
	      return this.sortInfo.index === dataIndex && this.sortInfo.type === type;
	    },
	    tableChange: function tableChange() {
	      this.onChange(this.page ? this.pagination : null, this.search ? this.query : null, this.sort ? this.sortInfo : null, this.filter ? this.filters : null);
	    },
	    sort: function sort(col, s, t) {
	      var dataIndex = col.dataIndex;
	      var _type = t || 'DESC';
	
	      if (!s) return;
	
	      if (dataIndex === this.sortInfo.index) {
	        _type = t || (this.sortInfo.type === 'DESC' ? 'ASC' : 'DESC');
	      }
	
	      this.sortInfo = {
	        index: dataIndex,
	        type: _type,
	        method: col.sortMethod
	      };
	
	      if (this.sort && _type3.default.isFunction(this.onChange)) {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    gosearch: function gosearch() {
	      this.pagination.current = 1;
	      if (this.search && _type3.default.isFunction(this.onChange)) {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    pageChange: function pageChange() {
	      if (this.page && _type3.default.isFunction(this.onChange)) {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    resetFilter: function resetFilter() {
	      for (var i = 0; i < this.filterArr.length; i++) {
	        this.filterArr[i].value = [];
	      }
	      this.pagination.current = 1;
	      if (this.filter && _type3.default.isFunction(this.onChange)) {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    goFilter: function goFilter() {
	      this.pagination.current = 1;
	      if (this.filter && _type3.default.isFunction(this.onChange)) {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    addFilter: function addFilter(index, value, filterValue) {
	      var values = this.filterMap[index] && this.filterMap[index]['values'];
	      var filter = this.filterMap[index] && this.filterMap[index]['filter'];
	
	      if (!values[value]) {
	        filter['options'].push({ value: value, label: value });
	        values[value] = true;
	        if (filterValue && filterValue.indexOf(value) > -1) {
	          filter['value'].push(value);
	        }
	      }
	    },
	    handlerFilter: function handlerFilter() {
	      var s = this.columns;
	
	      if (!this.filter) return;
	
	      this.filterMap = {};
	
	      if (_type3.default.isArray(this.filterList)) {
	        this.filterArr = this.filterList;
	      } else {
	        for (var i = 0; i < s.length; i++) {
	          if (s[i]['filter']) {
	            this.filterArr.push({ title: s[i]['title'], dataIndex: s[i]['dataIndex'], options: [], value: [] });
	          }
	        }
	      }
	
	      for (var k = 0; k < this.filterArr.length; k++) {
	        this.filterMap[this.filterArr[k]['dataIndex']] = { filter: this.filterArr[k], values: {} };
	      }
	    },
	    handlerColumns: function handlerColumns() {
	      var s = this.columns;
	      var selectdCols = [];
	      var ret = [];
	
	      this.filterArr = [];
	
	      for (var i = 0; i < s.length; i++) {
	        var t = Object.assign({}, s[i]);
	        t['value'] = t['dataIndex'];
	        t['label'] = t['title'];
	        if (t['show'] !== false) {
	          t['show'] = true;
	          selectdCols.push(t['value']);
	        }
	
	        t['sortType'] ? this.sortInfo = { index: t['dataIndex'], type: t['sortType'] } : 0;
	
	        ret[i] = t;
	      }
	
	      this.handlerFilter();
	      this.selectdCols = selectdCols;
	      this.initColumns = ret;
	      this.selectOptions = ret;
	    },
	    handlerSource: function handlerSource() {
	      var s = this.source;
	      var ret = [];
	      var filterValue = {};
	      var checkedRows = [];
	
	      if (!_type3.default.isArray(this.filterList)) {
	        for (var i in this.filterMap) {
	          var filter = this.filterMap[i];
	          filterValue[i] = filter['filter']['value'].slice(0);
	          filter['values'] = {};
	          filter['filter']['options'] = [];
	          filter['filter']['value'] = [];
	        }
	      }
	
	      for (var _i = 0; _i < s.length; _i++) {
	        var search = '';
	        for (var j in s[_i]) {
	          search += s[_i][j];
	          if (!_type3.default.isArray(this.filterList) && this.filterMap[j]) {
	            this.addFilter(j, s[_i][j], filterValue[j]);
	          }
	        }
	        if (this.search) {
	          this.searchMap[_i] = search;
	        }
	
	        ret[_i] = Object.assign({}, s[_i], { n3Key: _i });
	
	        if (this.selection) {
	          var p = this.selection.getCheckboxProps;
	          p = p ? p(ret[_i]) : null;
	
	          if (p && p.checked) {
	            checkedRows.push(ret[_i]);
	          }
	        }
	      }
	
	      if (this.selection) {
	        this.checkedRows = checkedRows;
	      }
	
	      this.initSource = ret;
	    },
	    init: function init() {
	      this.handlerColumns();
	      this.handlerSource();
	      this.render();
	    },
	    listSort: function listSort(arr, field, order, method) {
	      var type = 'number';
	      order = order === 'ASC' ? 'ASC' : 'DESC';
	
	      if (!method) {
	        for (var i = 0; i < arr.length; i++) {
	          if (typeof arr[i][field] !== 'number') {
	            type = 'string';
	            break;
	          }
	        }
	
	        arr.sort(function (x, y) {
	          return type === 'string' ? String(x[field]).localeCompare(y[field]) : x[field] - y[field];
	        });
	      } else {
	        arr.sort(method);
	      }
	
	      if (order === 'DESC') arr.reverse();
	    },
	    getFilter: function getFilter(index) {
	      return this.filterMap[index] && this.filterMap[index]['filter'];
	    },
	    inArray: function inArray(index, array) {
	      for (var i = 0; i < array.length; i++) {
	        if (array[i] === index) {
	          return true;
	        }
	      }
	
	      return false;
	    },
	    isFilterEmpty: function isFilterEmpty() {
	      var map = this.filterMap;
	      for (var i in map) {
	        if (map[i]['filter']['value'].length > 0) {
	          return false;
	        }
	      }
	      return true;
	    },
	    filterRet: function filterRet(a) {
	      var ret = [];
	
	      for (var i = 0; i < a.length; i++) {
	        var item = a[i];
	        var pass = true;
	
	        for (var j in item) {
	          var filter = this.getFilter(j);
	          if (filter && filter['value'].length && !this.inArray(item[j], filter['value'])) {
	            pass = false;
	          }
	        }
	        if (pass) {
	          ret.push(item);
	        }
	      }
	      return ret;
	    },
	    render: function render() {
	      var s = this.initSource;
	      var ret = this.initSource.slice(0);
	
	      if (this.filter && !_type3.default.isFunction(this.onChange) && this.filterArr.length > 0 && !this.isFilterEmpty()) {
	        ret = this.filterRet(ret);
	      }
	
	      if (this.search && !_type3.default.isFunction(this.onChange) && this.query) {
	        ret = [];
	        for (var i = 0; i < s.length; i++) {
	          this.searchMap[s[i][this.key]].indexOf(this.query) !== -1 ? ret.push(s[i]) : 0;
	        }
	      }
	
	      if (this.sortInfo.index && !_type3.default.isFunction(this.onChange)) {
	        this.listSort(ret, this.sortInfo.index, this.sortInfo.type, this.sortInfo.method);
	      }
	
	      if (this.page && !_type3.default.isFunction(this.onChange)) {
	        this.pagination.total = ret.length;
	        ret = ret.slice((this.pagination.current - 1) * this.pagination.pagesize, (this.pagination.current - 1) * this.pagination.pagesize + this.pagination.pagesize);
	      }
	
	      this.list = ret;
	
	      this.compileRender();
	    },
	    compileRender: function compileRender() {
	      var _this = this;
	
	      var self = this;
	      this.$nextTick(function () {
	        self._context.$compile(self.$el);
	        if (_this.selection) {
	          self.isDisabledAll = !self.checkebleRows.length;
	        }
	        if (_type3.default.isFunction(self.onComplete)) {
	          self.onComplete();
	        }
	      });
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-data-table">
	//   <div class="{{prefixCls}}-data-table-bar clearfix">
	//     <n3-select 
	// 	    class='pull-left'
	// 	    style="margin-right:10px;"
	// 	    :multiple="true"
	// 	    :showselected="false"
	// 	    v-if="selectCol"
	// 	    placeholder = "显示的列"
	// 	    :options="selectOptions" 
	// 	    :value.sync="selectdCols">
	//     </n3-select>
	//     <div v-if="filter && filterArr.length" class='pull-left {{prefixCls}}-btn-group'>
	//       <template v-for="item in filterArr">
	//         <n3-select 
	// 	        :multiple = "item.multiple === undefined?true:!!item.multiple"
	// 	        :search = "item.search === undefined?true:!!item.search"
	// 	        :extra = "item.extra === undefined?true:!!item.extra"
	// 	        :showselected="false"
	// 	        :placeholder = "item.title"
	// 	        :options="item.options" 
	// 	        :value.sync="item.value">
	//         </n3-select>
	//       </template>  
	//       <n3-button
	//         class="{{prefixCls}}-data-table-inner-btn"
	//         @click="resetFilter" 
	//         type="primary">
	//         <n3-icon type="reply"></n3-icon>
	//       </n3-button>
	//        <n3-button
	//         class="{{prefixCls}}-data-table-inner-btn"
	//         @click="goFilter" 
	//         type="primary">
	//         <n3-icon type="filter"></n3-icon>
	//       </n3-button>
	//     </div>
	//       <n3-button
	//         class="{{prefixCls}}-data-table-inner-btn" 
	//         style="margin-left:10px;"
	//         @click="refresh"
	//         v-if="refresh"  
	//         type="primary">
	//         <n3-icon type="refresh"></n3-icon>
	//       </n3-button>
	//     <n3-input
	//       class="pull-right" 
	//       placeholder="搜索"
	//       :value.sync="query"
	//       @keydown.enter="gosearch"
	//       v-if="search">
	//     </n3-input>
	//   </div>
	//   <div>
	//     <n3-loading center size="lg" v-if="loading"></n3-loading>
	//     <div :class="[loading ? prefixCls + '-data-table-loading':'']">
	//       <table :class="classObj" >
	//           <thead>
	//             <tr>
	//               <th v-if="selection" class="{{prefixCls}}-data-table-row-select">
	//                   <input v-if="list && list.length" 
	//                   	type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" 
	//                   	@change="onCheckAll"/>
	//               </th>
	//               <th v-for="col in initColumns" 
	//                   :style="{width: col.width}" 
	//                   :class="{'pointer': col.sort}" 
	//                   @click="sort(col, col.sort)" 
	//                   :colspan="col.colspan === undefined ? 1 : col.colspan"> 
	//                   <template v-if="col.show && col.colspan != 0">
	//                     <span>{{col.title}} </span> 
	//                     <div class="{{prefixCls}}-data-table-sort pull-right" v-if="col.sort" >
	//                       <n3-icon
	//                         @click.stop="sort(col,col.sort,'ASC')"
	//                         :style="{color: sortStatus(col.dataIndex,'ASC') ? 'gray' : '#ddd'}" 
	//                         type="caret-up">
	//                       </n3-icon>
	//                       <n3-icon
	//                         @click.stop="sort(col,col.sort,'DESC')"
	//                         :style="{color: sortStatus(col.dataIndex,'DESC')? 'gray' : '#ddd'}"
	//                         type="caret-down">
	//                       </n3-icon>
	//                     </div>
	//                   </template>
	//               </th>
	//             </tr>
	//           </thead>
	//           <tbody>
	//             <tr v-for="(index,data) in list" track-by="n3Key">
	//                 <td v-if="selection" class="{{prefixCls}}-row-select">
	//                    <input type="checkbox" 
	//                    	v-model="checkedValues"  
	//                    	:value="stringify(data)" @change.stop="onCheckOne($event,data)" 
	//                    	v-bind="selection.getCheckboxProps && selection.getCheckboxProps(data)"/>
	//                 </td>
	//                 <td v-for="col in initColumns"
	//                   :colspan="colspan(col,data)"
	//                   :rowspan="rowspan(col,data)">
	//                   <template v-if="col.show!=false && colspan(col,data) != 0 && rowspan(col,data) !=0">
	//                     <template v-if="col.render">
	//                       {{{col.render.call(this._context,data[col.dataIndex],data,index)}}}
	//                     </template>
	//                     <template v-else>
	//                       {{{ col.dataIndex ? data[col.dataIndex] : ''}}}
	//                     </template>
	//                   </template>
	//                 </td>
	//             </tr>
	//           </tbody>
	//       </table>
	//     </div>
	//   </div>
	//   <div class='{{prefixCls}}-data-table-bar' v-if="page" >
	//     每页&nbsp;<n3-select 
	//       :cancelled="false"
	//       v-if="page"
	//       :options="options" 
	//       class="{{prefixCls}}-data-table-page" 
	//       :value.sync="pagesize"></n3-select>&nbsp;条
	//        共&nbsp;{{pagination.total}}&nbsp;条
	//     <div class="pull-right">  
	//     <n3-simple-pagination v-if="page" 
	//     :total="pagination.total" 
	//     :current.sync="pagination.current" 
	//     :pagesize="pagination.pagesize" 
	//     :on-change="pageChange"
	//     ></n3-simple-pagination>
	//     </div>
	//   </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-data-table\">\n  <div class=\"{{prefixCls}}-data-table-bar clearfix\">\n    <n3-select \n\t    class='pull-left'\n\t    style=\"margin-right:10px;\"\n\t    :multiple=\"true\"\n\t    :showselected=\"false\"\n\t    v-if=\"selectCol\"\n\t    placeholder = \"显示的列\"\n\t    :options=\"selectOptions\" \n\t    :value.sync=\"selectdCols\">\n    </n3-select>\n    <div v-if=\"filter && filterArr.length\" class='pull-left {{prefixCls}}-btn-group'>\n      <template v-for=\"item in filterArr\">\n        <n3-select \n\t        :multiple = \"item.multiple === undefined?true:!!item.multiple\"\n\t        :search = \"item.search === undefined?true:!!item.search\"\n\t        :extra = \"item.extra === undefined?true:!!item.extra\"\n\t        :showselected=\"false\"\n\t        :placeholder = \"item.title\"\n\t        :options=\"item.options\" \n\t        :value.sync=\"item.value\">\n        </n3-select>\n      </template>  \n      <n3-button\n        class=\"{{prefixCls}}-data-table-inner-btn\"\n        @click=\"resetFilter\" \n        type=\"primary\">\n        <n3-icon type=\"reply\"></n3-icon>\n      </n3-button>\n       <n3-button\n        class=\"{{prefixCls}}-data-table-inner-btn\"\n        @click=\"goFilter\" \n        type=\"primary\">\n        <n3-icon type=\"filter\"></n3-icon>\n      </n3-button>\n    </div>\n      <n3-button\n        class=\"{{prefixCls}}-data-table-inner-btn\" \n        style=\"margin-left:10px;\"\n        @click=\"refresh\"\n        v-if=\"refresh\"  \n        type=\"primary\">\n        <n3-icon type=\"refresh\"></n3-icon>\n      </n3-button>\n    <n3-input\n      class=\"pull-right\" \n      placeholder=\"搜索\"\n      :value.sync=\"query\"\n      @keydown.enter=\"gosearch\"\n      v-if=\"search\">\n    </n3-input>\n  </div>\n  <div>\n    <n3-loading center size=\"lg\" v-if=\"loading\"></n3-loading>\n    <div :class=\"[loading ? prefixCls + '-data-table-loading':'']\">\n      <table :class=\"classObj\" >\n          <thead>\n            <tr>\n              <th v-if=\"selection\" class=\"{{prefixCls}}-data-table-row-select\">\n                  <input v-if=\"list && list.length\" \n                  \ttype=\"checkbox\" v-bind=\"{checked:isCheckedAll,disabled:isDisabledAll}\" \n                  \t@change=\"onCheckAll\"/>\n              </th>\n              <th v-for=\"col in initColumns\" \n                  :style=\"{width: col.width}\" \n                  :class=\"{'pointer': col.sort}\" \n                  @click=\"sort(col, col.sort)\" \n                  :colspan=\"col.colspan === undefined ? 1 : col.colspan\"> \n                  <template v-if=\"col.show && col.colspan != 0\">\n                    <span>{{col.title}} </span> \n                    <div class=\"{{prefixCls}}-data-table-sort pull-right\" v-if=\"col.sort\" >\n                      <n3-icon\n                        @click.stop=\"sort(col,col.sort,'ASC')\"\n                        :style=\"{color: sortStatus(col.dataIndex,'ASC') ? 'gray' : '#ddd'}\" \n                        type=\"caret-up\">\n                      </n3-icon>\n                      <n3-icon\n                        @click.stop=\"sort(col,col.sort,'DESC')\"\n                        :style=\"{color: sortStatus(col.dataIndex,'DESC')? 'gray' : '#ddd'}\"\n                        type=\"caret-down\">\n                      </n3-icon>\n                    </div>\n                  </template>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"(index,data) in list\" track-by=\"n3Key\">\n                <td v-if=\"selection\" class=\"{{prefixCls}}-row-select\">\n                   <input type=\"checkbox\" \n                   \tv-model=\"checkedValues\"  \n                   \t:value=\"stringify(data)\" @change.stop=\"onCheckOne($event,data)\" \n                   \tv-bind=\"selection.getCheckboxProps && selection.getCheckboxProps(data)\"/>\n                </td>\n                <td v-for=\"col in initColumns\"\n                  :colspan=\"colspan(col,data)\"\n                  :rowspan=\"rowspan(col,data)\">\n                  <template v-if=\"col.show!=false && colspan(col,data) != 0 && rowspan(col,data) !=0\">\n                    <template v-if=\"col.render\">\n                      {{{col.render.call(this._context,data[col.dataIndex],data,index)}}}\n                    </template>\n                    <template v-else>\n                      {{{ col.dataIndex ? data[col.dataIndex] : ''}}}\n                    </template>\n                  </template>\n                </td>\n            </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n  <div class='{{prefixCls}}-data-table-bar' v-if=\"page\" >\n    每页&nbsp;<n3-select \n      :cancelled=\"false\"\n      v-if=\"page\"\n      :options=\"options\" \n      class=\"{{prefixCls}}-data-table-page\" \n      :value.sync=\"pagesize\"></n3-select>&nbsp;条\n       共&nbsp;{{pagination.total}}&nbsp;条\n    <div class=\"pull-right\">  \n    <n3-simple-pagination v-if=\"page\" \n    :total=\"pagination.total\" \n    :current.sync=\"pagination.current\" \n    :pagesize=\"pagination.pagesize\" \n    :on-change=\"pageChange\"\n    ></n3-simple-pagination>\n    </div>\n  </div>\n  </div>";

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(276)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(280)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timeline.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timeline.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timeline.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timeline.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timeline.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3TimelineItem = __webpack_require__(277);
	
	var _n3TimelineItem2 = _interopRequireDefault(_n3TimelineItem);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//  	<ul class="{{prefixCls}}-timeline-con">
	//  		<template v-if="value">
	//  			<n3-timeline-item v-for="i in value" :color="i.color" :icon="i.icon" >
	//  				{{{i.content}}}
	//  			</n3-timeline-item>
	//  		</template>
	//  		<template v-else>
	//  			<slot></slot>
	//  		</template>
	//  	</ul>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  watch: {
	    value: {
	      handler: function handler(val) {
	        var _this = this;
	
	        if (_type2.default.isArray(val)) {
	          this.$nextTick(function () {
	            _this._context.$compile(_this.$el);
	          });
	        }
	      },
	
	      immediate: true
	    }
	  },
	  components: {
	    n3TimelineItem: _n3TimelineItem2.default
	  }
	};
	// </script>

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(278)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(279)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3TimelineItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3TimelineItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3TimelineItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3TimelineItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3TimelineItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 278 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//  	<li class="{{prefixCls}}-timeline-item">
	//  		<div class="{{prefixCls}}-timeline-item-tail"></div>
	//  		<div :class="[prefixCls+'-timeline-item-head',icon?prefixCls+'-fa '+prefixCls+'-fa-'+icon:'']" :style="style"></div>
	//  		<div class="{{prefixCls}}-timeline-item-content">
	// 	 		<slot></slot>
	//  		</div>
	//  	</li>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    icon: {
	      type: String
	    },
	    color: {
	      type: String,
	      default: '#333'
	    },
	    content: {},
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    style: function style() {
	      return {
	        'border-color': this.color,
	        'color': this.color
	      };
	    }
	  }
	};
	// </script>

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = "<li class=\"{{prefixCls}}-timeline-item\">\n \t\t<div class=\"{{prefixCls}}-timeline-item-tail\"></div>\n \t\t<div :class=\"[prefixCls+'-timeline-item-head',icon?prefixCls+'-fa '+prefixCls+'-fa-'+icon:'']\" :style=\"style\"></div>\n \t\t<div class=\"{{prefixCls}}-timeline-item-content\">\n\t \t\t<slot></slot>\n \t\t</div>\n \t</li>";

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"{{prefixCls}}-timeline-con\">\n \t\t<template v-if=\"value\">\n \t\t\t<n3-timeline-item v-for=\"i in value\" :color=\"i.color\" :icon=\"i.icon\" >\n \t\t\t\t{{{i.content}}}\n \t\t\t</n3-timeline-item>\n \t\t</template>\n \t\t<template v-else>\n \t\t\t<slot></slot>\n \t\t</template>\n \t</ul>";

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(282)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(283)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tags.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tags.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tags.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tags.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tags.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    value: {
	      type: Array,
	      twoway: true
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    removable: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          size = this.size,
	          type = this.type;
	
	      var klass = {};
	
	      klass[prefixCls + '-tag-group'] = true;
	      size ? klass[prefixCls + '-tag-' + size] = true : '';
	      type ? klass[prefixCls + '-tag-' + type] = true : '';
	
	      return klass;
	    },
	    active: function active() {
	      return this.type === 'default' ? 'tag-primary' : 'tag-' + this.type;
	    }
	  },
	  methods: {
	    tagClass: function tagClass(i) {
	      var prefixCls = this.prefixCls;
	
	      var klass = {};
	
	      klass[prefixCls + '-tag'] = true;
	      klass[prefixCls + '-tag-disabled'] = i.disabled;
	
	      return klass;
	    },
	    find: function find(i, target) {
	      var ret = -1;
	      target.forEach(function (e, index) {
	        if (e.value === i.value) {
	          ret = index;
	        }
	      });
	      return ret;
	    },
	    del: function del(i) {
	      if (i.disabled) return;
	      var index = this.find(i, this.value);
	
	      if (index > -1) {
	        this.value.splice(index, 1);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div :class="classObj">
	// 	<label 
	//   	v-for="i in value" 
	// 	  :class="tagClass(i)">
	// 	 {{i.label}}
	// 	<a name="remove" v-if="removable" @click="del(i)"><n3-icon type="times"></n3-icon></a>
	// 	</label>
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\">\n\t<label \n  \tv-for=\"i in value\" \n\t  :class=\"tagClass(i)\">\n\t {{i.label}}\n\t<a name=\"remove\" v-if=\"removable\" @click=\"del(i)\"><n3-icon type=\"times\"></n3-icon></a>\n\t</label>\n</div>";

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(285)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(286)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Breadcrumb.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Breadcrumb.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Breadcrumb.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Breadcrumb.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Breadcrumb.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 285 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<ol class="{{prefixCls}}-breadcrumb">
	// 		<slot></slot>
	// 	</ol>
	// </template>
	// <script>
	exports.default = {
		props: {
			prefixCls: {
				type: String,
				default: 'n3'
			}
		}
	};
	// </script>

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "<ol class=\"{{prefixCls}}-breadcrumb\">\n\t\t<slot></slot>\n\t</ol>";

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(288)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(289)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3BreadcrumbItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3BreadcrumbItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3BreadcrumbItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3BreadcrumbItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3BreadcrumbItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 288 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//  	<li :class="[active ? prefixCls + '-breadcrumb-active' : '']">
	// 		<a v-if='href' :href="href" >
	//     	<slot></slot>
	//   	</a>
	//   	<span v-else>
	//     	<slot></slot>
	//   	</span>
	//   	</li>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    href: {
	      type: String
	    },
	    active: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"[active ? prefixCls + '-breadcrumb-active' : '']\">\n\t\t<a v-if='href' :href=\"href\" >\n    \t<slot></slot>\n  \t</a>\n  \t<span v-else>\n    \t<slot></slot>\n  \t</span>\n  \t</li>";

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(291)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(292)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Form.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Form.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Form.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Form.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Form.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'horizontal'
	    },
	    validate: {
	      type: Boolean,
	      default: false
	    },
	    result: {
	      type: Object,
	      twoWay: true
	    },
	    onValidateChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	
	  methods: {
	    noop: function noop() {},
	    validateFields: function validateFields(cb) {
	      var _this = this;
	
	      this.validate = true;
	      this.$nextTick(function () {
	        if (_type2.default.isFunction(cb)) {
	          cb(_this.result);
	        }
	      });
	    }
	  },
	
	  watch: {
	    validate: function validate(val) {
	      this.$broadcast('n3@openValidate', val);
	      if (val) {
	        this.result = this._result;
	      } else {
	        this.result = { results: {}, isvaild: true };
	      }
	    },
	    result: function result(val) {
	      if (this.validate && _type2.default.isFunction(this.onValidateChange)) {
	        this.onValidateChange(val);
	      }
	    }
	  },
	
	  ready: function ready() {
	    if (!this.validate) {
	      this.result = { results: {}, isvaild: true };
	    }
	    this.$broadcast('n3@openValidate', this.validate);
	  },
	
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          type = this.type;
	
	      var klass = {};
	
	      klass[prefixCls + '-form-horizontal'] = type === 'horizontal';
	      klass[prefixCls + '-form-inline'] = type === 'inline';
	      klass['clearfix'] = true;
	
	      return klass;
	    }
	  },
	
	  events: {
	    'n3@validateChange': function n3ValidateChange(val) {
	      var name = val.name;
	      var validateResult = Object.assign({}, this._result);
	
	      if (!validateResult.results) validateResult.results = {};
	      validateResult.results[name] = val.result;
	
	      validateResult.isvalid = true;
	
	      for (var i in validateResult.results) {
	        if (!validateResult.results[i]['isvalid']) {
	          validateResult.isvalid = false;
	          break;
	        }
	      }
	
	      this._result = validateResult;
	
	      if (this.validate) {
	        this.result = this._result;
	      }
	    }
	  },
	
	  data: function data() {
	    return {
	      _result: { results: {}, isvaild: true }
	    };
	  }
	};
	// </script>
	// <template>
	//   <form :class="classObj"  @submit.prevent="noop">
	//       <slot></slot>
	//   </form>
	// </template>
	
	// <script>

/***/ },
/* 292 */
/***/ function(module, exports) {

	module.exports = "<form :class=\"classObj\"  @submit.prevent=\"noop\">\n      <slot></slot>\n  </form>";

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(294)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(295)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3FormItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3FormItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3FormItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3FormItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3FormItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 294 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="classObj" >
	//     <label class="{{prefixCls}}-col-sm-{{label_col}} {{prefixCls}}-control-label">
	//       <em class="{{prefixCls}}-form-need" v-if="need" >*</em>
	//       {{label}}
	//       </label>
	//     <div class="{{prefixCls}}-col-sm-{{col}} inline">
	//       <slot></slot>
	//     </div>  
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    label: {
	      type: String
	    },
	    labelCol: {
	      type: Number
	    },
	    wrapCol: {
	      type: Number
	    },
	    formCol: {
	      type: Number
	    },
	    need: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    inline: function inline() {
	      return this.$parent.type == 'inline';
	    },
	    label_col: function label_col() {
	      var defaultCol = this.inline ? 0 : 2;
	      return this.labelCol ? this.labelCol : defaultCol;
	    },
	    col: function col() {
	      if (this.inline && !this.formCol) {
	        return 0;
	      }
	
	      if (this.formCol) {
	        return this.formCol;
	      }
	
	      var wrapCol = this.wrapCol ? this.wrapCol : 12;
	      return wrapCol - this.labelCol;
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          wrapCol = this.wrapCol;
	
	      var klass = {};
	      var defaultCol = this.inline ? wrapCol ? wrapCol : 0 : 12;
	
	      klass['clearfix'] = true;
	      klass[prefixCls + '-form-group'] = true;
	      klass[prefixCls + '-col-sm-' + defaultCol] = true;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 295 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" >\n    <label class=\"{{prefixCls}}-col-sm-{{label_col}} {{prefixCls}}-control-label\">\n      <em class=\"{{prefixCls}}-form-need\" v-if=\"need\" >*</em>\n      {{label}}\n      </label>\n    <div class=\"{{prefixCls}}-col-sm-{{col}} inline\">\n      <slot></slot>\n    </div>  \n  </div>";

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(297)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(298)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slide.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slide.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slide.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slide.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slide.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(122);
	
	var _element2 = _interopRequireDefault(_element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      index: 0
	    };
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	    this.$parent.indicator.push(this.index);
	    if (this.index == 0) {
	      _element2.default.addClass(this.$el, this.prefixCls + '-carousel-active');
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-carousel-item">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-carousel-item\">\n    <slot></slot>\n  </div>";

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(300)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(301)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tree.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tree.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tree.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tree.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tree.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    id: {
	      type: Number,
	      default: ''
	    },
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    sort: {
	      type: Boolean,
	      default: true
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    },
	    selectedKey: {
	      type: [String, Number]
	    },
	    checkable: {
	      type: Boolean,
	      default: false
	    },
	    checkedKeys: {
	      type: Array,
	      twoway: true,
	      default: function _default() {
	        return [];
	      }
	    },
	    parent: {
	      type: Number,
	      default: undefined
	    },
	    treeIcon: {
	      type: String,
	      default: 'angle-right'
	    },
	    treeOpenIcon: {
	      type: String,
	      default: 'angle-down'
	    },
	    expandAll: {
	      type: Boolean,
	      default: false
	    },
	    icon: {
	      type: String,
	      default: 'file'
	    },
	    transition: {
	      type: String,
	      default: 'collapse'
	    },
	    loadData: {
	      type: Function,
	      default: null
	    },
	    onRightClick: {
	      type: Function,
	      default: null
	    },
	    onSelect: {
	      type: Function,
	      default: null
	    },
	    onExpand: {
	      type: Function,
	      default: null
	    },
	    onCheck: {
	      type: Function,
	      default: null
	    }
	  },
	  data: function data() {
	    return {
	      loading: -1
	    };
	  },
	
	  methods: {
	    /**
	     * Click Handler
	     * @param {Number} index Tree index selected.
	     * @param {Mixed} value Value selected.
	     */
	    clickHandler: function clickHandler(index, value) {
	      // Select Node
	      this.select(index, value);
	
	      var node = this.data[index];
	      // lazyLoadFlag：节点未打开，节点无子节点
	      var lazyLoadFlag = !node.isOpened && node.children && node.children.length === 0 && _type2.default.isFunction(this.loadData);
	      if (lazyLoadFlag) {
	        this.lazyLoadHandler(index, value);
	      } else {
	        this.toggleOpen(index);
	      }
	    },
	    lazyLoadHandler: function lazyLoadHandler(index, value) {
	      var self = this;
	      this.loading = index;
	      var promise = this.loadData(value);
	      if (_type2.default.isPromise(promise)) {
	        promise.then(function (res) {
	          if (!_type2.default.isArray(res)) {
	            console.error('Loaded Data should be an array: ' + res);
	            return;
	          }
	          self.$set('data[' + index + '].children', res);
	          if (self.checkable && self.isChecked(value)) {
	            [].push.apply(self.checkedKeys, res.map(function (item) {
	              return item.value;
	            }).filter(function (item) {
	              return item !== undefined;
	            }));
	          }
	          self.loading = -1;
	          self.toggleOpen(index);
	        });
	      }
	    },
	
	
	    /**
	     * Selects a node from tree view
	     * @param {Number} index Tree index selected.
	     * @param {Mixed} value Value selected.
	     */
	    select: function select(index, value) {
	      this.selectedKey = value;
	      if (_type2.default.isFunction(this.onSelect)) {
	        try {
	          this.onSelect(this.selectedKey);
	        } catch (error) {
	          console.error(error);
	        }
	      }
	    },
	
	
	    /**
	     * Toggles open / close node.
	     * @param {Number} index
	     */
	    toggleOpen: function toggleOpen(index) {
	      if (_type2.default.isFunction(this.onExpand)) {
	        try {
	          this.onExpand(this.data[index]);
	        } catch (error) {
	          console.error(error);
	        }
	      }
	      // Init
	      if (this.data[index].isOpened === undefined) {
	        this.$set('data[' + index + '].isOpened', this.expandAll && this.hasSelectedChild(index));
	      }
	      // General
	      this.$set('data[' + index + '].isOpened', !this.data[index].isOpened);
	    },
	
	
	    /**
	     * Returns flag indicating if nodes are valid or not.
	     * @param {Array} nodes
	     */
	    areValidNodes: function areValidNodes(nodes) {
	      return nodes !== undefined && _type2.default.isArray(nodes) && nodes.length > 0;
	    },
	
	
	    /**
	     * Returns flag indicating if tree view has a node selected.
	     * @return {Boolean}
	     */
	    hasSelected: function hasSelected() {
	      for (var i in this.data) {
	        if (this.isSelected(this.data[i].value) || this.hasSelectedChild(i)) {
	          return true;
	        }
	      }
	      return false;
	    },
	
	
	    /**
	     * Returns flag indicating if node at specified index has a child selcted or not.
	     * @param {Number} index
	     * @return {Boolean}
	     */
	    hasSelectedChild: function hasSelectedChild(index) {
	      if (!this.checkable) {
	        return false;
	      }
	      for (var i in this.$children) {
	        if (this.$children[i].parent === this.data[index].value && this.$children[i].hasSelected && this.$children[i].hasSelected()) {
	          return true;
	        }
	      }
	      return false;
	    },
	
	
	    /**
	     * Returns flag indicating if node at specified index is selected or not.
	     * @param {Number} index
	     * @return {Boolean}
	     */
	    isSelected: function isSelected(value) {
	      return this.selectedKey !== undefined && this.selectedKey === value;
	    },
	
	
	    /**
	     * Returns flag indicating if node is opened or not.
	     * @param {Number} index
	     * @return {Boolean}
	     */
	    isOpened: function isOpened(index) {
	      return this.data[index].isOpened !== undefined && this.data[index].isOpened || this.hasSelectedChild(index);
	    },
	
	
	    /**
	     * CheckHandler
	     * @param {Number} index Tree index selected.
	     * @param {Mixed} value Value selected.
	     */
	    checkHandler: function checkHandler(index, value) {
	      var flag = this.isChecked(value);
	      this.$broadcast('n3@changeChildChecked', value, flag);
	      this.$dispatch('n3@changeParentChecked', this.parent);
	      if (_type2.default.isFunction(this.onCheck)) {
	        try {
	          this.onCheck(this.checkedKeys);
	        } catch (error) {
	          console.error(error);
	        }
	      }
	    },
	
	
	    /**
	     * Check All Node
	     * @param {Boolean} flag
	     */
	    checkAll: function checkAll(flag) {
	      var value = void 0;
	      var checkedKeys = this.checkedKeys;
	      for (var index = 0; index < this.data.length; index++) {
	        value = this.data[index].value;
	        if (!this.isChecked(value) && flag) {
	          checkedKeys.push(value);
	          this.$broadcast('n3@changeChildChecked', value, true);
	        }
	        if (this.isChecked(value) && !flag) {
	          checkedKeys.$remove(value);
	          this.$broadcast('n3@changeChildChecked', value, false);
	        }
	      }
	    },
	    _sort: function _sort() {
	      this.data = this.data.sort(function (a, b) {
	        return !a.children || b.children;
	      });
	    },
	
	
	    /**
	     * Expand Some Nodes
	     */
	    expand: function expand() {
	      var self = this;
	      // Async load doesn't support expanding all
	      if (self.expandAll && !_type2.default.isFunction(self.loadData)) {
	        self.data.forEach(function (item, index) {
	          self.$set('data[' + index + '].isOpened', true);
	        });
	      }
	    },
	
	
	    /**
	     * Check Node Checked
	     */
	    isChecked: function isChecked(value) {
	      return this.checkedKeys.indexOf(value) > -1;
	    }
	  },
	
	  events: {
	    /**
	     * Refresh Children Checked(向下广播)
	     */
	    'n3@changeChildChecked': function n3ChangeChildChecked(parent, value) {
	      if (this.parent === parent) {
	        this.checkAll(value);
	      }
	    },
	
	
	    /**
	     * Refresh Parent Checked(向上冒泡)
	     * @param {Mixed} parent 源节点的parent value
	     */
	    'n3@changeParentChecked': function n3ChangeParentChecked(parent) {
	      var node = void 0;
	      var children = void 0;
	      var j = void 0;
	      var checkedKeys = this.checkedKeys;
	
	      for (var index = 0; index < this.data.length; index++) {
	        node = this.data[index];
	        children = node.children;
	        // 当前节点为源节点的父节点时
	        if (parent === node.value) {
	          for (j = 0; j < children.length; j++) {
	            // 子节点未全部选中，父节点改为未选中状态
	            if (!this.isChecked(children[j].value)) {
	              if (this.isChecked(node.value)) {
	                checkedKeys.$remove(node.value);
	                this.$dispatch('n3@changeParentChecked', this.parent);
	              }
	              break;
	            }
	          }
	          // 子节点全部被选中，父节点改为选中状态
	          if (j === children.length && !this.isChecked(node.value)) {
	            checkedKeys.push(node.value);
	            this.$dispatch('n3@changeParentChecked', this.parent);
	          }
	          break;
	        }
	      }
	    }
	  },
	
	  created: function created() {
	    if (!this.id) this.id = this._uid;
	  },
	  ready: function ready() {
	    if (this.sort) {
	      this._sort();
	    }
	    this.expand();
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-tree">
	//     <div class="{{prefixCls}}-tree-node-data" v-for="(index, node) in data">
	//       <div class="{{prefixCls}}-tree-node">
	//         <span :class="[isSelected(node.value) ? prefixCls + '-tree-active' : '', prefixCls + '-tree-meta-data']" @click.prevent="clickHandler(index, node.value)">
	//           <template v-if="node.children">
	//             <n3-icon
	//               class="{{prefixCls}}-tree-select-icon"
	//               :type="isOpened(index) ? treeOpenIcon : treeIcon">
	//             </n3-icon>
	//             <span class="{{prefixCls}}-tree-loading-box" v-show="loading > -1 && loading == index">
	//               <n3-loading color="primary" size="xs"></n3-loading>
	//             </span>
	//           </template>
	//           <span class="{{prefixCls}}-tree-select-box" v-if="checkable">
	//             <input 
	//               @click.stop="" 
	//               type="checkbox" 
	//               v-model="checkedKeys" 
	//               :value="node.value"
	//               @change="checkHandler(index, node.value)"/>
	//           </span>
	//           <label class="{{prefixCls}}-tree-loading-box">
	//             <n3-icon :type="node['icon'] || icon"></n3-icon>
	//             {{{node.label}}}
	//           </label>
	//         </span>
	//       </div>
	//       <div :transition="transition" v-if="areValidNodes(node.children)" class="{{prefixCls}}-tree-children" v-show="isOpened(index)">
	//         <div class="{{prefixCls}}-tree-nodes">
	//           <n3-tree 
	//             class="inner" 
	//             :id="id"
	//             :selected-key.sync="selectedKey"
	//             :data.sync="node.children"
	//             :parent.once="node.value"
	//             :load-data="loadData"
	//             :expand-all="expandAll"
	//             :checkable="checkable"
	//             :checked-keys.sync="checkedKeys"
	//             :on-select="onSelect"
	//             :on-check="onCheck"
	//             :sort="sort"
	//           >
	//           </n3-tree>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-tree\">\n    <div class=\"{{prefixCls}}-tree-node-data\" v-for=\"(index, node) in data\">\n      <div class=\"{{prefixCls}}-tree-node\">\n        <span :class=\"[isSelected(node.value) ? prefixCls + '-tree-active' : '', prefixCls + '-tree-meta-data']\" @click.prevent=\"clickHandler(index, node.value)\">\n          <template v-if=\"node.children\">\n            <n3-icon\n              class=\"{{prefixCls}}-tree-select-icon\"\n              :type=\"isOpened(index) ? treeOpenIcon : treeIcon\">\n            </n3-icon>\n            <span class=\"{{prefixCls}}-tree-loading-box\" v-show=\"loading > -1 && loading == index\">\n              <n3-loading color=\"primary\" size=\"xs\"></n3-loading>\n            </span>\n          </template>\n          <span class=\"{{prefixCls}}-tree-select-box\" v-if=\"checkable\">\n            <input \n              @click.stop=\"\" \n              type=\"checkbox\" \n              v-model=\"checkedKeys\" \n              :value=\"node.value\"\n              @change=\"checkHandler(index, node.value)\"/>\n          </span>\n          <label class=\"{{prefixCls}}-tree-loading-box\">\n            <n3-icon :type=\"node['icon'] || icon\"></n3-icon>\n            {{{node.label}}}\n          </label>\n        </span>\n      </div>\n      <div :transition=\"transition\" v-if=\"areValidNodes(node.children)\" class=\"{{prefixCls}}-tree-children\" v-show=\"isOpened(index)\">\n        <div class=\"{{prefixCls}}-tree-nodes\">\n          <n3-tree \n            class=\"inner\" \n            :id=\"id\"\n            :selected-key.sync=\"selectedKey\"\n            :data.sync=\"node.children\"\n            :parent.once=\"node.value\"\n            :load-data=\"loadData\"\n            :expand-all=\"expandAll\"\n            :checkable=\"checkable\"\n            :checked-keys.sync=\"checkedKeys\"\n            :on-select=\"onSelect\"\n            :on-check=\"onCheck\"\n            :sort=\"sort\"\n          >\n          </n3-tree>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(303)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(304)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Card.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Card.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Card.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Card.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Card.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 303 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div :class="classObj">
	// 		<slot></slot>
	// 	</div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    },
	    hover: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls,
	          hover = this.hover;
	
	      var klass = {};
	
	      klass[prefixCls + '-card'] = true;
	      klass[prefixCls + '-card-hover'] = hover;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\">\n\t\t<slot></slot>\n\t</div>";

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(306)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(307)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Uploader.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Uploader.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Uploader.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Uploader.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Uploader.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // <template>
	//   <div :class="[prefixCls + '-upload']" id="upload-{{uploadId}}">
	//     <div v-if="type === 'click'">
	//       <label>
	//         <input
	//           type="file"
	//           :name="name"
	//           :accept="accept"
	//           :id="uploadId"
	//           :multiple="multiple"
	//           @change="onChange($event)" />
	//         <slot>
	//           <n3-button>
	//             <n3-icon type="cloud-upload"></n3-icon>
	//             点击上传
	//           </n3-button>
	//         </slot>
	//       </label>
	//       <div :class="[prefixCls + '-upload-list']">
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
	//           <div :class="[prefixCls + '-upload-item-info']">
	//             <n3-icon type="file-text-o"
	//               :class="[prefixCls + '-upload-file-icon']">
	//             </n3-icon>
	//             <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
	//             <n3-icon type="times"
	//               :class="[prefixCls + '-upload-del-info']"
	//               @click="delFile($index)">
	//             </n3-icon>
	//           </div>
	//           <n3-progress style="padding:0px 4px">
	//             <n3-progressbar
	//               type="success"
	//               height='3px'
	//               :now="progress[$index]"
	//             ></n3-progressbar>
	//           </n3-progress>
	//         </div>
	//       </div>
	//     </div>
	//     <div v-if="type === 'drag'"
	//          :class="[prefixCls + '-upload-drag']">
	//       <div 
	//         :class="[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-upload-is-dragover')]"
	//         :style="{width:dragWidth,height:dragHeight}">
	//         <input type="file"
	//           :name="name"
	//           :id="uploadId"
	//           :accept="accept"
	//           :multiple="multiple"
	//           @change="onChange($event)" />
	//         <label :for="uploadId"
	//             :class="[prefixCls + '-upload-drag-area']">
	//         <n3-icon type="cloud-upload" :class="[prefixCls + '-upload-drag-icon']"></n3-icon>
	//         <span v-if="advanceDrag">点击或将文件拖拽到此区域上传</span>
	//         <span v-if="!advanceDrag">当前环境不支持拖拽上传，请点此上传</span>
	//       </label>
	//       </div>
	//       <div :class="[prefixCls + '-upload-list']">
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
	//           <div :class="[prefixCls + '-upload-item-info']">
	//             <n3-icon type="file-text-o"
	//               :class="[prefixCls + '-upload-file-icon']">
	//             </n3-icon>
	//             <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
	//             <n3-icon type="times"
	//               :class="[prefixCls + '-upload-del-info']"
	//               @click="delFile($index)">
	//             </n3-icon>
	//           </div>
	//           <n3-progress style="padding:0px 4px">
	//             <n3-progressbar
	//               type="success"
	//               height='3px'
	//               :now="progress[$index]"
	//             ></n3-progressbar>
	//           </n3-progress>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>
	
	
	var _n3Icon = __webpack_require__(115);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Button = __webpack_require__(145);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Progress = __webpack_require__(215);
	
	var _n3Progress2 = _interopRequireDefault(_n3Progress);
	
	var _n3Progressbar = __webpack_require__(212);
	
	var _n3Progressbar2 = _interopRequireDefault(_n3Progressbar);
	
	var _n3ToastMethod = __webpack_require__(165);
	
	var _n3ToastMethod2 = _interopRequireDefault(_n3ToastMethod);
	
	var _type = __webpack_require__(114);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    name: {
	      type: String,
	      default: 'files'
	    },
	    type: {
	      type: String,
	      default: 'click'
	    },
	    accept: {
	      type: String,
	      default: ''
	    },
	    url: {
	      type: String,
	      default: ''
	    },
	    multiple: {
	      type: Boolean,
	      default: true
	    },
	    dragWidth: {
	      type: String,
	      default: '300px'
	    },
	    dragHeight: {
	      type: String,
	      default: '200px'
	    },
	    onError: {
	      type: Function,
	      default: function _default(data) {
	        (0, _n3ToastMethod2.default)({
	          text: data.message
	        });
	      }
	    },
	    onSuccess: {
	      type: Function
	    },
	    onFinish: {
	      type: Function
	    },
	    onDelete: {
	      type: Function
	    },
	    maxlength: {
	      type: Number,
	      default: 10
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      value: '',
	      uploadId: 'upload' + Date.now() + Math.floor(Math.random() * 100),
	      percent: 0,
	      xhr: 'FormData' in window,
	      uploadList: [],
	      progress: [],
	      dragover: false,
	      states: []
	    };
	  },
	
	  computed: {
	    advanceDrag: function advanceDrag() {
	      var div = document.createElement('div');
	      return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default,
	    n3Button: _n3Button2.default,
	    n3Progressbar: _n3Progressbar2.default,
	    n3Progress: _n3Progress2.default
	  },
	  ready: function ready() {
	    this._input = document.querySelector('#' + this.uploadId);
	    this.$el = document.querySelector('#upload-' + this.uploadId);
	
	    this.advanceDrag && this.addDragEvt();
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this = this;
	
	    var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	    events.forEach(function (event) {
	      _this.$el.removeEventListener(event, function () {
	        return _this._eventHandler();
	      });
	    });
	  },
	
	  methods: {
	    onChange: function onChange(e) {
	      var files = e.target.files;
	      if (files) {
	        for (var i in files) {
	          if (_typeof(files[i]) === 'object' && files[i].name) {
	            this.progress.push(0);
	            this.uploadList.push(files[i]);
	          }
	        }
	      } else {
	        this.progress = [0];
	        this.uploadList = [{ name: this._input.value.replace(/^.*\\/, '') }];
	      }
	
	      if (this.maxlength && this.uploadList.length > this.maxlength) {
	        this._input.value = '';
	        this.uploadList = [];
	        this.setError('超过上传数量限制，请先删除再进行上传');
	      } else {
	        this.submitForm();
	      }
	    },
	    submitForm: function submitForm() {
	      if (this.uploadList.length > 0) {
	        if (this.url) {
	          if (this.xhr) {
	            this.xhrUpload();
	          } else {
	            this.iframeUpload();
	          }
	        }
	      }
	    },
	    xhrUpload: function xhrUpload() {
	      var self = this;
	      var i = 0;
	      var len = this.uploadList.length;
	      var data = void 0;
	      for (i = 0; i < len; i++) {
	        if (this.states[i]) {
	          continue;
	        }
	        (function (i, file) {
	          if (file.type.match(self.accept)) {
	            (function () {
	              data = new window.FormData();
	              data.append(self.name, file, file.name);
	              // 跨域时 添加身份凭证信息
	              var xhr = new window.XMLHttpRequest();
	              xhr.withCredentials = true;
	              xhr.open('post', self.url, true);
	
	              xhr.onload = function () {
	                self.parseResponse(xhr.responseText, i);
	              };
	
	              xhr.upload.onprogress = function (e) {
	                var loaded = e.loaded ? e.loaded : 0;
	                var total = e.total ? e.total : 1;
	
	                self.$set('progress[' + i + ']', parseInt(loaded / total * 100, 10));
	              };
	
	              xhr.onerror = function () {
	                self.states[i] = false;
	                self.setError('上传失败了！');
	              };
	
	              try {
	                xhr.send(data);
	              } catch (e) {
	                self.setError('上传失败了！');
	              }
	            })();
	          } else {
	            self.setError('不支持该文件类型');
	          }
	        })(i, this.uploadList[i]);
	      }
	    },
	    iframeUpload: function iframeUpload() {
	      var _this2 = this;
	
	      var i = 0;
	      var len = this.uploadList.length;
	      if (this.testSameOrigin(this.url)) {
	        var _loop = function _loop() {
	          var iframeName = 'uploadiframe-' + i + '-' + new Date().getTime();
	          var iframe = document.createElement('iframe');
	          var form = document.createElement('form');
	          var input = document.createElement('input');
	
	          input.setAttribute('type', 'file');
	          input.setAttribute('value', _this2.uploadList[i].name);
	          iframe.setAttribute('name', iframeName);
	          iframe.style.display = 'none';
	          form.setAttribute('method', 'post');
	          form.setAttribute('action', _this2.url);
	          form.setAttribute('target', iframeName);
	          form.setAttribute('data-index', i);
	
	          document.body.appendChild(form);
	          form.appendChild(iframe);
	          form.appendChild(input);
	
	          iframe.addEventListener('load', function () {
	            _this2.parseResponse(iframe.contentDocument.body.innerHTML, form.getAttribute('data-id'));
	            document.body.removeChild(form);
	          });
	          form.submit();
	        };
	
	        for (i = 0; i < len; i++) {
	          _loop();
	        }
	      } else {
	        this.setError('iframe不支持跨域请求');
	      }
	    },
	    testSameOrigin: function testSameOrigin(url) {
	      var loc = window.location;
	      var a = document.createElement('a');
	      a.href = url;
	      return a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol;
	    },
	    parseResponse: function parseResponse(response, index) {
	      var data = null;
	      var len = this.uploadList.length;
	      if (!response) {
	        this.setError('服务器没有响应', index);
	      } else {
	        try {
	          data = JSON.parse(response);
	        } catch (e) {
	          this.setError('服务器响应数据格式有问题', index);
	        }
	        if (data) {
	          this.states[index] = true;
	          if (_type2.default.isFunction(this.onSuccess)) {
	            this.onSuccess({
	              response: data,
	              file: this.uploadList[index]
	            });
	          }
	        }
	      }
	      if (Object.keys(this.states).length === len && _type2.default.isFunction(this.onFinish)) {
	        this.onFinish();
	      }
	    },
	    setError: function setError(message, index) {
	      if (_type2.default.isFunction(this.onError)) {
	        this.onError({
	          message: message,
	          file: index && this.uploadList[index] || null
	        });
	      }
	      this.states[index] = false;
	      index > -1 && this.uploadList.splice(index, 1);
	    },
	    delFile: function delFile(index) {
	      if (_type2.default.isFunction(this.onDelete)) {
	        this.onDelete(this.uploadList[index]);
	      }
	      this.uploadList.splice(index, 1);
	      this.states.splice(index, 1);
	      this.progress.splice(index, 1);
	    },
	    addDragEvt: function addDragEvt() {
	      var _this3 = this;
	
	      var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	
	      events.forEach(function (event) {
	        _this3.$el.addEventListener(event, function (e) {
	          return _this3.dragHandler(e);
	        });
	      });
	    },
	    dragHandler: function dragHandler(e) {
	      var self = this;
	      e.preventDefault();
	      e.stopPropagation();
	
	      if (e.type === 'dragover' || e.type === 'dragenter') {
	        self.dragover = true;
	      }
	
	      if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
	        self.dragover = false;
	        if (e.type === 'drop') {
	          var files = e.dataTransfer.files || {};
	          for (var i in files) {
	            if (files[i] && files[i].name && files[i].size) {
	              self.progress.push(0);
	              self.uploadList.push(files[i]);
	            }
	          }
	          self.submitForm();
	        }
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"[prefixCls + '-upload']\" id=\"upload-{{uploadId}}\">\n    <div v-if=\"type === 'click'\">\n      <label>\n        <input\n          type=\"file\"\n          :name=\"name\"\n          :accept=\"accept\"\n          :id=\"uploadId\"\n          :multiple=\"multiple\"\n          @change=\"onChange($event)\" />\n        <slot>\n          <n3-button>\n            <n3-icon type=\"cloud-upload\"></n3-icon>\n            点击上传\n          </n3-button>\n        </slot>\n      </label>\n      <div :class=\"[prefixCls + '-upload-list']\">\n        <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n          <div :class=\"[prefixCls + '-upload-item-info']\">\n            <n3-icon type=\"file-text-o\"\n              :class=\"[prefixCls + '-upload-file-icon']\">\n            </n3-icon>\n            <span :class=\"[prefixCls + '-upload-file-name']\">{{file.name}}</span>\n            <n3-icon type=\"times\"\n              :class=\"[prefixCls + '-upload-del-info']\"\n              @click=\"delFile($index)\">\n            </n3-icon>\n          </div>\n          <n3-progress style=\"padding:0px 4px\">\n            <n3-progressbar\n              type=\"success\"\n              height='3px'\n              :now=\"progress[$index]\"\n            ></n3-progressbar>\n          </n3-progress>\n        </div>\n      </div>\n    </div>\n    <div v-if=\"type === 'drag'\"\n         :class=\"[prefixCls + '-upload-drag']\">\n      <div \n        :class=\"[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-upload-is-dragover')]\"\n        :style=\"{width:dragWidth,height:dragHeight}\">\n        <input type=\"file\"\n          :name=\"name\"\n          :id=\"uploadId\"\n          :accept=\"accept\"\n          :multiple=\"multiple\"\n          @change=\"onChange($event)\" />\n        <label :for=\"uploadId\"\n            :class=\"[prefixCls + '-upload-drag-area']\">\n        <n3-icon type=\"cloud-upload\" :class=\"[prefixCls + '-upload-drag-icon']\"></n3-icon>\n        <span v-if=\"advanceDrag\">点击或将文件拖拽到此区域上传</span>\n        <span v-if=\"!advanceDrag\">当前环境不支持拖拽上传，请点此上传</span>\n      </label>\n      </div>\n      <div :class=\"[prefixCls + '-upload-list']\">\n        <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n          <div :class=\"[prefixCls + '-upload-item-info']\">\n            <n3-icon type=\"file-text-o\"\n              :class=\"[prefixCls + '-upload-file-icon']\">\n            </n3-icon>\n            <span :class=\"[prefixCls + '-upload-file-name']\">{{file.name}}</span>\n            <n3-icon type=\"times\"\n              :class=\"[prefixCls + '-upload-del-info']\"\n              @click=\"delFile($index)\">\n            </n3-icon>\n          </div>\n          <n3-progress style=\"padding:0px 4px\">\n            <n3-progressbar\n              type=\"success\"\n              height='3px'\n              :now=\"progress[$index]\"\n            ></n3-progressbar>\n          </n3-progress>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _velocityAnimate = __webpack_require__(309);
	
	var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function animate(node, show, transitionName, done) {
	  var ok = void 0;
	
	  function complete() {
	    if (!ok) {
	      ok = true;
	      done();
	    }
	  }
	
	  node.style.display = show ? 'block' : 'none';
	  (0, _velocityAnimate2.default)(node, transitionName, {
	    duration: 200,
	    complete: complete,
	    easing: 'easeInOutQuad'
	  });
	  return {
	    stop: function stop() {
	      (0, _velocityAnimate2.default)(node, 'finish');
	      complete();
	    }
	  };
	}
	
	exports.default = {
	  collapse: {
	    enter: function enter(el, done) {
	      return animate(el, false, 'slideDown', done);
	    },
	    enterCancelled: function enterCancelled(el) {},
	    leave: function leave(el, done) {
	      return animate(el, true, 'slideUp', done);
	    },
	    leaveCancelled: function leaveCancelled() {}
	  }
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.3.1). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	
	/*************************
	 Velocity jQuery Shim
	 *************************/
	
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	
	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
	
	(function(window) {
		"use strict";
		/***************
		 Setup
		 ***************/
	
		/* If jQuery is already loaded, there's no point in loading this shim. */
		if (window.jQuery) {
			return;
		}
	
		/* jQuery base. */
		var $ = function(selector, context) {
			return new $.fn.init(selector, context);
		};
	
		/********************
		 Private Methods
		 ********************/
	
		/* jQuery */
		$.isWindow = function(obj) {
			/* jshint eqeqeq: false */
			return obj && obj === obj.window;
		};
	
		/* jQuery */
		$.type = function(obj) {
			if (!obj) {
				return obj + "";
			}
	
			return typeof obj === "object" || typeof obj === "function" ?
					class2type[toString.call(obj)] || "object" :
					typeof obj;
		};
	
		/* jQuery */
		$.isArray = Array.isArray || function(obj) {
			return $.type(obj) === "array";
		};
	
		/* jQuery */
		function isArraylike(obj) {
			var length = obj.length,
					type = $.type(obj);
	
			if (type === "function" || $.isWindow(obj)) {
				return false;
			}
	
			if (obj.nodeType === 1 && length) {
				return true;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		}
	
		/***************
		 $ Methods
		 ***************/
	
		/* jQuery: Support removed for IE<9. */
		$.isPlainObject = function(obj) {
			var key;
	
			if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
				return false;
			}
	
			try {
				if (obj.constructor &&
						!hasOwn.call(obj, "constructor") &&
						!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}
	
			for (key in obj) {
			}
	
			return key === undefined || hasOwn.call(obj, key);
		};
	
		/* jQuery */
		$.each = function(obj, callback, args) {
			var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike(obj);
	
			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				}
	
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				}
			}
	
			return obj;
		};
	
		/* Custom */
		$.data = function(node, key, value) {
			/* $.getData() */
			if (value === undefined) {
				var getId = node[$.expando],
						store = getId && cache[getId];
	
				if (key === undefined) {
					return store;
				} else if (store) {
					if (key in store) {
						return store[key];
					}
				}
				/* $.setData() */
			} else if (key !== undefined) {
				var setId = node[$.expando] || (node[$.expando] = ++$.uuid);
	
				cache[setId] = cache[setId] || {};
				cache[setId][key] = value;
	
				return value;
			}
		};
	
		/* Custom */
		$.removeData = function(node, keys) {
			var id = node[$.expando],
					store = id && cache[id];
	
			if (store) {
				// Cleanup the entire store if no keys are provided.
				if (!keys) {
					delete cache[id];
				} else {
					$.each(keys, function(_, key) {
						delete store[key];
					});
				}
			}
		};
	
		/* jQuery */
		$.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;
	
			if (typeof target === "boolean") {
				deep = target;
	
				target = arguments[i] || {};
				i++;
			}
	
			if (typeof target !== "object" && $.type(target) !== "function") {
				target = {};
			}
	
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
				if ((options = arguments[i])) {
					for (name in options) {
						if (!options.hasOwnProperty(name)) {
							continue;
						}
						src = target[name];
						copy = options[name];
	
						if (target === copy) {
							continue;
						}
	
						if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && $.isArray(src) ? src : [];
	
							} else {
								clone = src && $.isPlainObject(src) ? src : {};
							}
	
							target[name] = $.extend(deep, clone, copy);
	
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			return target;
		};
	
		/* jQuery 1.4.3 */
		$.queue = function(elem, type, data) {
			function $makeArray(arr, results) {
				var ret = results || [];
	
				if (arr) {
					if (isArraylike(Object(arr))) {
						/* $.merge */
						(function(first, second) {
							var len = +second.length,
									j = 0,
									i = first.length;
	
							while (j < len) {
								first[i++] = second[j++];
							}
	
							if (len !== len) {
								while (second[j] !== undefined) {
									first[i++] = second[j++];
								}
							}
	
							first.length = i;
	
							return first;
						})(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						[].push.call(ret, arr);
					}
				}
	
				return ret;
			}
	
			if (!elem) {
				return;
			}
	
			type = (type || "fx") + "queue";
	
			var q = $.data(elem, type);
	
			if (!data) {
				return q || [];
			}
	
			if (!q || $.isArray(data)) {
				q = $.data(elem, type, $makeArray(data));
			} else {
				q.push(data);
			}
	
			return q;
		};
	
		/* jQuery 1.4.3 */
		$.dequeue = function(elems, type) {
			/* Custom: Embed element iteration. */
			$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
				type = type || "fx";
	
				var queue = $.queue(elem, type),
						fn = queue.shift();
	
				if (fn === "inprogress") {
					fn = queue.shift();
				}
	
				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					fn.call(elem, function() {
						$.dequeue(elem, type);
					});
				}
			});
		};
	
		/******************
		 $.fn Methods
		 ******************/
	
		/* jQuery */
		$.fn = $.prototype = {
			init: function(selector) {
				/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
				if (selector.nodeType) {
					this[0] = selector;
	
					return this;
				} else {
					throw new Error("Not a DOM node.");
				}
			},
			offset: function() {
				/* jQuery altered code: Dropped disconnected DOM node checking. */
				var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
	
				return {
					top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				};
			},
			position: function() {
				/* jQuery */
				function offsetParentFn(elem) {
					var offsetParent = elem.offsetParent || document;
	
					while (offsetParent && (offsetParent.nodeType.toLowerCase !== "html" && offsetParent.style.position === "static")) {
						offsetParent = offsetParent.offsetParent;
					}
	
					return offsetParent || document;
				}
	
				/* Zepto */
				var elem = this[0],
						offsetParent = offsetParentFn(elem),
						offset = this.offset(),
						parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();
	
				offset.top -= parseFloat(elem.style.marginTop) || 0;
				offset.left -= parseFloat(elem.style.marginLeft) || 0;
	
				if (offsetParent.style) {
					parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
					parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
				}
	
				return {
					top: offset.top - parentOffset.top,
					left: offset.left - parentOffset.left
				};
			}
		};
	
		/**********************
		 Private Variables
		 **********************/
	
		/* For $.data() */
		var cache = {};
		$.expando = "velocity" + (new Date().getTime());
		$.uuid = 0;
	
		/* For $.queue() */
		var class2type = {},
				hasOwn = class2type.hasOwnProperty,
				toString = class2type.toString;
	
		var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
		for (var i = 0; i < types.length; i++) {
			class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
		}
	
		/* Makes $(node) possible, without having to call init. */
		$.fn.init.prototype = $.fn;
	
		/* Globalize Velocity onto the window, and assign its Utilities property. */
		window.Velocity = {Utilities: $};
	})(window);
	
	/******************
	 Velocity.js
	 ******************/
	
	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = factory();
			/* AMD module. */
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {
	
			/***************
			 Summary
			 ***************/
	
			/*
			 - CSS: CSS stack that works independently from the rest of Velocity.
			 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
			 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
			 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
			 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
			 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
			 - completeCall(): Handles the cleanup process for each Velocity call.
			 */
	
			/*********************
			 Helper Functions
			 *********************/
	
			/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
			var IE = (function() {
				if (document.documentMode) {
					return document.documentMode;
				} else {
					for (var i = 7; i > 4; i--) {
						var div = document.createElement("div");
	
						div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
	
						if (div.getElementsByTagName("span").length) {
							div = null;
	
							return i;
						}
					}
				}
	
				return undefined;
			})();
	
			/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
			var rAFShim = (function() {
				var timeLast = 0;
	
				return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
					var timeCurrent = (new Date()).getTime(),
							timeDelta;
	
					/* Dynamically set delay on a per-tick basis to match 60fps. */
					/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
					timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
					timeLast = timeCurrent + timeDelta;
	
					return setTimeout(function() {
						callback(timeCurrent + timeDelta);
					}, timeDelta);
				};
			})();
	
			/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
			function compactSparseArray(array) {
				var index = -1,
						length = array ? array.length : 0,
						result = [];
	
				while (++index < length) {
					var value = array[index];
	
					if (value) {
						result.push(value);
					}
				}
	
				return result;
			}
	
			function sanitizeElements(elements) {
				/* Unwrap jQuery/Zepto objects. */
				if (Type.isWrapped(elements)) {
					elements = [].slice.call(elements);
					/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
				} else if (Type.isNode(elements)) {
					elements = [elements];
				}
	
				return elements;
			}
	
			var Type = {
				isString: function(variable) {
					return (typeof variable === "string");
				},
				isArray: Array.isArray || function(variable) {
					return Object.prototype.toString.call(variable) === "[object Array]";
				},
				isFunction: function(variable) {
					return Object.prototype.toString.call(variable) === "[object Function]";
				},
				isNode: function(variable) {
					return variable && variable.nodeType;
				},
				/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
				isNodeList: function(variable) {
					return typeof variable === "object" &&
							/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
							variable.length !== undefined &&
							(variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
				},
				/* Determine if variable is a wrapped jQuery or Zepto element. */
				isWrapped: function(variable) {
					return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
				},
				isSVG: function(variable) {
					return window.SVGElement && (variable instanceof window.SVGElement);
				},
				isEmptyObject: function(variable) {
					for (var name in variable) {
						if (variable.hasOwnProperty(name)) {
							return false;
						}
					}
	
					return true;
				}
			};
	
			/*****************
			 Dependencies
			 *****************/
	
			var $,
					isJQuery = false;
	
			if (global.fn && global.fn.jquery) {
				$ = global;
				isJQuery = true;
			} else {
				$ = window.Velocity.Utilities;
			}
	
			if (IE <= 8 && !isJQuery) {
				throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			} else if (IE <= 7) {
				/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
				jQuery.fn.velocity = jQuery.fn.animate;
	
				/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
				return;
			}
	
			/*****************
			 Constants
			 *****************/
	
			var DURATION_DEFAULT = 400,
					EASING_DEFAULT = "swing";
	
			/*************
			 State
			 *************/
	
			var Velocity = {
				/* Container for page-wide Velocity state data. */
				State: {
					/* Detect mobile devices to determine if mobileHA should be turned on. */
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
					/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
					isAndroid: /Android/i.test(navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
					isChrome: window.chrome,
					isFirefox: /Firefox/i.test(navigator.userAgent),
					/* Create a cached element for re-use when checking for CSS property prefixes. */
					prefixElement: document.createElement("div"),
					/* Cache every prefix match to avoid repeating lookups. */
					prefixMatches: {},
					/* Cache the anchor used for animating window scrolling. */
					scrollAnchor: null,
					/* Cache the browser-specific property names associated with the scroll anchor. */
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					/* Keep track of whether our RAF tick is running. */
					isTicking: false,
					/* Container for every in-progress call to Velocity. */
					calls: []
				},
				/* Velocity's custom CSS stack. Made global for unit testing. */
				CSS: { /* Defined below. */},
				/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
				Utilities: $,
				/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
				Redirects: { /* Manually registered by the user. */},
				Easings: { /* Defined below. */},
				/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
				Promise: window.Promise,
				/* Velocity option defaults, which can be overriden by the user. */
				defaults: {
					queue: "",
					duration: DURATION_DEFAULT,
					easing: EASING_DEFAULT,
					begin: undefined,
					complete: undefined,
					progress: undefined,
					display: undefined,
					visibility: undefined,
					loop: false,
					delay: false,
					mobileHA: true,
					/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
					_cacheValues: true
				},
				/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
				init: function(element) {
					$.data(element, "velocity", {
						/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
						isSVG: Type.isSVG(element),
						/* Keep track of whether the element is currently being animated by Velocity.
						 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
						isAnimating: false,
						/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						computedStyle: null,
						/* Tween data is cached for each animation on the element so that data can be passed across calls --
						 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
						tweensContainer: null,
						/* The full root property values of each CSS hook being animated on this element are cached so that:
						 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
						 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
						rootPropertyValueCache: {},
						/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
						transformCache: {}
					});
				},
				/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
				hook: null, /* Defined below. */
				/* Velocity-wide animation time remapping for testing purposes. */
				mock: false,
				version: {major: 1, minor: 3, patch: 1},
				/* Set to 1 or 2 (most verbose) to output debug info to console. */
				debug: false
			};
	
			/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
			if (window.pageYOffset !== undefined) {
				Velocity.State.scrollAnchor = window;
				Velocity.State.scrollPropertyLeft = "pageXOffset";
				Velocity.State.scrollPropertyTop = "pageYOffset";
			} else {
				Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
				Velocity.State.scrollPropertyLeft = "scrollLeft";
				Velocity.State.scrollPropertyTop = "scrollTop";
			}
	
			/* Shorthand alias for jQuery's $.data() utility. */
			function Data(element) {
				/* Hardcode a reference to the plugin name. */
				var response = $.data(element, "velocity");
	
				/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
				return response === null ? undefined : response;
			}
	
			/**************
			 Easing
			 **************/
	
			/* Step easing generator. */
			function generateStep(steps) {
				return function(p) {
					return Math.round(p * steps) * (1 / steps);
				};
			}
	
			/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			function generateBezier(mX1, mY1, mX2, mY2) {
				var NEWTON_ITERATIONS = 4,
						NEWTON_MIN_SLOPE = 0.001,
						SUBDIVISION_PRECISION = 0.0000001,
						SUBDIVISION_MAX_ITERATIONS = 10,
						kSplineTableSize = 11,
						kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
						float32ArraySupported = "Float32Array" in window;
	
				/* Must contain four arguments. */
				if (arguments.length !== 4) {
					return false;
				}
	
				/* Arguments must be numbers. */
				for (var i = 0; i < 4; ++i) {
					if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
						return false;
					}
				}
	
				/* X values must be in the [0, 1] range. */
				mX1 = Math.min(mX1, 1);
				mX2 = Math.min(mX2, 1);
				mX1 = Math.max(mX1, 0);
				mX2 = Math.max(mX2, 0);
	
				var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
				function A(aA1, aA2) {
					return 1.0 - 3.0 * aA2 + 3.0 * aA1;
				}
				function B(aA1, aA2) {
					return 3.0 * aA2 - 6.0 * aA1;
				}
				function C(aA1) {
					return 3.0 * aA1;
				}
	
				function calcBezier(aT, aA1, aA2) {
					return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
				}
	
				function getSlope(aT, aA1, aA2) {
					return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
				}
	
				function newtonRaphsonIterate(aX, aGuessT) {
					for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
						var currentSlope = getSlope(aGuessT, mX1, mX2);
	
						if (currentSlope === 0.0) {
							return aGuessT;
						}
	
						var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
						aGuessT -= currentX / currentSlope;
					}
	
					return aGuessT;
				}
	
				function calcSampleValues() {
					for (var i = 0; i < kSplineTableSize; ++i) {
						mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
					}
				}
	
				function binarySubdivide(aX, aA, aB) {
					var currentX, currentT, i = 0;
	
					do {
						currentT = aA + (aB - aA) / 2.0;
						currentX = calcBezier(currentT, mX1, mX2) - aX;
						if (currentX > 0.0) {
							aB = currentT;
						} else {
							aA = currentT;
						}
					} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
					return currentT;
				}
	
				function getTForX(aX) {
					var intervalStart = 0.0,
							currentSample = 1,
							lastSample = kSplineTableSize - 1;
	
					for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
						intervalStart += kSampleStepSize;
					}
	
					--currentSample;
	
					var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
							guessForT = intervalStart + dist * kSampleStepSize,
							initialSlope = getSlope(guessForT, mX1, mX2);
	
					if (initialSlope >= NEWTON_MIN_SLOPE) {
						return newtonRaphsonIterate(aX, guessForT);
					} else if (initialSlope === 0.0) {
						return guessForT;
					} else {
						return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
					}
				}
	
				var _precomputed = false;
	
				function precompute() {
					_precomputed = true;
					if (mX1 !== mY1 || mX2 !== mY2) {
						calcSampleValues();
					}
				}
	
				var f = function(aX) {
					if (!_precomputed) {
						precompute();
					}
					if (mX1 === mY1 && mX2 === mY2) {
						return aX;
					}
					if (aX === 0) {
						return 0;
					}
					if (aX === 1) {
						return 1;
					}
	
					return calcBezier(getTForX(aX), mY1, mY2);
				};
	
				f.getControlPoints = function() {
					return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
				};
	
				var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
				f.toString = function() {
					return str;
				};
	
				return f;
			}
	
			/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
			 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
			var generateSpringRK4 = (function() {
				function springAccelerationForState(state) {
					return (-state.tension * state.x) - (state.friction * state.v);
				}
	
				function springEvaluateStateWithDerivative(initialState, dt, derivative) {
					var state = {
						x: initialState.x + derivative.dx * dt,
						v: initialState.v + derivative.dv * dt,
						tension: initialState.tension,
						friction: initialState.friction
					};
	
					return {dx: state.v, dv: springAccelerationForState(state)};
				}
	
				function springIntegrateState(state, dt) {
					var a = {
						dx: state.v,
						dv: springAccelerationForState(state)
					},
					b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
							c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
							d = springEvaluateStateWithDerivative(state, dt, c),
							dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
							dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
					state.x = state.x + dxdt * dt;
					state.v = state.v + dvdt * dt;
	
					return state;
				}
	
				return function springRK4Factory(tension, friction, duration) {
	
					var initState = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
					path = [0],
							time_lapsed = 0,
							tolerance = 1 / 10000,
							DT = 16 / 1000,
							have_duration, dt, last_state;
	
					tension = parseFloat(tension) || 500;
					friction = parseFloat(friction) || 20;
					duration = duration || null;
	
					initState.tension = tension;
					initState.friction = friction;
	
					have_duration = duration !== null;
	
					/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
					if (have_duration) {
						/* Run the simulation without a duration. */
						time_lapsed = springRK4Factory(tension, friction);
						/* Compute the adjusted time delta. */
						dt = time_lapsed / duration * DT;
					} else {
						dt = DT;
					}
	
					while (true) {
						/* Next/step function .*/
						last_state = springIntegrateState(last_state || initState, dt);
						/* Store the position. */
						path.push(1 + last_state.x);
						time_lapsed += 16;
						/* If the change threshold is reached, break. */
						if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
							break;
						}
					}
	
					/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
					 computed path and returns a snapshot of the position according to a given percentComplete. */
					return !have_duration ? time_lapsed : function(percentComplete) {
						return path[ (percentComplete * (path.length - 1)) | 0 ];
					};
				};
			}());
	
			/* jQuery easings. */
			Velocity.Easings = {
				linear: function(p) {
					return p;
				},
				swing: function(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
				spring: function(p) {
					return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
				}
			};
	
			/* CSS3 and Robert Penner easings. */
			$.each(
					[
						["ease", [0.25, 0.1, 0.25, 1.0]],
						["ease-in", [0.42, 0.0, 1.00, 1.0]],
						["ease-out", [0.00, 0.0, 0.58, 1.0]],
						["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
						["easeInSine", [0.47, 0, 0.745, 0.715]],
						["easeOutSine", [0.39, 0.575, 0.565, 1]],
						["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
						["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
						["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
						["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
						["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
						["easeOutCubic", [0.215, 0.61, 0.355, 1]],
						["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
						["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
						["easeOutQuart", [0.165, 0.84, 0.44, 1]],
						["easeInOutQuart", [0.77, 0, 0.175, 1]],
						["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
						["easeOutQuint", [0.23, 1, 0.32, 1]],
						["easeInOutQuint", [0.86, 0, 0.07, 1]],
						["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
						["easeOutExpo", [0.19, 1, 0.22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
						["easeOutCirc", [0.075, 0.82, 0.165, 1]],
						["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
					], function(i, easingArray) {
				Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
			});
	
			/* Determine the appropriate easing type given an easing input. */
			function getEasing(value, duration) {
				var easing = value;
	
				/* The easing option can either be a string that references a pre-registered easing,
				 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
				if (Type.isString(value)) {
					/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
					if (!Velocity.Easings[value]) {
						easing = false;
					}
				} else if (Type.isArray(value) && value.length === 1) {
					easing = generateStep.apply(null, value);
				} else if (Type.isArray(value) && value.length === 2) {
					/* springRK4 must be passed the animation's duration. */
					/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
					 function generated with default tension and friction values. */
					easing = generateSpringRK4.apply(null, value.concat([duration]));
				} else if (Type.isArray(value) && value.length === 4) {
					/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
					easing = generateBezier.apply(null, value);
				} else {
					easing = false;
				}
	
				/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
				 if the Velocity-wide default has been incorrectly modified. */
				if (easing === false) {
					if (Velocity.Easings[Velocity.defaults.easing]) {
						easing = Velocity.defaults.easing;
					} else {
						easing = EASING_DEFAULT;
					}
				}
	
				return easing;
			}
	
			/*****************
			 CSS Stack
			 *****************/
	
			/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
			 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
			/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
			var CSS = Velocity.CSS = {
				/*************
				 RegEx
				 *************/
	
				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}$/i,
					/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
					valueUnwrap: /^[A-z]+\((.*)\)$/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
				},
				/************
				 Lists
				 ************/
	
				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
				},
				/************
				 Hooks
				 ************/
	
				/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
				 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
				/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
				 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
				Hooks: {
					/********************
					 Registration
					 ********************/
	
					/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
					/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
					templates: {
						"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
						"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
						"backgroundPosition": ["X Y", "0% 0%"],
						"transformOrigin": ["X Y Z", "50% 50% 0px"],
						"perspectiveOrigin": ["X Y", "50% 50%"]
					},
					/* A "registered" hook is one that has been converted from its template form into a live,
					 tweenable property. It contains data to associate it with its root property. */
					registered: {
						/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
						 which consists of the subproperty's name, the associated root property's name,
						 and the subproperty's position in the root's value. */
					},
					/* Convert the templates into individual hooks then append them to the registered object above. */
					register: function() {
						/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
						 currently set to "transparent" default to their respective template below when color-animated,
						 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
						 which is almost always set closer to black than white. */
						for (var i = 0; i < CSS.Lists.colors.length; i++) {
							var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
							CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
						}
	
						var rootProperty,
								hookTemplate,
								hookNames;
	
						/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
						 Thus, we re-arrange the templates accordingly. */
						if (IE) {
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");
	
								var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
	
								if (hookNames[0] === "Color") {
									/* Reposition both the hook's name and its default value to the end of their respective strings. */
									hookNames.push(hookNames.shift());
									defaultValues.push(defaultValues.shift());
	
									/* Replace the existing template for the hook's root property. */
									CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
								}
							}
						}
	
						/* Hook registration. */
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");
	
							for (var j in hookNames) {
								if (!hookNames.hasOwnProperty(j)) {
									continue;
								}
								var fullHookName = rootProperty + hookNames[j],
										hookPosition = j;
	
								/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
								 and the hook's position in its template's default value string. */
								CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
							}
						}
					},
					/*****************************
					 Injection and Extraction
					 *****************************/
	
					/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
					/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
					getRoot: function(property) {
						var hookData = CSS.Hooks.registered[property];
	
						if (hookData) {
							return hookData[0];
						} else {
							/* If there was no hook match, return the property name untouched. */
							return property;
						}
					},
					/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
					 the targeted hook can be injected or extracted at its standard position. */
					cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
						/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
						if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
							rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
						}
	
						/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
						 default to the root's default value as defined in CSS.Hooks.templates. */
						/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
						 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
						if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
							rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
						}
	
						return rootPropertyValue;
					},
					/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
					extractValue: function(fullHookName, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1];
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
							return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					},
					/* Inject the hook's value into its root property's value. This is used to piece back together the root property
					 once Velocity has updated one of its individually hooked values through tweening. */
					injectValue: function(fullHookName, hookValue, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1],
									rootPropertyValueParts,
									rootPropertyValueUpdated;
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
							 then reconstruct the rootPropertyValue string. */
							rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
							rootPropertyValueParts[hookPosition] = hookValue;
							rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
	
							return rootPropertyValueUpdated;
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					}
				},
				/*******************
				 Normalizations
				 *******************/
	
				/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
				 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
				Normalizations: {
					/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
					 the targeted element (which may need to be queried), and the targeted property value. */
					registered: {
						clip: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
								case "extract":
									var extracted;
	
									/* If Velocity also extracted this value, skip extraction. */
									if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
										extracted = propertyValue;
									} else {
										/* Remove the "rect()" wrapper. */
										extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
	
										/* Strip off commas. */
										extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
									}
	
									return extracted;
									/* Clip needs to be re-wrapped during injection. */
								case "inject":
									return "rect(" + propertyValue + ")";
							}
						},
						blur: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var extracted = parseFloat(propertyValue);
	
									/* If extracted is NaN, meaning the value isn't already extracted. */
									if (!(extracted || extracted === 0)) {
										var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
	
										/* If the filter string had a blur component, return just the blur value and unit type. */
										if (blurComponent) {
											extracted = blurComponent[1];
											/* If the component doesn't exist, default blur to 0. */
										} else {
											extracted = 0;
										}
									}
	
									return extracted;
									/* Blur needs to be re-wrapped during injection. */
								case "inject":
									/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
									if (!parseFloat(propertyValue)) {
										return "none";
									} else {
										return "blur(" + propertyValue + ")";
									}
							}
						},
						/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
						opacity: function(type, element, propertyValue) {
							if (IE <= 8) {
								switch (type) {
									case "name":
										return "filter";
									case "extract":
										/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
										 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
										var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
	
										if (extracted) {
											/* Convert to decimal value. */
											propertyValue = extracted[1] / 100;
										} else {
											/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
											propertyValue = 1;
										}
	
										return propertyValue;
									case "inject":
										/* Opacified elements are required to have their zoom property set to a non-zero value. */
										element.style.zoom = 1;
	
										/* Setting the filter property on elements with certain font property combinations can result in a
										 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
										 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
										if (parseFloat(propertyValue) >= 1) {
											return "";
										} else {
											/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
											return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
										}
								}
								/* With all other browsers, normalization is not required; return the same values that were passed in. */
							} else {
								switch (type) {
									case "name":
										return "opacity";
									case "extract":
										return propertyValue;
									case "inject":
										return propertyValue;
								}
							}
						}
					},
					/*****************************
					 Batched Registrations
					 *****************************/
	
					/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
					register: function() {
	
						/*****************
						 Transforms
						 *****************/
	
						/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
						 so that they can be referenced in a properties map by their individual names. */
						/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
						 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
						 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
						 once when multiple transform subproperties are being animated simultaneously. */
						/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
						 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
						 from being normalized for these browsers so that tweening skips these properties altogether
						 (since it will ignore them as being unsupported by the browser.) */
						if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
							/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
							 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
							CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
						}
	
						for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
							/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
							 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
							(function() {
								var transformName = CSS.Lists.transformsBase[i];
	
								CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
									switch (type) {
										/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
										case "name":
											return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
										case "extract":
											/* If this transform has yet to be assigned a value, return its null value. */
											if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
												/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
												return /^scale/i.test(transformName) ? 1 : 0;
												/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
												 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
											}
											return Data(element).transformCache[transformName].replace(/[()]/g, "");
										case "inject":
											var invalid = false;
	
											/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
											 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
											/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
											switch (transformName.substr(0, transformName.length - 1)) {
												/* Whitelist unit types for each transform. */
												case "translate":
													invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
													break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
												case "scal":
												case "scale":
													/* Chrome on Android has a bug in which scaled elements blur if their initial scale
													 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
													 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
													if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
														propertyValue = 1;
													}
	
													invalid = !/(\d)$/i.test(propertyValue);
													break;
												case "skew":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
												case "rotate":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
											}
	
											if (!invalid) {
												/* As per the CSS spec, wrap the value in parentheses. */
												Data(element).transformCache[transformName] = "(" + propertyValue + ")";
											}
	
											/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
											return Data(element).transformCache[transformName];
									}
								};
							})();
						}
	
						/*************
						 Colors
						 *************/
	
						/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
						 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
						for (var j = 0; j < CSS.Lists.colors.length; j++) {
							/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
							 (Otherwise, all functions would take the final for loop's colorName.) */
							(function() {
								var colorName = CSS.Lists.colors[j];
	
								/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
								CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
									switch (type) {
										case "name":
											return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
										case "extract":
											var extracted;
	
											/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
											if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
												extracted = propertyValue;
											} else {
												var converted,
														colorNames = {
															black: "rgb(0, 0, 0)",
															blue: "rgb(0, 0, 255)",
															gray: "rgb(128, 128, 128)",
															green: "rgb(0, 128, 0)",
															red: "rgb(255, 0, 0)",
															white: "rgb(255, 255, 255)"
														};
	
												/* Convert color names to rgb. */
												if (/^[A-z]+$/i.test(propertyValue)) {
													if (colorNames[propertyValue] !== undefined) {
														converted = colorNames[propertyValue];
													} else {
														/* If an unmatched color name is provided, default to black. */
														converted = colorNames.black;
													}
													/* Convert hex values to rgb. */
												} else if (CSS.RegEx.isHex.test(propertyValue)) {
													converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
													/* If the provided color doesn't match any of the accepted color formats, default to black. */
												} else if (!(/^rgba?\(/i.test(propertyValue))) {
													converted = colorNames.black;
												}
	
												/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
												 repeated spaces (in case the value included spaces to begin with). */
												extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
											}
	
											/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
												extracted += " 1";
											}
	
											return extracted;
										case "inject":
											/* If this is IE<=8 and an alpha component exists, strip it off. */
											if (IE <= 8) {
												if (propertyValue.split(" ").length === 4) {
													propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
												}
												/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											} else if (propertyValue.split(" ").length === 3) {
												propertyValue += " 1";
											}
	
											/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
											 on all values but the fourth (R, G, and B only accept whole numbers). */
											return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
									}
								};
							})();
						}
					}
				},
				/************************
				 CSS Property Names
				 ************************/
	
				Names: {
					/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
					 Camelcasing is used to normalize property names between and across calls. */
					camelCase: function(property) {
						return property.replace(/-(\w)/g, function(match, subMatch) {
							return subMatch.toUpperCase();
						});
					},
					/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
					SVGAttribute: function(property) {
						var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
	
						/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
						if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
							SVGAttributes += "|transform";
						}
	
						return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
					},
					/* Determine whether a property should be set with a vendor prefix. */
					/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
					 If the property is not at all supported by the browser, return a false flag. */
					prefixCheck: function(property) {
						/* If this property has already been checked, return the cached value. */
						if (Velocity.State.prefixMatches[property]) {
							return [Velocity.State.prefixMatches[property], true];
						} else {
							var vendors = ["", "Webkit", "Moz", "ms", "O"];
	
							for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
								var propertyPrefixed;
	
								if (i === 0) {
									propertyPrefixed = property;
								} else {
									/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
									propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
										return match.toUpperCase();
									});
								}
	
								/* Check if the browser supports this property as prefixed. */
								if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
									/* Cache the match. */
									Velocity.State.prefixMatches[property] = propertyPrefixed;
	
									return [propertyPrefixed, true];
								}
							}
	
							/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
							return [property, false];
						}
					}
				},
				/************************
				 CSS Property Values
				 ************************/
	
				Values: {
					/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
					hexToRgb: function(hex) {
						var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
								longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
								rgbParts;
	
						hex = hex.replace(shortformRegex, function(m, r, g, b) {
							return r + r + g + g + b + b;
						});
	
						rgbParts = longformRegex.exec(hex);
	
						return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
					},
					isCSSNullValue: function(value) {
						/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
						 Thus, we check for both falsiness and these special strings. */
						/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
						 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
						/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
						return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
					},
					/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
					getUnitType: function(property) {
						if (/^(rotate|skew)/i.test(property)) {
							return "deg";
						} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
							/* The above properties are unitless. */
							return "";
						} else {
							/* Default to px for all other properties. */
							return "px";
						}
					},
					/* HTML elements default to an associated display type when they're not set to display:none. */
					/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
					getDisplayType: function(element) {
						var tagName = element && element.tagName.toString().toLowerCase();
	
						if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
							return "inline";
						} else if (/^(li)$/i.test(tagName)) {
							return "list-item";
						} else if (/^(tr)$/i.test(tagName)) {
							return "table-row";
						} else if (/^(table)$/i.test(tagName)) {
							return "table";
						} else if (/^(tbody)$/i.test(tagName)) {
							return "table-row-group";
							/* Default to "block" when no match is found. */
						} else {
							return "block";
						}
					},
					/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
					addClass: function(element, className) {
						if (element.classList) {
							element.classList.add(className);
						} else {
							element.className += (element.className.length ? " " : "") + className;
						}
					},
					removeClass: function(element, className) {
						if (element.classList) {
							element.classList.remove(className);
						} else {
							element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
						}
					}
				},
				/****************************
				 Style Getting & Setting
				 ****************************/
	
				/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
					/* Get an element's computed property value. */
					/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
					 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
					 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					function computePropertyValue(element, property) {
						/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
						 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
						 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
						 We subtract border and padding to get the sum of interior + scrollbar. */
						var computedValue = 0;
	
						/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
						 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
						 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
						 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
						if (IE <= 8) {
							computedValue = $.css(element, property); /* GET */
							/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
							 associated element so that it does not need to be refetched upon every GET. */
						} else {
							/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
							 toggle display to the element type's default value. */
							var toggleDisplay = false;
	
							if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
								toggleDisplay = true;
								CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
							}
	
							var revertDisplay = function() {
								if (toggleDisplay) {
									CSS.setPropertyValue(element, "display", "none");
								}
							};
	
							if (!forceStyleLookup) {
								if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
									revertDisplay();
	
									return contentBoxHeight;
								} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
									revertDisplay();
	
									return contentBoxWidth;
								}
							}
	
							var computedStyle;
	
							/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
							 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
							if (Data(element) === undefined) {
								computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If the computedStyle object has yet to be cached, do so now. */
							} else if (!Data(element).computedStyle) {
								computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If computedStyle is cached, use it. */
							} else {
								computedStyle = Data(element).computedStyle;
							}
	
							/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
							 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
							 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
							if (property === "borderColor") {
								property = "borderTopColor";
							}
	
							/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
							 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
							if (IE === 9 && property === "filter") {
								computedValue = computedStyle.getPropertyValue(property); /* GET */
							} else {
								computedValue = computedStyle[property];
							}
	
							/* Fall back to the property's style value (if defined) when computedValue returns nothing,
							 which can happen when the element hasn't been painted. */
							if (computedValue === "" || computedValue === null) {
								computedValue = element.style[property];
							}
	
							revertDisplay();
						}
	
						/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
						 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
						 effect as being set to 0, so no conversion is necessary.) */
						/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
						 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
						 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
						if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
							var position = computePropertyValue(element, "position"); /* GET */
	
							/* For absolute positioning, jQuery's $.position() only returns values for top and left;
							 right and bottom will have their "auto" value reverted to 0. */
							/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
							 Not a big deal since we're currently in a GET batch anyway. */
							if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
								/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
								computedValue = $(element).position()[property] + "px"; /* GET */
							}
						}
	
						return computedValue;
					}
	
					var propertyValue;
	
					/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
					 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
					if (CSS.Hooks.registered[property]) {
						var hook = property,
								hookRoot = CSS.Hooks.getRoot(hook);
	
						/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
						 query the DOM for the root property's value. */
						if (rootPropertyValue === undefined) {
							/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
							rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
						}
	
						/* If this root has a normalization registered, peform the associated normalization extraction. */
						if (CSS.Normalizations.registered[hookRoot]) {
							rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
						}
	
						/* Extract the hook's value. */
						propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
	
						/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
						 normalize the property's name and value, and handle the special case of transforms. */
						/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
						 numerical and therefore do not require normalization extraction. */
					} else if (CSS.Normalizations.registered[property]) {
						var normalizedPropertyName,
								normalizedPropertyValue;
	
						normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
	
						/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
						 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
						 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
						 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
						if (normalizedPropertyName !== "transform") {
							normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
	
							/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
							if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
								normalizedPropertyValue = CSS.Hooks.templates[property][1];
							}
						}
	
						propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
					}
	
					/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
					if (!/^[\d-]/.test(propertyValue)) {
						/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
						 their HTML attribute values instead of their CSS style values. */
						var data = Data(element);
	
						if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
							/* Since the height/width attribute values must be set manually, they don't reflect computed values.
							 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
							if (/^(height|width)$/i.test(property)) {
								/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
								try {
									propertyValue = element.getBBox()[property];
								} catch (error) {
									propertyValue = 0;
								}
								/* Otherwise, access the attribute value directly. */
							} else {
								propertyValue = element.getAttribute(property);
							}
						} else {
							propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
						}
					}
	
					/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
					 convert CSS null-values to an integer of value 0. */
					if (CSS.Values.isCSSNullValue(propertyValue)) {
						propertyValue = 0;
					}
	
					if (Velocity.debug >= 2) {
						console.log("Get " + property + ": " + propertyValue);
					}
	
					return propertyValue;
				},
				/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
					var propertyName = property;
	
					/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
					if (property === "scroll") {
						/* If a container option is present, scroll the container instead of the browser window. */
						if (scrollData.container) {
							scrollData.container["scroll" + scrollData.direction] = propertyValue;
							/* Otherwise, Velocity defaults to scrolling the browser window. */
						} else {
							if (scrollData.direction === "Left") {
								window.scrollTo(propertyValue, scrollData.alternateValue);
							} else {
								window.scrollTo(scrollData.alternateValue, propertyValue);
							}
						}
					} else {
						/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
						 Thus, for now, we merely cache transforms being SET. */
						if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
							/* Perform a normalization injection. */
							/* Note: The normalization logic handles the transformCache updating. */
							CSS.Normalizations.registered[property]("inject", element, propertyValue);
	
							propertyName = "transform";
							propertyValue = Data(element).transformCache[property];
						} else {
							/* Inject hooks. */
							if (CSS.Hooks.registered[property]) {
								var hookName = property,
										hookRoot = CSS.Hooks.getRoot(property);
	
								/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
								rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */
	
								propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
								property = hookRoot;
							}
	
							/* Normalize names and values. */
							if (CSS.Normalizations.registered[property]) {
								propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
								property = CSS.Normalizations.registered[property]("name", element);
							}
	
							/* Assign the appropriate vendor prefix before performing an official style update. */
							propertyName = CSS.Names.prefixCheck(property)[0];
	
							/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
							 Try/catch is avoided for other browsers since it incurs a performance overhead. */
							if (IE <= 8) {
								try {
									element.style[propertyName] = propertyValue;
								} catch (error) {
									if (Velocity.debug) {
										console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
									}
								}
								/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
								/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
							} else {
								var data = Data(element);
	
								if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
									/* Note: For SVG attributes, vendor-prefixed property names are never used. */
									/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
									element.setAttribute(property, propertyValue);
								} else {
									element.style[propertyName] = propertyValue;
								}
							}
	
							if (Velocity.debug >= 2) {
								console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
							}
						}
					}
	
					/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
					return [propertyName, propertyValue];
				},
				/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
				/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
				flushTransformCache: function(element) {
					var transformString = "",
							data = Data(element);
	
					/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
					 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
					if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
						/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
						 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
						var getTransformFloat = function(transformProperty) {
							return parseFloat(CSS.getPropertyValue(element, transformProperty));
						};
	
						/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
						 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
						var SVGTransforms = {
							translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
							skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
							/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
							 (this behavior mimics the result of animating all these properties at once on HTML elements). */
							scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
							/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
							 defining the rotation's origin point. We ignore the origin values (default them to 0). */
							rotate: [getTransformFloat("rotateZ"), 0, 0]
						};
	
						/* Iterate through the transform properties in the user-defined property map order.
						 (This mimics the behavior of non-SVG transform animation.) */
						$.each(Data(element).transformCache, function(transformName) {
							/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
							 properties so that they match up with SVG's accepted transform properties. */
							if (/^translate/i.test(transformName)) {
								transformName = "translate";
							} else if (/^scale/i.test(transformName)) {
								transformName = "scale";
							} else if (/^rotate/i.test(transformName)) {
								transformName = "rotate";
							}
	
							/* Check that we haven't yet deleted the property from the SVGTransforms container. */
							if (SVGTransforms[transformName]) {
								/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
								transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
	
								/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
								 re-insert the same master property if we encounter another one of its axis-specific properties. */
								delete SVGTransforms[transformName];
							}
						});
					} else {
						var transformValue,
								perspective;
	
						/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
						$.each(Data(element).transformCache, function(transformName) {
							transformValue = Data(element).transformCache[transformName];
	
							/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
							if (transformName === "transformPerspective") {
								perspective = transformValue;
								return true;
							}
	
							/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
							if (IE === 9 && transformName === "rotateZ") {
								transformName = "rotate";
							}
	
							transformString += transformName + transformValue + " ";
						});
	
						/* If present, set the perspective subproperty first. */
						if (perspective) {
							transformString = "perspective" + perspective + " " + transformString;
						}
					}
	
					CSS.setPropertyValue(element, "transform", transformString);
				}
			};
	
			/* Register hooks and normalizations. */
			CSS.Hooks.register();
			CSS.Normalizations.register();
	
			/* Allow hook setting in the same fashion as jQuery's $.css(). */
			Velocity.hook = function(elements, arg2, arg3) {
				var value;
	
				elements = sanitizeElements(elements);
	
				$.each(elements, function(i, element) {
					/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/* Get property value. If an element set was passed in, only return the value for the first element. */
					if (arg3 === undefined) {
						if (value === undefined) {
							value = Velocity.CSS.getPropertyValue(element, arg2);
						}
						/* Set property value. */
					} else {
						/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
						var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);
	
						/* Transform properties don't automatically set. They have to be flushed to the DOM. */
						if (adjustedSet[0] === "transform") {
							Velocity.CSS.flushTransformCache(element);
						}
	
						value = adjustedSet;
					}
				});
	
				return value;
			};
	
			/*****************
			 Animation
			 *****************/
	
			var animate = function() {
				var opts;
	
				/******************
				 Call Chain
				 ******************/
	
				/* Logic for determining what to return to the call stack when exiting out of Velocity. */
				function getChain() {
					/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
					 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
					if (isUtility) {
						return promiseData.promise || null;
						/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
					} else {
						return elementsWrapped;
					}
				}
	
				/*************************
				 Arguments Assignment
				 *************************/
	
				/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
				 objects are defined on a container object that's passed in as Velocity's sole argument. */
				/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
				var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
						/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
						isUtility,
						/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
						 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
						elementsWrapped,
						argumentIndex;
	
				var elements,
						propertiesMap,
						options;
	
				/* Detect jQuery/Zepto elements being animated via the $.fn method. */
				if (Type.isWrapped(this)) {
					isUtility = false;
	
					argumentIndex = 0;
					elements = this;
					elementsWrapped = this;
					/* Otherwise, raw elements are being animated via the utility function. */
				} else {
					isUtility = true;
	
					argumentIndex = 1;
					elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
				}
	
				elements = sanitizeElements(elements);
	
				if (!elements) {
					return;
				}
	
				if (syntacticSugar) {
					propertiesMap = arguments[0].properties || arguments[0].p;
					options = arguments[0].options || arguments[0].o;
				} else {
					propertiesMap = arguments[argumentIndex];
					options = arguments[argumentIndex + 1];
				}
	
				/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
				 single raw DOM element is passed in (which doesn't contain a length property). */
				var elementsLength = elements.length,
						elementsIndex = 0;
	
				/***************************
				 Argument Overloading
				 ***************************/
	
				/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
				 Overloading is detected by checking for the absence of an object being passed into options. */
				/* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
				if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
					/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
					var startingArgumentPosition = argumentIndex + 1;
	
					options = {};
	
					/* Iterate through all options arguments */
					for (var i = startingArgumentPosition; i < arguments.length; i++) {
						/* Treat a number as a duration. Parse it out. */
						/* Note: The following RegEx will return true if passed an array with a number as its first item.
						 Thus, arrays are skipped from this check. */
						if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
							options.duration = arguments[i];
							/* Treat strings and arrays as easings. */
						} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
							options.easing = arguments[i];
							/* Treat a function as a complete callback. */
						} else if (Type.isFunction(arguments[i])) {
							options.complete = arguments[i];
						}
					}
				}
	
				/***************
				 Promises
				 ***************/
	
				var promiseData = {
					promise: null,
					resolver: null,
					rejecter: null
				};
	
				/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
				 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
				 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
				 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
				/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
				 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
				 grouped together for the purposes of resolving and rejecting a promise. */
				if (isUtility && Velocity.Promise) {
					promiseData.promise = new Velocity.Promise(function(resolve, reject) {
						promiseData.resolver = resolve;
						promiseData.rejecter = reject;
					});
				}
	
				/*********************
				 Action Detection
				 *********************/
	
				/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
				 or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
				 first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
				var action;
	
				switch (propertiesMap) {
					case "scroll":
						action = "scroll";
						break;
	
					case "reverse":
						action = "reverse";
						break;
	
					case "finish":
					case "finishAll":
					case "stop":
						/*******************
						 Action: Stop
						 *******************/
	
						/* Clear the currently-active delay on each targeted element. */
						$.each(elements, function(i, element) {
							if (Data(element) && Data(element).delayTimer) {
								/* Stop the timer from triggering its cached next() function. */
								clearTimeout(Data(element).delayTimer.setTimeout);
	
								/* Manually call the next() function so that the subsequent queue items can progress. */
								if (Data(element).delayTimer.next) {
									Data(element).delayTimer.next();
								}
	
								delete Data(element).delayTimer;
							}
	
							/* If we want to finish everything in the queue, we have to iterate through it
							 and call each function. This will make them active calls below, which will
							 cause them to be applied via the duration setting. */
							if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
								/* Iterate through the items in the element's queue. */
								$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
									/* The queue array can contain an "inprogress" string, which we skip. */
									if (Type.isFunction(item)) {
										item();
									}
								});
	
								/* Clearing the $.queue() array is achieved by resetting it to []. */
								$.queue(element, Type.isString(options) ? options : "", []);
							}
						});
	
						var callsToStop = [];
	
						/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
						 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
						 is stopped, the next item in its animation queue is immediately triggered. */
						/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
						 or a custom queue string can be passed in. */
						/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
						 regardless of the element's current queue state. */
	
						/* Iterate through every active call. */
						$.each(Velocity.State.calls, function(i, activeCall) {
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
									 clear calls associated with the relevant queue. */
									/* Call stopping logic works as follows:
									 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
									 - options === undefined --> stop current queue:"" call and all queue:false calls.
									 - options === false --> stop only queue:false calls.
									 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
											/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
											 due to the queue-clearing above. */
											if (options === true || Type.isString(options)) {
												/* Iterate through the items in the element's queue. */
												$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
													/* The queue array can contain an "inprogress" string, which we skip. */
													if (Type.isFunction(item)) {
														/* Pass the item's callback a flag indicating that we want to abort from the queue call.
														 (Specifically, the queue will resolve the call's associated promise then abort.)  */
														item(null, true);
													}
												});
	
												/* Clearing the $.queue() array is achieved by resetting it to []. */
												$.queue(element, Type.isString(options) ? options : "", []);
											}
	
											if (propertiesMap === "stop") {
												/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
												 changed to reflect the final value that the elements were actually tweened to. */
												/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
												 object. Also, queue:false animations can't be reversed. */
												var data = Data(element);
												if (data && data.tweensContainer && queueName !== false) {
													$.each(data.tweensContainer, function(m, activeTween) {
														activeTween.endValue = activeTween.currentValue;
													});
												}
	
												callsToStop.push(i);
											} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
												/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
												 they finish upon the next rAf tick then proceed with normal call completion logic. */
												activeCall[2].duration = 1;
											}
										}
									});
								});
							}
						});
	
						/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
						 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
						if (propertiesMap === "stop") {
							$.each(callsToStop, function(i, j) {
								completeCall(j, true);
							});
	
							if (promiseData.promise) {
								/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
								promiseData.resolver(elements);
							}
						}
	
						/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
						return getChain();
	
					default:
						/* Treat a non-empty plain object as a literal properties map. */
						if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
							action = "start";
	
							/****************
							 Redirects
							 ****************/
	
							/* Check if a string matches a registered redirect (see Redirects above). */
						} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
							opts = $.extend({}, options);
	
							var durationOriginal = opts.duration,
									delayOriginal = opts.delay || 0;
	
							/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
							if (opts.backwards === true) {
								elements = $.extend(true, [], elements).reverse();
							}
	
							/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
							$.each(elements, function(elementIndex, element) {
								/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
								if (parseFloat(opts.stagger)) {
									opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
								} else if (Type.isFunction(opts.stagger)) {
									opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
								}
	
								/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
								 the duration of each element's animation, using floors to prevent producing very short durations. */
								if (opts.drag) {
									/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
									opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
	
									/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
									 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
									 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
									opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
								}
	
								/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
								 reduce the opts checking logic required inside the redirect. */
								Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
							});
	
							/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
							 (The performance overhead up to this point is virtually non-existant.) */
							/* Note: The jQuery call chain is kept intact by returning the complete element set. */
							return getChain();
						} else {
							var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
	
							if (promiseData.promise) {
								promiseData.rejecter(new Error(abortError));
							} else {
								console.log(abortError);
							}
	
							return getChain();
						}
				}
	
				/**************************
				 Call-Wide Variables
				 **************************/
	
				/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
				 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
				 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
				 conversion metrics across Velocity animations that are not immediately consecutively chained. */
				var callUnitConversionData = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				};
	
				/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
				 Velocity.State.calls array that is processed during animation ticking. */
				var call = [];
	
				/************************
				 Element Processing
				 ************************/
	
				/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
				 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
				 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
				 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
				 `elementArrayIndex` allows passing index of the element in the original array to value functions.
				 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
				 */
				function processElement(element, elementArrayIndex) {
	
					/*************************
					 Part I: Pre-Queueing
					 *************************/
	
					/***************************
					 Element-Wide Variables
					 ***************************/
	
					var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
							opts = $.extend({}, Velocity.defaults, options),
							/* A container for the processed data associated with each property in the propertyMap.
							 (Each property in the map produces its own "tween".) */
							tweensContainer = {},
							elementUnitConversionData;
	
					/******************
					 Element Init
					 ******************/
	
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/******************
					 Option: Delay
					 ******************/
	
					/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
					/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
					 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
					if (parseFloat(opts.delay) && opts.queue !== false) {
						$.queue(element, opts.queue, function(next) {
							/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
							 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
							Data(element).delayTimer = {
								setTimeout: setTimeout(next, parseFloat(opts.delay)),
								next: next
							};
						});
					}
	
					/*********************
					 Option: Duration
					 *********************/
	
					/* Support for jQuery's named durations. */
					switch (opts.duration.toString().toLowerCase()) {
						case "fast":
							opts.duration = 200;
							break;
	
						case "normal":
							opts.duration = DURATION_DEFAULT;
							break;
	
						case "slow":
							opts.duration = 600;
							break;
	
						default:
							/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
							opts.duration = parseFloat(opts.duration) || 1;
					}
	
					/************************
					 Global Option: Mock
					 ************************/
	
					if (Velocity.mock !== false) {
						/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
						 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
						if (Velocity.mock === true) {
							opts.duration = opts.delay = 1;
						} else {
							opts.duration *= parseFloat(Velocity.mock) || 1;
							opts.delay *= parseFloat(Velocity.mock) || 1;
						}
					}
	
					/*******************
					 Option: Easing
					 *******************/
	
					opts.easing = getEasing(opts.easing, opts.duration);
	
					/**********************
					 Option: Callbacks
					 **********************/
	
					/* Callbacks must functions. Otherwise, default to null. */
					if (opts.begin && !Type.isFunction(opts.begin)) {
						opts.begin = null;
					}
	
					if (opts.progress && !Type.isFunction(opts.progress)) {
						opts.progress = null;
					}
	
					if (opts.complete && !Type.isFunction(opts.complete)) {
						opts.complete = null;
					}
	
					/*********************************
					 Option: Display & Visibility
					 *********************************/
	
					/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
					/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
					if (opts.display !== undefined && opts.display !== null) {
						opts.display = opts.display.toString().toLowerCase();
	
						/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
						if (opts.display === "auto") {
							opts.display = Velocity.CSS.Values.getDisplayType(element);
						}
					}
	
					if (opts.visibility !== undefined && opts.visibility !== null) {
						opts.visibility = opts.visibility.toString().toLowerCase();
					}
	
					/**********************
					 Option: mobileHA
					 **********************/
	
					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
					 on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
					opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
	
					/***********************
					 Part II: Queueing
					 ***********************/
	
					/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
					 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
					/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
					 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
					function buildQueue(next) {
						var data, lastTweensContainer;
	
						/*******************
						 Option: Begin
						 *******************/
	
						/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
						if (opts.begin && elementsIndex === 0) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.begin.call(elements, elements);
							} catch (error) {
								setTimeout(function() {
									throw error;
								}, 1);
							}
						}
	
						/*****************************************
						 Tween Data Construction (for Scroll)
						 *****************************************/
	
						/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
						if (action === "scroll") {
							/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
							var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
									scrollOffset = parseFloat(opts.offset) || 0,
									scrollPositionCurrent,
									scrollPositionCurrentAlternate,
									scrollPositionEnd;
	
							/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
							 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
							if (opts.container) {
								/* Ensure that either a jQuery object or a raw DOM element was passed in. */
								if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
									/* Extract the raw DOM element from the jQuery wrapper. */
									opts.container = opts.container[0] || opts.container;
									/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
									 (due to the user's natural interaction with the page). */
									scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */
	
									/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
									 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
									 the scroll container's current scroll position. */
									scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
									/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
								} else {
									opts.container = null;
								}
							} else {
								/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
								 the appropriate cached property names (which differ based on browser type). */
								scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
								/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
								scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
	
								/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
								 and therefore end values do not need to be compounded onto current values. */
								scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
							}
	
							/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
							tweensContainer = {
								scroll: {
									rootPropertyValue: false,
									startValue: scrollPositionCurrent,
									currentValue: scrollPositionCurrent,
									endValue: scrollPositionEnd,
									unitType: "",
									easing: opts.easing,
									scrollData: {
										container: opts.container,
										direction: scrollDirection,
										alternateValue: scrollPositionCurrentAlternate
									}
								},
								element: element
							};
	
							if (Velocity.debug) {
								console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
							}
	
							/******************************************
							 Tween Data Construction (for Reverse)
							 ******************************************/
	
							/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
							 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
							 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
							/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
							/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
							 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
							 as reverting to the element's values as they were prior to the previous *Velocity* call. */
						} else if (action === "reverse") {
							data = Data(element);
	
							/* Abort if there is no prior animation data to reverse to. */
							if (!data) {
								return;
							}
	
							if (!data.tweensContainer) {
								/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
								$.dequeue(element, opts.queue);
	
								return;
							} else {
								/*********************
								 Options Parsing
								 *********************/
	
								/* If the element was hidden via the display option in the previous call,
								 revert display to "auto" prior to reversal so that the element is visible again. */
								if (data.opts.display === "none") {
									data.opts.display = "auto";
								}
	
								if (data.opts.visibility === "hidden") {
									data.opts.visibility = "visible";
								}
	
								/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
								 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
								data.opts.loop = false;
								data.opts.begin = null;
								data.opts.complete = null;
	
								/* Since we're extending an opts object that has already been extended with the defaults options object,
								 we remove non-explicitly-defined properties that are auto-assigned values. */
								if (!options.easing) {
									delete opts.easing;
								}
	
								if (!options.duration) {
									delete opts.duration;
								}
	
								/* The opts object used for reversal is an extension of the options object optionally passed into this
								 reverse call plus the options used in the previous Velocity call. */
								opts = $.extend({}, data.opts, opts);
	
								/*************************************
								 Tweens Container Reconstruction
								 *************************************/
	
								/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
								lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);
	
								/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
								for (var lastTween in lastTweensContainer) {
									/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
									if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
										var lastStartValue = lastTweensContainer[lastTween].startValue;
	
										lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
										lastTweensContainer[lastTween].endValue = lastStartValue;
	
										/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
										 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
										 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
										if (!Type.isEmptyObject(options)) {
											lastTweensContainer[lastTween].easing = opts.easing;
										}
	
										if (Velocity.debug) {
											console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
										}
									}
								}
	
								tweensContainer = lastTweensContainer;
							}
	
							/*****************************************
							 Tween Data Construction (for Start)
							 *****************************************/
	
						} else if (action === "start") {
	
							/*************************
							 Value Transferring
							 *************************/
	
							/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
							 while the element was in the process of being animated by Velocity, then this current call is safe to use
							 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
							 process whenever possible in order to avoid requerying the DOM. */
							/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
							 then the DOM is queried for the element's current values as a last resort. */
							/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	
							data = Data(element);
	
							/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
							 to transfer over end values to use as start values. If it's set to true and there is a previous
							 Velocity call to pull values from, do so. */
							if (data && data.tweensContainer && data.isAnimating === true) {
								lastTweensContainer = data.tweensContainer;
							}
	
							/***************************
							 Tween Data Calculation
							 ***************************/
	
							/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
							/* Property map values can either take the form of 1) a single value representing the end value,
							 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
							 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
							 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
							var parsePropertyValue = function(valueData, skipResolvingEasing) {
								var endValue, easing, startValue;
	
								/* Handle the array format, which can be structured as one of three potential overloads:
								 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
								if (Type.isArray(valueData)) {
									/* endValue is always the first item in the array. Don't bother validating endValue's value now
									 since the ensuing property cycling logic does that. */
									endValue = valueData[0];
	
									/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
									 start value since easings can only be non-hex strings or arrays. */
									if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
										startValue = valueData[1];
										/* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
									} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
										easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
	
										/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
										if (valueData[2] !== undefined) {
											startValue = valueData[2];
										}
									}
									/* Handle the single-value format. */
								} else {
									endValue = valueData;
								}
	
								/* Default to the call's easing if a per-property easing type was not defined. */
								if (!skipResolvingEasing) {
									easing = easing || opts.easing;
								}
	
								/* If functions were passed in as values, pass the function the current element as its context,
								 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
								if (Type.isFunction(endValue)) {
									endValue = endValue.call(element, elementArrayIndex, elementsLength);
								}
	
								if (Type.isFunction(startValue)) {
									startValue = startValue.call(element, elementArrayIndex, elementsLength);
								}
	
								/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
								return [endValue || 0, easing, startValue];
							};
	
							/* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
							 colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
							$.each(propertiesMap, function(property, value) {
								/* Find shorthand color properties that have been passed a hex string. */
								if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(CSS.Names.camelCase(property))) {
									/* Parse the value data for each shorthand. */
									var valueData = parsePropertyValue(value, true),
											endValue = valueData[0],
											easing = valueData[1],
											startValue = valueData[2];
	
									if (CSS.RegEx.isHex.test(endValue)) {
										/* Convert the hex strings into their RGB component arrays. */
										var colorComponents = ["Red", "Green", "Blue"],
												endValueRGB = CSS.Values.hexToRgb(endValue),
												startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
	
										/* Inject the RGB component tweens into propertiesMap. */
										for (var i = 0; i < colorComponents.length; i++) {
											var dataArray = [endValueRGB[i]];
	
											if (easing) {
												dataArray.push(easing);
											}
	
											if (startValueRGB !== undefined) {
												dataArray.push(startValueRGB[i]);
											}
	
											propertiesMap[CSS.Names.camelCase(property) + colorComponents[i]] = dataArray;
										}
	
										/* Remove the intermediary shorthand property entry now that we've processed it. */
										delete propertiesMap[property];
									}
								}
							});
	
							/* Create a tween out of each property, and append its associated data to tweensContainer. */
							for (var property in propertiesMap) {
	
								if (!propertiesMap.hasOwnProperty(property)) {
									continue;
								}
								/**************************
								 Start Value Sourcing
								 **************************/
	
								/* Parse out endValue, easing, and startValue from the property's data. */
								var valueData = parsePropertyValue(propertiesMap[property]),
										endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2];
	
								/* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
								 we force the property to its camelCase styling to normalize it for manipulation. */
								property = CSS.Names.camelCase(property);
	
								/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
								var rootProperty = CSS.Hooks.getRoot(property),
										rootPropertyValue = false;
	
								/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
								 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
								 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
								/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
								 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
								if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
									if (Velocity.debug) {
										console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
									}
									continue;
								}
	
								/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
								 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
								 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
								if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
									startValue = 0;
								}
	
								/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
								 for all of the current call's properties that were *also* animated in the previous call. */
								/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
								if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
									if (startValue === undefined) {
										startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
									}
	
									/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
									 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
									 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
									rootPropertyValue = data.rootPropertyValueCache[rootProperty];
									/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
								} else {
									/* Handle hooked properties. */
									if (CSS.Hooks.registered[property]) {
										if (startValue === undefined) {
											rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
											/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
											 getPropertyValue() will extract the hook from rootPropertyValue. */
											startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
											/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
											 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
											 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
											 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
										} else {
											/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
											rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
										}
										/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
									} else if (startValue === undefined) {
										startValue = CSS.getPropertyValue(element, property); /* GET */
									}
								}
	
								/**************************
								 Value Data Extraction
								 **************************/
	
								var separatedValue,
										endValueUnitType,
										startValueUnitType,
										operator = false;
	
								/* Separates a property value into its numeric value and its unit type. */
								var separateValue = function(property, value) {
									var unitType,
											numericValue;
	
									numericValue = (value || "0")
											.toString()
											.toLowerCase()
											/* Match the unit type at the end of the value. */
											.replace(/[%A-z]+$/, function(match) {
												/* Grab the unit type. */
												unitType = match;
	
												/* Strip the unit type off of value. */
												return "";
											});
	
									/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
									if (!unitType) {
										unitType = CSS.Values.getUnitType(property);
									}
	
									return [numericValue, unitType];
								};
	
								/* Separate startValue. */
								separatedValue = separateValue(property, startValue);
								startValue = separatedValue[0];
								startValueUnitType = separatedValue[1];
	
								/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
								separatedValue = separateValue(property, endValue);
								endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
									operator = subMatch;
	
									/* Strip the operator off of the value. */
									return "";
								});
								endValueUnitType = separatedValue[1];
	
								/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
								startValue = parseFloat(startValue) || 0;
								endValue = parseFloat(endValue) || 0;
	
								/***************************************
								 Property-Specific Value Conversion
								 ***************************************/
	
								/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
								if (endValueUnitType === "%") {
									/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */
									if (/^(fontSize|lineHeight)$/.test(property)) {
										/* Convert % into an em decimal value. */
										endValue = endValue / 100;
										endValueUnitType = "em";
										/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
									} else if (/^scale/.test(property)) {
										endValue = endValue / 100;
										endValueUnitType = "";
										/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
									} else if (/(Red|Green|Blue)$/i.test(property)) {
										endValue = (endValue / 100) * 255;
										endValueUnitType = "";
									}
								}
	
								/***************************
								 Unit Ratio Calculation
								 ***************************/
	
								/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
								 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
								 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
								 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
								 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
								 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
								/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
								 setting values with the target unit type then comparing the returned pixel value. */
								/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
								 of batching the SETs and GETs together upfront outweights the potential overhead
								 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
								/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
								var calculateUnitRatios = function() {
	
									/************************
									 Same Ratio Checks
									 ************************/
	
									/* The properties below are used to determine whether the element differs sufficiently from this call's
									 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
									 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
									 this is done to minimize DOM querying. */
									var sameRatioIndicators = {
										myParent: element.parentNode || document.body, /* GET */
										position: CSS.getPropertyValue(element, "position"), /* GET */
										fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
									},
									/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
									samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
											/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
											sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
	
									/* Store these ratio indicators call-wide for the next element to compare against. */
									callUnitConversionData.lastParent = sameRatioIndicators.myParent;
									callUnitConversionData.lastPosition = sameRatioIndicators.position;
									callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
	
									/***************************
									 Element-Specific Units
									 ***************************/
	
									/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
									 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
									var measurement = 100,
											unitRatios = {};
	
									if (!sameEmRatio || !samePercentRatio) {
										var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
	
										Velocity.init(dummy);
										sameRatioIndicators.myParent.appendChild(dummy);
	
										/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
										 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
										/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
										$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, "hidden");
										});
										Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
										Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
										Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
	
										/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
										$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
										});
										/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
										Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
	
										/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
										unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
	
										sameRatioIndicators.myParent.removeChild(dummy);
									} else {
										unitRatios.emToPx = callUnitConversionData.lastEmToPx;
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
									}
	
									/***************************
									 Element-Agnostic Units
									 ***************************/
	
									/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
									 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
									 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
									 so we calculate it now. */
									if (callUnitConversionData.remToPx === null) {
										/* Default to browsers' default fontSize of 16px in the case of 0. */
										callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
									}
	
									/* Similarly, viewport units are %-relative to the window's inner dimensions. */
									if (callUnitConversionData.vwToPx === null) {
										callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
										callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
									}
	
									unitRatios.remToPx = callUnitConversionData.remToPx;
									unitRatios.vwToPx = callUnitConversionData.vwToPx;
									unitRatios.vhToPx = callUnitConversionData.vhToPx;
	
									if (Velocity.debug >= 1) {
										console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
									}
									return unitRatios;
								};
	
								/********************
								 Unit Conversion
								 ********************/
	
								/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
								if (/[\/*]/.test(operator)) {
									endValueUnitType = startValueUnitType;
									/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
									 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
									 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
									 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
									/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
								} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
									/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
									/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
									 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
									 which remains past the point of the animation's completion. */
									if (endValue === 0) {
										endValueUnitType = startValueUnitType;
									} else {
										/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
										 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
										elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
	
										/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
										/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
										var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
	
										/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
										 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
										switch (startValueUnitType) {
											case "%":
												/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
												 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
												 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
												startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* px acts as our midpoint in the unit conversion process; do nothing. */
												break;
	
											default:
												startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
										}
	
										/* Invert the px ratios to convert into to the target unit. */
										switch (endValueUnitType) {
											case "%":
												startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* startValue is already in px, do nothing; we're done. */
												break;
	
											default:
												startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
										}
									}
								}
	
								/*********************
								 Relative Values
								 *********************/
	
								/* Operator logic must be performed last since it requires unit-normalized start and end values. */
								/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
								 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
								 50 points is added on top of the current % value. */
								switch (operator) {
									case "+":
										endValue = startValue + endValue;
										break;
	
									case "-":
										endValue = startValue - endValue;
										break;
	
									case "*":
										endValue = startValue * endValue;
										break;
	
									case "/":
										endValue = startValue / endValue;
										break;
								}
	
								/**************************
								 tweensContainer Push
								 **************************/
	
								/* Construct the per-property tween object, and push it to the element's tweensContainer. */
								tweensContainer[property] = {
									rootPropertyValue: rootPropertyValue,
									startValue: startValue,
									currentValue: startValue,
									endValue: endValue,
									unitType: endValueUnitType,
									easing: easing
								};
	
								if (Velocity.debug) {
									console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
								}
							}
	
							/* Along with its property data, store a reference to the element itself onto tweensContainer. */
							tweensContainer.element = element;
						}
	
						/*****************
						 Call Push
						 *****************/
	
						/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
						 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
						if (tweensContainer.element) {
							/* Apply the "velocity-animating" indicator class. */
							CSS.Values.addClass(element, "velocity-animating");
	
							/* The call array houses the tweensContainers for each element being animated in the current call. */
							call.push(tweensContainer);
	
							data = Data(element);
	
							if (data) {
								/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
								if (opts.queue === "") {
	
									data.tweensContainer = tweensContainer;
									data.opts = opts;
								}
	
								/* Switch on the element's animating flag. */
								data.isAnimating = true;
							}
	
							/* Once the final element in this call's element set has been processed, push the call array onto
							 Velocity.State.calls for the animation tick to immediately begin processing. */
							if (elementsIndex === elementsLength - 1) {
								/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
								 Anything on this call container is subjected to tick() processing. */
								Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver]);
	
								/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
								if (Velocity.State.isTicking === false) {
									Velocity.State.isTicking = true;
	
									/* Start the tick loop. */
									tick();
								}
							} else {
								elementsIndex++;
							}
						}
					}
	
					/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
					if (opts.queue === false) {
						/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
						 we manually inject the delay property here with an explicit setTimeout. */
						if (opts.delay) {
							setTimeout(buildQueue, opts.delay);
						} else {
							buildQueue();
						}
						/* Otherwise, the call undergoes element queueing as normal. */
						/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
					} else {
						$.queue(element, opts.queue, function(next, clearQueue) {
							/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
							 so it's fine if this is repeatedly triggered for each element in the associated call.) */
							if (clearQueue === true) {
								if (promiseData.promise) {
									promiseData.resolver(elements);
								}
	
								/* Do not continue with animation queueing. */
								return true;
							}
	
							/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
							 See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							buildQueue(next);
						});
					}
	
					/*********************
					 Auto-Dequeuing
					 *********************/
	
					/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
					 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
					 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
					 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
					 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
					/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
					 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
					/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
					 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
					if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
						$.dequeue(element);
					}
				}
	
				/**************************
				 Element Set Iteration
				 **************************/
	
				/* If the "nodeType" property exists on the elements variable, we're animating a single element.
				 Place it in an array so that $.each() can iterate over it. */
				$.each(elements, function(i, element) {
					/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
					if (Type.isNode(element)) {
						processElement(element, i);
					}
				});
	
				/******************
				 Option: Loop
				 ******************/
	
				/* The loop option accepts an integer indicating how many times the element should loop between the values in the
				 current call's properties map and the element's property values prior to this call. */
				/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
				 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
				 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
				opts = $.extend({}, Velocity.defaults, options);
				opts.loop = parseInt(opts.loop, 10);
				var reverseCallsCount = (opts.loop * 2) - 1;
	
				if (opts.loop) {
					/* Double the loop count to convert it into its appropriate number of "reverse" calls.
					 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
					for (var x = 0; x < reverseCallsCount; x++) {
						/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
						 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
						 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
						var reverseOptions = {
							delay: opts.delay,
							progress: opts.progress
						};
	
						/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
						 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
						if (x === reverseCallsCount - 1) {
							reverseOptions.display = opts.display;
							reverseOptions.visibility = opts.visibility;
							reverseOptions.complete = opts.complete;
						}
	
						animate(elements, "reverse", reverseOptions);
					}
				}
	
				/***************
				 Chaining
				 ***************/
	
				/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
				return getChain();
			};
	
			/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
			Velocity = $.extend(animate, Velocity);
			/* For legacy support, also expose the literal animate method. */
			Velocity.animate = animate;
	
			/**************
			 Timing
			 **************/
	
			/* Ticker function. */
			var ticker = window.requestAnimationFrame || rAFShim;
	
			/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
			 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
			 devices to avoid wasting battery power on inactive tabs. */
			/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
			if (!Velocity.State.isMobile && document.hidden !== undefined) {
				document.addEventListener("visibilitychange", function() {
					/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
					if (document.hidden) {
						ticker = function(callback) {
							/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
							return setTimeout(function() {
								callback(true);
							}, 16);
						};
	
						/* The rAF loop has been paused by the browser, so we manually restart the tick. */
						tick();
					} else {
						ticker = window.requestAnimationFrame || rAFShim;
					}
				});
			}
	
			/************
			 Tick
			 ************/
	
			/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
			function tick(timestamp) {
				/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
				 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
				 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
				 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
				 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
				 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
				if (timestamp) {
					/* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
					 under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
					var timeCurrent = (new Date()).getTime();
	
					/********************
					 Call Iteration
					 ********************/
	
					var callsLength = Velocity.State.calls.length;
	
					/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
					 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
					 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
					if (callsLength > 10000) {
						Velocity.State.calls = compactSparseArray(Velocity.State.calls);
						callsLength = Velocity.State.calls.length;
					}
	
					/* Iterate through each active call. */
					for (var i = 0; i < callsLength; i++) {
						/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
						if (!Velocity.State.calls[i]) {
							continue;
						}
	
						/************************
						 Call-Wide Variables
						 ************************/
	
						var callContainer = Velocity.State.calls[i],
								call = callContainer[0],
								opts = callContainer[2],
								timeStart = callContainer[3],
								firstTick = !!timeStart,
								tweenDummyValue = null;
	
						/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
						 We assign timeStart now so that its value is as close to the real animation start time as possible.
						 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
						 between that time and now would cause the first few frames of the tween to be skipped since
						 percentComplete is calculated relative to timeStart.) */
						/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
						 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
						 same style value as the element's current value. */
						if (!timeStart) {
							timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
						}
	
						/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
						 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
						 Accordingly, we ensure that percentComplete does not exceed 1. */
						var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);
	
						/**********************
						 Element Iteration
						 **********************/
	
						/* For every call, iterate through each of the elements in its set. */
						for (var j = 0, callLength = call.length; j < callLength; j++) {
							var tweensContainer = call[j],
									element = tweensContainer.element;
	
							/* Check to see if this element has been deleted midway through the animation by checking for the
							 continued existence of its data cache. If it's gone, skip animating this element. */
							if (!Data(element)) {
								continue;
							}
	
							var transformPropertyExists = false;
	
							/**********************************
							 Display & Visibility Toggling
							 **********************************/
	
							/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
							 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
							if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
								if (opts.display === "flex") {
									var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
	
									$.each(flexValues, function(i, flexValue) {
										CSS.setPropertyValue(element, "display", flexValue);
									});
								}
	
								CSS.setPropertyValue(element, "display", opts.display);
							}
	
							/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}
	
							/************************
							 Property Iteration
							 ************************/
	
							/* For every element, iterate through each property. */
							for (var property in tweensContainer) {
								/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
								if (tweensContainer.hasOwnProperty(property) && property !== "element") {
									var tween = tweensContainer[property],
											currentValue,
											/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
											 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
											easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
	
									/******************************
									 Current Value Calculation
									 ******************************/
	
									/* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
									if (percentComplete === 1) {
										currentValue = tween.endValue;
										/* Otherwise, calculate currentValue based on the current delta from startValue. */
									} else {
										var tweenDelta = tween.endValue - tween.startValue;
										currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
	
										/* If no value change is occurring, don't proceed with DOM updating. */
										if (!firstTick && (currentValue === tween.currentValue)) {
											continue;
										}
									}
	
									tween.currentValue = currentValue;
	
									/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
									 it can be passed into the progress callback. */
									if (property === "tween") {
										tweenDummyValue = currentValue;
									} else {
										/******************
										 Hooks: Part I
										 ******************/
										var hookRoot;
	
										/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
										 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
										 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
										 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
										 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
										if (CSS.Hooks.registered[property]) {
											hookRoot = CSS.Hooks.getRoot(property);
	
											var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
	
											if (rootPropertyValueCache) {
												tween.rootPropertyValue = rootPropertyValueCache;
											}
										}
	
										/*****************
										 DOM Update
										 *****************/
	
										/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
										/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
										var adjustedSetData = CSS.setPropertyValue(element, /* SET */
												property,
												tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
												tween.rootPropertyValue,
												tween.scrollData);
	
										/*******************
										 Hooks: Part II
										 *******************/
	
										/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
										if (CSS.Hooks.registered[property]) {
											/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
											if (CSS.Normalizations.registered[hookRoot]) {
												Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
											} else {
												Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
											}
										}
	
										/***************
										 Transforms
										 ***************/
	
										/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
										if (adjustedSetData[0] === "transform") {
											transformPropertyExists = true;
										}
	
									}
								}
							}
	
							/****************
							 mobileHA
							 ****************/
	
							/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
							 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
							if (opts.mobileHA) {
								/* Don't set the null transform hack if we've already done so. */
								if (Data(element).transformCache.translate3d === undefined) {
									/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
									Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
	
									transformPropertyExists = true;
								}
							}
	
							if (transformPropertyExists) {
								CSS.flushTransformCache(element);
							}
						}
	
						/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
						 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
						if (opts.display !== undefined && opts.display !== "none") {
							Velocity.State.calls[i][2].display = false;
						}
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							Velocity.State.calls[i][2].visibility = false;
						}
	
						/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
						if (opts.progress) {
							opts.progress.call(callContainer[1],
									callContainer[1],
									percentComplete,
									Math.max(0, (timeStart + opts.duration) - timeCurrent),
									timeStart,
									tweenDummyValue);
						}
	
						/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
						if (percentComplete === 1) {
							completeCall(i);
						}
					}
				}
	
				/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
				if (Velocity.State.isTicking) {
					ticker(tick);
				}
			}
	
			/**********************
			 Call Completion
			 **********************/
	
			/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
			function completeCall(callIndex, isStopped) {
				/* Ensure the call exists. */
				if (!Velocity.State.calls[callIndex]) {
					return false;
				}
	
				/* Pull the metadata from the call. */
				var call = Velocity.State.calls[callIndex][0],
						elements = Velocity.State.calls[callIndex][1],
						opts = Velocity.State.calls[callIndex][2],
						resolver = Velocity.State.calls[callIndex][4];
	
				var remainingCallsExist = false;
	
				/*************************
				 Element Finalization
				 *************************/
	
				for (var i = 0, callLength = call.length; i < callLength; i++) {
					var element = call[i].element;
	
					/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
					/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
					/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
					if (!isStopped && !opts.loop) {
						if (opts.display === "none") {
							CSS.setPropertyValue(element, "display", opts.display);
						}
	
						if (opts.visibility === "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}
					}
	
					/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
					 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
					 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
					 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
					 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
					var data = Data(element);
	
					if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
						/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
						if (data) {
							data.isAnimating = false;
							/* Clear the element's rootPropertyValueCache, which will become stale. */
							data.rootPropertyValueCache = {};
	
							var transformHAPropertyExists = false;
							/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
							$.each(CSS.Lists.transforms3D, function(i, transformName) {
								var defaultValue = /^scale/.test(transformName) ? 1 : 0,
										currentValue = data.transformCache[transformName];
	
								if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
									transformHAPropertyExists = true;
	
									delete data.transformCache[transformName];
								}
							});
	
							/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
							if (opts.mobileHA) {
								transformHAPropertyExists = true;
								delete data.transformCache.translate3d;
							}
	
							/* Flush the subproperty removals to the DOM. */
							if (transformHAPropertyExists) {
								CSS.flushTransformCache(element);
							}
	
							/* Remove the "velocity-animating" indicator class. */
							CSS.Values.removeClass(element, "velocity-animating");
						}
					}
	
					/*********************
					 Option: Complete
					 *********************/
	
					/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
					/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
					if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.complete.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}
	
					/**********************
					 Promise Resolving
					 **********************/
	
					/* Note: Infinite loops don't return promises. */
					if (resolver && opts.loop !== true) {
						resolver(elements);
					}
	
					/****************************
					 Option: Loop (Infinite)
					 ****************************/
	
					if (data && opts.loop === true && !isStopped) {
						/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
						 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
						$.each(data.tweensContainer, function(propertyName, tweenContainer) {
							if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
								var oldStartValue = tweenContainer.startValue;
	
								tweenContainer.startValue = tweenContainer.endValue;
								tweenContainer.endValue = oldStartValue;
							}
	
							if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
								tweenContainer.endValue = 0;
								tweenContainer.startValue = 100;
							}
						});
	
						Velocity(element, "reverse", {loop: true, delay: opts.delay});
					}
	
					/***************
					 Dequeueing
					 ***************/
	
					/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
					 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
					 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
					if (opts.queue !== false) {
						$.dequeue(element, opts.queue);
					}
				}
	
				/************************
				 Calls Array Cleanup
				 ************************/
	
				/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
				 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
				Velocity.State.calls[callIndex] = false;
	
				/* Iterate through the calls array to determine if this was the final in-progress animation.
				 If so, set a flag to end ticking and clear the calls array. */
				for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
					if (Velocity.State.calls[j] !== false) {
						remainingCallsExist = true;
	
						break;
					}
				}
	
				if (remainingCallsExist === false) {
					/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
					Velocity.State.isTicking = false;
	
					/* Clear the calls array so that its length is reset. */
					delete Velocity.State.calls;
					Velocity.State.calls = [];
				}
			}
	
			/******************
			 Frameworks
			 ******************/
	
			/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
			 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
			 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
			 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
			 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
			global.Velocity = Velocity;
	
			if (global !== window) {
				/* Assign the element function to Velocity's core animate() method. */
				global.fn.velocity = animate;
				/* Assign the object function's defaults to Velocity's global defaults object. */
				global.fn.velocity.defaults = Velocity.defaults;
			}
	
			/***********************
			 Packaged Redirects
			 ***********************/
	
			/* slideUp, slideDown */
			$.each(["Down", "Up"], function(i, direction) {
				Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							begin = opts.begin,
							complete = opts.complete,
							computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""},
					inlineValues = {};
	
					if (opts.display === undefined) {
						/* Show the element before slideDown begins and hide the element after slideUp completes. */
						/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
						opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
					}
	
					opts.begin = function() {
						/* If the user passed in a begin callback, fire it now. */
						if (begin) {
							begin.call(elements, elements);
						}
	
						/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
						for (var property in computedValues) {
							if (!computedValues.hasOwnProperty(property)) {
								continue;
							}
							inlineValues[property] = element.style[property];
	
							/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
							 use forcefeeding to start from computed values and animate down to 0. */
							var propertyValue = Velocity.CSS.getPropertyValue(element, property);
							computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
						}
	
						/* Force vertical overflow content to clip so that sliding works as expected. */
						inlineValues.overflow = element.style.overflow;
						element.style.overflow = "hidden";
					};
	
					opts.complete = function() {
						/* Reset element to its pre-slide inline values once its slide animation is complete. */
						for (var property in inlineValues) {
							if (inlineValues.hasOwnProperty(property)) {
								element.style[property] = inlineValues[property];
							}
						}
	
						/* If the user passed in a complete callback, fire it now. */
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					};
	
					Velocity(element, computedValues, opts);
				};
			});
	
			/* fadeIn, fadeOut */
			$.each(["In", "Out"], function(i, direction) {
				Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							originalComplete = opts.complete,
							propertiesMap = {opacity: (direction === "In") ? 1 : 0};
	
					/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
					 callbacks by firing them only when the final element has been reached. */
					if (elementsIndex !== elementsSize - 1) {
						opts.complete = opts.begin = null;
					} else {
						opts.complete = function() {
							if (originalComplete) {
								originalComplete.call(elements, elements);
							}
	
							if (promiseData) {
								promiseData.resolver(elements);
							}
						};
					}
	
					/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
					/* Note: We allow users to pass in "null" to skip display setting altogether. */
					if (opts.display === undefined) {
						opts.display = (direction === "In" ? "auto" : "none");
					}
	
					Velocity(this, propertiesMap, opts);
				};
			});
	
			return Velocity;
		}((window.jQuery || window.Zepto || window), window, document);
	}));
	
	/******************
	 Known Issues
	 ******************/
	
	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ },
/* 310 */,
/* 311 */,
/* 312 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(315);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(313)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./blue.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./blue.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(312)();
	// imports
	
	
	// module
	exports.push([module.id, "/*prefix string*/\n/*-------color ------*/\n/*base color*/\n/*font color*/\n/*theme color*/\n/*extend color*/\n/*alert color*/\n/*cascader color*/\n/*popover */\n/*cascader*/\n/*datepicker shadow*/\n/*panel*/\n/*modal*/\n/*----------size-----------*/\n/*btn size*/\n/*alert pos*/\n/*toast pos*/\n/*popover */\n/*tooltip*/\n/*input*/\n/*cascader*/\n/*radio*/\n/*checkbox*/\n/*dropdown*/\n/*slider*/\n/*datepicker*/\n/*timepicker*/\n/*datetimepicker*/\n/*switch*/\n/*uploader*/\n/*multipleinput*/\n/*form*/\n/*panel*/\n/*table*/\n/*modal*/\n/*label*/\n/*timeline*/\n/*tree*/\n/*step round*/\n/*step*/\n/*nav */\n/*nav vertical*/\n/*breadcrumb*/\n/*tab*/\n/*inputnumber*/\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.eot?v=4.6.3');\n  src: url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.woff2?v=4.6.3') format('woff2'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.woff?v=4.6.3') format('woff'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.n3-fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.n3-fa-glass:before {\n  content: \"\\F000\";\n}\n.n3-fa-music:before {\n  content: \"\\F001\";\n}\n.n3-fa-search:before {\n  content: \"\\F002\";\n}\n.n3-fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.n3-fa-heart:before {\n  content: \"\\F004\";\n}\n.n3-fa-star:before {\n  content: \"\\F005\";\n}\n.n3-fa-star-o:before {\n  content: \"\\F006\";\n}\n.n3-fa-user:before {\n  content: \"\\F007\";\n}\n.n3-fa-film:before {\n  content: \"\\F008\";\n}\n.n3-fa-th-large:before {\n  content: \"\\F009\";\n}\n.n3-fa-th:before {\n  content: \"\\F00A\";\n}\n.n3-fa-th-list:before {\n  content: \"\\F00B\";\n}\n.n3-fa-check:before {\n  content: \"\\F00C\";\n}\n.n3-fa-remove:before,\n.n3-fa-close:before,\n.n3-fa-times:before {\n  content: \"\\F00D\";\n}\n.n3-fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.n3-fa-search-minus:before {\n  content: \"\\F010\";\n}\n.n3-fa-power-off:before {\n  content: \"\\F011\";\n}\n.n3-fa-signal:before {\n  content: \"\\F012\";\n}\n.n3-fa-gear:before,\n.n3-fa-cog:before {\n  content: \"\\F013\";\n}\n.n3-fa-trash-o:before {\n  content: \"\\F014\";\n}\n.n3-fa-home:before {\n  content: \"\\F015\";\n}\n.n3-fa-file-o:before {\n  content: \"\\F016\";\n}\n.n3-fa-clock-o:before {\n  content: \"\\F017\";\n}\n.n3-fa-road:before {\n  content: \"\\F018\";\n}\n.n3-fa-download:before {\n  content: \"\\F019\";\n}\n.n3-fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.n3-fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.n3-fa-inbox:before {\n  content: \"\\F01C\";\n}\n.n3-fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.n3-fa-rotate-right:before,\n.n3-fa-repeat:before {\n  content: \"\\F01E\";\n}\n.n3-fa-refresh:before {\n  content: \"\\F021\";\n}\n.n3-fa-list-alt:before {\n  content: \"\\F022\";\n}\n.n3-fa-lock:before {\n  content: \"\\F023\";\n}\n.n3-fa-flag:before {\n  content: \"\\F024\";\n}\n.n3-fa-headphones:before {\n  content: \"\\F025\";\n}\n.n3-fa-volume-off:before {\n  content: \"\\F026\";\n}\n.n3-fa-volume-down:before {\n  content: \"\\F027\";\n}\n.n3-fa-volume-up:before {\n  content: \"\\F028\";\n}\n.n3-fa-qrcode:before {\n  content: \"\\F029\";\n}\n.n3-fa-barcode:before {\n  content: \"\\F02A\";\n}\n.n3-fa-tag:before {\n  content: \"\\F02B\";\n}\n.n3-fa-tags:before {\n  content: \"\\F02C\";\n}\n.n3-fa-book:before {\n  content: \"\\F02D\";\n}\n.n3-fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.n3-fa-print:before {\n  content: \"\\F02F\";\n}\n.n3-fa-camera:before {\n  content: \"\\F030\";\n}\n.n3-fa-font:before {\n  content: \"\\F031\";\n}\n.n3-fa-bold:before {\n  content: \"\\F032\";\n}\n.n3-fa-italic:before {\n  content: \"\\F033\";\n}\n.n3-fa-text-height:before {\n  content: \"\\F034\";\n}\n.n3-fa-text-width:before {\n  content: \"\\F035\";\n}\n.n3-fa-align-left:before {\n  content: \"\\F036\";\n}\n.n3-fa-align-center:before {\n  content: \"\\F037\";\n}\n.n3-fa-align-right:before {\n  content: \"\\F038\";\n}\n.n3-fa-align-justify:before {\n  content: \"\\F039\";\n}\n.n3-fa-list:before {\n  content: \"\\F03A\";\n}\n.n3-fa-dedent:before,\n.n3-fa-outdent:before {\n  content: \"\\F03B\";\n}\n.n3-fa-indent:before {\n  content: \"\\F03C\";\n}\n.n3-fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.n3-fa-photo:before,\n.n3-fa-image:before,\n.n3-fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.n3-fa-pencil:before {\n  content: \"\\F040\";\n}\n.n3-fa-map-marker:before {\n  content: \"\\F041\";\n}\n.n3-fa-adjust:before {\n  content: \"\\F042\";\n}\n.n3-fa-tint:before {\n  content: \"\\F043\";\n}\n.n3-fa-edit:before,\n.n3-fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.n3-fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.n3-fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.n3-fa-arrows:before {\n  content: \"\\F047\";\n}\n.n3-fa-step-backward:before {\n  content: \"\\F048\";\n}\n.n3-fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.n3-fa-backward:before {\n  content: \"\\F04A\";\n}\n.n3-fa-play:before {\n  content: \"\\F04B\";\n}\n.n3-fa-pause:before {\n  content: \"\\F04C\";\n}\n.n3-fa-stop:before {\n  content: \"\\F04D\";\n}\n.n3-fa-forward:before {\n  content: \"\\F04E\";\n}\n.n3-fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.n3-fa-step-forward:before {\n  content: \"\\F051\";\n}\n.n3-fa-eject:before {\n  content: \"\\F052\";\n}\n.n3-fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.n3-fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.n3-fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.n3-fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.n3-fa-times-circle:before {\n  content: \"\\F057\";\n}\n.n3-fa-check-circle:before {\n  content: \"\\F058\";\n}\n.n3-fa-question-circle:before {\n  content: \"\\F059\";\n}\n.n3-fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.n3-fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.n3-fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.n3-fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.n3-fa-ban:before {\n  content: \"\\F05E\";\n}\n.n3-fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.n3-fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.n3-fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.n3-fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.n3-fa-mail-forward:before,\n.n3-fa-share:before {\n  content: \"\\F064\";\n}\n.n3-fa-expand:before {\n  content: \"\\F065\";\n}\n.n3-fa-compress:before {\n  content: \"\\F066\";\n}\n.n3-fa-plus:before {\n  content: \"\\F067\";\n}\n.n3-fa-minus:before {\n  content: \"\\F068\";\n}\n.n3-fa-asterisk:before {\n  content: \"\\F069\";\n}\n.n3-fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.n3-fa-gift:before {\n  content: \"\\F06B\";\n}\n.n3-fa-leaf:before {\n  content: \"\\F06C\";\n}\n.n3-fa-fire:before {\n  content: \"\\F06D\";\n}\n.n3-fa-eye:before {\n  content: \"\\F06E\";\n}\n.n3-fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.n3-fa-warning:before,\n.n3-fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.n3-fa-plane:before {\n  content: \"\\F072\";\n}\n.n3-fa-calendar:before {\n  content: \"\\F073\";\n}\n.n3-fa-random:before {\n  content: \"\\F074\";\n}\n.n3-fa-comment:before {\n  content: \"\\F075\";\n}\n.n3-fa-magnet:before {\n  content: \"\\F076\";\n}\n.n3-fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.n3-fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.n3-fa-retweet:before {\n  content: \"\\F079\";\n}\n.n3-fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.n3-fa-folder:before {\n  content: \"\\F07B\";\n}\n.n3-fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.n3-fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.n3-fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.n3-fa-bar-chart-o:before,\n.n3-fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.n3-fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.n3-fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.n3-fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.n3-fa-key:before {\n  content: \"\\F084\";\n}\n.n3-fa-gears:before,\n.n3-fa-cogs:before {\n  content: \"\\F085\";\n}\n.n3-fa-comments:before {\n  content: \"\\F086\";\n}\n.n3-fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.n3-fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.n3-fa-star-half:before {\n  content: \"\\F089\";\n}\n.n3-fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.n3-fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.n3-fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.n3-fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.n3-fa-external-link:before {\n  content: \"\\F08E\";\n}\n.n3-fa-sign-in:before {\n  content: \"\\F090\";\n}\n.n3-fa-trophy:before {\n  content: \"\\F091\";\n}\n.n3-fa-github-square:before {\n  content: \"\\F092\";\n}\n.n3-fa-upload:before {\n  content: \"\\F093\";\n}\n.n3-fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.n3-fa-phone:before {\n  content: \"\\F095\";\n}\n.n3-fa-square-o:before {\n  content: \"\\F096\";\n}\n.n3-fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.n3-fa-phone-square:before {\n  content: \"\\F098\";\n}\n.n3-fa-twitter:before {\n  content: \"\\F099\";\n}\n.n3-fa-facebook-f:before,\n.n3-fa-facebook:before {\n  content: \"\\F09A\";\n}\n.n3-fa-github:before {\n  content: \"\\F09B\";\n}\n.n3-fa-unlock:before {\n  content: \"\\F09C\";\n}\n.n3-fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.n3-fa-feed:before,\n.n3-fa-rss:before {\n  content: \"\\F09E\";\n}\n.n3-fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.n3-fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.n3-fa-bell:before {\n  content: \"\\F0F3\";\n}\n.n3-fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.n3-fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.n3-fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.n3-fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.n3-fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.n3-fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.n3-fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.n3-fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.n3-fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.n3-fa-globe:before {\n  content: \"\\F0AC\";\n}\n.n3-fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.n3-fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.n3-fa-filter:before {\n  content: \"\\F0B0\";\n}\n.n3-fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.n3-fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.n3-fa-group:before,\n.n3-fa-users:before {\n  content: \"\\F0C0\";\n}\n.n3-fa-chain:before,\n.n3-fa-link:before {\n  content: \"\\F0C1\";\n}\n.n3-fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.n3-fa-flask:before {\n  content: \"\\F0C3\";\n}\n.n3-fa-cut:before,\n.n3-fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.n3-fa-copy:before,\n.n3-fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.n3-fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.n3-fa-save:before,\n.n3-fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.n3-fa-square:before {\n  content: \"\\F0C8\";\n}\n.n3-fa-navicon:before,\n.n3-fa-reorder:before,\n.n3-fa-bars:before {\n  content: \"\\F0C9\";\n}\n.n3-fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.n3-fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.n3-fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.n3-fa-underline:before {\n  content: \"\\F0CD\";\n}\n.n3-fa-table:before {\n  content: \"\\F0CE\";\n}\n.n3-fa-magic:before {\n  content: \"\\F0D0\";\n}\n.n3-fa-truck:before {\n  content: \"\\F0D1\";\n}\n.n3-fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.n3-fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.n3-fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.n3-fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.n3-fa-money:before {\n  content: \"\\F0D6\";\n}\n.n3-fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.n3-fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.n3-fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.n3-fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.n3-fa-columns:before {\n  content: \"\\F0DB\";\n}\n.n3-fa-unsorted:before,\n.n3-fa-sort:before {\n  content: \"\\F0DC\";\n}\n.n3-fa-sort-down:before,\n.n3-fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.n3-fa-sort-up:before,\n.n3-fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.n3-fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.n3-fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.n3-fa-rotate-left:before,\n.n3-fa-undo:before {\n  content: \"\\F0E2\";\n}\n.n3-fa-legal:before,\n.n3-fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.n3-fa-dashboard:before,\n.n3-fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.n3-fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.n3-fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.n3-fa-flash:before,\n.n3-fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.n3-fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.n3-fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.n3-fa-paste:before,\n.n3-fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.n3-fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.n3-fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.n3-fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.n3-fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.n3-fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.n3-fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.n3-fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.n3-fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.n3-fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.n3-fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.n3-fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.n3-fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.n3-fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.n3-fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.n3-fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.n3-fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.n3-fa-beer:before {\n  content: \"\\F0FC\";\n}\n.n3-fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.n3-fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.n3-fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.n3-fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.n3-fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.n3-fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.n3-fa-angle-left:before {\n  content: \"\\F104\";\n}\n.n3-fa-angle-right:before {\n  content: \"\\F105\";\n}\n.n3-fa-angle-up:before {\n  content: \"\\F106\";\n}\n.n3-fa-angle-down:before {\n  content: \"\\F107\";\n}\n.n3-fa-desktop:before {\n  content: \"\\F108\";\n}\n.n3-fa-laptop:before {\n  content: \"\\F109\";\n}\n.n3-fa-tablet:before {\n  content: \"\\F10A\";\n}\n.n3-fa-mobile-phone:before,\n.n3-fa-mobile:before {\n  content: \"\\F10B\";\n}\n.n3-fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.n3-fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.n3-fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.n3-fa-spinner:before {\n  content: \"\\F110\";\n}\n.n3-fa-circle:before {\n  content: \"\\F111\";\n}\n.n3-fa-mail-reply:before,\n.n3-fa-reply:before {\n  content: \"\\F112\";\n}\n.n3-fa-github-alt:before {\n  content: \"\\F113\";\n}\n.n3-fa-folder-o:before {\n  content: \"\\F114\";\n}\n.n3-fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.n3-fa-smile-o:before {\n  content: \"\\F118\";\n}\n.n3-fa-frown-o:before {\n  content: \"\\F119\";\n}\n.n3-fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.n3-fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.n3-fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.n3-fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.n3-fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.n3-fa-terminal:before {\n  content: \"\\F120\";\n}\n.n3-fa-code:before {\n  content: \"\\F121\";\n}\n.n3-fa-mail-reply-all:before,\n.n3-fa-reply-all:before {\n  content: \"\\F122\";\n}\n.n3-fa-star-half-empty:before,\n.n3-fa-star-half-full:before,\n.n3-fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.n3-fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.n3-fa-crop:before {\n  content: \"\\F125\";\n}\n.n3-fa-code-fork:before {\n  content: \"\\F126\";\n}\n.n3-fa-unlink:before,\n.n3-fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.n3-fa-question:before {\n  content: \"\\F128\";\n}\n.n3-fa-info:before {\n  content: \"\\F129\";\n}\n.n3-fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.n3-fa-superscript:before {\n  content: \"\\F12B\";\n}\n.n3-fa-subscript:before {\n  content: \"\\F12C\";\n}\n.n3-fa-eraser:before {\n  content: \"\\F12D\";\n}\n.n3-fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.n3-fa-microphone:before {\n  content: \"\\F130\";\n}\n.n3-fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.n3-fa-shield:before {\n  content: \"\\F132\";\n}\n.n3-fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.n3-fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.n3-fa-rocket:before {\n  content: \"\\F135\";\n}\n.n3-fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.n3-fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.n3-fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.n3-fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.n3-fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.n3-fa-html5:before {\n  content: \"\\F13B\";\n}\n.n3-fa-css3:before {\n  content: \"\\F13C\";\n}\n.n3-fa-anchor:before {\n  content: \"\\F13D\";\n}\n.n3-fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.n3-fa-bullseye:before {\n  content: \"\\F140\";\n}\n.n3-fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.n3-fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.n3-fa-rss-square:before {\n  content: \"\\F143\";\n}\n.n3-fa-play-circle:before {\n  content: \"\\F144\";\n}\n.n3-fa-ticket:before {\n  content: \"\\F145\";\n}\n.n3-fa-minus-square:before {\n  content: \"\\F146\";\n}\n.n3-fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.n3-fa-level-up:before {\n  content: \"\\F148\";\n}\n.n3-fa-level-down:before {\n  content: \"\\F149\";\n}\n.n3-fa-check-square:before {\n  content: \"\\F14A\";\n}\n.n3-fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.n3-fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.n3-fa-share-square:before {\n  content: \"\\F14D\";\n}\n.n3-fa-compass:before {\n  content: \"\\F14E\";\n}\n.n3-fa-toggle-down:before,\n.n3-fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.n3-fa-toggle-up:before,\n.n3-fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.n3-fa-toggle-right:before,\n.n3-fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.n3-fa-euro:before,\n.n3-fa-eur:before {\n  content: \"\\F153\";\n}\n.n3-fa-gbp:before {\n  content: \"\\F154\";\n}\n.n3-fa-dollar:before,\n.n3-fa-usd:before {\n  content: \"\\F155\";\n}\n.n3-fa-rupee:before,\n.n3-fa-inr:before {\n  content: \"\\F156\";\n}\n.n3-fa-cny:before,\n.n3-fa-rmb:before,\n.n3-fa-yen:before,\n.n3-fa-jpy:before {\n  content: \"\\F157\";\n}\n.n3-fa-ruble:before,\n.n3-fa-rouble:before,\n.n3-fa-rub:before {\n  content: \"\\F158\";\n}\n.n3-fa-won:before,\n.n3-fa-krw:before {\n  content: \"\\F159\";\n}\n.n3-fa-bitcoin:before,\n.n3-fa-btc:before {\n  content: \"\\F15A\";\n}\n.n3-fa-file:before {\n  content: \"\\F15B\";\n}\n.n3-fa-file-text:before {\n  content: \"\\F15C\";\n}\n.n3-fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.n3-fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.n3-fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.n3-fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.n3-fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.n3-fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.n3-fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.n3-fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.n3-fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.n3-fa-youtube:before {\n  content: \"\\F167\";\n}\n.n3-fa-xing:before {\n  content: \"\\F168\";\n}\n.n3-fa-xing-square:before {\n  content: \"\\F169\";\n}\n.n3-fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.n3-fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.n3-fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.n3-fa-instagram:before {\n  content: \"\\F16D\";\n}\n.n3-fa-flickr:before {\n  content: \"\\F16E\";\n}\n.n3-fa-adn:before {\n  content: \"\\F170\";\n}\n.n3-fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.n3-fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.n3-fa-tumblr:before {\n  content: \"\\F173\";\n}\n.n3-fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.n3-fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.n3-fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.n3-fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.n3-fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.n3-fa-apple:before {\n  content: \"\\F179\";\n}\n.n3-fa-windows:before {\n  content: \"\\F17A\";\n}\n.n3-fa-android:before {\n  content: \"\\F17B\";\n}\n.n3-fa-linux:before {\n  content: \"\\F17C\";\n}\n.n3-fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.n3-fa-skype:before {\n  content: \"\\F17E\";\n}\n.n3-fa-foursquare:before {\n  content: \"\\F180\";\n}\n.n3-fa-trello:before {\n  content: \"\\F181\";\n}\n.n3-fa-female:before {\n  content: \"\\F182\";\n}\n.n3-fa-male:before {\n  content: \"\\F183\";\n}\n.n3-fa-gittip:before,\n.n3-fa-gratipay:before {\n  content: \"\\F184\";\n}\n.n3-fa-sun-o:before {\n  content: \"\\F185\";\n}\n.n3-fa-moon-o:before {\n  content: \"\\F186\";\n}\n.n3-fa-archive:before {\n  content: \"\\F187\";\n}\n.n3-fa-bug:before {\n  content: \"\\F188\";\n}\n.n3-fa-vk:before {\n  content: \"\\F189\";\n}\n.n3-fa-weibo:before {\n  content: \"\\F18A\";\n}\n.n3-fa-renren:before {\n  content: \"\\F18B\";\n}\n.n3-fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.n3-fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.n3-fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.n3-fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.n3-fa-toggle-left:before,\n.n3-fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.n3-fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.n3-fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.n3-fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.n3-fa-turkish-lira:before,\n.n3-fa-try:before {\n  content: \"\\F195\";\n}\n.n3-fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.n3-fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.n3-fa-slack:before {\n  content: \"\\F198\";\n}\n.n3-fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.n3-fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.n3-fa-openid:before {\n  content: \"\\F19B\";\n}\n.n3-fa-institution:before,\n.n3-fa-bank:before,\n.n3-fa-university:before {\n  content: \"\\F19C\";\n}\n.n3-fa-mortar-board:before,\n.n3-fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.n3-fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.n3-fa-google:before {\n  content: \"\\F1A0\";\n}\n.n3-fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.n3-fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.n3-fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.n3-fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.n3-fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.n3-fa-digg:before {\n  content: \"\\F1A6\";\n}\n.n3-fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.n3-fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.n3-fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.n3-fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.n3-fa-language:before {\n  content: \"\\F1AB\";\n}\n.n3-fa-fax:before {\n  content: \"\\F1AC\";\n}\n.n3-fa-building:before {\n  content: \"\\F1AD\";\n}\n.n3-fa-child:before {\n  content: \"\\F1AE\";\n}\n.n3-fa-paw:before {\n  content: \"\\F1B0\";\n}\n.n3-fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.n3-fa-cube:before {\n  content: \"\\F1B2\";\n}\n.n3-fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.n3-fa-behance:before {\n  content: \"\\F1B4\";\n}\n.n3-fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.n3-fa-steam:before {\n  content: \"\\F1B6\";\n}\n.n3-fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.n3-fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.n3-fa-automobile:before,\n.n3-fa-car:before {\n  content: \"\\F1B9\";\n}\n.n3-fa-cab:before,\n.n3-fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.n3-fa-tree:before {\n  content: \"\\F1BB\";\n}\n.n3-fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.n3-fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.n3-fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.n3-fa-database:before {\n  content: \"\\F1C0\";\n}\n.n3-fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.n3-fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.n3-fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.n3-fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.n3-fa-file-photo-o:before,\n.n3-fa-file-picture-o:before,\n.n3-fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.n3-fa-file-zip-o:before,\n.n3-fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.n3-fa-file-sound-o:before,\n.n3-fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.n3-fa-file-movie-o:before,\n.n3-fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.n3-fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.n3-fa-vine:before {\n  content: \"\\F1CA\";\n}\n.n3-fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.n3-fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.n3-fa-life-bouy:before,\n.n3-fa-life-buoy:before,\n.n3-fa-life-saver:before,\n.n3-fa-support:before,\n.n3-fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.n3-fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.n3-fa-ra:before,\n.n3-fa-resistance:before,\n.n3-fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.n3-fa-ge:before,\n.n3-fa-empire:before {\n  content: \"\\F1D1\";\n}\n.n3-fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.n3-fa-git:before {\n  content: \"\\F1D3\";\n}\n.n3-fa-y-combinator-square:before,\n.n3-fa-yc-square:before,\n.n3-fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.n3-fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.n3-fa-qq:before {\n  content: \"\\F1D6\";\n}\n.n3-fa-wechat:before,\n.n3-fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.n3-fa-send:before,\n.n3-fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.n3-fa-send-o:before,\n.n3-fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.n3-fa-history:before {\n  content: \"\\F1DA\";\n}\n.n3-fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.n3-fa-header:before {\n  content: \"\\F1DC\";\n}\n.n3-fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.n3-fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.n3-fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.n3-fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.n3-fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.n3-fa-soccer-ball-o:before,\n.n3-fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.n3-fa-tty:before {\n  content: \"\\F1E4\";\n}\n.n3-fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.n3-fa-plug:before {\n  content: \"\\F1E6\";\n}\n.n3-fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.n3-fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.n3-fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.n3-fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.n3-fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.n3-fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.n3-fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.n3-fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.n3-fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.n3-fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.n3-fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.n3-fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.n3-fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.n3-fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.n3-fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.n3-fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.n3-fa-trash:before {\n  content: \"\\F1F8\";\n}\n.n3-fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.n3-fa-at:before {\n  content: \"\\F1FA\";\n}\n.n3-fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.n3-fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.n3-fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.n3-fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.n3-fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.n3-fa-line-chart:before {\n  content: \"\\F201\";\n}\n.n3-fa-lastfm:before {\n  content: \"\\F202\";\n}\n.n3-fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.n3-fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.n3-fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.n3-fa-bicycle:before {\n  content: \"\\F206\";\n}\n.n3-fa-bus:before {\n  content: \"\\F207\";\n}\n.n3-fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.n3-fa-angellist:before {\n  content: \"\\F209\";\n}\n.n3-fa-cc:before {\n  content: \"\\F20A\";\n}\n.n3-fa-shekel:before,\n.n3-fa-sheqel:before,\n.n3-fa-ils:before {\n  content: \"\\F20B\";\n}\n.n3-fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.n3-fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.n3-fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.n3-fa-dashcube:before {\n  content: \"\\F210\";\n}\n.n3-fa-forumbee:before {\n  content: \"\\F211\";\n}\n.n3-fa-leanpub:before {\n  content: \"\\F212\";\n}\n.n3-fa-sellsy:before {\n  content: \"\\F213\";\n}\n.n3-fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.n3-fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.n3-fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.n3-fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.n3-fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.n3-fa-diamond:before {\n  content: \"\\F219\";\n}\n.n3-fa-ship:before {\n  content: \"\\F21A\";\n}\n.n3-fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.n3-fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.n3-fa-street-view:before {\n  content: \"\\F21D\";\n}\n.n3-fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.n3-fa-venus:before {\n  content: \"\\F221\";\n}\n.n3-fa-mars:before {\n  content: \"\\F222\";\n}\n.n3-fa-mercury:before {\n  content: \"\\F223\";\n}\n.n3-fa-intersex:before,\n.n3-fa-transgender:before {\n  content: \"\\F224\";\n}\n.n3-fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.n3-fa-venus-double:before {\n  content: \"\\F226\";\n}\n.n3-fa-mars-double:before {\n  content: \"\\F227\";\n}\n.n3-fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.n3-fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.n3-fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.n3-fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.n3-fa-neuter:before {\n  content: \"\\F22C\";\n}\n.n3-fa-genderless:before {\n  content: \"\\F22D\";\n}\n.n3-fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.n3-fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.n3-fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.n3-fa-server:before {\n  content: \"\\F233\";\n}\n.n3-fa-user-plus:before {\n  content: \"\\F234\";\n}\n.n3-fa-user-times:before {\n  content: \"\\F235\";\n}\n.n3-fa-hotel:before,\n.n3-fa-bed:before {\n  content: \"\\F236\";\n}\n.n3-fa-viacoin:before {\n  content: \"\\F237\";\n}\n.n3-fa-train:before {\n  content: \"\\F238\";\n}\n.n3-fa-subway:before {\n  content: \"\\F239\";\n}\n.n3-fa-medium:before {\n  content: \"\\F23A\";\n}\n.n3-fa-yc:before,\n.n3-fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.n3-fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.n3-fa-opencart:before {\n  content: \"\\F23D\";\n}\n.n3-fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.n3-fa-battery-4:before,\n.n3-fa-battery-full:before {\n  content: \"\\F240\";\n}\n.n3-fa-battery-3:before,\n.n3-fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.n3-fa-battery-2:before,\n.n3-fa-battery-half:before {\n  content: \"\\F242\";\n}\n.n3-fa-battery-1:before,\n.n3-fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.n3-fa-battery-0:before,\n.n3-fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.n3-fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.n3-fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.n3-fa-object-group:before {\n  content: \"\\F247\";\n}\n.n3-fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.n3-fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.n3-fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.n3-fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.n3-fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.n3-fa-clone:before {\n  content: \"\\F24D\";\n}\n.n3-fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.n3-fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.n3-fa-hourglass-1:before,\n.n3-fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.n3-fa-hourglass-2:before,\n.n3-fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.n3-fa-hourglass-3:before,\n.n3-fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.n3-fa-hourglass:before {\n  content: \"\\F254\";\n}\n.n3-fa-hand-grab-o:before,\n.n3-fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.n3-fa-hand-stop-o:before,\n.n3-fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.n3-fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.n3-fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.n3-fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.n3-fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.n3-fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.n3-fa-trademark:before {\n  content: \"\\F25C\";\n}\n.n3-fa-registered:before {\n  content: \"\\F25D\";\n}\n.n3-fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.n3-fa-gg:before {\n  content: \"\\F260\";\n}\n.n3-fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.n3-fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.n3-fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.n3-fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.n3-fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.n3-fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.n3-fa-safari:before {\n  content: \"\\F267\";\n}\n.n3-fa-chrome:before {\n  content: \"\\F268\";\n}\n.n3-fa-firefox:before {\n  content: \"\\F269\";\n}\n.n3-fa-opera:before {\n  content: \"\\F26A\";\n}\n.n3-fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.n3-fa-tv:before,\n.n3-fa-television:before {\n  content: \"\\F26C\";\n}\n.n3-fa-contao:before {\n  content: \"\\F26D\";\n}\n.n3-fa-500px:before {\n  content: \"\\F26E\";\n}\n.n3-fa-amazon:before {\n  content: \"\\F270\";\n}\n.n3-fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.n3-fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.n3-fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.n3-fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.n3-fa-industry:before {\n  content: \"\\F275\";\n}\n.n3-fa-map-pin:before {\n  content: \"\\F276\";\n}\n.n3-fa-map-signs:before {\n  content: \"\\F277\";\n}\n.n3-fa-map-o:before {\n  content: \"\\F278\";\n}\n.n3-fa-map:before {\n  content: \"\\F279\";\n}\n.n3-fa-commenting:before {\n  content: \"\\F27A\";\n}\n.n3-fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.n3-fa-houzz:before {\n  content: \"\\F27C\";\n}\n.n3-fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.n3-fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.n3-fa-fonticons:before {\n  content: \"\\F280\";\n}\n.n3-fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.n3-fa-edge:before {\n  content: \"\\F282\";\n}\n.n3-fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.n3-fa-codiepie:before {\n  content: \"\\F284\";\n}\n.n3-fa-modx:before {\n  content: \"\\F285\";\n}\n.n3-fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.n3-fa-usb:before {\n  content: \"\\F287\";\n}\n.n3-fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.n3-fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.n3-fa-scribd:before {\n  content: \"\\F28A\";\n}\n.n3-fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.n3-fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.n3-fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.n3-fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.n3-fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.n3-fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.n3-fa-hashtag:before {\n  content: \"\\F292\";\n}\n.n3-fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.n3-fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.n3-fa-percent:before {\n  content: \"\\F295\";\n}\n.n3-fa-gitlab:before {\n  content: \"\\F296\";\n}\n.n3-fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.n3-fa-wpforms:before {\n  content: \"\\F298\";\n}\n.n3-fa-envira:before {\n  content: \"\\F299\";\n}\n.n3-fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.n3-fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.n3-fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.n3-fa-blind:before {\n  content: \"\\F29D\";\n}\n.n3-fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.n3-fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.n3-fa-braille:before {\n  content: \"\\F2A1\";\n}\n.n3-fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.n3-fa-asl-interpreting:before,\n.n3-fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.n3-fa-deafness:before,\n.n3-fa-hard-of-hearing:before,\n.n3-fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.n3-fa-glide:before {\n  content: \"\\F2A5\";\n}\n.n3-fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.n3-fa-signing:before,\n.n3-fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.n3-fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.n3-fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.n3-fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.n3-fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.n3-fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.n3-fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.n3-fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.n3-fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.n3-fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.n3-fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.n3-fa-google-plus-circle:before,\n.n3-fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.n3-fa-fa:before,\n.n3-fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.n3-slider {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n}\n.n3-slider-horizontal {\n  height: 28px;\n}\n.n3-slider-horizontal .n3-slider-track {\n  height: 4px;\n  width: 100%;\n  top: 12px;\n  left: 0;\n}\n.n3-slider-horizontal .n3-slider-selection,\n.n3-slider-horizontal .n3-slider-track-low,\n.n3-slider-horizontal .n3-slider-track-high {\n  height: 100%;\n  top: 0;\n  bottom: 0;\n}\n.n3-slider-horizontal .n3-slider-handle {\n  margin-left: 0px;\n  margin-top: -5px;\n}\n.n3-slider-vertical {\n  width: 20px;\n}\n.n3-slider-vertical .n3-slider-track {\n  width: 4px;\n  height: 100%;\n  margin-left: -5px;\n  left: 50%;\n  top: 0;\n}\n.n3-slider-vertical .n3-slider-selection {\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.n3-slider-vertical .n3-slider-track-low,\n.n3-slider-vertical .n3-slider-track-high {\n  width: 100%;\n  left: 0;\n  right: 0;\n}\n.n3-slider-vertical .n3-slider-handle {\n  margin-left: -5px;\n  margin-top: -5px;\n}\n.n3-slider-disabled .n3-slider-handle {\n  background-image: linear-gradient(to bottom, rgba(87, 197, 247, 0.15) 0%, #eee 100%);\n  background-repeat: repeat-x;\n}\n.n3-slider-disabled .n3-slider-track {\n  background-image: linear-gradient(to bottom, rgba(87, 197, 247, 0.15) 0%, #eee 100%);\n  background-repeat: repeat-x;\n  cursor: not-allowed;\n}\n.n3-slider input {\n  display: none;\n}\n.n3-slider .n3-tooltip-inner {\n  white-space: nowrap;\n}\n.n3-slider-hide {\n  display: none;\n}\n.n3-slider-track {\n  position: absolute;\n  cursor: pointer;\n  background: #f9f9f9;\n  border-radius: 4px;\n}\n.n3-slider-selection {\n  position: absolute;\n  background: #2db7f5;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.n3-slider-track-low,\n.n3-slider-track-high {\n  position: absolute;\n  background: transparent;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.n3-slider-handle {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  background-color: #fff;\n  border: 2px solid #2db7f5;\n}\n.n3-slider-handle.n3-slider-round {\n  border-radius: 50%;\n}\n.n3-slider-vertical .n3-slider-selection {\n  height: 0%;\n}\n.n3-slider-vertical .n3-slider-track-high {\n  height: 100%;\n}\n.n3-slider .n3-tooltip.n3-tooltip-top {\n  margin-top: -40px;\n}\n.n3-slider-horizontal .n3-tooltip.n3-tooltip-top {\n  margin-left: -8px;\n}\n.n3-slider-vertical .n3-tooltip.n3-tooltip-right {\n  margin-top: -15px;\n  margin-left: 17px;\n}\n.n3-tooltip.n3-slider-slider-tooltip-always {\n  display: block!important;\n}\n.n3-tooltip.n3-slider-slider-tooltip-hide {\n  display: none!important;\n}\n.fadeLeft-transition {\n  transition: all .3s ease;\n  transform: translateX(0);\n  opacity: 1;\n}\n.fadeLeft-enter,\n.fadeLeft-leave {\n  transform: translateX(-10px);\n  opacity: 0;\n}\n.fade-transition {\n  transition: opacity .3s ease;\n  opacity: 1;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n.fadeDown-transition {\n  transition: all .3s ease;\n  transform: translateY(0);\n  opacity: 1;\n}\n.fadeDown-enter,\n.fadeDown-leave {\n  transform: translateY(-10px);\n  opacity: 0;\n}\n.collapse-transition {\n  overflow: hidden;\n}\n.bounce-enter {\n  animation: bounce-in 0.5s;\n}\n.bounce-leave {\n  animation: bounce-out 0.5s;\n}\n@keyframes bounce-in {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes bounce-out {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  animation: scale-in 0.15s ease-in;\n}\n.scale-leave {\n  animation: scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n.n3-aside-open {\n  transition: transform 0.3s;\n}\n.n3-aside-open.has-push-right {\n  transform: translateX(-300px);\n}\n.n3-aside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 1049;\n  overflow: auto;\n  background: #fff;\n}\n.n3-aside-left {\n  left: 0;\n  right: auto;\n}\n.n3-aside-right {\n  left: auto;\n  right: 0;\n}\n.n3-aside:focus {\n  outline: 0;\n}\n.n3-aside-dialog .n3-aside-header {\n  min-height: 16.43px;\n  padding: 6px 15px;\n  background: #2db7f5;\n  color: #fff;\n}\n.n3-aside-dialog .n3-aside-header .n3-close {\n  margin-right: -8px;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 25px;\n  opacity: .8;\n}\n.n3-aside-dialog .n3-aside-body {\n  position: relative;\n  padding: 15px;\n}\n.n3-aside-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: 0;\n  transition: opacity .3s ease;\n  background-color: #000;\n}\n.n3-aside-in {\n  opacity: .5;\n}\n.slideleft-enter {\n  animation: slideleft-in 0.3s;\n}\n.slideleft-leave {\n  animation: slideleft-out 0.3s;\n}\n@keyframes slideleft-in {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideleft-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.slideright-enter {\n  animation: slideright-in 0.3s;\n}\n.slideright-leave {\n  animation: slideright-out 0.3s;\n}\n@keyframes slideright-in {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideright-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.n3-data-table .n3-page-loading {\n  z-index: 1;\n}\n.n3-data-table-bar {\n  margin-bottom: 10px;\n}\n.n3-data-table-page {\n  display: inline-block;\n}\n.n3-data-table-inner-btn {\n  height: 28px;\n}\n.n3-data-table-inner-btn .n3-fa {\n  margin-top: 3px;\n}\n.n3-data-table-sort {\n  font-size: 15px;\n}\n.n3-data-table-sort .n3-fa:hover {\n  cursor: pointer;\n}\n.n3-data-table-sort .n3-fa-caret-up {\n  position: relative;\n  top: -4px;\n  left: 6px;\n}\n.n3-data-table-sort .n3-fa-caret-down {\n  position: relative;\n  top: 5px;\n  left: -7px;\n}\n.n3-data-table-loading {\n  filter: blur(3px);\n}\n.n3-data-table .n3-table-bordered {\n  border-collapse: collapse;\n}\n.n3-data-table-row-select {\n  width: 30px;\n  text-align: center;\n  vertical-align: middle;\n}\n.n3-datepicker {\n  position: relative;\n  display: inline-block;\n}\n.n3-datepicker-popup {\n  position: absolute;\n  border: 0px;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n}\n.n3-datepicker-inner {\n  width: 245px;\n}\n.n3-datepicker-ctrl p,\n.n3-datepicker-ctrl span,\n.n3-datepicker-body span {\n  display: inline-block;\n  width: 35px;\n  line-height: 35px;\n  height: 35px;\n  border-radius: 35px;\n}\n.n3-datepicker-ctrl p {\n  width: 65%;\n  margin: 0px;\n}\n.n3-datepicker-ctrl span {\n  position: absolute;\n}\n.n3-datepicker-body span {\n  text-align: center;\n}\n.n3-datepicker-mouthRange span {\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n}\n.n3-datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed !important;\n}\n.n3-datepicker .n3-datepicker-decadeRange span:first-child,\n.n3-datepicker .n3-datepicker-decadeRange span:last-child,\n.n3-datepicker-item-disable,\n.n3-datepicker-item-gray {\n  color: #ccc;\n}\n.n3-datepicker-dateRange-item-active:hover,\n.n3-datepicker-dateRange-item-active {\n  background: #2db7f5 !important;\n  color: white!important;\n}\n.n3-datepicker-mouthRange {\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n.n3-datepicker-mouthRange span,\n.n3-datepicker-ctrl span,\n.n3-datepicker-ctrl p,\n.n3-datepicker-dateRange span {\n  transition: all .3s ease;\n  cursor: pointer;\n}\n.n3-datepicker-mouthRange span:hover,\n.n3-datepicker-ctrl p:hover,\n.n3-datepicker-ctrl i:hover,\n.n3-datepicker-dateRange span:hover,\n.n3-datepicker-dateRange-item-hover {\n  background-color: rgba(87, 197, 247, 0.15);\n}\n.n3-datepicker-weekRange {\n  border-bottom: 1px solid #eee;\n  border-top: 1px solid #eee;\n}\n.n3-datepicker-weekRange span {\n  font-weight: bold;\n}\n.n3-datepicker-ctrl {\n  position: relative;\n  height: 35px;\n  line-height: 35px;\n  font-weight: bold;\n  text-align: center;\n}\n.n3-datepicker .n3-month-btn {\n  font-weight: bold;\n  user-select: none;\n}\n.n3-datepicker-preBtn {\n  left: 2px;\n}\n.n3-datepicker-nextBtn {\n  right: 2px;\n}\n.n3-timepicker {\n  display: inline-block;\n}\n.n3-timepicker-slider {\n  margin-top: 20px;\n}\n.n3-timepicker-popup {\n  position: absolute;\n  border: 1px solid #ccc;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  padding: 10px 0px 0px;\n}\n.n3-timepicker-popup .slider-sin-wrap:after {\n  top: 5px;\n}\n.n3-timepicker-slider {\n  padding: 0px 0px 0px 2px;\n}\n.n3-timepicker-slider-sin-wrap {\n  float: left;\n  height: 275px;\n  margin: 4px 14px;\n  position: relative;\n}\n.n3-timepicker-slider-sin-wrap:before {\n  padding-left: 2px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"hour\"] {\n  z-index: 10;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"hour\"]:before {\n  content: \"\\65F6\";\n  display: block;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"minute\"] {\n  z-index: 9;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"minute\"]:before {\n  content: \"\\5206\";\n  display: block;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"second\"] {\n  z-index: 8;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"second\"]:before {\n  content: \"\\79D2\";\n  display: block;\n}\n.n3-timepicker-slider-sin-wrap:after {\n  content: \":\";\n  position: absolute;\n  top: 1px;\n  left: 32px;\n}\n.n3-timepicker-slider-sin-wrap:last-child:after {\n  content: '';\n}\n.n3-timepicker-slider-sin-wrap:last-child:after {\n  display: none;\n}\n.n3-datetimepicker .n3-datepicker-inner {\n  width: 250px;\n  display: inline-block;\n  border-right: 1px solid #eee;\n  vertical-align: top;\n}\n.n3-datetimepicker .n3-timepicker-con {\n  display: inline-block;\n  margin-top: 10px;\n}\n.n3-datetimepicker .n3-timepicker-slider-sin-wrap > div {\n  margin-top: 25px;\n}\n.n3-datetimepicker .n3-timepicker-con .n3-timepicker-slider-sin-wrap:after {\n  top: 3px;\n  display: block;\n}\n.n3-dropdown-con {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.n3-dropdown-con .n3-dropdown-menu {\n  display: block;\n}\n.n3-dropdown {\n  position: relative;\n}\n.n3-dropdown-toggle:focus {\n  outline: 0;\n}\n.n3-dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0px;\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  overflow: auto;\n}\n.n3-dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.n3-dropdown-menu > li > a {\n  display: block;\n  padding: 5px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #666;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all .3s ease;\n}\n.n3-dropdown-menu > li > a:hover,\n.n3-dropdown-menu > li > a:focus {\n  background-color: rgba(87, 197, 247, 0.15);\n  color: #666;\n  text-decoration: none;\n}\n.n3-dropdown-menu > .n3-dropdown-active > a,\n.n3-dropdown-menu > .n3-dropdown-active > a:hover,\n.n3-dropdown-menu > .n3-dropdown-active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #2db7f5;\n  outline: 0;\n}\n.n3-dropdown-menu > .n3-dropdown-disabled > a,\n.n3-dropdown-menu > .n3-dropdown-disabled > a:hover,\n.n3-dropdown-menu > .n3-dropdown-disabled > a:focus {\n  color: #999;\n}\n.n3-dropdown-menu > .n3-dropdown-disabled > a:hover,\n.n3-dropdown-menu > .n3-dropdown-disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n}\n.n3-btn.n3-dropdown-toggle,\n.n3-btn-group.n3-open .n3-dropdown-toggle {\n  box-shadow: none;\n}\n.n3-open > .n3-dropdown-menu {\n  display: block;\n}\n.n3-open > a {\n  outline: 0;\n}\n.pull-right > .n3-dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.n3-navbar-fixed-bottom .n3-dropdown .n3-dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .n3-navbar-right .n3-dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .n3-navbar-right .n3-dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.n3-form-control {\n  display: block;\n  width: 100%;\n  height: 28px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #666;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.n3-form-control:focus {\n  border: 1px solid #2db7f5;\n  outline: 0;\n}\n.n3-form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.n3-form-control:-ms-input-placeholder {\n  color: #999;\n}\n.n3-form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.n3-form-control[disabled],\n.n3-form-control[readonly] {\n  cursor: not-allowed;\n  background-color: #f9f9f9;\n  opacity: 1;\n}\ntextarea.n3-form-control {\n  height: auto;\n}\n.n3-err-tip {\n  color: #f50;\n  font-size: 12px;\n  height: 20px;\n}\n.n3-form-horizontal .n3-control-label {\n  font-weight: 300;\n  font-size: 14px;\n  text-align: left;\n}\n.n3-form-inline .n3-slider,\n.n3-form-horizontal .n3-slider {\n  position: relative;\n}\n.n3-form-group {\n  margin: 0 0 25px 0;\n  line-height: 28px;\n}\n.n3-has-feedback {\n  position: relative;\n}\n.n3-has-feedback .n3-form-control {\n  padding-right: 42.5px;\n}\n.n3-form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  pointer-events: none;\n}\n.n3-has-success .n3-control-label {\n  color: #87d068;\n}\n.n3-has-success .n3-form-control {\n  border-color: #87d068;\n}\n.n3-has-success .n3-form-control:focus {\n  border-color: #91d873;\n}\n.n3-has-success .n3-form-control-feedback {\n  color: #87d068;\n}\n.n3-has-warining .n3-control-label {\n  color: #fa0;\n}\n.n3-has-warining .n3-form-control {\n  border-color: #fa0;\n}\n.n3-has-warining .n3-form-control:focus {\n  border-color: #f5b73b;\n}\n.n3-has-warining .n3-form-control-feedback {\n  color: #fa0;\n}\n.n3-has-error .n3-control-label {\n  color: #f50;\n}\n.n3-has-error .n3-form-control {\n  border-color: #f50;\n}\n.n3-has-error .n3-form-control:focus {\n  border-color: #f9702b;\n}\n.n3-has-error .n3-form-control-feedback {\n  color: #f50;\n}\n.n3-has-feedback label ~ .n3-form-control-feedback {\n  top: 31px;\n}\n.n3-form-need {\n  color: red;\n  position: relative;\n  top: 2px;\n  left: 3px;\n  font-size: 14px;\n  font-weight: bold;\n  margin-right: 8px;\n}\n@media (min-width: 768px) {\n  .n3-form-inline .n3-form-group {\n    display: inline-block;\n    margin-bottom: 20px;\n    vertical-align: middle;\n  }\n  .n3-form-inline .n3-form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .n3-form-inline .n3-form-control-static {\n    display: inline-block;\n  }\n  .n3-form-inline .n3-control-label {\n    margin-bottom: 0;\n    vertical-align: top;\n  }\n  .n3-form-inline .n3-has-feedback .n3-form-control-feedback {\n    top: 0;\n  }\n}\n.n3-form-horizontal .n3-form-group {\n  min-height: 28px;\n}\n@media (min-width: 768px) {\n  .n3-form-horizontal .n3-control-label {\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n/* loading */\n.n3-page-loading-con {\n  display: inline-block;\n  z-index: 1000;\n}\n.n3-page-loading {\n  animation: loading-spin 2s linear 0s infinite;\n  font-size: 28px;\n  float: left;\n}\n.n3-page-loading:before {\n  font-family: \"FontAwesome\";\n  content: \"\\F110\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n}\n.n3-page-loading.n3-loading-lg {\n  font-size: 40px;\n}\n.n3-page-loading.n3-loading-lg.n3-loading-center {\n  margin: -20px 0 0 -20px;\n}\n.n3-page-loading.n3-loading-sm {\n  font-size: 18px;\n}\n.n3-page-loading.n3-loading-sm.n3-loading-center {\n  margin: -9px 0 0 -9px;\n}\n.n3-page-loading.n3-loading-xs {\n  font-size: 12px;\n}\n.n3-page-loading.n3-loading-xs.n3-loading-center {\n  margin: -6px 0 0 -6px;\n}\n.n3-page-loading.n3-loading-refresh:before {\n  content: \"\\F021\";\n}\n.n3-loading-center {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: -14px 0 0 -14px;\n}\n@keyframes loading-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.n3-tooltip {\n  position: absolute;\n  z-index: 1030;\n  display: block;\n  font-size: 12px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.4;\n  visibility: visible;\n  opacity: .9;\n}\n.n3-tooltip-in {\n  opacity: 0.9;\n}\n.n3-tooltip-top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.n3-tooltip-top .n3-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.n3-tooltip-right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.n3-tooltip-right .n3-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.n3-tooltip-bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.n3-tooltip-bottom .n3-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.n3-tooltip-left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.n3-tooltip-left .n3-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.n3-tooltip-inner {\n  max-width: 200px;\n  padding: 9px 11px;\n  color: #fff;\n  text-align: left;\n  background-color: #000;\n  border-radius: 4px;\n}\n.n3-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.n3-popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  white-space: normal;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0px;\n  border-radius: 6px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n}\n.n3-popover-top {\n  margin-top: -10px;\n}\n.n3-popover-right {\n  margin-left: 10px;\n}\n.n3-popover-bottom {\n  margin-top: 10px;\n}\n.n3-popover-left {\n  margin-left: -10px;\n}\n.n3-popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n  border-radius: 5px 5px 0 0;\n}\n.n3-popover-content {\n  padding: 9px 14px;\n}\n.n3-popover-arrow,\n.n3-popover-arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.n3-popover-arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.n3-popover-arrow {\n  border-width: 6px;\n}\n.n3-popover-top > .n3-popover-arrow {\n  bottom: -6px;\n  left: 50%;\n  margin-left: -6px;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  border-bottom-width: 0;\n}\n.n3-popover-top > .n3-popover-arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.n3-popover-right > .n3-popover-arrow {\n  top: 50%;\n  left: -6px;\n  margin-top: -6px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n  border-left-width: 0;\n}\n.n3-popover-right > .n3-popover-arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.n3-popover-bottom > .n3-popover-arrow {\n  top: -6px;\n  left: 50%;\n  margin-left: -6px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.n3-popover-bottom > .n3-popover-arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.n3-popover-left > .n3-popover-arrow {\n  top: 50%;\n  right: -6px;\n  margin-top: -6px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.n3-popover-left > .n3-popover-arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.n3-select-group .n3-select-search input {\n  border: 0px;\n  border-bottom: 1px solid #eee;\n}\n.n3-select-group .n3-dropdown-menu {\n  display: block;\n  overflow-y: auto;\n}\n.n3-select-group .n3-dropdown-menu .n3-notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f9f9f9;\n  border: 1px solid #eee;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n}\n.n3-select-group .n3-dropdown-menu .n3-fa-check {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n.n3-select-group .n3-dropdown-menu .n3-fa-plus-square-o {\n  font-size: 20px;\n  position: absolute;\n  top: 11px;\n  right: 15px;\n}\n.n3-select-group .n3-dropdown-menu .n3-select-all {\n  border-bottom: 1px solid #eee;\n}\n.n3-select-group .n3-dropdown-menu .n3-select-all a {\n  cursor: pointer;\n}\n.n3-select-group .n3-dropdown-toggle {\n  overflow: hidden;\n  word-break: break-all;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.n3-simple-pagination .n3-pagination {\n  margin: 0px;\n}\n.n3-simple-pagination-input {\n  position: relative;\n  top: 1px;\n}\n.n3-simple-pagination-btn {\n  height: 28px;\n}\n.n3-simple-pagination-btn .n3-fa {\n  margin-top: 2px;\n}\n.n3-timeline-con {\n  position: relative;\n}\n.n3-timeline-con .n3-timeline-item:last-child .n3-timeline-item-tail {\n  display: none;\n}\n.n3-timeline-con .n3-timeline-item {\n  position: relative;\n  padding: 0 0 12px;\n  margin: 0;\n  display: block;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-tail {\n  position: absolute;\n  left: 5px;\n  top: 0;\n  height: 100%;\n  border-left: 2px solid #eee;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-head {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  z-index: 1;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-head.n3-fa {\n  border: 0px;\n  top: -2px;\n  left: -1px;\n  font-size: 16px;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-content {\n  padding: 0 0 10px 24px;\n  font-size: 12px;\n  position: relative;\n  top: -3px;\n}\n.n3-steps {\n  font-size: 0px;\n  overflow: hidden;\n  line-height: 0px;\n  margin: 18px 0px;\n  display: flex;\n}\n.n3-steps * {\n  box-sizing: content-box;\n}\n.n3-steps-wrap {\n  padding: 0;\n  flex: 1;\n}\n.n3-steps-wrap > div {\n  width: 100%;\n  line-height: 32px;\n  vertical-align: top;\n  font-size: 12px;\n  position: relative;\n}\n.n3-steps-wrap > div > label {\n  margin: 0 0 0 26px;\n  cursor: default;\n}\n.n3-steps-triangle-right {\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 16px;\n  position: absolute;\n  right: -31px;\n  z-index: 1;\n}\n.n3-steps-triangle-right-bg {\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  position: absolute;\n  z-index: 1;\n  border-width: 16px;\n  right: -34px;\n  border-color: transparent transparent transparent #fff;\n}\n.n3-steps-round {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  text-align: center;\n  line-height: 16px;\n}\n.n3-steps-round + span:before {\n  content: '\\A0';\n}\n.n3-steps-finished {\n  background-color: #57c5f7;\n  color: #fff;\n}\n.n3-steps-finished .n3-steps-triangle-right {\n  border-color: transparent transparent transparent #57c5f7;\n}\n.n3-steps-finished .n3-steps-round {\n  background-color: fff;\n  color: #57c5f7;\n}\n.n3-steps-finished .n3-steps-round > i {\n  color: #57c5f7;\n  font-size: 12px;\n}\n.n3-steps-current {\n  background-color: #2db7f5;\n  color: #fff;\n}\n.n3-steps-current .n3-steps-triangle-right {\n  border-color: transparent transparent transparent #2db7f5;\n}\n.n3-steps-current .n3-steps-round {\n  background-color: #fff;\n  color: #2db7f5;\n}\n.n3-steps-todo {\n  background-color: #f9f9f9;\n  color: #999;\n}\n.n3-steps-todo .n3-steps-triangle-right {\n  border-color: transparent transparent transparent #f9f9f9;\n}\n.n3-steps-todo .n3-steps-round {\n  background-color: #fff;\n}\n > :last-child .n3-steps-triangle-right,\n > :last-child .n3-steps-triangle-right-bg {\n  display: none;\n}\n.n3-steps-round-con {\n  list-style-type: none;\n  margin: 18px 0px;\n  padding: 0px;\n  display: flex;\n}\n.n3-steps-round-con > li .n3-steps-round {\n  color: #fff;\n  background-color: #eee;\n}\n.n3-steps-round-con > .n3-steps-finished:before {\n  background-color: #57c5f7;\n}\n.n3-steps-round-con > .n3-steps-finished .n3-steps-round {\n  background-color: #57c5f7;\n  border: 4px #57c5f7 solid;\n}\n.n3-steps-round-con > .n3-steps-finished label {\n  color: #57c5f7;\n}\n.n3-steps-round-con > .n3-steps-current:before {\n  background-color: #2db7f5;\n}\n.n3-steps-round-con > .n3-steps-current .n3-steps-round {\n  background-color: #2db7f5;\n  border: 4px #2db7f5 solid;\n  color: #fff;\n}\n.n3-steps-round-con > .n3-steps-current label {\n  color: #2db7f5;\n}\n.n3-steps-round-con > li {\n  padding: 0px;\n  position: relative;\n  flex: 1;\n  background-color: transparent;\n}\n.n3-steps-round-con:before,\n.n3-steps-round-con:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n.n3-steps-round-con > li:before {\n  content: '';\n  width: 100%;\n  height: 6px;\n  margin: 12px 0px;\n  display: block;\n  float: left;\n  background-color: #f9f9f9;\n}\n.n3-steps-round-con > li:first-child:before {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.n3-steps-round-con > li:last-child:before {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.n3-steps-round-con > li .n3-steps-wrap {\n  position: absolute;\n  left: 50%;\n  margin-left: -25px;\n  width: 50px;\n  text-align: center;\n  background: #fff;\n  top: 0px;\n}\n.n3-steps-round-con > li .n3-steps-round {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  color: #fff;\n  line-height: 22px;\n  text-align: center;\n  border: 4px #eee solid;\n  background-color: #fff;\n  color: #999;\n}\n.n3-steps-round-con > li .n3-steps-round > i {\n  color: #57c5f7;\n  font-size: 12px;\n}\n.n3-steps-round-con > li label {\n  width: 100%;\n  text-align: center;\n  color: #999;\n  margin: 10px 0px 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.n3-steps-round-con > .n3-steps-finished:before,\n.n3-steps-round-con .n3-steps-current:before {\n  background-color: #57c5f7;\n}\n.n3-steps-round-con > .n3-steps-finished .n3-steps-round {\n  border: 4px #57c5f7 solid;\n  background-color: #57c5f7;\n  color: #fff;\n}\n.n3-steps-round-con > .n3-steps-finished label,\n.n3-steps-round-con .n3-steps-current label {\n  color: #57c5f7;\n}\n.n3-switch {\n  width: 65px;\n  height: 28px;\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 30px;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  z-index: 0;\n  box-shadow: 0px 0px 1px #eee inset;\n  user-select: none;\n  vertical-align: middle;\n  transition: background ease-in-out 0.15s, box-shadow ease-in-out 0.15s, color ease-in-out 0.15s;\n  background: #2db7f5;\n  color: #fff;\n}\n.n3-switch-container {\n  width: 102px;\n  font-size: 0px;\n  display: inline-block;\n  transform: translate3d(0, 0, 0);\n  vertical-align: top;\n}\n.n3-switch-handle-on,\n.n3-switch-handle-off,\n.n3-switch-label {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 28px;\n  line-height: 28px;\n  font-size: 14px;\n  vertical-align: middle;\n  position: relative;\n  text-align: center;\n}\n.n3-switch-handle-on {\n  width: 37px;\n  z-index: 98;\n  line-height: 28px;\n  vertical-align: top;\n}\n.n3-switch-handle-off {\n  width: 37px;\n  z-index: 97;\n  line-height: 28px;\n  vertical-align: top;\n}\n.n3-switch-label {\n  height: 28px;\n  padding: 0;\n  position: relative;\n  width: 28px !important;\n  z-index: 100;\n  vertical-align: top;\n}\n.n3-switch-label:after {\n  transition: 0.25s ease-out;\n  background-color: #fff;\n  border-radius: 50%;\n  content: \" \";\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  box-shadow: 0 1px 2px #ccc;\n}\n.n3-switch-off .n3-switch-handle-on {\n  margin-left: -37px;\n}\n.n3-switch-off {\n  background: #f9f9f9;\n  color: #fff;\n}\n.n3-switch-off .n3-switch-handle-off.n3-switch-default {\n  z-index: 99;\n  color: #999;\n}\n.n3-switch-disabled {\n  cursor: default !important;\n}\n.n3-switch-disabled .n3-switch-handle-on,\n.n3-switch-disabled .n3-switch-handle-off,\n.n3-switch-disabled .n3-switch-label {\n  opacity: 0.5;\n  cursor: default !important;\n}\n.n3-switch-animate .n3-switch-handle-on {\n  transition: margin-left 0.5s;\n}\n.n3-multiple-input {\n  font-size: 0px;\n  letter-spacing: 0px;\n  min-height: 28px;\n  height: auto;\n  padding: 6px 12px 0px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n.n3-multiple-input .n3-form-control {\n  border: 0px;\n  outline: none;\n  position: relative;\n  top: -2px;\n  margin: 0px;\n  padding: 0px;\n  height: 22px;\n}\n.n3-multiple-input .n3-multiple-input-space {\n  display: inline-block;\n  width: 8px;\n  height: 22px;\n}\n.n3-multiple-input .n3-multiple-input-space:first-child {\n  margin-left: -8px;\n}\n.n3-multiple-input .n3-multiple-input-space:hover {\n  cursor: text;\n}\n.n3-multiple-input .n3-multiple-input-space.n3-multiple-input-long {\n  flex: 1;\n}\n.n3-multiple-input .n3-multiple-input-m-tag,\n.n3-multiple-input input,\n.n3-multiple-input .n3-multiple-input-space {\n  vertical-align: top;\n  font-size: 14px;\n  margin-bottom: 3px;\n}\n.n3-multiple-input .n3-multiple-input-m-tag:hover {\n  cursor: pointer;\n}\n.n3-multiple-input .n3-multiple-input-m-tag {\n  background: #f9f9f9;\n  padding: 0px 10px;\n  border-radius: 5px;\n}\n.n3-multiple-input .n3-multiple-input-m-tag .n3-multiple-close {\n  color: #ccc;\n}\n.n3-radio-con {\n  margin-right: 10px;\n}\n.n3-radio-con:hover {\n  cursor: pointer;\n}\n.n3-radio-con .n3-radio-span {\n  white-space: nowrap;\n  outline: none;\n  display: inline-block;\n  position: relative;\n  line-height: 1;\n  vertical-align: middle;\n}\n.n3-radio-con .n3-radio-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 14px;\n  border-color: #eee;\n  background-color: #fff;\n  transition: all 0.3s ease;\n}\n.n3-radio-con .n3-radio-input {\n  position: absolute!important;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.n3-radio-con .n3-radio-checked .n3-radio-inner:after {\n  transform: scale(1);\n  opacity: 1;\n}\n.n3-radio-con .n3-radio-inner:after {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  left: 3px;\n  top: 3px;\n  border-radius: 6px;\n  display: table;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  background-color: #2db7f5;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.n3-radio-con .n3-radio-disabled .n3-radio-inner {\n  border-color: #eee;\n  background-color: #f9f9f9;\n}\n.n3-radio-btn input[type=radio] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.n3-label {\n  display: inline;\n  padding: 0.3em 0.6em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  margin: 0px 5px 5px 0px;\n  background: #fff;\n  transition: all .3s ease;\n}\n.n3-label-hover:hover {\n  color: #fff;\n  cursor: pointer;\n}\n.n3-label-default.n3-label-hover:hover {\n  background: #999;\n}\n.n3-label-primary.n3-label-hover:hover {\n  background: #2db7f5;\n}\n.n3-label-success.n3-label-hover:hover {\n  background: #87d068;\n}\n.n3-label-info.n3-label-hover:hover {\n  background: #2db7f5;\n}\n.n3-label-warning.n3-label-hover:hover {\n  background: #fa0;\n}\n.n3-label-danger.n3-label-hover:hover {\n  background: #f50;\n}\n.n3-label-default {\n  color: #999;\n  border: 1px solid #999;\n}\n.n3-label-primary {\n  color: #2db7f5;\n  border: 1px solid #2db7f5;\n}\n.n3-label-success {\n  color: #87d068;\n  border: 1px solid #87d068;\n}\n.n3-label-info {\n  color: #2db7f5;\n  border: 1px solid #2db7f5;\n}\n.n3-label-warning {\n  color: #fa0;\n  border: 1px solid #fa0;\n}\n.n3-label-danger {\n  color: #f50;\n  border: 1px solid #f50;\n}\n.n3-checkbox-label {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.n3-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 3px;\n  border-color: #eee;\n  background-color: #fff;\n  transition: all 0.3s ease;\n}\n.n3-checkbox-inner-check {\n  font-size: 12px;\n  position: relative;\n  top: 0px;\n  left: 0px;\n}\n.n3-checkbox-input {\n  position: absolute!important;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.n3-checkbox-checked .n3-checkbox-inner {\n  border-color: #2db7f5;\n  background-color: #2db7f5;\n}\n.n3-checkbox-disabled .n3-checkbox-inner {\n  border-color: #eee;\n  background-color: #eee;\n}\n.n3-checkbox-disabled .n3-checkbox-inner:after {\n  display: none;\n}\n.n3-checkbox-label span {\n  vertical-align: top;\n}\n.n3-checkbox-btn input[type=checkbox] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.n3-cascader {\n  position: relative;\n  display: inline-block;\n}\n.n3-cascader-picker {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.n3-cascader-menus {\n  z-index: 10010;\n  font-size: 12px;\n  background: #fff;\n  position: absolute;\n  border: 1px solid #eee;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);\n  white-space: nowrap;\n}\n.n3-cascader-menu {\n  display: inline-block;\n  vertical-align: top;\n  min-width: 110px;\n  height: 180px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-right: 1px solid #eee;\n  overflow: auto;\n}\n.n3-cascader-menu:last-child {\n  border-right-color: transparent;\n  margin-right: -1px;\n}\n.n3-cascader-menu-item {\n  padding: 5px 16px;\n  line-height: 18px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all .3s ease;\n}\n.n3-cascader-menu-item-selected,\n.n3-cascader-menu-item-selected:hover {\n  background: #eee !important;\n}\n.n3-cascader-menu-item-disabled {\n  cursor: not-allowed;\n  color: #ccc;\n}\n.n3-cascader-menu-item-disabled:hover {\n  background: transparent;\n}\n.n3-cascader-menu-item:hover {\n  background: rgba(87, 197, 247, 0.15);\n}\n.n3-input-con .n3-has-feedback .n3-form-control-feedback {\n  right: 0px;\n  line-height: 34px;\n}\n.n3-input-con .n3-form-control[readonly] {\n  background-color: #fff;\n}\n.n3-input-con .n3-form-control[disabled] {\n  background-color: #f9f9f9;\n}\n.n3-input-con .n3-form-control[readonly] {\n  cursor: pointer;\n}\n.n3-input-con .n3-form-control[readonly]:hover {\n  cursor: pointer;\n}\n.n3-input-con .n3-form-control[disabled] {\n  cursor: not-allowed;\n}\n.n3-input-con .n3-form-control[disabled]:hover {\n  cursor: not-allowed;\n}\n.n3-toast {\n  position: fixed;\n  border-radius: 25px;\n  padding: 2px 25px .3em;\n  transition-property: opacity;\n  transition-duration: 800ms;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  cursor: default;\n  z-index: 1500;\n}\n.n3-toast.n3-center {\n  margin: 0 auto;\n  left: 50%;\n  top: 50%;\n}\n.n3-toast.n3-top {\n  top: 30px;\n  margin: 0 auto;\n  left: 50%;\n}\n.n3-toast.n3-bottom {\n  bottom: 30px;\n  margin: 0 auto;\n  left: 50%;\n  top: initial;\n}\n.n3-toast.n3-top-right {\n  top: 30px;\n  right: 50px;\n  left: initial;\n}\n.n3-toast.n3-top-left {\n  top: 30px;\n  left: 50px;\n}\n.n3-toast.n3-bottom-right {\n  bottom: 30px;\n  right: 50px;\n  left: initial;\n  top: initial;\n}\n.n3-toast.n3-bottom-left {\n  top: initial;\n  bottom: 30px;\n  left: 50px;\n}\n.n3-toast-default {\n  background: #fff;\n}\n.n3-toast-primary {\n  background: #2db7f5;\n}\n.n3-toast-success {\n  background: #87d068;\n}\n.n3-toast-info {\n  background: #2db7f5;\n}\n.n3-toast-warning {\n  background: #fa0;\n}\n.n3-toast-danger {\n  background: #f50;\n}\n.n3-tag-group {\n  margin: 0;\n  margin-bottom: 18px;\n}\n.n3-tag-group .n3-tag {\n  display: inline-block;\n  font-weight: normal;\n  padding: 2px 1em;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 4px;\n  color: inherit;\n  border: 1px solid #999;\n  cursor: default;\n  user-select: none;\n  transition: all 0.2s linear;\n  position: relative;\n  margin: 0;\n}\n.n3-tag-group .n3-tag a[name] {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n.n3-tag-group .n3-tag + .n3-tag {\n  margin-left: .5em;\n}\n.n3-tag-group .n3-tag .n3-fa {\n  cursor: pointer;\n  line-height: 100%;\n  position: relative;\n  right: -0.4em;\n  vertical-align: middle;\n  font-size: 120%;\n  font-weight: 100;\n  color: inherit;\n  opacity: .8;\n}\n.n3-tag-disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.n3-tag-disabled:hover {\n  color: inherit;\n  border-color: #999;\n}\n.n3-tag-sm .n3-tag,\n.n3-tag-xs .n3-tag {\n  padding: 0px 1em;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.n3-tag-lg .n3-tag,\n.n3-tag-lg .n3-tag {\n  padding: 4px 1em;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.n3-tag-xl .n3-tag,\n.n3-tag-xl .n3-tag {\n  padding: 5px 1em;\n  font-size: 14px;\n  line-height: 1.429;\n}\n.n3-tag-default .n3-tag,\n.n3-tag-default .n3-tag:hover {\n  color: #999;\n}\n.n3-tag-primary .n3-tag,\n.n3-tag-primary .n3-tag:hover {\n  background: #2db7f5;\n  border-color: #2db7f5;\n  color: white;\n}\n.n3-tag-success .n3-tag,\n.n3-tag-success .n3-tag:hover {\n  background: #87d068;\n  border-color: #87d068;\n  color: white;\n}\n.n3-tag-info .n3-tag,\n.n3-tag-info .n3-tag:hover {\n  background: #2db7f5;\n  border-color: #2db7f5;\n  color: white;\n}\n.n3-tag-warning .n3-tag,\n.n3-tag-warning .n3-tag:hover {\n  background: #fa0;\n  border-color: #fa0;\n  color: white;\n}\n.n3-tag-danger .n3-tag,\n.n3-tag-danger .n3-tag:hover {\n  background: #f50;\n  border-color: #f50;\n  color: white;\n}\n.n3-container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .n3-container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .n3-container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .n3-container {\n    width: 1170px;\n  }\n}\n.n3-container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.n3-row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.n3-col-xs-1,\n.n3-col-sm-1,\n.n3-col-md-1,\n.n3-col-lg-1,\n.n3-col-xs-2,\n.n3-col-sm-2,\n.n3-col-md-2,\n.n3-col-lg-2,\n.n3-col-xs-3,\n.n3-col-sm-3,\n.n3-col-md-3,\n.n3-col-lg-3,\n.n3-col-xs-4,\n.n3-col-sm-4,\n.n3-col-md-4,\n.n3-col-lg-4,\n.n3-col-xs-5,\n.n3-col-sm-5,\n.n3-col-md-5,\n.n3-col-lg-5,\n.n3-col-xs-6,\n.n3-col-sm-6,\n.n3-col-md-6,\n.n3-col-lg-6,\n.n3-col-xs-7,\n.n3-col-sm-7,\n.n3-col-md-7,\n.n3-col-lg-7,\n.n3-col-xs-8,\n.n3-col-sm-8,\n.n3-col-md-8,\n.n3-col-lg-8,\n.n3-col-xs-9,\n.n3-col-sm-9,\n.n3-col-md-9,\n.n3-col-lg-9,\n.n3-col-xs-10,\n.n3-col-sm-10,\n.n3-col-md-10,\n.n3-col-lg-10,\n.n3-col-xs-11,\n.n3-col-sm-11,\n.n3-col-md-11,\n.n3-col-lg-11,\n.n3-col-xs-12,\n.n3-col-sm-12,\n.n3-col-md-12,\n.n3-col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.n3-col-xs-1,\n.n3-col-xs-2,\n.n3-col-xs-3,\n.n3-col-xs-4,\n.n3-col-xs-5,\n.n3-col-xs-6,\n.n3-col-xs-7,\n.n3-col-xs-8,\n.n3-col-xs-9,\n.n3-col-xs-10,\n.n3-col-xs-11,\n.n3-col-xs-12 {\n  float: left;\n}\n.n3-col-xs-12 {\n  width: 100%;\n}\n.n3-col-xs-11 {\n  width: 91.66666667%;\n}\n.n3-col-xs-10 {\n  width: 83.33333333%;\n}\n.n3-col-xs-9 {\n  width: 75%;\n}\n.n3-col-xs-8 {\n  width: 66.66666667%;\n}\n.n3-col-xs-7 {\n  width: 58.33333333%;\n}\n.n3-col-xs-6 {\n  width: 50%;\n}\n.n3-col-xs-5 {\n  width: 41.66666667%;\n}\n.n3-col-xs-4 {\n  width: 33.33333333%;\n}\n.n3-col-xs-3 {\n  width: 25%;\n}\n.n3-col-xs-2 {\n  width: 16.66666667%;\n}\n.n3-col-xs-1 {\n  width: 8.33333333%;\n}\n.n3-col-xs-pull-12 {\n  right: 100%;\n}\n.n3-col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.n3-col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.n3-col-xs-pull-9 {\n  right: 75%;\n}\n.n3-col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.n3-col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.n3-col-xs-pull-6 {\n  right: 50%;\n}\n.n3-col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.n3-col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.n3-col-xs-pull-3 {\n  right: 25%;\n}\n.n3-col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.n3-col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.n3-col-xs-pull-0 {\n  right: auto;\n}\n.n3-col-xs-push-12 {\n  left: 100%;\n}\n.n3-col-xs-push-11 {\n  left: 91.66666667%;\n}\n.n3-col-xs-push-10 {\n  left: 83.33333333%;\n}\n.n3-col-xs-push-9 {\n  left: 75%;\n}\n.n3-col-xs-push-8 {\n  left: 66.66666667%;\n}\n.n3-col-xs-push-7 {\n  left: 58.33333333%;\n}\n.n3-col-xs-push-6 {\n  left: 50%;\n}\n.n3-col-xs-push-5 {\n  left: 41.66666667%;\n}\n.n3-col-xs-push-4 {\n  left: 33.33333333%;\n}\n.n3-col-xs-push-3 {\n  left: 25%;\n}\n.n3-col-xs-push-2 {\n  left: 16.66666667%;\n}\n.n3-col-xs-push-1 {\n  left: 8.33333333%;\n}\n.n3-col-xs-push-0 {\n  left: auto;\n}\n.n3-col-xs-offset-12 {\n  margin-left: 100%;\n}\n.n3-col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.n3-col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.n3-col-xs-offset-9 {\n  margin-left: 75%;\n}\n.n3-col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.n3-col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.n3-col-xs-offset-6 {\n  margin-left: 50%;\n}\n.n3-col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.n3-col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.n3-col-xs-offset-3 {\n  margin-left: 25%;\n}\n.n3-col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.n3-col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.n3-col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .n3-col-sm-1,\n  .n3-col-sm-2,\n  .n3-col-sm-3,\n  .n3-col-sm-4,\n  .n3-col-sm-5,\n  .n3-col-sm-6,\n  .n3-col-sm-7,\n  .n3-col-sm-8,\n  .n3-col-sm-9,\n  .n3-col-sm-10,\n  .n3-col-sm-11,\n  .n3-col-sm-12 {\n    float: left;\n  }\n  .n3-col-sm-12 {\n    width: 100%;\n  }\n  .n3-col-sm-11 {\n    width: 91.66666667%;\n  }\n  .n3-col-sm-10 {\n    width: 83.33333333%;\n  }\n  .n3-col-sm-9 {\n    width: 75%;\n  }\n  .n3-col-sm-8 {\n    width: 66.66666667%;\n  }\n  .n3-col-sm-7 {\n    width: 58.33333333%;\n  }\n  .n3-col-sm-6 {\n    width: 50%;\n  }\n  .n3-col-sm-5 {\n    width: 41.66666667%;\n  }\n  .n3-col-sm-4 {\n    width: 33.33333333%;\n  }\n  .n3-col-sm-3 {\n    width: 25%;\n  }\n  .n3-col-sm-2 {\n    width: 16.66666667%;\n  }\n  .n3-col-sm-1 {\n    width: 8.33333333%;\n  }\n  .n3-col-sm-pull-12 {\n    right: 100%;\n  }\n  .n3-col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .n3-col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .n3-col-sm-pull-9 {\n    right: 75%;\n  }\n  .n3-col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .n3-col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .n3-col-sm-pull-6 {\n    right: 50%;\n  }\n  .n3-col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .n3-col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .n3-col-sm-pull-3 {\n    right: 25%;\n  }\n  .n3-col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .n3-col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .n3-col-sm-pull-0 {\n    right: auto;\n  }\n  .n3-col-sm-push-12 {\n    left: 100%;\n  }\n  .n3-col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .n3-col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .n3-col-sm-push-9 {\n    left: 75%;\n  }\n  .n3-col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .n3-col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .n3-col-sm-push-6 {\n    left: 50%;\n  }\n  .n3-col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .n3-col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .n3-col-sm-push-3 {\n    left: 25%;\n  }\n  .n3-col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .n3-col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .n3-col-sm-push-0 {\n    left: auto;\n  }\n  .n3-col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .n3-col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .n3-col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .n3-col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .n3-col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .n3-col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .n3-col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .n3-col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .n3-col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .n3-col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .n3-col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .n3-col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .n3-col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .n3-col-md-1,\n  .n3-col-md-2,\n  .n3-col-md-3,\n  .n3-col-md-4,\n  .n3-col-md-5,\n  .n3-col-md-6,\n  .n3-col-md-7,\n  .n3-col-md-8,\n  .n3-col-md-9,\n  .n3-col-md-10,\n  .n3-col-md-11,\n  .n3-col-md-12 {\n    float: left;\n  }\n  .n3-col-md-12 {\n    width: 100%;\n  }\n  .n3-col-md-11 {\n    width: 91.66666667%;\n  }\n  .n3-col-md-10 {\n    width: 83.33333333%;\n  }\n  .n3-col-md-9 {\n    width: 75%;\n  }\n  .n3-col-md-8 {\n    width: 66.66666667%;\n  }\n  .n3-col-md-7 {\n    width: 58.33333333%;\n  }\n  .n3-col-md-6 {\n    width: 50%;\n  }\n  .n3-col-md-5 {\n    width: 41.66666667%;\n  }\n  .n3-col-md-4 {\n    width: 33.33333333%;\n  }\n  .n3-col-md-3 {\n    width: 25%;\n  }\n  .n3-col-md-2 {\n    width: 16.66666667%;\n  }\n  .n3-col-md-1 {\n    width: 8.33333333%;\n  }\n  .n3-col-md-pull-12 {\n    right: 100%;\n  }\n  .n3-col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .n3-col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .n3-col-md-pull-9 {\n    right: 75%;\n  }\n  .n3-col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .n3-col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .n3-col-md-pull-6 {\n    right: 50%;\n  }\n  .n3-col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .n3-col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .n3-col-md-pull-3 {\n    right: 25%;\n  }\n  .n3-col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .n3-col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .n3-col-md-pull-0 {\n    right: auto;\n  }\n  .n3-col-md-push-12 {\n    left: 100%;\n  }\n  .n3-col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .n3-col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .n3-col-md-push-9 {\n    left: 75%;\n  }\n  .n3-col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .n3-col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .n3-col-md-push-6 {\n    left: 50%;\n  }\n  .n3-col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .n3-col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .n3-col-md-push-3 {\n    left: 25%;\n  }\n  .n3-col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .n3-col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .n3-col-md-push-0 {\n    left: auto;\n  }\n  .n3-col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .n3-col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .n3-col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .n3-col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .n3-col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .n3-col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .n3-col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .n3-col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .n3-col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .n3-col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .n3-col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .n3-col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .n3-col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .n3-col-lg-1,\n  .n3-col-lg-2,\n  .n3-col-lg-3,\n  .n3-col-lg-4,\n  .n3-col-lg-5,\n  .n3-col-lg-6,\n  .n3-col-lg-7,\n  .n3-col-lg-8,\n  .n3-col-lg-9,\n  .n3-col-lg-10,\n  .n3-col-lg-11,\n  .n3-col-lg-12 {\n    float: left;\n  }\n  .n3-col-lg-12 {\n    width: 100%;\n  }\n  .n3-col-lg-11 {\n    width: 91.66666667%;\n  }\n  .n3-col-lg-10 {\n    width: 83.33333333%;\n  }\n  .n3-col-lg-9 {\n    width: 75%;\n  }\n  .n3-col-lg-8 {\n    width: 66.66666667%;\n  }\n  .n3-col-lg-7 {\n    width: 58.33333333%;\n  }\n  .n3-col-lg-6 {\n    width: 50%;\n  }\n  .n3-col-lg-5 {\n    width: 41.66666667%;\n  }\n  .n3-col-lg-4 {\n    width: 33.33333333%;\n  }\n  .n3-col-lg-3 {\n    width: 25%;\n  }\n  .n3-col-lg-2 {\n    width: 16.66666667%;\n  }\n  .n3-col-lg-1 {\n    width: 8.33333333%;\n  }\n  .n3-col-lg-pull-12 {\n    right: 100%;\n  }\n  .n3-col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .n3-col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .n3-col-lg-pull-9 {\n    right: 75%;\n  }\n  .n3-col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .n3-col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .n3-col-lg-pull-6 {\n    right: 50%;\n  }\n  .n3-col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .n3-col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .n3-col-lg-pull-3 {\n    right: 25%;\n  }\n  .n3-col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .n3-col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .n3-col-lg-pull-0 {\n    right: auto;\n  }\n  .n3-col-lg-push-12 {\n    left: 100%;\n  }\n  .n3-col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .n3-col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .n3-col-lg-push-9 {\n    left: 75%;\n  }\n  .n3-col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .n3-col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .n3-col-lg-push-6 {\n    left: 50%;\n  }\n  .n3-col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .n3-col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .n3-col-lg-push-3 {\n    left: 25%;\n  }\n  .n3-col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .n3-col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .n3-col-lg-push-0 {\n    left: auto;\n  }\n  .n3-col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .n3-col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .n3-col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .n3-col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .n3-col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .n3-col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .n3-col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .n3-col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .n3-col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .n3-col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .n3-col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .n3-col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .n3-col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\n.n3-table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 18px;\n  font-size: 14px;\n}\n.n3-table > thead > tr > th,\n.n3-table > tbody > tr > th,\n.n3-table > tfoot > tr > th,\n.n3-table > thead > tr > td,\n.n3-table > tbody > tr > td,\n.n3-table > tfoot > tr > td {\n  padding: 8px 8px;\n  line-height: 1.5;\n  vertical-align: top;\n  border-top: 1px solid #eee;\n}\n.n3-table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 1px solid #eee;\n}\n.n3-table > caption + thead > tr:first-child > th,\n.n3-table > colgroup + thead > tr:first-child > th,\n.n3-table > thead:first-child > tr:first-child > th,\n.n3-table > caption + thead > tr:first-child > td,\n.n3-table > colgroup + thead > tr:first-child > td,\n.n3-table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.n3-table > tbody + tbody {\n  border-top: 2px solid #eee;\n}\n.n3-table-bordered {\n  border: 0px;\n  border-collapse: separate;\n  border-radius: 2px;\n  border-left: none;\n}\n.n3-table-bordered > thead > tr > th,\n.n3-table-bordered > tbody > tr > th,\n.n3-table-bordered > tfoot > tr > th,\n.n3-table-bordered > thead > tr > td,\n.n3-table-bordered > tbody > tr > td,\n.n3-table-bordered > tfoot > tr > td {\n  border-left: 0px;\n}\n.n3-table-bordered > thead > tr > th,\n.n3-table-bordered > thead > tr > td {\n  border-bottom-width: 1px;\n  background: #f9f9f9;\n}\n.n3-table-bordered > thead > tr:first-child > th,\n.n3-table-bordered > tbody > tr:first-child > th,\n.n3-table-bordered > tfoot > tr:first-child > th,\n.n3-table-bordered > thead > tr:first-child > td,\n.n3-table-bordered > tbody > tr:first-child > td,\n.n3-table-bordered > tfoot > tr:first-child > td {\n  border-top: 0;\n}\n.n3-table-bordered > thead:last-child tr:last-child > th:first-child,\n.n3-table-bordered > tbody:last-child tr:last-child > td:first-child,\n.n3-table-bordered > tbody:last-child tr:last-child > th:first-child,\n.n3-table-bordered > tfoot:last-child tr:last-child > td:first-child,\n.n3-table-bordered > tfoot:last-child tr:last-child > th:first-child {\n  border-bottom-left-radius: 2px;\n}\n.n3-table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.n3-table-hover > tbody > tr {\n  transition: all .3s ease;\n}\n.n3-table-hover > tbody > tr:hover {\n  background-color: rgba(87, 197, 247, 0.15);\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.n3-table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .n3-table-responsive {\n    width: 100%;\n    margin-bottom: 13.5px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #eee;\n  }\n}\n.n3-btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n}\n.n3-btn:focus,\n.n3-btn:active:focus,\n.n3-btn-active:focus {\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.n3-btn:hover,\n.n3-btn:focus {\n  color: #666;\n  text-decoration: none;\n}\n.n3-btn:active,\n.n3-btn-active {\n  background-image: none;\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.n3-btn-disabled,\n.n3-btn[disabled] {\n  pointer-events: none;\n  cursor: not-allowed;\n  box-shadow: none;\n  opacity: .65;\n}\n.n3-btn-default {\n  color: #666;\n  background-clip: padding-box;\n  background-color: #fff;\n  border-color: rgba(150, 160, 180, 0.3);\n}\n.n3-btn-default:hover,\n.n3-btn-default:focus,\n.n3-btn-default:active,\n.n3-btn-default.n3-btn-active {\n  color: #999;\n}\n.n3-btn-default:active,\n.n3-btn-default.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-default.n3-btn-disabled,\n.n3-btn-default[disabled],\n.n3-btn-default.n3-btn-disabled:hover,\n.n3-btn-default[disabled]:hover,\n.n3-btn-default.n3-btn-disabled:focus,\n.n3-btn-default[disabled]:focus,\n.n3-btn-default.n3-btn-disabled:active,\n.n3-btn-default[disabled]:active,\n.n3-btn-default.n3-btn-disabled.n3-btn-active,\n.n3-btn-default[disabled].n3-btn-active {\n  background-color: #eee;\n  border-color: #eee;\n}\n.n3-btn-default .n3-badge {\n  color: #fff;\n  background-color: #666;\n}\n.n3-btn-primary {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5;\n}\n.n3-btn-primary:hover,\n.n3-btn-primary:focus,\n.n3-btn-primary:active,\n.n3-btn-primary.n3-btn-active {\n  color: #fff;\n  background-color: #57c5f7;\n  border-color: #57c5f7;\n}\n.n3-btn-primary:active,\n.n3-btn-primary.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-primary .n3-badge {\n  color: #2db7f5;\n  background-color: #fff;\n}\n.n3-btn-success {\n  color: #fff;\n  background-color: #87d068;\n  border-color: #87d068;\n}\n.n3-btn-success:hover,\n.n3-btn-success:focus,\n.n3-btn-success:active,\n.n3-btn-success.n3-btn-active {\n  color: #fff;\n  background-color: #91d873;\n  border-color: #91d873;\n}\n.n3-btn-success:active,\n.n3-btn-success.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-success .n3-badge {\n  color: #87d068;\n  background-color: #fff;\n}\n.n3-btn-info {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5;\n}\n.n3-btn-info:hover,\n.n3-btn-info:focus,\n.n3-btn-info:active,\n.n3-btn-info.n3-btn-active {\n  color: #fff;\n  background-color: #43bcf3;\n  border-color: #43bcf3;\n}\n.n3-btn-info:active,\n.n3-btn-info.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-info .n3-badge {\n  color: #2db7f5;\n  background-color: #fff;\n}\n.n3-btn-warning {\n  color: #fff;\n  background-color: #fa0;\n  border-color: #fa0;\n}\n.n3-btn-warning:hover,\n.n3-btn-warning:focus,\n.n3-btn-warning:active,\n.n3-btn-warning.n3-btn-active {\n  color: #fff;\n  background-color: #f5b73b;\n  border-color: #f5b73b;\n}\n.n3-btn-warning:active,\n.n3-btn-warning.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-warning .n3-badge {\n  color: #fa0;\n  background-color: #fff;\n}\n.n3-btn-danger {\n  color: #fff;\n  background-color: #f50;\n  border-color: #f50;\n}\n.n3-btn-danger:hover,\n.n3-btn-danger:focus,\n.n3-btn-danger:active,\n.n3-btn-danger.n3-btn-active {\n  color: #fff;\n  background-color: #f9702b;\n  border-color: #f9702b;\n}\n.n3-btn-danger:active,\n.n3-btn-danger.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-danger .n3-badge {\n  color: #f50;\n  background-color: #fff;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-default {\n  color: #666;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-primary {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-success {\n  color: #fff;\n  background-color: #87d068;\n  border-color: #87d068;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-info {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-warning {\n  color: #fff;\n  background-color: #fa0;\n  border-color: #fa0;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-danger {\n  color: #fff;\n  background-color: #f50;\n  border-color: #f50;\n  background-image: none;\n}\n.n3-btn {\n  padding: 3px 10px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n}\n.n3-btn-lg,\n.n3-btn-group-lg > .n3-btn {\n  padding: 6px 14px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.n3-btn-sm,\n.n3-btn-group-sm > .n3-btn {\n  padding: 3px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.n3-btn-xs,\n.n3-btn-group-xs > .n3-btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.n3-btn-block {\n  display: block;\n  width: 100%;\n}\n.n3-btn-block + .n3-btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].n3-btn-block,\ninput[type=\"reset\"].n3-btn-block,\ninput[type=\"button\"].n3-btn-block {\n  width: 100%;\n}\n/*------------ btn-group -----------*/\n.n3-btn-group,\n.n3-btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.n3-btn-group > .n3-btn,\n.n3-btn-group-vertical > .n3-btn {\n  position: relative;\n  float: left;\n}\n.n3-btn-group > .n3-btn:hover,\n.n3-btn-group-vertical > .n3-btn:hover,\n.n3-btn-group > .n3-btn:focus,\n.n3-btn-group-vertical > .n3-btn:focus,\n.n3-btn-group > .n3-btn:active,\n.n3-btn-group-vertical > .n3-btn:active,\n.n3-btn-group > .n3-btn.n3-active,\n.n3-btn-group-vertical > .n3-btn.n3-active {\n  z-index: 2;\n}\n.n3-btn-group .n3-btn + .n3-btn,\n.n3-btn-group .n3-btn + .n3-btn-group,\n.n3-btn-group .n3-btn-group + .n3-btn,\n.n3-btn-group .n3-btn-group + .n3-btn-group {\n  margin-left: -1px;\n}\n.n3-btn-group > .n3-btn:not(:first-child):not(:last-child):not(.n3-dropdown-toggle) {\n  border-radius: 0;\n}\n.n3-btn-group > .n3-btn:first-child {\n  margin-left: 0;\n}\n.n3-btn-group > .n3-btn:first-child:not(:last-child):not(.n3-dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.n3-btn-group > .n3-btn:last-child:not(:first-child),\n.n3-btn-group > .n3-dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.n3-btn-group > .n3-btn-group {\n  float: left;\n}\n.n3-btn-group > .n3-btn-group:not(:first-child):not(:last-child) > .n3-btn {\n  border-radius: 0;\n}\n.n3-btn-group > .n3-btn-group:first-child:not(:last-child) > .n3-btn:last-child,\n.n3-btn-group > .n3-btn-group:first-child:not(:last-child) > .n3-dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.n3-btn-group > .n3-btn-group:last-child:not(:first-child) > .n3-btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.n3-btn-group .n3-dropdown-toggle:active,\n.n3-btn-group.n3-open .n3-dropdown-toggle {\n  outline: 0;\n}\n.n3-btn-group > .n3-btn + .n3-dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.n3-btn-group > .n3-btn-lg + .n3-dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.n3-btn-group.n3-open .n3-dropdown-toggle {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.n3-modal-open {\n  overflow-x: hidden;\n}\n.n3-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1080;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: all 0.3s ease;\n}\n.n3-modal-in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.n3-modal-zoom .n3-modal-dialog {\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.n3-modal-zoom.n3-modal-in .n3-modal-dialog {\n  transform: scale(1);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}\n.n3-modal-fade .n3-modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.n3-modal-in .n3-modal-dialog {\n  transform: translate(0, 0);\n}\n.n3-modal-open .n3-modal {\n  overflow-x: auto;\n}\n.n3-modal-hide-y {\n  overflow-y: hidden;\n}\n.n3-modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 30px auto;\n}\n.n3-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 6px;\n  outline: 0;\n  box-shadow: none;\n  border: none;\n}\n.n3-modal 7-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  background-color: #000;\n}\n.n3-modal-backdrop.n3-modal-fade {\n  opacity: 0;\n}\n.n3-modal-backdrop.n3-modal-in {\n  opacity: .5;\n}\n.n3-modal-header {\n  min-height: 16.42857143px;\n  padding: 15px;\n  background: #fff;\n  color: #666;\n  border-radius: 5px 5px 0 0;\n  border-bottom: 1px solid #eee;\n}\n.n3-modal-header .n3-close {\n  margin-top: 0px;\n}\n.n3-modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.n3-modal-body {\n  position: relative;\n  padding: 15px;\n}\n.n3-modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #eee;\n}\n.n3-modal-footer .n3-btn + .n3-btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.n3-modal-footer .n3-btn-group .n3-btn + .n3-btn {\n  margin-left: -1px;\n}\n.n3-modal-footer .n3-btn-block + .n3-btn-block {\n  margin-left: 0;\n}\n.n3-carousel {\n  position: relative;\n}\n.n3-carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.n3-carousel-inner > .n3-carousel-item {\n  position: relative;\n  display: none;\n  transition: 0.6s ease-in-out left;\n}\n.n3-carousel-inner > .n3-carousel-item > img,\n.n3-carousel-inner > .n3-carousel-item > a > img {\n  line-height: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.n3-carousel-inner > .n3-carousel-active,\n.n3-carousel-inner > .n3-carousel-next,\n.n3-carousel-inner > .n3-carousel-prev {\n  display: block;\n}\n.n3-carousel-inner > .n3-carousel-next,\n.n3-carousel-inner > .n3-carousel-prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.n3-carousel-inner > .n3-carousel-active,\n.n3-carousel-inner > .n3-carousel-next.n3-carousel-left,\n.n3-carousel-inner > .n3-carousel-prev.n3-carousel-right {\n  left: 0;\n  z-index: 1;\n}\n.n3-carousel-inner > .n3-carousel-prev,\n.n3-carousel-inner > .n3-carousel-active.n3-carousel-left {\n  left: -100%;\n  z-index: 2;\n}\n.n3-carousel-inner > .n3carousel--next,\n.n3-carousel-inner > .n3-carousel-active.n3-carousel-right {\n  left: 100%;\n  z-index: 2;\n}\n.n3-carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  opacity: .5;\n  z-index: 3;\n}\n.n3-carousel-control:hover {\n  cursor: pointer;\n}\n.n3-carousel-control.n3-carousel-left {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n}\n.n3-carousel-control.n3-carousel-right {\n  right: 0;\n  left: auto;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n}\n.n3-carousel-control:hover,\n.n3-carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: .9;\n}\n.n3-carousel-control .n3-fa-chevron-left,\n.n3-carousel-control .n3-fa-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n.n3-carousel-control .n3-fa-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.n3-carousel-control .n3-fa-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.n3-carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.n3-carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n  margin: 0px 5px;\n}\n.n3-carousel-indicators .n3-carousel-active {\n  background-color: #fff;\n}\n@media screen and (min-width: 768px) {\n  .n3-carousel-control .n3-fa-chevron-left,\n  .n3-carousel-control .n3-fa-chevron-right {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .n3-carousel-control .n3-fa-chevron-left {\n    margin-left: -15px;\n  }\n  .n3-carousel-control .n3-fa-chevron-right {\n    margin-right: -15px;\n  }\n  .n3-carousel-indicators {\n    bottom: 20px;\n  }\n}\n.n3-alert {\n  padding: 15px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  z-index: 1200;\n}\n.n3-alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.n3-alert > p,\n.n3-alert > ul {\n  margin-bottom: 0;\n}\n.n3-alert > p + p {\n  margin-top: 5px;\n}\n.n3-alert hr {\n  border-top-color: #eee;\n}\n.n3-alert-default {\n  color: #666;\n  background-color: #fff;\n  border: 1px solid #eee;\n}\n.n3-alert-default .n3-close {\n  color: #fff;\n}\n.n3-alert-success {\n  color: #666;\n  background-color: #f3faf0;\n  border: 1px solid #e7f6e1;\n}\n.n3-alert-success .n3-alert-icon {\n  color: #87d068;\n}\n.n3-alert-info {\n  color: #666;\n  background-color: #eaf8fe;\n  border: 1px solid #d5f1fd;\n}\n.n3-alert-info .n3-alert-icon {\n  color: #2db7f5;\n}\n.n3-alert-warning {\n  color: #666;\n  background-color: #fff7e6;\n  border: 1px solid #fec;\n}\n.n3-alert-warning .n3-alert-icon {\n  color: #fa0;\n}\n.n3-alert-danger {\n  color: #666;\n  background-color: #ffeee6;\n  border: 1px solid #fdc;\n}\n.n3-alert-danger .n3-alert-icon {\n  color: #f50;\n}\n.n3-alert-icon {\n  float: left;\n  font-size: 18px;\n  margin-right: 10px;\n}\n.n3-alert-content {\n  margin-left: 32px;\n}\n.n3-alert-small {\n  padding: 2px 14px;\n}\n.n3-alert-small .close {\n  font-size: 20px;\n  top: 0;\n}\n.n3-alert.n3-center {\n  position: fixed;\n  margin: 0 auto;\n  left: 50%;\n  top: 50%;\n}\n.n3-alert.n3-top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 50%;\n}\n.n3-alert.n3-bottom {\n  position: fixed;\n  bottom: 30px;\n  margin: 0 auto;\n  left: 50%;\n}\n.n3-alert.n3-top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n}\n.n3-alert.n3-top-left {\n  position: fixed;\n  top: 30px;\n  left: 50px;\n}\n.n3-alert.n3-bottom-right {\n  position: fixed;\n  bottom: 30px;\n  right: 50px;\n}\n.n3-alert.n3-bottom-left {\n  position: fixed;\n  bottom: 30px;\n  left: 50px;\n}\n.n3-alert-dismissable,\n.n3-alert-dismissible {\n  padding-right: 35px;\n}\n.n3-alert-dismissable .n3-close,\n.n3-alert-dismissible .n3-close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.n3-panel-body {\n  padding: 15px;\n}\n.n3-panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  background: transparent;\n}\n.n3-panel-heading > .n3-dropdown .n3-dropdown-toggle {\n  color: inherit;\n}\n.n3-panel-heading + .n3-list-group .n3-list-group-item:first-child {\n  border-top-width: 0;\n}\n.n3-panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 14px;\n  color: #666;\n  font-weight: 400;\n  font-family: 'Open Sans', sans-serif;\n}\n.n3-panel-title > a,\n.n3-panel-title > small,\n.n3-panel-title > .small,\n.n3-panel-title > small > a,\n.n3-panel-title > .small > a {\n  color: inherit;\n}\n.n3-panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.n3-panel > .n3-list-group,\n.n3-panel > .n3-panel-collapse > .n3-list-group {\n  margin-bottom: 0;\n}\n.n3-panel > .n3-list-group .n3-list-group-item,\n.n3-panel > .n3-panel-collapse > .n3-list-group .n3-list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.n3-panel > .n3-list-group:first-child .n3-list-group-item:first-child,\n.n3-panel > .n3-panel-collapse > .n3-list-group:first-child .n3-list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-list-group:last-child .n3-list-group-item:last-child,\n.n3-panel > .n3-panel-collapse > .n3-list-group:last-child .n3-list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table,\n.n3-panel > .n3-table-responsive > .n3-table,\n.n3-panel > .n3-panel-collapse > .n3-table {\n  margin-bottom: 0;\n}\n.n3-panel > .n3-table caption,\n.n3-panel > .n3-table-responsive > .n3-table caption,\n.n3-panel > .n3-panel-collapse > .n3-table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.n3-panel > .n3-table:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child th:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child th:first-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child th:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child th:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child th:last-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child th:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-table:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child th:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child th:first-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child th:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child th:last-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.n3-panel > .n3-panel-body + .n3-table,\n.n3-panel > .n3-panel-body + .n3-table-responsive,\n.n3-panel > .n3-table + .n3-panel-body,\n.n3-panel > .n3-table-responsive + .n3-panel-body {\n  border-top: 1px solid #eee;\n}\n.n3-panel > .n3-table > tbody:first-child > tr:first-child th,\n.n3-panel > .n3-table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.n3-panel > .n3-table-bordered,\n.n3-panel > .n3-table-responsive > .n3-table-bordered {\n  border: 0;\n}\n.n3-panel > .n3-table-bordered > thead > tr > th:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > th:first-child,\n.n3-panel > .n3-table-bordered > tbody > tr > th:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > th:first-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > th:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > th:first-child,\n.n3-panel > .n3-table-bordered > thead > tr > td:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > td:first-child,\n.n3-panel > .n3-table-bordered > tbody > tr > td:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > td:first-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > td:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.n3-panel > .n3-table-bordered > thead > tr > th:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > th:last-child,\n.n3-panel > .n3-table-bordered > tbody > tr > th:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > th:last-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > th:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > th:last-child,\n.n3-panel > .n3-table-bordered > thead > tr > td:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > td:last-child,\n.n3-panel > .n3-table-bordered > tbody > tr > td:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > td:last-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > td:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.n3-panel > .n3-table-bordered > thead > tr:first-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr:first-child > td,\n.n3-panel > .n3-table-bordered > tbody > tr:first-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:first-child > td,\n.n3-panel > .n3-table-bordered > thead > tr:first-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr:first-child > th,\n.n3-panel > .n3-table-bordered > tbody > tr:first-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.n3-panel > .n3-table-bordered > tbody > tr:last-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:last-child > td,\n.n3-panel > .n3-table-bordered > tfoot > tr:last-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr:last-child > td,\n.n3-panel > .n3-table-bordered > tbody > tr:last-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:last-child > th,\n.n3-panel > .n3-table-bordered > tfoot > tr:last-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.n3-panel > .n3-table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.n3-list-group + .n3-panel-footer {\n  border-top-width: 0;\n}\n.n3-panel-group {\n  margin-bottom: 20px;\n}\n.n3-panel-group .n3-panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.n3-panel-group .n3-panel + .n3-panel {\n  margin-top: 5px;\n}\n.n3-panel-group .n3-panel-heading {\n  border-bottom: 0;\n}\n.n3-panel-group .n3-panel-heading + .n3-panel-collapse > .n3-panel-body,\n.n3-panel-group .n3-panel-heading + .n3-panel-collapse > .n3-list-group {\n  border-top: 1px solid #eee;\n}\n.n3-panel-group .n3-panel-footer {\n  border-top: 0;\n}\n.n3-panel-group .n3-panel-footer + .n3-panel-collapse .n3-panel-body {\n  border-bottom: 1px solid #eee;\n}\n.n3-panel-default {\n  border-color: #eee;\n}\n.n3-panel-default > .n3-panel-heading {\n  background-color: #fff;\n  border-color: #eee;\n  color: #666;\n}\n.n3-panel-default > .n3-panel-heading + .n3-panel-collapse > .n3-panel-body {\n  border-top-color: #eee;\n}\n.n3-panel-default > .n3-panel-heading .n3-badge {\n  color: #f9f9f9;\n  background-color: #666;\n}\n.n3-panel-default > .n3-panel-footer + .n3-panel-collapse > .n3-panel-body {\n  border-bottom-color: #eee;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-webkit-keyframes loading-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@-moz-keyframes loading-spin {\n  from {\n    -moz-transform: rotate(0deg);\n  }\n  to {\n    -moz-transform: rotate(360deg);\n  }\n}\n@-ms-keyframes loading-spin {\n  from {\n    -ms-transform: rotate(0deg);\n  }\n  to {\n    -ms-transform: rotate(360deg);\n  }\n}\n@keyframes loading-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.n3-progress {\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: none;\n  background: #f9f9f9;\n}\n.n3-progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #2db7f5;\n  transition: width .6s ease;\n}\n.n3-progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.n3-progress-bar-animated {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.n3-progress-bar-success {\n  background-color: #87d068;\n}\n.n3-progress-bar-info {\n  background-color: #2db7f5;\n}\n.n3-progress-bar-warning {\n  background-color: #fa0;\n}\n.n3-progress-bar-danger {\n  background-color: #f50;\n}\n.n3-breadcrumb {\n  padding: 8px 0px;\n  list-style: none;\n  margin: 0px;\n}\n.n3-breadcrumb a {\n  color: #666;\n}\n.n3-breadcrumb > li {\n  display: inline-block;\n}\n.n3-breadcrumb > li:hover {\n  cursor: pointer;\n}\n.n3-breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\A0\";\n}\n.n3-breadcrumb > .n3-breadcrumb-active {\n  color: #2db7f5;\n}\n.n3-nav {\n  padding-left: 0;\n  margin: 0;\n  list-style: none;\n}\n.n3-nav li {\n  position: relative;\n  display: block;\n}\n.n3-nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  transition: all .3s ease;\n}\n.n3-nav > li > a:hover,\n.n3-nav > li > a:focus {\n  color: #666;\n  text-decoration: none;\n  background: rgba(87, 197, 247, 0.15);\n}\n.n3-nav > li.n3-nav-disabled > a {\n  color: #999;\n}\n.n3-nav > li.n3-nav-tabs-disabled > a:hover,\n.n3-nav > li.n3-nav-tabs-disabled > a:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.n3-nav > li > a > img {\n  max-width: none;\n}\n.n3-nav-tabs {\n  border-bottom: 1px solid #eee;\n}\n.n3-nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.n3-nav-tabs > li > a {\n  margin-right: 1px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.n3-nav-tabs > li > a:hover {\n  border-color: #f9f9f9 #f9f9f9 #eee;\n}\n.n3-nav-tabs > li.n3-nav-tabs-active > a,\n.n3-nav-tabs > li.n3-nav-tabs-active > a:hover,\n.n3-nav-tabs > li.n3-nav-tabs-active > a:focus {\n  color: #666;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-bottom-color: transparent;\n}\n.n3-nav-tabs-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.n3-nav-tabs-justified > li {\n  float: none!important;\n}\n.n3-nav-tabs-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n  margin-right: 0;\n  border-radius: 4px;\n}\n.n3-nav-tabs-justified li:last-child > a:hover,\n.n3-nav-tabs-justified li.n3-nav-tabsactive:last-child > a {\n  border-radius: 0 4px 0 0 !important;\n}\n.n3-nav-tabs-justified > .n3-dropdown .n3-dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .n3-nav-tabs-justified {\n    border-bottom: 0;\n  }\n  .n3-nav-tabs-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .n3-nav-tabs-justified > li > a {\n    margin-bottom: 0;\n    margin-right: 0;\n    border-bottom: 1px solid #eee;\n    border-radius: 4px 4px 0 0;\n  }\n  .n3-nav-tabs-justified > .n3-nav-tabs-active > a,\n  .n3-nav-tabs-justified > .n3-nav-tabs-active > a:hover,\n  .n3-nav-tabs-justified > .n3-nav-tabs-active > a:focus {\n    border: 1px solid #eee;\n    border-bottom-color: #fff;\n  }\n}\n.n3-nav-tabs-pills > li {\n  float: left;\n}\n.n3-nav-tabs-pills > li > a {\n  border-radius: 4px;\n}\n.n3-nav-tabs-pills > li + li {\n  margin-left: 2px;\n}\n.n3-nav-tabs-pills > li.n3-nav-tabs-active > a,\n.n3-nav-tabs-pills > li.n3-nav-tabs-active > a:hover,\n.n3-nav-tabs-pills > li.n3-nav-tabs-active > a:focus {\n  color: #fff;\n  background-color: #2db7f5;\n}\n.n3-nav-tabs-stacked > li {\n  float: none;\n}\n.n3-nav-tabs-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.n3-tab-content > .n3-tab-pane {\n  display: block;\n  visibility: visible !important;\n}\n.n3-tab-content .n3-nav-tabs-active {\n  display: block;\n  visibility: visible;\n}\n.n3-nav-tabs .n3-dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.n3-nav-tabs-primary {\n  border-bottom: 2px solid #2db7f5;\n}\n.n3-nav-tabs-primary li {\n  margin-bottom: 0;\n}\n.n3-nav-tabs-primary .n3-nav-tabs-active > a,\n.n3-nav-tabs-primary .n3-nav-tabs-active > a:hover,\n.n3-nav-tabs-primary .n3-nav-tabs-active > a:focus {\n  background: #2db7f5;\n  border-color: #2db7f5 !important;\n  color: white;\n  border-bottom: 0;\n}\n.n3-nav-tabs-primary.n3-nav-tabs-stacked {\n  border-bottom: 0;\n  border-right: 2px solid #2db7f5;\n}\n.n3-nav-tabs-primary.n3-nav-tabs-stacked > li > a {\n  border-radius: 2px 0 0 2px;\n  margin-right: 0;\n}\n.n3-tree-active {\n  color: #2db7f5;\n}\n.n3-tree-node-data {\n  padding: 0px 0 0px 18px;\n}\n.n3-tree-meta-data {\n  margin: 10px 0px 0px;\n  display: block;\n  font-size: 13px;\n}\n.n3-tree-select-icon {\n  color: #666;\n  margin-left: 5px;\n}\n.n3-tree-select-box {\n  margin-left: 5px;\n}\n.n3-tree-loading-box {\n  border-radius: 4px;\n  padding: 0px 5px;\n}\n.n3-tree-loading-box:hover {\n  cursor: pointer;\n  background: rgba(87, 197, 247, 0.15);\n}\n.n3-navbar-collapse {\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.n3-navbar-nav > li:hover {\n  cursor: pointer;\n}\n.n3-navbar-nav > li > a,\n.n3-navbar-nav .n3-sub-nav-trigger {\n  padding: 15px 20px;\n  line-height: 20px;\n  border-bottom: 2px solid transparent;\n}\n.n3-navbar-nav > li .n3-dropdown-menu {\n  top: 96%!important;\n}\n.n3-navbar-nav {\n  margin: 0;\n}\n.n3-navbar-vertical .n3-navbar-nav > li > a,\n.n3-navbar-vertical .n3-navbar-nav .n3-sub-nav-trigger {\n  padding: 10px 20px;\n}\n.n3-navbar-vertical .n3-navbar-nav {\n  float: none;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con {\n  width: 100%;\n  position: relative;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con .n3-sub-nav-trigger:hover {\n  background: rgba(87, 197, 247, 0.15);\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con .n3-sub-nav-fa {\n  float: right;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu {\n  position: relative;\n  width: 100%;\n  box-shadow: none;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu > li {\n  padding: 5px 15px;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu > li:hover {\n  background: rgba(87, 197, 247, 0.15);\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu > li > a:hover {\n  background: transparent;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active {\n  border-left: 2px solid #2db7f5;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active a,\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active a:hover,\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active a:focus {\n  color: #2db7f5;\n}\n.n3-navbar-vertical .n3-navbar-nav > li {\n  float: none;\n}\n.n3-navbar-horizontal .n3-navbar-nav {\n  float: left;\n}\n.n3-navbar-horizontal .n3-navbar-nav > li {\n  float: left;\n}\n.n3-navbar-horizontal .n3-navbar-nav .n3-dropdown-con:hover {\n  background-color: rgba(87, 197, 247, 0.15);\n}\n.n3-navbar-horizontal .n3-navbar-active a,\n.n3-navbar-horizontal .n3-navbar-active a:hover,\n.n3-navbar-horizontal .n3-navbar-active a:focus {\n  color: #2db7f5;\n  border-bottom: 2px solid #2db7f5;\n}\n.n3-navbar-default {\n  background-color: transparent;\n}\n.n3-navbar-default .n3-navbar-nav > li > a:hover,\n.n3-navbar-default .n3-navbar-nav > li > a:focus {\n  color: #2db7f5;\n  background-color: rgba(87, 197, 247, 0.15);\n}\n.n3-navbar-default .n3-navbar-nav .n3-navbar-disabled a,\n.n3-navbar-default .n3-navbar-nav .n3-navbar-disabled a:hover,\n.n3-navbar-default .n3-navbar-nav .n3-navbar-disabled a:focus {\n  color: #eee;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.n3-navbar-dark {\n  background-color: #333;\n}\n.n3-navbar-dark .n3-navbar-nav > li .n3-sub-nav-fa {\n  color: #fff;\n}\n.n3-navbar-dark .n3-navbar-nav > li a {\n  color: #fff;\n}\n.n3-navbar-dark .n3-navbar-nav > li a:hover,\n.n3-navbar-dark .n3-navbar-nav > li a:focus {\n  background-color: rgba(87, 197, 247, 0.15);\n}\n.n3-navbar-dark .n3-navbar-nav .n3-dropdown-menu {\n  background-color: #333;\n}\n.n3-navbar-dark .n3-navbar-nav .n3-navbar-disabled a,\n.n3-navbar-dark .n3-navbar-nav .n3-navbar-disabled a:hover,\n.n3-navbar-dark .n3-navbar-nav .n3-navbar-disabled a:focus {\n  color: #999;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.n3-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  background-color: #999;\n  border-radius: 10px;\n}\n.n3-btn .n3-badge {\n  position: relative;\n  top: -1px;\n}\n.n3-btn-xs .n3-badge {\n  top: 0;\n  padding: 1px 5px;\n}\n.n3-nav-pills > .n3-active > a > .n3-badge {\n  color: #2db7f5;\n  background-color: #fff;\n}\n.n3-nav-pills > li > a > .n3-badge {\n  margin-left: 3px;\n}\n.n3-close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2;\n  outline: none;\n}\n.n3-close:hover,\n.n3-close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .5;\n}\nbutton.n3-close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.n3-upload {\n  display: inline-block;\n}\n.n3-upload input[type=\"file\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n  outline: none;\n}\n.n3-upload-item-info {\n  position: relative;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 4px;\n  transition: background-color 0.3s ease;\n  zoom: 1;\n}\n.n3-upload-drag-area {\n  outline: none;\n}\n.n3-upload-drag-area span {\n  color: #666;\n  font-size: 14px;\n}\n.n3-upload-drag-icon {\n  position: absolute;\n  color: #2db7f5;\n  top: 50%;\n  left: 50%;\n  margin-top: -10px;\n  margin-left: -30px;\n  font-size: 60px;\n}\n.n3-upload-file-icon {\n  margin-right: 4px;\n  color: #999;\n}\n.n3-upload-file-name {\n  padding-right: 20px;\n}\n.n3-upload-del-info {\n  position: absolute;\n  right: 5px;\n  top: 0;\n  color: #999;\n  line-height: 25px;\n  cursor: pointer;\n}\n.n3-upload-item-progress {\n  padding: 0px;\n  margin: 5px;\n  font-size: 12px;\n}\n.n3-upload-item-progress .n3-upload-hide {\n  display: none;\n}\n.n3-upload-progress {\n  display: inline-block;\n}\n.n3-upload-progress-line {\n  position: relative;\n  width: 100%;\n  font-size: 12px;\n  zoom: 1;\n}\n.n3-upload-progress-inner {\n  width: 100%;\n  background-color: #f9f9f9;\n  vertical-align: middle;\n}\n.n3-upload-progress-bg {\n  height: 3px;\n  background-color: #2db7f5;\n  -webkit-transition: all .3s linear 0s;\n  transition: all .3s linear 0s;\n  border-radius: 100px;\n}\n.n3-upload-progress-status-success .at-progress-bg {\n  background-color: #87d068;\n}\n.n3-upload-drag-container {\n  position: relative;\n  padding: 20px 0;\n  cursor: pointer;\n  border: 1px dashed #ccc;\n  border-radius: 6px;\n  text-align: center;\n  transition: border-color 0.3s ease;\n}\n.n3-upload-drag-container.n3-upload-is-dragover {\n  border-color: #2db7f5;\n}\n.n3-upload-drag-container:hover {\n  border-color: #999;\n  background: #f9f9f9;\n}\n.n3-card {\n  background: #fff;\n  box-shadow: 1px 1px 5px #eee;\n  transition: box-shadow 0.3s ease;\n}\n.n3-card-hover:hover {\n  box-shadow: 1px 1px 10px #eee;\n}\n.n3-input-number {\n  display: inline-block;\n  position: relative;\n}\n.n3-input-number .n3-form-control {\n  padding-right: 30px;\n}\n.n3-input-number-handler {\n  text-align: center;\n  line-height: 0;\n  height: 12px;\n  overflow: hidden;\n  color: #666;\n  position: relative;\n  transition: all 0.1s linear;\n  display: block;\n  width: 100%;\n}\n.n3-input-number-handler:hover .n3-input-number-handler-up-inner,\n.n3-input-number-handler:hover .n3-input-number-handler-down-inner {\n  color: #2db7f5;\n}\n.n3-input-number-handler-up-inner,\n.n3-input-number-handler-down-inner {\n  line-height: 12px;\n  user-select: none;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  transition: all 0.1s linear;\n  right: 4px;\n  color: #666;\n}\n.n3-input-number-handler-wrap {\n  border-left: 1px solid #eee;\n  width: 22px;\n  height: 24px;\n  background: #fff;\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  z-index: 3;\n  opacity: 0;\n  transition: opacity 0.24s linear 0.1s;\n}\n.n3-input-number:hover .n3-input-number-handler-wrap {\n  opacity: 1;\n}\n.n3-input-number-handler-up {\n  cursor: pointer;\n}\n.n3-input-number-handler-up-inner {\n  top: 1px;\n}\n.n3-input-number-handler-up-inner:before {\n  text-align: center;\n}\n.n3-input-number-handler-up:hover {\n  height: 16px;\n}\n.n3-input-number-handler-up:hover .n3-input-number-handler-up-inner {\n  margin-top: 2px;\n}\n.n3-input-number-handler-down {\n  border-top: 1px solid #eee;\n  top: -1px;\n  cursor: pointer;\n}\n.n3-input-number-handler-down-inner:before {\n  text-align: center;\n}\n.n3-input-number-handler-down:hover {\n  height: 16px;\n  margin-top: -2px;\n}\n.n3-input-number-handler-down-disabled .n3-input-number-handler-down-inner,\n.n3-input-number-handler-up-disabled .n3-input-number-handler-down-inner,\n.n3-input-number-disabled .n3-input-number-handler-down-inner,\n.n3-input-number-readonly .n3-input-number-handler-down-inner,\n.n3-input-number-handler-down-disabled .n3-input-number-handler-up-inner,\n.n3-input-number-handler-up-disabled .n3-input-number-handler-up-inner,\n.n3-input-number-disabled .n3-input-number-handler-up-inner,\n.n3-input-number-readonly .n3-input-number-handler-up-inner {\n  cursor: not-allowed;\n}\n.n3-input-number-disabled .n3-input-number-handler-wrap,\n.n3-input-number-readonly .n3-input-number-handler-wrap {\n  display: none;\n}\n.n3-input-number-disabled .n3-input-number-handler,\n.n3-input-number-readonly .n3-input-number-handler {\n  cursor: not-allowed;\n}\nhtml {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #666;\n  -webkit-font-smoothing: antialiased;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n  color: #2db7f5;\n  text-decoration: none;\n}\na:active,\na:hover {\n  outline: 0;\n  color: #57c5f7;\n  text-decoration: none;\n}\na:hover {\n  cursor: pointer;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  background: rgba(87, 197, 247, 0.15);\n  padding: .2em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  box-sizing: content-box;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #f9f9f9;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #666;\n  border: 0;\n  border-bottom: 1px solid #eee;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\nul {\n  margin: 0px;\n  padding-left: 0px;\n}\n* {\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small {\n  font-weight: normal;\n  line-height: 1;\n  color: #999;\n}\nh1,\nh2,\nh3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\nh2 small,\nh3 small {\n  font-size: 65%;\n}\nh4,\nh5,\nh6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\nh5 small,\nh6 small {\n  font-size: 75%;\n}\nh1 {\n  font-size: 36px;\n}\nh2 {\n  font-size: 30px;\n}\nh3 {\n  font-size: 24px;\n}\nh4 {\n  font-size: 18px;\n}\nh5 {\n  font-size: 14px;\n}\nh6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #999;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #f9f9f9;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #999;\n}\nblockquote footer:before,\nblockquote small:before {\n  content: '\\2014   \\A0';\n}\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #f9f9f9;\n  border-left: 0;\n}\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before {\n  content: '';\n}\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #666;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #666;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 6px 8px;\n  padding-bottom: 6px 8px;\n  color: #999;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n.affix {\n  position: fixed;\n}\n.inline {\n  display: inline-block;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #ccc;\n}\n.text-primary {\n  color: #2db7f5;\n}\na.text-primary:hover {\n  color: #57c5f7;\n}\n.text-success {\n  color: #87d068;\n}\na.text-success:hover {\n  color: #91d873;\n}\n.text-info {\n  color: #2db7f5;\n}\na.text-info:hover {\n  color: #43bcf3;\n}\n.text-warning {\n  color: #fa0;\n}\na.text-warning:hover {\n  color: #f5b73b;\n}\n.text-danger {\n  color: #f50;\n}\na.text-danger:hover {\n  color: #f9702b;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #2db7f5;\n}\na.bg-primary:hover {\n  background-color: #57c5f7;\n}\n.bg-success {\n  background-color: #87d068;\n}\na.bg-success:hover {\n  background-color: #91d873;\n}\n.bg-info {\n  background-color: #2db7f5;\n}\na.bg-info:hover {\n  background-color: #43bcf3;\n}\n.bg-warning {\n  background-color: #fa0;\n}\na.bg-warning:hover {\n  background-color: #f5b73b;\n}\n.bg-danger {\n  background-color: #f50;\n}\na.bg-danger:hover {\n  background-color: #f9702b;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=blue.js.map
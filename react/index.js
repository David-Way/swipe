/*!
 * React Swipe 2.2.11
 *
 * Felix Liu
 * Copyright 2016 - 2017, MIT License
 *
*/
"use strict";function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function proxyMethods(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];b.map(function(a){Swipe.prototype[a]=function(){if(this.instance)return this.instance[a].apply(this.instance,arguments)}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SwipeItem=exports.Swipe=void 0;var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactDom=require("react-dom"),_reactDom2=_interopRequireDefault(_reactDom),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_swipejs=require("swipejs"),_swipejs2=_interopRequireDefault(_swipejs),noop=function(){},Swipe=function(a){function Swipe(a){_classCallCheck(this,Swipe);var b=_possibleConstructorReturn(this,(Swipe.__proto__||Object.getPrototypeOf(Swipe)).call(this,a));return b.state={},b.needsReSetup=!1,b._isMount=!1,b.instance=null,b}return _inherits(Swipe,a),_createClass(Swipe,[{key:"componentWillReceiveProps",value:function(a){(a.children||[]).length!==(this.props.children||[]).length&&(this.needsReSetup=!0)}},{key:"componentDidUpdate",value:function(){this._isMount&&this.needsReSetup&&(this.setupSwipe(),this.needsReSetup=!1)}},{key:"componentDidMount",value:function(){this._isMount=!0,this.setupSwipe()}},{key:"swipeOptions",value:function(){var a=this.props;return{startSlide:a.startSlide,speed:a.speed,auto:a.auto,draggable:a.draggable,continuous:a.continuous,autoRestart:a.autoRestart,disableScroll:a.disableScroll,stopPropagation:a.stopPropagation,callback:a.callback,transitioning:a.transitioning,transitionEnd:a.transitionEnd}}},{key:"setupSwipe",value:function(){if(this.swipeContainer){var a=this.swipeOptions();this.instance?(this.instance.setup(a),a.auto&&this.instance.restart()):this.instance=new _swipejs2.default(this.swipeContainer,a)}}},{key:"componentWillUnmount",value:function(){this._isMount=!1;try{this.instance.kill()}catch(a){}}},{key:"cloneSwipeItem",value:function(a){var b=Object.assign({},a.props);return b=Object.assign(b,{ref:function(a){var b=_reactDom2.default.findDOMNode(a);b&&b.setAttribute("data-cloned",!0)},key:String(Math.random()).valueOf()}),delete b.id,_react2.default.createElement(SwipeItem,b,a.props.children)}},{key:"render",value:function(){var a=this,b=this.props,c=b.className,d=b.style,e=b.continuous,f=void 0;return e?(f=[].concat(this.props.children),2===f.length&&(f.push(this.cloneSwipeItem(f[0])),f.push(this.cloneSwipeItem(f[1])))):f=this.props.children,_react2.default.createElement("div",{ref:function(b){return a.swipeContainer=b},className:"swipe "+(c||""),style:d},_react2.default.createElement("div",{className:"swipe-wrap"},f))}}]),Swipe}(_react2.default.Component),SwipeItem=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={},c}return _inherits(b,a),_createClass(b,null,[{key:"propTypes",get:function(){return{className:_propTypes2.default.string,onClick:_propTypes2.default.func,style:_propTypes2.default.object}}},{key:"defaultProps",get:function(){return{className:"",onClick:noop,style:{}}}}]),_createClass(b,[{key:"render",value:function(){var a=this.props,b=a.className,c=a.onClick,d=a.style,e=a.children;return _react2.default.createElement("div",{className:"swipe-item "+(b||""),onClick:c,style:d},e)}}]),b}(_react2.default.Component);Swipe.defaultProps={className:"",style:{},startSlide:0,speed:300,auto:3e3,draggable:!1,continuous:!1,autoRestart:!1,disableScroll:!1,stopPropagation:!1,callback:noop,transitioning:noop,transitionEnd:noop},Swipe.propTypes={className:_propTypes2.default.string,style:_propTypes2.default.object,startSlide:_propTypes2.default.number,speed:_propTypes2.default.number,auto:_propTypes2.default.number,draggable:_propTypes2.default.bool,continuous:_propTypes2.default.bool,autoRestart:_propTypes2.default.bool,disableScroll:_propTypes2.default.bool,stopPropagation:_propTypes2.default.bool,callback:_propTypes2.default.func,transitioning:_propTypes2.default.func,transitionEnd:_propTypes2.default.func},proxyMethods("prev","next","getPos","getNumSlides","slide","restart","stop","setup","disable","enable","kill"),exports.default=Swipe,exports.Swipe=Swipe,exports.SwipeItem=SwipeItem;
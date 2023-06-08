"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalSplitScreen = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    height: 100wh;\n    overflow: hidden;\n"])));
var Section = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    flex: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])), function (props) {
  return props.weight;
});
var PageSection = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    flex: ", ";\n    display: flex;\n    overflow: hidden;\n"])), function (props) {
  return props.weight;
});
var VerticalSplitScreen = function VerticalSplitScreen(_ref) {
  var children = _ref.children,
    _ref$headerWeight = _ref.headerWeight,
    headerWeight = _ref$headerWeight === void 0 ? 1 : _ref$headerWeight,
    _ref$pageWrapperWeigh = _ref.pageWrapperWeight,
    pageWrapperWeight = _ref$pageWrapperWeigh === void 0 ? 1 : _ref$pageWrapperWeigh,
    _ref$navigationMenuWe = _ref.navigationMenuWeight,
    navigationMenuWeight = _ref$navigationMenuWe === void 0 ? 1 : _ref$navigationMenuWe;
  var _children = _slicedToArray(children, 3),
    header = _children[0],
    pageWrapper = _children[1],
    navigationMenu = _children[2];
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Section, {
    weight: headerWeight
  }, header), /*#__PURE__*/React.createElement(PageSection, {
    weight: pageWrapperWeight
  }, pageWrapper), /*#__PURE__*/React.createElement(Section, {
    weight: navigationMenuWeight
  }, navigationMenu));
};
exports.VerticalSplitScreen = VerticalSplitScreen;
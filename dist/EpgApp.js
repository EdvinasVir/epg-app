"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EpgApp = void 0;
var _VerticalSplitScreen = require("./VerticalSplitScreen");
var _react = require("react");
var _NavigationMenu = require("./NavigationMenu");
var _ProgramGuidePage = require("./ProgramGuidePage");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: transparent;\n    border: none !important;\n    color: #8ecccc;\n    font-size: 3vh; // adjust this as needed\n"])));
var StyledLogo = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: transparent;\n    border: none !important;\n    color: #8ecccc;\n"])));
var HeaderContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: space-around;\n    background-color: #212121;\n"])));
var Header = function Header() {
  return /*#__PURE__*/React.createElement(HeaderContainer, null, /*#__PURE__*/React.createElement(StyledButton, null, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faUser,
    size: "2x"
  }), ' '), /*#__PURE__*/React.createElement(StyledLogo, null, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCircle,
    size: "2x"
  }), ' '), /*#__PURE__*/React.createElement(StyledButton, null, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSearch,
    size: "2x"
  }), ' '));
};
var HomePage = function HomePage() {
  return /*#__PURE__*/React.createElement("div", null, "HomePage");
};
var LivePage = function LivePage() {
  return /*#__PURE__*/React.createElement("div", null, "LivePage");
};
var CatchUpPage = function CatchUpPage() {
  return /*#__PURE__*/React.createElement("div", null, "CatchUpPage");
};
var LearnMorePage = function LearnMorePage() {
  return /*#__PURE__*/React.createElement("div", null, "LearnMorePage");
};
var pageComponents = {
  1: HomePage,
  2: LivePage,
  3: _ProgramGuidePage.ProgramGuidePage,
  4: CatchUpPage,
  5: LearnMorePage
};
var EpgApp = function EpgApp() {
  var _useState = (0, _react.useState)(3),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var PageComponent = pageComponents[page];
  return /*#__PURE__*/React.createElement(_VerticalSplitScreen.VerticalSplitScreen, {
    headerWeight: 1,
    pageWrapperWeight: 12,
    navigationMenuWeight: 1
  }, /*#__PURE__*/React.createElement(Header, null), PageComponent && /*#__PURE__*/React.createElement(PageComponent, null), /*#__PURE__*/React.createElement(_NavigationMenu.NavigationMenu, {
    setPage: setPage
  }));
};
exports.EpgApp = EpgApp;
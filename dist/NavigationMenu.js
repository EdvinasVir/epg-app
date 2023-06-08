"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationMenu = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var NavigationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: space-around;\n    background-color: #212121;\n"])));
var StyledButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: transparent;\n    border: none !important;\n    color: #8ecccc;\n    font-size: 3vh; // adjust this as needed\n"])));
var NavigationMenu = function NavigationMenu(_ref) {
  var setPage = _ref.setPage;
  return /*#__PURE__*/React.createElement(NavigationContainer, null, /*#__PURE__*/React.createElement(StyledButton, {
    onClick: function onClick() {
      return setPage(1);
    }
  }, ' ', /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faHome,
    size: "2x"
  }), ' '), /*#__PURE__*/React.createElement(StyledButton, {
    onClick: function onClick() {
      return setPage(2);
    }
  }, ' ', /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTelevision,
    size: "2x"
  }), ' '), /*#__PURE__*/React.createElement(StyledButton, {
    onClick: function onClick() {
      return setPage(3);
    }
  }, ' ', /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faList,
    size: "2x"
  }), ' '), /*#__PURE__*/React.createElement(StyledButton, {
    onClick: function onClick() {
      return setPage(4);
    }
  }, ' ', /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faUndo,
    size: "2x"
  }), ' '), /*#__PURE__*/React.createElement(StyledButton, {
    onClick: function onClick() {
      return setPage(5);
    }
  }, ' ', /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faLevelUp,
    size: "2x"
  }), ' '));
};
exports.NavigationMenu = NavigationMenu;
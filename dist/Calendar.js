"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CalendarItem = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));
var StyledButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: transparent;\n    border: none !important;\n    color: #8ecccc;\n"])));
var Calendar = function Calendar(_ref) {
  var dates = _ref.dates;
  var datesIterable = dates.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(CalendarItem, {
      key: index
    }, /*#__PURE__*/_react.default.createElement(StyledButton, null, /*#__PURE__*/_react.default.createElement("h3", null, item)));
  });
  return /*#__PURE__*/_react.default.createElement("div", null, datesIterable);
};
exports.Calendar = Calendar;
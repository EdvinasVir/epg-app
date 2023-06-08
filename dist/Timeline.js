"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TimelineContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    color: #8ecccc;\n    background-color: #3a4042;\n    padding-top: 3vh;\n    border-top: 1px solid rgb(41, 74, 102);\n    padding-right: 5vw;\n"])));
var EmptySpace = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 1;\n    box-sizing: border-box;\n    width: 8vw;\n"])));
var HourContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: center;\n"])));
var HourMarker = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: sticky;\n    width: ", "vw;\n"])), 4.16667 * 10);
var Timeline = function Timeline() {
  var hours = Array.from({
    length: 24
  }, function (_, i) {
    return i;
  });
  return /*#__PURE__*/_react.default.createElement(TimelineContainer, null, /*#__PURE__*/_react.default.createElement(EmptySpace, null), hours.map(function (hour) {
    return /*#__PURE__*/_react.default.createElement(HourContainer, {
      key: hour
    }, /*#__PURE__*/_react.default.createElement(HourMarker, null, hour < 10 ? '0' + hour : hour, ":00"));
  }));
};
exports.Timeline = Timeline;
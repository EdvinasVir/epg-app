"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _App = require("./App");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('renders learn react link', function () {
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.App, null));
  var linkElement = _react2.screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
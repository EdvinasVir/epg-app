"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.getUniqueDates = exports.Schedule = exports.EpgTimetable = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var getUniqueDates = function getUniqueDates(epgData) {
  var dateSet = new Set();
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  var _iterator = _createForOfIteratorHelper(epgData),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var channel = _step.value;
      var _iterator2 = _createForOfIteratorHelper(channel.schedules),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var program = _step2.value;
          var startDate = new Date(program.start);
          var formattedDate = startDate.toLocaleDateString(undefined, options);
          dateSet.add(formattedDate);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return Array.from(dateSet);
};
exports.getUniqueDates = getUniqueDates;
var Schedule = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      "\n    position: absolute;\n    border: 1px solid rgb(58, 64, 66);\n    border-radius: 5px;\n    height: 20vh;\n    background-color: #294a66;\n    left: ",
      "vw;\n    width: ",
      "vw;\n    word-wrap: break-word;\n    text-align: center;\n",
    ])),
  function (props) {
    return props.left;
  },
  function (props) {
    return props.width;
  }
);
exports.Schedule = Schedule;
var Station = _styledComponents.default.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 20vh;\n    width: 8vw;\n    background-color: #3a4042;\n    border-bottom: 1px solid rgb(41, 74, 102);\n    border-right: 1px solid rgb(41, 74, 102);\n",
    ]))
);
var SchedulesContainer = _styledComponents.default.div(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteral([
      "\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n",
    ]))
);
var StationRow = _styledComponents.default.div(
  _templateObject4 ||
    (_templateObject4 = _taggedTemplateLiteral([
      "\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    color: #8ecccc;\n",
    ]))
);
var format24Hour = function format24Hour(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
  var timeStr = hours + ":" + minutesStr;
  return timeStr;
};
var getLeftVw = function getLeftVw(startDate) {
  var totalMinutes = startDate.getHours() * 60 + startDate.getMinutes();
  return (totalMinutes / 60) * 4.16667 * 10;
};
var getWidthVw = function getWidthVw(startDate, endDate) {
  var totalStartMinutes = startDate.getHours() * 60 + startDate.getMinutes();
  var totalEndMinutes = endDate.getHours() * 60 + endDate.getMinutes();
  return ((totalEndMinutes - totalStartMinutes) / 60) * 4.16667 * 10;
};
var EpgTimetable = function EpgTimetable(_ref) {
  var stationsSchedules = _ref.stationsSchedules;
  var stationsIterable = stationsSchedules.map(function (item, index) {
    return /*#__PURE__*/ _react.default.createElement(
      StationRow,
      {
        key: index,
      },
      /*#__PURE__*/ _react.default.createElement(
        Station,
        null,
        /*#__PURE__*/ _react.default.createElement("h3", null, item.title)
      ),
      /*#__PURE__*/ _react.default.createElement(
        SchedulesContainer,
        null,
        item.schedules.map(function (schedule, scheduleIndex) {
          return /*#__PURE__*/ _react.default.createElement(
            Schedule,
            {
              left: getLeftVw(new Date(schedule.start)),
              width: getWidthVw(
                new Date(schedule.start),
                new Date(schedule.end)
              ),
              key: scheduleIndex,
            },
            schedule.title,
            " ",
            /*#__PURE__*/ _react.default.createElement("span", null),
            " ",
            /*#__PURE__*/ _react.default.createElement("br", null),
            format24Hour(new Date(schedule.start)),
            " -",
            format24Hour(new Date(schedule.end))
          );
        })
      )
    );
  });
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    null,
    stationsIterable
  );
};
exports.EpgTimetable = EpgTimetable;

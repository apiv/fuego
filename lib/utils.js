'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareRender = exports.renderList = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {constructor} Component - the component to render.
 * @param {number}      length    - the number of instances to render.
 * @param {func|object} props     - object or function which returns an object.
 * @returns {Array<node>}
 */
function renderList(Component, length, props) {
  return new Array(length).fill('').map(function (t, index) {
    var passedProps = typeof props === 'function' ? props(index) : props || {};

    // clone the object so that multiple instances are not sharing the same
    // ref to the props object (causes `key` error).
    passedProps = (0, _extends3.default)({}, passedProps);

    // let's avoid the annoying `key` prop warning
    if (typeof passedProps.key === 'undefined') {
      passedProps.key = 'Test-' + index + '-' + btoa(Math.random());
    }

    return _react2.default.createElement(Component, passedProps || {});
  });
}

/**
 * Orders the list of results by their render time
 * @param {object} a
 * @param {object} b
 */
function compareRender(a, b) {
  var aTime = a.inclusive[1].inclusiveRenderDuration;
  var bTime = b.inclusive[1].inclusiveRenderDuration;
  if (aTime > bTime) {
    return 1;
  } else if (aTime < bTime) {
    return -1;
  } else if (aTime === bTime) {
    return 0;
  }
}

exports.renderList = renderList;
exports.compareRender = compareRender;
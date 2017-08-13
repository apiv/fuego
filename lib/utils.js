'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderList = undefined;

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
  return new Array(length).fill(true).map(function (t, index) {
    var passedProps = typeof props === 'function' ? props(index) : props || {};

    // let's avoid the annoying `key` prop warning
    if (typeof passedProps.key === 'undefined') {
      passedProps.key = 'Test-' + index;
    }

    return _react2.default.createElement(Component, passedProps || {});
  });
}

exports.renderList = renderList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

    return React.createElement(Component, passedProps || {});
  });
}

exports.renderList = renderList;
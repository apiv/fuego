'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = function MyComponent(_ref) {
  var test = _ref.test;

  return _react2.default.createElement(
    'div',
    null,
    test
  );
};

var renderComponent = function renderComponent(props) {
  return (0, _testUtils.renderIntoDocument)(_react2.default.createElement(_index.Test, props));
};

describe('Test', function () {
  describe('prop: onBenchmarkStart', function () {
    it('is called when benchmarking begins', function (done) {
      var props = {
        active: true,
        children: _index2.default.renderList(MyComponent, 100, {}),
        onBenchmarkStart: done
      };
      (0, _testUtils.renderIntoDocument)(_react2.default.createElement(_index.Test, props));
    });
  });
  describe('prop: onBenchmarkStop', function () {
    it('is called when benchmarking ends', function (done) {
      var props = {
        active: true,
        children: _index2.default.renderList(MyComponent, 100, {}),
        onBenchmarkStop: function onBenchmarkStop(results) {
          expect(results).toBeTruthy();
          done();
        }
      };
      (0, _testUtils.renderIntoDocument)(_react2.default.createElement(_index.Test, props));
    });
  });

  // it('returns inclusive render times on initial render', () => {
  //   const props = {
  //     onBenchmarkStop: (props, results) => {
  //       console.log(results.inclusive)
  //       console.log(results.exclusive)
  //       console.log(results.wasted)
  //     },
  //     active: true,
  //     children: Fuego.renderList(MyComponent, 100, { test: 'lol' })
  //   }
  //   const component = renderComponent(props)
  // })
});
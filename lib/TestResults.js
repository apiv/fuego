'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _class2, _temp3;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultRow = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ResultRow, _Component);

  function ResultRow() {
    (0, _classCallCheck3.default)(this, ResultRow);
    return (0, _possibleConstructorReturn3.default)(this, (ResultRow.__proto__ || (0, _getPrototypeOf2.default)(ResultRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(ResultRow, [{
    key: 'render',
    value: function render() {
      var result = this.props.result;

      var keySplit = result.key.split('>');
      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { style: { textAlign: 'right' } },
          keySplit[0],
          ' > ',
          _react2.default.createElement(
            'strong',
            null,
            keySplit[1]
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          result.inclusiveRenderDuration.toFixed(2)
        ),
        _react2.default.createElement(
          'td',
          null,
          result.instanceCount.toFixed(0)
        ),
        _react2.default.createElement(
          'td',
          null,
          (result.inclusiveRenderDuration / result.instanceCount).toFixed(2)
        )
      );
    }
  }]);
  return ResultRow;
}(_react.Component), _class.propTypes = {
  result: _propTypes2.default.object
}, _temp);


var renderResult = function renderResult(result) {
  return _react2.default.createElement(ResultRow, { result: result });
};

var TestResults = (_temp3 = _class2 = function (_Component2) {
  (0, _inherits3.default)(TestResults, _Component2);

  function TestResults() {
    var _ref;

    var _temp2, _this2, _ret;

    (0, _classCallCheck3.default)(this, TestResults);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = TestResults.__proto__ || (0, _getPrototypeOf2.default)(TestResults)).call.apply(_ref, [this].concat(args))), _this2), _this2.renderResult = function (result) {
      var rank = _this2.ordered.indexOf(result);

      return _react2.default.createElement(ResultRow, { result: result, rank: rank });
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(TestResults, [{
    key: 'render',
    value: function render() {
      var results = this.props.results.slice(1);

      return _react2.default.createElement(
        'table',
        { className: 'ui table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Component'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Total Time'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Instances Rendered'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Time / Instance'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          results.map(renderResult)
        )
      );
    }
  }]);
  return TestResults;
}(_react.Component), _class2.propTypes = {
  results: _propTypes2.default.array
}, _class2.defaultProps = {
  results: []
}, _temp3);
exports.default = TestResults;
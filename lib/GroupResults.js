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

var _class, _temp2, _class2, _temp4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

var _TestResults = require('./TestResults');

var _TestResults2 = _interopRequireDefault(_TestResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultRow = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ResultRow, _Component);

  function ResultRow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ResultRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ResultRow.__proto__ || (0, _getPrototypeOf2.default)(ResultRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isInspecting: false
    }, _this.toggle = function () {
      _this.setState({
        isInspecting: !_this.state.isInspecting
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ResultRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rank = _props.rank,
          results = _props.result.results;
      var isInspecting = this.state.isInspecting;


      var color = rank === 0 ? 'positive' : 'warning';

      return _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          { className: color },
          _react2.default.createElement(
            'td',
            null,
            this.title
          ),
          _react2.default.createElement(
            'td',
            null,
            this.total.toFixed(2)
          ),
          _react2.default.createElement(
            'td',
            null,
            this.instanceCount.toFixed(0)
          ),
          _react2.default.createElement(
            'td',
            null,
            this.perComponentTime.toFixed(2)
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'button',
              { onClick: this.toggle, className: 'ui icon button tiny' },
              _react2.default.createElement('i', { className: 'icon search' })
            )
          )
        ),
        isInspecting ? _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { colSpan: 5 },
            _react2.default.createElement(_TestResults2.default, { results: results })
          )
        ) : null
      );
    }
  }, {
    key: 'mainResult',
    get: function get() {
      return this.props.result.results[1];
    }
  }, {
    key: 'title',
    get: function get() {
      return this.props.result.title || this.mainResult.key;
    }
  }, {
    key: 'total',
    get: function get() {
      return this.mainResult.inclusiveRenderDuration;
    }
  }, {
    key: 'instanceCount',
    get: function get() {
      return this.mainResult.instanceCount;
    }
  }, {
    key: 'perComponentTime',
    get: function get() {
      return this.total / this.instanceCount;
    }
  }]);
  return ResultRow;
}(_react.Component), _class.propTypes = {
  results: _propTypes2.default.array,
  rank: _propTypes2.default.number
}, _temp2);
var GroupResults = (_temp4 = _class2 = function (_Component2) {
  (0, _inherits3.default)(GroupResults, _Component2);

  function GroupResults() {
    var _ref2;

    var _temp3, _this2, _ret2;

    (0, _classCallCheck3.default)(this, GroupResults);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp3 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = GroupResults.__proto__ || (0, _getPrototypeOf2.default)(GroupResults)).call.apply(_ref2, [this].concat(args))), _this2), _this2.renderResult = function (result) {
      var rank = _this2.ordered.indexOf(result);

      return _react2.default.createElement(ResultRow, { result: result, rank: rank });
    }, _temp3), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(GroupResults, [{
    key: 'render',
    value: function render() {
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
            ),
            _react2.default.createElement('th', { style: { width: '40px' } })
          )
        ),
        this.props.results.map(this.renderResult)
      );
    }
  }, {
    key: 'ordered',
    get: function get() {
      var results = this.props.results;

      return results.concat([]).sort(_utils.compareRender);
    }
  }]);
  return GroupResults;
}(_react.Component), _class2.propTypes = {
  results: _propTypes2.default.array
}, _temp4);
exports.default = GroupResults;
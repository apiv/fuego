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

var _class, _temp, _class2, _temp3, _class3, _temp4, _class4, _temp6;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _childrenPropType = require('./childrenPropType');

var _childrenPropType2 = _interopRequireDefault(_childrenPropType);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  active: false,
  results: []
};

var InspectView = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InspectView, _Component);

  function InspectView() {
    (0, _classCallCheck3.default)(this, InspectView);
    return (0, _possibleConstructorReturn3.default)(this, (InspectView.__proto__ || (0, _getPrototypeOf2.default)(InspectView)).apply(this, arguments));
  }

  (0, _createClass3.default)(InspectView, [{
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
          results.map(function (result) {
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
          })
        )
      );
    }
  }]);
  return InspectView;
}(_react.Component), _class.propTypes = {
  results: _propTypes2.default.array
}, _temp);
var ResultRow = (_temp3 = _class2 = function (_Component2) {
  (0, _inherits3.default)(ResultRow, _Component2);

  function ResultRow() {
    var _ref;

    var _temp2, _this2, _ret;

    (0, _classCallCheck3.default)(this, ResultRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = ResultRow.__proto__ || (0, _getPrototypeOf2.default)(ResultRow)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      inspect: false
    }, _this2.toggle = function () {
      _this2.setState({
        inspect: !_this2.state.inspect
      });
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(ResultRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          result = _props.result,
          rank = _props.rank;
      var inspect = this.state.inspect;
      var title = result.title,
          results = result.results;


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
            title || results[1].key
          ),
          _react2.default.createElement(
            'td',
            null,
            results[1].inclusiveRenderDuration.toFixed(2)
          ),
          _react2.default.createElement(
            'td',
            null,
            results[1].instanceCount.toFixed(0)
          ),
          _react2.default.createElement(
            'td',
            null,
            (results[1].inclusiveRenderDuration / results[1].instanceCount).toFixed(2)
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
        inspect ? _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { colSpan: 5 },
            _react2.default.createElement(InspectView, { results: results })
          )
        ) : null
      );
    }
  }]);
  return ResultRow;
}(_react.Component), _class2.propTypes = {
  result: _propTypes2.default.object,
  rank: _propTypes2.default.number
}, _temp3);
var ResultsTable = (_temp4 = _class3 = function (_Component3) {
  (0, _inherits3.default)(ResultsTable, _Component3);

  function ResultsTable() {
    (0, _classCallCheck3.default)(this, ResultsTable);
    return (0, _possibleConstructorReturn3.default)(this, (ResultsTable.__proto__ || (0, _getPrototypeOf2.default)(ResultsTable)).apply(this, arguments));
  }

  (0, _createClass3.default)(ResultsTable, [{
    key: 'render',
    value: function render() {
      var results = this.props.results;


      var ordered = results.concat([]).sort(function (a, b) {
        var aTime = a.results[1].inclusiveRenderDuration;
        var bTime = b.results[1].inclusiveRenderDuration;
        if (aTime > bTime) {
          return 1;
        }
        if (aTime < bTime) {
          return -1;
        }
        if (aTime === bTime) {
          return 0;
        }
      });

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
        results.map(function (result) {
          var rank = ordered.indexOf(result);

          return _react2.default.createElement(ResultRow, { result: result, rank: rank });
        })
      );
    }
  }]);
  return ResultsTable;
}(_react.Component), _class3.propTypes = {
  results: _propTypes2.default.array
}, _temp4);
var GroupPresenter = (_temp6 = _class4 = function (_Component4) {
  (0, _inherits3.default)(GroupPresenter, _Component4);

  function GroupPresenter() {
    var _ref2;

    var _temp5, _this4, _ret2;

    (0, _classCallCheck3.default)(this, GroupPresenter);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp5 = (_this4 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = GroupPresenter.__proto__ || (0, _getPrototypeOf2.default)(GroupPresenter)).call.apply(_ref2, [this].concat(args))), _this4), _this4.state = initialState, _this4.toggle = function () {
      _this4.setState({
        active: !_this4.state.active,
        results: _this4.state.active ? initialState.results : _this4.state.results
      });
    }, _this4.handleBenchmarkStart = function (props) {
      _this4.setState({ results: initialState.results });
    }, _this4.handleBenchmarkStop = function (props, _ref3) {
      var results = _ref3.results;

      _this4.setState({ results: results });
    }, _temp5), (0, _possibleConstructorReturn3.default)(_this4, _ret2);
  }

  (0, _createClass3.default)(GroupPresenter, [{
    key: 'renderResults',
    value: function renderResults() {
      var results = this.state.results;


      if (results !== initialState.results) {
        return _react2.default.createElement(ResultsTable, { results: results });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          children = _props2.children;
      var active = this.state.active;


      var buttonText = active ? 'Reset' : 'Run';

      return _react2.default.createElement(
        'div',
        { className: 'ui segment' },
        _react2.default.createElement(
          'h2',
          { className: 'ui header', style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0' } },
          _react2.default.createElement(
            'span',
            null,
            title,
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'ui label mini' },
              'group'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'ui button secondary', onClick: this.toggle },
            buttonText
          )
        ),
        _react2.default.createElement(
          _Group2.default,
          { active: active, onBenchmarkStop: this.handleBenchmarkStop, onBenchmarkStart: this.handleBenchmarkStart },
          children
        ),
        this.renderResults()
      );
    }
  }]);
  return GroupPresenter;
}(_react.Component), _class4.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _childrenPropType2.default.isRequired
}, _temp6);
exports.default = GroupPresenter;
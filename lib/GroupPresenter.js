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

var _class, _temp2;

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

var GroupPresenter = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(GroupPresenter, _Component);

  function GroupPresenter() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GroupPresenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GroupPresenter.__proto__ || (0, _getPrototypeOf2.default)(GroupPresenter)).call.apply(_ref, [this].concat(args))), _this), _this.state = initialState, _this.toggle = function () {
      _this.setState({
        active: !_this.state.active,
        results: _this.state.active ? initialState.results : _this.state.results
      });
    }, _this.handleBenchmarkStart = function (props) {
      _this.setState({ results: initialState.results });
    }, _this.handleBenchmarkStop = function (props, _ref2) {
      var results = _ref2.results;

      _this.setState({ results: results });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GroupPresenter, [{
    key: 'renderResults',
    value: function renderResults() {
      var results = this.state.results;


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

      if (results !== initialState.results) {
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
            results.map(function (result, index) {
              var title = result.title,
                  results = result.results;

              var orderedIndex = ordered.indexOf(result);

              var color = orderedIndex === 0 ? 'positive' : 'warning';

              return _react2.default.createElement(
                'tr',
                { key: 'results-' + index, className: color },
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
                )
              );
            })
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children;
      var active = this.state.active;


      var buttonText = active ? 'Reset' : 'Run';

      var buttonColor = active ? 'white' : 'green';

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
            { className: 'ui button ' + buttonColor, onClick: this.toggle },
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
}(_react.Component), _class.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _childrenPropType2.default.isRequired
}, _temp2);
exports.default = GroupPresenter;
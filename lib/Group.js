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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Runs a group of Test instances *sequentially*, and compares their results.
 * @example
 * <Group>
 *   <Test title='Test A'>
 *     {Fuego.renderList(MyComponent, 100)}
 *   </Test>
 *   <Test title='Test B'>
 *     {Fuego.renderList(MyComponent, 100)}
 *   </Test>
 *   <Test title='Test C'>
 *     {Fuego.renderList(MyComponent, 100)}
 *   </Test>
 * </Group>
 *
 * The above example will mount and benchmark A, and then B, and then C, one
 * at a time. Afterwards, the results are collected and compared.
 */
var Group = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Group, _Component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      results: [],
      activeIndex: 0
    }, _this.handleBenchmarkStop = function (props, _ref2) {
      var inclusive = _ref2.inclusive;

      _this.setState({
        activeIndex: _this.state.activeIndex + 1,
        results: _this.state.results.concat([{ title: props.title, results: inclusive }])
      }, function () {
        if (_this.state.activeIndex === _this.props.children.length) {
          _this.stop();
        }
      });
    }, _this.handleBenchmarkStart = function (props) {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Group, [{
    key: 'stop',
    value: function stop() {
      var onBenchmarkStop = this.props.onBenchmarkStop;

      if (onBenchmarkStop) {
        onBenchmarkStop(this.props, this.state);
      }
      this.setState({ results: [] });
    }
  }, {
    key: 'start',
    value: function start() {
      var onBenchmarkStart = this.props.onBenchmarkStart;

      if (onBenchmarkStart) {
        onBenchmarkStart(this.props);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.active) {
        this.start();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.active !== nextProps.active && nextProps.active === true) {
        this.start();
      }
      if (this.props.active !== nextProps.active && nextProps.active === false) {
        this.setState({ activeIndex: 0 });
      }
    }

    /**
     * @param {object} props    - the props of the Test instance.
     * @param {object} results  - the results of the Test's render.
     */


    /**
     * @param {object} props    - the props of the Test instance.
     */

  }, {
    key: 'renderActiveChild',
    value: function renderActiveChild() {
      var activeChild = this.props.children[this.state.activeIndex];
      if (!activeChild) return null;

      return _react2.default.cloneElement(activeChild, {
        key: 'Group-' + activeChild.title + '-' + this.state.activeIndex,
        active: true,
        onBenchmarkStop: this.handleBenchmarkStop,
        onBenchmarkStart: this.handleBenchmarkStart
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.active !== true) return _react2.default.createElement('div', null);
      return this.renderActiveChild();
    }
  }]);
  return Group;
}(_react.Component), _class.propTypes = {
  /** this component is controlled */
  active: _propTypes2.default.bool,

  /** callback */
  onBenchmarkStart: _propTypes2.default.func,
  onBenchmarkStop: _propTypes2.default.func,

  /** the tests to render */
  children: _childrenPropType2.default
}, _temp2);
exports.default = Group;
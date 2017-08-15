'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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

var _reactAddonsPerf = require('react-addons-perf');

var _reactAddonsPerf2 = _interopRequireDefault(_reactAddonsPerf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

// These are stub components, used only as carriers for
// the `children` prop.

var Render = function (_Component) {
  (0, _inherits3.default)(Render, _Component);

  function Render() {
    (0, _classCallCheck3.default)(this, Render);
    return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
  }

  return Render;
}(_react.Component);

var Update = function (_Component2) {
  (0, _inherits3.default)(Update, _Component2);

  function Update() {
    (0, _classCallCheck3.default)(this, Update);
    return (0, _possibleConstructorReturn3.default)(this, (Update.__proto__ || (0, _getPrototypeOf2.default)(Update)).apply(this, arguments));
  }

  return Update;
}(_react.Component);

/**
 * @example testing initial render performance
 * <Test title='lol'>
 *   {Fuego.renderList(MyComponent, 100, { someProp: 'hello' })}
 * </Test>
 *
 * @example testing initial render performance
 * Note: when only testing initial render, Test.Render is optional.
 *       this example functions exactly the same as the previous example.
 * <Test title='lol'>
 *   <Test.Render>
 *     {Fuego.renderList(MyComponent, 100, { someProp: 'hello' })}
 *   </Test.Render>
 * </Test>
 *
 * @example testing update performance
 * Note: when testing update performance, Test.Render and Test.Update
 *       are required.
 * <Test title='lol'>
 *   <Test.Render>
 *     {Fuego.renderList(MyComponent, 100, { someProp: 'hello' })}
 *   </Test.Render>
 *   <Test.Update>
 *     {Fuego.renderList(MyComponent, 100, { someProp: 'THIS IS DIFFERENT' })}
 *   </Test.Update>
 * </Test>
 */


var Test = (_temp2 = _class = function (_Component3) {
  (0, _inherits3.default)(Test, _Component3);

  function Test() {
    var _ref;

    var _temp, _this3, _ret;

    (0, _classCallCheck3.default)(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref = Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call.apply(_ref, [this].concat(args))), _this3), _this3.state = {
      running: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this3, _ret);
  }

  (0, _createClass3.default)(Test, [{
    key: 'start',
    value: function start() {
      var _this4 = this;

      setTimeout(function () {
        var onBenchmarkStart = _this4.props.onBenchmarkStart;

        if (onBenchmarkStart) {
          onBenchmarkStart(_this4.props);
        }
        _reactAddonsPerf2.default.start();
        _this4.setState({ running: true });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
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
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.active !== nextProps.active || this.state.running !== nextState.running;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.running) {
        var onBenchmarkStop = this.props.onBenchmarkStop;

        _reactAddonsPerf2.default.stop();
        this.setState({ running: false });
        if (onBenchmarkStop) {
          onBenchmarkStop(this.props, {
            inclusive: _reactAddonsPerf2.default.getInclusive()
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.running ? _react2.default.createElement(
        'div',
        { className: styles.content },
        this.renderContent
      ) : null;
    }
  }, {
    key: 'renderContent',
    get: function get() {
      var children = this.props.children;

      if (children.length > 2) return children;
      var definedChild = _react.Children.toArray(children).find(function (child) {
        return child.type === Render;
      });

      return definedChild ? definedChild.props.children : children;
    }
  }, {
    key: 'updateContent',
    get: function get() {
      var children = this.props.children;

      if (children.length !== 2) return null;
      var definedChild = _react.Children.toArray(children).find(function (child) {
        return child instanceof Update;
      });

      return definedChild ? definedChild.props.children : null;
    }
  }]);
  return Test;
}(_react.Component), _class.propTypes = {
  /** this is a controlled component */
  active: _propTypes2.default.bool,

  /** if true, the content in <Test.Update /> will be used */
  update: _propTypes2.default.bool,

  /** callback */
  onBenchmarkStart: _propTypes2.default.func,
  onBenchmarkStop: _propTypes2.default.func,

  /** the tests to render */
  children: _childrenPropType2.default
}, _class.Render = Render, _class.Update = Update, _temp2);
exports.default = Test;
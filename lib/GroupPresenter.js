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

var _GroupResults = require('./Group/GroupResults');

var _GroupResults2 = _interopRequireDefault(_GroupResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  active: false,
  results: []

  // class InspectView extends Component {
  //   static propTypes = {
  //     results: PropTypes.array
  //   }
  //
  //   render () {
  //     const results = this.props.results.slice(1)
  //
  //     return (
  //       <table className='ui table'>
  //         <thead>
  //         <tr>
  //           <th>Component</th>
  //           <th>Total Time</th>
  //           <th>Instances Rendered</th>
  //           <th>Time / Instance</th>
  //         </tr>
  //         </thead>
  //         <tbody>
  //         {
  //           results.map((result) => {
  //             const keySplit = result.key.split('>')
  //             return (
  //               <tr>
  //                 <td style={{textAlign: 'right'}}>{keySplit[0]} > <strong>{keySplit[1]}</strong></td>
  //                 <td>{result.inclusiveRenderDuration.toFixed(2)}</td>
  //                 <td>{result.instanceCount.toFixed(0)}</td>
  //                 <td>{(result.inclusiveRenderDuration / result.instanceCount).toFixed(2)}</td>
  //               </tr>
  //             )
  //           })
  //         }
  //         </tbody>
  //       </table>
  //     )
  //   }
  // }

  // class ResultRow extends Component {
  //   static propTypes = {
  //     result: PropTypes.object,
  //     rank: PropTypes.number
  //   }
  //
  //   state = {
  //     inspect: false
  //   }
  //
  //   toggle = () => {
  //     this.setState({
  //       inspect: !this.state.inspect
  //     })
  //   }
  //
  //   render () {
  //     const { result, rank } = this.props
  //     const { inspect } = this.state
  //     const { title, results } = result
  //
  //     const color = rank === 0
  //       ? 'positive'
  //       : 'warning'
  //
  //     return (
  //       <tbody>
  //       <tr className={color}>
  //         <td>{title || results[1].key}</td>
  //         <td>{results[1].inclusiveRenderDuration.toFixed(2)}</td>
  //         <td>{results[1].instanceCount.toFixed(0)}</td>
  //         <td>{(results[1].inclusiveRenderDuration / results[1].instanceCount).toFixed(2)}</td>
  //         <td><button onClick={this.toggle} className='ui icon button tiny'><i className='icon search' /></button></td>
  //       </tr>
  //       {inspect ? <tr><td colSpan={5}><InspectView results={results} /></td></tr> : null}
  //       </tbody>
  //     )
  //   }
  // }
  //
  // class ResultsTable extends Component {
  //   static propTypes = {
  //     results: PropTypes.array
  //   }
  //
  //   render () {
  //     const { results } = this.props
  //
  //     const ordered = results.concat([]).sort(function (a, b) {
  //       const aTime = a.results[1].inclusiveRenderDuration
  //       const bTime = b.results[1].inclusiveRenderDuration
  //       if (aTime > bTime) {
  //         return 1
  //       }
  //       if (aTime < bTime) {
  //         return -1
  //       }
  //       if (aTime === bTime) {
  //         return 0
  //       }
  //     })
  //
  //     return (
  //       <table className='ui table'>
  //         <thead>
  //         <tr>
  //           <th>Component</th>
  //           <th>Total Time</th>
  //           <th>Instances Rendered</th>
  //           <th>Time / Instance</th>
  //           <th style={{width: '40px'}} />
  //         </tr>
  //         </thead>
  //         {results.map((result) => {
  //           const rank = ordered.indexOf(result)
  //
  //           return <ResultRow result={result} rank={rank} />
  //         })}
  //       </table>
  //     )
  //   }
  // }

};var GroupPresenter = (_temp2 = _class = function (_Component) {
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


      if (results !== initialState.results) {
        return _react2.default.createElement(_GroupResults2.default, { results: results });
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
}(_react.Component), _class.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _childrenPropType2.default.isRequired
}, _temp2);
exports.default = GroupPresenter;
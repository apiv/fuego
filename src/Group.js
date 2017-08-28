import React, { Component } from 'react'
import PropTypes from 'prop-types'
import childrenPropType from './childrenPropType'

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
class Group extends Component {
  static propTypes = {
    /** this component is controlled */
    active: PropTypes.bool,

    /** callback */
    onBenchmarkStart: PropTypes.func,
    onBenchmarkStop: PropTypes.func,

    /** the tests to render */
    children: childrenPropType
  }

  state = {
    results: [],
    activeIndex: 0
  }

  stop () {
    const { onBenchmarkStop } = this.props
    if (onBenchmarkStop) {
      onBenchmarkStop(this.props, this.state)
    }
    this.setState({ results: [] })
  }

  start () {
    const { onBenchmarkStart } = this.props
    if (onBenchmarkStart) {
      onBenchmarkStart(this.props)
    }
  }

  componentWillMount () {
    if (this.props.active) {
      this.start()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.active !== nextProps.active && nextProps.active === true) {
      this.start()
    }
    if (this.props.active !== nextProps.active && nextProps.active === false) {
      this.setState({activeIndex: 0})
    }
  }

  /**
   * @param {object} props    - the props of the Test instance.
   * @param {object} results  - the results of the Test's render.
   */
  handleBenchmarkStop = (props, results) => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      results: this.state.results.concat([
        results
      ])
    }, () => {
      if (this.state.activeIndex === this.props.children.length) {
        this.stop()
      }
    })
  }

  /**
   * @param {object} props    - the props of the Test instance.
   */
  handleBenchmarkStart = (props) => {}

  renderActiveChild () {
    const activeChild = this.props.children[this.state.activeIndex]
    if (!activeChild) return null

    return React.cloneElement(activeChild, {
      key: `Group-${activeChild.title}-${this.state.activeIndex}`,
      active: true,
      onBenchmarkStop: this.handleBenchmarkStop,
      onBenchmarkStart: this.handleBenchmarkStart
    })
  }

  render () {
    if (this.props.active !== true) return <div />
    return this.renderActiveChild()
  }
}

export default Group

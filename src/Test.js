import React, { Component } from 'react'
import PropTypes from 'prop-types'
import childrenPropType from './childrenPropType'

import Perf from 'react-addons-perf'

const styles = {}

class Test extends Component {
  static propTypes = {
    /** this is a controlled component */
    active: PropTypes.bool,

    /** callback */
    onBenchmarkStart: PropTypes.func,
    onBenchmarkStop: PropTypes.func,

    /** the tests to render */
    children: childrenPropType
  }

  state = {
    running: false
  }

  start () {
    setTimeout(() => {
      const { onBenchmarkStart } = this.props
      if (onBenchmarkStart) {
        onBenchmarkStart(this.props)
      }
      Perf.start()
      this.setState({ running: true })
    })
  }

  componentDidMount () {
    if (this.props.active) {
      this.start()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.active !== nextProps.active && nextProps.active === true) {
      this.start()
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (
      this.props.active !== nextProps.active ||
      this.state.running !== nextState.running
    )
  }

  componentDidUpdate () {
    if (this.state.running) {
      const { onBenchmarkStop } = this.props
      Perf.stop()
      this.setState({ running: false })
      if (onBenchmarkStop) {
        onBenchmarkStop(this.props, {
          title: this.props.title,
          inclusive: Perf.getInclusive(),
          exclusive: Perf.getExclusive(),
          wasted: Perf.getWasted()
        })
      }
    }
  }

  render () {
    return (
      this.state.running
        ? <div className={styles.content}>{this.props.children}</div>
        : null
    )
  }
}

export default Test

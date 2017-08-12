import React, { Component } from 'react'
import PropTypes from 'prop-types'
import childrenPropType from './childrenPropType'

import Group from './Group'

const initialState = {
  active: false,
  results: []
}

class GroupPresenter extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: childrenPropType.isRequired
  }

  state = initialState

  toggle = () => {
    this.setState({
      active: !this.state.active,
      results: this.state.active
        ? initialState.results
        : this.state.results
    })
  }

  handleBenchmarkStart = (props) => {
    this.setState({ results: initialState.results })
  }

  handleBenchmarkStop = (props, { results }) => {
    this.setState({ results })
  }

  renderResults () {
    const { results } = this.state

    const ordered = results.concat([]).sort(function (a, b) {
      const aTime = a.results[1].inclusiveRenderDuration
      const bTime = b.results[1].inclusiveRenderDuration
      if (aTime > bTime) {
        return 1
      }
      if (aTime < bTime) {
        return -1
      }
      if (aTime === bTime) {
        return 0
      }
    })

    if (results !== initialState.results) {
      return (
        <table className='ui table'>
          <thead>
          <tr>
            <th>Component</th>
            <th>Total Time</th>
            <th>Instances Rendered</th>
            <th>Time / Instance</th>
          </tr>
          </thead>
          <tbody>
          {results.map((result, index) => {
            const { title, results } = result
            const orderedIndex = ordered.indexOf(result)

            const color = orderedIndex === 0
              ? 'positive'
              : 'warning'

            return (
              <tr key={`results-${index}`} className={color}>
                <td>{title || results[1].key}</td>
                <td>{results[1].inclusiveRenderDuration.toFixed(2)}</td>
                <td>{results[1].instanceCount.toFixed(0)}</td>
                <td>{(results[1].inclusiveRenderDuration / results[1].instanceCount).toFixed(2)}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      )
    }
  }

  render () {
    const { title, children } = this.props
    const { active } = this.state

    const buttonText = active
      ? `Reset`
      : `Run`

    const buttonColor = active
      ? `white`
      : `green`

    return (
      <div className='ui segment'>
        <h2 className='ui header' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0'}}>
          <span>
            {title}
            {' '}
            <span className='ui label mini'>group</span>
          </span>
          <button className={`ui button ${buttonColor}`} onClick={this.toggle}>{buttonText}</button>
        </h2>
        <Group active={active} onBenchmarkStop={this.handleBenchmarkStop} onBenchmarkStart={this.handleBenchmarkStart}>
          {children}
        </Group>
        {this.renderResults()}
      </div>
    )
  }
}

export default GroupPresenter

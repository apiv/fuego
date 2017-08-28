import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compareRender } from './utils'

import TestResults from './TestResults'

class ResultRow extends Component {
  static propTypes = {
    results: PropTypes.array,
    rank: PropTypes.number
  }

  state = {
    isInspecting: false
  }

  get mainResult () { return this.props.results.inclusive[1] }
  get title () { return this.props.results.title || this.mainResult.key }

  get total () { return this.mainResult.inclusiveRenderDuration }
  get instanceCount () { return this.mainResult.instanceCount }
  get perComponentTime () { return this.total / this.instanceCount }

  toggle = () => {
    this.setState({
      isInspecting: !this.state.isInspecting
    })
  }

  render () {
    const { rank, results: { inclusive } } = this.props
    const { isInspecting } = this.state

    const color = rank === 0
      ? 'positive'
      : 'warning'

    return (
      <tbody>
      <tr className={color}>
        <td>{this.title}</td>
        <td>{this.total.toFixed(2)}</td>
        <td>{this.instanceCount.toFixed(0)}</td>
        <td>{this.perComponentTime.toFixed(2)}</td>
        <td><button onClick={this.toggle} className='ui icon button tiny'><i className='icon search' /></button></td>
      </tr>
      {isInspecting ? <tr><td colSpan={5}><TestResults results={inclusive} /></td></tr> : null}
      </tbody>
    )
  }
}

class GroupResults extends Component {
  static propTypes = {
    results: PropTypes.array
  }

  get ordered () {
    const { results } = this.props
    return results.concat([]).sort(compareRender)
  }

  renderResult = (result) => {
    const rank = this.ordered.indexOf(result)

    return <ResultRow results={result} rank={rank} />
  }

  render () {
    return (
      <table className='ui table'>
        <thead>
        <tr>
          <th>Component</th>
          <th>Total Time</th>
          <th>Instances Rendered</th>
          <th>Time / Instance</th>
          <th style={{width: '40px'}} />
        </tr>
        </thead>
        {this.props.results.map(this.renderResult)}
      </table>
    )
  }
}

export default GroupResults

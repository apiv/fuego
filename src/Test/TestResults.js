import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResultRow extends Component {
  static propTypes = {
    result: PropTypes.object
  }

  render () {
    const { result } = this.props
    const keySplit = result.key.split('>')
    return (
      <tr>
        <td style={{textAlign: 'right'}}>{keySplit[0]} > <strong>{keySplit[1]}</strong></td>
        <td>{result.inclusiveRenderDuration.toFixed(2)}</td>
        <td>{result.instanceCount.toFixed(0)}</td>
        <td>{(result.inclusiveRenderDuration / result.instanceCount).toFixed(2)}</td>
      </tr>
    )
  }
}

const renderResult = (result) => {
  return <ResultRow result={result} />
}

class TestResults extends Component {
  static propTypes = {
    results: PropTypes.array
  }

  static defaultProps = {
    results: []
  }

  renderResult = (result) => {
    const rank = this.ordered.indexOf(result)

    return <ResultRow result={result} rank={rank} />
  }

  render () {
    const results = this.props.results.slice(1)

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
        {results.map(renderResult)}
        </tbody>
      </table>
    )
  }
}

export default TestResults

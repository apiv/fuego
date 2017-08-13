import React, { Component } from 'react'
import PropTypes from 'prop-types'
import childrenPropType from './childrenPropType'

import Group from './Group'

const initialState = {
  active: false,
  results: []
}

class InspectView extends Component {
  static propTypes = {
    results: PropTypes.array
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
        {
          results.map((result) => {
            const keySplit = result.key.split('>')
            return (
              <tr>
                <td style={{textAlign: 'right'}}>{keySplit[0]} > <strong>{keySplit[1]}</strong></td>
                <td>{result.inclusiveRenderDuration.toFixed(2)}</td>
                <td>{result.instanceCount.toFixed(0)}</td>
                <td>{(result.inclusiveRenderDuration / result.instanceCount).toFixed(2)}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

class ResultRow extends Component {
  static propTypes = {
    result: PropTypes.object,
    rank: PropTypes.number
  }

  state = {
    inspect: false
  }

  toggle = () => {
    this.setState({
      inspect: !this.state.inspect
    })
  }

  render () {
    const { result, rank } = this.props
    const { inspect } = this.state
    const { title, results } = result

    const color = rank === 0
      ? 'positive'
      : 'warning'

    return (
      <tbody>
      <tr className={color}>
        <td>{title || results[1].key}</td>
        <td>{results[1].inclusiveRenderDuration.toFixed(2)}</td>
        <td>{results[1].instanceCount.toFixed(0)}</td>
        <td>{(results[1].inclusiveRenderDuration / results[1].instanceCount).toFixed(2)}</td>
        <td><button onClick={this.toggle} className='ui icon button tiny'><i className='icon search' /></button></td>
      </tr>
      {inspect ? <tr><td colSpan={5}><InspectView results={results} /></td></tr> : null}
      </tbody>
    )
  }
}

class ResultsTable extends Component {
  static propTypes = {
    results: PropTypes.array
  }

  render () {
    const { results } = this.props

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
        {results.map((result) => {
          const rank = ordered.indexOf(result)

          return <ResultRow result={result} rank={rank} />
        })}
      </table>
    )
  }
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

    if (results !== initialState.results) {
      return <ResultsTable results={results} />
    }
  }

  render () {
    const { title, children } = this.props
    const { active } = this.state

    const buttonText = active
      ? `Reset`
      : `Run`

    return (
      <div className='ui segment'>
        <h2 className='ui header' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0'}}>
          <span>
            {title}
            {' '}
            <span className='ui label mini'>group</span>
          </span>
          <button className={`ui button secondary`} onClick={this.toggle}>{buttonText}</button>
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

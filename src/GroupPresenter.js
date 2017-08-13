import React, { Component } from 'react'
import PropTypes from 'prop-types'
import childrenPropType from './childrenPropType'

import Group from './Group'
import GroupResults from './Group/GroupResults'

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

    if (results !== initialState.results) {
      return <GroupResults results={results} />
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

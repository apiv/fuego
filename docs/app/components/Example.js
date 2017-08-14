import React, { Component } from 'react'
import PropTypes from 'prop-types'
import childrenPropType from '../../../src/childrenPropType'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles'

class Example extends Component {
  static propTypes = {
    code: PropTypes.string,
    title: PropTypes.string,
    children: childrenPropType
  }

  state = {
    showSource: false
  }

  toggle = () => {
    this.setState({
      showSource: !this.state.showSource
    })
  }

  render () {
    const { children, title } = this.props
    const { showSource } = this.state

    const code = this.props.code
      .replace('../../../../src/index', 'react-fuego')

    return (
      <div className='ui segments example'>
        <div className='ui segment'>
          <h2 className='ui header'>{title}</h2>
          <button className='ui icon button flat' onClick={this.toggle}>
            {showSource === true ? 'Hide' : 'Show'} source <i className='icon code' />
          </button>
        </div>
        {
          showSource
            ?
            (
              <div className='ui segment highlight'>
                <SyntaxHighlighter language='javascript' style={monokaiSublime}>{code}</SyntaxHighlighter>
              </div>
            )
            : null
        }
        {children}
      </div>
    )
  }
}

export default Example

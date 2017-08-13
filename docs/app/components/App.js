import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import Example from './Example'

import index from '../../../index.md'

const welcome = index.split('<img')[0]
const rest = index.split('/>')[1]

class App extends Component {
  render() {
    return (
      <div>
        <div className='page-header'>
          <h1 className='project-name'>Fuego</h1>
          <h2 className='project-tagline'>A React component render benchmarking tool.</h2>
          <a href='https://github.com/apiv/fuego' className='btn'>View on GitHub</a>
        </div>
        <div className='main-content'>
          <ReactMarkdown source={welcome} />
          <Example />
          <ReactMarkdown source={rest} />
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import Example from './Example'

import GroupPresenterExample from './examples/GroupPresenterExample'
import groupPresenterExampleText from '!raw-loader!./examples/GroupPresenterExample'

import TestPresenterExample from './examples/TestPresenterExample'
import testPresenterExampleText from '!raw-loader!./examples/TestPresenterExample'

import testExampleText from '!raw-loader!./examples/TestExample'

import index from '../../../index.md'

const welcome = index.split('\n###')[0]

class App extends Component {
  render() {
    return (
      <div>
        <div className='page-header'>
          <h1 className='project-name'>Fuego</h1>
          <h2 className='project-tagline'>A React component render benchmarking tool.</h2>
          <a href='https://github.com/apiv/fuego' className='btn'>View on GitHub</a>
        </div>
        <div className='ui container'>
          <div className='section highlight'>
            <ReactMarkdown source={welcome}/>
            <Example title='Check out this example' code={groupPresenterExampleText}>
              <GroupPresenterExample />
            </Example>
          </div>
          <div className='section highlight'>
            <ReactMarkdown source={require('./md/Results.md')}/>
          </div>
          <div className='section'>
            <ReactMarkdown source={require('./md/Overview.md')}/>
          </div>
          <div className='section'>
            <ReactMarkdown source={require('./md/TestPresenter.md')}/>
            <Example title='TestPresenter example' code={testPresenterExampleText}>
              <TestPresenterExample />
            </Example>
          </div>
          <div className='section'>
            <ReactMarkdown source={require('./md/GroupPresenter.md')}/>
            <Example title='TestPresenter example' code={testPresenterExampleText}>
              <TestPresenterExample />
            </Example>
          </div>
          <div className='section'>
            <ReactMarkdown source={require('./md/Test.md')}/>
            <Example title='Test example with Mocha' code={testExampleText} />
          </div>
          <div className='section'>
            <ReactMarkdown source={require('./md/Group.md')}/>
          </div>
          <div className='section'>
            <ReactMarkdown source={require('./md/Utils.md')}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App

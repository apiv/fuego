import React from 'react'
import Fuego, { TestPresenter, Test } from '../../../../src/index'

const MyComponent = ({ someSlowProp = 0 }) => {
  (new Array(someSlowProp * 100)).fill('').map(() => 'this will slow things down lol')

  return <div>Hello el world</div>
}

const TestPresenterExample = () => {
  return (
    <TestPresenter title='Test of things'>
      <Test.Render>
        {Fuego.renderList(MyComponent, 100, {})}
      </Test.Render>
    </TestPresenter>
  )
}

export default TestPresenterExample

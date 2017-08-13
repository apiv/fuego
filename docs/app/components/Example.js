import React from 'react'
import Fuego, { GroupPresenter, Test } from '../../../src/index'

const MyComponent = ({ someSlowProp = 0 }) => {
  (new Array(someSlowProp * 100)).fill('').map(() => 'this will slow things down lol')

  return <div>Hello el world</div>
}

const Example = () => {
  return (
    <GroupPresenter title='Try it out!'>
      <Test title='A'>
        {Fuego.renderList(MyComponent, 100)}
      </Test>
      <Test title='B'>
        {Fuego.renderList(MyComponent, 100, {someSlowProp: 3})}
      </Test>
      <Test title='C'>
        {Fuego.renderList(MyComponent, 100, {someSlowProp: 1})}
      </Test>
    </GroupPresenter>
  )
}

export default Example

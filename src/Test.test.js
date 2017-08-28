import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import Fuego, { Test } from './index'

const MyComponent = ({ test }) => {
  return <div>{test}</div>
}

const renderComponent = (props) => {
  return renderIntoDocument(<Test {...props} />)
}

describe('Test', () => {
  describe('prop: onBenchmarkStart', () => {
    it('is called when benchmarking begins', (done) => {
      const props = {
        active: true,
        children: Fuego.renderList(MyComponent, 100, {}),
        onBenchmarkStart: done
      }
      renderIntoDocument(<Test {...props} />)
    })
  })
  describe('prop: onBenchmarkStop', () => {
    it('is called when benchmarking ends', (done) => {
      const props = {
        active: true,
        children: Fuego.renderList(MyComponent, 100, {}),
        onBenchmarkStop: (results) => {
          expect(results).toBeTruthy()
          done()
        }
      }
      renderIntoDocument(<Test {...props} />)
    })
  })

  // it('returns inclusive render times on initial render', () => {
  //   const props = {
  //     onBenchmarkStop: (props, results) => {
  //       console.log(results.inclusive)
  //       console.log(results.exclusive)
  //       console.log(results.wasted)
  //     },
  //     active: true,
  //     children: Fuego.renderList(MyComponent, 100, { test: 'lol' })
  //   }
  //   const component = renderComponent(props)
  // })
})


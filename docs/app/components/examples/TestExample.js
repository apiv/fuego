import { mount } from 'enzyme'
import Fuego, { Test } from 'react-fuego'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders within a reasonable time', (done) => {
    const onBenchmarkStop = (results) => {
      // fail if the total render time is more than 100ms
      expect(results.inclusive[0].inclusiveRenderDuration).to.be.at.most(100)
      done()
    }

    mount(
      <Test onBenchmarkStop={onBenchmarkStop}>
        {Fuego.renderList(MyComponent, 100)}
      </Test>
    )
  })
})

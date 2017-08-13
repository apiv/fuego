## Fuego

`Fuego` is a benchmarking tool for React, with a specific focus on component render time benchmarking. `Fuego` is still in it's early, prototype stage, and right now consists of only a few components. However, these components can be used in many ways, described in the subsections below.

### Standalone

```jsx
import Fuego, { Test } from 'fuego'

const Suite = () => (
  <Test title='My Test Render'>
    {Fuego.renderList(MyComponent, 100, { someProp: 'a' }))}
  </Test>
)
```

### Standalone, comparing multiple

```jsx
import Fuego, { Test, GroupPresenter } from 'fuego'

const Suite = () => {
  return (
    <GroupPresenter title='A vs B'>
      <Test title='Test 1'>
        {Fuego.renderList(MyComponent, 100, { test: 'a' })}
      </Test>
      <Test title='Test 2'>
        {Fuego.renderList(MyComponent, 100, { test: 'b' })}
      </Test>
      <Test title='Test 3'>
        {Fuego.renderList(MyComponent, 100, (index) => { test: `this is number ${index}` })}
      </Test>
    </Group>
  )
}
```

### In a test environment

```jsx
import Fuego, { Test } from 'fuego'

describe('MyComponent', () => {
  it('renders in a reasonable time', (done) => {
    const onRender = ({ totalInclusiveTime }) => {
      expect(totalInclusiveTime < 500).to.eq(true)
      done()
    }
    const wrapper = mount(
      <Test onBenchmarkEnd={onRender}>
        {Fuego.renderList(MyComponent, 100)}
      </Test>
    )
  })
})
```

## Components

*Important* to note, that `Test` and `Group` have no visual output. They do not render any DOM, but simply fire
callbacks that you pass to them when the tests are running / complete. If you would like a UI, use the `TestPresenter`
or `GroupPresenter` components.

### `Fuego.Test`

### `Fuego.TestPresenter`

### `Fuego.Group`

*Important* _ONLY_ `Test` components can be children of a `Group`. `TestPresenter` is for standalone, single Test display
only.

### `Fuego.GroupPresenter`

*Important* _ONLY_ `Test` components can be children of a `GroupPresenter`. `TestPresenter` is for standalone, single Test display
only.

## Helpers

### `Fuego.renderList`

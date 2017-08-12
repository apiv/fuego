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
import Fuego, { Test, Group } from 'fuego'

const Suite = () => {
  return (
    <Group title='A vs B'>
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

### `Fuego.Test`

### `Fuego.Group`


## Helpers

### `Fuego.renderList`

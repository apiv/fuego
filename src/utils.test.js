import {
  renderList,
  compareRender
} from './utils'

const MyComponent = () => {
  return <div></div>
}

describe('utils', () => {
  describe('renderList', () => {
    const LIST_LENGTH = 5
    it('returns a list with the correct number of items', () => {
      const list = renderList(MyComponent, LIST_LENGTH)
      expect(list).toHaveLength(5)
    })
    it('returns a list where each item is an instance of the passed component', () => {
      const list = renderList(MyComponent, LIST_LENGTH)
      list.forEach((item) => {
        expect(item.type).toEqual(MyComponent)
      })
    })
    it('properly applies props when `props` is an object', () => {
      const props = { testProp: 'hello' }
      const list = renderList(MyComponent, LIST_LENGTH, props)
      list.forEach((item) => {
        expect(item.props).toEqual(props)
        // the props passed down to the component should be a clone
        // of the passed props, and should not have referential
        // equality with the passed props object
        expect(item.props).not.toBe(props)
      })
    })
    it('properly applies props when `props` is function which returns an object', () => {
      const props = (index) => ({ testProp: `hello ${index}` })
      const list = renderList(MyComponent, LIST_LENGTH, props)
      list.forEach((item, index) => {
        expect(item.props).toEqual(props(index))
      })
    })
  })

  describe('compareRender', () => {
    it('sorts by inclusiveRenderTime ASC')
  })
})


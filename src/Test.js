import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import childrenPropType from './childrenPropType'

import Perf from 'react-addons-perf'

const styles = {}

// These are stub components, used only as carriers for
// the `children` prop.
class Render extends Component {}
class Update extends Component {}

/**
 * @example testing initial render performance
 * <Test title='lol'>
 *   {Fuego.renderList(MyComponent, 100, { someProp: 'hello' })}
 * </Test>
 *
 * @example testing initial render performance
 * Note: when only testing initial render, Test.Render is optional.
 *       this example functions exactly the same as the previous example.
 * <Test title='lol'>
 *   <Test.Render>
 *     {Fuego.renderList(MyComponent, 100, { someProp: 'hello' })}
 *   </Test.Render>
 * </Test>
 *
 * @example testing update performance
 * Note: when testing update performance, Test.Render and Test.Update
 *       are required.
 * <Test title='lol'>
 *   <Test.Render>
 *     {Fuego.renderList(MyComponent, 100, { someProp: 'hello' })}
 *   </Test.Render>
 *   <Test.Update>
 *     {Fuego.renderList(MyComponent, 100, { someProp: 'THIS IS DIFFERENT' })}
 *   </Test.Update>
 * </Test>
 */
class Test extends Component {
  static propTypes = {
    /** this is a controlled component */
    active: PropTypes.bool,

    /** if true, the content in <Test.Update /> will be used */
    update: PropTypes.bool,

    /** callback */
    onBenchmarkStart: PropTypes.func,
    onBenchmarkStop: PropTypes.func,

    /** the tests to render */
    children: childrenPropType
  }

  static Render = Render
  static Update = Update

  state = {
    running: false
  }

  get renderContent () {
    const { children } = this.props
    if (children.length > 2) return children
    const definedChild = Children.toArray(children)
      .find((child) => child.type === Render)

    return definedChild
      ? definedChild.props.children
      : children
  }

  get updateContent () {
    const { children } = this.props
    if (children.length !== 2) return null
    const definedChild = Children.toArray(children)
      .find((child) => child instanceof Update)

    return definedChild
      ? definedChild.props.children
      : null
  }

  start () {
    setTimeout(() => {
      const { onBenchmarkStart } = this.props
      if (onBenchmarkStart) {
        onBenchmarkStart(this.props)
      }
      Perf.start()
      this.setState({ running: true })
    })
  }

  componentDidMount () {
    if (this.props.active) {
      this.start()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.active !== nextProps.active && nextProps.active === true) {
      this.start()
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (
      this.props.active !== nextProps.active ||
      this.state.running !== nextState.running
    )
  }

  componentDidUpdate () {
    if (this.state.running) {
      const { onBenchmarkStop } = this.props
      Perf.stop()
      this.setState({ running: false })
      if (onBenchmarkStop) {
        onBenchmarkStop(this.props, {
          inclusive: Perf.getInclusive()
        })
      }
    }
  }

  render () {
    return (
      this.state.running
        ? <div className={styles.content}>{this.renderContent}</div>
        : null
    )
  }
}

export default Test

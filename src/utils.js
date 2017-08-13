import React from 'react'

/**
 * @param {constructor} Component - the component to render.
 * @param {number}      length    - the number of instances to render.
 * @param {func|object} props     - object or function which returns an object.
 * @returns {Array<node>}
 */
function renderList (Component, length, props) {
  return new Array(length).fill('').map((t, index) => {
    let passedProps = typeof(props) === 'function'
      ? props(index)
      : props || {}

    // clone the object so that multiple instances are not sharing the same
    // ref to the props object (causes `key` error).
    passedProps = { ...passedProps }

    // let's avoid the annoying `key` prop warning
    if (typeof(passedProps.key) === 'undefined') {
      passedProps.key = `Test-${index}-${btoa(Math.random())}`
    }

    return <Component {...(passedProps || {})} />
  })
}

/**
 * Orders the list of results by their render time
 * @param {object} a
 * @param {object} b
 */
function compareRender(a, b) {
  const aTime = a.results[1].inclusiveRenderDuration
  const bTime = b.results[1].inclusiveRenderDuration
  if (aTime > bTime) {
    return 1
  } else if (aTime < bTime) {
    return -1
  } else if (aTime === bTime) {
    return 0
  }
}

export {
  renderList,
  compareRender
}

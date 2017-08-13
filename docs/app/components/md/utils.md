# Utils

## `Fuego.renderList`

Renders a list of the given elements, the given number of times, with the given props.


<table class='ui table'>
  <thead>
    <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Component</code></td>
      <td><code>constructor</code></td>
      <td>The component to render.</td>
    </tr>
    <tr>
      <td><code>count</code></td>
      <td><code>number</code></td>
      <td>the number of instances to render.</td>
    </tr>
    <tr>
      <td><code>props</code></td>
      <td><code>object || func<object></code></td>
      <td>
      Either an object or function which returns an object. These are the props that will be applied to each instance.
      Signature if type is function: <code>(Number index)</code>, where <code>index</code> is the current index in the iterator.
      </td>
    </tr>
  </tbody>
</table>

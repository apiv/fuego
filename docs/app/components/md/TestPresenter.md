# TestPresenter

A fully functional standalone benchmark test, with a user interface.

<table class='ui table'>
  <thead>
    <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Required?</th>
    <th>Default</th>
    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>title</code></td>
      <td><code>string</code></td>
      <td>YES</td>
      <td>none</td>
      <td>The title of this suite, displayed to the left of the 'Run' button.</td>
    </tr>
    <tr>
      <td><code>children</code></td>
      <td><code>node</code></td>
      <td>YES</td>
      <td>none</td>
      <td>children will be rendered (with render times recorded) when the 'Run' button is clicked.</td>
    </tr>
  </tbody>
</table>

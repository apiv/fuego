# GroupPresenter

A fully functional benchmark group, with a user interface.

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
      <td>any children <i>MUST</i> be instances of <code>Test</code>.</td>
    </tr>
  </tbody>
</table>

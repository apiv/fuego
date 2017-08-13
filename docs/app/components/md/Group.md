# Group

This is a logic-only component, providing callbacks for when the children finish rendering. This should be used when
integrating with testing frameworks, or when creating your own presenter. The example code below shows usage with
mocha.

Group runs a set of `Test`s sequentially, until all have been run. Afterwards, it fires `onBenchmarkStop` with the
collected results for all child runs.

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
      <td><code>active</code></td>
      <td><code>boolean</code></td>
      <td>YES</td>
      <td>none</td>
      <td>If true, the benchmark will begin running.</td>
    </tr>
    <tr>
      <td><code>onBenchmarkStart</code></td>
      <td><code>func</code></td>
      <td>NO</td>
      <td>none</td>
      <td>
      invoked when the children start rendering.
      Signature: <code>(Object props)</code>, where <code>props</code> is all of this <code>Test</code> component's props.
      </td>
    </tr>
    <tr>
      <td><code>onBenchmarkStop</code></td>
      <td><code>func</code></td>
      <td>NO</td>
      <td>none</td>
      <td>
      invoked when the children complete rendering.
      Signature: <code>(Object props, Object results)</code>, where <code>results</code> is a <code>TestResultsObject</code> (documented above).
      </td>
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

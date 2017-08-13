# Results Format

## `TestResultObject`

```
{
  results: [
    {
      key: '', // the path to this component in the DOM tree
      inclusiveRenderDuration: 0, // the time it took for all instances to render
      instanceCount: 0 // the number of instances of this element that were rendered
    },
    ...
  ]
}
```

## `GroupResultObject`

```
{
  results: [
    <TestResultObject>,
    ...
  ]
}
```

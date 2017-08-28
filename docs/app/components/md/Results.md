# Results Format

`Test` outputs the _exact same_ output that you get
from `Perf`, **plus** the `title` of the test.
The object that looks like this:

```
{
  title: 'this is my title',
  inclusive: [...],
  exclusive: [...],
  wasted: [...]
}
```

`Group` outputs that same output, just as an array, like this:

```
[
  {
    title: 'first test',
    inclusive: [...],
    exclusive: [...],
    wasted: [...]
  },
  {
    title: 'second test',
    inclusive: [...],
    exclusive: [...],
    wasted: [...]
  }
]
```

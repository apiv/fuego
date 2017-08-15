# Fuego

`Fuego` is a benchmarking tool for React, with a specific focus on component render time benchmarking. `Fuego` is still in it's early, prototype stage, and right now consists of only a few components. However, these components can be used in many ways, described in the subsections below.

```
npm install react-fuego=git+ssh://git@github.com:apiv/fuego.git
```

## What problem does this solve?

**And why can't I just use `react-addons-perf` instead?**
 
`Fuego` can be though of as an extension of `react-addons-perf`, which provides a UI and controlled 
environment for benchmarking. `react-addons-perf` is a great tool, but every time we used it, we found
ourselves copying and pasting lines of code into random parts of components to `start` and `stop` the
`Perf` recording. Also, when we did record performance in-app, it was difficult to sift through the output
to find the component we were looking for.

`Fuego` provides:
1) A controlled environment for benchmarking. Your component is rendered in complete isolation, so true
rendering performance can be measured per component.
2) A simpler API. Rather than having to manually paste in where to `start` and `stop` `Perf`, `Fuego` takes
care of that for you. All you need to do is provide `children` nodes.
3) A simple, effective UI. Fuego allows you to run your benchmarks at a literal click of a button, displaying
output with a smart reporter.
4) Simple and powerful test suite integration. With `Fuego`, it's finally possible to avoid component bloat by defining tests which
limit how slow a component is allowed to render before failing. For examples, scroll to the `Test` section below.
5) Analytics (WIP). Right now, the UI outputs the same data output by `Perf.printInclusive`. In the future, we
would like to make the `TestResults` rendering table 'smarter', with simple algorithms to help point out where
the problem is in your component (if it's rendering slowly).

### More info

Full documentation on the homepage: http://fuego.solutions

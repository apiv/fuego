# Fuego

`Fuego` is a benchmarking tool for React, with a specific focus on component render time benchmarking. `Fuego` is still in it's early, prototype stage, and right now consists of only a few components. However, these components can be used in many ways, described in the subsections below.

```
npm install react-fuego
```

Or

```
yarn add react-fuego
```

## What problem does this solve?

I'm not trying to reinvent the wheel here, nor take credit for it. I open sourced this repo because I got tired
of copying and pasting `Perf.start` and `Perf.stop` into obscure places in my app to measure performance. I also
got tired of having to dig through the output of `react-addons-perf` to find the data which pertained only to my
component. `Fuego` does all of the hard work for you, so all you need to do is write:

```
<Test>
  {Fuego.renderList(MyComponent, 100, props)
</Test>
```

And then you can do whatever you want with the data via the `onBenchmarkStop` prop.

## What's it got?

`Fuego` provides:
1) A controlled environment for benchmarking. Your component is rendered in complete isolation, so true
rendering performance can be measured per component.
   - You can place this _anywhere_ in your app, as it is self contained. No need to make a special route
     for displaying or benchmarking your component.
2) A simple UI, if you want to use it. Fuego allows you to run your benchmarks at a literal click of a button, displaying
output with a smart reporter.
   - Fuego can be used without the UI, too.
3) Simple and powerful test suite integration. With `Fuego`, it's finally possible to avoid component bloat by defining tests which
limit how slow a component is allowed to render before failing. For examples, scroll to the `Test` section below.

### More info

**Very detailed** documentation and **examples** on the homepage: http://fuego.solutions

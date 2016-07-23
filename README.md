# Nicepack

Nicer configuration for Webpack.

## What is this all about?

Webpack is a fantasticly powerful tool that lets you build Webpack using some pretty awesome ideas. However, it's configuration is quite 'bare' and complicated for most usages. I think there's opportunity to create some sort of abstraction on top of Webpack to make using it much simpler for most use cases.

Here's the ideal API I'm exploring at the moment:

```javascript
const webpackConfig = new Nicepack()
  .root('./src')
  .entry('app/index.js')
  .use(babel())
  .use(cssModules(stylus()));
```

This represents one approach for how to do that. I don't know whether this is good or not, so I'm just exploring this idea to see where it goes. The biggest concern I have with this is requiring custom 'plugins' (which are really just super thin wrappers around existing Webpack loaders/plugins) that would need to be developed and maintained.

One workaround for this is also expose an API on Nicepack to add configurations manually. For example:

```javascript
const webpackConfig = new Nicepack()
  .entry('./src/app/index.js')
  .use(babel())

  // Exposes a way to add loaders manually
  .loader({
    test: /\.css$/,
    loaders: ['style', 'css', 'stylus'],
  })

  // We could also take this as an opportunity to 'improve' the loader config api
  .loader('css', [
    'style',
    {css: { modules: true }},
    'stylus'
  ])

  // Provide an 'escape hatch' to get access to the underlying webpack config
  // so you can make any modifications to it
  .config
```

## What's done already?

Massive work in progress, nothing really here yet.

Files of interest:

 * `index.js`: Main implementation of Nicepack. This is what end-users consume.
 * `usage.js`: Example usage of Nicepack. This is what end-users would write and shows *how* to use Nicepack
 * `plugins.js`: Demonstrates how to create plugins for Nicepack

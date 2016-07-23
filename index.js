const exts = (...extensions) => new RegExp(`\\.(${extensions.join('|')})$`);

class Nicepack {

  constructor() {
    this.config = {
      module: {
        loaders: [],
      },
    }
  }

  use(plugin) {
    const pluginConfig = plugin();

    if (pluginConfig.loader) {
      this.loader(pluginConfig.loader);
    }

    return this;
  }

  loader(...args) {
    if (args.length === 1) {
      // If there's only one argument, then it's just webpack-compatible loader config obj
      this.config.module.loaders.push(args[0]);

    } else {
      // Otherwise it's using our nicer API
      let [ extensions, loaders ] = args;

      // If loaders is a string, wrap it into an array
      if (!Array.isArray(loaders)) {
        loaders = [loaders];
      }

      this.loader({
        test: exts(...extensions),
        loaders,
      });
    }

    return this;
  }

  entry() {
    return this;
  }

}

module.exports = Nicepack;
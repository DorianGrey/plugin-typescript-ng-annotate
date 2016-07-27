# Description
This plugin provides the ability to use [ng-annotate](https://github.com/olov/ng-annotate) on typescript sources transpiled via [plugin-typescript](https://github.com/frankwallis/plugin-typescript) created by @frankwallis. To do so, it just pipes the output of [plugin-typescript](https://github.com/frankwallis/plugin-typescript) to [plugin-ng-annotate](https://github.com/DorianGrey/plugin-ng-annotate).

Note: This plugin is and will only be tested with jspm 0.17-beta.
# Use case
Useful for annotating typescript sources containing angularjs code on the fly.
# Installation
Currently, you have to install it from github directly via:
```jspm install --dev ts-ng-annotate=github:DorianGrey/plugin-typescript-ng-annotate@0.0.1```
Naming the alias is up to you, the above is just a suggestion.

# Usage
In your `jspm.config.js`, configure your source package with a meta information as you would regularly do for [plugin-typescript](https://github.com/frankwallis/plugin-typescript), e.g.:
```javascript
packages: {
  "assets/javascripts/modules": {
    "format": "esm",
    "defaultExtension": "ts",
    "meta": {
      "*.ts": {
          "loader": "ts-ng-annotate"
      }
    }
  }
}
```
[plugin-typescript](https://github.com/frankwallis/plugin-typescript) may be configured as usual.

# Thanks to
- @frankwallis for creating [plugin-typescript](https://github.com/frankwallis/plugin-typescript)
- @olov for creating [ng-annotate](https://github.com/olov/ng-annotate)

# TODO
- Test if a complete "proxy" behavior is required.



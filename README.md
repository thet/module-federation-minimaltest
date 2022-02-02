# Experiment with webpack module federation

## Status

Does not work yet, need some help.


## Goal

Create two seperate bundles who do not know about or depend on each other but share the same external dependencies, if any.


## Example

There are: ``mf-a`` and ``mf-b``.
Both use jQuery and do a super simple thing with it.


## Docs

https://webpack.js.org/concepts/module-federation/
https://webpack.js.org/plugins/module-federation-plugin/


## Test

1)

    cd mf-a
    yarn build
    cd ../mf-b
    yarn build
    cd ..


2)

Open ``mf-a/index.html`` in a browser, open the developer console network tab and check if jQuery is loaded once or twice.

Currently it does only load twice, except for one case but then the second module isn't run properly.


3)

See the git history for the experiments:

- Commit: "1) Add Webpack Module Federation with shared libraries."

    First Test, does load jQuery twice.


- Commit: "2) Experiment with same output.uniqueName"

    Setting ``config.output.uniqueName`` in both bundles to the same name does indeed load jQuery only once for both bundles.
    But when running dist-b/bundle.js it also loads the index.js from mf-a, not mf-b - because the index.js from mf-b shares the same ``dataWebpackPrefix + key`` in script's ``data-webpack`` attribute as from the mf-a bundle.
    You can find this in the generated bundle, ``bundle.js``, around line 154, in the ``webpack/runtime/load script``.

- Commit: "3) Experiemnt with shareScope/shareKey in share config".

    I thought I could use the ``shareScope`` and ``shareKey`` attributes of a share definition to resolve the problem and have a common shareScope for the dependencies.
    But this doesn't work either.


## Alternative approach

Alternative approach to exclude e.g. jQuery from other bundles (which is globally available through the ``plone`` main bundle):

https://webpack.js.org/configuration/externals/



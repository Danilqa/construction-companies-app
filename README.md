# About

Company catalog

Features:
* Search
* Filter

# Future improvements

1. Virtual list to improve performance
2. Lazy loading on scroll
3. Move the fetching logic from the view layer
4. Show the loading state (skeleton placeholder for company cards) when
   we're waiting for the fetch for more than 3 seconds
5. Remove bootstrap and implement our UI components
6. Support the fuzzy search

# Getting started

1. `yarn install` - install the dependencies
2. `yarn dev` - start on the localhost at 3500 port

# Why do we have these dependencies?

* `react` - provides api for create and control ui-components.  
* `react-dom` - provides DOM-specific methods to step out from react-world
to DOM-world and is used on top level of application.
* `bootstrap` - provides layout, input and other components. It has zero external dependencies and the smallest 
size in comparison with other libraries.

# Project structure

```
/config - files for configuration project modules
/src - files used by this application (modules, templates, logic)
    /model - domain entities
    /env - sets of constants for the app environment
        env.ts
    app.tsx - the main app 
    index.tsx - entry for react applicaiton            
                 
package.json - project configuration, contains project information, dependencies and settings
yarn.log - file fixing specific dependency numbers
README.md
<other root configuration files> - for example, jest.config.ts, .gitignore, ...                                             
```

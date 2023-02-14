# Assignment 2

### q1: what is 'NPM'?
NPM is javascript package manager
NPM is used manages all our packages. When we are building our project we need various packages for example parcel, sass, react and many more.

### q2: what is parcel/webpack? why do we need it?
parcel/webpack/vite are bundlers.
It is a development tool which takes multiple javascript files and combine them to single production ready large file,which can be used by browsers to load javascript app. it contains your source code along with other third party dependencies.

### q3: what is .parcel-cache?
It is a file automatically created by parcel. It stores information about your project when parcel builds it and when it rebuilds it doesnt have to re-parse or re-analyse everything. It`s a key reason why parcel is so fast.

### q4: what is npx?
execute using npm. Run a locally installed package easily. Execute a package thata re not previously installed

### q5: what is difference between dependencies and dev-dependencies?
Dependencies are the packages that our project depends on. package.json have different type of dependencies.

- "dependencies": specifies the packages thta you need to run your code. These are required in production.
- "devDependencies": specifies the packages that we will only need during the developement of our project. you dont need them to run your code in production. for example testing framework jest, bundlers

### q6: What is tree-shaking?
Parcel also statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". Tree shaking is supported for both static and dynamic import, CommonJS and ES modules, and even across languages with CSS modules.
Best thing is this is done automatically :sunglasses:

### q7: What is hot module replacement?
When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!
By default, It perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

### q8: List down superpowers of parcel. and explain them?
- ##### zero config
- ##### dev server 
parcel include developement server just run parcel index.html. need https? run with --https flag
- ##### hot module replacement
- ##### super fast :zap:
- ##### caching
Everything parcel does it cached. This means dev server starts instantly and same code never build twice.
To support an optimal caching and development experience Parcel utilizes a very fast watcher written in C++ that integrates with low-level file watching functionality.
- ##### lazy dev builds
In development, Parcel can defer building files until they are requested in the browser. This means you only need to wait for the page you're actually working on to build! If your project has many entries or code split points, this can massively reduce dev server startup time.
- ##### transpiling
Parcel transpiles your JavaScript and CSS for your target browsers automatically! Just declare a browserslist in your package.json, and Parcel takes care of transpiling only what's needed.

#### Automatic production optimization
- ##### tree shaking
- ##### minification
- ##### code splitting
- ##### image optimization
- ##### compression
Compress your app before you deploy using Gzip and Brotli.


### q9: what is .gitIgnore? what should we add and not add in it?
- ##### add in .gitignore
. parcel-cache
. node-modules
. dist
these are automatically build
- ##### not add in gitignore
. package-lock.json
. package.json

### q10: what is the difference between package.json and package-lock.json?
If your project uses npm you`ll have package.json automatically created.
the package.json file records the minimum version of different dependencies your app need. If you update the version of some package it will not necessarily reflect here.
It also use to define project properties, description and license information.

Whereas package-lock.json file is used to "lock" the dependencies to specific version number. it will ignore ~ , ^ of package.json file.  

### q11: why should i not modify 'package-lock.json'?
It`s not designed to be manually edited.Its purpose is to track the entire tree of dependencies and the exact version of each dependency.

### q12: what is node-modules? why is not a good idea to push that on git?
node-modules are like database for our project dependencies. The dependencies we installed using npm and the transitive dependencies are are stored here.
It is a huge folder and it is not good to push it on git because it is automatically generated when we do npm install.
since it`s huge it waste a lot of space.

### q13: What is dist folder?
dist folder contain minimized version of your code. It contain the code which is actually on production web app.

### q14: What is browserLists?
Browserslist helps you keep the right balance between browser compatibility and bundle size. With Browserslist, you will cover wider audience and have smaller bundle size.

### q15: webpack vs parcel vs vite?
webpack vs parcel
webpack needs configuration
webpack perform better than parcel when bundling the first time but parcel perform better when watching(which is nore important)

### q16: ^ caret and ~ tilde?
~version means we can accept only patch release when updating our package
^version we can accpt patch + minor release when updating our package

### q17: script types in javascript
the script type indicates the type of script represented by element.
A classic script. a javascript module, a import map, data block.
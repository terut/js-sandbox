# JS Sandbox
Note that this repository is experimental.

## Getting Started

```sh
$ npm install
$ npm run start
$ npm run -s test:js
$ npm run -s lint:js

# Run server which document root is ./ with node, ruby, python, php or somthing.
# Open http://localhost:3000 and see console of developer tool.
$ ruby -run -e httpd . -p 3000
$ php -S localhost:3000
```

Note that `build:js` and `watch:js` will work by `.babelrc` without presets options like the following.
But npm scripts use preset options because this source code is experimental.

```sh
"build:js": "browserify -t babelify src/app.js -o dist/app.js -d",
"watch:js": "watchify -t babelify src/app.js -o dist/app.js -d -v",
```

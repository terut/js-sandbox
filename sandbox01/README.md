# JS Sandbox
Note that this repository is experimental.

## Getting Started

```sh
$ npm install
$ npm run start

# if you wanna run test
$ npm run -s test:js

# if you wanna run lint 
$ npm run -s lint:js

# if you wanna see the coverted js on babel
$ babel src/person.js

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

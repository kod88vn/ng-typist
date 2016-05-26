# ng-typist
## Intro
Angular wrapper for malarkey - a module to provide typing simulation


## Installing
* `npm install -g gulp gulp-cli` install global cli dependencies
* `npm install` to install dependencies

## Usage
1. `<script type='text/javascript' src='ng-typist/dist/app.min.js'></script>`
2. angular.module('myApp', ['ng-typist'])
3. provide a config object

## Example
```javascript
    $scope.typistConfig = {
        words: ['Thanks for using ng-typist...', 'Have a nice day!'], 
        id: 'typist',
        typeSpeed: 50,
        deleteSpeed: 50,
        pauseDelay: 500,
        loop: true,
        postfix: ''
    };
```

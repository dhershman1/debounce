
A simple separate utility for debounce which can also be found within the popular [Underscore](https://github.com/jashkenas/underscore) library.

## How To
Node
```js
var debounce = require('dynamic-timeouts');
debounce();
```

##Arguments
`func` - The function that you would like debounce to hold on
`wait` - The Time (in ms) debounce should wait before execution
`immediate` - should debounce fire the function the first time immediatly and then start waiting until activity stops then starts again

##Usage
```js
var debounce = require('dynamic-timeouts');
function testMe() {
    console.log('Test World');
};
$('#test').on('click', debounce(testMe, 300));
```

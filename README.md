debounce
===============================
A simple separate utility for debounce which can also be found within the popular [Underscore](https://github.com/jashkenas/underscore) library.

## How To
Insert with script tag
```html
<script type="text/javascript" src="path/to/file/debounce.js"></script>
```
Node
```js
var debounce = require(components/utils/debounce/debounce.js);
debounce();
```

##Arguments
`func` - The function that you would like debounce to hold on
`wait` - The Time (in ms) debounce should wait before execution
`immediate` - should debounce fire the function the first time immediatly and then start waiting until activity stops then starts again

##Usage
```js
function testMe() {
    console.log('Test World');
};
$('#test').on('click', comp.utils.debounce(testMe, 300));
```

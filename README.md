# spy-react-component-lifecycle

[![Build Status](https://travis-ci.org/fraserxu/spy-react-component-lifecycle.svg?branch=master)](https://travis-ci.org/fraserxu/spy-react-component-lifecycle)

A separate module for spy react component lifecycle, code from [enzyme](https://github.com/airbnb/enzyme) which is deprecated at v2.0.0

#### Install

```bash
$ npm install spy-react-component-lifecycle --save-dev
```

#### Usage

Go and check `test.js`.

```JavaScript
var Foo = React.createClass({
  componentDidMount: noop,
  render: function render () {
    return React.createElement('div', null, 'foo')
  }
})

test('Componenet life cycle', function (assert) {
  withDom()

  spyLifeCycle(Foo)
  var container = window.document.createElement('div')
  ReactDOM.render(React.createElement(Foo), container)

  assert.true(Foo.prototype.componentDidMount.calledOnce, 'calls componentDidMount once')

  assert.end()
})
```

#### License
MIT

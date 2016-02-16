var spyLifeCycle = require('./')
var test = require('tape')
var React = require('react')
var ReactDOM = require('react-dom')
require('jsdom-global')()

function noop () {}

var Foo = React.createClass({
  componentDidMount: noop,
  render: function render () {
    return React.createElement('div', null, 'foo')
  }
})

test('Componenet life cycle', function (assert) {
  spyLifeCycle(Foo)
  var container = global.window.document.createElement('div')
  ReactDOM.render(React.createElement(Foo), container)

  assert.true(Foo.prototype.componentDidMount.calledOnce, 'calls componentDidMount once')

  assert.end()
})

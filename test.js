var spyLifeCycle = require('./')
var test = require('tape')
var React = require('react')
var ReactDOM = require('react-dom')

function withDom () {
  if (!global.document) {
    try {
      var jsdom = require('jsdom').jsdom

      var exposedProperties = ['window', 'navigator', 'document']

      global.document = jsdom('')
      global.window = document.defaultView
      Object.keys(document.defaultView).forEach(function (property) {
        if (typeof global[property] === 'undefined') {
          exposedProperties.push(property)
          global[property] = document.defaultView[property]
        }
      })

      global.navigator = {
        userAgent: 'node.js',
      }
    } catch (e) {
      // jsdom is not supported
    }
  }
}

function noop () {}

var Foo = React.createClass({
  componentDidMount: noop,
  render: function render () {
    return React.createElement('div', null, 'foo')
  }
})

test('Componenet life cycle', function (assert) {
  withDom()

  spyLifeCycle(Foo)
  var container = global.window.document.createElement('div')
  ReactDOM.render(React.createElement(Foo), container)

  assert.true(Foo.prototype.componentDidMount.calledOnce, 'calls componentDidMount once')

  assert.end()
})

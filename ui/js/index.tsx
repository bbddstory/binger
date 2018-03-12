import '../css/root.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import masterReducer from './reducers/masterReducer';
import Nav from './nav';
import Sandbox from './sandbox';

// if (typeof Object.assign != 'function') {
//   // Must be writable: true, enumerable: false, configurable: true
//   Object.defineProperty(Object, "assign", {
//     value: function assign(target, varArgs) { // .length of function is 2
//       'use strict';

//       if (target == null) // TypeError if undefined or null
//         throw new TypeError('Cannot convert undefined or null to object');

//       var to = Object(target);

//       for (var index = 1; index < arguments.length; index++) {
//         var nextSource = arguments[index];

//         if (nextSource != null) // Skip over if undefined or null
//           for (var nextKey in nextSource) 
//             // Avoid bugs when hasOwnProperty is shadowed
//             if (Object.prototype.hasOwnProperty.call(nextSource, nextKey))
//               to[nextKey] = nextSource[nextKey];
//       }
      
//       return to;
//     },
//     writable: true,
//     configurable: true
//   })
// }

// declare interface ObjectConstructor {
//   assign(...objects: Object[]): Object
// }

class Playground extends React.Component<any, any> {
  render() {
    return (
      <div id="playground-wrapper">
        <Nav />
        <Sandbox />
      </div>
    )
  }
}

// Create master store for all data
let masterStore = createStore(masterReducer);

// Log the initial state
console.log('-- index:', masterStore.getState());

// Log every state change
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = masterStore.subscribe(() =>
  console.log(masterStore.getState())
);

// Stop listening to state changes
// unsubscribe()

render(
  <HashRouter>
    <Provider store={masterStore}>
      <Playground />
    </Provider>
  </HashRouter>,
  document.getElementById('playground')
);
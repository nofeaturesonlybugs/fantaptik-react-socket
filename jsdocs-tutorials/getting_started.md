### Add the Plugin to the @fantaptik/socket

The `Plugin` is designed to work with `@fantaptik/socket`; you provide an instance of it to the socket options when creating the socket.  When creating an instance of the plugin you need to give it your redux store so it can dispatch actions.
```js
import { Socket } from '@fantaptik/socket';
import { Plugin } from '@fantaptik/react-socket';

// The Plugin needs access to the redux store in order to dispatch actions
// during socket events.  It's recommended to create your store in a file 
// that can be imported as necessary.
import store from './your-redux-store';

// Add a Plugin instance to any other socket options or plugins.
const socketOptions = {
    // ...
    plugins : [
        new Plugin( store ), // Give the store to the plugin.
    ],
    // ...
}

const socket = new Socket( socketOptions );
export default socket;
```

### Add the Reducer to Redux

With the `Plugin` instance added to the socket we also need a reducer.  The reducer name is not important although it should be top-level.
```js
import { combineReducers } from 'redux';

import { Reducer as socket } from '@fantaptik/react-socket';

const reducer = combineReducers( {
    // other reducers for your app

    // Note: The reducer name is used when adding the Status component to your JSX.
    // See next code example.
    socket,
} );

export default reducer;
```

### Add the Status Component to your App

Finally you can add the `<Status />` component to your application if you'd like to use a pre-baked notification of your app connecting, disconnecting, and waiting to attempt to connect.  

Note that we call `Status.Reduxed()` with the reducer name we used in the previous snippet.
```jsx
import { Status } from '@fantaptik/react-socket';

// Status by itself is not redux-aware.  We make a redux-aware component
// by calling Status.Reduxed( 'reducer-name' ) where 'reducer-name'
// was 'socket' when creating our reducer.
const SocketStatus = Status.Reduxed( 'socket' );

const App = () => (
    <div>
        <p>My application</p>

        <SocketStatus />
    </div>
);
```

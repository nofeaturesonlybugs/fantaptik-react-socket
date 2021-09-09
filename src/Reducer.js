import Actions from './Actions';

/**
 * makeStoreToProps creates a store-to-props function in order to redux the component.  
 * 
 * @ignore
 * @param {string} reducerName The name of the reducer in the redux store.
 * @returns func The storeToProps function.
 */
export const makeStoreToProps = reducerName => {
    return ( { [reducerName] : reducer } ) => {
        return {
            connected : reducer.connected,
            scheduled : reducer.scheduled,
            stopped : reducer.stopped,
        };
    };
}

/**
 * @typedef {Object} ReducerState
 * @see {Reducer}
 * @property {boolean} connected `true` when the socket is connected.
 * @property {number} scheduled Timeout in milliseconds before `Socket.connect()` will be called;
 * 0 when `Socket.connect()` is not scheduled.
 * @property {boolean} stopped `true` when `Socket.stop()` has been called.
 */


const initState = {
    // true when socket is connected, false otherwise.
    connected : false,

    // timeout in milliseconds that socket is waiting to attempt to connect when retrying a failed connection.
    scheduled : 0,

    // true when socket has been stopped intentionally; false when connecting or connected.
    stopped : true,
};

/**
 * `Reducer` is the handler function for redux actions.
 * 
 * @see {ReducerState}
 * @param {object} state The current reducer state or init state.
 * @param {obejct} action The current action to process.
 */
const Reducer = ( state = initState, action ) => {
    switch( action.type ) {
        case Actions.Types.Connect: {
            const { socket } = action;
            return { ...state, connected : true, stopped : socket.stopped };
        }
        
        case Actions.Types.Disconnect: {
            const { socket } = action;
            return { ...state, connected : false, stopped : socket.stopped };
        }

        case Actions.Types.Scheduled: {
            const { scheduled } = action;
            return { ...state, scheduled };
        }

        default:
            return state;
    }
};

export default Reducer;
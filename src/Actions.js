import { MODULE_NAME } from './consts';

/**
 * `Types` are the strings for `action.type` when using a reducer.
 * 
 * @name Actions.Types
 * @type {Object}
 * @property {string} Connect The `Connect` action string.
 * @property {string} Disconnect The `Disconnect` action string.
 * @property {string} Scheduled The `Scheduled` action string.
 */
const Types = {
    /**
     * `Connect` is dispatched when a `Plugin` makes a successful socket connection.
     */
    Connect : MODULE_NAME + '/socket/connect',

    /**
     * `Disconnect` is dispatched when a `Plugin` disconnects from the server.
     */
    Disconnect : MODULE_NAME + '/socket/disconnect',

    /**
     * `Scheduled` is dispatched when a `Plugin` has an `onscheduled` call.  It will be dispatched once
     * with the specified `timeout` and then after the timeout expires another dispatch with `timeout=0`.
     */
    Scheduled : MODULE_NAME + '/socket/scheduled',
};

/**
 * `Connect` is dispatched when a `Plugin` makes a successful socket connection.
 * 
 * @typedef {Object} Actions~Connect
 * @property {string} type
 * @property {Socket} socket The `Socket` that connected.
 */

/**
 * `Disconnect` is dispatched when a `Plugin` disconnects from the server.
 * 
 * @typedef {Object} Actions~Disconnect
 * @property {string} type
 * @property {Socket} socket The `Socket` that disconnected.
 */

/**
 * `Scheduled` is dispatched in pairs when a `Plugin` has an `onscheduled` call.  The first dispatch
 * will have `scheduled=timeout-in-milliseconds` indicating when `Socket.connect()` will next be attempted.
 * The second dispatch will have `scheduled=0` indicating `Socket.connect()` is no longer scheduled.
 * 
 * @typedef {Object} Actions~Scheduled
 * @property {string} type
 * @property {Socket} socket The `Socket` that scheduled.
 * @property {number} scheduled The timeout in milliseconds for the `Socket.connect(). reschedule.
 */

/**
 * `Actions` are the default objects and fields expected by the `Reducer` function.
 * 
 * @namespace
 * @property {Actions~Connect} Connect
 * @property {Actions~Disconnect} Disconnect
 * @property {Actions~Scheduled} Scheduled
 */
const Actions = {
    /**
     * `Connect` is dispatched when a `Plugin` makes a successful socket connection.
     */
    Connect : {
        type: Types.Connect,
        socket : null,
    },

    /**
     * `Disconnect` is dispatched when a `Plugin` disconnects from the server.
     */
    Disconnect : {
        type: Types.Disconnect,
        socket : null,
    },

    /**
     * `Scheduled` is dispatched in pairs when a `Plugin` has an `onscheduled` call.  The first dispatch
     * will have `scheduled=timeout-in-milliseconds` indicating when `Socket.connect()` will next be attempted.
     * The second dispatch will have `scheduled=0` indicating `Socket.connect()` is no longer scheduled.
     */
    Scheduled : {
        type : Types.Scheduled,
        scheduled : 0,
        socket : null,
    },

};

Actions.Types = Types;

export default Actions;
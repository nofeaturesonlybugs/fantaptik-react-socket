import Actions from './Actions';

/**
 * Plugin is a `Plugin` for `Socket` that emits appropriate redux actions
 * for `Socket` events.
 */
class Plugin {
    /**
     * Create a new `Plugin` to emit redux actions for `Socket` events.
     * 
     * @param {object} store The redux store.
     */
    constructor( store ) {
        // TODO Could verify `store` implements needed interface.
        //
        this.store = store;
    }

    onconnect() {
        this.store.dispatch( { ...Actions.Connect, socket : this.Socket } );
    }

    ondisconnect() {
        this.store.dispatch( { ...Actions.Disconnect, socket : this.Socket } );
    }

    onscheduled( event ) {
        const { scheduled } = event;
        this.store.dispatch( { ...Actions.Scheduled, scheduled, socket : this.Socket } );
        setTimeout( () => {
            this.store.dispatch( { ...Actions.Scheduled, scheduled : 0, socket : this.Socket } );
        }, scheduled );
    }
}

export default Plugin;
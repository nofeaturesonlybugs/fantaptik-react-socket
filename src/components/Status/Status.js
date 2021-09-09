import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import  { Card, Loader, Modal, Show } from '@fantaptik/react-material';

import './Status.css';
import { makeStoreToProps } from '../../Reducer';

const ModalCard = Modal.Hoc( Card );

const Status = ( props ) => {
    let { connected, scheduled, stopped } = props;
    let title;
    scheduled = scheduled / 1000;
    const styles = {};
    if( scheduled > 0 ) {
        styles.animation = `react-socket-attempting ${scheduled}s linear forwards`;
        styles.display = "block";
        title = 'Waiting...';
    } else {
        styles.animation = "none 0s linear forwards";
        styles.display = "none";
        title = 'Attempting to connect...';
    }
    return (
        <Show when={! stopped && ! connected}>
            <ModalCard modal dismissible={false}>
                <Card.Title>Connection Lost - {title}</Card.Title>
                <Loader style={styles} />
            </ModalCard>
        </Show>
    );
}

Status.propTypes = {
    /** `true` when connected to the `Socket`. */
    connected : PropTypes.bool,

    /** Timeout in milliseconds `Socket` is waiting to attempt a new connection. */
    scheduled : PropTypes.number,

    /** `true` when the socket was intentionally stopped; `false` when connecting or connected. */
    stopped : PropTypes.bool,
}

Status.Reduxed = reducerName => {
    // Create our storeToProps function with the variable-name reducer.
    const storeToProps = makeStoreToProps( reducerName );
    return connect( storeToProps )( Status );
}

export default Status;
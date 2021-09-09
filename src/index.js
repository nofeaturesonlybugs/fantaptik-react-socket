export { default as Actions } from './Actions';
export { default as Reducer } from './Reducer';

export { default as Plugin } from './Plugin';

export { default as Status } from './components/Status/Status';

import Status from './components/Status/Status';


/**
 * @typedef {Object} FactoryReturns
 * @see {Factory}
 * @property {Component} Status Reduxed `Status` component.
 */

/**
 * Factory creates reduxed components.
 * 
 * @function
 * @see {FactoryReturns}
 * @param {string} storeKey The store/reducer key.
 * @returns {FactoryReturns}
 */
export const Factory = storeKey => {
    return {
        Status : Status.Reduxed( storeKey ),
    };
}
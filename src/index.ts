// import React from 'react';
import moment from 'moment';
import { WithHook } from './Scenes/middleware.scene';

/**
 * Initialize package with env variables
 */
function InitLibrary() {
    console.log(moment().fromNow());
    console.log('You are seeing this console because import is working fine');
}

export {
    WithHook,
    InitLibrary,
};

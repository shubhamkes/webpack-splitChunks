/**
 * Statemanagement utils
 * used to broadcast events and capture them 
 * 
 * contains main
 */

let SubscribeToEvent;
let UnsubscribeEvent;
let StoreEvent;

function InitializeStateManager({ ...props }) {
    SubscribeToEvent = props.SubscribeToEvent;
    UnsubscribeEvent = props.UnsubscribeEvent;
    StoreEvent = props.StoreEvent;
}

export { InitializeStateManager, SubscribeToEvent, UnsubscribeEvent, StoreEvent };

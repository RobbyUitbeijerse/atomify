import { initializePropertyToAttributes, addRemoveEventListeners } from '../decorators';
import { updateComponent, safeCall } from '../component';
import { defer } from '../utilities';
import { IS_DISCONNECTING, ON_READY_RESOLVED } from '../constants';
export const connectedCallback = async (target, options, instance) => {
    target[ON_READY_RESOLVED] = defer();
    // Check if target is disconnecting and wait with init when component is fully disconnected.
    if (target[IS_DISCONNECTING]) {
        await target[IS_DISCONNECTING].promise;
    }
    await safeCall(target, instance, 'connectedCallback');
    await safeCall(target, instance, 'componentWillLoad');
    await safeCall(target, instance, 'componentWillRender');
    await initializePropertyToAttributes(target);
    await updateComponent(target, options);
    await addRemoveEventListeners(target);
    target.connected = true;
    target.setAttribute('initialized', '');
    await safeCall(target, instance, 'componentDidRender');
    await safeCall(target, instance, 'componentDidLoad');
    target[ON_READY_RESOLVED].resolve(target);
};
//# sourceMappingURL=connected-callback.js.map
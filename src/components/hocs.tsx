import React, { ComponentType } from 'react';
/**
 * https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
*/
import hoistNonReactStatics from 'hoist-non-react-statics';

import { useStores } from '../hooks/mod';

export type TWithStoreHOC = <P extends unknown>(
    Component: ComponentType<P>,
) => (props: P) => JSX.Element;

export const withStore: TWithStoreHOC = (WrappedComponent) => (props) => {
    const ComponentWithStore = () => {
        const store = useStores();

        return <WrappedComponent {...props} store={store} />;
    };

    ComponentWithStore.defaultProps = { ...WrappedComponent.defaultProps };
    ComponentWithStore.displayName = `WithStores(${
        WrappedComponent.name || WrappedComponent.displayName
    })`;

    hoistNonReactStatics(ComponentWithStore, WrappedComponent);

    return <ComponentWithStore />;
}
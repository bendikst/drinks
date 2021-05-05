import React, { FC, createContext, ReactNode, ReactElement } from 'react';
import { RootStore } from '../stores/mod';

export const StoreContext = createContext<RootStore | undefined>(undefined);

export type StoreComponent = FC<{
    store: RootStore;
    children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({
    store,
    children
}): ReactElement => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}
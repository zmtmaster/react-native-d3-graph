import React, { createContext } from 'react';
import data from '../api';
import { useGraph } from '../hooks';
import { defaultValue } from '../hooks/useGraph';

import AppLoading from '../components/loading';

const Context = createContext(defaultValue);

export default Context;

export const Provider = ({ children }) => {
  const payload = useGraph(data);

  return !payload ? (
    <AppLoading />
  ) : (
    <Context.Provider value={payload}>{children}</Context.Provider>
  );
};

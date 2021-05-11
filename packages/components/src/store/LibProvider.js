import React from 'react';
import LibContext from "./LibContext";

const LibProvider = ({ children, config }) => <LibContext.Provider value={config}>{children}</LibContext.Provider>;

export default LibProvider;

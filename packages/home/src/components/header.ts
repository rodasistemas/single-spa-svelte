import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Header from './Header';

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Header
  });
  
  export const bootstrap = headerLifecycles.bootstrap;
  export const mount = headerLifecycles.mount;
  export const unmount = headerLifecycles.unmount;
  
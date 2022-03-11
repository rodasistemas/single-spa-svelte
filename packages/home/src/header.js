import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';

const Header = () => {
  const [count, setCount] = useState(store.count);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.count);
    });
  }, []);
  return (
    
      <header className="fixed flex justify-between top-0 width-['100%'] bg-slate-500 p-20 ">
        Header
      <div>Cart Count - {count}</div>
      </header>
    
  );
};

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

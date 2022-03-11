import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const Footer = () => (
  <div className="fixed bottom-0 full-width bg-slate-500">
    <table width="100%">
      <tbody>
        <tr style={{ verticalAlign: 'middle' }}>
          <td
            className="mui--appbar-height mui--text-display1"
            style={{ paddingLeft: '1em' }}
          >
            Footer
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);  

const footerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;

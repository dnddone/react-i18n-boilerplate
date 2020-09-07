import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './i18n'; // It needs to be bundled

ReactDOM.render(
  /**
   * i18n translations might still be loaded by the http backend
   */
  <Suspense fallback={<>Loading...</>}>
    <React.StrictMode>
      {/* <App /> */}
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

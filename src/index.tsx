import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { render } from 'react-dom';

const root = document.getElementById('root');

Promise.all([import(/* webpackChunkName: "api" */ './setup')]).then(() => {
  render(<div>Test</div>, root);
});

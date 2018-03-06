import React from 'react';
import { render } from 'react-dom';

import routes from './routes';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
import initialState from './store/initialState';
import './index.scss';

// import registerServiceWorker from './registerServiceWorker';

const store = configureStore(initialState);
store.runSaga(rootSaga);

render(<Root store={store} routes={routes} />, document.getElementById('root'));

// registerServiceWorker();

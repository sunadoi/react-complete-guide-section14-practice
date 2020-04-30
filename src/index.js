import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import personReducer from './store/reducers/person';
import resultReducer from './store/reducers/result';

// const rootReducer = combineReducers({
//   per: personReducer,
//   res: resultReducer
// })

const store = createStore(personReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

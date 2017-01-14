import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import routes from './routes';

injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('root')
);

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './app/App';
import EventList from './events/EventList';

export default (
    <Route path="/" component={App}>
        <Route path="events">
            <IndexRoute component={EventList}/>
        </Route>
    </Route>
);
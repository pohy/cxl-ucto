import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './app/App';
import EventList from './events/EventList';
import EventView from './events/EventView';

export default (
    <Route path="/" component={App}>
        <Route path="events">
            <IndexRoute component={EventList}/>
            <Route path=":id" component={EventView}/>
        </Route>
    </Route>
);
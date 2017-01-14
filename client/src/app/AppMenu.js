import React from 'react';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router';

const AppMenu = () => (
    <div>
        <Link to="/events">
            <IconButton
                children="event"
                iconClassName="material-icons"
                tooltip="Events"
            />
        </Link>
    </div>
);

export default AppMenu();

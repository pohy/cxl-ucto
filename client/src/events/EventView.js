import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';

import './EventView.css';

class EventView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {
                id: 1,
                title: 'Da Vinci',
                start: new Date('2017-01-19'),
                end: new Date('2017-01-21'),
                frozen: false,
                author: {
                    id: '1',
                    name: 'pohy'
                }
            }
        };
    }

    render() {
        const {title, start, end, author: {name: author}} = this.state.event;
        const offset = 's2';

        return (
            <div className="container left-align">
                <h1 className="header">{title}</h1>
                <h5 className="row">
                    <span className="col s2">Start: </span>
                    <strong>{start.toLocaleString('cs')}</strong>
                </h5>
                <h5 className="row">
                    <span className={`col ${offset}`}>End:</span>
                    <strong>{end.toLocaleString('cs')}</strong></h5>
                <h5 className="row">
                    <span className={`col ${offset}`}>Created by:</span>
                    <strong>{author}</strong>
                </h5>
            </div>
        );
    }
}

export default EventView;
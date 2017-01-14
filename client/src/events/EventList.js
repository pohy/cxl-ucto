import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [{
                id: 1,
                title: 'Da Vinci',
                start: new Date('2017-01-19'),
                end: new Date('2017-01-21'),
                frozen: false
            }]
        };
    }

    renderEvents = () =>
        this.state.events.map((event) =>
            <TableRow>
                <TableRowColumn children={event.title}/>
                <TableRowColumn children={event.start.toLocaleString('cs')}/>
                <TableRowColumn children={event.end.toLocaleString('cs')}/>
                <TableRowColumn>
                    <Link to={`/events/${event.id}`}>
                        <FlatButton
                            iconClassName="material-icons"
                            label="Edit"
                            icon={<FontIcon className="material-icons" children="edit"/>}
                            />
                    </Link>
                </TableRowColumn>
            </TableRow>
        );

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn children={'Name'}/>
                        <TableHeaderColumn children={'From'}/>
                        <TableHeaderColumn children={'To'}/>
                        <TableHeaderColumn children={'Actions'}/>
                    </TableRow>
                </TableHeader>
                <TableBody
                    children={this.renderEvents()}
                    displayRowCheckbox={false}
                />
            </Table>
        );
    }
}

export default EventList;

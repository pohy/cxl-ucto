import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {browserHistory} from 'react-router';

import './app.css';
import AppMenu from './AppMenu';

class App extends Component {
    goHome = () => browserHistory.push('/');

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Účto 2.0"
                        showMenuIconButton={false}
                        iconElementRight={AppMenu}
                        onTitleTouchTap={this.goHome}
                        className="app-bar"
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

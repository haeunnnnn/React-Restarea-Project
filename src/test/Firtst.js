import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Firtst extends Component {
    next = () => {
        this.props.nextStep();
    }

    render() {
        return (
            <MultiThemeProvider>
                <React.Fragment>
                    <RaisedButton label="다른페이지" style={styles.button} onClick={this.next} />
                </React.Fragment>
            </MultiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

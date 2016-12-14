import 'babel-polyfill'
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Counter from '../components/Counter'

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};

class App extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onCountClick: PropTypes.func.isRequired,
    };

    render() {
        const {onCountClick, value} = this.props;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={styles.container}>
                    <Counter
                        value={value}
                        onCountClick={onCountClick}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onCountClick: (type) => {
            dispatch({'type': type})
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
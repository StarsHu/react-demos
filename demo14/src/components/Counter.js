import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onCountClick: PropTypes.func.isRequired,
    };

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onCountClick('INCREMENT')
        }
    };

    incrementAsync = () => {
        setTimeout(() => {this.props.onCountClick('INCREMENT')}, 1000)
    };

    render() {
        const {onCountClick, value} = this.props;
        return (
            <div>
                <h1>Clicked: {value} times</h1>
                <FloatingActionButton onTouchTap={(e) => (onCountClick('INCREMENT'))}>
                    <ContentAdd />
                </FloatingActionButton>
                <FloatingActionButton onTouchTap={(e) => (onCountClick('DECREMENT'))}>
                    <ContentRemove />
                </FloatingActionButton>
                <RaisedButton label="Increment if odd" onTouchTap={this.incrementIfOdd}/>
                <RaisedButton label="Increment async" onTouchTap={this.incrementAsync}/>
            </div>
        )
    }
}

export default Counter
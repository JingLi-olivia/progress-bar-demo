import React from 'react';
import '../css/progress-bar.css';

const Range = (props) => {
    return (
        <div className={`progressbar-value ${props.percentRange<=100 ? "" : "warning"}`}
        style={{width: `${props.percentRange<=100 ? props.percentRange : 100}%`}}>
        </div>
    );
};

const ProgressBar = (props) => {
    let className = 'progress-bar';
    if (props.order === props.currentBar) {
        className += ' bar-active';
    }
    return (
        <div className={className}>
            <Range percentRange={props.percentRange}/>
            <span className='progressbar-label'>{Math.round(props.percentRange)}%</span>
        </div>
    );
};

class ProgressBars extends React.Component {
    componentWillReceiveProps(nextProps) {
        // Any time props.bars changes, update state.
        this.setState({
            bars:nextProps.bars,
            currentBar:nextProps.currentBar,
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            bars: props.bars,
            currentBar: props.currentBar
        };
    }

    render() {
        return (
            <div className="container">
                {this.state.bars.map((val, index) => (
                    <ProgressBar key={index} order={index} currentBar = {this.state.currentBar} percentRange={val}/>
                    
                ))}
            </div>

        );
    }
}
export default ProgressBars;
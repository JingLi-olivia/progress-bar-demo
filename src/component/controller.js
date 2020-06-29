import React from 'react';
import '../css/progress-bar.css';


class Controller extends React.Component {
    componentWillReceiveProps(nextProps) {
        // Any time props.bars changes, update state.
        this.setState({
            bars:nextProps.bars,
            buttons:nextProps.buttons
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            bars: props.bars,
            buttons: props.buttons,
            currentBar: props.currentBar
        };
        console.log("dgfhghj");
        console.log(props);
    }

    updateprogressbar(val) {
        var newVal = this.state.bars[this.state.currentBar] + val;
        var f =0;
        if(newVal >=0){
            if(newVal >this.props.limit){
                f= this.props.limit;
            }else{
                f= newVal;
            }
        }
        else{
            f=0
        }
        
        var bars=this.state.bars;
        bars[this.state.currentBar]=f;
        this.setState({bars});
    }
    setSelectorState(val) {
        this.setState({currentBar: val * 1})
        
    }

    render() {
        return (

                <div className="container">

                    <div className="toggle-buttons">
                        <select value={this.state.currentBar} onChange={e=>this.setSelectorState(e.target.value)}>
                            {this.props.bars.map((option,index) => (
                                <option key={index} value={index}>progress bar {index + 1}</option>
                            ))}
                        </select>
                        {this.props.buttons.map((val, index) => (
                            <button key={index} onClick={() => this.updateprogressbar(val)}>{val}
                            </button>
                        ))}
                    </div>
                </div>

        );
    }
}
export default Controller;
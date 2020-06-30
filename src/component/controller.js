import React from 'react';
import '../css/progress-bar.css';


class Controller extends React.Component {
    componentWillReceiveProps(nextProps) {
        // Any time props.bars changes, update state.
        this.setState({
            bars:nextProps.bars,
            buttons:nextProps.buttons,
            currentBar:nextProps.currentBar
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            bars: props.bars,
            buttons: props.buttons,
            currentBar: props.currentBar
        };
    }

    handlebuttonOnClick(val) {
        var newVal = (this.state.bars[this.state.currentBar] + val)*1;
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
        var barorder = this.state.currentBar
        bars[this.state.currentBar]=f;
        this.props.onChange(barorder,bars)
    }

    handleDropdownchange(val) {
        var bars=this.state.bars;
        this.props.onChange(val,bars)
    }

    render() {
        return (

                <div className="container">

                    <div className="toggle-buttons">
                        <select value={this.state.currentBar} onChange={e=>this.handleDropdownchange(e.target.value,this.props.bars)}>
                            {this.props.bars.map((option,index) => (
                                <option key={index} value={index}>progress bar {index + 1}</option>
                            ))}
                        </select>
                        {this.props.buttons.map((val, index) => (
                            <button key={index} onClick={() => this.handlebuttonOnClick(val)}>{val}
                            </button>
                        ))}
                    </div>
                </div>

        );
    }
}
export default Controller;
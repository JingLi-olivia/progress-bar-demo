import React, {Component} from 'react';

import ProgressBars from './progressbar';
import Controller from './controller';

class ProgressbarContainer extends Component {
    constructor(props) {
        super(props)
    
        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

    }
    state = {
        buttons: [],
        bars: [],
        limit: [],
        currentBar:0
    }
            componentWillMount() {
            fetch('http://pb-api.herokuapp.com/bars')
            .then(res => res.json())
            .then((data) => {
            console.log('test test')
            this.setState(
                {
                    buttons: data.buttons,
                    bars: data.bars,
                    limit: data.limit,
                    currentBar:0
                })
    
                console.log(this.state)
            })
            .catch(console.log)
        }


    handler(currentbar,bars) {
        this.setState(
            {
            currentBar: currentbar * 1,
            bars:bars
        })
      }

    render() {
        return (
            <div className='demo-page'>
                <h1>Progress Bars Demo</h1>
                <div className="container">
                    <ProgressBars bars={this.state.bars}  currentBar={this.state.currentBar}/>
                    <Controller bars={this.state.bars} limit={this.state.limit} buttons={this.state.buttons} currentBar={this.state.currentBar} handler = {this.handler} />

                </div>
            </div>

        );
    }
}

export default ProgressbarContainer;
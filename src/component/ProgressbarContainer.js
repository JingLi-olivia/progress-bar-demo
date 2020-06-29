import React, {Component} from 'react';

import ProgressBars from './progressbar';
import Controller from './controller';

class ProgressbarContainer extends Component {
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

    render() {
        return (
            <div className='demo-page'>
                <h1>Progress Bars Demo</h1>
                <div className="container">
                    <ProgressBars bars={this.state.bars} limit={this.state.limit} currentbar={this.state.currentBar}/>
                    <Controller bars={this.state.bars} buttons={this.state.buttons} currentbar={this.state.currentBar}/>

                </div>
            </div>

        );
    }
}

export default ProgressbarContainer;


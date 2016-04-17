import React from 'react';
import _ from 'lodash';

const FRAME_DURATION = 20;

export default React.createClass({

  getInitialState: function(){
    return {
      style: {
        height: '300px',
        backgroundColor: 'red'
      },
      step: 0
    }
  },

  componentDidMount: function(){
    this.runAnimation();
  },

  numberOfSteps: function(){
    return this.props.duration / FRAME_DURATION;
  },

  widthDifference: function(){
    return this.props.endWidth - this.props.startWidth;
  },

  runAnimation: function(){
    while (this.state.step < this.numberOfSteps()) {
      setTimeout( () => {
        var newStyle = this.state.style;
        var newWidth = this.props.startWidth + (this.widthDifference() / this.numberOfSteps() * this.state.step);
        newStyle.width = newWidth;
        this.setState({style: newStyle});
        var newStep = this.state.step + 1;
        this.setState({step: newStep});
      }, FRAME_DURATION);
    }
  },

  render: function(){
    return (
      <div style={this.state.style}>
        Current width: {this.state.style.width}
      </div>
    )
  }
})
import React from 'react';
import _ from 'lodash';

const FRAME_DURATION = 100;

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
    var newStyle = this.state.style;

    if (this.state.step == 0) {
      newStyle.width = this.props.startWidth;
    } else if (this.state.step == this.numberOfSteps()) {
      newStyle.width = this.props.endWidth;
    } else {
      var newWidth = this.props.startWidth + (this.widthDifference() / this.numberOfSteps() * this.state.step);
      var newWidth = _.round(newWidth);
      newStyle.width = newWidth;
    }

    this.setState({style: newStyle});

    var newStep = this.state.step + 1;
    this.setState({step: newStep});

    if (this.state.step < this.numberOfSteps() + 1) {
      setTimeout(this.runAnimation, FRAME_DURATION);
    }
  },

  render: function(){
    return (
      <div style={this.state.style}>
        Start width: {this.props.startWidth}
        <br/>End width: {this.props.endWidth}
        <br/>Current width: {this.state.style.width}
        <br/>Duration: {this.props.duration}
      </div>
    )
  }
})
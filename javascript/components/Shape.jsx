import React from 'react';
import _ from 'lodash';

export default React.createClass({

  render: function(){
    return (
      <div>
        Initial height: {this.props.startColorR}
        <br/>initialValue: {this.state.initialValue}
        <br/>endValue: {this.state.endValue}
        <br/>frames: {this.state.frames}
        <br/>height interval: {this.state.heightInterval}

        <br/>Style: {JSON.stringify(this.state.style)}
        <br/>Duration: {this.props.duration}
        <div style={this.state.style} className="shape">
        </div>
      </div>
    )
  }
})
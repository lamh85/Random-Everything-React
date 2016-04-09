import React from 'react';
import _ from 'lodash';

export default class extends React.Component {
  componentDidMount(){
    console.log(this.refs.shape.style);
    this.animate();
    console.log(_.random(0,6));
  }
  animate(){



    console.log('animating!');
    console.log(this.refs.shape.style);
  }
  render(){
    return (
      <div style={this.props.styleProp} className="shape" ref="shape">
      </div>
    )
  }
}
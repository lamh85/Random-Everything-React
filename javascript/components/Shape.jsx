import React from 'react';
import _ from 'lodash';

export default class extends React.Component {
  componentDidMount(){
    console.log(this.refs.shape.style);
    this.animate();
    console.log(_.random(0,6));
  }
  animate(){

    /*
      Algorithm:
      component mounts
      animation function runs
        start with the original CSS values
        transition to the end-CSS values
          setInterval - For every frame, change all of the CSS values
            - the goal is 60 frames per second. 1000 milliseconds / 60 frames = 16.666... milliseconds

      parent component unmounts the shape component
    */


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
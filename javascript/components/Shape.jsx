import React from 'react';
import _ from 'lodash';

export default class extends React.Component {

  getInitialState(){
    return {
      style: {}
    }
  }

  componentWillMount(){
    this.setState({style: this.props.styleProp});
  }

  componentDidMount(){
  }

  timeInterval(){
    // Divide duration in milliseconds by 16.666... milliseconds.
    // 16.666... milliseconds is equal to 60 frames per second.
    return _.round( this.props.duration / (16 + 2/3) )
  }

  attributeInterval(initialValue, endValue){
    return (endValue - initialValue) / this.timeInterval();
  }

  initialStyle(){
    return {
      backgroundColor: `rgb(${makeRandom(1,255)}, ${makeRandom(1,255)}, ${makeRandom(1,255)})`,
      top: `${makeRandom(0,100)}%`,
      left: `${makeRandom(0,100)}%`,
      opacity: makeRandom(1,100,0.01),
      transform: `rotate(${makeRandom(0,360)}deg)`,
      width: `${makeRandom(300, 100)}px`,
      height: `${makeRandom(200, 100)}px`
    }

/*
          startColorR={Math.floor(makeRandom(255))}
          startColorG={Math.floor(makeRandom(255))}
          startColorB={Math.floor(makeRandom(255))}
          startTop={makeRandom(100)}
          startLeft={makeRandom(100)}
          startOpacity={makeRandom()}
          startRotation={makeRandom(360)}
          startWidth={makeRandom(300, 100)}
          startHeight={makeRandom(300, 100)}
*/

  }

  animate(){
    var colorRInterval = _.round( this.attributeInterval() )

/*
          endColorR={Math.floor(makeRandom(255))}
          endColorG={Math.floor(makeRandom(255))}
          endColorB={Math.floor(makeRandom(255))}
          endTop={makeRandom(100)}
          endLeft={makeRandom(100)}
          endOpacity={makeRandom()}
          endRotation={makeRandom(360)}
          endWidth={makeRandom(300, 100)}
          endHeight={makeRandom(300, 100)}
          duration={makeRandom(1,10,1000)}
*/


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
      <div style={this.state.style} className="shape">
      </div>
    )
  }
}
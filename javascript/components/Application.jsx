import React from 'react';
import _ from 'lodash';
import Shape from './Shape';

class Application extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shapeStyles: []
    }
  }

  componentWillMount(){
    this.stylePusher();
  }

  stylePusher(){
    setInterval(() =>{
      var shapesArray = this.state.shapeStyles;
      var newStyle = this.styleFactory();
      shapesArray.push(newStyle);
      this.setState({shapeStyles: shapesArray});
    }, 250);
  }

  makeRandom(floor = 0, ceiling = 0, multiplier = 1){
    return _.random(floor, ceiling) * multiplier
  }

  makeRandom255(){
    return this.makeRandom(0, 255);
  }

  makeRandom100(){
    return this.makeRandom(0, 100);
  }

  styleFactory(){
    return {
      backgroundColor: `rgb(${this.makeRandom255()}, ${this.makeRandom255()}, ${this.makeRandom255()})`,
      top: `${this.makeRandom100()}%`,
      left: `${this.makeRandom100()}%`,
      opacity: this.makeRandom(40, 100, 0.01),
      transform: `rotate(${this.makeRandom(0, 360)}deg)`,
      width: `${this.makeRandom(100, 400)}px`,
      height: `${this.makeRandom(100, 300)}px`,
      position: "absolute"
    }
  }

  render(){

    return (
      <div>
        {this.state.shapeStyles.map((style, elementIndex)=> <div style={style} key={elementIndex}></div>)}
      </div>
    )
  }
}

export default Application
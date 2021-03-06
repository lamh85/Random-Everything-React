import React from 'react';
import _ from 'lodash';
import Shape from './Shape';
import update from 'react-addons-update';

const DURATION_PER_FRAME = 100;

class Application extends React.Component {

  constructor(props){
    // super() calls the constructor() of the parent class
    super(props);
    this.state = {
      startStyles: [],
      currentStyles: [],
      endStyles: [],
      myObject: {
        foo: "bar",
        kids: ["Stan", "Kyle", "Cartman", "Kenny"]
      },
      myResult: ""
    }
  }

  componentWillMount(){
    // this.incrementer();
    es7();
  }

  es7(){
    var x = 3 ** 3;
    this.setState({myResult: x});
  }

  stylePusher(){
    var startStyles = this.state.startStyles;
    var newStartStyle = this.styleFactory();
    startStyles.push(newStartStyle);
    this.setState({startStyles: startStyles});

    var currentStyles = this.state.currentStyles;
    var newCurrentStyle = this.styleFactory();
    newCurrentStyle.currentTime = 0;
    newCurrentStyle.currentFrame = 0;
    currentStyles.push(newCurrentStyle);
    this.setState({currentStyles: currentStyles});

    var endStyles = this.state.endStyles;
    var newEndStyle = this.styleFactory();
    newEndStyle.duration = this.makeRandom(3, 5, 1000);
    endStyles.push(newEndStyle);
    this.setState({endStyles: endStyles});
  }

  styleChanger(){
    // Loop through array of styles, and push each object to the array
    var newCurrentStyles = this.state.currentStyles.map((style, index) => {
      var styleObject = {};
      var currentFrame = style.currentFrame;
      styleObject.red = this.currentFrameAttribute("red", index, currentFrame);
      styleObject.green = this.currentFrameAttribute("green", index, currentFrame);
      styleObject.blue = this.currentFrameAttribute("blue", index, currentFrame);
      styleObject.top = this.currentFrameAttribute("top", index, currentFrame, false) + "%";
      styleObject.left = this.currentFrameAttribute("left", index, currentFrame, false) + "%";
      styleObject.opacity = this.currentFrameAttribute("opacity", index, currentFrame, false);
      styleObject.transform = "rotate("+ this.currentFrameAttribute("") +"deg)";
      styleObject.width = this.currentFrameAttribute("width", index, currentFrame) + "px";
      styleObject.height = this.currentFrameAttribute("height", index, currentFrame) + "px";
      styleObject.borderRadius = this.currentFrameAttribute("borderRadius", index, currentFrame) +"%";
    });
  }

  incrementer(){
    setInterval(()=>{
      this.stylePusher();
      this.styleChanger();
    }, 500);
  }

  currentFrameAttribute(attribute, arrayIndex, currentFrame, round = true){
    var startValue = this.state.startStyles[arrayIndex].attribute;
    var endValue = this.state.endStyles[arrayIndex].attribute;
    var valuePerFrame = (parseFloat(endValue) - parseFloat(startValue)) / DURATION_PER_FRAME;
    var currentValue = startValue + valuePerFrame * currentFrame;
    return round ? _.round(currentValue) : currentValue;
  }

  styleChangePerFrame(attribute, arrayIndex){
    var startValue = this.state.startStyles[arrayIndex].attribute;
    var endValue = this.state.endStyles[arrayIndex].attribute;
    return (endValue - startValue) / DURATION_PER_FRAME;
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
    var red = this.makeRandom255();
    var green = this.makeRandom255();
    var blue = this.makeRandom255();

    return {
      red: red,
      green: green,
      blue: blue,
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      top: `${this.makeRandom100()}%`,
      left: `${this.makeRandom100()}%`,
      opacity: this.makeRandom(10, 100, 0.01),
      transform: `rotate(${this.makeRandom(0, 360)}deg)`,
      width: `${this.makeRandom(100, 400)}px`,
      height: `${this.makeRandom(100, 300)}px`,
      borderRadius: `${this.makeRandom(0, 50)}%`,
      position: "absolute"
    }
  }

  myUpdate(){
    console.log('updating')

    var newObject = this.state.myObject
    newObject = update(newObject, {kids:
      {$push: ["Clyde"]}
    });
    console.log(newObject);
    this.setState({myObject: newObject});
  }

  render(){

    return (
      <div>
        {JSON.stringify(this.state.myObject)}
        <br/>
        <button onClick={() => this.myUpdate()} >UPDATE</button>
        {this.state.currentStyles.map((style, elementIndex)=> <div style={style} key={elementIndex}></div>)}
        <p>
        {JSON.stringify(this.state.myResult)}
      </div>
    )
  }
}

export default Application
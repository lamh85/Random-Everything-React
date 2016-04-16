import React from 'react';
import _ from 'lodash';

export default React.createClass({

  getInitialState(){
    return {
      style: {},
      colorR: "",
      colorG: "",
      colorB: "",
      top: "",
      left: "",
      opacity: "",
      rotation: "",
      width: "",
      height: "",
      timeLapsed: 0,
      initialValue: "",
      endValue: "",
      frames: "",
      heightInterval: ""
    }
  },

  componentWillMount(){
  },

  componentDidMount(){
    this.initiateStyle()
  },

  componentDidUpdate: function(prevProps, prevState){
    if (prevState.colorR != this.state.colorR){
      this.setStyleState();
    }

    if (prevState.style != this.state.style && this.state.timeLapsed < this.props.duration){
      var newTimeLapsed = this.state.timeLapsed + this.timeInterval();
      setTimeout(function(){
        this.setState({timeLapsed: newTimeLapsed});
      }.bind(this), this.timeInterval() )
    }

    if (prevState.timeLapsed != this.state.timeLapsed) {
      this.incrementStyle();
    }
  },

  timeInterval(){
    // 16.666... milliseconds is equal to 60 frames per second.
    return 16
  },

  attributeInterval(initialValue, endValue){
    this.setState({initialValue: initialValue});
    this.setState({endValue: endValue});
    this.setState({frames: (this.props.duration / this.timeInterval())});
    return (endValue - initialValue) / (this.props.duration / this.timeInterval());
  },

  initiateStyle(){
    this.setState({colorR: this.props.startColorR});
    this.setState({colorG: this.props.startColorG});
    this.setState({colorB: this.props.startColorB});
    this.setState({top: this.props.startTop});
    this.setState({left: this.props.startLeft});
    this.setState({opacity: this.props.startOpacity});
    this.setState({rotation: this.props.startRotation});
    this.setState({width: this.props.startWidth});
    this.setState({height: this.props.startHeight});

    var realThis = this;
    setTimeout(() => {
      this.setStyleState();
      // this.animate();
    }, 0);
    this.setStyleState();
  },

  setStyleState(){
    var styleObj = {
      backgroundColor: `rgb(${this.state.colorR}, ${this.state.colorG}, ${this.state.colorB})`,
      top: `${this.state.top}%`,
      left: `${this.state.left}%`,
      opacity: this.state.opacity,
      transform: `rotate(${this.state.rotation}deg)`,
      width: `${this.state.width}px`,
      height: `${this.state.height}px`
    }
    this.setState({style: styleObj});
  },

  incrementStyle(){
    var colorRInterval = _.round( this.attributeInterval(this.props.startColorR, this.props.endColorR) )
    var colorGInterval = _.round( this.attributeInterval(this.props.startColorG, this.props.endColorG) )
    var colorBInterval = _.round( this.attributeInterval(this.props.startColorB, this.props.endColorB) )
    var topInterval = _.round( this.attributeInterval(this.props.startTop, this.props.endTop) )
    var leftInterval = _.round( this.attributeInterval(this.props.startLeft, this.props.endLeft) )
    var opacityInterval = _.round( this.attributeInterval(this.props.startOpacity, this.props.endOpacity) )
    var rotationInterval = _.round( this.attributeInterval(this.props.startRotation, this.props.endRotation) )
    var widthInterval = _.round( this.attributeInterval(this.props.startWidth, this.props.endWidth) )
    var heightInterval = _.round( this.attributeInterval(this.props.startHeight, this.props.endHeight) )
    this.setState({heightInterval: heightInterval});

    this.setState({colorR: _.round(this.state.colorR + colorRInterval) });
    this.setState({colorG: _.round(this.state.colorG + colorGInterval) });
    this.setState({colorB: _.round(this.state.colorB + colorBInterval) });
    this.setState({top: this.state.top + topInterval});
    this.setState({left: this.state.left + leftInterval});
    this.setState({opacity: this.state.opacity + opacityInterval});
    this.setState({rotation: this.state.rotation + rotationInterval});
    this.setState({width: this.state.width + widthInterval});
    this.setState({height: this.state.height + heightInterval});

    // setTimeout(() => {this.setStyleState()}, 0);
  },

  animate(){
    var currentTime = 0;
    while (currentTime < this.props.duration) {
      // setTimeout(() => {this.incrementStyle()}, 0);
      currentTime += this.timeInterval();
    }
  },

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
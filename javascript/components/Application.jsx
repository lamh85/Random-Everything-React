import React from 'react';
import _ from 'lodash';
import Shape from './Shape';

export default class extends React.Component {

  componentWillMount(){
    // http://www.html5rocks.com/en/tutorials/es6/promises/
    var promise = new Promise(function(resolve, reject) {
      // do a thing, possibly async, then…

      if (true) {
        // The "resolve" function returns the value. The Promise object's caller (see below) will retrieve this value using .then()
        // In this example, "Stuff worked" can be called by .then(function(value){})
        resolve("Stuff worked!");
      }
      else {
        reject(Error("It broke"));
      }
    });

    promise.then(function(result) {
      console.log(result); // "Stuff worked!"
    }, function(err) {
      console.log(err); // Error: "It broke"
    });
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

  createStyle(){
    return {
      backgroundColor: `rgb(${this.makeRandom255()}, ${this.makeRandom255()}, ${this.makeRandom255()})`,
      top: `${this.makeRandom100()}%`,
      left: `${this.makeRandom100()}%`,
      opacity: this.makeRandom(40, 100, 0.01),
      transform: `rotate(${this.makeRandom(0, 360)}deg)`,
      width: `${this.makeRandom(100, 400)}px`,
      height: `${this.makeRandom(100, 300)}px`
    }
  }

  render(){

    return (
      <div>
        {
          [1, 2].map((element, index) => {
            return (
              <Shape
                startStyle={this.createStyle()}
                endStyle={this.createStyle()}
                duration={this.makeRandom(2, 5, 1000)}
              />
            )
          })
        }
      </div>
    )
  }
}
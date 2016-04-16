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

  render(){
    const makeRandom = (floor = 0, ceiling = 0, multiplier = 1) => _.random(floor, ceiling) * multiplier;

    return (
      <div>
        {
          [1, 2].map((element, index) => {
            return (
              <Shape
                startColorR={Math.floor(makeRandom(255))}
                startColorG={Math.floor(makeRandom(255))}
                startColorB={Math.floor(makeRandom(255))}
                startTop={makeRandom(100)}
                startLeft={makeRandom(100)}
                startOpacity={makeRandom(40, 100, 0.01)}
                startRotation={makeRandom(360)}
                startWidth={makeRandom(300, 100)}
                startHeight={makeRandom(300, 100)}
                endColorR={Math.floor(makeRandom(255))}
                endColorG={Math.floor(makeRandom(255))}
                endColorB={Math.floor(makeRandom(255))}
                endTop={makeRandom(100)}
                endLeft={makeRandom(100)}
                endOpacity={makeRandom()}
                endRotation={makeRandom(360)}
                endWidth={makeRandom(300, 100)}
                endHeight={makeRandom(300, 100)}
                duration={makeRandom(1,5,1000)}
                key={index}
              />
            )
          })
        }
      </div>
    )
  }
}
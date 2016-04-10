import React from 'react';
import _ from 'lodash';
import Shape from './Shape';

export default class extends React.Component {


  render(){

    const makeRandom = (floor = 0, ceiling = 0, multiplier = 1) => _.random(floor, ceiling) * multiplier;

    const makeStyle = () => {
      return {
        backgroundColor: `rgb(${makeRandom(1,255)}, ${makeRandom(1,255)}, ${makeRandom(1,255)})`,
        top: `${makeRandom(0,100)}%`,
        left: `${makeRandom(0,100)}%`,
        opacity: makeRandom(1,100,0.01),
        transform: `rotate(${makeRandom(0,360)}deg)`,
        width: `${makeRandom(300, 100)}px`,
        height: `${makeRandom(200, 100)}px`
      }
    }

    return (
      <div>
        {JSON.stringify(makeStyle())}
        <Shape
          styleProp={makeStyle()}
          endColorR={Math.floor(makeRandom(255))}
          endColorG={Math.floor(makeRandom(255))}
          endColorB={Math.floor(makeRandom(255))}
          endTop={makeRandom(100)}
          endLeft={makeRandom(100)}
          endOpacity={makeRandom()}
          endRotation={makeRandom(360)}
          endWidth={makeRandom(300, 100)}
          endHeight={makeRandom(300, 100)}
        />
      </div>
    )
  }
}
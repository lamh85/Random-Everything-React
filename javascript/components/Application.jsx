import React from 'react';
import _ from 'lodash';
import Shape from './Shape';

export default class extends React.Component {


  render(){

    const makeRandom = (multiplier = 1, floor = 0) => Math.random() * multiplier + floor;

    const makeStyle = () => {
      return {
        backgroundColor: `rgb(${Math.floor(makeRandom(255))}, ${Math.floor(makeRandom(255))}, ${Math.floor(makeRandom(255))})`,
        top: `${makeRandom(100)}%`,
        left: `${makeRandom(100)}%`,
        opacity: makeRandom(),
        transform: `rotate(${makeRandom(360)}deg)`,
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
import React from 'react';
import Shape from './Shape'

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
        <Shape styleProp = {makeStyle()} />
      </div>
    )
  }
}
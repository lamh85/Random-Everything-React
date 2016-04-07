import React from 'react';

export default class extends React.Component {
  componentDidMount(){
    console.log(this.refs.shape.style);
  }
  render(){
    return (
      <div style={this.props.styleProp} className="shape" ref="shape">
      </div>
    )
  }
}
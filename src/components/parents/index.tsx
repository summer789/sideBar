import React, { Component } from 'react';
import Children from '../children';

class Parents extends Component {
  state = {
    visible: false,
  }
  show = () => {
    this.setState({
      visible: true,
    })
  }
  hide = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    return (
      <div style={{ height: 500, width: 500, background: 'green' }}>
        <button onClick={this.show}>点击展开</button>
        我是父组件
        <Children visible={this.state.visible} hide={this.hide} />
      </div>
    );
  }
}

export default Parents;
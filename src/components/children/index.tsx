import React, { Component } from 'react';
import SideBar from '../sideBar';

interface ChildrenProps {
  visible: boolean
  hide: () => void;
}

class Children extends Component<ChildrenProps>{
  render() {
    return (
      <div style={{ height: 300, width: 300, background: 'red' }}>
        我是子组件
        <SideBar
          visible={this.props.visible}
          hide={this.props.hide}
        >
          这是侧边栏
        </SideBar>
      </div>
    );
  }
}

export default Children;
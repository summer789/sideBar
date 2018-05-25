import React, { Component } from 'react';

interface SideBarContainerState {
  visible: boolean,
}

export interface Children {
  visible: boolean;
  show: () => void;
  hide: () => void;
}

interface SideBarContainerProps {
  children: (props: Children) => React.ReactNode;
}


class SideBarContainer extends Component<SideBarContainerProps, SideBarContainerState> {
  state: SideBarContainerState = {
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
    const { visible } = this.state;
    const { children } = this.props;

    return children({
      visible: visible,
      show: this.show,
      hide: this.hide
    });
  }
}

export default SideBarContainer;
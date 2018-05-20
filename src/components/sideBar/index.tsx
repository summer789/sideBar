import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './index.less';

interface SideBarProps {
    visible: boolean
}

class SideBar extends Component<SideBarProps> {
    render() {
        return (
            createPortal(
                <div className={styles['side-bar']}>
                    <div className="side-bar-wrap">
                        <div className="side-bar-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>,
                document.body
            )
        );
    }
}

export default SideBar;
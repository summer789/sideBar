import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import './index.less';

interface SideBarProps {
    visible: boolean
    hide: () => void;
}

class SideBar extends Component<SideBarProps> {
    handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }
    handleHide = () => {
        if (this.props.hide) {
            this.props.hide();
        }
    }
    render() {
        const { visible } = this.props;
        const cls = classNames({
            "side-bar": true,
            "side-bar-hidden": !visible,
        })
        return (
            createPortal(
                <div className={cls} onClick={this.handleHide}>
                    <div
                        className="side-bar-wrap"
                        onClick={this.handleClick}
                    >
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
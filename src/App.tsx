import * as React from 'react';
import SideBar from './components/sideBar/index';
import Parents from './components/parents';
import SideBarContainer, { Children } from './components/sideBarContainer';

// interface AppState {
//     visible: boolean;
// }

class App extends React.Component {
    // state: AppState = {
    //     visible: false,
    // }
    // handleShowSideBar = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // }
    // hide = () => {
    //     this.setState({
    //         visible: false,
    //     });
    // }
    renderDom = (props: Children) => {
        return (
            <div>
                <button onClick={props.show}> 展开</button>
                <SideBar
                    visible={props.visible}
                    hide={props.hide}
                >
                    你好啊
                </SideBar>
            </div>
        )
    }
    render() {
        // const { visible } = this.state;
        return (
            <div className="App">
                <SideBarContainer>
                    {this.renderDom}
                </SideBarContainer>
                我是顶层组件
                <Parents />
            </div>
        );
    }
}

export default App;

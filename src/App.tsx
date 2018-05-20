import * as React from 'react';
import SideBar from './components/sideBar/index';

interface AppState {
    visible: boolean;
}

class App extends React.Component {
    state: AppState = {
        visible: false,
    }
    render() {
        const { visible } = this.state;
        return (
            <div className="App">
                <button>展开</button>
                <SideBar visible={visible}>
                    你好啊
        </SideBar>
            </div>
        );
    }
}

export default App;

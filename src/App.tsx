import {Content} from 'antd/lib/layout/layout';
import React, {FC} from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';
import './App.css'

const App: FC = () => {
    return (
        <div>
            <Navbar/>
            <Content>
                <AppRouter/>
            </Content>
        </div>
    );
};

export default App;

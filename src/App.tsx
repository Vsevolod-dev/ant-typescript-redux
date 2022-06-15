import {Content} from 'antd/lib/layout/layout';
import React, {FC, useEffect} from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';
import './App.css'
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {
    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setUser({username: localStorage.getItem('username') || ''} as IUser)
            setIsAuth(true)
        }
    }, []);


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

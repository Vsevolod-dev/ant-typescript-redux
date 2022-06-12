import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../router";
import Event from "../pages/Event";
import Login from '../pages/Login';
import {useTypedSelector} from '../hooks/useTypedSelector';

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={'/'}
                        path={'/'}
                        element={<Event/>}
                    />
                )}
                <Route path={'*'} element={<Event/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={'/login'}
                        path={'/login'}
                        element={<Login/>}
                    />
                )}
                <Route path={'*'} element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;

import {Menu, Row} from 'antd';
import {Header} from 'antd/lib/layout/layout';
import React, {FC} from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/ActionCreators';

const Navbar: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const publicItems = [
        {
            label: 'Login', key: 'login', onClick: () => {
                navigate('/login')
            }
        }
    ];

    const privateItems = [
        {
            label: 'Log out', key: 'logout', onClick: () => {
                // @ts-ignore
                dispatch(AuthActionCreators.logout())
            }
        }
    ];

    return (
        <Header>
            <Row justify={'end'}>
                {isAuth
                    ? <>
                        <div style={{color: 'white', padding: '0 20px'}}>{user.username}</div>
                        <Menu mode="horizontal" theme={'dark'} items={privateItems} selectable={false}/>
                    </>
                    : <>
                        <Menu mode="horizontal" theme={'dark'} items={publicItems} selectable={false}/>
                    </>
                }
            </Row>
        </Header>
    );
};

export default Navbar;

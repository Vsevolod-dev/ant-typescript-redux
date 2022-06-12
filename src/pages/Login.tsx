import {Row} from 'antd';
import React, {FC} from 'react';
import LoginFrom from '../components/LoginForm';

const Login: FC = () => {
    return (
        <div>
            <Row justify={'center'} align={'middle'} className='h100'>
                <LoginFrom/>
            </Row>
        </div>
    );
};

export default Login;

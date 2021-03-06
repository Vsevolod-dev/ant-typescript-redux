import {Button, Form, Input} from 'antd';
import React, {FC, useState} from 'react';
import {rules} from '../utils/rules';
import {useTypedSelector} from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const LoginFrom: FC = () => {
    const {login} = useActions()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        login(username, password)
    }

    const submitFailed = () => {
        console.log('submitFailed')
    }

    return (
        <Form
            onFinish={submit}
            onFinishFailed={submitFailed}
        >
            {
                error && <div style={{color: 'red'}}>
                    {error}
                </div>
            }
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginFrom;

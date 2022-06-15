import {Button, DatePicker, Form, Input, Row, Select} from 'antd';
import { Moment } from 'moment';
import React, {FC, useState} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import {IUser} from '../models/IUser';
import {rules} from '../utils/rules';

interface EventFormPrpos {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormPrpos> = (props) => {
    const {user} = useTypedSelector(state => state.auth)

    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent);

    const selectDate = (date: Moment | null) => {
        if(date) {
            setEvent({...event, date: date.format('YYYY-MM-DD')})
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event desription"
                name="desription"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={(e) => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required(), rules.isDateAfter('Incorrect date')]}
            >
                <DatePicker
                    onChange={date => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Guest"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {props.guests.map(guest =>
                        <Select.Option
                            key={guest.username}
                            value={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify={'end'}>
                <Form.Item>
                    <Button type={'primary'} htmlType={'submit'}>Add</Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;

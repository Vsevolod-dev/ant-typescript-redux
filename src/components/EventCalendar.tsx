import {Calendar} from 'antd';
import {Moment} from 'moment';
import React, {FC} from 'react';
import {IEvent} from '../models/IEvent';

interface EventCalendarPrpos {
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarPrpos> = (props) => {
    const dateCellRender = (value: Moment) => {
        const foramtedDate = value.format('YYYY-MM-DD');
        const currentDayEvents = props.events.filter(ev => ev.date === foramtedDate)

        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    };


    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;

import React, { Component, useState} from 'react';

import '../App.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default class EventCalendar extends Component {
    render() {
        const events = [
            {title: 'my birthday', date: '2021-04-07'},
        ]

        const header = {
            left: 'prev,next today', center: 'title', right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }

        const views = {
            listDay: { buttonText: 'list day' },
            listWeek: { buttonText: 'list week' },
            listMonth: { buttonText: 'list month' }
        }
        return (
            <div className="calendar">
                <FullCalendar 
                // options={options}
                headerToolbar={header}
                locales="pt-BR"
                views={views}
                defaultView="timeGridPlugin"
                // headerToolbar
                plugins={[ dayGridPlugin ]}
                events={events}
                // events={[
                //     {
                //         title: 'My birthday', date: '2021-04-07'
                //     }
                // ]}
            />
            </div>
        )
    }
}

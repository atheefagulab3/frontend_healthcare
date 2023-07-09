import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import {NavLink } from 'react-router-dom';
import {Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import   './Cal.css'
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };
  return (
    <div>
      <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/DoctorProfile" activeClassName="active">
                Profile
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Patientp" activeClassName="active">
                Patient
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ReactBigCalendar" activeClassName="active">
                Agenda
              </Nav.Link>
      </Nav>
      <hr/>
    <div className="centered-container">
      
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
    </div>
  );
}

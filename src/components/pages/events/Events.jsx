import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export default function Events() {
    let eventGuid = 0;
    let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
    const INITIAL_EVENTS = [
        {
            id: createEventId(),
            title: "Meeting",
            start: todayStr,
        },
        {
            id: createEventId(),
            title: "Meeting Time",
            start: todayStr + "T16:00:00",
        },
    ];

    function createEventId() {
        return String(eventGuid++);
    }
    const initialstate1 = {
        calendarEvents: [
            {
                title: "Atlanta Monster",
                start: new Date("2019-04-04 00:00"),
                id: "1001",
            },
            {
                title: "My Favorite Murder",
                start: new Date("2019-04-05 00:00"),
                id: "1002",
            },
        ],

        events: [
            { title: "Meeting", id: "1", bg: "bg-primary", border: "border-primary" },
            { title: "Party", id: "2", bg: " bg-success", border: "border-success" },
            {
                title: "Long Event",
                id: "3",
                bg: "bg-warning",
                border: "border-warning",
            },
            { title: "Lunch", id: "4", bg: "bg-info", border: "border-info" },
            { title: "HoilDay", id: "5", bg: "bg-danger", border: "border-danger" },
        ],
    };
    const [state] = useState(initialstate1);

    useEffect(() => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let title = eventEl.getAttribute("title");
                let id = eventEl.getAttribute("data");
                let classValue = eventEl.getAttribute("class");
                return {
                    title: title,
                    id: id,
                    className: classValue,
                };
            },
        });
    }, []);

    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    }
    const handleEventClick = (clickInfo) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    };
    const handleEvents = (events) => { };

    const handleDateSelect = (selectInfo) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };
    return (

        <Row>
            <Col md={12}>
                <Card>
                    {/* <Card.Header>
                    </Card.Header> */}
                    <Card.Body>
                        <Row>

                            <Col md={12} xl={9} className="mt-5 mt-xl-0">
                                <div className="fullclndr mt-md-0 mt-3">
                                    <FullCalendar
                                        plugins={[
                                            dayGridPlugin,
                                            timeGridPlugin,
                                            interactionPlugin,
                                        ]}
                                        headerToolbar={{
                                            left: "prev,next today",
                                            center: "title",
                                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                                        }}
                                        initialView="dayGridMonth"
                                        editable={true}
                                        // selectable={true}
                                        selectMirror={true}
                                        dayMaxEvents={true}
                                        weekends={state.weekendsVisible}
                                        initialEvents={INITIAL_EVENTS}
                                        select={handleDateSelect}
                                        eventContent={renderEventContent}
                                        eventClick={handleEventClick}
                                        eventsSet={handleEvents}
                                    />
                                </div>
                            </Col>
                            <Col md={12} xl={3}>
                                <div id="external-events">
                                    <h4 className="card-title mb-0">Create Event</h4>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Event Name</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Event Date</Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Event Type</Form.Label>
                                                    <Form.Select>
                                                        <option value="">Select Type</option>
                                                        <option>Option1</option>
                                                        <option>Option2</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control as="textarea" rows={5} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="justify-content-end">
                                            <Col md={12}>
                                                <Button className="w-100 create_event_btn mt-4">Create Event</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
}

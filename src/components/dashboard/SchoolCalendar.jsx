import React, { useState } from 'react';
import { Dropdown, Card } from 'react-bootstrap';

const SchoolCalendar = () => {
    const [month, setMonth] = useState('March 2021');

    const days = [
        [28, 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 1, 2, 3],
    ];

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    const currentYear = currentDate.getFullYear();

    const renderDay = (day, dayIndex, weekIndex) => {
        let className = '';

        if ((weekIndex === 0 && day > 6) || (weekIndex === 4 && day < 4)) {
            className = 'disabled-day';
        } else {
            if (day === 8) className = 'black-circle';
            if (day === 23) className = 'red-circle';
            if (day === 20) className = 'yellow-circle';
        }

        if (day === currentDay) {
            className += ' current-date';
        }

        if (dayIndex === 0) {
            className += ' sunday';
        } else if (dayIndex === 6) {
            className += ' saturday';
        }

        return (
            <td key={`${weekIndex}-${dayIndex}`}>
                <p className={className.trim()}>{day}</p>
            </td>
        );
    };

    return (
        <Card className="calendar-card">
            <Card.Header className="text-center">
                <div className="calendar_head">
                    <h2 className="calendar_txt">School Calendar</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {month}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setMonth('February 2021')}>
                                February 2021
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setMonth('March 2021')}>
                                March 2021
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Card.Header>
            <Card.Body>
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {days.map((week, weekIndex) => (
                            <tr key={weekIndex}>
                                {week.map((day, dayIndex) => renderDay(day, dayIndex, weekIndex))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card.Body>
        </Card>
    );
};

export default SchoolCalendar;

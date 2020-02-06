import React from 'react';
import Calendar from 'react-calendar';

export default function() {
  return (
      <div>
          <h3>Community Events</h3>
          <div className="calendar">
            <Calendar />
          </div>
      </div>
  )
}
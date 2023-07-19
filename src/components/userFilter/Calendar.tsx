import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar: React.FC = () => {
    const [selectedDates, setSelectedDates] = useState<Date[] | [Date | null, Date | null]>([]);

    const handleDateChange = (date: Date | [Date | null, Date | null] | null) => {
      if (date && Array.isArray(date)) {
        if (date.length === 2) {
          setSelectedDates(date.filter((date) => date !== null) as Date[]);
        } else {
          setSelectedDates([...date]);
        }
      } else {
        setSelectedDates([date]);
      }
    };
  
    const handleCalendarClose = () => {
      if (selectedDates.length === 1) {
        setSelectedDates([...selectedDates, selectedDates[0]]);
      }
    };
  
    return (
      <div>
        <div >
          <DatePicker
            selected={selectedDates[0]}
            onChange={handleDateChange}
            startDate={selectedDates[0]}
            endDate={selectedDates[1]}
            selectsRange
            inline
            onCalendarClose={handleCalendarClose}
          />
        </div>
        {selectedDates.length === 2 && (
          <div>
            <p>Start Date: {selectedDates[0]?.toLocaleDateString()}</p>
            <p>End Date: {selectedDates[1]?.toLocaleDateString()}</p>
          </div>
        )}
      </div>
    );
  };
      
export default Calendar;
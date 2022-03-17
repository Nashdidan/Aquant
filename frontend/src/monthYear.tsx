import { DatePicker, LocalizationProvider, MonthPicker } from '@mui/lab'
import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Table } from './table';

export const Datepicker = (props : {onDateChanged : Function}) => {
    const onDateChanged = props.onDateChanged
    const [date, setDate] = useState<Date | null>(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            inputFormat="yyyy-MM"
            label="Basic example"
            value={date}
            onChange={event =>{ 
              onDateChanged(event)
              setDate(event)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>        
      );
  };
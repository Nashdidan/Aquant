import React, { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { GetData } from "./dataApi";
import { Console } from "console";
import { DataParameters, RowsType } from "./dataModel";
import {useTable} from 'react-table'
import MUIDataTable from "mui-datatables";


export const Table = (props : {date : Date, rows : RowsType[] | undefined}) => {
  const date = props.date
  const rows = props.rows
    const monthYear = `${date.getMonth}%2F${date.getFullYear}`
    const columns = [
        { name: 'asset_id', label: 'Asset ID'/*, width: 90*/ },
          {
            name: 'visit_date',
            label: 'Full Date',
          },
          {
            name: 'Customer_name',
            label: 'Customer Name',
          },
          {
            name: 'Model',
            label: 'Model',
          },
          {
            name: 'part_quantity',
            label: 'Part Quantity',
          }
    ]
    return(
        <div style={{ height: 400, width: '100%' }}>
        {rows ? <MUIDataTable data={rows} columns={columns} title={'table idan'} /> : "..."}
        
      </div>
    )
}
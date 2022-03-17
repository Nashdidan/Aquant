import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Datepicker } from './monthYear';
import { RowsType } from './dataModel';
import { Button, MenuItem } from '@mui/material';
import { GetAssetsIds, GetData } from './dataApi';
import { Table } from './table';


function App() {
  let assets : string[]
  const [date, setDate] = useState<Date>(new Date())  
  const [assetsIds, setAssetsIds] = useState<string[]>()
  const [assetId, setAssetId] = useState(" ")
  const [tableRows, setTableRows] = useState<RowsType[]>()
  const fetchData = async () => {
    setTableRows( await GetData(date!, assetId!))   
  }
  const fetchAssetsIds = async ()=> {
    setAssetsIds(await GetAssetsIds())
  }
  useEffect(()=>{
  fetchAssetsIds()
  }, [])
 

  return (
    <div className="App">
        <h2>table app</h2>
        <Button
          onClick={() =>{ 
            fetchData()
            }}>
          Get Data          
        </Button>
        <ul style={{height:100, overflow:"scroll"}}>{assetsIds?.map(txt=><li>{txt}</li>)}</ul>
      <input type="text" name="name" value={assetId} onChange={e =>{
         setAssetId(e.target.value)
         }}/>
         <div style={{margin:40}}>
        <Datepicker onDateChanged={setDate} />
        </div>
        <Table date={date} rows={tableRows}/>

    </div>
  );
}

export default App;

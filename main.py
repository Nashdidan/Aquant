import pandas
import uvicorn
import json
from fastapi import FastAPI, Path
import pandas as pd
from dataclasses import dataclass
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

filePath = r"data_base//Service Events.xlsx"
df = pd.read_excel(filePath)
df.fillna('Not Added')
df['init_date'] = pd.to_datetime(df['visit_date'])
df['init_date'] = df['init_date'].dt.strftime('%m/%Y')
numOfVisits = 0
df['number_of_visits'] = numOfVisits

df['part_quantity'].fillna(0)

@dataclass
class AssetData:
    customerName: str
    manufacturer: str
    numberOfPartsReplaced: int
    numberOfVisits: int = 0
@app.get("/get_data")
def get_data(month_year: str, asset_id: str):
    wanted_asset = df[df['asset_id'] == asset_id]
    wanted_asset = wanted_asset[wanted_asset['init_date'] == month_year]
    sortedDf: pandas.DataFrame =  wanted_asset[['asset_id','visit_date', 'Customer_name', 'Model', 'part_quantity']]
    rows : pandas.DataFrame = sortedDf.to_json(orient='records')
    parsed = json.loads(rows)
    return parsed

@app.get("/asset_id_drop")
def get_data():
    wanted_asset = df['asset_id'].dropna()
    rows = wanted_asset.dropna().unique()
    parsed = json.dumps(rows.tolist())
    parsed = json.loads(parsed)
    return parsed

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
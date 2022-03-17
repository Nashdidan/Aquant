import { DataParameters, RowsType } from "./dataModel"



export const  GetData = async (date:Date, assetId:string) => {
    try{
        let month = date.getMonth() 
        month += 1
        const monthYear = `${month > 9 ? month : '0' + month}%2F${date.getFullYear()}`
        const response = await fetch(`http://localhost:8000/get_data?month_year=${monthYear}&asset_id=${assetId}`)
        const data: RowsType[] = JSON.parse(await response.text())
        return data
    }
    catch(err){
    }
}  

export const  GetAssetsIds = async () => {
    try{
        const response = await fetch(`http://127.0.0.1:8000/asset_id_drop`)
        const data: string[] = JSON.parse(await response.text())
        return data
    }
    catch(err){
        console.log('no message response', err)
    }
}  
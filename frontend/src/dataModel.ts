
export type DataParameters = {
    asset_id : {[lineNum: string] : string},
    init_date : {string: string},
    date : {string: string},
    customer_name : {string: string},
    model : {string: string},
    number_of_visits : [visits : number],
    parts_replaced : [parts : number],
}

export type RowsType = {
    asset_id: string,
    visit_date: string,
    Customer_name: string,
    Model: string,
    part_quantity : number
}


import { populateRows, populateHeaders, getData } from './util.js'

const tables = document.getElementsByTagName('table')
const headers = ['Year', 'Month', 'Report Type', 'Count']

export async function runningScans(){
    for(let i=0; i<tables.length; i++){ tables[i].innerHTML = '' }

    try{
        const year = await getData('scans', 'year')
        const month = await getData('scans', 'month')
        populateHeaders(tables, headers)
        populateTable(year, month)
    }
    catch(err){
        document.getElementById('table-year').innerHTML = err
    }
}

function populateTable(year, month){
    for (let i=0; i<tables.length; i++){
        if(tables[i].id === 'table-year'){ populateRows(year, tables[i]) }
        if(tables[i].id === 'table-month'){ populateRows(month, tables[i]) }
    }
}
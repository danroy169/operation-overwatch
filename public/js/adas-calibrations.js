import { populateHeaders, getData } from './util.js'

const tables = document.getElementsByTagName('table')
const headers = ['Year', 'Month', 'Report Type', 'Count']

export async function adasCalibrations(){
    for(let i=0; i<tables.length; i++){ tables[i].innerHTML = '' }
    try{
        const year = await getData('calibrations', 'year')
        const month = await getData('calibrations', 'month')
        populateHeaders(tables, headers)
        populateTable(year, month)
    }
    catch(err){
        tables.innerHTML = err
    }
}

function populateTable(year, month){
    for (let i=0; i<tables.length; i++){
        if(tables[i].id === 'table-year'){ populateRows(year, tables[i]) }
        if(tables[i].id === 'table-month'){ populateRows(month, tables[i]) }
    }
}

function populateRows(data, table){
    for (const item in data){
        const row = document.createElement('tr')

        const year = document.createElement('td')
        const month = document.createElement('td')
        const reportType = document.createElement('td')
        const count = document.createElement('td')
   
        year.innerHTML = data[item].YEAR
        month.innerHTML = data[item].MONTH
        reportType.innerHTML = data[item].REPORTTYPE
        count.innerHTML = data[item].Count.toLocaleString()

        row.appendChild(year)
        row.appendChild(month)
        row.appendChild(reportType)
        row.appendChild(count)

        table.appendChild(row)
    }
}
import { populateCaptions } from './util.js'

const tables = document.getElementsByTagName('table')

export async function adasCalibrations(){
    for(let i=0; i<tables.length; i++){ tables[i].innerHTML = '' }
    try{
        const year = await getCalibrations('year')
        const month = await getCalibrations('month')
        populateHeaders()
        populateTable(year, month)
    }
    catch(err){
        tables.innerHTML = err
    }
}

async function getCalibrations(time){
    const request = await fetch('http://localhost:8080/calibrations/' + time)
    if(request.status !== 200) { throw new Error('Data not found') }
    const response = await request.json()
    return response
}

function populateHeaders(){
    for(let i=0; i<tables.length; i++){ 
        const headRow = document.createElement('tr')

        const yeartHeader = document.createElement('th')
        const monthHeader = document.createElement('th')
        const reportHeader = document.createElement('th')
        const countHeader = document.createElement('th')
    
        yeartHeader.innerHTML = 'Year'
        monthHeader.innerHTML = 'Month'
        reportHeader.innerHTML = 'Report Type'
        countHeader.innerHTML = 'Count'

        headRow.appendChild(yeartHeader)
        headRow.appendChild(monthHeader)
        headRow.appendChild(reportHeader)
        headRow.appendChild(countHeader)

        populateCaptions(tables[i])

        tables[i].appendChild(headRow)
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
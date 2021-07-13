import { populateCaptions, getData } from './util.js'

const tables = document.getElementsByTagName('table')

export async function runningScans(){
    for(let i=0; i<tables.length; i++){ tables[i].innerHTML = '' }

    try{
        const year = await getData('scans', 'year')
        const month = await getData('scans', 'month')
        populateHeaders()
        populateTable(year, month)
    }
    catch(err){
        document.getElementById('table-year').innerHTML = err
    }
}

function populateHeaders(){
    for(let i=0; i<tables.length; i++){
        const headRow = document.createElement('tr')
        
        const yearHeader = document.createElement('th')
        const monthHeader = document.createElement('th')
        const reportHeader = document.createElement('th')
        const countHeader = document.createElement('th')
    
        yearHeader.innerHTML = 'Year'
        monthHeader.innerHTML = 'Month'
        reportHeader.innerHTML = 'Report Type'
        countHeader.innerHTML = 'Count'
    
        headRow.appendChild(yearHeader)
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
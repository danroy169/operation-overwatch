import { populateCaptions } from './util.js'

const tables = document.getElementsByTagName('table')

export async function vehicleSessions() {
    for(let i=0; i<tables.length; i++){ tables[i].innerHTML = '' }

    try{
        const year = await getData('year')
        const month = await getData('month')
        populateHeaders()
        populateTable(year, month)
    }
    catch (err){
        document.getElementById('table-year').innerHTML = err
    }

}

async function getData(time){
    const request = await fetch('http://localhost:8080/vehicle-sessions/' + time)
    if(request.status !== 200) { throw new Error('Data not found') }
    const response = await request.json()
    return response
}


function populateHeaders(){
    for(let i=0; i<tables.length; i++){
        const headRow = document.createElement('tr')

        const yearHeader = document.createElement('th')
        const monthHeader = document.createElement('th')
        const productHeader = document.createElement('th')
        const countHeader = document.createElement('th')
    
        yearHeader.innerHTML = 'Year'
        monthHeader.innerHTML = 'Month'
        productHeader.innerHTML = 'Product'
        countHeader.innerHTML = 'Count'
    
        headRow.appendChild(yearHeader)
        headRow.appendChild(monthHeader)
        headRow.appendChild(productHeader)
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
        const product = document.createElement('td')
        const count = document.createElement('td')
   
        year.innerHTML = data[item].YEAR
        month.innerHTML = data[item].MONTH
        product.innerHTML = data[item].product
        count.innerHTML = data[item].Count.toLocaleString()

        row.appendChild(year)
        row.appendChild(month)
        row.appendChild(product)
        row.appendChild(count)

        table.appendChild(row)
    }
}
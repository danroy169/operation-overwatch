import { getData } from './util.js'

export async function runningScans(row){
    try{
        row.innerHTML = 'Loading'
        const data = await getData('scans', '')
        row.innerHTML = ''
        populateTable(data, row)
    }
    catch(err){
        row.innerHTML = err
    }
}

function populateTable(data, row){
    for (const item in data){
        const td = document.createElement('td')
        td.innerHTML = data[item].Result.toLocaleString()

        row.appendChild(td)
    }
}
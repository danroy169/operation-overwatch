import { getData } from './util.js'


export async function runningScans(){
    try{
        const year = await getData('scans', 'year')
        const month = await getData('scans', 'month')
        populateTable(year, month)
    }
    catch(err){
        document.getElementById('table-year').innerHTML = err
    }
}

function populateTable(year, month){
    const yearTD = document.getElementById('scan-year')
    const monthTD = document.getElementById('scan-month')

    yearTD.innerHTML = year.toLocaleString()
    monthTD.innerHTML = month.toLocaleString()
}
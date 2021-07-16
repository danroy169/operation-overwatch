import { getData } from './util.js'

export async function adasCalibrations(row){
    try{
        row.innerHTML = 'Loading'
        const year = await getData('calibrations', '')
        row.innerHTML = ''
        populateRow(year, row)
    }
    catch(err){
        console.log(err)
    }
}

function populateRow(data, row){
    for (const item in data){
        console.log(item)
        const td = document.createElement('td')
        td.innerHTML = data[item].toLocaleString()

        row.appendChild(td)
    }
}
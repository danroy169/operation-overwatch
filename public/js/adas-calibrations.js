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
        const td = document.createElement('td')
        td.innerHTML = data[item].Result.toLocaleString()

        row.appendChild(td)
    }
}
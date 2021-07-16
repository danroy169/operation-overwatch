import { getData } from './util.js'

const row = document.getElementById('calibration-row')


export async function adasCalibrations(){
    try{
        row.innerHTML = 'Loading'
        const year = await getData('calibrations', '')
        row.innerHTML = ''
        populateRows(year, row)
    }
    catch(err){
        console.log(err)
    }
}

function populateRows(data, row){
    console.log(data)
    for (const item in data){
        console.log(item)
        const td = document.createElement('td')
        td.innerHTML = data[item].Result.toLocaleString()

        row.appendChild(td)
    }
}
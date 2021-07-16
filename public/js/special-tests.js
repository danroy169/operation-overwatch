import { getData } from './util.js'

export async function specialTests(row){
    try{
        row.innerHTML = 'Loading'
        const data = await getData('special-tests', '')
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
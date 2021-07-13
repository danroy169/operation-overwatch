import { getData, populateHeaders, populateRows} from './util.js'

const table = document.getElementById('table-year')
const tables = document.getElementsByTagName('table')
const headers = ['Product', 'Brand', 'Devices Online']

export async function devicesOnline(){
    for(let i=0; i<tables.length; i++){ tables[i].innerHTML = '' }
    try{
        const data = await getData('devices-online', '')
        populateHeaders(tables, headers)
        populateRows(data, table)
    } 
    catch(err){
        table.innerHTML = err
    }
}

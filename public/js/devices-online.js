import { getData, populateRows} from './util.js'

const table = document.getElementById('devices-table')

export async function devicesOnline(){
    try{
        const data = await getData('devices-online', '')
        populateRows(data, table)
    } 
    catch(err){
        table.innerHTML = err
    }
}

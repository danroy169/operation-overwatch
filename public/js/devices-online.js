import { populateNumberByPlatformTable } from './util.js'
const table = document.getElementById('table')

export async function devicesOnline(){
    const links = document.getElementById('timeLinks')
    links.innerHTML = ''
    table.innerHTML = ''
    try{
        const data = await getDevicesOnline()
        populateDeviceHeaders()
        populateNumberByPlatformTable(data, table)
    } 
    catch(err){
        table.innerHTML = err
    }
}

async function getDevicesOnline(){
    const request = await fetch('http://localhost:8080/devices-online')
    if(request.status !== 200) { throw new Error('Data not found') }
    const response = await request.json()
    return response
}

function populateDeviceHeaders(){
    const table = document.getElementById('table')
    const caption = document.createElement('caption')
    const headRow = document.createElement('tr')
    const devicesHeader = document.createElement('th')
    const platformHeader = document.createElement('th')

    caption.innerHTML = 'Devices Online by Platform / Brand'
    devicesHeader.innerHTML = 'Platform / Brand'
    platformHeader.innerHTML = 'Devices Online'

    headRow.appendChild(devicesHeader)
    headRow.appendChild(platformHeader)

    table.append(caption)
    table.appendChild(headRow)
}


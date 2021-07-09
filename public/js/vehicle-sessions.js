import { fetchData, populateNumberByPlatformTable, displayLinks } from './util.js'

const table = document.getElementById('table')

export async function vehicleSessions() {
    const div = document.getElementById('timeLinks')
    const table = document.getElementById('table')
    div.innerHTML = ''
    table.innerHTML = ''
    displayLinks()

    try{
        const data = await fetchData('http://localhost:8080/vehicle-sessions')
        populateSessionsHeaders()
        populateNumberByPlatformTable(data, table)
    }
    catch (err){
        table.innerHTML = err
    }

}

function populateSessionsHeaders(){
    const caption = document.createElement('caption')
    const headRow = document.createElement('tr')
    const devicesHeader = document.createElement('th')
    const platformHeader = document.createElement('th')

    caption.innerHTML = 'Vehicle Sessions by Platform / Brand'
    devicesHeader.innerHTML = 'Platform / Brand'
    platformHeader.innerHTML = 'Vehicle Sessions'

    headRow.appendChild(devicesHeader)
    headRow.appendChild(platformHeader)

    table.append(caption)
    table.appendChild(headRow)
}

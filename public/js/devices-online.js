const table = document.getElementById('table')

export async function devicesOnline(){
    const links = document.getElementById('timeLinks')
    links.innerHTML = ''
    table.innerHTML = ''
    try{
        const data = await getDevicesOnline()
        populateDeviceHeaders()
        populateDeviceTable(data)
    } 
    catch(err){
        table.innerHTML = err
    }
}

function populateDeviceTable(data){
    for (const property in data){
        const row = document.createElement('tr')
        const platform = document.createElement('td')
        const devicesOnline = document.createElement('td')

        platform.innerHTML = property
        devicesOnline.innerHTML = data[property]

        row.appendChild(platform)
        row.appendChild(devicesOnline)
        table.appendChild(row)
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
    const headRow = document.createElement('tr')
    const devicesHeader = document.createElement('th')
    const platformHeader = document.createElement('th')

    devicesHeader.innerHTML = 'Platform'
    platformHeader.innerHTML = 'Devices Online'

    headRow.appendChild(devicesHeader)
    headRow.appendChild(platformHeader)

    table.appendChild(headRow)
}


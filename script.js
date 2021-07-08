
const table = document.getElementById("table")

async function populateTable(){
    const data = await getDevicesOnline()
    console.log(data)
    populateDeviceHeaders()
    populateDeviceTable(data)

}

function populateDeviceHeaders(){
    const headRow = document.createElement("tr")
    const devicesHeader = document.createElement("th")
    const platformHeader = document.createElement('th')

    devicesHeader.innerHTML = 'Platform'
    platformHeader.innerHTML = 'Devices Online'

    headRow.appendChild(devicesHeader)
    headRow.appendChild(platformHeader)

    table.appendChild(headRow)
}

function populateDeviceTable(data){
    for (const property in data){
        const row = document.createElement("tr")
        const platform = document.createElement("td")
        const devicesOnline = document.createElement("td")

        platform.innerHTML = property
        devicesOnline.innerHTML = data[property]

        row.appendChild(platform)
        row.appendChild(devicesOnline)
        table.appendChild(row)
    }
}

async function getDevicesOnline(){
    const request = await fetch('http://localhost:8080/devices-online')
    const response = await request.json()
    return response
}

populateTable()


function init(){
    

    document.getElementById("devicesOnline").addEventListener("click", devicesOnline)
    document.getElementById("adasCalibrations").addEventListener("click", adasCalibrations)
    document.getElementById("runningScans").addEventListener("click", runningScans)
    document.getElementById("vehicleSessions").addEventListener("click", vehicleSessions)
    document.getElementById("specialTests").addEventListener("click", specialTests)
}






async function devicesOnline(){
    const table = document.getElementById("table")
    try{
        const data = await getDevicesOnline()
        console.log(data)
        populateDeviceHeaders()
        populateDeviceTable(data)
    } catch(err){
        table.innerHTML = err
    }
}

async function adasCalibrations(){
    table.innerHTML = ''
}

async function runningScans(){
    table.innerHTML = ''
}

async function vehicleSessions(){
    table.innerHTML = ''
}

async function specialTests(){
    table.innerHTML = ''
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
    console.log(request)
    if(request.status !== 200) { throw new Error('Data not found') }
    const response = await request.json()
    return response
}

if(document.readyState === 'loading') { window.addEventListener('DOMContentLoaded', event => init()) }
else { init() }
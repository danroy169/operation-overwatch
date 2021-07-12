
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

function populateNumberByPlatformTable(data, table){
    for (const property in data){
        const row = document.createElement('tr')
        const platform = document.createElement('td')
        const number = document.createElement('td')

        platform.innerHTML = property
        number.innerHTML = data[property]

        row.appendChild(platform)
        row.appendChild(number)
        table.appendChild(row)
    }
}

function populateDeviceHeaders(){
    const table = document.getElementById('table')
    const caption = document.createElement('caption')
    const headRow = document.createElement('tr')
    const devicesHeader = document.createElement('th')
    const productHeader = document.createElement('th')
    const brandHeader = document.createElement('th')

    caption.innerHTML = 'Devices Online by Platform / Brand'
    productHeader.innerHTML = 'Product'
    brandHeader.innerHTML = 'Brand'
    devicesHeader.innerHTML = 'Devices Online'

    headRow.appendChild(productHeader)
    headRow.appendChild(brandHeader)
    headRow.appendChild(devicesHeader)
    

    table.append(caption)
    table.appendChild(headRow)
}


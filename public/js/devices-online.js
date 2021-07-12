const table = document.getElementById('table-year')

export async function devicesOnline(){
    const links = document.getElementById('timeLinks')
    links.innerHTML = ''
    table.innerHTML = ''
    try{
        const data = await getDevicesOnline()
        populateDeviceHeaders()
        populateTable(data)
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

function populateTable(data){
    for (const item in data){
        if(data[item].UnitCount === 0) { continue }

        const row = document.createElement('tr')
        const product = document.createElement('td')
        const brand = document.createElement('td')
        const unitCount = document.createElement('td')
   
        product.innerHTML = data[item].Product
        brand.innerHTML = data[item].Brand
        unitCount.innerHTML = data[item].UnitCount.toLocaleString()

        row.appendChild(product)
        row.appendChild(brand)
        row.appendChild(unitCount)
        table.appendChild(row)
    }
}

function populateDeviceHeaders(){
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



export function populateCaptions(table){
    const yearCaption = document.createElement('caption')
    const monthCaption = document.createElement('caption')
    const weekCaption = document.createElement('caption')
    const dayCaption = document.createElement('caption')

    yearCaption.innerHTML = 'This Year'
    monthCaption.innerHTML = 'This Month'
    weekCaption.innerHTML = 'This Week'
    dayCaption.innerHTML = 'This Day'

    switch(table.id){
        case 'table-year':
            table.appendChild(yearCaption)
            break
        case 'table-month':
            table.appendChild(monthCaption)
            break        
        case 'table-week':
            table.appendChild(weekCaption)
            break
        case 'table-day':
            table.appendChild(dayCaption)
            break
    }
}

export async function getData(path, time){
    const request = await fetch('http://localhost:8080/' + path + '/' + time)
    if(request.status !== 200) { throw new Error('Data not found') }
    const response = await request.json()
    return response
}

export function populateHeaders(tables, headers){
    for(let i=0; i<tables.length; i++){ 
        const headRow = document.createElement('tr')

        for(const head in headers){
            const element = document.createElement('th')
            element.innerHTML = headers[head]
            headRow.appendChild(element)
        }

        populateCaptions(tables[i])

        tables[i].appendChild(headRow)
     }
}

export function populateRows(data, table){
    for (const item in data){
        const row = document.createElement('tr')

        for (const prop in data[item]){
            const elem = document.createElement('td')

            if(prop === 'Count' || prop === 'UnitCount') { elem.innerHTML = data[item][prop].toLocaleString() }
            else { elem.innerHTML = data[item][prop] }
            
            row.appendChild(elem)
        }

        table.appendChild(row)
    }
}

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
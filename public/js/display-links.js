export function displayLinks(){
    const div = document.getElementById('timeLinks')
    const year = document.createElement('a')
    const month = document.createElement('a')
    const week = document.createElement('a')
    const day = document.createElement('a')

    year.innerText = 'Year'
    month.innerText = 'Month'
    week.innerText = 'Week'
    day.innerText = 'Day'

    year.id = 'year'
    month.id = 'month'
    week.id = 'week'
    day.id = 'day'

    div.appendChild(year)
    div.appendChild(month)
    div.appendChild(week)
    div.appendChild(day)

    const links = document.getElementsByTagName('a')
    for(let i=0; i<links.length; i++) { links[i].setAttribute('href', '#') }
}

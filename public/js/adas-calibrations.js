import { displayLinks } from './display-links.js'

export async function adasCalibrations(){
    const div = document.getElementById('timeLinks')
    const table = document.getElementById('table')
    div.innerHTML = ''
    table.innerHTML = ''

    displayLinks()
}
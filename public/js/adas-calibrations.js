import { displayLinks } from './util.js'

export async function adasCalibrations(){
    const div = document.getElementById('timeLinks')
    const table = document.getElementById('table')
    div.innerHTML = ''
    table.innerHTML = ''

    displayLinks()
}
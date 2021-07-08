import { readFile } from 'fs/promises'

export async function readJSON(path){
    const file = await readFile(path)
    const data = JSON.parse(file)
    console.log(data)
    return data
}

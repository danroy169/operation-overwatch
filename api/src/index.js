import express from 'express'
import { readFile } from 'node:fs/promises'


const app = express()

app.listen(8080, () => { console.log('Listening at http://localhost:8080') })

app.get('/devices-online', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })
    read('../../DevicePlatform_by_Brand.json')
        .then(obj => { res.json(obj) })
})

app.get('/vehicle-sessions', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    const vehicleSessions = {encore: 80040, evolve: 166800, safelite: 33355, mitchell: 84774, protech: 11881, belron: 46766, bosch: 1006600}
    res.json(vehicleSessions)
})

async function read(path){
    const obj = await readFile(path)
    return JSON.parse(obj)
}
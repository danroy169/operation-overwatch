import express from 'express'

const app = express()

app.listen(8080, () => { console.log('Listening at http://localhost:8080') })

app.get('/devices-online', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    const devicesOnline = {encore: 800, evolve: 100, safelite: 333, mitchell: 844, protech: 111, belron: 456, bosch: 10000}
    res.json(devicesOnline)
})

app.get('/vehicle-sessions', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    const vehicleSessions = {encore: 80040, evolve: 166800, safelite: 33355, mitchell: 84774, protech: 11881, belron: 46766, bosch: 1006600}
    res.json(vehicleSessions)
})
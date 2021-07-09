import express from 'express'

const app = express()

app.listen(8080, () => { console.log('Listening at http://localhost:8080') })

app.get('/devices-online', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    const devicesOnlineJson = {encore: 800, evolve: 100}
    res.json(devicesOnlineJson)
})
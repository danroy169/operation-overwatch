import express from 'express'
import { readFile } from 'node:fs/promises'
import { config } from 'dotenv'
import { calibrationsConfig } from './calibrations.js'
import { scansConfig } from './scans.js'
import { getFromDB } from './db.js'


config()

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

app.get('/vehicle-sessions/year', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Vehicle_Sessions.json')
        .then(obj => { 
            const encore = obj.filter(item => { return item.YEAR === 2021 && item.product === 'Encore' })
                .map(item => item.Count)
                .reduce((accum, curr) => { return accum + curr })

            const mpp = obj.filter(item => { return item.YEAR === 2021 && item.product === 'MPP_2018' })
                .map(item => item.Count)
                .reduce((accum, curr) => { return accum + curr })

            const dvci = obj.filter(item => { return item.YEAR === 2021 && item.product === 'DVCI' })
                .map(item => item.Count)
                .reduce((accum, curr) => { return accum + curr })

            res.json({encore, mpp, dvci})
        })
})

app.get('/vehicle-sessions/month', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Vehicle_Sessions.json')
        .then(obj => { 
            const filtered = obj.filter(item => { return item.YEAR === 2021 && item.MONTH === 7 })
            res.json(filtered)
        })
})

app.get('/calibrations', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    getFromDB(calibrationsConfig,process.env.CALIBRATIONS)
        .then(response => { 
            const data = {
                day: response[0].Result,
                week: response[1].Result,
                month: response[2].Result,
                year: response[3].Result
            }
            res.json(data) 
        })
        .catch(err => { res.send(err) })
})

app.get('/scans/', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    getFromDB(scansConfig, process.env.SCANS)
        .then(response => {
            const data = {
                day: response[0].Result,
                week: response[1].Result,
                month: response[2].Result,
                year: response[3].Result
            }
            res.json(data)
        })
        .catch(err => { res.send(err) })

})


async function read(path){
    const obj = await readFile(path)
    return JSON.parse(obj)
}
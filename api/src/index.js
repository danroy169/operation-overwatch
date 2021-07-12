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

app.get('/vehicle-sessions/year', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Vehicle_Sessions.json')
        .then(obj => { 
            const filtered = obj.filter(item => { return item.YEAR === 2021 })
            res.json(filtered)
        })
})

app.get('/vehicle-sessions/month', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Vehicle_Sessions.json')
        .then(obj => { 
            const filtered = obj.filter(item => { return item.MONTH === 7 })
            res.json(filtered)
        })
})

app.get('/calibrations/year', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Calibrations_and_Scans.json')
        .then(obj => {
            const filtered = obj.filter(item => { return item.REPORTTYPE === 'CALIBRATIONREPORT' && item.YEAR === 2021 })
            res.json(filtered)
        })
})

app.get('/calibrations/month', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Calibrations_and_Scans.json')
        .then(obj => {
            const filtered = obj.filter(item => { return item.REPORTTYPE === 'CALIBRATIONREPORT' && item.YEAR === 2021 && item.MONTH === 7 })
            res.json(filtered)
        })
})

app.get('/scans/year', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Calibrations_and_Scans.json')
        .then(obj => {
            const filtered = obj.filter(item => { return item.REPORTTYPE !== 'CALIBRATIONREPORT' && item.YEAR === 2021 })
            res.json(filtered)
        })

})

app.get('/scans/month', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    read('../../Calibrations_and_Scans.json')
        .then(obj => {
            const filtered = obj.filter(item => { return item.REPORTTYPE !== 'CALIBRATIONREPORT' && item.YEAR === 2021 && item.MONTH === 7 })
            res.json(filtered)
        })

})

async function read(path){
    const obj = await readFile(path)
    return JSON.parse(obj)
}
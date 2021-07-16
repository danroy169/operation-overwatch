import express from 'express'
import { readFile } from 'node:fs/promises'
import { config } from 'dotenv'
import { reportServiceDBConfig, bbDBConfig } from './db_configs.js'
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


app.get('/vehicle-sessions/', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    getFromDB(bbDBConfig, process.env.SESSIONS)
        .then(response => { res.json(response) })
        .catch(err => { res.send(err) })
})

app.get('/calibrations', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    getFromDB(reportServiceDBConfig,process.env.CALIBRATIONS)
        .then(response => { res.json(response[0]) })
        .catch(err => { res.send(err) })
})

app.get('/scans/', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    getFromDB(reportServiceDBConfig, process.env.SCANS)
        .then(response => { res.json(response[0]) })
        .catch(err => { res.send(err) })
})

app.get('/special-tests', (req, res) => {
    
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    getFromDB(bbDBConfig, process.env.BB)
        .then(response => { res.json(response[0]) })
        .catch(err => { res.send(err) })
})


async function read(path){
    const obj = await readFile(path)
    return JSON.parse(obj)
}
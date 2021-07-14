import express from 'express'
import sql from 'mssql'
import { readFile } from 'node:fs/promises'
import { config } from 'dotenv'


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
            const filtered = obj.filter(item => { return item.YEAR === 2021 && item.MONTH === 7 })
            res.json(filtered)
        })
})

// app.get('/calibrations/year', (req, res) => {

//     res.set({
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true
//     })

//     read('../../Calibrations_and_Scans.json')
//         .then(obj => {
//             const filtered = obj.filter(item => { return item.REPORTTYPE === 'CALIBRATIONREPORT' && item.YEAR === 2021 })
//             res.json(filtered)
//         })
// })

app.get('/calibrations/year', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    })

    sql.on('error', err => { res.send(err) })

    const config = {
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        server: process.env.SERVER,
        database: process.env.REPORT_DB,
        options: {
            trustServerCertificate: true // true for local dev / self-signed certs
          }
    }

    sql.connect(config)
    .then(() => {
        return sql.query`SELECT  COUNT([REPORTTIMESTAMP]) AS ThisYear
        FROM [DB_IAMReportServices_SQL].[RS].[REPORT_DATA_PROCESSED]
        WHERE [REPORTTYPE] = 'CALIBRATIONREPORT'
        AND [REPORTTIMESTAMP] between (select dateadd(year, -1, getdate())) and  getdate()
        `
    })
    .then(result => { res.json(result) })
    .catch(err => { res.send(err) })
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
import sql from 'mssql'
import { config } from 'dotenv'


config()

const sqlConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.REPORT_DB,
    options: {
        trustServerCertificate: true // true for local dev / self-signed certs
    }
}

export async function getCalibrationsYear() {
    await sql.connect(sqlConfig)
    const result = await sql.query(process.env.CALIBRATIONS_YEAR)
    return result.recordset[0]
    
}





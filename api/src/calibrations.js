import { config } from 'dotenv'


config()

export const calibrationsConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.REPORT_DB,
    options: {
        trustServerCertificate: true // true for local dev / self-signed certs
    }
}

// export async function getCalibrations(query) {
//     await sql.connect(sqlConfig)
//     const result = await sql.query(query)
//     return result.recordset
// }





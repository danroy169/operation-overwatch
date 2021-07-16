import { config } from 'dotenv'

config()

export const scansConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.REPORT_DB,
    options: {
        trustServerCertificate: true // true for local dev / self-signed certs
    }
}







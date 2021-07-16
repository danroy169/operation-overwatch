import { config } from 'dotenv'

config()

export const specialTestsConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.BB_DB,
    options: {
        trustServerCertificate: true // true for local dev / self-signed certs
    }
}







import { config } from 'dotenv'

config()

export const reportServiceDBConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.REPORT_DB,
    options: {
        trustServerCertificate: true // true for local dev / self-signed certs
    }
}


export const bbDBConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.BB_DB,
    options: {
        trustServerCertificate: true // true for local dev / self-signed certs
    }
}

export const updateDBConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.UPDATE_DB,
    options: {
        trustServerCertificate: true // true for local dev / self-signed certs
    }
}
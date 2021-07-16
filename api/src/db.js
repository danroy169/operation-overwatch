import sql from 'mssql'

export async function getFromDB(config, query){
    await sql.connect(config)
    const result = await sql.query(query)
    return result.recordsets
}
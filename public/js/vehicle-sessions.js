import { getData } from './util.js'


export async function vehicleSessions(rows) {


    try{
        const data = await getData('vehicle-sessions','')
        populateTable(data, rows)
    }
    catch (err){
        console.log(err)
    }

}

function populateTable(data, rows){
    for(let i=0; i<rows.length; i++) { 

        if(rows[i].id === 'encore-row'){
            for(const item in data[0]){
                const td = document.createElement('td')
                td.innerHTML = data[0][item].EncoreVehicleSessions.toLocaleString()
                rows[i].appendChild(td)
            }
        }

        if(rows[i].id === 'evolve-row'){
            for(const item in data[1]){
                const td = document.createElement('td')
                td.innerHTML = data[1][item].EvolveVehicleSessions.toLocaleString()
                rows[i].appendChild(td)
            }
        }

        if(rows[i].id === 'mpp-row'){
            for(const item in data[2]){
                const td = document.createElement('td')
                td.innerHTML = data[2][item].MPP_2018Sessions.toLocaleString()
                rows[i].appendChild(td)
            }
        }

        if(rows[i].id === 'dvci-row'){
            for(const item in data[3]){
                const td = document.createElement('td')
                td.innerHTML = data[3][item].DVCISessions.toLocaleString()
                rows[i].appendChild(td)
            }
        }

    }

}

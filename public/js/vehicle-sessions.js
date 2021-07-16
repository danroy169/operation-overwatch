import { getData } from './util.js'


export async function vehicleSessions() {


    try{
        const year = await getData('vehicle-sessions','year')
        const month = await getData('vehicle-sessions','month')
        populateTable(year, month)
    }
    catch (err){
        document.getElementById('table-year').innerHTML = err
    }

}

function populateTable(year, month){
    const dvciMonth = document.getElementById('dvci-month')
    const dvciYear = document.getElementById('dvci-year')
    const mpMonth = document.getElementById('mp-month')
    const mpYear = document.getElementById('mp-year')
    const encoreMonth = document.getElementById('encore-month')
    const encoreYear = document.getElementById('encore-year')

    for(const item in month){
        if(month[item].product === 'Encore') { encoreMonth.innerHTML = month[item].Count.toLocaleString() }
        if(month[item].product === 'DVCI') { dvciMonth.innerHTML = month[item].Count.toLocaleString() }
        if(month[item].product === 'MPP_2018') { mpMonth.innerHTML = month[item].Count.toLocaleString() }
    }


    encoreYear.innerHTML = year.encore.toLocaleString() 
    dvciYear.innerHTML = year.dvci.toLocaleString() 
    mpYear.innerHTML = year.mpp.toLocaleString() 

}
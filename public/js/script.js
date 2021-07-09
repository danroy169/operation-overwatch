import { devicesOnline } from './devices-online.js'
import { runningScans } from './running-scans.js'
import { vehicleSessions } from './vehicle-sessions.js'
import { adasCalibrations } from './adas-calibrations.js'
import { specialTests } from './special-tests.js'

function init(){
    document.getElementById('devicesOnline').addEventListener('click', devicesOnline)
    document.getElementById('adasCalibrations').addEventListener('click', adasCalibrations)
    document.getElementById('runningScans').addEventListener('click', runningScans)
    document.getElementById('vehicleSessions').addEventListener('click', vehicleSessions)
    document.getElementById('specialTests').addEventListener('click', specialTests)
}


if(document.readyState === 'loading') { window.addEventListener('DOMContentLoaded', event => init()) }
else { init() }
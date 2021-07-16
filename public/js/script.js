import { devicesOnline } from './devices-online.js'
import { runningScans } from './running-scans.js'
import { vehicleSessions } from './vehicle-sessions.js'
import { adasCalibrations } from './adas-calibrations.js'
import { specialTests } from './special-tests.js'

const calibrationsRow = document.getElementById('calibration-row')
const scansRow = document.getElementById('scans-row')

function init(){
    devicesOnline()
    runningScans(scansRow)
    vehicleSessions()
    adasCalibrations(calibrationsRow)
}


if(document.readyState === 'loading') { window.addEventListener('DOMContentLoaded', event => init()) }
else { init() }
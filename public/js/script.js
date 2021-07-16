import { devicesOnline } from './devices-online.js'
import { runningScans } from './running-scans.js'
import { vehicleSessions } from './vehicle-sessions.js'
import { adasCalibrations } from './adas-calibrations.js'
import { specialTests } from './special-tests.js'

function init(){
    devicesOnline()
    runningScans()
    vehicleSessions()
    adasCalibrations()
}


if(document.readyState === 'loading') { window.addEventListener('DOMContentLoaded', event => init()) }
else { init() }
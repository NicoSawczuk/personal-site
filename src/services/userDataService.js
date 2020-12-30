import { analytics } from './firebaseConfig'

export async function sendData(event = 'visit') {

    await fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(function (data) {
            analytics.logEvent(event, {
                ip:data.ip,
                appVersion: navigator.appVersion
            })
        })
        .catch((error) => console.log(error))


}
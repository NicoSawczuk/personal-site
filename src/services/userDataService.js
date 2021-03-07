import { firestore } from './firebaseConfig'

export async function sendData(event = 'visit') {
    let ip   = ''
    let date = new Date()
    await fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(function (data) {
            ip = data.ip
        })
        .catch((error) => console.log(error))
    
    firestore.collection('logs').add({
        event: event,
        ip: ip,
        userAgent: window.navigator.userAgent,
        date: date.toLocaleDateString().split('T')[0]
    });
}
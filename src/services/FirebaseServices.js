import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDUqxIpZchAJUDyR4lntWS8bh2EqfR7HQM",
    authDomain: "nicosawczuk-site.firebaseapp.com",
    databaseURL: "https://nicosawczuk-site.firebaseio.com",
    projectId: "nicosawczuk-site",
    storageBucket: "nicosawczuk-site.appspot.com",
    messagingSenderId: "292706005601",
    appId: "1:292706005601:web:c3fc714930f584a512f020"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.database().ref("/projects");



export async function getProjects() {

    var projects = [];
    await database.once('value', function (snapshot) {

        snapshot.forEach(function (childSnapshot) {
            var data = childSnapshot.val();
            //data.image = database.child(data.image).getDownloadURL().then((url) => {return url})
            projects.push(data);
        });
    });
    return projects

}

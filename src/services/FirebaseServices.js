import {database} from './firebaseConfig'



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

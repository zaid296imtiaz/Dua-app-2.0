var database = firebase.database().ref('/');
var inputFName = document.getElementById('inputFName');
var inputSName = document.getElementById('inputSName');
var inputEmail = document.getElementById('inputEmail');
var inputPass = document.getElementById('inputPass');
var inputAge = document.getElementById('inputAge');
var inputCell = document.getElementById('inputCell');
var inputGen = document.getElementById('inputGen');

function submit() {
    var user = {
        nameF: inputFName.value,
        nameS: inputSName.value,
        email: inputEmail.value,
        pass: inputPass.value,
        gen: inputGen.value,
        age: inputAge.value,
        cell: inputCell.value
    }
    // database.child('loguser').push(user)
    // console.log(user);

    firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
    .then(function(res){
        // console.log(res);
        database.child('loguser/' + res.uid).set(user)
        .then( () => location = 'login.html');
    })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

         
}


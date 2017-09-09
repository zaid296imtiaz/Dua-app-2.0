var database = firebase.database().ref('/');
var getUNAme = document.getElementById('userName');
var getFname = document.getElementById('Fname');
var getSname = document.getElementById('Sname');
var getEmail = document.getElementById('email');
var getAge = document.getElementById('age');
var getCellNum = document.getElementById('Cnum');
var getGen = document.getElementById('gen');
var getPostBtn = document.getElementById('postBtn');
var getPostData = document.getElementById('exampleFormControlTextarea1');
var getSenderName = document.getElementById('sendername');

var user = JSON.parse(localStorage.getItem('userloged'));

getUNAme.innerHTML = user.nameF + ' ' + user.nameS;

getFname.innerHTML = user.nameF;
getSname.innerHTML = user.nameS;
getEmail.innerHTML = user.email;
getGen.innerHTML = user.gen;
getAge.innerHTML = user.age;
getCellNum.innerHTML = user.cell;

function postDua() {

    var dataObj = {
        senderName: getSenderName.value,
        postData: getPostData.value
    }

    if (getPostData.value == '' || getPostData.value == ' ') {
        alert('Please enter something...')
    }
    else {
        database.child('duaPost').push(dataObj);
        alert;
    }

}
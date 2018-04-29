
function saveClick(){
var id =document.getElementById('name');
var price =document.getElementById('price');
insertData(id.value,price.value)
}
window.onload=function(){
showdata();
}
function showdata(){
    var firebaseRef = firebase.database().ref("food");
    firebaseRef.once('value').then(function(dataSnapshot){
        console.log(dataSnapshot.val());
    });
}
function insertData(id,price){
    var firebaseRef = firebase.database().ref("food");

    firebaseRef.push({
        name: id,
        price: price
    });
}
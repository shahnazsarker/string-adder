
document.getElementById('firstname-submit').addEventListener('click', function () {
    let fname = document.getElementById('fName').value;

    console.log(fname);



});
document.getElementById('surname-submit').addEventListener('click', function () {
    let sname = document.getElementById('sName').value;

    console.log(sname);

});
document.getElementById('fullname-submit').addEventListener('click', function () {
    const fullName = document.getElementById('fName').value + ' ' + document.getElementById('sName').value;
    console.log(fullName);


})
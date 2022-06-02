

function getResults1(){

const email = document.getElementById('emaildata').value;
const phone = document.getElementById('phonedata').value;
const last = document.getElementById('lastdata').value;
const first = document.getElementById('firstdata').value;
const course = document.getElementById('optiondata').value;

console.log([
    {
        email:email,
        phoneNumber:phone,
        first_Name:first,
        last_Name:last,
        course:course,

    }
])



}








function getResults1(){
 secondFun();
// location.href='thank.html';
}

 function  secondFun(){


    const email = document.getElementById('emaildata').value;
    const phone = document.getElementById('phonedata').value;
    const last = document.getElementById('lastdata').value;
    const first = document.getElementById('firstdata').value;
    const course = document.getElementById('optiondata').value;
    


// validation for first_name

    var letters = /^[A-Za-z]+$/;    

if(first.length<4){
    document.getElementById('error').style.display="block";
    document.getElementById('firstdata').style.borderColor="red";
     return false;
}
else if(!first.match(letters)){
    if(!first.match(letters)){
        document.getElementById('error').style.display="block";
        document.getElementById('firstdata').style.borderColor="red";
        document.getElementById('error').innerHTML="Please input alphabet characters only";
        return false;
    }else{
        document.getElementById('error').innerHTML="First_Name Required*";
        document.getElementById('error').style.display="none";
        document.getElementById('firstdata').style.borderColor="green";
    }
}

else{
    document.getElementById('error').style.display="none";
    document.getElementById('firstdata').style.borderColor="green";
}


// validation for last_name

var letter = /^[A-Za-z]+$/;    

if(last.length<4){
    document.getElementById('error1').style.display="block";
    document.getElementById('lastdata').style.borderColor="red";
    return false;
}
else if(!last.match(letter)){
    if(!last.match(letter)){
        document.getElementById('error1').style.display="block";
        document.getElementById('lastdata').style.borderColor="red";
        document.getElementById('error1').innerHTML="Please input alphabet characters only";
        return false;
    }else{
        document.getElementById('error1').innerHTML="First_Name Required*";
        document.getElementById('error1').style.display="none";
        document.getElementById('lastdata').style.borderColor="green";
    }
}

else{
    document.getElementById('error1').style.display="none";
    document.getElementById('lastdata').style.borderColor="green";
   
}


// validation for phone number

var letter1 =/^[0-9]+$/;    

if(phone.length<11){
    document.getElementById('error2').style.display="block";
    document.getElementById('phonedata').style.borderColor="red";
    return false;

}
else if(!phone.match(letter1)){
    if(!phone.match(letter1)){
        document.getElementById('error2').style.display="block";
        document.getElementById('phonedata').style.borderColor="red";
        document.getElementById('error2').innerHTML="Please input number only";
        return false;
    }else{
        document.getElementById('error2').innerHTML="Number_Required*";
        document.getElementById('error2').style.display="none";
        document.getElementById('phonedata').style.borderColor="green";
    }
}

else{
    document.getElementById('error2').style.display="none";
    document.getElementById('phonedata').style.borderColor="green";
}

// validation for Email id

var letter2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    

if(!email.match(letter2)){
    document.getElementById('error3').style.display="block";
    document.getElementById('emaildata').style.borderColor="red";
    return false;

}
else{
    document.getElementById('error3').style.display="none";
    document.getElementById('emaildata').style.borderColor="green";
}

// validation for select course

if(course == " "){
    document.getElementById('error4').style.display="block";
    document.getElementById('optiondata').style.borderColor="red";
    return false;

}
else{
    document.getElementById('error4').style.display="none";
    document.getElementById('optiondata').style.borderColor="green";
}




    const keep= [
        {
            email:email,
            phoneNumber:phone,
            first_Name:first,
            last_Name:last,
            courses:course,
    
        }
    ];
    console.log(keep);
    
    
// location.href='thank.html';

return true;
} 





// jquery functions use for hide and show

$( ".test" ).click(function() {
    $( ".used" ).toggle( "slow" );
  });

  $( ".test1" ).click(function() {
    $( ".used1" ).toggle( "slow" );
  });

  $( ".test2" ).click(function() {
    $( ".used2" ).toggle( "slow" );
  });

  $( ".test3" ).click(function() {
    $( ".used3" ).toggle( "slow" );
  });

  $( ".test4" ).click(function() {
    $( ".used4" ).toggle( "slow" );
  });

const courses=[
    {
        id:"1",
        src:"./Images/python.jpg",
        btns:"PYTHON",
        class1:"doClick",
        title:"This course will provide an introduction to programming and Python programming. Through engaging classes and educational projects, this course goes beyond teaching Python programming basics. It gives students the confidence and skills to create projects of their own and explore new concepts.",
    },
    {
        id:"2",
        src:"./Images/python.jpg",
        btns:"WEB DEVLOPMENT",
        class1:"doClick1",
        title:"This course aims to provide an introduction to web development by starting from the basics of HTML and CSS. The course was created with appropriate projects to aid the students in becoming comfortable with using and exploring the different features of web development. ",
    },
    {
        id:"3",
        src:"./Images/python.jpg",
        btns:"SPANISH",
        class1:"doClick2",
        title:"By providing training and starting from the basics of the Spanish language, this course aims to provide students with intermediate knowledge / working-level proficiency in Spanish. ",
    },
    {
        id:"4",
        src:"./Images/python.jpg",
        btns:"GERMAN",
        class1:"doClick3",
        title:"Through its educational and engaging classes and well-researched course materials, this course provides the perfect introduction to the German language.",
    },
    {
        id:"5",
        src:"./Images/python.jpg",
        btns:"FRENCH",
        class1:"doClick4",
        title:"This course aims to equip students with a working proficiency of the french knowledge with its remarkable course materials and engaging classes. ",
    },
   

]


document.getElementById('era').innerHTML=`${courses[0].btns}`;
document.getElementById('er').innerHTML=`${courses[0].title}`;

document.getElementById('era1').innerHTML=`${courses[1].btns}`;
document.getElementById('er1').innerHTML=`${courses[1].title}`;


document.getElementById('era2').innerHTML=`${courses[2].btns}`;
document.getElementById('er2').innerHTML=`${courses[2].title}`;

document.getElementById('era3').innerHTML=`${courses[3].btns}`;
document.getElementById('er3').innerHTML=`${courses[3].title}`;

document.getElementById('era4').innerHTML=`${courses[4].btns}`;
document.getElementById('er4').innerHTML=`${courses[4].title}`;


function checkP(){
    document.getElementById('tired').style.display=="block"
}
function checkP1(){
    document.getElementById('tired1').style.display=="block"
}
function checkP2(){
    document.getElementById('tired2').style.display=="block"
}
function checkP3(){
    document.getElementById('tired3').style.display=="block"
}
function checkP4(){
    document.getElementById('tired4').style.display=="block"
}

var vals= false;

function changeCol(){
    if(!vals){
        vals=true;
        document.querySelector('.justCompZ').style.backgroundColor="white";
        document.getElementById('era').style.backgroundColor=" #e6faff";
        document.getElementById('era').style.color='#0152a8';
    }else{
        vals=false;
        document.getElementById('era').style.backgroundColor="white";
        document.getElementById('era').style.color='black';
        document.querySelector('.justCompZ').style.backgroundColor="white";
}
     
}


var vals1= false;
function changeCol1(){
    if(!vals1){
        vals1=true;
        document.querySelector('.justComp0').style.backgroundColor="white";
        document.getElementById('era1').style.backgroundColor=" #e6faff";
        document.getElementById('era1').style.color='#0152a8';
    }else{
        vals1=false;
        document.getElementById('era1').style.backgroundColor="white";
        document.getElementById('era1').style.color='black';
        document.querySelector('.justComp0').style.backgroundColor="white";
}
     
}

var vals2= false;
function changeCol2(){
    if(!vals2){
        vals2=true;
        document.querySelector('.justComp').style.backgroundColor="white";

        document.getElementById('era2').style.backgroundColor=" #e6faff";
        document.getElementById('era2').style.color='#0152a8';
    }else{
        vals2=false;
        document.getElementById('era2').style.backgroundColor="white";
        document.getElementById('era2').style.color='black';
        document.querySelector('.justComp').style.backgroundColor="white";

}
     
}

var vals3= false;
function changeCol3(){
    if(!vals3){
        vals3=true;
        document.querySelector('.justComp1').style.backgroundColor="white";

        document.getElementById('era3').style.backgroundColor=" #e6faff";
        document.getElementById('era3').style.color='#0152a8';
    }else{
        vals3=false;
        document.getElementById('era3').style.backgroundColor="white";
        document.getElementById('era3').style.color='black';
        document.querySelector('.justComp1').style.backgroundColor="white";

}
     
}


var vals4= false;
function changeCol4(){
    if(!vals4){
        vals4=true;
        document.querySelector('.justComp2').style.backgroundColor="white";

        document.getElementById('era4').style.backgroundColor=" #e6faff";
        document.getElementById('era4').style.color='#0152a8';
    }else{
        vals4=false;
        document.getElementById('era4').style.backgroundColor="white";
        document.getElementById('era4').style.color='black';
        document.querySelector('.justComp2').style.backgroundColor="white";

}
     
}
// const dataY=document.getElementById("sold");
// courses.map((item,index)=>(
//     dataY.innerHTML += `
   
// <div class="col-12">
// <div class="row">
//     <button  id="ht"  onclick="clChange(${index})">
//         <span></span>
//         <span
//         style="color:#0152a8 ;background-color: #e6faff;font-size:x-large;font-weight: 700;padding:0 10px;"
//         >${item.btns}</span>
//     </button>
// </div>
//     <div id='hg'>
//     <div class="row">

//     <div class="row text-center justify-content-center mt-3">
//         <div class="col-3">
//             <img src=${item.src} alt="Python" class="img-fluid">
//         </div>
//     </div>

//     <div class="row text-justify mt-3">
//         <p>
// ${item.title}
//         </p>
//     </div>

//  </div> 
//     </div>
   
// </div>

//       `
// ))

// function clChange(get){
// const got =`${get}`;
// var eon=document.querySelector('#ht');
// var eond=document.querySelector('#hg');



// if(got== 0){
//     eon.classList.add('test');
//     eond.classList.add('used');


//     eon.classList.remove('test1');
//     eond.classList.remove('used1');
  
//     eon.classList.remove('test2');
//     eond.classList.remove('used2');

//     eon.classList.remove('test3');
//     eond.classList.remove('used3');

//     eon.classList.remove('test4');
//     eond.classList.remove('used4');
// }
// else if(got== 1){
//     eon.classList.add('test1');
//     eond.classList.add('used1');

//     eon.classList.remove('test');
//     eond.classList.remove('used');
  
//     eon.classList.remove('test2');
//     eond.classList.remove('used2');

//     eon.classList.remove('test3');
//     eond.classList.remove('used3');

//     eon.classList.remove('test4');
//     eond.classList.remove('used4');
// }
// else if(got== 2){
//     eon.classList.add('test2');
//     eond.classList.add('used2');

//     eon.classList.remove('test1');
//     eond.classList.remove('used1');
  
//     eon.classList.remove('test');
//     eond.classList.remove('used');

//     eon.classList.remove('test3');
//     eond.classList.remove('used3');

//     eon.classList.remove('test4');
//     eond.classList.remove('used4');
// }
// else if(got== 3){
//     eon.classList.add('test3');
//     eond.classList.add('used3');

//     eon.classList.remove('test1');
//     eond.classList.remove('used1');
  
//     eon.classList.remove('test2');
//     eond.classList.remove('used2');

//     eon.classList.remove('test');
//     eond.classList.remove('used');

//     eon.classList.remove('test4');
//     eond.classList.remove('used4');
// }
// else if(got== 4){
//     eon.classList.add('test4');
//     eond.classList.add('used4');

//     eon.classList.remove('test1');
//     eond.classList.remove('used1');
  
//     eon.classList.remove('test2');
//     eond.classList.remove('used2');

//     eon.classList.remove('test3');
//     eond.classList.remove('used3');

//     eon.classList.remove('test');
//     eond.classList.remove('used');
// }
// }

// console.log(eon);
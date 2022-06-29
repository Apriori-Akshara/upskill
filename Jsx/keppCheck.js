let raj =document.getElementById('soons').innerHTML=0;

function calls(){
    if(raj!=0){
        document.getElementById('upComing').style.display='block';
     
    }
    else{
        document.getElementById('upSoon').innerHTML='Soon to be announced!';
        document.getElementById('upComing').style.display='none';
    }

}
calls();
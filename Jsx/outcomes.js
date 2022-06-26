const outcome=[
    {
        id:"1",
       src:"./Images/outcomes1.jpg",
        title1:"Student 1",
      title2:"Omolola was a midwife and wanted to build tech skills to change career. Apriori gave her the opportunity to do that. She is now a full-stack Developer at Patchwork Health.",
       
    },
    {
        id:"2",
        title1:"Student 2",
        src:"./Images/outcomes2.jpg",
        title2:"A Business School graduate who wanted to be an entrepreneur, Quitterie had an idea, but needed the tech skills and the right partner to build it with. At Apriori, she found both.",
      
    },
    {
        id:"3",
        title1:"Student 3",
        src:"./Images/outcomes3.jpg",
        title2:"Emanuel started off his career at PayPal, became interested in cryptocurrencies and recently launched a side project aiming at educating people on the topic.",
       
    },
    {
        id:"4",
       src:"./Images/outcomes4.jpg",
        title1:"Student 4",
      title2:"Omolola was a midwife and wanted to build tech skills to change career. Apriori gave her the opportunity to do that. She is now a full-stack Developer at Patchwork Health.",
       
    },
    {
        id:"5",
        title1:"Student 5",
        src:"./Images/outcomes5.jpg",
        title2:"A Business School graduate who wanted to be an entrepreneur, Quitterie had an idea, but needed the tech skills and the right partner to build it with. At Apriori, she found both.",
      
    },
    {
        id:"6",
        title1:"Student 6",
        src:"./Images/outcomes6.jpg",
        title2:"Emanuel started off his career at PayPal, became interested in cryptocurrencies and recently launched a side project aiming at educating people on the topic.",
       
    },
]

const dataX=document.getElementById("ones");
outcome.map((item,index)=>(
    dataX.innerHTML += `
    <div class="col-lg-4 col-md-5  parentPosition ">
    <div class="boxHW px-1"> 
   <div id='yolk7'>
       <div class="row text-center mt-5">
           <p class="childs mt-4">
               <b>${item.title1}</b>
           </p>
       </div>
       <div class="row text-center px-4">
           <p>
           ${item.title2}
       
       </p>
       </div>
   </div>
           </div>
           <div class="positinSet">
   <img src=${item.src} alt="profile" class="img-fluid profileHW">
           </div>
                 </div>
      `
))
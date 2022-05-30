const hires=[
    {
        id:"1",
       src:"./Images/3.jpg",
        title1:"Omolola Oluwatosin Ibojo",
      title2:"Omolola was a midwife and wanted to build tech skills to change career. Apriori gave her the opportunity to do that. She is now a full-stack Developer at Patchwork Health.",
        links:"Watch Omolola Oluwatosin's story",
    },
    {
        id:"2",
        src:"./Images/4.jpg",
        title1:"Quitterie Mathelin-Moreauxs",
        title2:"A Business School graduate who wanted to be an entrepreneur, Quitterie had an idea, but needed the tech skills and the right partner to build it with. At Apriori, she found both.",
        links:"Watch Quitterie's story",
    },
    {
        id:"3",
        src:"./Images/5.jpg",
        title1:"Emanuel Coen",
        title2:"Emanuel started off his career at PayPal, became interested in cryptocurrencies and recently launched a side project aiming at educating people on the topic.",
        links:"Read Emanuel's story",
    },

]

const dataB=document.getElementById("two");
hires.map((item,index)=>(
    dataB.innerHTML += `
    <div class="col-md-4 hoverEffect at767mt">
    <div class="row ">
        <img src=${item.src} alt="story-1" class="img-fluid  bradius">
    </div>
    <div class="row text-start mt-2">
        <h5
        style="font-weight: 600;color:"black"
        >
           ${item.title1}
        </h5>
    </div>
    <div class="row text-start mt-2">
        <p
        style="font-size: medium;opacity: 0.9;"
        >
        ${item.title2}
        </p>
    </div>
    <div class="row text-start mt-2 link3">
       <span class="short">
       <a href="#">
          ${item.links}
        </a>
       </span> 
    </div>
</div>
      `
))
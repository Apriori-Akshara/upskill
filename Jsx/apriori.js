const apriori=[
    {
        id:"1",
       src:"./Images/6.jpg",
        title1:"Nina, from textile designer to web integrator",
      title2:"After several job positions as a Product Designer & Textile Graphic Designer, Nina wanted to give a new start to her professional career. After her bootcamp at Apriori Rennes, she j...",
        links:"Read article",
    },
    {
        id:"2",
        src:"./Images/7.jpg",
        title1:"It’s Apriori’s 8th birthday today and here is our 2021 in review",
        title2:"In 8 years, over 13 000 students have learned to code and changed their lives with Apriori. We are very humbled to have been part of so many of their journeys and help them to succe...",
        links:"Read article",
    },
    {
        id:"3",
        src:"./Images/8.jpg",
        title1:"Learning to code to become a Product Owner: Léa's story",
        title2:"After a five-year marketing career in the food industry, Léa joined Apriori to develop technical skills and pursue her passion for web products. Discover her journey and how the boo...",
        links:"Read article",
    },

]

const dataC=document.getElementById("three");
apriori.map((item,index)=>(
    dataC.innerHTML += `
    <div class="col-md-4 hoverEffect at767mt">
    <div class="row ">
        <img src=${item.src} alt="story-1" class="img-fluid  bradius">
    </div>
    <div class="row text-start mt-2">
        <h5
        style="font-weight: 900;"
        >
           ${item.title1}
        </h5>
    </div>
    <div class="row text-start mt-2">
        <p
        style="font-size: larger;opacity: 0.9;"
        >
        ${item.title2}
        </p>
    </div>
    <div class="row text-start mt-2 link3">
        <a href="#">
          ${item.links}
        </a>
    
    </div>
</div>
      `
))
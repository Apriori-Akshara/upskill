const lifes=[
    {
        id:"1",
        number:"4.99/5",
        title1:"average review",
        title2:"We are focused on our students' experience: our bootcamps have the best student reviews and Net Promoter Score (NPS) of all coding bootcamps.",
        links:"What our student say",
    },
    {
        id:"2",
        number:"14,863",
        title1:"graduates",
        title2:"Apriori is a strong community of developers, designers, entrepreneurs and tech talent, creating unique opportunities for our alumni worldwide.",
        links:"Meet our garduates",
    },
    {
        id:"3",
        number:"93%",
        title1:"employment rate",
        title2:"This is the percentage of our H2 2020 alumni who have found employment according to our jobs report. Other data include job roles, salaries, and time spent searching.",
        links:"Discover our Jobs Report",
    },
    {
        id:"4",
        number:"190+",
        title1:"startups created",
        title2:"We teach our students how to build great apps. Our alumni have launched successful startups, some of them raising up to $500M or even being acquiblue by Apple.",
        links:"Discover alumni startups",
    },
]

const data=document.getElementById("one");
lifes.map((item,index)=>(
    data.innerHTML += `
    <div class="col-md-5 mt-4">
                <div class="row at767cen">
                 <h1
                 style="font-weight:bolder;color:#0152a8 ; font-size:xx-larger;"
                 >${item.number}</h1>
                </div>
                <div class="row at767cen">
            <p
            style="font-size:larger ;font-weight:500;"
            > ${item.title1}</p>
                </div>
                <div class="row at767cen">
                    <p
                    style="font-size:medium ;opacity: 0.9;"
                    >
                    ${item.title2}

                          </p>
                </div>
                <div class="row  a2de  at767de">
                  <a href="#" class="at767cenLink">${item.links}</a>
                </div>
            </div>
      `
))
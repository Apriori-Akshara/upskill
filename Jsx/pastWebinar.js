const past=[
    // {
    //     id:"1",
    //    src:"./Images/event0.jpg",
    //    src1:"./Images/event1.jpg",
    //     title1:"EVENT 1",
    //     title2:
    //    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt impedit aliquam, beatae facilis animi labore magnam assumenda soluta maxime, rem quisquam quam necessitatibus fuga eius voluptatum dolores ipsam ullam porro  Delectus eos ipsum facilis molestiae eveniet ducimus velit odio numquam, ad laudantium sint quaerat voluptatum quidem, omnis voluptatem repellendus voluptas a, labore perferendis sequi. Delectus doloremque minus quidem quas tempore?    Culpa at, similique eum labore cum, ipsum dolores numquam magni perferendis temporibus, quidem nihil consectetur omnis provident. Illum ex quas odit odio blanditiis veniam optio deleniti tenetur ipsum, amet ab.  Quidem nostrum ut sed assumenda deserunt id quasi tempore sequi illo adipisci ipsam molestiae impedit eum maiores, accusamus dolorem iste dolores reprehenderit perferendis, repellendus corrupti porro! Mollitia amet numquam sed. ',
       

    //    titleA1:"EVENT 2",
    //    srcA:"./Images/event0.jpg",
    //    srcA1:"./Images/event1.jpg",
    //    titleA2:
    //    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt impedit aliquam, beatae facilis animi labore magnam assumenda soluta maxime, rem quisquam quam necessitatibus fuga eius voluptatum dolores ipsam ullam porro  Delectus eos ipsum facilis molestiae eveniet ducimus velit odio numquam, ad laudantium sint quaerat voluptatum quidem, omnis voluptatem repellendus voluptas a, labore perferendis sequi. Delectus doloremque minus quidem quas tempore?    Culpa at, similique eum labore cum, ipsum dolores numquam magni perferendis temporibus, quidem nihil consectetur omnis provident. Illum ex quas odit odio blanditiis veniam optio deleniti tenetur ipsum, amet ab.  Quidem nostrum ut sed assumenda deserunt id quasi tempore sequi illo adipisci ipsam molestiae impedit eum maiores, accusamus dolorem iste dolores reprehenderit perferendis, repellendus corrupti porro! Mollitia amet numquam sed. '
     
       
    // },
 
   
]



// function for keep checking


function hell23(){
    if(past[0]==undefined){
        document.getElementById('past').style.display='none';
        document.getElementById('glimp').innerHTML='Soon to happen! keep checking!';
    }else{
        document.getElementById('past').style.display='block';
       
    }
   
}
hell23();






















const dataU=document.getElementById("past");
past.map((item,index)=>(
    dataU.innerHTML += `


   
<div class="row justify-content-around">
<div class="row text-start">
    <p
    style="font-weight:700;font-size:2rem; margin-left: 20px;"
    >
       ${item.title1}
    </p>
</div>

<div class="row justify-content-around">
<div class="col-lg-5">
<img src=${item.src} alt="PastWebinar1" class="img-fluid pastHW">
<img src=${item.src1} alt="PastWebinar2" class="img-fluid pastHW">
</div>
<div class="col-lg-6 text-justify" id="sideDo">
    <h1
    style="font-weight:700;font-size: 2rem;"
    >
        FEEDBACK
    </h1>
    <br/>

    <p
    style="font-size:medium ;word-spacing: 4px; opacity: 0.9;"
    >
    ${item.title2}
    </p>
</div>
</div>
</div>




<div class="row justify-content-around mt-5">
    <div class="row text-start">
        <p
        style="font-weight:700;font-size:2rem; margin-left: 20px;"
        >
        ${item.titleA1}
        </p>
    </div>
    
    <div class="row justify-content-around">
    <div class="col-lg-6 text-justify" id="sideDo">
        <h1
        style="font-weight:700;font-size: 2rem;"
        >
            FEEDBACK
        </h1>
        <br/>
    
        <p
        style="font-size:medium ;word-spacing: 4px; opacity: 0.9;"
        >
        ${item.titleA2}
        </p>
    </div>

    <div class="col-lg-5">
        <img src=${item.srcA} alt="PastWebinar1" class="img-fluid pastHW">
        <img src=${item.srcA1} alt="PastWebinar2" class="img-fluid pastHW">
        </div>
    </div>
    </div>

      `
))
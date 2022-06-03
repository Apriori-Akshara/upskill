
 const upCome=[
    {
        id:"1",
        title:"Event 1",
        title1:" Lorem1 ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eos et quos inventore explicabo voluptate tenetur dolorem quae, deserunt obcaecati veniam asperiores esse hic voluptatibus minima dolore error saepe natus! Voluptatem sed ratione placeat sequi atque commodi soluta et dolores dicta sunt vel corporis aperiam, ullam pariatur ipsam rem, explicabo dolore doloremque ducimus odit ad. Vitae aperiam esse laboriosam iure.   Aperiam eius, accusantium dolor consequuntur velit enim, error distinctio, animi optio vitae natus? Beatae soluta nobis fuga odio modi officiis tempore ut, iusto aut voluptate ducimus! Explicabo dolorum sit deleniti. Repellat qui ullam voluptas, vel tenetur, atque error similique iure quam sunt, dolorem consectetur veritatis officiis. Dignissimos consequatur ut ab, officia eum quod fugit dicta fugiat unde dolor cumque accusantium. Iusto modi rerum quo quas, doloribus ratione alias fugiat ab et neque vero natus excepturi assumenda sequi nobis repudiandae sapiente nulla minima officiis architecto qui laboriosam enim, numquam quam? Nihil.",
        colors:"blue"
     
       
       
    },
    {
        id:"2",
        title:"Event 2",
        colors:"red",
        title1:" Lorem2 ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eos et quos inventore explicabo voluptate tenetur dolorem quae, deserunt obcaecati veniam asperiores esse hic voluptatibus minima dolore error saepe natus! Voluptatem sed ratione placeat sequi atque commodi soluta et dolores dicta sunt vel corporis aperiam, ullam pariatur ipsam rem, explicabo dolore doloremque ducimus odit ad. Vitae aperiam esse laboriosam iure.   Aperiam eius, accusantium dolor consequuntur velit enim, error distinctio, animi optio vitae natus? Beatae soluta nobis fuga odio modi officiis tempore ut, iusto aut voluptate ducimus! Explicabo dolorum sit deleniti. Repellat qui ullam voluptas, vel tenetur, atque error similique iure quam sunt, dolorem consectetur veritatis officiis. Dignissimos consequatur ut ab, officia eum quod fugit dicta fugiat unde dolor cumque accusantium. Iusto modi rerum quo quas, doloribus ratione alias fugiat ab et neque vero natus excepturi assumenda sequi nobis repudiandae sapiente nulla minima officiis architecto qui laboriosam enim, numquam quam? Nihil.",
    },
    {
        id:"3",
        title:"Event 3",
        colors:"blue",
        title1:" Lorem3 ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eos et quos inventore explicabo voluptate tenetur dolorem quae, deserunt obcaecati veniam asperiores esse hic voluptatibus minima dolore error saepe natus! Voluptatem sed ratione placeat sequi atque commodi soluta et dolores dicta sunt vel corporis aperiam, ullam pariatur ipsam rem, explicabo dolore doloremque ducimus odit ad. Vitae aperiam esse laboriosam iure.   Aperiam eius, accusantium dolor consequuntur velit enim, error distinctio, animi optio vitae natus? Beatae soluta nobis fuga odio modi officiis tempore ut, iusto aut voluptate ducimus! Explicabo dolorum sit deleniti. Repellat qui ullam voluptas, vel tenetur, atque error similique iure quam sunt, dolorem consectetur veritatis officiis. Dignissimos consequatur ut ab, officia eum quod fugit dicta fugiat unde dolor cumque accusantium. Iusto modi rerum quo quas, doloribus ratione alias fugiat ab et neque vero natus excepturi assumenda sequi nobis repudiandae sapiente nulla minima officiis architecto qui laboriosam enim, numquam quam? Nihil.",
    },
    {
        id:"4",
        title:"Event 4",
        colors:"red",
        title1:" Lorem4 ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eos et quos inventore explicabo voluptate tenetur dolorem quae, deserunt obcaecati veniam asperiores esse hic voluptatibus minima dolore error saepe natus! Voluptatem sed ratione placeat sequi atque commodi soluta et dolores dicta sunt vel corporis aperiam, ullam pariatur ipsam rem, explicabo dolore doloremque ducimus odit ad. Vitae aperiam esse laboriosam iure.   Aperiam eius, accusantium dolor consequuntur velit enim, error distinctio, animi optio vitae natus? Beatae soluta nobis fuga odio modi officiis tempore ut, iusto aut voluptate ducimus! Explicabo dolorum sit deleniti. Repellat qui ullam voluptas, vel tenetur, atque error similique iure quam sunt, dolorem consectetur veritatis officiis. Dignissimos consequatur ut ab, officia eum quod fugit dicta fugiat unde dolor cumque accusantium. Iusto modi rerum quo quas, doloribus ratione alias fugiat ab et neque vero natus excepturi assumenda sequi nobis repudiandae sapiente nulla minima officiis architecto qui laboriosam enim, numquam quam? Nihil.",
    },
    {
        id:"5",
        title:"Event 5",
        colors:"blue",
        title1:" Lorem5 ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eos et quos inventore explicabo voluptate tenetur dolorem quae, deserunt obcaecati veniam asperiores esse hic voluptatibus minima dolore error saepe natus! Voluptatem sed ratione placeat sequi atque commodi soluta et dolores dicta sunt vel corporis aperiam, ullam pariatur ipsam rem, explicabo dolore doloremque ducimus odit ad. Vitae aperiam esse laboriosam iure.   Aperiam eius, accusantium dolor consequuntur velit enim, error distinctio, animi optio vitae natus? Beatae soluta nobis fuga odio modi officiis tempore ut, iusto aut voluptate ducimus! Explicabo dolorum sit deleniti. Repellat qui ullam voluptas, vel tenetur, atque error similique iure quam sunt, dolorem consectetur veritatis officiis. Dignissimos consequatur ut ab, officia eum quod fugit dicta fugiat unde dolor cumque accusantium. Iusto modi rerum quo quas, doloribus ratione alias fugiat ab et neque vero natus excepturi assumenda sequi nobis repudiandae sapiente nulla minima officiis architecto qui laboriosam enim, numquam quam? Nihil.",
    },
  

]

const dataE=document.getElementById("upComing");
upCome.map((item,index)=>(
    dataE.innerHTML += `

    <div class="row text-start">
    <button class="de" onclick="eventCall('${item.title1}',${item.id},)">
    <h1
    style="color:black;font-weight:500;font-size:1.5rem;"
    >
       ${item.title}

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=${item.colors} class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
    </h1>
    </button>
        
    </div>
      `
))

 function eventCall(items,itsd){
    const get1=items;
 
//    const karo=  document.getElementById('dumyDatas1').innerText=get1;;
   
location.href='event.html'

//     document.getElementById('eventNo').innerHTML=
//     `  <h1
//     style="font-weight:700;font-size:3rem;z-index:1;"
//     >
//    Event ${itsd}
//    </h1>
//     `;
//  document.getElementById('registrationText').innerHTML=
//  ` <h3
//  style="display:inline-block ; font-weight: 700;"
//  >EVENT ${itsd} <span
//  style="color:#0152a8 ;background-color:#ffdab3;"
//  >REGISTRATION</span>
// </h3>
//  `;



    alert(get1);
  
}

//document.getElementById('dumyDatas').innerText=get1;


 function test1(){
    document.getElementById('dumyDatas').innerText=get1;
 }
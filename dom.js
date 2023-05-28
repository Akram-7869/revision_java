 let ans=document.getElementById("ak");
 ans.add.Content="akram is here";
 let ak =document.createElement('p');
 let a=document.createTextNode("i am akram sulthan");
 ak.appendChild(a);
 ans.appendChild(ak);
easiest way to appendchild
ans.textContent="i am akram sulthan";
document.body.appendChild(ans);
function print(){
    ans.style.background="blue";
}

// ans.addEventListener('click',print);
// ans.removeEventListener('click',print);
// ans.addEventListener('click',function(e){
//     document.write(e);
// });

// let ak=document.querySelector('a');
// ak.addEventListener('click',function(e){
//     e.preventDefault();
//     document.write("maza aaye");
// })

//toomany event
// let ak=document.createElement('div');
// for(let i =1;i<=5;i++){
//     let a=document.createElement('p');
//     a.textContent="hi i am para";
//     a.addEventListener('click',function(){
//         document.write("i have clicked on this para");
//     })

//     ak.appendChild(a);
// }
// document.body.appendChild(ak);

// //optimsized way
// let mydiv=document.createElement('div');
// function showing(event){
//   document.write('para'+event.target.textContent);
// }
// mydiv.addEventListener('click',showing);
// for(let i=1;i<5;i++){
//     let para=document.createElement('p');
//     para.textContent="this is optimized way " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);


//call back function
// let ans=[
//     {name:"akram",age:34,nickname:"cena"},
//     {name:"akm",age:34,nickname:"cena"}
// ];
// function get(){
//    setTimeout(()=>{
//     let akk="";
//     ans.forEach((data,index)=>{
//            akk+=`<li>${ans[index].name}</li>`;
//     })
//     document.body.innerHTML=akk;
//    },1000);
// }
// function create(data,callback){
//     setTimeout(()=>{
//       ans.push(data);
//       callback();

//     },2000)
// }

// create({name:"sulthan"},get);

//pormises

// let ans=[
//     {name:"akram",age:34,nickname:"cena"},
//     {name:"akm",age:34,nickname:"cena"}
// ];
// function get(){
//    setTimeout(()=>{
//     let akk="";
//     ans.forEach((data,index)=>{
//            akk+=`<li>${ans[index].name}</li>`;
//     })
//     document.body.innerHTML=akk;
//    },1000);
// }
// function create(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             ans.push(data);
//            let errror=true;
//            if(!errror)resolve();
//            else reject("kuch sahi nahi");
//     },2000);
// })

// }

// create({name:"sulthan"}).then(get).catch(err=>console.log("kuch toh hai"));

//async and await function
let ans=[
        {name:"akram",age:34,nickname:"cena"},
        {name:"akm",age:34,nickname:"cena"}
    ];
    function get(){
       setTimeout(()=>{
        let akk="";
        ans.forEach((data,index)=>{
               akk+=`<li>${ans[index].name}</li>`;
        })
        document.body.innerHTML=akk;
       },1000);
    }
    function create(data){
        setTimeout(()=>{
          ans.push(data);
         },2000)
    }
   
    async function start(){
        create({ name: "sulthan" });
        get();

    }
    start();

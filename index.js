let currentvalue ='';
document.querySelector('#display').value = currentvalue; 

//mode btn
let modebtn = document.querySelector('#mode')
let currmode='light'//dark
modebtn.addEventListener('click',()=>{
    console.log('you are try to change mode')
   if(currmode ==='light'){
    currmode="dark"
    document.querySelector('#calculator').style.backgroundColor="black"
   }
   else{
    currmode="light"
    document.querySelector('#calculator').style.backgroundColor="white"

   }
    console.log(currmode)
})
//greeting 1& 2

let date  = new Date();
let hours = date.getHours();
//kya kya access ka skete hai
/*let tdate = date.getDate();
let mon   = date.getMonth();
let year  =date.getFullYear();
let local =date.toLocaleTimeString();*/
let heading = document.querySelector('#greeting')
let heading1 = document.querySelector('#greeting1')

setInterval(() => {
    let date1 =new Date();
    heading1.innerHTML =date1.toLocaleTimeString()
}, 1000);

console.log(hours)

if(hours>5 &&hours<11){
    heading.innerText =`Good-morning `
   
}
else if(hours>11 &&hours<18){
    heading.innerText=`Good afternoon`
    }
else{
    heading.innerText=`Good night`
}

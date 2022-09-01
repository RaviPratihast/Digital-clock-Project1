"use strict"

// --variable declaration and assignment.
const Hours=document.querySelector('.hour-count');
const Min=document.querySelector('.min-count');
const Sec=document.querySelector('.sec-count');
const AmPm=document.querySelector('.AM-PM-text');


function showTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm='AM'

   


    if(h>12){

        h=h-12;
        
        ampm='PM';

    }

      h=h<10 ? `0`+h : h;
      m=m<10 ? `0`+ m: m;
      s=s<10 ?  `0`+ s: s;


    Hours.textContent=h;
    Min.textContent=m;
    Sec.textContent=s;
    AmPm.textContent=ampm;

    // console.log('reached')


    // setTimeout(()=>{
    //     console.log('inside')
    //     updateTime()
    // },1000);

    // console.log('exit');
    
    
}





// setInterval(() => {
//     updateTime();
// },10)


setInterval(showTime,1000);
// updateTime();
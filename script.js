let setting_parent = document.querySelector(".settingparent");
let setting_garai_icon_btn = document.querySelector("#setting");
let heading = document.querySelectorAll(".heading");
let setting_box = document.querySelector(".setting_box");
let container = document.querySelector(".container");
let settingbtn = document.getElementById("settingbtn");
let pomodoro = document.getElementById("pomodoro");
let short_break = document.getElementById("short_break");
let long_break = document.getElementById("long_break");
window.long_internal=null;
window.short_break_internal=null;
window.pomo_internal=null;


onselectstart="return false;";
// ............................................................................ 
// pomodoro div variables 

let pomodoro_button = document.getElementById("pomodoro_button");


const pomo_obj = {
    pomodoro_min_div: document.getElementById("pomodoro_min"),
    pomodoro_sec_div: document.getElementById("pomodoro_sec")
}
const sec_60=60;
let sec = sec_60;


// pomodoro div variables 
// Short_brak div variables 

let short_break_btn = document.getElementById("short_break_btn");


const Short_break_obj = {
    s_break_min: document.getElementById("s_break_min"),
    s_break_sec: document.getElementById("s_break_sec")
}




// Short_brak div variables 


// l_break_ div variables 

let l_break_btn = document.getElementById("l_break_btn");


const l_break_obj = {
    l_break_min: document.getElementById("l_break_min"),
    l_break_sec: document.getElementById("l_break_sec")
}




// l_break_ div variables 
// ***************************************************
function data_updater() {


let data=localStorage.getItem("pomodoro_data");
data=JSON.parse(data);
if(data!=null)
{

    // l_break_obj.l_break_min.innerHTML=data[2];
    // pomo_obj.pomodoro_min_div.innerHTML=data[0];
    // Short_break_obj.s_break_min.innerHTML=data[1];

    show_time(data[0], pomo_obj.pomodoro_min_div);
    show_time(data[1], Short_break_obj.s_break_min);
    show_time(data[2], l_break_obj.l_break_min);
   
}
else
{
    l_break_obj.l_break_min.innerHTML="15";
    pomo_obj.pomodoro_min_div.innerHTML="27";
    Short_break_obj.s_break_min.innerHTML="06";

    console.log("call me ");
   

}

   
    
}
data_updater();

// temp variables 
let l_break_total_min=+(l_break_obj.l_break_min.innerHTML);
let l_temp_min=l_break_total_min-1;

let Short_break_total_min=+(Short_break_obj.s_break_min.innerHTML);
let Short_temp_min=Short_break_total_min-1;


let pomo_total_min=+(pomo_obj.pomodoro_min_div.innerHTML);
let pomo_temp_min=pomo_total_min-1;
// temp variables 


// display box script 

//variables
let setting_pomodoro_minutes=document.getElementById('setting_pomodoro_minutes');
let setting_short_break_minutes=document.getElementById('setting_short_break_minutes');
let setting_long_break_minutes=document.getElementById('setting_long_break_minutes');
//variables


settingbtn.addEventListener('click', () => {

    setting_parent.style.cssText = 'opacity:0;z-index: -23423432;transition:2s';

    setting_box.style.cssText = 'top:-50%;';
    let pomo_min=+(setting_pomodoro_minutes.value);
    let short_setting_min=+(setting_short_break_minutes.value);
    let long_setting_min=+(setting_long_break_minutes.value);
    let arr_setting=[pomo_min,short_setting_min,long_setting_min];
    arr_setting=JSON.stringify(arr_setting);
    localStorage.setItem("pomodoro_data",arr_setting);
// localStorage.removeItem("pomodoro_data");
// data_updater();
// window.location.reload(true);
history.go()
});
setting_garai_icon_btn.addEventListener('click', () => {

    setting_parent.style.cssText = 'opacity:1;z-index: 23423432;';

    setting_box.style.cssText = 'top:50%;';

});

//common functions 
function fantasy_sound() {
    var audio = new Audio('./sound/fantasy.wav');
    audio.play();
  
}
function click_sound() {
    var audio = new Audio('./sound/button.wav');
    audio.play();

}
// function fantasy_sound() {
//     var audio = new Audio('./sound/fantasy.wav');
//     audio.play();

// }

//****************************************************
function show_time(time, obj) {

    if (time < 10) {
        obj.innerHTML = "0" + time;
    }

    else 
     {
        obj.innerHTML = time;
    }


}
//****************************************************
//common functions 
// function only one time call in starting 
// show_time(sec,pomo_obj.pomodoro_sec_div);
// show_time(pomo_total_min,pomo_obj.pomodoro_min_div);

// function only one time call in starting 

//tabs script is ending ...............................

// script for pomodoro tab ( counting script ) 
pomodoro_button.addEventListener("click", () => {

    // click_sound();

    if (pomodoro_button.innerHTML == "START")
     {

         click_sound();
        pomodoro_button.innerHTML = "STOP";

        // intervals starting here...........................
        
        pomo_internal=setInterval(() => {
            sec=sec-1;
            show_time(sec,pomo_obj.pomodoro_sec_div);
            console.log(sec);
            if(sec!=0)
            {
             
                 
                    show_time(pomo_temp_min,pomo_obj.pomodoro_min_div);   

            }
            if(sec===0)
            {
                sec=sec_60;
                pomo_temp_min=pomo_temp_min-1;
                window.pomosettimeout=setTimeout(() => {
                    
                    show_time(pomo_temp_min,pomo_obj.pomodoro_min_div);   

                }, 1000);         
                
            }
            if(pomo_temp_min==-1){
                // console.log(pomo_temp_min);
                // show_time(pomo_total_min,pomo_obj.pomodoro_min_div)
                clearTimeout(pomosettimeout);
                data_updater();
                show_time(0,pomo_obj.pomodoro_sec_div);
                pomo_temp_min=pomo_total_min-1;
                clearInterval(pomo_internal);
fantasy_sound(); 

        pomodoro_button.innerHTML = "START";
        sec = sec_60;

            }
            
          
            
        }, 1000);
        
        // intervals Ending here...........................
    }
    else 
    {
        clearInterval(pomo_internal);
        click_sound();

        pomodoro_button.innerHTML = "START";
    }

});
// script for ShortBreak tab ( counting script )  ending..............................

short_break_btn.addEventListener("click", () => {

    // click_sound();

    if (short_break_btn.innerHTML == "START")
     {
         click_sound();
         short_break_btn.innerHTML = "STOP";

        // intervals starting here...........................
        
        short_break_internal=setInterval(() => {
            sec=sec-1;
            show_time(sec,Short_break_obj.s_break_sec);
            console.log(sec);
            if(sec!=0)
            {
             
                 
                    show_time(Short_temp_min,Short_break_obj.s_break_min);   

            }
            if(sec===0)
            {
                sec=sec_60;
                Short_temp_min=Short_temp_min-1;
                window.sbreak_settimeout=setTimeout(() => {
                    
                    show_time(Short_temp_min,Short_break_obj.s_break_min);   

                }, 1000);         
                
            }
            if(Short_temp_min==-1){
                // console.log(Short_temp_min);
                // show_time(Short_break_total_min,Short_break_obj.s_break_min)
                clearTimeout(sbreak_settimeout);
                data_updater();
           
                show_time(0,Short_break_obj.s_break_sec);
                Short_temp_min=Short_break_total_min-1;
                clearInterval(short_break_internal);
                fantasy_sound(); 

                short_break_btn.innerHTML = "START";
                sec = sec_60;
            }
            
          
            
        }, 1000);
        
        // intervals Ending here...........................
    }
    else 
    {
        clearInterval(short_break_internal);
        click_sound();

        short_break_btn.innerHTML = "START";
    }

});
// script for ShortBreak tab ( counting script )  ending..............................
// script for pomodoro tab ( counting script ) 
l_break_btn.addEventListener("click", () => {

    // click_sound();

    if (l_break_btn.innerHTML == "START")
     {
         click_sound();
         l_break_btn.innerHTML = "STOP";

        // intervals starting here...........................
        
        long_internal=setInterval(() => {
            sec=sec-1;
            show_time(sec,l_break_obj.l_break_sec);
            console.log(sec);
            if(sec!=0)
            {
             
                 
                    show_time(l_temp_min,l_break_obj.l_break_min);   

            }
            if(sec===0)
            {
                sec=sec_60;
                l_temp_min=l_temp_min-1;
                window.lsettimeout=setTimeout(() => {
                    
                    show_time(l_temp_min,l_break_obj.l_break_min);   

                }, 1000);         
                
            }
            if(l_temp_min==-1){
                // console.log(pomo_temp_min);
                // show_time(l_break_total_min,l_break_obj.l_break_min)
                clearTimeout(lsettimeout);                
                show_time(0,l_break_obj.l_break_sec);
                l_temp_min=l_break_total_min-1;
                clearInterval(long_internal);
                
                data_updater();
                fantasy_sound();     
                    
               
                l_break_btn.innerHTML = "START";
                sec = sec_60;
            }
            
          
            
        }, 1000);
        
        // intervals Ending here...........................
    }
    else 
    {
        clearInterval(long_internal);
        click_sound();

        l_break_btn.innerHTML = "START";
    }

});
// script for ShortBreak tab ( counting script )  ending..............................
// ***************************************************
// tab changing script 
//header variables
let pomodor_header_heading=document.getElementById("pomodor_header_heading");
let short_header_heading=document.getElementById("short_header_heading");
let long_header_heading=document.getElementById("long_header_heading");
let v=[pomodor_header_heading,short_header_heading,long_header_heading];
//header variables

function tab_changing_manager()
{
    let conf=confirm("Do you realy want to change the tab....!\nProgress of current Tab will be lost...!");
return conf;
}

let condition=false;

v[0].addEventListener('click',()=>{
    if(sec!=60){

         condition=tab_changing_manager();
    }
if((condition==true)||(sec==60))
{
   

    v[0].classList.remove('bgnone');
    v[1].classList.add('bgnone');
    v[2].classList.add('bgnone');


    pomodoro.classList.remove('dnone');
    short_break.classList.add('dnone');
    long_break.classList.add('dnone');


    container.style.cssText = '      background: radial-gradient(#de3535, #071e27);';

    //short braeak
    show_time(Short_break_total_min,Short_break_obj.s_break_min)
    show_time(0,Short_break_obj.s_break_sec)
    Short_temp_min=Short_break_total_min-1;
    clearInterval(short_break_internal);
    short_break_btn.innerHTML = "START";
    //short braeak
    sec=sec_60;
    //long braeak
    show_time(l_break_total_min,l_break_obj.l_break_min)
    show_time(0,l_break_obj.l_break_sec)
    l_temp_min=l_break_total_min-1;
    clearInterval(long_internal);
    l_break_btn.innerHTML = "START";
   

}
});


v[1].addEventListener('click', () => {
    if(sec!=60){

        condition=tab_changing_manager();
   }
if((condition==true)||(sec==60))
{

    v[1].classList.remove('bgnone');
    v[0].classList.add('bgnone');
    v[2].classList.add('bgnone');

    container.style.cssText = '  background: radial-gradient(rgb(112 115 121), #00bcd4);';
    pomodoro.classList.add('dnone');
    short_break.classList.remove('dnone');
    long_break.classList.add('dnone');
    sec=sec_60;
    //long braeak
    show_time(l_break_total_min,l_break_obj.l_break_min)
    show_time(0,l_break_obj.l_break_sec)
    l_temp_min=l_break_total_min-1;
    clearInterval(long_internal);
    l_break_btn.innerHTML = "START";
    //pomodoro
    show_time(pomo_total_min,pomo_obj.pomodoro_min_div)
                show_time(0,pomo_obj.pomodoro_sec_div)
                pomo_temp_min=pomo_total_min-1;
                clearInterval(pomo_internal);
        pomodoro_button.innerHTML = "START";
    //pomodoro
   
}

});


v[2].addEventListener('click', () => {


    if(sec!=60){

        condition=tab_changing_manager();
   }
if((condition==true)||(sec==60))
    {

        container.style.cssText = '      background: radial-gradient(#4caf50, rgb(40, 15, 88));';

        v[2].classList.remove('bgnone');
        v[0].classList.add('bgnone');
        v[1].classList.add('bgnone');
    
    
        pomodoro.classList.add('dnone');
        short_break.classList.add('dnone');
        long_break.classList.remove('dnone');
         //pomodoro
    show_time(pomo_total_min,pomo_obj.pomodoro_min_div)
    show_time(0,pomo_obj.pomodoro_sec_div)
    pomo_temp_min=pomo_total_min-1;
    clearInterval(pomo_internal);
pomodoro_button.innerHTML = "START";
//pomodoro
sec=sec_60;
 //short braeak
 show_time(Short_break_total_min,Short_break_obj.s_break_min)
 show_time(0,Short_break_obj.s_break_sec)
 Short_temp_min=Short_break_total_min-1;
 clearInterval(short_break_internal);
 short_break_btn.innerHTML = "START";
 //short braeak
    }
  
 
});





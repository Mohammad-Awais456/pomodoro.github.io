// Global variables 
let timer_data=null;
let temp_sec=60;
let worker_object;
let num=1;

// Global variables 
onselectstart="return false;";
// variables setting box
let setting_parent = document.querySelector(".settingparent");
let gare_icon = document.querySelector("#setting");
let setting_box = document.querySelector(".setting_box");
let settingbtn = document.querySelector("#settingbtn");
let close = document.querySelector("#close");
let reload_page = document.querySelector("#reload_page");


let setting_pomodoro_minutes = document.querySelector("#setting_pomodoro_minutes");
let setting_short_break_minutes = document.querySelector("#setting_short_break_minutes");
let setting_long_break_minutes = document.querySelector("#setting_long_break_minutes");



let total_min=+(setting_pomodoro_minutes.value);
let  short_break=+(setting_short_break_minutes.value);
let  long_break=+(setting_long_break_minutes.value);

let array_timer_data=[total_min,short_break,long_break];

timer_data=array_timer_data;



// variables setting box


// variables short and long breaks

let start_break_button = document.querySelector("#start_break_button");
let cancel_break_button = document.querySelector("#cancel_break_button");
let Breaks_div = document.querySelector(".Breaks");
let breaks_inside = document.querySelector(".breaks_inside");
let value_of_break = document.querySelector(".value");

// variables short and long breaks



// variables timer

let main_button = document.querySelector("#pomodoro_button");
let pomodoro_min_div = document.querySelector("#pomodoro_min");
let pomodoro_sec_div = document.querySelector("#pomodoro_sec");



// variables timer
// variables 

//        event lisner 
gare_icon.addEventListener("click",display_setting_box);
settingbtn.addEventListener("click",hide_setting_box);
main_button.addEventListener("click",admin);
cancel_break_button.addEventListener("click",breaks_div_cancel_btn);
start_break_button.addEventListener("click",breaks_div_start_btn);

close.addEventListener("click",close_setting_div);
reload_page.addEventListener("click",()=>{

    history.go();
});


//        event lisner 




// functions 
// *************************************
function set_local_data(d)
{
    d=JSON.stringify(d);
    localStorage.setItem("lap",d);
}
// *************************************
let pomodor_header_heading=document.getElementById("pomodor_header_heading");
let breaks_heading=document.querySelector(".breaks_heading");
// *************************************
function display_break(v)
{
    let b=localStorage.getItem("timer_data")
    if((v==2)||(v==4))
    {
             if(b!=null)
             {
                 b=JSON.parse(b);
                 b=b[1];
                 display_time_break(value_of_break,b);

                 breaks_div_display();
                 breaks_heading.innerHTML="Short Break";
                 setTimeout(() => {
                     
                     pomodor_header_heading.innerHTML="Short Break";
                 }, 1000);
                }
                else
                {
                    
                    display_time_break(value_of_break,6);
                 
                    breaks_heading.innerHTML="Short Break";
                    setTimeout(() => {
                        
                        pomodor_header_heading.innerHTML="Short Break";
                    }, 1000);
                 breaks_div_display();

             }

    }
    else
    {
        if(b!=null)
        {
            b=JSON.parse(b);
            b=b[2];
            console.log(b);
            display_time_break(value_of_break,b);
         
            breaks_heading.innerHTML="long Break";
            setTimeout(() => {
                
                pomodor_header_heading.innerHTML="long Break";
            }, 1000);
            breaks_div_display();

           }
           else
           {
          
            breaks_heading.innerHTML="long Break";
            setTimeout(() => {
                
                pomodor_header_heading.innerHTML="long Break";
            }, 1000);

            breaks_div_display();
               
            display_time_break(value_of_break,15);

        }
    }
}
// *************************************
function break_manager()
{
    let data=localStorage.getItem("lap");
    if(data!=null)
    {
      data=JSON.parse(data);
      if(data==2)
      {
        display_break(data);
        set_local_data(3);
      }
      else if(data==4)
      {
        display_break(data);
        set_local_data(5);

      }
      else if(data==6)
      {
        display_break(data);
        set_local_data(1);
    }
    else
    {
        data=data+1;
          set_local_data(data);

      }
    }
    else
    {
        set_local_data(3);
        display_break(2);

    }
}




// *************************************
function close_setting_div(){
    setting_box.style.cssText="top:-500%;transition:3s";
    setTimeout(opacity_hider, 1000);

}
//............................................

function breaks_div_display()
{
    // setTimeout(opacity_hider_for_breaks_div, 1000);
   
    Breaks_div.style.cssText="opacity:1; z-index: 32423432434234;;transition:2s";


}
//......................................

function lap_generate() {
    localStorage.setItem("lap",2);
}
lap_generate();

function breaks_div_cancel_btn(){
click_sound();
setTimeout(opacity_hider_for_breaks_div, 10);
setTimeout(() => {
    
    pomodor_header_heading.innerHTML="Work Time";
}, 2000);
}
// ....................................
function sound_time_over()
{
    var audio = new Audio('./sound/parasite.mp3');
    audio.play();
}

function click_sound() {
    var audio = new Audio('./sound/button.wav');
    audio.play();

}
// ....................................

function setlocal_storage_data()
{
// store date in localstorage.
num=1;
total_min=+(setting_pomodoro_minutes.value);
 short_break=+(setting_short_break_minutes.value);
 long_break=+(setting_long_break_minutes.value);

array_timer_data=[total_min,short_break,long_break];

array_timer_data=JSON.stringify(array_timer_data);

localStorage.setItem("timer_data",array_timer_data);
}


function display_setting_box()
{
// breaks_div_display();

    setting_parent.style.cssText="opacity:1;";
    setting_box.style.cssText="top:50%;";

}
//.......................................
function opacity_hider()
{
    setting_parent.style.cssText="opacity:0;z-index: -23423432;transition:3s";
    
}
function opacity_hider_for_breaks_div()
{
    Breaks_div.style.cssText="opacity:0;z-index: -23423432;transition:2s";
    
}

//.......................................\ 
function display_time(location,val)
{
    if(val<10)
    {
        location.innerHTML="0"+val;
    }
    else
    {
        location.innerHTML=val;

    }
}
function display_time_break(location,val)
{
    if(val<10)
    {
        location.innerHTML=val+" min";
    }
    else
    {
        location.innerHTML=val+" min";

    }
}
//.......................................\ 
function update_timer()
{
    timer_data=localStorage.getItem("timer_data");
    timer_data=JSON.parse(timer_data);
    if(timer_data!=null)
    {
        setTimeout(() => {
            display_time(pomodoro_min_div,timer_data[0]);
            display_time(pomodoro_sec_div,0);
        }, 1000);
      
        
    }
    else
    {
        setTimeout(() => {
            display_time(pomodoro_min_div,27);
        display_time(pomodoro_sec_div,0);
        }, 1000);
        
    }

    temp_sec=60;
    stop_timer();
    main_button.innerHTML="START";

}
update_timer();
//.......................................\ 

function hide_setting_box()
{
    close_setting_div();


    
    setlocal_storage_data();

    update_timer();


}

//******************************** */
function stop_timer()
{
    worker_object.terminate();
    worker_object=undefined;
 
        
        pomodor_header_heading.innerHTML="Work Time";
   
   break_manager();
}
//******************************** */
function breaks_div_start_btn(){

   setTimeout(() => {
    let vv=value_of_break.innerHTML;
    vv=vv.slice(0,2);
console.log(vv);
    timer_data[0]=+(vv);
    display_time(pomodoro_min_div,timer_data[0])

        click_sound();
    setTimeout(opacity_hider_for_breaks_div, 50);
    admin();
   }, 3000);
    
    
    }
//******************************** */
function start_timer()
{
    let send;
    
    worker_object= new Worker("count.js");

    console.log(timer_data);


if(timer_data==null){

     send=[26,temp_sec];
}else
{
     send=[timer_data[0]-1,temp_sec];

}

    worker_object.postMessage(send);
    worker_object.onmessage=(e)=>{
        temp_sec=e.data[1];
      if(num===1)
      {
        display_time(pomodoro_min_div,e.data[0]); 
        num=2;
      }
    if(e.data[1]==0)
    {
        display_time(pomodoro_sec_div,e.data[1]);

    }
    if(e.data[0]!==-1)
    {

        display_time(pomodoro_sec_div,e.data[1]);
        setTimeout(()=>{
            display_time(pomodoro_min_div,e.data[0]);
        }, 1000);
        
    }



        if((e.data[0]== -1)&&(e.data[1]==0))
        {
            temp_sec=60;
            update_timer();
            sound_time_over();
            num=1;
            stop_timer();
        }

   

       



    }

}
//******************************** */
function admin()
{
    click_sound();

    if(main_button.innerHTML=="START")
    {
        // alert("start");
        main_button.innerHTML="STOP";
        start_timer();



    }
    else
    {
        main_button.innerHTML="START";
        stop_timer();
        // alert("Stop");

    }
} // admin end..........................
//******************************** */
//******************************** */

// functions 






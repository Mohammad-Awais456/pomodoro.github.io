onmessage=(e)=>{
    let sec=e.data[1];
   let min=e.data[0];
setInterval(()=>{

sec--;
if(sec==0)
{
    min--;
    sec=60;
    if(min<0)
    {
        sec=0;
        let d=[min,sec];
        postMessage(d);
    }
    
}

let d=[min,sec];
postMessage(d);



},1000)


}
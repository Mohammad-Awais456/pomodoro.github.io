onmessage=(e)=>{
    let sec=e.data[1];
   let min=e.data[0];
setInterval(()=>{

sec--;
if(sec==0)
{
    min--;
    let d=[min,sec];
postMessage(d);
    sec=60;
    if(min<0)
    {
        sec=0;
         d=[min,sec];
        postMessage(d);
    }
    
}
else
{
    let d=[min,sec];
    postMessage(d); 
}




},1000)


}
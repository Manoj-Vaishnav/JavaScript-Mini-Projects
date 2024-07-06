const time=document.getElementById("clock");
setInterval(function(){
    let mydate=new Date();
    time.innerHTML=mydate.toLocaleTimeString();
},1000);
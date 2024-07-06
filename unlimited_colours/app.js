let hexa="0123456789ABCDEF"
let stop;
const color_generator=()=>{
    let color="#";
    for(let i=0;i<6;i++){
        color += hexa[Math.floor(Math.random()*16)];
    }
    return color;
}
const body_color=()=>{
    document.querySelector("body").style.backgroundColor=color_generator();
}
document.getElementById("start").addEventListener('click',function(){
    stop=setInterval(body_color,1000);
})
document.getElementById("stop").addEventListener('click',function(){
   clearInterval(stop);
})

const grey=document.getElementById("grey");
const white=document.getElementById("white");
const blue=document.getElementById("blue");
const yellow=document.getElementById("yellow");

const button=document.querySelectorAll(".button");
const body=document.querySelector("body");

button.forEach(function(data,index){
data.addEventListener('click',function(e){
    if(e.target.id == "grey"){
        body.style.backgroundColor="grey";
    }else if(e.target.id == "white"){
        body.style.backgroundColor="white";
    }else if(e.target.id == "blue"){
        body.style.backgroundColor="blue";
    }else {
        body.style.backgroundColor="yellow";
    }
})
})
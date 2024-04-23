const btn=document.querySelector(".btn");
let theme="light";

btn.addEventListener("click",()=>{
    if(theme=="light"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        theme="dark";
        btn.textContent="Açık";
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        theme="light";
        btn.textContent="Koyu";
    }
})
const a=document.querySelector("#temp");

const b=document.querySelector(".drop")
const c=document.querySelector(".go")

c.addEventListener("click", change);

function change() {

    if(b.value=="1"){
        a.innerHTML="23 c"
    }
    if(b.value=="2"){
        a.innerHTML="26 c"
    }
    if(b.value=="3"){
        a.innerHTML="29 c"
    }
    if(b.value=="4"){
        a.innerHTML="16 c"
    }
    

}

console.log(b.value);



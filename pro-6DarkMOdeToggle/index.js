const bodyEl=document.querySelector('body')

const inputEl=document.querySelector("input")
// inputEl.checked=true

function updateBody(){
    if (inputEl.checked){
        bodyEl.style.background="black";
    }
    else bodyEl.style.background="white";
}
inputEl.addEventListener("click",updateBody)

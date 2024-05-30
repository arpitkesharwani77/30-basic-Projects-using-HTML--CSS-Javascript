const picsContainerEl=document.querySelector(".pics-container")

const btnEl=document.querySelector("button");




btnEl.addEventListener("click",()=>{
    picsContainerEl.innerHTML=""
    const randomImgNum=Math.round(Math.random()*20)
    const displayNum=document.createElement("h1")
    displayNum.innerText=randomImgNum +" images are generated";
    picsContainerEl.appendChild(displayNum);
    alert(randomImgNum)
    for(let i=0; i<randomImgNum; i++){
        const pic=document.createElement("img")
        pic.src=`https://picsum.photos/300?random=${i}`
        picsContainerEl.appendChild(pic)
    }
})

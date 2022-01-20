const toggleButn=document.querySelector(".toggle")
const toggleBar=document.querySelector(".bar")
const toggleTimes=document.querySelector(".times")

const containerLink=document.querySelector(".container-link")
const navigationLink=document.querySelector(".navigation-link")

function toggleIcons(){
    const containerlinkHeight=containerLink.getBoundingClientRect().height
    const navigationlinkHeight=navigationLink.getBoundingClientRect().height
    if(containerlinkHeight===0){
        containerLink.style.height=`${navigationlinkHeight}px`
        toggleBar.style.display="none"
        toggleTimes.style.display="block"
    }
    else if(containerlinkHeight===navigationlinkHeight){
        containerLink.style.height=0
        toggleBar.style.display="block"
        toggleTimes.style.display="none"
    }
}
toggleButn.addEventListener("click",toggleIcons)
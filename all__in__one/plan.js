document.getElementById("dropdown__img").addEventListener("mouseenter",() => {

    document.getElementById("img__card").style.visibility = "visible";

})


document.getElementById("dropdown__img").addEventListener("mouseleave", () =>{
    document.getElementById("img__card").style.visibility = "hidden";
    
})


document.getElementById("popup").addEventListener("click",() => {

    document.getElementById("hidebox").style.display = "block";

})


document.getElementById("input1").addEventListener("click",() => {

    document.getElementById("annual").style.display = "block";
    document.getElementById("monthly").style.display = "none";

})


document.getElementById("input2").addEventListener("click",() => {

    document.getElementById("monthly").style.display = "block";
    document.getElementById("annual").style.display = "none";

})
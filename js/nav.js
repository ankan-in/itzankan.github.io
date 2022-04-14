var ham = document.querySelector(".hamburger")
ham.onclick = exp;
const searchB = document.querySelector(".searchB")
function exp() {
    // const bar1 = document.querySelector(".bar1")
    // const bar2 = document.querySelector(".bar2")
    // const bar3 = document.querySelector(".bar3")
    // bar2.classList.toggle("ch1")
    // bar1.classList.toggle("ch2")
    // bar3.classList.toggle("ch3")
    // ham.classList.toggle("ch4")
    var nav = document.querySelector(".nav")
    var s1 = document.querySelector(".section1")
    var s2 = document.querySelector(".section2")
    
    var navl = document.querySelector(".navl")
    s1.classList.toggle('svis')
    navl.classList.toggle('sfix')
    s2.classList.toggle('svis')
    s2.classList.toggle('sfex')


    if (nav.innerHTML.includes("ul")) {
        nav.classList.toggle('navexpand') 
    }else {

    
    setTimeout(() => {
        nav.classList.toggle('navexpand') 
     }, 30);
 
    }
     
    searchB.classList.toggle("fixSB")
    
}
searchB.onclick = search;
    function search() {
        var sI = document.querySelector(".search").value;
        window.open(`../${sI}`)
    }

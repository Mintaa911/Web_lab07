const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const deg = 6;

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
        let day = new Date();
        let hh = day.getHours()*30;
        let mn = day.getMinutes()*deg;
        let sc = day.getSeconds()*deg;
    
        hr.style.transform =`rotateZ(${(hh) + (mn/12)}deg)`;
        min.style.transform =`rotateZ(${mn}deg)`;
        sec.style.transform =`rotateZ(${sc}deg)`;
    })
})


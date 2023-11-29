function scrollBelow1() {
    window.scrollTo(0,0);
}
function scrollBelow2() {
    window.scrollTo(0,300);
}
function scrollBelow3() {
    window.scrollTo(0,500);
}
function scrollBelow4() {
    window.scrollTo(0,1550);
}
function al()
{
    alert("Your form is submitted successfully!");
}
var intro=document.getElementById('intro');
intro.addEventListener("load",()=>{
    intro.style.transform="translate(35vw,0vw)";
    intro.style.transition="transform 3s";
})
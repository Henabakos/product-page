// const changeBg = (value) =>{
//     var b =a.backgroundColor;
//     document.getElementById("bg-item").style.backgroundColor = b;
//     document.getElementById("summer").style.color = b;
//     a.style.border = "2px solid black";
// }

var red = document.getElementById('redd')
var blue = document.getElementById('blue')
var or = document.getElementById('or')
var gray = document.getElementById('gray')


function change(colorid){

var temp = document.getElementById(colorid);
var temp2 = getComputedStyle(temp);
var temp3 = temp2.backgroundColor;

red.style.border = 'none';
blue.style.border = 'none';
or.style.border = 'none';
gray.style.border = 'none';
temp.style.border = "2px solid black";

const img_ = document.getElementById("change-img");
const a = temp.children[0];

img_.src =a.src;
console.log(a)

const pages =document.querySelectorAll(".pages");
pages.forEach(page => {
    page.style.color = temp3;
  });


document.getElementById("bg-item").style.backgroundColor = temp3;
document.getElementById("summer").style.color = temp3;
}
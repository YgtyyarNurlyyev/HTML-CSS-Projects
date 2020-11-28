const slideshow = document.querySelectorAll(".centeranimation .animations");
const nextDelay = 3500;
let currentCounter = 0;

slideshow[currentCounter].style.display = "block";
slideshow[currentCounter].style.opacity = 1;

setInterval(nextSlide , nextDelay);

function nextSlide(){
    slideshow[currentCounter].style.opacity = 0;
    setTimeout(function(){
        slideshow[currentCounter].style.display = "none";
        currentCounter = (currentCounter + 1) % slideshow.length;
        slideshow[currentCounter].style.display = "block";
        slideshow[currentCounter].style.opacity = 1;
    } ,2900)   
}

let startbutton = document.getElementById("startbutton");
let cbutton = document.getElementById("continuebutton");
let imgindex = 0 ;
boddy1 = document.getElementById("body1");
boddy2 = document.getElementById("body2");
boddy3 = document.getElementById("body3");
let surat = document.querySelectorAll("#imgg")
startbutton.addEventListener("click",boody2);
cbutton.addEventListener("click",boody3)

function boody2(){
    boddy1.style.display = "none";
    boddy2.style.display = "block";
}

function boody3(){
    boddy2.style.display = "none";
    boddy3.style.display = "block";
    var imageurl = "url(../img/img" + imgindex + ".jpg)";
    for (var i = 1; i < 9; i++) {
        surat[i].style.backgroundImage = imageurl;
      }
}

let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");

img1.addEventListener("click", pickimage1);
img2.addEventListener("click", pickimage2);
img3.addEventListener("click", pickimage3);

function pickimage1() {
    img2.style.border = "none";
    img3.style.border = "none";
    img2.style.boxShadow = "none";  
    img3.style.boxShadow = "none";
    img1.style.border = "10px solid white";
    img1.style.boxShadow = "5px 5px 5px 5px grey";
    cbutton.style.display = "inline-block";
    imgindex = 1;
}

function pickimage2() {
    img1.style.boxShadow = "none";  
    img3.style.boxShadow = "none";
    img1.style.border = "none";
    img3.style.border = "none"; 
    img2.style.border = "10px solid white";
    img2.style.boxShadow = "5px 5px 5px 5px grey";
    cbutton.style.display = "inline-block";
    imgindex = 2;
}

function pickimage3() {
    img1.style.boxShadow = "none";  
    img2.style.boxShadow = "none";
    img1.style.border = "none";
    img2.style.border = "none";  
    img3.style.border = "10px solid white";
    img3.style.boxShadow = "5px 5px 5px 5px grey";
    cbutton.style.display = "inline-block";
    imgindex = 3;
}


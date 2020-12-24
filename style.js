/* COPYRIGTH © 2020 Hendra Maulidan */

let teksHead = document.getElementById("teks");
let h1 = document.querySelector("nav ul li h1");
let introduce = document.querySelector("div.paragraf p.introduce");
let navbar = document.querySelector("nav");
let i = 0;
let txt = introduce.innerText;
let speed = 50;
introduce.innerHTML = "";
typeWriter();

function scroll() {
  if (document.body.scrollTop > 300) {
    navbar.style.backgroundColor = "rgba(3, 129, 5, 0.71)";
    h1.style.backgroundColor = "#FFF";
    navbar.style.position = "fixed";
    navbar.style.top = 0;
    navbar.style.zIndex = 99990;

  }else if (document.body.scrollTop < 300) {
    navbar.style.transition = 0.5;
    navbar.style.backgroundColor = "";
    h1.style.backgroundColor = "";
    navbar.style.position = "";
    // navbar.style.top = 0;
    
  }{

  }
}
function typeWriter() {
  if (i < txt.length) {
   introduce.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




setInterval(function() {
  let waktu = new Date();
  h1.innerHTML =
   "&nbsp;&nbsp;"+ waktu.getHours() + " : " + waktu.getMinutes() + " : " + waktu.getSeconds()+"&nbsp;&nbsp;";
}, 1000);

setInterval(function() {
  if (teksHead.innerHTML == "Join Us To Find <b> Another Stuff</b>") {
    teksHead.innerHTML = "Follow Us For The<b> Best Experience</b>";
    teksHead.style.width = "auto";
  } else {
    teksHead.innerHTML = "Join Us To Find <b> Another Stuff</b>";
    
  }
}, 2000);

/* COPYRIGTH © 2020 Hendra Maulidan */

let teksHead = document.getElementById("teks");
let h1 = document.querySelector("nav ul li h1");
let introduce = document.querySelector("div.paragraf p.introduce");

let i = 0;
let txt = introduce.innerText;
let speed = 50;
introduce.innerHTML = "";
typeWriter();


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
    waktu.getHours() + " : " + waktu.getMinutes() + " : " + waktu.getSeconds();
}, 1000);

setInterval(function() {
  if (teksHead.innerHTML == "Join Us To Find <b> Another Stuff</b>") {
    teksHead.innerHTML = "Follow Us For The<b> Best Experience</b>";
    
  } else {
    teksHead.innerHTML = "Join Us To Find <b> Another Stuff</b>";
    
  }
}, 2000);



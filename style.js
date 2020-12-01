let h1 = document.querySelector("nav ul li h1");

setInterval(function() {
  let waktu = new Date();
  h1.innerHTML =
    waktu.getHours() + " : " + waktu.getMinutes() + " : " + waktu.getSeconds();
}, 1000);

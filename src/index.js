import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const body = document.querySelector("body");
body.classList.add("loading");

window.addEventListener("load", (event) => {
  body.classList.remove("loading");
  console.log("page is fully loaded");
  alert("selam aysin!");
});

const menuItems = document.querySelectorAll(".nav-link");
menuItems.forEach((item) => {
  item.addEventListener("focus", (event) => {
    event.target.style.background = "red";
    event.target.style.fontsize = "2rem";
  });
  item.addEventListener("blur", (event) => {
    event.target.style.background = "none";
    event.target.style.fontsize = "1.6 rem";
  });
});

function zoom(event, e1Param) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scaale), 4);
  e1Param.style.transform = `scale(${scale})`;
}

let imagesNodeList = document.querySelectorAll("img");
imagesNodeList.forEach((imdE1) => {
  imdE1.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.1)";
    imdE1.addEventListener("wheel", (event) => {
      zoom(event, imgE1);
    });
  });
  imgE1.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1)";
    imgE1.removeEventListener("wheel", (event) => zoom(event, imdE1));
  });
});

addEventListener("resize", (event) => {
  console.log(window.innerHeight, window.innerWidth);
});
const theInput = document.createElement("input");
theInput.setAttribute("type", "text");
theInput.addEventListener("select", (event) => {
  console.log(event.target.value);
});
const intro = document.querySelector(".intro");
intro.appendChild(theInput);

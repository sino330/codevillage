const pushBtn = document.getElementById("pushBtn");
const imgSection = document.getElementById("viewImg");
const skipBtn=document.getElementById('skipBtn');
const seasonNum=document.getElementById('seasonNum');

const data = [
  { img: "./img/slide1.png", text: "spring" },
  { img: "./img/slide2.png", text: "summer" },
  { img: "./img/slide3.png", text: "autumn" },
  { img: "./img/slide4.png", text: "winter" },
];

let imgNum = 0;

pushBtn.textContent = data[imgNum].text;
imgSection.setAttribute("src", data[imgNum].img);

pushBtn.addEventListener("click", function () {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  imgSection.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
});

skipBtn.addEventListener('click',function(){
    imgSection.setAttribute('src',data[seasonNum.value].img);
});
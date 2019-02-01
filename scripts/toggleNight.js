var body = document.body;
var nightBtn = document.querySelector(".nightBtn");
var dayBtn = document.querySelector(".dayBtn");
var headerImage = document.querySelector(".headerImage");
var imgTok = document.querySelector(".imgTok");
var imgAms = document.querySelector(".imgAms");
var imgZg = document.querySelector(".imgZg");
var imgStc = document.querySelector(".imgStc");

nightBtn.addEventListener("click", function(){
    event.preventDefault();
    body.classList.add("night");
    headerImage.src = "images/headerImageNight.jpg";
    imgTok.src = "images/night/tokyoNight.jpg";
    imgAms.src = "images/night/amsterdamNight.jpg";
    imgZg.src = "images/night/zagrebNight.jpg";
    imgStc.src = "images/night/stockholmNight.jpg";
});

dayBtn.addEventListener("click", function(){
    event.preventDefault();
    body.classList.remove("night");
    headerImage.src = "images/headerImage.jpg";
    imgTok.src = "images/day/tokyoday1.jpg";
    imgAms.src = "images/day/amsterdamday1.jpg";
    imgZg.src = "images/day/zagrebday1.jpg";
    imgStc.src = "images/day/stockholmday2.jpg";
});

  
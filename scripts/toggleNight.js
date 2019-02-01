var body = document.body;
var nightBtn = document.getElementsByClassName("nightBtn")[0];
var dayBtn = document.getElementsByClassName("dayBtn")[0];
var headerImage = document.getElementsByClassName("headerImage")[0];
var imgTok = document.getElementsByClassName("imgTok")[0];
var imgAms = document.getElementsByClassName("imgAms")[0];
var imgZg = document.getElementsByClassName("imgZg")[0];
var imgStc = document.getElementsByClassName("imgStc")[0];

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

  
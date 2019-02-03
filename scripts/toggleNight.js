var body = document.body;
var nightBtn = document.querySelector(".nightBtn");
var dayBtn = document.querySelector(".dayBtn");
var headerImage = document.querySelector(".headerImage");
var headerImageNight = document.querySelector(".headerImageNight");
var imgTok = document.querySelector(".imgTok");
var imgTokNight = document.querySelector(".imgTokNight");
var imgAms = document.querySelector(".imgAms");
var imgAmsNight = document.querySelector(".imgAmsNight");
var imgZg = document.querySelector(".imgZg");
var imgZgNight = document.querySelector(".imgZgNight");
var imgStc = document.querySelector(".imgStc");
var imgStcNight = document.querySelector(".imgStcNight");


nightBtn.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("night");
    headerImage.classList.remove("opaque");
    headerImage.classList.add("transparent");
    headerImageNight.classList.remove("transparent");
    headerImageNight.classList.add("opaque");
    imgTok.classList.remove("opaque");
    imgTok.classList.add("transparent");
    imgTokNight.classList.remove("transparent");
    imgTokNight.classList.add("opaque");
    imgAms.classList.remove("opaque");
    imgAms.classList.add("transparent");
    imgAmsNight.classList.remove("transparent");
    imgAmsNight.classList.add("opaque");
    imgZg.classList.remove("opaque");
    imgZg.classList.add("transparent");
    imgZgNight.classList.remove("transparent");
    imgZgNight.classList.add("opaque");
    imgStc.classList.remove("opaque");
    imgStc.classList.add("transparent");
    imgStcNight.classList.remove("transparent");
    imgStcNight.classList.add("opaque");
});

dayBtn.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.remove("night");
    headerImage.classList.remove("transparent");
    headerImage.classList.add("opaque");
    headerImageNight.classList.remove("opaque");
    headerImageNight.classList.add("transparent");
    imgTok.classList.remove("transparent");
    imgTok.classList.add("opaque");
    imgTokNight.classList.remove("opaque");
    imgTokNight.classList.add("transparent");
    imgAms.classList.remove("transparent");
    imgAms.classList.add("opaque");
    imgAmsNight.classList.remove("opaque");
    imgAmsNight.classList.add("transparent");
    imgZg.classList.remove("transparent");
    imgZg.classList.add("opaque");
    imgZgNight.classList.remove("opaque");
    imgZgNight.classList.add("transparent");
    imgStc.classList.remove("transparent");
    imgStc.classList.add("opaque");
    imgStcNight.classList.remove("opaque");
    imgStcNight.classList.add("transparent");
});

  
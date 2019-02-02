var body = document.body;
var nightBtn = document.querySelector(".nightBtn");
var dayBtn = document.querySelector(".dayBtn");
var headerImage = document.querySelector(".headerImage");
var headerImageNight = document.querySelector(".headerImageNight");

nightBtn.addEventListener("click", function(){
    event.preventDefault();
    body.classList.add("night");
    headerImage.classList.remove("opaque");
    headerImage.classList.add("transparent");
    headerImageNight.classList.remove("transparent");
    headerImage.classList.add("opaque");
});

dayBtn.addEventListener("click", function(){
    event.preventDefault();
    body.classList.remove("night");
    headerImage.classList.remove("transparent");
    headerImage.classList.add("opaque");
    headerImageNight.classList.remove("opaque");
    headerImageNight.classList.add("transparent");
});

var body = document.body;
var nightBtn = document.getElementsByClassName("nightBtn")[0];
var dayBtn = document.getElementsByClassName("dayBtn")[0];
var headerImage = document.getElementsByClassName("headerImage")[0];


nightBtn.addEventListener("click", function(){
    event.preventDefault();
    body.classList.add("night");
    headerImage.src = "images/headerImageNight.jpg";
});

dayBtn.addEventListener("click", function(){
    event.preventDefault();
    body.classList.remove("night");
    headerImage.src = "images/headerImage.jpg";
});

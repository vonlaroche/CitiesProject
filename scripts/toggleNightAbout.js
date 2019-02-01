var body = document.body;
var nightBtn = document.querySelector(".nightBtn");
var dayBtn = document.querySelector(".dayBtn");
var headerImage = document.querySelector(".headerImage");

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

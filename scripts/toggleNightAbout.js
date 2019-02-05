var body = document.body;
var nightBtn = document.querySelector(".nightBtn");
var dayBtn = document.querySelector(".dayBtn");
var headerImage = document.querySelector(".headerImage");
var headerImageNight = document.querySelector(".headerImageNight");

nightBtn.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("night");
});

dayBtn.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.remove("night");
});

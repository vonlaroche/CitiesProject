var body = document.body;
var nightBtn = document.querySelector(".nightBtn");
var dayBtn = document.querySelector(".dayBtn");

nightBtn.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("night");
});

dayBtn.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.remove("night");
});

  
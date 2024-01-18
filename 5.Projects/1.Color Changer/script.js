const BtnContainer = document.querySelectorAll(".button");
const Body = document.querySelector(".container");

// console.log(BtnContainer);

BtnContainer.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.id == "red") {
      Body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "green") {
      Body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "white") {
      Body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "blue") {
      Body.style.backgroundColor = e.target.id;
    }
  });
});

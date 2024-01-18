const Form = document.querySelector("form");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  const guide = document.querySelector(".guide");

  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `${bmi}`;

    if (bmi < 18.6) {
      guide.innerHTML = "Your are in Under Weight";
    } else if (bmi < 24.9) {
      guide.innerHTML = "Your are in Normal Range";
    } else {
      guide.innerHTML = "Your are in OverWeight";
    }
  }
});

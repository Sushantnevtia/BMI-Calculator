// funciton create for calculate the BMI
calculateBMI = () => {
  // get height and weight input values
  const height = document.getElementById("heightInput").value;
  const weight = document.getElementById("weightInput").value;

  // validate input
  if (height === "" || weight === "") {
    alert("Please enter both height and weight values");
    return;
  }

  // calculate BMI
  let bmi = weight / (height / 100) ** 2;
  let result = "Your BMI is " + bmi.toFixed(2);

  let category = "";

  // determine BMI category
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result += "<br> Category: " + category;

  // display result
  document.getElementById("result").innerHTML = result;
};

const getData = () => {
  try {
    let data = localStorage.getItem("data");
    if (data) {
      let dataObj = JSON.parse(data);
      document.getElementById("bmiText").innerText = dataObj.BMI;
      document.getElementById("categoryText").innerText = dataObj.Category;
    } else {
      document.getElementById("bmiText").innerText = "BMI";
      document.getElementById("categoryText").innerText = "Category";
    }
  } catch (error) {
    console.log(error);
  }
};
const onAddBtnclick = () => {
  try {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    height = height / 100;
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);
    let Category;
    if (BMI < 18.5) {
      Category = "Underweight";
    } else if (BMI < 25) {
      Category = "Normal";
    } else if (BMI < 30) {
      Category = "Overweight";
    } else {
      Category = "Obese";
    }
    let obj = {
      weight,
      height,
      BMI,
      Category,
    };
    let jsonObj = JSON.stringify(obj);
    localStorage.setItem("data", jsonObj);
    alert("Successfully saved");
    getData();
  } catch (error) {
    console.log(error);
    alert("Failed to store");
  }
};
const onDeleteBtnclick = () => {
  try {
    localStorage.removeItem("data");
    document.getElementById("bmiText").innerText = "BMI";
    document.getElementById("categoryText").innerText = "Category";

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    alert("Successfully cleared");
    getData();
  } catch (error) {
    console.log(error);
    alert("Deletion failed");
  }
};
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const rollnum = document.querySelector("#rollnum");
const course = document.querySelector("#course");
const dept = document.querySelector("#department");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.clear();
  checkInputs();
});

function checkInputs() {
  const inputValue = {
    name: "",
    rollnum: "",
    course: "",
    dept: "",
  };
  const nameValue = nameInput.value.trim();
  const rollnumValue = rollnum.value.trim();
  const courseValue = course.value.trim();
  const deptValue = dept.value.trim();

  nameInput.value = "";
  rollnum.value = "";
  course.value = "";
  dept.value = "";

  if (nameValue === "") {
    console.log("Name cannot be blank");
  } else {
    inputValue.name = nameValue;
  }

  if (rollnumValue === "") {
    console.log("Roll Number cannot be blank");
  } else {
    inputValue.rollnum = rollnumValue;
  }

  if (courseValue === "") {
    console.log("Course cannot be blank");
  } else {
    inputValue.course = courseValue;
  }

  if (deptValue === "") {
    console.log("Department cannot be blank");
  } else {
    inputValue.dept = deptValue;
  }
  console.log(inputValue);
  localStorage.setItem(rollnumValue, JSON.stringify(inputValue));
}

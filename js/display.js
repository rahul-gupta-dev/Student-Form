const display = document.querySelector("#display");
const displayForm = document.querySelector("#displayForm");
const previewRollnum = document.querySelector("#previewRollnum");

displayForm.addEventListener("submit", (e) => {
  e.preventDefault();
  

  const rollnum = previewRollnum.value.trim();
  const data = localStorage.getItem(rollnum);
  console.log(JSON.parse(data));

  if (data === null) {
    display.innerHTML = `
        <h1>Student Not Found</h1>
        `;
  } else {
    display.innerHTML = `
        <div class="data">
            <h1>Student Details</h1>
            <p>Name: ${JSON.parse(data).name}</p>
            <p>Roll Number: ${JSON.parse(data).rollnum}</p>
            <p>Course: ${JSON.parse(data).course}</p>
            <p>Department: ${JSON.parse(data).dept}</p>
        </div>
        `;
  }
});
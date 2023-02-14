const input = document.querySelector(".input");

const button = document.querySelector(".button");
function handleSubmit() {
  if (input.value == "") {
    alert("Fill it");
  } else {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML += `
  <div class="task">
        <p>
            ${input.value}
        </p>
        <input class="checkbox" type="checkbox" name="" id="" />
      </div>
  `;
    input.value = "";

    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (event) => {
        event.target.parentNode.classList.toggle("finished");
      });
    });
  }
}
button.addEventListener("click", handleSubmit);
input.addEventListener("keypress", (event) => {
  if (event.code == "Enter") {
    handleSubmit();
  }
});

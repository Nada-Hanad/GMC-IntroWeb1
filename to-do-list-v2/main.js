var input = document.querySelector(".text");
var button = document.querySelector(".button");
var tasksContainer = document.querySelector(".tasks-container");
function handleSubmit() {
  tasksContainer.innerHTML += `
  <div class="task">
  <p>${input.value} </p>
  <input class="checkbox" type="checkbox" />
      </div>`;
  let checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.target.parentNode.classList.toggle("active");
    });
  });
}
button.addEventListener("click", handleSubmit);
input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    handleSubmit();
  }
});

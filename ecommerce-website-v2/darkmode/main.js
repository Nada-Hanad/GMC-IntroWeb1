var btn = document.querySelector(".change-theme");
btn.addEventListener("click", () => {
  console.log("dd");
  if (!document.body.classList.contains("light")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
});

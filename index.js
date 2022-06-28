document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded");
  updateText()
});

function updateText() {
  let p = document.querySelector('p')
  p.textContent = 'This is really cool!'
  console.log(p)
}


const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
const btn = document.querySelector("#btn")
const h2 = document.querySelector("h2")


console.log(h2)
btn.addEventListener("click", randomize)
function randomize() {
  let rn = Math.floor(Math.random() * colors.length)
  let rFromArray = colors[rn]
  h2.className = rFromArray
  h2.innerHTML = rFromArray.replace(/^./, rFromArray[0].toUpperCase())
}

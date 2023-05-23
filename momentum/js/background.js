const images = [
	"0.JPG",
	"1.JPG"
]

let indexOfImages = Math.floor(Math.random() * images.length)
const chosenImage = images[indexOfImages]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)
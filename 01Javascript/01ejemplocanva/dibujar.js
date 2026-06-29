let canvas = document.getElementById("areadibujo")

let ctx = canvas.getContext("2d")


function dibujarRectangulo() {
    ctx.fillStyle = "red"
    // posicion x, posicion y, base, altura
    // ctx.fillRect(400, 200, 50, 10)
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2)

    ctx.fillStyle = "green"
    ctx.fillRect(50,50,200, 50)

    ctx.fillStyle = "yellow"
    ctx.fillRect(canvas.width-50,canvas.height-50,100, 150)
    ctx.fillRect(canvas.width-100,canvas.height-100,100,100)
}

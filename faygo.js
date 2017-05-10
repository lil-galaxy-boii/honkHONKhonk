var namespace = "http://www.w3.org/2000/svg"

var Gamzee = makeImage ("https://vignette4.wikia.nocookie.net/mspaintadventures/images/4/4c/Gamzee_Makara_Sane.png/revision/latest?cb=20111215084942", 145, 40, 50, 50)
var Equius = makeImage("https://vignette2.wikia.nocookie.net/mspaintadventures/images/b/b3/Equius_Zahhak.png/revision/latest?cb=20100825021207", 290, 40, 40, 40)
var Nepeta = makeImage("https://vignette4.wikia.nocookie.net/mspaintadventures/images/3/37/Nepeta_Leijon.png/revision/latest?cb=20121218182441", 260, 10, 40, 40)
var Tavros = makeImage ("http://vignette1.wikia.nocookie.net/mspaintadventures/images/e/ee/Tavros.png/revision/latest?cb=20100825020349", 90, 100, 50, 50)
var Vriska = makeImage ("https://vignette2.wikia.nocookie.net/mspaintadventures/images/2/26/Vriska%2C_God_Tier%2C_Hood_Down.png/revision/latest?cb=20130301113332", 30, 100, 50, 50)
var Karkat = makeImage ("https://vignette3.wikia.nocookie.net/mspaintadventures/images/1/17/Karkat_Vantas.png/revision/latest?cb=20111216151555", 30, 50, 50, 50)

var score = 0
var scoreText = makeText(score, 10, 20, 20,"putafonthere", "white")

function sober() {
move(Equius, 1.5, 0)
move(Nepeta, 1.5, 0)
move(Tavros, 1.5, 0)
move(Vriska, 1.5, 0)
move(Karkat, 1.5, 0)

var EZx = getX(Equius)
var NLx = getX(Nepeta)
var TNx = getX(Tavros)
var VSx = getX(Vriska)
var GMx = getX(Gamzee)
var KVx = getX(Karkat)

if (EZx > 300) {
  setX(Equius, -5)
}
 if (NLx > 300) {
   setX(Nepeta, -10)
 }
  if (TNx > 300) {
    setX(Tavros, 0)
  }
    if (VSx > 300) {
      setX(Vriska, 0)
}

if (collides(Gamzee, Equius)) {
  alert(score)
  score = 0
  scoreText.innerHTML = score
  location.reload(true)
  setX (EZx, 29)
  setX (NLx, 260)
  setX (TNx, 90)
  setX (VSx, 30)
  setX (GMx, 145)
  setX (KVx, 30)
}
if (collides(Gamzee, Nepeta)) {
  alert(score)
  score = 0
  scoreText.innerHTML = score
  location.reload(true)
  setX (EZx, 29)
  setX (NLx, 260)
  setX (TNx, 90)
  setX (VSx, 30)
  setX (GMx, 145)
  setX (KVx, 30)
}
if (collides(Gamzee, Vriska)) {
  alert(score)
  score = 0
  scoreText.innerHTML = score
  location.reload(true)
  setX (EZx, 29)
  setX (NLx, 260)
  setX (TNx, 90)
  setX (VSx, 30)
  setX (GMx, 145)
  setX (KVx, 30)
}
if (collides(Gamzee, Tavros)) {
  alert("You saved Tavros!")
  score = +1
  location.reload(true)
  setX (EZx, 29)
  setX (NLx, 260)
  setX (TNx, 90)
  setX (VSx, 30)
  setX (GMx, 145)
  setX (KVx, 30)
}
if (collides(Gamzee, Karkat)) {
alert ("*pap*")
  alert(score)
  score = 0
  scoreText.innerHTML = score
  location.reload(true)
  setX (EZx, 29)
  setX (NLx, 260)
  setX (TNx, 90)
  setX (VSx, 30)
  setX (GMx, 145)
  setX (KVx, 30)
}
  requestAnimationFrame(sober)
}
  addEventListener('keydown', moveGamzee)
function moveGamzee(event) {
  if (event.key == "ArrowDown"){
    move(Gamzee, 0, 10)
  } else if (event.key=="ArrowUp") {
    move(Gamzee, 0, -10)
}
}



















// Don't edit below here
function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  }
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  }
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    var newx = x + dx
    shape.setAttribute("x", newx)
    console.log("Set x to "  + newx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(rect1, rect2) {
  var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width"))/2
  var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height"))/2
  return (centerX > getX(rect2) &&
          centerX < getX(rect2) + parseFloat(rect2.getAttribute("width")) &&
         centerY > getY(rect2) &&
         centerY < getY(rect2) + parseFloat(rect2.getAttribute("height")))
}

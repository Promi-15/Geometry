function calculateTriangleArea(){
   const baseInput = document.getElementById('tri-base');
   const baseText = baseInput.value;
   const base = parseFloat(baseText);
   console.log(base);

const heightInput = document.getElementById('tri-height');
const heightText = heightInput.value;
const height = parseFloat(heightText);
console.log(height);

const area = 0.5 * base * height
console.log("area is",area);
const Triangle_area = document.getElementById("Tarea")
Triangle_area.innerText = area;


}

function calculateRectangleArea(){
    const widthInput = document.getElementById("rectangle-width" )
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width);

    const lengthInput = document.getElementById("rectangle-length" )
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    console.log(length);

const recArea = width * length
console.log("Rectangle area",recArea);

    const areaRectangle = document.getElementById("Rarea")
    areaRectangle.innerText=recArea;

}

function calculateParallelogramArea(){
    const pbaseInput = document.getElementById("parallelogram-base")
    const pbaseText = pbaseInput.value;
    const pbase = parseFloat(pbaseText);


const phightInput = document.getElementById("parallelogram-hight")
const phightText = phightInput.value;
const phight = parseFloat(phightText);

const parea = pbase * phight 
console.log(parea);

const pArea = document.getElementById("Parea")
pArea.innerText = parea;



}

function calculateRhombusArea(){

    const rombusD1Input = document.getElementById("rombus-diagonal1")
    const d1Text = rombusD1Input.value
    const d1 = parseFloat(d1Text)
    
    const rombusD2Input = document.getElementById("rombus-diagonal2")
    const d2Text = rombusD2Input.value;
    const d2 = parseFloat(d2Text)

    const RombusArea = 0.5 * d1 * d2
    console.log(RombusArea);

    const RArea = document.getElementById("Rec-area")
    RArea.innerText = RombusArea;

}

function calculatePentagonArea(){
    const perimeterInput = document.getElementById("pentagon-perimeter")
    const perimeterText = perimeterInput.value
    const perimeter = parseFloat(perimeterText)

const pentagonBaseInput = document.getElementById(id="pentagon-base")
const PentbaseText = pentagonBaseInput.value
const pentagonBase = parseFloat(PentbaseText)

const PentagonArea = 0.5 * perimeter * pentagonBase
console.log(PentagonArea);

const PentaArea = document.getElementById("Pen-area")
PentaArea.innerText = PentagonArea ;




}
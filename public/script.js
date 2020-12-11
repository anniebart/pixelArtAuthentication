


const grid = document.querySelector('.grid')
const colorboard = document.querySelector('.color-board')
let inputs = []
const clearButton = document.querySelector('.clear')
const select = document.querySelector('select')



clearButton.addEventListener('click', ()=>{
    inputs = [];
    cells.forEach(cell =>{
        cell.style.backgroundColor = ""
    })
})

//create a grid of 16 squares across + 16 squares down
function createGrid(){
for (let i = 0; i < 16; i++){
    let row = document.createElement('div')
    grid.appendChild(row)
   row.classList = "gridRow"
   
   for (let j = 0; j < 16; j++){
    let square = document.createElement('div')
    row.appendChild(square)
   square.classList = "square"
   let input = document.createElement('input')
   
   square.appendChild(input)
   
   square.value = i + "_"+ j;   
}}}

createGrid();

const cells = document.querySelectorAll(".square")

cells.forEach(cell =>{
   
    cell.addEventListener('click', ()=>{

        if(inputs.length >= 0 && inputs.length <25){
            if(cell.style.backgroundColor == ""){
                
        cell.style.backgroundColor = select.value
            select.backgroundColor = select.value
            
            }
        
        let input = cell.value
       
        if (inputs.indexOf(input) === -1){
            inputs.push(input)
        }
    }
    })
})
const signUp = document.querySelector('.signup')
const signUpButton = document.getElementById("signupButton")
signUpButton.addEventListener('click', ()=>{
    signUp.value = inputs.join("")
    console.log(inputs.join(""))
})








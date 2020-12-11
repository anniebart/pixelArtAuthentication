

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(2)
}

function draw() {
   
    background(255)
    for (let i=0; i < window.innerWidth; i+=20){
       for (let j=0; j< window.innerHeight; j+=20){
          
           
    
           const colors = ["#F46060", "#F49E4E", "#F4E860", "#5EF3B7", "#5D83F4", "#CD60F4", "#ffffff"]
           let random = Math.floor(Math.random()*colors.length)
           console.log(colors[random])
            fill(colors[random])
            
           const item = rect(i, j, 20, 20)

       }
    }



  }





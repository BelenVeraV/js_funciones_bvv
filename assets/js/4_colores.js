//Cambio de colores a negro//
const box1 = document.getElementById("box1")
    box1.addEventListener("click", function(){
    box1.style.backgroundColor = 'black'
});

const box2 = document.getElementById("box2")
    box2.addEventListener("click", function(){
    box2.style.backgroundColor = 'black'
});

const box3 = document.getElementById("box3")
    box3.addEventListener("click", function(){
    box3.style.backgroundColor = 'black'
});

const box4 = document.getElementById("box4")
    box4.addEventListener("click", function(){
    box4.style.backgroundColor = 'black'
});

//Cambio de colores teclas//
var coloresBox1 = '';
var coloresBox2 = '';

document.addEventListener('keydown', function(event){

    if (event.key === 'a' || event.key === 'A')
        coloresBox1 = 'pink'
        
    if (event.key === 's' || event.key === 'S')
        coloresBox1 = 'orange'

    if (event.key === 'd' || event.key === 'D')
        coloresBox1 = 'lightblue'


    if (event.key === 'q' || event.key === 'Q')
        coloresBox2 = 'purple'

    if (event.key === 'w' || event.key === 'W')
        coloresBox2 = 'grey'

    if (event.key === 'e' || event.key === 'E')
        coloresBox2 = 'brown'


    key.style.backgroundColor = coloresBox1
    key2.style.backgroundColor = coloresBox2

});

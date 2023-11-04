//Codigo base (ejemplo)//
function pintar(){
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);


//Funcion anonima//
const ele2 = document.getElementById("ele2")    
ele2.addEventListener("click",function(){
    ele2.style.backgroundColor = 'yellow'
});

function pintarColores(color){
    cambiarColores.style.backgroundColor = color;
}

const cambiarColores = document.getElementById("cambiarColores")
cambiarColores.addEventListener("click", function(){
        pintarColores('yellow')
        }
)

pintarColores('green')

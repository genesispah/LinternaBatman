let estadoLinterna = "apagado";

/*Sonidos*/ 
let sonidoBatman = document.querySelector("#bati_encendido");
let sonidoBoton = document.querySelector("#bati_click");

/*divs*/ 
let batman  = document.querySelector("#batman");
let boton = document.querySelector("#bati_boton");

boton.addEventListener("click", ()=>{
    controlarBatman()
})

/**Condicionales */
function controlarBatman() {
    if(estadoLinterna == "apagado"){
        estadoLinterna = "encendido";
        sonidoLinterna()
        //sonido
        batman.classList.add("batman_activo")
    
    } else {
    
        estadoLinterna == "apagado";
        sonidoLinterna()
        batman.classList.remove("batman_activo");
    } 
}

function sonidoLinterna() {
    if(sonidoBatman.paused){
        sonidoBoton.play()
        sonidoBatman.play()
    } else{
        sonidoBoton.play()
        sonidoBatman.pause()
        sonidoBatman.currentTime=0; /** se reinicia a cero el sonido*/
        
    }
}



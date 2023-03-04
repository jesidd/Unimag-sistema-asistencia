function mostrar(objeto){
    document.querySelector(objeto).style.display="show";
    document.querySelector(objeto).style.display="initial"
}

function ocultar(objeto){
    document.querySelector(objeto).style.display="none";
}

var cont = 0;

function ejecutar(evento){

    if(cont == 0){
        mostrar("#info");
        cont = 1;
    }else{
        ocultar("#info");
        cont = 0;
    }

    
}
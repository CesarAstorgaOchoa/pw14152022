function quitarSITEC(){
    let quitar = confirm("Seguro de quitar SITEC?")
    if(quitar == true){
        alert("Se fue SITEC")
        let arti = document.getElementById("sitec")
        arti.innerHTML = "Chale"
        console.log("Esto no se ve en la pagina, pero Chale")
    }else{
        alert("No se fue SITEC")
        let arti = document.getElementById("sitec")
        arti.innerHTML = ""
    }
}

function darClic(){
    alert("Di clic");
}



function setup() {
    canvas = createCanvas(500, 500)
    background("lightgreen")
}
var reconocerVoz = window.webkitSpeechRecognition
reconocimiento = new reconocerVoz()
reconocimiento.lang = "es-MX"
function iniciar() {
    reconocimiento.start();
}

reconocimiento.onresult = respuesta

function respuesta(resultados) {
    console.log(resultados)
    comando = resultados.results[0][0].transcript
    document.getElementById("resultado").innerHTML = comando
}
var comando = ""
function draw(){
    x = Math.round(Math.random() * 500);
    y = Math.round(Math.random()* 500);
    R = Math.round(Math.random()* 255);
    B = Math.round(Math.random()* 255)
    G = Math.round(Math.random()* 255)
    fill("rgb("+R+","+G+","+B+")")
    
    switch(comando){
        case"cuadrado":
        square(x,y,20);
        
        break
        case "círculo":
            circle(x,y,20)
            comando =""
        break;
    }
}

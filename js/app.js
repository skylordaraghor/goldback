'use strict'

function modificacionpagina(){

    let dato= document.getElementById("selector_principal").value;

    switch(dato){
        case 'consulta':
            document.getElementById("contratar").style.display="none";
            document.getElementById("izq-contratar").style.display="none";
            document.getElementById("der-contratar").style.display="none";
            document.getElementById("asidepreguntas").style.display="flex";
            document.getElementById("preguntas").style.display="flex";
            document.getElementById("contacto").style.display="none";
            document.getElementById("mapa").style.display="none";           
            break;
        case 'contratar':
            document.getElementById("contratar").style.display="flex";
            document.getElementById("izq-contratar").style.display="flex";
            document.getElementById("der-contratar").style.display="flex";
            document.getElementById("asidepreguntas").style.display="none";
            document.getElementById("preguntas").style.display="none";
            document.getElementById("contacto").style.display="none";
            document.getElementById("mapa").style.display="none";
            break;
        case 'contacto':
            document.getElementById("contratar").style.display="none";
            document.getElementById("izq-contratar").style.display="none";
            document.getElementById("der-contratar").style.display="none";
            document.getElementById("asidepreguntas").style.display="none";
            document.getElementById("preguntas").style.display="none";
            document.getElementById("contacto").style.display="flex";
            document.getElementById("mapa").style.display="initial";
            break;
        default:
            window.alert("no deberia estar aqui");
      }
}
function modificacionsuscripcion(){

    let dato= document.querySelector('input[name="categoria"]:checked').value;

    switch(dato){
        case "P":
                document.getElementById("izq-contratar").style.color="white";
                document.getElementById("der-contratar").style.color="black";

                document.getElementById("izq-contratar").style.borderColor="white";
                document.getElementById("der-contratar").style.borderColor="black";
                document.getElementById("der-contratar").style.boxShadow="5px 5px 5px lightgrey";
                document.getElementById("izq-contratar").style.boxShadow="none";

                break;
        case "F":
                document.getElementById("izq-contratar").style.color="black";
                document.getElementById("der-contratar").style.color="white";

                document.getElementById("der-contratar").style.borderColor="white";
                document.getElementById("izq-contratar").style.borderColor="black";
                document.getElementById("izq-contratar").style.boxShadow="-5px 5px 5px lightgrey";
                document.getElementById("der-contratar").style.boxShadow="none";

                break;
            
        default:
    }
}
const e = new Event("change");
const element = document.querySelector('#selector_principal');
element.dispatchEvent(e);

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
            document.getElementById("botones").style.display="flex";
            document.getElementById("submit-error-div").style.display="flex";
            break;
        case 'contratar':
            document.getElementById("contratar").style.display="flex";
            document.getElementById("izq-contratar").style.display="flex";
            document.getElementById("der-contratar").style.display="flex";
            document.getElementById("asidepreguntas").style.display="none";
            document.getElementById("preguntas").style.display="none";
            document.getElementById("contacto").style.display="none";
            document.getElementById("botones").style.display="flex";
            document.getElementById("submit-error-div").style.display="initial";
            break;
        case 'contacto':
            document.getElementById("contratar").style.display="none";
            document.getElementById("izq-contratar").style.display="none";
            document.getElementById("der-contratar").style.display="none";
            document.getElementById("asidepreguntas").style.display="none";
            document.getElementById("preguntas").style.display="none";
            document.getElementById("contacto").style.display="flex";
            document.getElementById("botones").style.display="none";
            document.getElementById("submit-error-div").style.display="none";

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
function intento(dato){
    
    switch (dato){
        case "vip":
            window.location.replace(window.location.href.substring(0,window.location.href.length-13) + '\contact.html');
            window.alert("vip");
            document.getElementById("selector_principal").value="contratar";
            break;
        case "free":
            window.location.replace(window.location.href.substring(0,window.location.href.length-13) + '\contact.html');
            window.alert("free");
            break;
        default:
            window.alert("no deberia estar aqui");
    }
}
function manual_set(){
    const e = new Event("change");
    const element = document.querySelector('#selector_principal');
    element.dispatchEvent(e);    
}
function url_check(){
    const urlParams = new URLSearchParams(window.location.search);
    const quieregratis = urlParams.get('suscripcion-free');
    const quierepago = urlParams.get('suscripcion-vip');
    
    
    if (quieregratis=='SUSCRIBIRSE'){
        
        document.getElementById('selector_principal').value = 'contratar';
        manual_set();
    
        document.getElementById("radio-free").checked = true;
        modificacionsuscripcion();
    
    }
    else if (quierepago=='SUSCRIBIRSE'){
        
        document.getElementById('selector_principal').value = 'contratar';
        manual_set();
    
        document.getElementById("radio-vip").checked = true;
        modificacionsuscripcion();
    }    
}
function validarnombre(form){
    let nombreError=document.getElementById('nombre-error-'+form);
    let name = document.getElementById("nombre-"+form).value;
    if (name.length==0){
        nombreError.innerHTML="El nombre es requerido";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s*$/)){
        nombreError.innerHTML="Por Favor ingrese un nombre valido";
        return false;
    }
    nombreError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validarapellido(form){
    let apellidoError=document.getElementById('apellido-error-'+form);
    let apellido = document.getElementById("apellido-"+form).value;
    if (apellido.length==0){
        apellidoError.innerHTML="El apellido es requerido";
        return false;
    }
    if(!apellido.match(/^[A-Za-z]*\s*$/)){
        apellidoError.innerHTML="Por Favor ingrese un apellido valido";
        return false;
    }
    apellidoError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validartelefono(){
    let telefonoError=document.getElementById('telefono-error');
    let telefono = document.getElementById("telefono").value;
    if(!telefono.match(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/)){
        telefonoError.innerHTML="El telefono no es correcto";
        return false;
    }
    telefonoError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validaremail(form){
    let emailError=document.getElementById('email-error-'+form);
    let email = document.getElementById("email-"+form).value;
    if (email.length==0){
        emailError.innerHTML="El email es requerido";
        return false;
    }
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.innerHTML="Por Favor ingrese un email valido";
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validarconsulta(){
    let consultaError=document.getElementById('consulta-error');
    let consulta = document.getElementById('consulta-box').value;
    let minimos= 20;
    if(consulta.length < minimos){
        
        consultaError.innerHTML="El mensaje es muy corto";
        return false;
    }
    consultaError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;  
}
function revisar(){
        let dondeestoy = document.getElementById('selector_principal').value
        if (dondeestoy=='contratar')
        {
            if(!validarnombre(dondeestoy) || !validarapellido(dondeestoy) || !validaremail(dondeestoy) ){
               document.getElementById('nose').innerHTML="Verifique el formulario para enviarlo";
                 return false;    
             }    
        }
        if (dondeestoy=='consultar')
        { 
            if(!validarnombre(dondeestoy) || !validarapellido(dondeestoy) || !validaremail(dondeestoy)|| !validarconsulta(dondeestoy) ){
                document.getElementById('nose').innerHTML="Verifique el formulario para enviarlo";
                return false;    
            }    
        }
        window.location.replace(window.location.href.substring(0,window.location.href.length-13) + '/index.html');
        return true;

}

manual_set();
url_check();





const myForm = document.getElementById("form");
let msg = document.getElementById("msg");
const precio1 = 0.85;
const precio2 = 2.00;
const precio3 = 3.00;
const precio4 = 4.00;
const precio5 = 5.00;
const iva = 0.13;

function clean(){
    let cntText = document.getElementById("text-container");
    let contenedorInformacion = document.getElementById("info");
    cntText.textContent = "";
    msg.textContent = "";
    contenedorInformacion.textContent = "";
}

function formOpc1(){
    let cantidadP1 = document.getElementById("cantidad-formOpc1");
    let nombreP1 = document.getElementById("nombre-formOpc1");
    let correoP1 = document.getElementById("correo-formOpc1");
    cantidad1 = cantidadP1.value;
    let resultado = cantidad1 * precio1;
     let subtotal = iva * resultado;
    resultado = resultado + subtotal;
    let informacion = document.getElementById("precio1");
    informacion.textContent = "Tus datos, querido usuario: ";
    let precioF1 = document.getElementById("rResultado");
    let nombreF1 = document.getElementById("rNombre");
    let correoF1 = document.getElementById("rCorreo");
    let nombreValor = nombreP1.value;
    let correoValor = correoP1.value; 
    let nota = document.getElementById("nota");
     nombreF1.textContent = "Tu nombre: " + nombreValor;
     correoF1.textContent = "Tu correo Electrónico: " + correoValor;
    precioF1.textContent = "El precio de tu cotización es de: $" + resultado.toFixed(2);
    nota.textContent = "Nota: En la cotización calculada va incluido el monto del IVA, lo cual es el 13%";
    
}
function formOpc2(){
    let cantidadP2 = document.getElementById("cantidad-formOpc2");
    let nombreP2 = document.getElementById("nombre-formOpc2");
    let correoP2 = document.getElementById("correo-formOpc2");
    cantidad2 = cantidadP2.value;
    let resultado2 = cantidad2 * precio2;
    let subtotal2 = iva * resultado2;
    resultado2 = resultado2 + subtotal2;
    let informacion = document.getElementById("precio2");
    informacion.textContent = "Tus datos, querido usuario: ";
    let precioF2 = document.getElementById("rResultado2");
    let nombreF2 = document.getElementById("rNombre2");
    let correoF2 = document.getElementById("rCorreo2");
    let nombreValor = nombreP2.value;
    let correoValor = correoP2.value; 
    let nota = document.getElementById("nota");
    nombreF2.textContent = "Tu nombre: " + nombreValor;
    correoF2.textContent = "Tu correo Electrónico: " + correoValor;
    precioF2.textContent = "El precio de tu cotización es de: $" + resultado2.toFixed(2);
    nota.textContent = "Nota: En la cotización calculada va incluido el monto del IVA, lo cual es el 13%";
}
function formOpc3(){
    let cantidadP3 = document.getElementById("cantidad-formOpc3");
    let nombreP3 = document.getElementById("nombre-formOpc3");
    let correoP3 = document.getElementById("correo-formOpc3");
    cantidad3 = cantidadP3.value;
    let resultado3 = cantidad3 * precio3;
    let subtotal3 = iva * resultado3;
    resultado3 = resultado3 + subtotal3;
    let informacion = document.getElementById("precio3");
    informacion.textContent = "Tus datos, querido usuario: ";
    let precioF3 = document.getElementById("rResultado3");
    let nombreF3 = document.getElementById("rNombre3");
    let correoF3 = document.getElementById("rCorreo3");
    let nombreValor = nombreP3.value;
    let correoValor = correoP3.value; 
    let nota = document.getElementById("nota");
    nombreF3.textContent = "Tu nombre: " + nombreValor;
    correoF3.textContent = "Tu correo Electrónico: " + correoValor;
    precioF3.textContent = "El precio de tu cotización es de: $" + resultado3.toFixed(2);
    nota.textContent = "Nota: En la cotización calculada va incluido el monto del IVA, lo cual es el 13%";
}
function formOpc4(){
    let cantidadP4 = document.getElementById("cantidad-formOpc4");
    let nombreP4 = document.getElementById("nombre-formOpc4");
    let correoP4 = document.getElementById("correo-formOpc4");
    cantidad4 = cantidadP4.value;
    let resultado4 = cantidad4 * precio4;
    let subtotal4 = iva * resultado4;
    resultado4 = resultado4 + subtotal4;
    let informacion = document.getElementById("precio4");
    informacion.textContent = "Tus datos, querido usuario: ";
    let precioF4 = document.getElementById("rResultado4");
    let nombreF4 = document.getElementById("rNombre4");
    let correoF4 = document.getElementById("rCorreo4");
    let nombreValor = nombreP4.value;
    let correoValor = correoP4.value; 
    let nota = document.getElementById("nota");
    nombreF4.textContent = "Tu nombre: " + nombreValor;
    correoF4.textContent = "Tu correo Electrónico: " + correoValor;
    precioF4.textContent = "El precio de tu cotización es de: $" + resultado4.toFixed(2);
    nota.textContent = "Nota: En la cotización calculada va incluido el monto del IVA, lo cual es el 13%";
}
function formOpc5(){
    let cantidadP5 = document.getElementById("cantidad-formOpc5");
    let nombreP5 = document.getElementById("nombre-formOpc5");
    let correoP5 = document.getElementById("correo-formOpc5");
    cantidad5 = cantidadP5.value;
    let resultado5 = cantidad5 * precio5;
    let subtotal5 = iva * resultado5;
    resultado5 = resultado5 + subtotal5;
    let informacion = document.getElementById("precio5");
    informacion.textContent = "Tus datos, querido usuario: ";
    let precioF5 = document.getElementById("rResultado5");
    let nombreF5 = document.getElementById("rNombre5");
    let correoF5 = document.getElementById("rCorreo5");
    let nombreValor = nombreP5.value;
    let correoValor = correoP5.value;
    let nota = document.getElementById("nota"); 
    nombreF5.textContent = "Tu nombre: " + nombreValor;
    correoF5.textContent = "Tu correo Electrónico: " + correoValor;
    precioF5.textContent = "El precio de tu cotización es de: $" + resultado5.toFixed(2);
    nota.textContent = "Nota: En la cotización calculada va incluido el monto del IVA, lo cual es el 13%";
}


function validacion(){
    var radioB1 = document.getElementById('opt1');
    var radioB2 = document.getElementById('opt2');
    var radioB3 = document.getElementById('opt3');
    var radioB4 = document.getElementById('opt4');
    var radioB5 = document.getElementById('opt5');

    if(radioB1.checked == true){
        msg.textContent = "Has escogido la opción 1 ";
        let cntText = document.getElementById("text-container");
        cntText.innerHTML = "";
        cntText.insertAdjacentHTML('afterbegin', '<h2>Opción 1:</h2>');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Descripción</h3>');
        cntText.insertAdjacentHTML('beforeend','<ul id="descrip-elements"><li>Pupusa individual --- $0.85 c/u </li><li>Salsa y curtido </li></ul>')
        cntText.insertAdjacentHTML('beforeend', '<img id="image" src="../img/combo1.jpg">');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Cotizar:</h3>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="nombre-formOpc1" placeholder="Nombre" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="email" id="correo-formOpc1" placeholder="Correo Electronico" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="cantidad-formOpc1" placeholder="Cantidad de producto" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="submit" id="submit-formOpc1" value="Ingresar" class="boton2" onclick="formOpc1()">');
        cntText.insertAdjacentHTML('afterend', '<div id="info"><h1 id="precio1"></h1><h2 id="datosUsuario"></h2><p id="rNombre"></p><br><p id="rCorreo"></p><br><p id="rResultado"></p><br><p id="nota"></p></div>');
}   
    else if(radioB2.checked == true){
        msg.textContent = "Has escogido la opción 2 ";
        let cntText = document.getElementById("text-container");
        cntText.innerHTML = "";
        cntText.insertAdjacentHTML('afterbegin', '<h2>Opción 2:</h2>');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Descripción</h3>');
        cntText.insertAdjacentHTML('beforeend','<ul id="descrip-elements"><li>Combo de 2 pupusas --- $2.00 c/u </li><li>Salsa y curtido </li><li>Café incluido</li></ul>')
        cntText.insertAdjacentHTML('beforeend', '<img id="image" src="../img/combo2.jpg">');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Cotizar:</h3>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="nombre-formOpc2" placeholder="Nombre" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="email" id="correo-formOpc2" placeholder="Correo Electronico" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="cantidad-formOpc2" placeholder="Cantidad de producto" required>');
     
        cntText.insertAdjacentHTML('beforeend', '<input type="submit" id="submit-formOpc2" value="Ingresar" class="boton2"  onclick="formOpc2()">');
        cntText.insertAdjacentHTML('afterend', '<div id="info"><h1 id="precio2"></h1><h2 id="datosUsuario"></h2><p id="rNombre2"></p><br><p id="rCorreo2"></p><br><p id="rResultado2"></p><br><p id="nota"></p></div>');
    }  
    else if(radioB3.checked == true){
        msg.textContent = "Has escogido la opción 3 ";
        let cntText = document.getElementById("text-container");
        cntText.innerHTML = "";
        cntText.insertAdjacentHTML('afterbegin', '<h2>Opción 3:</h2>');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Descripción</h3>');
        cntText.insertAdjacentHTML('beforeend','<ul id="descrip-elements"><li>Combo de 3 pupusas --- $3.00 c/u </li><li>Salsa y curtido </li><li>Café incluido</li></ul>')
        cntText.insertAdjacentHTML('beforeend', '<img id="image" src="../img/combo3.jpg">');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Cotizar:</h3>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="nombre-formOpc3" placeholder="Nombre" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="email" id="correo-formOpc3" placeholder="Correo Electronico" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="cantidad-formOpc3" placeholder="Cantidad de producto" required>');
      
        cntText.insertAdjacentHTML('beforeend', '<input type="submit" id="submit-formOpc2" value="Ingresar" class="boton2"  onclick="formOpc3()">');
        cntText.insertAdjacentHTML('afterend', '<div id="info"><h1 id="precio3"></h1><h2 id="datosUsuario"></h2><p id="rNombre3"></p><br><p id="rCorreo3"></p><br><p id="rResultado3"></p><br><p id="nota"></p></div>');
    }
    else if(radioB4.checked == true){
        msg.textContent = "Has escogido la opción 4 ";
        let cntText = document.getElementById("text-container");
        cntText.innerHTML = "";
        cntText.insertAdjacentHTML('afterbegin', '<h2>Opción 4:</h2>');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Descripción</h3>');
        cntText.insertAdjacentHTML('beforeend','<ul id="descrip-elements"><li>Combo de 4 pupusas --- $4.00 c/u </li><li>Salsa y curtido </li><li>Café incluido</li></ul>')
        cntText.insertAdjacentHTML('beforeend', '<img id="image" src="../img/combo4.jpg">');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Cotizar:</h3>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="nombre-formOpc4" placeholder="Nombre" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="email" id="correo-formOpc4" placeholder="Correo Electronico" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="cantidad-formOpc4" placeholder="Cantidad de producto" required>');
      
        cntText.insertAdjacentHTML('beforeend', '<input type="submit" id="submit-formOpc2" value="Ingresar" class="boton2"  onclick="formOpc4()">');
        cntText.insertAdjacentHTML('afterend', '<div id="info"><h1 id="precio4"></h1><h2 id="datosUsuario"></h2><p id="rNombre4"></p><br><p id="rCorreo4"></p><br><p id="rResultado4"></p><br><p id="nota"></p></div>');
    }
    else if(radioB5.checked == true){
        msg.textContent = "Has escogido la opción 5 ";
        let cntText = document.getElementById("text-container");
        cntText.innerHTML = "";
        cntText.insertAdjacentHTML('afterbegin', '<h2>Opción 5:</h2>');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Descripción</h3>');
        cntText.insertAdjacentHTML('beforeend','<ul id="descrip-elements"><li>Combo de 5 pupusas --- $5.00 c/u </li><li>Salsa y curtido</li><li>Café incluido</li></ul>')
        cntText.insertAdjacentHTML('beforeend', '<img id="image" src="../img/combo5.jpg">');
        cntText.insertAdjacentHTML('beforeend', '<h3 id="description">Cotizar:</h3>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="nombre-formOpc5" placeholder="Nombre" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="email" id="correo-formOpc5" placeholder="Correo Electronico" required>');
        cntText.insertAdjacentHTML('beforeend', '<input type="text" id="cantidad-formOpc5" placeholder="Cantidad de producto" required>');
        
        cntText.insertAdjacentHTML('beforeend', '<input type="submit" id="submit-formOpc2" value="Ingresar" class="boton2"  onclick="formOpc5()">');
        cntText.insertAdjacentHTML('afterend', '<div id="info"><h1 id="precio5"></h1><h2 id="datosUsuario"></h2><p id="rNombre5"></p><br><p id="rCorreo5"></p><br><p id="rResultado5"></p><br><p id="nota"></p></div>');
    }

    else
        msg.textContent = "Escoge una opción ";
    }

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
/*if(radioB.getAttribute("value") == "number1"){
msg.textContent = "Has seleccionado el boton 1";
return true;
}else if(radioB.getAttribute("value") == "number2"){
msg.textContent = "Has seleccionado el boton 2";
return true;
}*/

//lo que le pasamos como parametro es el boton de submit, y le agregamos como parametro un evento que será el handler el cual se anticipara al navegador a mandarte a otra pagina actuando como si hubiera un action, como php




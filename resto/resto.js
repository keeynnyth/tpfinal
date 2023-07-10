
window.onload= iniciar;

function iniciar(){
   
   let btnCalcular= document.getElementById("btnCalcular");
   btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){

let txtNombre = document.getElementById("txtNombre")
let nombre = txtNombre.value;

let txtPeso= document.getElementById("txtPeso")
let peso = txtPeso.value;
//alert(peso);

let txtAltura= document.getElementById("txtAltura")
let altura = txtAltura.value;
//alert(altura);

let imc = peso / (altura*altura);
 //alert(nombre +' '+ 'Su indice de IMC es de: ' + (Math.round(imc)))

resultado = document.getElementById('texto');
resultado.value = nombre+ ' '+' su IMC es de: '+(Math.round(imc));


if (imc < 18.5) {
   alert("IMC bajo segun la OMS");
 }

 if (imc >= 18.5) {
     if (imc <25) {
         alert("IMC recomendado segun la OMS");
     }
 }

 if (imc >= 25) {
   if (imc < 30) {
       alert("IMC considerado como sobrepeso segun la OMS");
   }}

   
 if (imc >= 30) {
   {
       alert ("IMC dentro de los parametro de obesidad segun la OMS");
   }}

}

swal('hola mundo')
const calcIMC = ()=>{
    if (altura.value != '' && peso.value != '')
    {


       const imc = (peso.value / (altura.value * altura.value)).toFixed(2);}




       
       const data = null;

       const xhr = new XMLHttpRequest();
       xhr.withCredentials = true;
       
       xhr.addEventListener('readystatechange', function () {
          if (this.readyState === this.DONE) {
             console.log(this.responseText);
          }
    
          const dato =JSON.parse(this.responseText);
          const HTMLResponse = document.querySelector("#api");
    
          const tpl = data.map((user) => `<li> ${user.Category}</li>`);
    
          HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
       });
       
       xhr.open('GET', 'https://musclewiki.p.rapidapi.com/exercises/20');
       xhr.setRequestHeader('X-RapidAPI-Key', '53dc08a5c0mshddc2f8c9cbc0a1cp1708f2jsn4d77dcc50d4f');
       xhr.setRequestHeader('X-RapidAPI-Host', 'musclewiki.p.rapidapi.com');
       
       xhr.send(data);
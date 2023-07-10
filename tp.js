const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');


function calcularIMC()
   //if (altura.value != '' && peso.value != '')
   {
      const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
      let clasificacion = ' ';

      if(imc<18.5){
         clasificacion = 'IMC Muy bajo segun la OMS';
      } else if (imc < 25) {
         clasificacion = 'IMC recomendado segun la OMS';
      } else if (imc < 30){
         clasificacion = 'IMC consiserado dentro del sobrepeso segun la OMS';
      } else if (imc< 35){
         clasificacion = 'IMC considerado dentro de la obesidad segun la OMS';
      } else if (imc<41){
         clasificacion = 'IMC obesidad grado II segun la OMS';
      }else {
         clasificacion = 'IMC obesidad grado III segun la OMS'
      }
      resultado.innerHTML = `Tu resultado es: ${imc} y es: ${clasificacion}`;

   };


const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
   document.body.classList.toggle('dark');
   switchButton.classList.toggle('active')
 })

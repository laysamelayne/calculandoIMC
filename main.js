const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputAltura = e.target.querySelector('#altura')
    const inputPeso = e.target.querySelector('#peso')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //passando a referencia falsa para isValid
    //se o elemento for difierente de peso/altura que é um numero
    if(!peso){
        addresultado('[ERRO] peso inválido', false)
        return;
    }
    if(!altura){
        addresultado('[ERRO] altura inválida', false)
        return;
    }

    const imc = calcularImc(peso, altura);
    const nivelImc = analiseImc(imc);
    const msg = `seu IMC é ${imc} (${nivelImc})`

    addresultado(msg, true);
});

function calcularImc(peso, altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

//analisa o nivel do seu imc
function analiseImc (imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade 1° grau', 'obesidade 2° grau', 'obesidade 3° grau']

    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc < 18.5) return nivel[0]
    //uma forma não muito recomendada de se declarar varios if de uma vez
}

// cria parágrafos dentro do html
function criaparagrafos (){
    const p = document.createElement('p')
    return p;
}

//função para mostrar o resultado passando pelo parametro 'msg'
function addresultado(msg, isValid){ 
    const res = document.querySelector('#resultado')
    res.innerHTML =``;
   const p = criaparagrafos();

   if (isValid){ //analisa o elemento colocado no input para dar a cor
       p.classList.add('paragrafo-resultado')
   }
   else{
    p.classList.add('bad')
   }

   p.innerHTML = msg;
   res.appendChild(p);
}
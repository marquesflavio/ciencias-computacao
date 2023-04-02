function calculaNumero(){
    numeros = [];
    let num1 = prompt('insira o primeiro número inteiros positivo');
    let num2 = prompt('insira o segundo número inteiro positivo');

    if (num1 <= 0 && num1 <= 0){
        alert('por favor, informe números inteiros positivos.')
    }
    numeros.push(num1, num2)

    let divNumeros = ((Number(numeros[0])+ Number(numeros[1]))/2)
    console.log(`A divisão do Array por 2 é ${divNumeros}`)
    console.log(`Os números deste array são: ${numeros}`)
}
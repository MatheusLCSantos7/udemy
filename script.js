console.log ("ir works")

let a = 4 
let e;
let f = null

const pi = 3.14


console.log(e)

var estaSol = true

if(estaSol)
{
    console.log("vou pra praia")
} else{
    console.log("Vou ficar em casa")
}

let vetor = [10,20,30,40,50]
vetor[2] = 60
console.log(vetor[2])

let vetores = []
for (let i = 0; i<10 ; i++ )
{
    vetores.push(i);
}

console.log(vetores)

let vetorA = [10,20,30,40,50,60,70,80,90]

for (let j = 0; j < vetorA.length; j++)
{
    console.log(vetorA[j])
}

for (let numero of vetorA)
{                          //aqui a variavel numero assume os valores
    console.log(numero)
}
        //aqui ela assume os indices
for (let indice in vetorA)
{
    console.log(vetorA[indice])
}

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

for (let linha of matriz)
{
    for (let elemento of linha){
        console.log(elemento);
    }
}

for (i = 0;i <= 20;  i++ )
{
    console.log(i - 2)
}
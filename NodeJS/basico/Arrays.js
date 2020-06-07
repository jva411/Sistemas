var arr = [1, 7, 5, 2, 12, 18]

console.log(arr)
console.log(arr.find(n => n%2==0)) // Procura o 1º e retorna
console.log(arr.filter(n => n%2==0)) // Procura todos, junta em um novo array e o retorna
console.log(arr.map(n => n + 3)) // Soma 3 a cada elemento do array
console.log(arr.reduce( (num, n) => num += n )) // Retorna a soma de todos os valores do array


let obj = {
    A: 3
}


arr["obj"] = obj    // Pode funcionar como dicionário
arr[obj] = "obj"

console.log(arr["obj"])
console.log(arr[obj])

var animais = [
    {
        Raça: "Cachorro",
        Nome: "Bob"
    },
    {
        Raça: "Gato",
        Nome: "Lili"
    },
    {
        Raça: "Cachorro",
        Nome: "Rabisco"
    },
    {
        Raça: "Perequito",
        Nome: "Pin"
    }
]

console.log(animais.filter( animal => animal.Raça == "Cachorro")) // Vai printar só os cachorros
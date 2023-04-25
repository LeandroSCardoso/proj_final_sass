import "./styles/style.scss"

console.log("Funcionou!")

// Evento
const botaoCadastrar = document.getElementById("botaoCadastrar")
botaoCadastrar.addEventListener("click", executar)

async function executar(){
    // Entradas
    const title =  document.getElementById("title").value
    const description = document.getElementById("description").value

    // Processamento
    const url = "https://target-api-simples.cyclic.app/livros"
    
    const resultadoFetch = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    })

    let classeStatus = "sucesso"
    if(resultadoFetch.status == 400) {
        classeStatus = "erro"
    }

    const response = await resultadoFetch.json()

    // Saida
    const elementoResultado = document.getElementById("saida")
    elementoResultado.style.display = "block"
    elementoResultado.innerText = response
    elementoResultado.className = `status ${classeStatus}`
}
let chave = "6b46ba426bf834bcbe70a4ee3a7fdc5a"


async function buscarCidade() {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=londres&appid=6b46ba426bf834bcbe70a4ee3a7fdc5a").then(resposta => resposta.json())

    // AWAIT = ESPERE 
    // FETCH -> FERRAMENTA DO JAVASCRIPT PARA ACESSAR  SERVIDORES
    // THEN -> ENTÃO
    /// JSON -> JAVASCRIPT OBJECT NOTATION ( O FORMATO QUE O JAVASCRIPT ENTENDE)

    console.log(dados)

}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value


    buscarCidade()

}


const form = document.getElementById("form")
const codigo = document.getElementById("codigo")
const nome = document.getElementById("nome")
const descricao = document.getElementById("descricao")
const precoUnitario = document.getElementById("precoUnitario")
const quantidadeEstoque = document.getElementById("quantidadeEstoque")
const perecivel = document.getElementById("perecivel")
const save = document.getElementById("save")

save.addEventListener('click', postProduct)

async function postProduct(){

    try {

        const response = await fetch(form.action, {
            method: form.method,

            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify({
                codigo: codigo.value,
                nome: nome.value,
                descricao: descricao.value,
                precoUnitario: precoUnitario.value,
                quantidadeEstoque: quantidadeEstoque.value,
                perecivel: perecivel.value
            })
        })
        window.location = "index.html"
        console.log('foi')
        
    }catch(error){
        console.error(error)
    }
}
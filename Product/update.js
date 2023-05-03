const form = document.getElementById("form")
const codigo = document.getElementById("codigo")
const nome = document.getElementById("nome")
const descricao = document.getElementById("descricao")
const precoUnitario = document.getElementById("precoUnitario")
const quantidadeEstoque = document.getElementById("quantidadeEstoque")
const perecivel = document.getElementById("perecivel")

const update = document.getElementById("update")
const backendBaseURL = 'http://localhost:8080/product'
update.addEventListener('click', putProduct)

const params = new URLSearchParams(window.location.search)
const codigoProduto = params.get('codigo')
getProduct(codigoProduto)

async function getProduct(codigoProduto) {
    try {
        const response = await fetch(`${backendBaseURL}/${codigoProduto}`)
        const product = await response.json()
        
        codigo.value = product.codigo
        nome.value = product.nome
        descricao.value = product.descricao
        precoUnitario.value = product.precoUnitario
        quantidadeEstoque.value = product.quantidadeEstoque
        perecivel.value = product.perecivel
        
    } catch(error) {
        console.error(error)
    }
}

async function putProduct() {
    try {
        const response = await fetch(`${backendBaseURL}/${codigoProduto}`, {
            method: 'put',
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
        
    } catch(error) {
        console.error(error)
    }
}
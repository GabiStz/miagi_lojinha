let anuncio_prog = [
    {
        url_img: "./img/bola_copa.webp",
        nome: "Bola da Copa",
        preco: "R$ 86.3",
        titulo_descricao: "Descrição:",
        descricao: "Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        url_img: "./img/carro_hotwheels.jpeg",
        nome: "Carrinho da Hot Wheels",
        preco: "R$ 5.80",
        titulo_descricao: "Descrição:",
        descricao: "Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        url_img: "./img/chinelo.webp",
        nome: "Chinelo",
        preco: " R$ 19.99",
        titulo_descricao: "Descrição:",
        descricao: "Chinelo para se utilizar em qualquer lugar"
    },
    {
        url_img: "./img/escorredor_louca.webp",
        nome: "Escorredor de Louça",
        preco: "R$ 15.20",
        titulo_descricao: "Descrição:",
        descricao: "Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        url_img: "./img/espada_medieval.png",
        nome: "Espada Medieval",
        preco: "R$ 200.18",
        titulo_descricao: "Descrição:",
        descricao: "Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        url_img: "./img/guitarra.webp",
        nome: "Guitarra",
        preco: "R$ 1980.99",
        titulo_descricao: "Descrição:",
        descricao: "Otima para utilizar em bandas de hard rock"
    },
    {
        url_img: "./img/toalha_banho.webp",
        nome: "Toalha de Banho",
        preco: "R$ 9.99",
        titulo_descricao: "Descrição:",
        descricao: "Boa para se secar apos o banho"
    },
    {
        url_img: "./img/vinho.webp",
        nome: "Vinho",
        preco: "R$ 59.90",
        titulo_descricao: "Descrição:",
        descricao: "Vinho que harmoniza muito bem com carnes vermelhas "
    }
]
let elemento_pai = document.getElementById("anuncio");
let tamanho_vetor = anuncio_prog.length;

for (i = 0; i < tamanho_vetor; i++) {
    criando_anuncio = (anuncio_prog[i]);
    console.log = (anuncio_prog[i]);
}


CriandoAnuncio = () => {
    let produtos = document.getElementById('anuncio');
    anuncio_prog.map((gab) => {
        produtos.innerHTML += `
       
       <div class="ITENS_LOJA">
        <img src="`+ gab.url_img + `"height=200px width=200px/>
        <p>`+ gab.nome + `</p>
        <p>preco: R$ `+ gab.preco + `</p >
        <p>descrição:</p>
        <p class="alinhamento_textos">`+ gab.descricao + `</p>
       </div>
       `;
    })
}
CriandoAnuncio();
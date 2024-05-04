const imginput = document.querySelector("#imginput");
const inputdescricao = document.querySelector("#descricao");
const form = document.querySelector("#addlocal");
const locais = document.querySelector(".lista-locais")
const ullista = document.querySelector("#ullista");
const url = "http://localhost:3000/locais"
fetch(url)
    .then(res => res.json())
    .then(dados => {
        dados.forEach(e => {
            let p = document.createElement("p");
            p.innerHTML = e;
            locais.appendChild(p);
        });
    })
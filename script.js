const elementoFormularioCadastro = document.getElementById('formulario')
const elementoSection=document.getElementById("entrada")
const elementoProjetos = document.getElementById('projetos')
const projetosCriados = []

// botao cadastro
elementoFormularioCadastro.addEventListener("submit", (e)=>{
    e.preventDefault()
    const elementoNome= document.getElementById("nomeUsuario").value
    const elementoDataNascimento= document.getElementById("dataNascimento").value
    const elementoConfirmEmail= document.getElementById("email").value
    const elementoEmail= document.getElementById("confirmEmail").value
    const elementoSenha= document.getElementById("senha").value
    const elementoConfirmSenha= document.getElementById("confirmSenha").value
    
    if ((elementoNome&&elementoDataNascimento&&elementoConfirmEmail&&elementoEmail&&elementoSenha&&elementoConfirmSenha)==""){
        alert("[ERRO] cadastro incompleto")
    } else {
        criarPessoa(elementoNome, elementoDataNascimento, elementoConfirmEmail, elementoConfirmSenha, e)

    }
})
//criando cadastro
function criarPessoa(elementoNome, elementoDataNascimento, elementoConfirmEmail, elementoConfirmSenha, e) {
    e.preventDefault()
        const usuario = {
            nome: elementoNome,
            data: elementoDataNascimento,
            email: elementoConfirmEmail,
            senha: elementoConfirmSenha
        }
        localStorage.setItem("usuario", JSON.stringify(usuario))
        entrada()
    
}

//entrada após se cadastrar
 function entrada(){
    if (localStorage.usuario){
        nomeUser = JSON.parse(localStorage.getItem('usuario')).nome
        elementoFormularioCadastro.style.display ="none";
        elementoSection.style.display = "block";
        elementoHeader = document.querySelector('h1')
        elementoHeader.innerText = "Projetos";
        elementoSection.insertAdjacentHTML("afterbegin", `<h2>Bem vinda  <strong>${nomeUser}</strong> </h2>`) 
    }else{
        elementoSection.style.display = "none";
    }
} 
elementoSection.addEventListener =('submit', (e)=>{
    e.preventDefault()
    let nomeDoProjeto = document.querySelector('#nomeProjeto').value
    let valorDoProjeto = document.querySelector('#valorProjeto').value

    if (localStorage.ListaDeProjetos) {
        projetosCriados = JSON.parse(localStorage.getItem('ListaDeProjetos'))
    }
    var projeto = {
        nome:nomeDoProjeto,
        valor: valorDoProjeto
    }
    projetosCriados.push(projeto)
    
    localStorage.setItem('ListaDeProjetos', JSON.stringify(projetosCriados))

    
})
function amostrandoProjetos() {
    if (localStorage.ListaDeProjetos) {
        projetosCriados = JSON.parse(localStorage.getItem('ListaDeProjetos'))
    }

    for (let index = 0; index<projetosCriados.length; index++) {
        elementoProjetos.innerHTML+=`
        <div id="pessoa${index}"> 
        <table class="pessoa">
        
        <tr> 
        <th> ID</th>
        <td>${index}</td> 
        </tr>
        
        <tr>
        <th > Nome</th>
        <td>${projetosCriados[index].nome}</td> 
        </tr>
        
        <tr>
        <th > Valor</th>
        <td>  ${projetosCriados[index].valor}</td> 
        </tr>

        </table>
        <button onclick="editarUser(${index})">editar</button>
        <button onclick="excluirUser(${index})">excluir</button>
        </div>`
    }
}
/* 
        <tr>
        <th > Senha</th>
        <td id="senha"> ${projetosCriados[index].senha}</td>
        </tr>
        */ 

// inicio da aplicação
entrada()
amostrandoProjetos()


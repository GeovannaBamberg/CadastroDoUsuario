formularioHTML()
function formularioHTML() {
    let elementoSection=document.querySelector("form, .formulario")
    elementoSection.innerHTML= `<label>Nome Completo</label>
    <input type="text" name="nomeCompleto" id="nomeUsuario" maxlength="120" minlength="3" required>
    <br>`
    elementoSection.innerHTML+= `<label>Data De Nascimento</label>
    <input type="date" name="dataNascimento" id="dataNascimento" required>
    <br>`
    elementoSection.innerHTML+= `<label>Email</label>
    <input type="email" name="email " id="email" required>
    <br>`
    elementoSection.innerHTML+= `<label>Comprovação de Email</label>
    <input type="email" name="ConfirmEmail " id="ConfirmEmail" required>
    <br>`
    elementoSection.innerHTML+= `<label>Senha</label>
    <input type="password" name="senha" id="senha" required>
    <br>`
    elementoSection.innerHTML+= `<label>Comfirmação de Senha</label>
    <input type="password" name="ConfirmSenha" id="ConfirmSenha" required minlength="10">
    <br>`
    elementoSection.innerHTML+= `
    <button type="submit" onclick="cadastrar()">Cadastrar</button>
    <br>` 
}
function cadastrar(){
   /* const elementoNome= document.getElementById("nomeUsuario").value
    const elementoDataNascimento= document.getElementById("dataNascimento").value
    const elementoConfirmEmail= document.getElementById("email").value
    const elementoEmail= document.getElementById("ConfirmEmail").value
    const elementoSenha= document.getElementById("senha").value
    const elementoConfirmSenha= document.getElementById("ConfirmSenha").value

    if ((elementoNome&&elementoDataNascimento&&elementoConfirmEmail&&elementoEmail&&elementoSenha&&elementoConfirmSenha)=="") {
        alert("[ERRO] cadastro incompleto")
    } else {
        alert("tudo certo")
    }*/
}

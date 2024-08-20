
let mensagemInicial = document.getElementById("mensagem-entrada");

function criptografa_mensagem() {

  if (mensagemInicial.value === "") {//validação inicial
    alert("Digite um Texto para Criptografar ou Descriptografar");
    document.getElementById("mensagem-entrada").style.background = "#ededed";
    mensagemInicial.focus();
    return;
  }
  let mensagem_descodificada = document.getElementById("mensagem-entrada").value.toLowerCase();
  let mensagem_codificada = mensagem_descodificada.replace(/e/g, "enter").replace(/i/g, 'imes').replace(/a/g, "ai")
    .replace(/o/g, 'ober').replace(/u/g, "ufat");

  document.getElementById("mensagem-saida").value = mensagem_codificada;
  //atualizar campos
  document.getElementById("img-saida").style.display = "none";
  document.getElementById("mensagem-entrada").value = "";
  document.getElementById("mensagem-entrada").style.background = "#ffffff";

}

//descriptografar mensagens
function descriptografa_mensagem() {
  if (mensagemInicial.value === "") {//validação inicial
    alert("Digite um Texto para Criptografar ou Descriptografar");
    document.getElementById("mensagem-entrada").style.background = "#ededed";
    mensagemInicial.focus();
    return;
  }
  let mensagem_descodificada = document.getElementById("mensagem-entrada").value;
  let mensagem_codificada = mensagem_descodificada.replace(/enter/g, "e").replace(/imes/g, 'i').replace(/ai/g, "a")
    .replace(/ober/g, 'o').replace(/ufat/g, "u");

  document.getElementById("mensagem-saida").value = mensagem_codificada;

  //atualizar campos
  document.getElementById("btn-copiar").style.visibility = "visible";
  document.getElementById("btn-limpar").style.visibility = "visible";
  document.getElementById("img-saida").style.display = "none";
  document.getElementById("mensagem-entrada").style.background = "#ffffff";
}

//copiar mensagens
function copiar_mensagem() {//validação inicial
  if (document.getElementById("mensagem-saida").value === "") {
    alert("Não há mensagem para copiar");
    return;
  }
  var mensagem_codificada = document.getElementById("mensagem-saida");
  mensagem_codificada.select();
  document.execCommand("copy");
  document.getElementById("mensagem-saida").value = "";
  document.getElementById("mensagem-entrada").value = "";
  mensagemInicial.focus();
}

//limpar mensagens
function limpar_mensagem() {//validações iniciais
  if ((document.getElementById("mensagem-entrada").value === "") && (document.getElementById("mensagem-saida").value === "")) {
    alert("Não há mensagem para Limpar");
    return;
  }
  document.getElementById("mensagem-entrada").value = "";
  document.getElementById("mensagem-saida").value = "";
  document.getElementById("img-saida").style.display = "inline";
}

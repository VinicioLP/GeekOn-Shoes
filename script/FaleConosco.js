let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

const form = document.getElementById("FormContatos");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const novoContato = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      mensagem: document.getElementById("mensagem").value,
    };

    chamados.push(novoContato);
    localStorage.setItem("chamados", JSON.stringify(chamados));

    alert("Enviado com sucesso!");
    form.reset();
  });
}

const listarBtn = document.getElementById("listarChamados");
const tbody = document.querySelector("#tabelaChamados tbody");

if (listarBtn && tbody) {
  listarBtn.addEventListener("click", function () {
    tbody.innerHTML = "";

    const chamadosSalvos = JSON.parse(localStorage.getItem("chamados")) || [];

    chamadosSalvos.forEach((chamado) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${chamado.nome}</td>
        <td>${chamado.email}</td>
        <td>${chamado.mensagem}</td>
      `;
      tbody.appendChild(row);
    });
  });
}

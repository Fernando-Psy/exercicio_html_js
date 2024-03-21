function validarFormulario() {
    var campoA = parseInt(document.getElementById('campo-a').value);
    var campoB = parseInt(document.getElementById('campo-b').value);

    if (campoB > campoA) {
        alert("Campo B é maior que o Campo A");
    } else if
    (campoB == campoA) {
        alert("Campo B e Campo A são iguais");
    } else {
        alert("Campo A é maior que o Campo B")
    }
}
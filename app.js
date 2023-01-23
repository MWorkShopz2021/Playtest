let formulario = document.getElementById('formulario');
let respuesta = document.getElementById('respuesta');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.info("funciona, diste click");
    let datos = new FormData(formulario);
    console.log(datos.get('usuario'), datos.get('pass'));
    fetch('post.php', {
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if (data === "error") {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    llena todos los campos
                </div>
                `;
            } else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `;
            }
        });
});
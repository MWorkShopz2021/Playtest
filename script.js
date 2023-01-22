/* ********** Menu ********** */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  /* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/mike.dj.sanz.2018@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

/* tabla de costumers */
let contenido = document.querySelector('#contenido');
function traer() {
  fetch('tabla.json')
    .then( res => res.json())
    .then( datos => {
      tabla(datos);
    });
  }
  function tabla(datos) {
    contenido.innerHTML ="";
    for (const valor of datos) {
      contenido.innerHTML += `
        <tr>
          <th scope="row">${valor.id + 1}</th>
          <td>${valor.firstName}</td>
          <td>${valor.phoneNumber}</td>
          <td>${valor.payDone
            ?"activo"
            :"inactivo"}</td>
          <td>${valor.cashPay}</td>
          <td>${valor.thePay}</td>
        </tr>
      `;
    }
}
/* tabla de contactos */
let contenido1 = document.querySelector('#contenido1');
function traer1() {
  fetch('./data/Contact.json')
    .then( res => res.json())
    .then( datos => {
      tabla1(datos);
    });
  }
  function tabla1(datos) {
    contenido1.innerHTML ="";
    console.log(datos.contact[0].id);
    /* for (const valor of datos) {
      contenido1.innerHTML += `
        <tr>
          <th scope="row">${valor.id + 1}</th>
          <td>${valor.firstName}</td>
          <td>${valor.phoneNumber}</td>
          <td>${valor.payDone
            ?"activo"
            :"inactivo"}</td>
          <td>${valor.cashPay}</td>
          <td>${valor.thePay}</td>
        </tr>
      `;
    } */
}
/* leer texto TXT */
let contenido2 = document.querySelector('#contenido2');
function traer2() {
  fetch('texto.txt')
    .then( data => data.text())
    .then( data => {
      tabla2(data);
    });
  }
  function tabla2(data) {
    contenido2.innerHTML ="";
    contenido2.innerHTML = `
        <h4>
          <b>${data}</b>
        </h4>
      `;
}
/* avatar de usuarios */
let contenido3 = document.querySelector('#contenido3');
function traer3() {
  fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then( data => {
      tabla3(data);
    });
  }
  function tabla3(data) {
    console.log(data.results[0].email);
    contenido3.innerHTML ="";
    contenido3.innerHTML = `
      <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
      <p>Nombre: ${data.results[0].name.first}</p>
      <p>Apellido: ${data.results[0].name.last}</p>
      `;
}
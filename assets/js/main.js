let imp = document.querySelector("#cards");

fetch("https://digimon-api.vercel.app/api/digimon")
  .then(Response => Response.json())
  .then(datos => {

    recorrerJason(datos);
    
  })
  .catch(error => console.error("error al capturar datos"));


function recorrerJason(datos) {

  datos.forEach(digimon => {
    imp.innerHTML += `
        <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
              
            </div>
          </div>
            `

  });
}

const ingresarDigimon = document.getElementById("ingresarDigimon");
const buscarDigimon = document.getElementById("buscarDigimon");
const mostrarDigimon = document.getElementById("mostrarDigimon");

function mostrarResultados(data) {
  mostrarDigimon.innerHTML = '';

  data.forEach(digimon => {
    const digimonDiv = document.createElement('div');
    digimonDiv.innerHTML = `
      <h3>${digimon.name}</h3>
      <img src="${digimon.img}" alt="${digimon.name}">
      <p>Nivel: ${digimon.level}</p>
      <p>Tipo: ${digimon.type}</p>
    `;
    mostrarDigimon.appendChild(digimonDiv);
  });
}


//buscador
buscarDigimon.addEventListener('click', () => {
  const digimonConsultado = ingresarDigimon.value.trim();

  if (digimonConsultado !== '') {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonConsultado}`)
      .then(response => response.json())
      .then(data => {
        mostrarResultados(data);
        mostrarModal();
      })
      .catch(error => {
        alert("Este Digimon No Existe, Prueba Buscando Otro");
        ingresarDigimon.value = '';
      });
  }
});


function mostrarResultados(data) {
  const resultadoModalBody = document.getElementById('resultadoModalBody');
  resultadoModalBody.innerHTML = '';

  data.forEach(digimon => {
    const digimonDiv = document.createElement('div');
    digimonDiv.innerHTML = `
      <h3>${digimon.name}</h3>
      <img src="${digimon.img}" alt="${digimon.name}">
      <p>Nivel: ${digimon.level}</p>
      <p>Tipo: ${digimon.type}</p>
    `;
    resultadoModalBody.appendChild(digimonDiv);
  });
}

function mostrarModal() {
  const resultadoModal = new bootstrap.Modal(document.getElementById('resultadoModal'));
  resultadoModal.show();
  ingresarDigimon.value = '';
}


//barra
window.addEventListener('scroll', function () {
  let barraNavegacion = document.getElementById('nav');
  let umbralScroll = 100;

  if (window.pageYOffset > umbralScroll) {
    barraNavegacion.classList.add("sticky")
  } else {
    barraNavegacion.classList.remove("sticky")

  };
  
  barraNavegacion.addEventListener("mouseover", () => {
    barraNavegacion.classList.remove("sticky");
  });  
});





//in training
let training = document.getElementById("training")

training.addEventListener("click", () => {
  imp.innerHTML = '';

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(Response => Response.json())
    .then(datos => {

      recorrerJason(datos);

    })
    .catch(error => console.error("error al capturar datos"));


  function recorrerJason(datos) {
    let datosFiltrados = datos.filter(digimon => digimon.level === "In Training");

    if (datosFiltrados.length === 0) {
      imp.innerHTML = "No se encontraron Digimon en entrenamiento.";
      return;
    }

    datosFiltrados.forEach(digimon => {
      imp.innerHTML += `
          <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
        `;
    });
  }
})

// rookie
let rookie = document.getElementById("rookie")

rookie.addEventListener("click", () => {
  imp.innerHTML = '';

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(Response => Response.json())
    .then(datos => {

      recorrerJason(datos);

    })
    .catch(error => console.error("error al capturar datos"));


  function recorrerJason(datos) {
    let datosFiltrados = datos.filter(digimon => digimon.level === "Rookie");

    if (datosFiltrados.length === 0) {
      imp.innerHTML = "No se encontraron Digimon en Rookie.";
      return;
    }

    datosFiltrados.forEach(digimon => {
      imp.innerHTML += `
          <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
        `;
    });
  }
})


//champion
let champion = document.getElementById("champion")

champion.addEventListener("click", () => {
  imp.innerHTML = '';

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(Response => Response.json())
    .then(datos => {

      recorrerJason(datos);

    })
    .catch(error => console.error("error al capturar datos"));


  function recorrerJason(datos) {
    let datosFiltrados = datos.filter(digimon => digimon.level === "Champion");

    if (datosFiltrados.length === 0) {
      imp.innerHTML = "No se encontraron Digimon en Champion.";
      return;
    }

    datosFiltrados.forEach(digimon => {
      imp.innerHTML += `
          <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
        `;
    });
  }
})


//ultimate
let ultimate = document.getElementById("ultimate")

ultimate.addEventListener("click", () => {
  imp.innerHTML = '';

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(Response => Response.json())
    .then(datos => {

      recorrerJason(datos);

    })
    .catch(error => console.error("error al capturar datos"));


  function recorrerJason(datos) {
    let datosFiltrados = datos.filter(digimon => digimon.level === "Ultimate");

    if (datosFiltrados.length === 0) {
      imp.innerHTML = "No se encontraron Digimon en Ultimate.";
      return;
    }

    datosFiltrados.forEach(digimon => {
      imp.innerHTML += `
          <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
        `;
    });
  }
})


//fresh
let fresh = document.getElementById("fresh")

fresh.addEventListener("click", () => {
  imp.innerHTML = '';

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(Response => Response.json())
    .then(datos => {

      recorrerJason(datos);

    })
    .catch(error => console.error("error al capturar datos"));


  function recorrerJason(datos) {
    let datosFiltrados = datos.filter(digimon => digimon.level === "Fresh");

    if (datosFiltrados.length === 0) {
      imp.innerHTML = "No se encontraron Digimon en Fresh.";
      return;
    }

    datosFiltrados.forEach(digimon => {
      imp.innerHTML += `
          <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
        `;
    });
  }
})


//mega
let mega = document.getElementById("mega")

mega.addEventListener("click", () => {
  imp.innerHTML = '';

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(Response => Response.json())
    .then(datos => {

      recorrerJason(datos);

    })
    .catch(error => console.error("error al capturar datos"));


  function recorrerJason(datos) {
    let datosFiltrados = datos.filter(digimon => digimon.level === "Mega");

    if (datosFiltrados.length === 0) {
      imp.innerHTML = "No se encontraron Digimon en Mega.";
      return;
    }

    datosFiltrados.forEach(digimon => {
      imp.innerHTML += `
          <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
        `;
    });
  }
})


//armor
let armor = document.getElementById("armor")

armor.addEventListener("click", () => {
  imp.innerHTML = '';

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(Response => Response.json())
    .then(datos => {

      recorrerJason(datos);

    })
    .catch(error => console.error("error al capturar datos"));


  function recorrerJason(datos) {
    let datosFiltrados = datos.filter(digimon => digimon.level === "Armor");

    if (datosFiltrados.length === 0) {
      imp.innerHTML = "No se encontraron Digimon en Armor.";
      return;
    }

    datosFiltrados.forEach(digimon => {
      imp.innerHTML += `
          <div class="card mt-4 col-4 me-3 border border-dark border border-2 " style="width: 18rem;" id="cards">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
        `;
    });
  }
})





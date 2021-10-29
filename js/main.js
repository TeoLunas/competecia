//Datos formulario

const nombreCompetidor = document.querySelector('#nombre-competidor');
const apellidoCompetidor = document.querySelector('#apellido-competidor');
const correoCompetidor = document.querySelector('#correo-competidor');
const numeroCompetidor = document.querySelector('#numero-competidor');
const categoriaCompetido = null;

const btnBuscar = document.querySelector('#btn-buscar');
const tablaCompetidores = document.querySelector('#competidores');




let listaCompetidores = [];

const paginaCargada = () => {
    btnBuscar.addEventListener('click', registarCompetidor);

    document.addEventListener('DOMContentLoaded', () => {

        listaCompetidores = JSON.parse(localStorage.getItem('DatosCompetidores')) || [];

        crearHtml();

    })
}

const registarCompetidor = () => {
    const competidor =
    {
        id: Date.now(),
        nombre: nombreCompetidor.value,
        apellido: apellidoCompetidor.value,
        correo: correoCompetidor.value,
        nIdentificador: numeroCompetidor.value,
    };

    listaCompetidores.push(competidor)

    guardarEnLocalStorage();
};

const guardarEnLocalStorage = () => {
    localStorage.setItem('DatosCompetidores', JSON.stringify(listaCompetidores))
    console.log('Datos guardados con exito');
};

const obtenerDatrosLocalStorage = () => {
    let info = localStorage.getItem('DatosCompetidores');
    listaCompetidores = (JSON.parse(info))
    console.log(listaCompetidores);
};


const crearHtml = () => {

    if (listaCompetidores.length > 0) {
        listaCompetidores.forEach(e => {
            tablaCompetidores.innerHTML += `
            <tr>
                <th scope="row">${e.id}</th>
                <td>${e.nombre}</td>
                <td>${e.apellido}</td>
                <td>${e.correo}.</td>
                <td>${e.nIdentificador}.</td>
            </tr>`
        })
    }

    obtenerDatrosLocalStorage();
};


//Ejecuta aplicacion
paginaCargada();



const btn = document.querySelector('#reset-app');

const resetApp = () => {
    localStorage.clear();
    console.log('borrado con exito');
}

btn.addEventListener('click', resetApp)

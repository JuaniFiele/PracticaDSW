const readline = require('readline');

let especialidades = [];
let obrasSociales = [];
let tiposdeConsulta = [];
let localidades = [];
let medicos = [];
let pacientes = [];
let consultas = [];
let precios = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const especialidad = {
    Id: 0,
    nombre: '',
    descripcion: '',
};

const obraSocial = {
    Id: 0,
    nombre: '',
    descuento: 0,
};

const tipoConsulta = {
    Id: 0,
    descripcionTCons: '',
    nombre: '',
};

const localidad = {
    codigo_Postal: 0,
    nombre: '',
};

function agregarEspecialidad() {
    rl.question("Ingrese el nombre de la especialidad: ", (nombre) => {
        rl.question("Ingrese la descripción de la especialidad: ", (descripcion) => {
            const nuevaEspecialidad = {
                Id: especialidades.length + 1,
                nombre: nombre,
                descripcion: descripcion
            };
            especialidades.push(nuevaEspecialidad);
            console.log("Especialidad agregada correctamente:", nuevaEspecialidad);
            continuar();
            // Continuar con lo que necesites después de agregar la especialidad
        });
    });
}

// Ejemplo de cómo agregar una nueva especialidad
agregarEspecialidad();

function ingresarDatosMedico() {
    rl.question("Ingrese el nombre del médico: ", (nom_med) => {
        rl.question("Ingrese el apellido del médico: ", (ape_med) => {
            rl.question("Ingrese el DNI del médico: ", (dni_med) => {
                rl.question("Ingrese la matrícula del médico: ", (mat_med) => {
                    console.log("Especialidades cargadas:");
                    especialidades.forEach(especialidad => {
                        console.log(`ID: ${especialidad.Id} - Nombre: ${especialidad.nombre}`);
                    });
                    rl.question("Ingrese el ID de la especialidad del médico: ", (idEspecialidad) => {
                        const especialidadExistente = especialidades.find(especialidad => especialidad.Id === parseInt(idEspecialidad));
                        if (especialidadExistente) {
                            const nuevoMedico = {
                                nombre: nom_med,
                                apellido: ape_med,
                                dni: dni_med,
                                matricula: mat_med,
                                idEspecialidad: parseInt(idEspecialidad)
                            };
                            console.log("Datos del médico registrados:", nuevoMedico);
                            rl.close();
                            // Continuar con lo que necesites después de registrar el médico
                        } else {
                            console.log("El ID de especialidad ingresado no existe. Por favor, ingrese uno válido.");
                            ingresarDatosMedico(); // Solicitar nuevamente los datos del médico
                        }
                    });
                });
            });
        });
    });
}

// Función para continuar con la siguiente acción después de agregar la especialidad
function continuar() {
    // Aquí puedes poner la lógica para el siguiente paso después de agregar la especialidad
    //console.log("Puedes realizar otra acción aquí...");
    // Llamar a ingresarDatosMedico después de agregar la especialidad
    ingresarDatosMedico();
}
const patientName = document.querySelector('#patientName');
const address = document.querySelector('#address');
const phone = document.querySelector('#phone');
const date = document.querySelector('#date');
const hour = document.querySelector('#hour');
const symptom = document.querySelector('#symptom');

// Left container
const form = document.querySelector('#form');

// Right container
const medicalAppointments = document.querySelector('#listAppointments');

class Appointments {
    constructor() {
        this.appointments = [];
    }
}

class UI {
    printAlert(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('styles');
        divMessage.textContent = message;

        if(type === 'error') {
            divMessage.classList.add('alert-error');
        } else {
            divMessage.classList.add('alert-success');
        }

        document.querySelector('.main').insertBefore(divMessage, document.querySelector('.info-medical-appoinment'));

        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }
}

const ui = new UI();
const adminAppointment = new Appointments();

eventListeners();
function eventListeners() {
    patientName.addEventListener('input', dataAppointment);
    address.addEventListener('input', dataAppointment);
    phone.addEventListener('input', dataAppointment);
    date.addEventListener('input', dataAppointment);
    hour.addEventListener('input', dataAppointment);
    symptom.addEventListener('input', dataAppointment);

    form.addEventListener('submit', newAppoinment);
}

const objAppointment = {
    patientName: '',
    address: '',
    phone: '',
    date: '',
    hour: '',
    symptom: '',

};

function dataAppointment(e) {
    objAppointment[e.target.name] = e.target.value;
    console.log(objAppointment);
}

function newAppoinment(e) {
    e.preventDefault();
    const { patientName, address, phone, date, hour, symptom } = objAppointment;
    if(patientName === '' || address === '' | phone === '' | date === '' | hour === '' | symptom === '') {
        ui.printAlert('Todos los campos son obligatorios');
    }
}
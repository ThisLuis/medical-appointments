const patientName = document.querySelector('#patientName');
const address = document.querySelector('#address');
const phone = document.querySelector('#phone');
const date = document.querySelector('#date');
const hour = document.querySelector('#hour');
const symptom = document.querySelector('#symptom');

// Left container
const newAppointment = document.querySelector('#form');

// Right container
const medicalAppointments = document.querySelector('#listAppointments');

eventListeners();
function eventListeners() {
    patientName.addEventListener('input', dataAppointment);
    address.addEventListener('input', dataAppointment);
    phone.addEventListener('input', dataAppointment);
    date.addEventListener('input', dataAppointment);
    hour.addEventListener('input', dataAppointment);
    symptom.addEventListener('input', dataAppointment);
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
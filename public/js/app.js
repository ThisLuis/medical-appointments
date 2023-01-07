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

    addAppointment(appointment) {
        this.appointments = [ ...this.appointments, appointment];
    }

    deleteAppointment(id) {
        this.appointments = this.appointments.filter( appointment => appointment.id !== id);
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

    printAppointment({appointments}) {

        cleanHTML();
        
        appointments.forEach(appointment => {
            const { patientName, address, phone, date, hour, symptom, id } = appointment;
            const divAppointment = document.createElement('div');

            divAppointment.classList.add('styles');
            divAppointment.dataset.id = id;

            const patientNameParagraph = document.createElement('h2');
            patientNameParagraph.classList.add('styles');
            patientNameParagraph.textContent = patientName;

            const addressParagraph = document.createElement('p');
            addressParagraph.classList.add('styles');
            addressParagraph.textContent = address;

            const phoneParagraph = document.createElement('p');
            phoneParagraph.classList.add('styles');
            phoneParagraph.textContent = phone;

            const dateParagraph = document.createElement('p');
            dateParagraph.classList.add('styles');
            dateParagraph.textContent = date;

            const hourParagraph = document.createElement('p');
            hourParagraph.classList.add('styles');
            hourParagraph.textContent = hour;

            const symptomParagraph = document.createElement('p');
            symptomParagraph.classList.add('styles');
            symptomParagraph.textContent = symptom;

            const btnDelete = document.createElement('button');
            btnDelete.classList.add('styles');
            btnDelete.innerHTML = 
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> 
                Delete`;

            btnDelete.onclick = () => deleteAppointment(id);

            divAppointment.appendChild(patientNameParagraph);
            divAppointment.appendChild(addressParagraph);
            divAppointment.appendChild(phoneParagraph);
            divAppointment.appendChild(dateParagraph);
            divAppointment.appendChild(hourParagraph);
            divAppointment.appendChild(symptomParagraph);
            divAppointment.appendChild(btnDelete);

            medicalAppointments.appendChild(divAppointment);
            
        })
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
}

function newAppoinment(e) {
    e.preventDefault();
    const { patientName, address, phone, date, hour, symptom } = objAppointment;
    if(patientName === '' || address === '' | phone === '' | date === '' | hour === '' | symptom === '') {
        ui.printAlert('Todos los campos son obligatorios');
        return;
    }

    objAppointment.id = Date.now();

    adminAppointment.addAppointment({ ...objAppointment });

    form.reset();
    
    restartObj();

    // Function to show html here
    ui.printAppointment(adminAppointment);
    
}

function restartObj() {
    objAppointment.patientName = '';
    objAppointment.address = '';
    objAppointment.phone = '';
    objAppointment.date = '';
    objAppointment.hour = '';
    objAppointment.symptom = '';
}

function cleanHTML() {
    while(medicalAppointments.firstChild) {
        medicalAppointments.removeChild(medicalAppointments.firstChild);
    }
}

function deleteAppointment(id) {
    adminAppointment.deleteAppointment(id);

    ui.printAlert('La cita se elimino correctamente');

    ui.printAppointment(adminAppointment);
}
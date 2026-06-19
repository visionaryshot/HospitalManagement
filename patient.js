class Patient {
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }

  static registeredPatients = [];
  static appointments = [];

  static registerPatient(patient) {
    this.registeredPatients.push(patient);
  }

  static viewAllPatients() {
    return this.registeredPatients;
  }

  static scheduleAppointment(patientId, doctorId) {
    let count = 0;

    for (let counter = 0; counter < this.appointments.length; counter++) {
      if (this.appointments[counter].doctorId === doctorId) {
        count++;
      }
    }

    if (count >= 5) {
      return false;
    }

    this.appointments.push({ patientId: patientId, doctorId: doctorId });
    return true;
  }
}

module.exports = Patient;

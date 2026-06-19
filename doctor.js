class Doctor {
  constructor(name, id, department) {
    this.name = name;
    this.id = id;
    this.department = department;
  }

  static registeredDoctors = [];

  static registerDoctor(doctor) {
    this.registeredDoctors.push(doctor);
  }

  static viewAllDoctors() {
    return this.registeredDoctors;
  }

  static getAvailableDoctors() {
    return this.registeredDoctors;
  }
}

module.exports = Doctor;

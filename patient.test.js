const Patient = require('./patient');

test('Register one patient', () => {
  Patient.registeredPatients = [];
  const p1 = new Patient("John Doe", "P001", 23);
  Patient.registerPatient(p1);

  const all = Patient.viewAllPatients();
  expect(all.length).toBe(1);
  expect(all[0].name).toBe("John Doe");
});

test('Schedule appointment for patient with Dr. Fareed (D001)', () => {
  Patient.registeredPatients = [];
  Patient.appointments = [];

  const p1 = new Patient("Jane Smith", "P002", 30);
  Patient.registerPatient(p1);

  const scheduled = Patient.scheduleAppointment("P002", "D001");
  expect(scheduled).toBe(true);
  expect(Patient.appointments.length).toBe(1);
});

test('Return false when Dr. Pedri (D002) is overbooked', () => {
  Patient.registeredPatients = [];
  Patient.appointments = [];

  for (let count = 1; count <= 5; count++) {
    Patient.appointments.push({ patientId: "P00" + count, doctorId: "D002" });
  }

  const p6 = new Patient("Overbook Patient", "P006", 22);
  Patient.registerPatient(p6);

  const scheduled = Patient.scheduleAppointment("P006", "D002");
  expect(scheduled).toBe(false);
});

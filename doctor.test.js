const Doctor = require('./doctor');

test('Register one doctor', () => {
  Doctor.registeredDoctors = [];
  const doc1 = new Doctor("Dr. Fareed", "D001", "Dentist");
  Doctor.registerDoctor(doc1);
  const all = Doctor.viewAllDoctors();

  expect(all.length).toBe(1);
  expect(all[0].name).toBe("Dr. Fareed");
});

test('Register multiple doctors', () => {
  Doctor.registeredDoctors = [];
  const doc2 = new Doctor("Dr. Pedri", "D002", "Anatomy");
  const doc3 = new Doctor("Dr. Messi", "D003", "Surgeon");

  Doctor.registerDoctor(doc2);
  Doctor.registerDoctor(doc3);

  const all = Doctor.viewAllDoctors();
  expect(all.length).toBe(2);
  expect(all[1].department).toBe("Surgeon");
});

test('Get available doctors', () => {
  Doctor.registeredDoctors = [];
  const doc2 = new Doctor("Dr. Pedri", "D002", "Anatomy");
  const doc3 = new Doctor("Dr. Messi", "D003", "Surgeon");

  Doctor.registerDoctor(doc2);
  Doctor.registerDoctor(doc3);

  const available = Doctor.getAvailableDoctors();
  expect(available.length).toBe(2);
});

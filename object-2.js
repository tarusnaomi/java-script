const hospital = {
  name: "Community Hosptital",
  address: {
    street: "121 Main Street",
    city: "Anytown",
    state: "State",
    zip: "1234",
  },
  departments: [
    {
      name: "Emergency",
      headDoctor: {
        name: "Dr.smith",
        specialty: "Emergency Medicine",
        age: 45,
        isBoardCertified: true,
      },
    },
    {
      name: "Pedeatrics",
      headDoctor: {
        name: "Dr.Johnson",
        specialty: "Pedeatrics",
        age: 55,
        isBoardCertified: true,
      },
    },
  ],
  contactInfo: {
    phone: "555-123-467",
    email: "info@communityhospital.com",
    website: "http://www.communityhospital.com",
  },
};

// console.log(hospital);
//To access the name of the hospital
console.log(hospital.name);
//access the street ofthe hospital
console.log(hospital.address.street);
//access the name of the head of the emergency doctor
console.log(hospital.departments[0].headDoctor.name);
//access the email of the hospital
console.log(hospital.contactInfo.email);
//access the specialty of the doctor of the pediatrics department
console.log(hospital.departments[1].headDoctor.specialty);

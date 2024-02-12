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
        speciaty: "Emergency Medicine",
        age: 45,
        isBoardCertified: true,
      },
    },
    {
      name: "Pedeatrics",
      headDoctor: {
        name: "Dr.Johnson",
        speciaty: "Pedeatrics",
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

console.log(hospital);
//To access the name of the hospital
console.log("Hospital Name:", hospital.name);
//access th street ofthe hospital
//access the name of the head of the emergency doctor
//access the email of the hospital
//access the specialty of the doctor of the pediatrics department


// import React, { useState } from 'react';
// import axios from 'axios';
//  const Patient = () => {
//   const [patientData, setPatientData] = useState({
//     patient: {
//       patient_Name: '',
//       age: 0,
//       gender: '',
//       bloodGroup: '',
//       patient_Address: '',
//       patient_Phone: 0,
//       patient_Email: '',
//       patient_UserName: '',
//       Patient_HashedPassword:'pass'
//     },
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPatientData((prevState) => ({
//       ...prevState,
//       patient: {
//         ...prevState.patient,
//         [name]: value,
//       },
//     }));
//   };

//   const handlePasswordChange = (e) => {
//     setPatientData((prevState) => ({
//       ...prevState,
//       password: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("https://localhost:7205/api/Patient", patientData);
//       console.log(response.data);
//       // Handle successful patient addition
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="patient_Name"
//         value={patientData.patient.patient_Name}
//         onChange={handleInputChange}
//         placeholder="Name"
//       />

//       <input
//         type="number"
//         name="age"
//         value={patientData.patient.age}
//         onChange={handleInputChange}
//         placeholder="Age"
//       />

//       <input
//         type="text"
//         name="gender"
//         value={patientData.patient.gender}
//         onChange={handleInputChange}
//         placeholder="Gender"
//       />

//       <input
//         type="text"
//         name="bloodGroup"
//         value={patientData.patient.bloodGroup}
//         onChange={handleInputChange}
//         placeholder="Blood Group"
//       />

//       <input
//         type="text"
//         name="patient_Address"
//         value={patientData.patient.patient_Address}
//         onChange={handleInputChange}
//         placeholder="Address"
//       />

//       <input
//         type="number"
//         name="patient_Phone"
//         value={patientData.patient.patient_Phone}
//         onChange={handleInputChange}
//         placeholder="Phone"
//       />

//       <input
//         type="email"
//         name="patient_Email"
//         value={patientData.patient.patient_Email}
//         onChange={handleInputChange}
//         placeholder="Email"
//       />

//       <input
//         type="text"
//         name="patient_UserName"
//         value={patientData.patient.patient_UserName}
//         onChange={handleInputChange}
//         placeholder="Username"
//       />

//       <input
//         type="password"
//         name="password"
//         value={patientData.password}
//         onChange={handlePasswordChange}
//         placeholder="Password"
//       />

//       <button type="submit">Add Patient</button>
//     </form>
//   );
// };
// export default Patient;
import React, { useState } from 'react';
import axios from 'axios';
import './Regp.css'; // Import the CSS file for styling

const Regp = () => {
  const [patientData, setPatientData] = useState({
    patient: {
      patient_Name: '',
      age: 0,
      gender: '',
      bloodGroup: '',
      patient_Address: '',
      patient_Phone: 0,
      patient_Email: '',
      patient_UserName: '',
      Patient_HashedPassword: 'pass',
    },
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevState) => ({
      ...prevState,
      patient: {
        ...prevState.patient,
        [name]: value,
      },
    }));
  };

  const handlePasswordChange = (e) => {
    setPatientData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform form validation
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      const response = await axios.post(
        'https://localhost:7205/api/Patient',
        patientData
      );
      console.log(response.data);
      // Handle successful patient addition

      // Reset form data and errors
      setPatientData({
        patient: {
          patient_Name: '',
          age: 0,
          gender: '',
          bloodGroup: '',
          patient_Address: '',
          patient_Phone: 0,
          patient_Email: '',
          patient_UserName: '',
          Patient_HashedPassword: 'pass',
        },
        password: '',
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const validateForm = () => {
    const formErrors = {};

    if (!patientData.patient.patient_Name) {
      formErrors.patient_Name = 'Name is required';
    }

    if (!patientData.patient.age) {
      formErrors.age = 'Age is required';
    }

    if (!patientData.patient.gender) {
      formErrors.gender = 'Gender is required';
    }

    if (!patientData.patient.bloodGroup) {
      formErrors.bloodGroup = 'Blood Group is required';
    }

    if (!patientData.patient.patient_Address) {
      formErrors.patient_Address = 'Address is required';
    }

    if (!patientData.patient.patient_Phone) {
      formErrors.patient_Phone = 'Phone Number is required';
    }

    if (!patientData.patient.patient_Email) {
      formErrors.patient_Email = 'Email is required';
    }

    if (!patientData.patient.patient_UserName) {
      formErrors.patient_UserName = 'Username is required';
    }

    if (!patientData.password) {
      formErrors.password = 'Password is required';
    }

    return formErrors;
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="patient_Name"
        value={patientData.patient.patient_Name}
        onChange={handleInputChange}
        placeholder="Name"
        className={errors.patient_Name ? 'input-error' : ''}
      />
      {errors.patient_Name && (
        <span className="error-message">{errors.patient_Name}</span>
      )}

      <input
        type="number"
        name="age"
        value={patientData.patient.age}
        onChange={handleInputChange}
        placeholder="Age"
        className={errors.age ? 'input-error' : ''}
      />
      {errors.age && <span className="error-message">{errors.age}</span>}

      <input
        type="text"
        name="gender"
        value={patientData.patient.gender}
        onChange={handleInputChange}
        placeholder="Gender"
        className={errors.gender ? 'input-error' : ''}
      />
      {errors.gender && <span className="error-message">{errors.gender}</span>}

      <input
        type="text"
        name="bloodGroup"
        value={patientData.patient.bloodGroup}
        onChange={handleInputChange}
        placeholder="Blood Group"
        className={errors.bloodGroup ? 'input-error' : ''}
      />
      {errors.bloodGroup && (
        <span className="error-message">{errors.bloodGroup}</span>
      )}

      <input
        type="text"
        name="patient_Address"
        value={patientData.patient.patient_Address}
        onChange={handleInputChange}
        placeholder="Address"
        className={errors.patient_Address ? 'input-error' : ''}
      />
      {errors.patient_Address && (
        <span className="error-message">{errors.patient_Address}</span>
      )}

      <input
        type="number"
        name="patient_Phone"
        value={patientData.patient.patient_Phone}
        onChange={handleInputChange}
        placeholder="Phone"
        className={errors.patient_Phone ? 'input-error' : ''}
      />
      {errors.patient_Phone && (
        <span className="error-message">{errors.patient_Phone}</span>
      )}

      <input
        type="email"
        name="patient_Email"
        value={patientData.patient.patient_Email}
        onChange={handleInputChange}
        placeholder="Email"
        className={errors.patient_Email ? 'input-error' : ''}
      />
      {errors.patient_Email && (
        <span className="error-message">{errors.patient_Email}</span>
      )}

      <input
        type="text"
        name="patient_UserName"
        value={patientData.patient.patient_UserName}
        onChange={handleInputChange}
        placeholder="Username"
        className={errors.patient_UserName ? 'input-error' : ''}
      />
      {errors.patient_UserName && (
        <span className="error-message">{errors.patient_UserName}</span>
      )}

      <input
        type="password"
        name="password"
        value={patientData.password}
        onChange={handlePasswordChange}
        placeholder="Password"
        className={errors.password ? 'input-error' : ''}
      />
      {errors.password && (
        <span className="error-message">{errors.password}</span>
      )}

      <button type="submit">Add Patient</button>
      
    </form>
    
  );
};

export default Regp;

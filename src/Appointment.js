// import React, { useState } from 'react';
// import axios from 'axios';

// const Appointment = () => {
//   const [appointmentData, setAppointmentData] = useState({
//     patient_ID: 0,
//     doctor_ID: 0,
//     reason_of_visit: '',
//   });

//   const [submittedAppointment, setSubmittedAppointment] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAppointmentData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://localhost:7254/api/Appointment/initial', appointmentData);
//       setSubmittedAppointment(response.data);
//       // Handle successful appointment submission
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };
//   return (
//     <div>
//       <h3>Appointment Form</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Patient ID:</label>
//           <input
//             type="number"
//             name="patient_ID"
//             value={appointmentData.patient_ID}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Doctor ID:</label>
//           <input
//             type="number"
//             name="doctor_ID"
//             value={appointmentData.doctor_ID}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Reason of Visit:</label>
//           <input
//             type="text"
//             name="reason_of_visit"
//             value={appointmentData.reason_of_visit}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Submit Appointment</button>
//       </form>

//       {submittedAppointment && (
//         <div className="card">
//           <div className="card-header">Submitted Appointment Details</div>
//           <div className="card-body">
//             <p>Doctor ID: {submittedAppointment.doctor_ID}</p>
//             <p>Patient ID: {submittedAppointment.patient_ID}</p>
//             <p>Reason of Visit: {submittedAppointment.reason_of_visit}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Appointment;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    patient_ID: 0,
    doctor_ID: 0,
    reason_of_visit: '',
  });

  const [submittedAppointment, setSubmittedAppointment] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://localhost:7254/api/Appointment/initial',
        appointmentData
      );
      setSubmittedAppointment(response.data);
      // Handle successful appointment submission
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  useEffect(() => {
    const patientId = localStorage.getItem('patientId');
    if (patientId) {
      setAppointmentData((prevState) => ({
        ...prevState,
        patient_ID: Number(patientId),
      }));
    }
  }, []);

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h3>Appointment Form</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Patient ID:</label>
            <input
              type="number"
              name="patient_ID"
              value={appointmentData.patient_ID}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Doctor ID:</label>
            <input
              type="number"
              name="doctor_ID"
              value={appointmentData.doctor_ID}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Reason of Visit:</label>
            <input
              type="text"
              name="reason_of_visit"
              value={appointmentData.reason_of_visit}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit Appointment
          </button>
        </form>

        {submittedAppointment && (
          <div className="card">
            <div className="card-header">Submitted Appointment Details</div>
            <div className="card-body">
              <p>Patient ID: {submittedAppointment.patient_ID}</p>
              <p>Doctor ID: {submittedAppointment.doctor_ID}</p>
              <p>Reason of Visit: {submittedAppointment.reason_of_visit}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
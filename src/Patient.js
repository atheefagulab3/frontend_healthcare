// import React, { Component } from "react";
// import Card from 'react-bootstrap/Card';

// export default class Patient extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Patient: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchPatient();
//   }

//   fetchPatient() {
//     fetch("https://localhost:7205/api/Patient")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ Patient: data });
//       });
//   }

//   render() {
//     const { Patient } = this.state;
//     return (
//       <div>
//         <h1>Patients</h1>
//         <div className="row">
//           {Patient.map((item) => (
//                 <div className="col-md-4" key={item.patient_ID}>
//                   <Card>
//                     <Card.Body>
//                       <Card.Title>Patient Details</Card.Title>
//                       <Card.Text>
//                         <strong>Patient ID:</strong> {item.patient_ID}
//                         <br />
//                         <strong>Patient Name:</strong> {item.patient_Name}
//                         <br />
//                         <strong>Age:</strong> {item.age}
//                         <br />
//                         <strong>Gender:</strong> {item.gender}
//                         <br />
//                         <strong>Blood Group:</strong> {item.bloodGroup}
//                         <br />
//                         <strong>Address:</strong> {item.patient_Address}
//                         <br />
//                         <strong>Phone:</strong> {item.patient_Phone}
//                         <br />
//                         <strong>Email:</strong> {item.patient_Email}
//                         <br />
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                   <br />
//                 </div>
//               ))}
//             </div>
//           </div>
//            );
//           }
//         }
// import React, { Component } from "react";

// export  class Patient extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Patient: [],
//       patient_ID: 0,
//       patient_Name: " ",
//       age: 0,
//       gender: " ",
//       bloodGroup: " ",
//       patient_Address: " ",
//       patient_Phone: 0,
//       patient_Email: " ",
//       patient_UserName: " ",
//       password:"",
//       selectedPatient: null,
    
//     };
//   }

//   componentDidMount() {
//     this.fetchPatient();
//   }

//   fetchPatient() {
//     fetch("https://localhost:7205/api/Patient")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ Patient: data });
//       })
//       .catch((error) => {
//         console.error("Error fetching Patient data:", error);
//       });
//   }

//   CreatePatient = () => {
//     const {
//       patient_Name,
//       age,
//       gender,
//       bloodGroup,
//       patient_Address,
//       patient_Phone,
//       patient_Email,
//       patient_UserName,
//       password
//     } = this.state;
//     const newPatient = {
//       patient_Name: patient_Name,
//       age: age,
//       gender: gender,
//       bloodGroup: bloodGroup,
//       patient_Address: patient_Address,
//       patient_Phone: patient_Phone,
//       patient_Email: patient_Email,
//       patient_UserName: patient_UserName,
//       password: password
//     };

//     fetch("https://localhost:7205/api/Patient", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPatient),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Patient is created ", data);
//         this.setState({
//           patient_Name: "",
//           age: 0,
//           gender: "",
//           bloodGroup: "",
//           patient_Address: "",
//           patient_Phone: 0,
//           patient_Email: "",
//           patient_UserName: "",
//           password: "",
//           selectedPatient: null,
//         });
//         // Fetch the updated list of patients
//         this.fetchPatient();
//       })
//       .catch((error) => {
//         console.error("Error creating Patient:", error);
//       });
//   };


//   updatePatient = () => {
//     const {
//       selectedPatient,
//       patient_Name,
//       age,
//       gender,
//       bloodGroup,
//       patient_Address,
//       patient_Phone,
//       patient_Email,
//       patient_UserName,
//       password
//     } = this.state;
  
//     if (!selectedPatient) {
//       return;
//     }
  
//     const updatedPatient = {
//       ...selectedPatient,
//       patient_Name: patient_Name,
//       age: age,
//       gender: gender,
//       bloodGroup: bloodGroup,
//       patient_Address: patient_Address,
//       patient_Phone: patient_Phone,
//       patient_Email: patient_Email,
//       patient_UserName: patient_UserName,
//       password:password,
      
//     };
  
//     fetch(`https://localhost:7205/api/Patient?id=+ ${selectedPatient.patient_ID}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedPatient),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Patient is updated ", data);
//         this.setState({
//           selectedPatient: null,
//           patient_Name: "",
//           age: 0,
//           gender: "",
//           bloodGroup: "",
//           patient_Address: "",
//           patient_Phone: 0,
//           patient_Email: "",
//           patient_UserName: "",
//           password: "",
          
//         });
//         // Fetch the updated list of patients
//         this.fetchPatient();
//       })
//       .catch((error) => {
//         console.error("Error updating Patient:", error);
//       });
//   };
  
//   handlenameInputChange = (event) => {
//     this.setState({ patient_Name: event.target.value });
//   };

//   handleageInputChange = (event) => {
//     this.setState({ age: event.target.value });
//   };

//   handlegenderInputChange = (event) => {
//     this.setState({ gender: event.target.value });
//   };
//   handlebloodGroupInputChange = (event) => {
//     this.setState({ bloodGroup: event.target.value });
//   };
//   handlepatientAddressInputChange = (event) => {
//     this.setState({ patient_Address: event.target.value });
//   };
//   handlepatientPhoneInputChange = (event) => {
//     this.setState({ patient_Phone: event.target.value });
//   };
//   handlepatientEmailInputChange = (event) => {
//     this.setState({ patient_Email: event.target.value });
//   };
//   handlepatientUserNameInputChange = (event) => {
//     this.setState({ patient_UserName: event.target.value });
//   };
//   handlePasswordInputChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   selectPatientForUpdate = (Patient) => {
//     this.setState({
//       selectedPatient: Patient,
//       patient_Name: Patient.patient_Name,
//       age: Patient.age,
//       gender: Patient.gender,
//       bloodGroup: Patient.bloodGroup,
//       patient_Address: Patient.patient_Address,
//       patient_Phone: Patient.patient_Phone,
//       patient_Email: Patient.patient_Email,
//       patient_UserName: Patient.patient_UserName,
//       password: Patient.password,
      
//     });
//   };

//   render() {
//     const {
//       Patient,
//       selectedPatient,
//       patient_Name,
//       age,
//       gender,
//       bloodGroup,
//       patient_Address,
//       patient_Phone,
//       patient_Email,
//       patient_UserName,
//       password,
      
//     } = this.state;
//     return (
//       <div className="container-fluid">
//         <h1>Room</h1>

//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               value={patient_Name}
//               onChange={this.handlenameInputChange}
//               placeholder="patient_Name"
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               value={age}
//               onChange={this.handleageInputChange}
//               placeholder=" age"
//             />
//           </div>
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               value={gender}
//               onChange={this.handlegenderInputChange}
//               placeholder="gender"
//             />
//           </div>
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               value={bloodGroup}
//               onChange={this.handlebloodGroupInputChange}
//               placeholder="blood"
//             />
//           </div>
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               value={patient_Address}
//               onChange={this.handlepatientAddressInputChange}
//               placeholder="address"
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               value={patient_Phone}
//               onChange={this.handlepatientPhoneInputChange}
//               placeholder="phone"
//             />
//           </div>
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               value={patient_Email}
//               onChange={this.handlepatientEmailInputChange}
//               placeholder="email"
//             />
//           </div>
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               value={patient_UserName}
//               onChange={this.handlepatientUserNameInputChange}
//               placeholder="username"
//             />
//           </div>
          
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               value={password}
//               onChange={this.handlePasswordInputChange}
//               placeholder="password"
//             />
//           </div>

//           <div className="col">
//             {selectedPatient ? (
//               <button className="btn btn-primary" onClick={this.updatePatient}>
//                 Save
//               </button>
//             ) : (
//               <button className="btn btn-primary" onClick={this.CreatePatient}>
//                 Create
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="table-responsive mt-3">
//           <table className="table table-hover ">
//             <tbody>
//               {Patient.map((item) => (
//                 <tr key={item.rid}>
//                   <td>
//                     <strong>Patient ID:</strong> {item.patient_ID}
//                     <br />
//                     <strong>Patient Name:</strong> {item.patient_Name}
//                     <br />
//                     <strong>Age:</strong> {item.age}
//                     <br />
//                     <strong>Gender:</strong> {item.gender}
//                     <br />
//                     <strong>Blood Group:</strong> {item.bloodGroup}
//                     <br />
//                     <strong>Address:</strong> {item.patient_Address}
//                     <br />
//                     <strong>Phone:</strong> {item.patient_Phone}
//                     <br />
//                     <strong>Email:</strong> {item.patient_Email}
//                     <br />
//                     <strong>pass:</strong>{item.password}
//                   </td>
                  
//                   <td>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => this.deletePatient(item.patient_ID)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="btn btn-primary ml-2"
//                       onClick={() => this.selectPatientForUpdate(item)}
//                     >
//                       Update
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
// export default Patient;
import React, { Component } from "react";

export class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patient: [],
      patient_ID: 0,
      patient_Name: " ",
      age: 0,
      gender: " ",
      bloodGroup: " ",
      patient_Address: " ",
      patient_Phone: 0,
      patient_Email: " ",
      patient_UserName: " ",
      password: "",
      selectedPatient: null,
    };
  }

  componentDidMount() {
    this.fetchPatient();
  }

  fetchPatient() {
    fetch("https://localhost:7205/api/Patient")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Patient: data });
      })
      .catch((error) => {
        console.error("Error fetching Patient data:", error);
      });
  }

  CreatePatient = () => {
    const {
      patient_Name,
      age,
      gender,
      bloodGroup,
      patient_Address,
      patient_Phone,
      patient_Email,
      patient_UserName,
      password,
    } = this.state;
    const newPatient = {
      patient_Name: patient_Name,
      age: age,
      gender: gender,
      bloodGroup: bloodGroup,
      patient_Address: patient_Address,
      patient_Phone: patient_Phone,
      patient_Email: patient_Email,
      patient_UserName: patient_UserName,
      password: password,
    };

    fetch("https://localhost:7205/api/Patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPatient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Patient is created ", data);
        this.setState({
          patient_Name: "",
          age: 0,
          gender: "",
          bloodGroup: "",
          patient_Address: "",
          patient_Phone: 0,
          patient_Email: "",
          patient_UserName: "",
          password: "",
          selectedPatient: null,
        });
        // Fetch the updated list of patients
        this.fetchPatient();
      })
      .catch((error) => {
        console.error("Error creating Patient:", error);
      });
  };

  updatePatient = () => {
    const {
      selectedPatient,
      patient_Name,
      age,
      gender,
      bloodGroup,
      patient_Address,
      patient_Phone,
      patient_Email,
      patient_UserName,
      password,
    } = this.state;

    if (!selectedPatient) {
      return;
    }

    const updatedPatient = {
      ...selectedPatient,
      patient_Name: patient_Name,
      age: age,
      gender: gender,
      bloodGroup: bloodGroup,
      patient_Address: patient_Address,
      patient_Phone: patient_Phone,
      patient_Email: patient_Email,
      patient_UserName: patient_UserName,
      password: password,
    };

    fetch(
      `https://localhost:7205/api/Patient?id=+ ${selectedPatient.patient_ID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPatient),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Patient is updated ", data);
        this.setState({
          selectedPatient: null,
          patient_Name: "",
          age: 0,
          gender: "",
          bloodGroup: "",
          patient_Address: "",
          patient_Phone: 0,
          patient_Email: "",
          patient_UserName: "",
          password: "",
        });
        // Fetch the updated list of patients
        this.fetchPatient();
      })
      .catch((error) => {
        console.error("Error updating Patient:", error);
      });
  };

  handlenameInputChange = (event) => {
    this.setState({ patient_Name: event.target.value });
  };

  handleageInputChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handlegenderInputChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handlebloodGroupInputChange = (event) => {
    this.setState({ bloodGroup: event.target.value });
  };
  handlepatientAddressInputChange = (event) => {
    this.setState({ patient_Address: event.target.value });
  };
  handlepatientPhoneInputChange = (event) => {
    this.setState({ patient_Phone: event.target.value });
  };
  handlepatientEmailInputChange = (event) => {
    this.setState({ patient_Email: event.target.value });
  };
  handlepatientUserNameInputChange = (event) => {
    this.setState({ patient_UserName: event.target.value });
  };
  handlePasswordInputChange = (event) => {
    this.setState({ password: event.target.value });
  };

  selectPatientForUpdate = (Patient) => {
    this.setState({
      selectedPatient: Patient,
      patient_Name: Patient.patient_Name,
      age: Patient.age,
      gender: Patient.gender,
      bloodGroup: Patient.bloodGroup,
      patient_Address: Patient.patient_Address,
      patient_Phone: Patient.patient_Phone,
      patient_Email: Patient.patient_Email,
      patient_UserName: Patient.patient_UserName,
      password: Patient.password,
    });
  };

  render() {
    const {
      Patient,
      selectedPatient,
      patient_Name,
      age,
      gender,
      bloodGroup,
      patient_Address,
      patient_Phone,
      patient_Email,
      patient_UserName,
      password,
    } = this.state;
    return (
      <div className="container-fluid">
        <h1>Patient Information</h1>

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_Name}
              onChange={(event) =>
                this.handleInputChange(event, "patient_Name")
              }
              placeholder="Patient Name"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(event) => this.handleInputChange(event, "age")}
              placeholder="Age"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={gender}
              onChange={(event) => this.handleInputChange(event, "gender")}
              placeholder="Gender"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={bloodGroup}
              onChange={(event) =>
                this.handleInputChange(event, "bloodGroup")
              }
              placeholder="Blood Group"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_Address}
              onChange={(event) =>
                this.handleInputChange(event, "patient_Address")
              }
              placeholder="Address"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_Phone}
              onChange={(event) =>
                this.handleInputChange(event, "patient_Phone")
              }
              placeholder="Phone"
            />
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              value={patient_Email}
              onChange={(event) =>
                this.handleInputChange(event, "patient_Email")
              }
              placeholder="Email"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_UserName}
              onChange={(event) =>
                this.handleInputChange(event, "patient_UserName")
              }
              placeholder="Username"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(event) => this.handleInputChange(event, "password")}
              placeholder="Password"
            />
          </div>

          <div className="col">
            {selectedPatient && (
              <button
                className="btn btn-primary"
                onClick={this.updatePatient}
              >
                Save
              </button>
            )}
          </div>
        </div>

        <div className="row mt-3">
          {Patient.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.patient_ID}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Patient ID: {item.patient_ID}</h5>
                  <p className="card-text">
                    <strong>Patient Name:</strong> {item.patient_Name}
                    <br />
                    <strong>Age:</strong> {item.age}
                    <br />
                    <strong>Gender:</strong> {item.gender}
                    <br />
                    <strong>Blood Group:</strong> {item.bloodGroup}
                    <br />
                    <strong>Address:</strong> {item.patient_Address}
                    <br />
                    <strong>Phone:</strong> {item.patient_Phone}
                    <br />
                    <strong>Email:</strong> {item.patient_Email}
                    <br />
                    
                  </p>
                  <div className="btn-group">
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deletePatient(item.patient_ID)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary ml-2"
                      onClick={() => this.selectPatientForUpdate(item)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Patient;

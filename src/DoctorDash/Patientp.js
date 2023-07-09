import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import './Patientp.css'; // Import the CSS file for styling
import {NavLink } from 'react-router-dom';
import {Nav } from 'react-bootstrap';


export default class Patientp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patient: [],
    };
  }

  componentDidMount() {
    this.fetchPatient();
  }

  fetchPatient() {
    fetch("https://localhost:7205/api/Patient/Patients_Profile")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Patient: data });
      });
  }

  render() {
    const { Patient } = this.state;
    return (
      <div className="patient-page">
         <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/DoctorProfile" activeClassName="active">
                Profile
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Patientp" activeClassName="active">
                Patient
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ReactBigCalendar" activeClassName="active">
                Agenda
              </Nav.Link>
      </Nav>
      <hr/>
        <h1 className="page-title">Patients</h1>
       
        <div className="patient-list">
          {Patient.map((item) => (
            <div className="patient-card" key={item.patient_ID}>
              <Card>
                <Card.Body>
                  <Card.Text>
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
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

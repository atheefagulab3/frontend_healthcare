import React from 'react'

function Doc({
    doctorID,
    imageName,
    doctorName,
    gender,
    doctorMobile,
    specialization,
    doctor_Experience,
    constulting_Day,
    constulting_Time,
    review,
    status,
    changeStatus
  }) {
    return (
      <div className="card">
        <div className="card-image-container">
          <img src={`/Img/${imageName}`} alt={doctorName} className="card-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{doctorName}</h2>
          <p className="card-description">id: {doctorID}</p>
          <p className="card-description">Gender: {gender}</p>
          <p className="card-description">Specialization: {specialization}</p>
          <p className="card-description">Experience: {doctor_Experience}</p>
          <p className="card-description">Consulting Day: {constulting_Day}</p>
          <p className="card-description">Consulting Time: {constulting_Time}</p>
          <p className="card-description">Review: {review}</p>
          <p className="card-description">Mobile: {doctorMobile}</p>
          <p className="card-description">Status: {status}</p>
          {status === 'pending' && (
            <div className="d-flex justify-content-around">
              <button className="btn btn-sm btn-success" onClick={() => changeStatus(doctorID, 'active')}>
                Active
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
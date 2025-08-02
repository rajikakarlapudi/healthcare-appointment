import React from "react";
import { useParams } from "react-router-dom";
import doctors from "../data/doctors";
import AppointmentForm from "../components/AppointmentForm";
import { FaUserMd } from "react-icons/fa";

function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="container">
      <div style={{ fontSize: "100px", color: "#1976d2", marginBottom: "20px" }}>
        <FaUserMd />
      </div>
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <h4>Availability:</h4>
      <ul>
        {doctor.availability.map(time => (
          <li key={time}>{new Date(time).toLocaleString()}</li>
        ))}
      </ul>
      <AppointmentForm doctorId={doctor.id} />
    </div>
  );
}

export default DoctorProfilePage;

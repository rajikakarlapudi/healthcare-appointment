import React from "react";
import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div style={{ fontSize: "64px", marginRight: "20px", color: "#1976d2" }}>
        <FaUserMd />
      </div>
      <div className="doctor-details">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p style={{ color: doctor.availability.length ? "green" : "red" }}>
          {doctor.availability.length ? "Available" : "Not Available"}
        </p>
        <Link to={`/doctor/${doctor.id}`}>View Profile</Link>
      </div>
    </div>
  );
}

export default DoctorCard;

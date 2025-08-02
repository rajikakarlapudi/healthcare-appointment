import React, { useState } from "react";
import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

function LandingPage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Doctors</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search doctors..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredDoctors.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            No doctors found. Try a different search.
          </p>
        </div>
      ) : (
        filteredDoctors.map(doc => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))
      )}
    </div>
  );
}

export default LandingPage;

import React, { useState } from "react";
import doctors from "../data/doctors";

function AppointmentForm({ doctorId }) {
  const [form, setForm] = useState({
    patientName: "",
    email: "",
    dateTime: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const doctor = doctors.find((d) => d.id === doctorId);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selected = form.dateTime; // e.g., "2025-08-03T10:00"
    const availableTimes = doctor.availability.map((time) =>
      time.slice(0, 16) // Convert to "YYYY-MM-DDTHH:MM"
    );

    if (!availableTimes.includes(selected)) {
      setError("Doctor is not available at the selected time.");
      return;
    }

    // Clear error and mark submission
    setError("");
    setSubmitted(true);
    console.log("Appointment booked:", { ...form, doctorId });
  };

  if (submitted)
    return <p className="success-msg">Appointment booked successfully!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Appointment</h3>
      <input
        type="text"
        placeholder="Patient Name"
        required
        onChange={(e) => setForm({ ...form, patientName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="datetime-local"
        required
        onChange={(e) => {
          setForm({ ...form, dateTime: e.target.value });
          setError("");
        }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default AppointmentForm;

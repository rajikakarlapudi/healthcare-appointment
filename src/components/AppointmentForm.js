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

  const doctor = doctors.find(d => d.id === doctorId);

  const handleSubmit = e => {
    e.preventDefault();

    // Check if selected time is within availability
    const selected = new Date(form.dateTime).toISOString().slice(0, 16); // match format
    const availableTimes = doctor.availability.map(time => time.slice(0, 16)); // trim seconds

    if (!availableTimes.includes(selected)) {
      setError("Doctor is not available at the selected time.");
      return;
    }

    console.log({ ...form, doctorId });
    setSubmitted(true);
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
        onChange={e => setForm({ ...form, patientName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="datetime-local"
        required
        onChange={e => {
          setForm({ ...form, dateTime: e.target.value });
          setError(""); // clear on change
        }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default AppointmentForm;

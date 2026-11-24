
import React, { useState } from "react";
import "./App.css";

function App() {

  const [patients, setPatients] = useState([
    {
      id: 101,
      name: "Ravi Kumar",
      age: 22,
      gender: "Male",
      doctor: "Dr. Suresh",
      department: "Cardiology",
      time: "10:00 AM",
      status: "Confirmed"
    },
    {
      id: 102,
      name: "Priya",
      age: 25,
      gender: "Female",
      doctor: "Dr. Anil",
      department: "Neurology",
      time: "11:30 AM",
      status: "Pending"
    },
    {
      id: 103,
      name: "Rahul",
      age: 30,
      gender: "Male",
      doctor: "Dr. Kiran",
      department: "Orthopedics",
      time: "02:00 PM",
      status: "Confirmed"
    },
    {
      id: 104,
      name: "Sneha",
      age: 28,
      gender: "Female",
      doctor: "Dr. Kumar",
      department: "Dermatology",
      time: "03:30 PM",
      status: "Pending"
    }
  ]);

  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase()) ||
    patient.id.toString().includes(search)
  );

  return (
    <div className="container">

      <h1>Hospital Patient Information System</h1>
      <p className="subtitle">
        Manage and view patient appointment details
      </p>

      <input
        type="text"
        placeholder="Search by Patient Name or ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <h2>Patient Details</h2>

      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Appointment</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.doctor}</td>
                <td>{patient.department}</td>
                <td>{patient.time}</td>
                <td>
                  <span className={
                    patient.status === "Confirmed"
                      ? "confirmed"
                      : "pending"
                  }>
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No patients found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="summary">
        <h3>Total Patients: {patients.length}</h3>
        <h3>
          Confirmed Appointments: {
            patients.filter(p => p.status === "Confirmed").length
          }
        </h3>
      </div>

    </div>
  );
}

export default App;

import React from "react";
import "./AttendanceTracker.css";

const AttendanceTracker = () => {
  // Sample data for 10 days with varying punch-in, punch-out times, and leave days
  const attendanceData = [
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "10:45 AM", punchOut: "07:30 PM", hoursWorked: "8.75 Hours", status: "Present", date: "01/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "10:30 AM", punchOut: "08:00 PM", hoursWorked: "9.5 Hours", status: "Present", date: "02/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "11:00 AM", punchOut: "08:15 PM", hoursWorked: "9.25 Hours", status: "Present", date: "03/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "10:30 AM", punchOut: "07:45 PM", hoursWorked: "9.25 Hours", status: "Present", date: "04/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "10:30 AM", punchOut: "08:00 PM", hoursWorked: "9.5 Hours", status: "Present", date: "05/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "11:30 AM", punchOut: "08:00 PM", hoursWorked: "8.5 Hours", status: "Present", date: "06/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "10:40 AM", punchOut: "07:50 PM", hoursWorked: "9.17 Hours", status: "Present", date: "07/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "10:30 AM", punchOut: "07:45 PM", hoursWorked: "9.25 Hours", status: "Present", date: "08/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "10:00 AM", punchOut: "08:10 PM", hoursWorked: "10.17 Hours", status: "Present", date: "09/02/2025" },
    { name: "Subham Roy", empId: "GAL0001", jobTitle: "Software Engineer", timings: "Morning", punchIn: "Leave", punchOut: "Leave", hoursWorked: "0 Hours", status: "Leave", date: "10/02/2025" },  // Leave day
  ];

  return (
    <div className="attendance-tracker-container">
      <h2 className="attendance-tracker-heading">Attendance Tracker</h2>
      <div className="attendance-tracker-table-container">
        <table className="attendance-tracker-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Job Title</th>
              <th>Date</th>
              <th>Work Timings</th>
              <th>Punch In</th>
              <th>Punch Out</th>
              <th>Hours Worked</th>
              <th>Attendance Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.empId}</td>
                <td>{entry.jobTitle}</td>
                <td>{entry.date}</td>
                <td>{entry.timings}</td>
                <td>{entry.punchIn}</td>
                <td>{entry.punchOut}</td>
                <td>{entry.hoursWorked}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
    </div>
  );
};

export default AttendanceTracker;

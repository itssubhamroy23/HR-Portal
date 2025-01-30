import React from "react";
import "./EmployementDetails.css"; // Ensure correct path

const EmploymentDetails = () => {
    // Dummy data for now
    const formData = {
        name: "John Doe",
        gender: "Male",
        location: "Bengaluru",
        dateOfBirth: "1990-01-01",
        bloodGroup: "O+",
        email: "john.doe@example.com",
        phone: "9876543210",
        alternatePhone: "9876543211",
        currentAddress: "123 Street, Bengaluru",
        permanentAddress: "456 Avenue, Bengaluru",
        maritalStatus: "Married",
        aadhaar: "123456789012",
        pan: "ABCDE1234F",
    };

    return (
        <div className="employment-details-container">
    
            <div className="employment-details-grid">
                {/* Name */}
                <div className="employment-details-item">
                    <label>Employee Name:</label>
                    <p>{formData.name}</p>
                </div>

                {/* Gender */}
                <div className="employment-details-item">
                    <label>Gender:</label>
                    <p>{formData.gender}</p>
                </div>

                {/* Location */}
                <div className="employment-details-item">
                    <label>Location:</label>
                    <p>{formData.location}</p>
                </div>

                {/* Date of Birth */}
                <div className="employment-details-item">
                    <label>Date of Birth:</label>
                    <p>{formData.dateOfBirth}</p>
                </div>

                {/* Blood Group */}
                <div className="employment-details-item">
                    <label>Blood Group:</label>
                    <p>{formData.bloodGroup}</p>
                </div>

                {/* Email */}
                <div className="employment-details-item">
                    <label>Personal Email ID:</label>
                    <p>{formData.email}</p>
                </div>

                {/* Phone */}
                <div className="employment-details-item">
                    <label>Phone Number:</label>
                    <p>{formData.phone}</p>
                </div>

                {/* Alternate Phone */}
                <div className="employment-details-item">
                    <label>Alternate Phone:</label>
                    <p>{formData.alternatePhone}</p>
                </div>

                {/* Marital Status */}
                <div className="employment-details-item">
                    <label>Marital Status:</label>
                    <p>{formData.maritalStatus}</p>
                </div>

                {/* Aadhaar */}
                <div className="employment-details-item">
                    <label>Aadhaar Number:</label>
                    <p>{formData.aadhaar}</p>
                </div>

                {/* PAN */}
                <div className="employment-details-item">
                    <label>PAN Number:</label>
                    <p>{formData.pan}</p>
                </div>
            </div>

            {/* Addresses */}
            <div className="employment-details-grid">
                <div className="employment-details-item">
                    <label>Current Address:</label>
                    <p>{formData.currentAddress}</p>
                </div>
                <div className="employment-details-item">
                    <label>Permanent Address:</label>
                    <p>{formData.permanentAddress}</p>
                </div>
            </div>
        </div>
    );
};

export default EmploymentDetails;

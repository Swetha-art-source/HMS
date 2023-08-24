import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medicalHistoryFile, setMedicalHistoryFile] = useState("");

     const handleCaptchaChange = (value) => {
      setCaptchaValue(value);
    };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!captchaValue) {
      alert("CAPTCHA verification failed");
    } else {
      // Proceed with registration
      console.log(
        firstName,
        lastName,
        email,
        password,
        dob,
        gender,
        contactNumber,
        address,
        emergencyContact,
        bloodGroup,
        allergies,
        medicalHistoryFile
      );
      // ... perform the registration API call or other actions here ...
      if (medicalHistoryFile) {
        // Prepare the FormData object
        const formData = new FormData();
        formData.append("medicalHistoryFile", medicalHistoryFile);
  
        try {
          // Perform the file upload API call
          const response = await fetch("your-upload-api-url", {
            method: "POST",
            body: formData,
          });
  
          if (response.ok) {
            // File uploaded successfully
            console.log("File uploaded successfully");
          } else {
            console.error("File upload failed");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
  
      
      alert("Registration Successful");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div className="margin">
            <label>First Name <span className="required">*</span></label>
            <input
              type="text"
              className="custom-form-control"
              placeholder="Enter your name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Last Name <span className="required">*</span></label>
            <input
              type="text"
              className="custom-form-control"
              placeholder="Enter your name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Email address <span className="required">*</span></label>
            <input
              type="email"
              className="custom-form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Password <span className="required">*</span></label>
            <input
              type="password"
              className="custom-form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Confirm Password <span className="required">*</span></label>
            <input
              type="password"
              className="custom-form-control"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Date of Birth <span className="required">*</span></label>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Gender <span className="required">*</span></label>
            <select
              className="custom-form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="margin">
            <label>Contact Number <span className="required">*</span></label>
            <input
              type="tel"
              className="custom-form-control"
              placeholder="Enter contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Address <span className="required">*</span></label>
            <textarea
              className="custom-form-control"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Emergency Contact <span className="required">*</span></label>
            <input
              type="tel"
              className="custom-form-control"
              placeholder="Enter emergency contact"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              required
            />
          </div>

          <div className="margin">
            <label>Blood Group <span className="required">*</span></label>
            <select
              className="custom-form-control"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="a+">A+</option>
              <option value="o+">O+</option>
              <option value="b+">B+</option>
              <option value="ab+">AB+</option>
              <option value="a-">A-</option>
              <option value="o-">O-</option>
              <option value="b-">B-</option>
              <option value="ab-">AB-</option>
            </select>
          </div>

          <div className="margin">
            <label>Allergies</label>
            <textarea
              className="custom-form-control"
              placeholder="Enter allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>

          <div className="margin">
            <label>Medical History</label>
            <input
              type="file"
              className="custom-form-control"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setMedicalHistoryFile(e.target.files[0])}
            />
          </div>

          <div className="margin">
            <label>CAPTCHA</label>
            <ReCAPTCHA
              sitekey="your-recaptcha-site-key"
              onChange={handleCaptchaChange}
            />
          </div>

          <div className="custom-d-grid">
            <button type="submit" className="custom-btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/sign-in">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

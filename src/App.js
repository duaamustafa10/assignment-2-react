
import { useState } from "react";
import "./App.css";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Review from "./components/Review";

function App() {
  // Current form step
  const [currentStep, setCurrentStep] = useState(1);

  // Store all form information
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    qualification: "",
    institute: "",
    passingYear: "",
    course: "",
  });

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validate form fields
  const validateStep = () => {
    let newErrors = {};

    // Step 1: Personal Information
    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }

      if (!formData.dob) {
        newErrors.dob = "Date of birth is required";
      } else if (
        formData.dob > new Date().toISOString().split("T")[0]
      ) {
        newErrors.dob = "Date cannot be in the future";
      }

      if (!formData.gender) {
        newErrors.gender = "Please select gender";
      }
    }

    // Step 2: Contact Information
    if (currentStep === 2) {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        newErrors.email = "Please enter a valid email";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (
        !/^[0-9+\-\s()]{10,16}$/.test(formData.phone)
      ) {
        newErrors.phone = "Please enter a valid phone number";
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }

      if (!formData.city.trim()) {
        newErrors.city = "City is required";
      }
    }

    // Step 3: Education and Course
    if (currentStep === 3) {
      if (!formData.qualification) {
        newErrors.qualification = "Please select qualification";
      }

      if (!formData.institute.trim()) {
        newErrors.institute = "Institute name is required";
      }

      if (!formData.passingYear) {
        newErrors.passingYear = "Please select passing year";
      }

      if (!formData.course) {
        newErrors.course = "Please select a course";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Next button
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
      setErrors({});
    }
  };

  // Back button
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  // Submit registration
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Reset form for another student
  const handleReset = () => {
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      qualification: "",
      institute: "",
      passingYear: "",
      course: "",
    });

    setCurrentStep(1);
    setErrors({});
    setSubmitted(false);
  };

  // Success screen
  if (submitted) {
    return (
      <div className="success-container">
        <div className="success-card">

          <div className="success-icon">✓</div>

          <h1>Registration Successful!</h1>

          <p>
            Thank you, <strong>{formData.fullName}</strong>!
            Your course registration has been submitted successfully.
          </p>

          <button
            className="primary-btn"
            onClick={handleReset}
          >
            Register Another Student
          </button>

        </div>
      </div>
    );
  }

  // Step names
  const stepNames = [
    "Personal",
    "Contact",
    "Education",
    "Review",
  ];

  return (
    <div className="app-container">

      <div className="registration-card">

        {/* Header */}
        <div className="header">

          <div className="header-icon">🎓</div>

          <div>
            <h1>Student Course Registration</h1>

            <p>
              Complete your course registration in a few easy steps.
            </p>
          </div>

        </div>

        {/* Progress Steps */}
        <div className="steps">

          {stepNames.map((name, index) => {
            const step = index + 1;

            return (
              <div
                className={`step ${
                  currentStep >= step ? "active" : ""
                }`}
                key={name}
              >

                <div className="step-number">
                  {currentStep > step ? "✓" : step}
                </div>

                <span>{name}</span>

              </div>
            );
          })}

        </div>

        {/* Form Content */}
        <div className="form-content">

          {currentStep === 1 && (
            <Step1
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}

          {currentStep === 2 && (
            <Step2
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}

          {currentStep === 3 && (
            <Step3
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}

          {currentStep === 4 && (
            <Review formData={formData} />
          )}

          {/* Navigation Buttons */}
          <div className="button-group">

            {currentStep > 1 && (
              <button
                className="back-btn"
                onClick={handleBack}
              >
                ← Back
              </button>
            )}

            {currentStep < 4 && (
              <button
                className="primary-btn"
                onClick={handleNext}
              >
                {currentStep === 3 ? "Review" : "Next"} →
              </button>
            )}

            {currentStep === 4 && (
              <button
                className="primary-btn"
                onClick={handleSubmit}
              >
                Submit Registration
              </button>
            )}

          </div>

        </div>

        {/* Footer */}
        <div className="footer">
          🎓 Student Course Registration Form
        </div>

      </div>

    </div>
  );
}

export default App;


function Step1({ formData, handleChange, errors }) {
  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      <p className="section-description">
        Please provide your personal details.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label>Full Name <span>*</span></label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <small className="error-message">{errors.fullName}</small>
          )}
        </div>

        <div className="form-group">
          <label>Date of Birth <span>*</span></label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            max={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
          />
          {errors.dob && (
            <small className="error-message">{errors.dob}</small>
          )}
        </div>

        <div className="form-group">
          <label>Gender <span>*</span></label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <small className="error-message">{errors.gender}</small>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step1;

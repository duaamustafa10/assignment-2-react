
function Step2({ formData, handleChange, errors }) {
  return (
    <div className="form-section">
      <h2>Contact Information</h2>
      <p className="section-description">
        Please provide your contact details.
      </p>

      <div className="form-grid">

        <div className="form-group">
          <label>Email Address <span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="error-message">{errors.email}</small>
          )}
        </div>

        <div className="form-group">
          <label>Phone Number <span>*</span></label>
          <input
            type="tel"
            name="phone"
            placeholder="03XXXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <small className="error-message">{errors.phone}</small>
          )}
        </div>

        <div className="form-group">
          <label>Address <span>*</span></label>
          <textarea
            name="address"
            placeholder="Enter your complete address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <small className="error-message">{errors.address}</small>
          )}
        </div>

        <div className="form-group">
          <label>City <span>*</span></label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && (
            <small className="error-message">{errors.city}</small>
          )}
        </div>

      </div>
    </div>
  );
}

export default Step2;


function Step3({ formData, handleChange, errors }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="form-section">
      <h2>Education & Course</h2>
      <p className="section-description">
        Tell us about your education and selected course.
      </p>

      <div className="form-grid">

        <div className="form-group">
          <label>Previous Qualification <span>*</span></label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option value="">Select Qualification</option>
            <option value="Matric">Matric</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
          </select>
          {errors.qualification && (
            <small className="error-message">
              {errors.qualification}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Institute Name <span>*</span></label>
          <input
            type="text"
            name="institute"
            placeholder="Enter institute name"
            value={formData.institute}
            onChange={handleChange}
          />
          {errors.institute && (
            <small className="error-message">
              {errors.institute}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Passing Year <span>*</span></label>
          <select
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
          >
            <option value="">Select Passing Year</option>

            {Array.from({ length: 30 }, (_, i) => currentYear - i).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
          {errors.passingYear && (
            <small className="error-message">
              {errors.passingYear}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Select Course <span>*</span></label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX Designing">UI/UX Designing</option>
            <option value="Python Programming">Python Programming</option>
          </select>
          {errors.course && (
            <small className="error-message">{errors.course}</small>
          )}
        </div>

      </div>
    </div>
  );
}

export default Step3;

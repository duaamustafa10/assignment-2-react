
function Review({ formData }) {
  const sections = [
    {
      title: "Personal Information",
      fields: [
        ["Full Name", formData.fullName],
        ["Date of Birth", formData.dob],
        ["Gender", formData.gender],
      ],
    },
    {
      title: "Contact Information",
      fields: [
        ["Email Address", formData.email],
        ["Phone Number", formData.phone],
        ["Address", formData.address],
        ["City", formData.city],
      ],
    },
    {
      title: "Education & Course",
      fields: [
        ["Qualification", formData.qualification],
        ["Institute Name", formData.institute],
        ["Passing Year", formData.passingYear],
        ["Selected Course", formData.course],
      ],
    },
  ];

  return (
    <div className="form-section">
      <h2>Review Your Information</h2>
      <p className="section-description">
        Please check all your details before submitting.
      </p>

      {sections.map((section) => (
        <div className="review-section" key={section.title}>
          <h3>{section.title}</h3>

          {section.fields.map(([label, value]) => (
            <div className="review-row" key={label}>
              <span>{label}</span>
              <strong>{value || "-"}</strong>
            </div>
          ))}
        </div>
      ))}

      <p className="review-note">
        Please make sure all information is correct before submission.
      </p>
    </div>
  );
}

export default Review;

import React, { useState } from 'react';
import './Education.css';

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: '',
    studyTitle: '',
    studyDate: ''
  });

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="education">
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="school" placeholder="School Name" value={education.school} onChange={handleChange} />
          <input type="text" name="studyTitle" placeholder="Title of Study" value={education.studyTitle} onChange={handleChange} />
          <input type="text" name="studyDate" placeholder="Date of Study" value={education.studyDate} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Study Title: {education.studyTitle}</p>
          <p>Date of Study: {education.studyDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;

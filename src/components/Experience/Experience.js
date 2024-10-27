import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="experience">
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="company" placeholder="Company Name" value={experience.company} onChange={handleChange} />
          <input type="text" name="position" placeholder="Position Title" value={experience.position} onChange={handleChange} />
          <input type="text" name="responsibilities" placeholder="Responsibilities" value={experience.responsibilities} onChange={handleChange} />
          <input type="text" name="startDate" placeholder="Start Date" value={experience.startDate} onChange={handleChange} />
          <input type="text" name="endDate" placeholder="End Date" value={experience.endDate} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>From: {experience.startDate} to {experience.endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;

import React, { useState } from 'react';
import '../styles/BloodAvailability.css';

const BloodAvailability = () => {
  const [formData, setFormData] = useState({
    province: '',
    district: '',
    bloodGroup: '',
    bloodComponent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Data:', formData);
    // Add search logic here
  };

  return (
    <div className="blood-availability-container">
      <div className="page-title">
        <span> Blood Availability</span>
      </div>
      <div className="form-container">
        <div className="dropdowns">
          <div>
            <label>Search Province</label>
            <select name="province" value={formData.province} onChange={handleChange}>
            <option value="">Select Province</option>
            <option value="province1">Central Province</option>
            <option value="province2">Eastern Province</option>
            <option value="province3">North Central Province</option>
            <option value="province4">Northern Province</option>
            <option value="province5">North Western Province</option>
            <option value="province6">Sabaragamuwa Province</option>
            <option value="province7">Southern Province</option>
            <option value="province8">Uva Province</option>
            <option value="province9">Western Province</option>
            </select>
          </div>
          <div>
            <label>Search District</label>
            <select name="district" value={formData.district} onChange={handleChange}>
            <option value="">Select District</option>
            <option value="district1">Ampara</option>
            <option value="district2">Anuradhapura</option>
            <option value="district3">Badulla</option>
            <option value="district4">Batticaloa</option>
            <option value="district5">Colombo</option>
            <option value="district6">Galle</option>
            <option value="district7">Gampaha</option>
            <option value="district8">Hambantota</option>
            <option value="district9">Jaffna</option>
            <option value="district10">Kalutara</option>
            <option value="district11">Kandy</option>
            <option value="district12">Kegalle</option>
            <option value="district13">Kilinochchi</option>
            <option value="district14">Kurunegala</option>
            <option value="district15">Mannar</option>
            <option value="district16">Matale</option>
            <option value="district17">Matara</option>
            <option value="district18">Monaragala</option>
            <option value="district19">Mullaitivu</option>
            <option value="district20">Nuwara Eliya</option>
            <option value="district21">Polonnaruwa</option>
            <option value="district22">Puttalam</option>
            <option value="district23">Ratnapura</option>
            <option value="district24">Trincomalee</option>
            <option value="district25">Vavuniya</option>
            </select>
          </div>
          <div>
            <label>Search Blood Group</label>
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
              <option value="">Select Blood Group</option>
              <option value="a+">A+</option>
              <option value="a+">A-</option>
              <option value="b+">B+</option>
              <option value="b+">B-</option>
              <option value="o+">O+</option>
              <option value="o+">O-</option>
              <option value="ab+">AB+</option>
              <option value="ab+">AB-</option>
            </select>
          </div>
          <div>
            <label>Search Blood Component</label>
            <select name="bloodComponent" value={formData.bloodComponent} onChange={handleChange}>
              <option value="">Select Component</option>
              <option value="rbc">Red Blood Cells</option>
              <option value="plasma">Plasma</option>
              <option value="platelets">Platelets</option>
            </select>
          </div>
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <table className="availability-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Blood Bank</th>
            <th>Category</th>
            <th>Type</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">No data available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodAvailability;

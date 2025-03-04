import React, { useState } from "react";
import '../styles/BloodBank.css';
import SearchButton from '../components/SearchButton';

const BloodBankSearch = () => {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [bloodbank, setBloodbank] = useState(""); // Fixed variable name
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock data for demonstration (replace with API fetch)
    const mockData = [
      { id: 1, name: "Red Cross", address: "123 Street", email: "redcross@example.com", phone: "123-456-7890" },
      { id: 2, name: "Life Blood", address: "456 Avenue", email: "lifeblood@example.com", phone: "987-654-3210" },
    ];

    const filteredResults = mockData.filter((bank) =>
      bank.name.toLowerCase().includes(bloodbank.toLowerCase()) // Fixed variable reference
    );
    setResults(filteredResults);
  };

  return (
    <div className="bloodbank-container">
      <div className="page-title">
        <span> Blood Bank</span>
      </div>
      <div className="bloodbank-box">

        <div className="search-filters">
          <select value={province} onChange={(e) => setProvince(e.target.value)}>
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

          <select value={district} onChange={(e) => setDistrict(e.target.value)}>
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

        <div className="search-bar">
          <select value={bloodbank} onChange={(e) => setBloodbank(e.target.value)}> {/* Fixed variable reference */}
            <option value="">Select Bloodbank</option>
            <option value="bloodbank1">BloodBank01</option>
            <option value="bloodbank2">BloodBank02</option>
          </select>
        </div>

        <div>
          <SearchButton />
        </div>

        <table className="bloodbank-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Blood Bank</th>
              <th>Address</th>
              <th>Email</th>
              <th>Telephone</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((bank, index) => (
                <tr key={bank.id}>
                  <td>{index + 1}</td>
                  <td>{bank.name}</td>
                  <td>{bank.address}</td>
                  <td>{bank.email}</td>
                  <td>{bank.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">No results found</td>
              </tr>
            )}
          </tbody>
        </table>  
      </div>
    </div>
  );
};

export default BloodBankSearch;

import React, { useState } from "react";
import '../styles/DonationHistory.css';
import SearchButton from '../components/SearchButton';

const DonationHistory = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [bloodBank, setBloodBank] = useState("");

  return (
    <div className="donation-history">
      <h2 className="title">
        <span className="red-text">Donation History</span>
      </h2>

      <div className="filters">
        <div className="date-input-container">
          <div className="date-input-group">
            <label htmlFor="fromDate" className="date-label">From Date</label>
            <input
              id="fromDate"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="date-input"
            />
          </div>
          <div className="date-input-group">
            <label htmlFor="toDate" className="date-label">To Date</label>
            <input
              id="toDate"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="date-input"
            />
          </div>
        </div>
        
        <div className="dropdown-group">
          <label htmlFor="bloodBank" className="dropdown-label">Blood Bank</label>
          <select
            id="bloodBank"
            value={bloodBank}
            onChange={(e) => setBloodBank(e.target.value)}
            className="dropdown"
          >
            <option value="">Blood bank</option>
            <option value="bank1">Blood Bank 1</option>
            <option value="bank2">Blood Bank 2</option>
          </select>
        </div>
      </div>

      <div className="search-button-container">
        <SearchButton />
      </div>

      <table className="donation-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Officer Name</th>
            <th>Amount of Blood</th>
            <th>Donation Camp</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row, you can fetch and map data here */}
          <tr>
            <td>1</td>
            <td>2025-03-01</td>
            <td>John Doe</td>
            <td>500ml</td>
            <td>XYZ Camp</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DonationHistory;

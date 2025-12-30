import React from "react";
import "./NewContracts.css";

const NewContract = () => {
  return (
    <div className="page-wrapper">
      {/* Top Yellow Header */}
      <div className="top-bar">
        <span className="top-title">New Contract</span>
        <div className="top-actions">
          <button className="btn cancel">Cancel</button>
          <button className="btn primary">Save and Continue</button>
        </div>
      </div>

      {/* Form Card */}
      <div className="form-card">
        <h3 className="section-title">Basic Details</h3>

        <div className="form-grid">
          {/* Contract Type */}
          <div className="form-group">
            <label>Contract Type</label>
            <select>
              <option>Select</option>
            </select>
          </div>

          <div></div>

          {/* Title */}
          <div className="form-group full">
            <label>Title</label>
            <input type="text" />
          </div>

          {/* Description */}
          <div className="form-group full">
            <label>Description (Optional)</label>
            <textarea rows="3"></textarea>
          </div>

          {/* Requester Name */}
          <div className="form-group">
            <label>Requester Name (Optional)</label>
            <input type="text" />
          </div>

          {/* Requester Department */}
          <div className="form-group">
            <label>Requester Department (Optional)</label>
            <select>
              <option>Select</option>
            </select>
          </div>

          {/* Counterparty Name */}
          <div className="form-group">
            <label>Counterparty Name</label>
            <select>
              <option>Select</option>
              <option>Add New Counterparty</option>
            </select>
          </div>

          {/* Counterparty Primary Contact */}
          <div className="form-group">
            <label>Counterparty Primary Contact</label>
            <select>
              <option>Select</option>
            </select>
          </div>

          {/* Contract Term */}
          <div className="form-group">
            <label>Contract Term</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="term" defaultChecked />
                Definite
              </label>
              <label>
                <input type="radio" name="term" />
                Indefinite
              </label>
            </div>
          </div>

          <div></div>

          {/* Contract Effective Date */}
          <div className="form-group">
            <label>Contract Effective Date</label>
            <input type="date" />
          </div>

          {/* Contract End Date */}
          <div className="form-group">
            <label>Contract End Date</label>
            <input type="date" />
          </div>

          {/* Termination Notice */}
          <div className="form-group">
            <label>Termination Notice Period (Optional)</label>
            <div className="input-suffix">
              <input type="number" />
              <span>Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContract;
import React from 'react';
import { FileText, Download } from 'lucide-react';
import './LeavePolicy.css'; // Importing the CSS file

export default function LeavePolicy() {
  const policies = [
    {
      title: 'General Leave Policy',
      description: 'Comprehensive guide covering Casual leaves, Sick leaves, and Comp-off leaves policies.',
      fileName: 'general_leave_policy.pdf',
      lastUpdated: 'March 1, 2024'
    },
    {
      title: 'Leave Carry Forward Policy',
      description: 'Guidelines for carrying forward unused leave balance to the next year.',
      fileName: 'leave_carry_forward_policy.pdf',
      lastUpdated: 'March 1, 2024'
    },
    {
      title: 'Maternity Leave Policy',
      description: 'Detailed information about maternity leave benefits and eligibility.',
      fileName: 'maternity_leave_policy.pdf',
      lastUpdated: 'March 1, 2024'
    },
    {
      title: 'Paternity Leave Policy',
      description: 'Information about paternity leave benefits and eligibility criteria.',
      fileName: 'paternity_leave_policy.pdf',
      lastUpdated: 'March 1, 2024'
    }
  ];

  return (
    <div className="leave-policy-container">
      <h2 className="leave-policy-header">Leave Policies</h2>

      {/* Policy Cards Grid */}
      <div className="leave-policy-grid">
        {policies.map((policy) => (
          <div key={policy.title} className="policy-card">
            <div className="policy-header">
              <div className="policy-info">
                <h3 className="policy-title">{policy.title}</h3>
                <p className="policy-description">{policy.description}</p>
                <p className="policy-last-updated">Last updated: {policy.lastUpdated}</p>
              </div>
              <div className="policy-icon">
                <FileText className="icon" />
              </div>
            </div>
            <div className="policy-footer">
              <button className="download-btn">
                <Download className="download-icon" />
                Download Policy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Reference Section */}
      <div className="quick-reference-section">
        <h3 className="quick-reference-title">Quick Reference Guide</h3>
        <div className="quick-reference-grid">
          <div className="quick-reference-item">
            <h4 className="quick-reference-subtitle">Casual Leave (CL)</h4>
            <p className="quick-reference-details">12 days per year</p>
            <ul className="quick-reference-list">
              <li>Maximum 3 days at once</li>
              <li>Prior approval required</li>
            </ul>
          </div>
          <div className="quick-reference-item">
            <h4 className="quick-reference-subtitle">Sick Leave (SL)</h4>
            <p className="quick-reference-details">12 days per year</p>
            <ul className="quick-reference-list">
              <li>Medical certificate required for 3+ days</li>
              <li>Can be taken in emergency</li>
            </ul>
          </div>
          <div className="quick-reference-item">
            <h4 className="quick-reference-subtitle">Comp-Off</h4>
            <p className="quick-reference-details">Based on extra work days</p>
            <ul className="quick-reference-list">
              <li>Must be utilized within 30 days</li>
              <li>Manager approval needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

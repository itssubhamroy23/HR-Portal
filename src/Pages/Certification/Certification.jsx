// import React, { useState } from 'react';
// import { format } from 'date-fns';
// import { FaAward, FaCalendarAlt, FaEye, FaUpload, FaTimes } from 'react-icons/fa';
// import './Certification.css';

// const CertificationsPage = () => {
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   const mockCertifications = [
//     {
//       id: '1',
//       name: 'AWS Solutions Architect',
//       issuer: 'Amazon Web Services',
//       type: 'Technical',
//       issue_date: '2024-03-01',
//       expiry_date: '2025-03-01',
//       certificate_file: 'https://example.com/cert1.pdf',
//       badge_visibility: true,
//     },
//     {
//       id: '2',
//       name: 'Scrum Master',
//       issuer: 'Scrum Alliance',
//       type: 'Management',
//       issue_date: '2024-02-15',
//       expiry_date: undefined,
//       certificate_file: 'https://example.com/cert2.pdf',
//       badge_visibility: true,
//     },
//   ];

//   return (
//     <div className="cert-page-container">
//       <div className="cert-page-header">
//         <h2>Certifications & Badges</h2>
//         <button className="cert-upload-btn" onClick={() => setShowUploadModal(true)}>
//           <FaUpload /> Upload Certificate
//         </button>
//       </div>

//       <div className="cert-grid">
//         {mockCertifications.map((cert) => (
//           <div key={cert.id} className="cert-card">
//             <div className="cert-card-header">
//               <h3>{cert.name}</h3>
//               <FaAward className={`cert-badge ${cert.badge_visibility ? 'visible' : 'hidden'}`} />
//             </div>
//             <p className="cert-issuer">{cert.issuer}</p>
//             <div className="cert-dates">
//               <span><FaCalendarAlt /> Issued: {format(new Date(cert.issue_date), 'dd MMM yyyy')}</span>
//               {cert.expiry_date && <span><FaCalendarAlt /> Expires: {format(new Date(cert.expiry_date), 'dd MMM yyyy')}</span>}
//             </div>
//             <button className="cert-view-btn" onClick={() => setSelectedCertificate(cert)}>
//               <FaEye /> View Certificate
//             </button>
//           </div>
//         ))}
//       </div>

//       {showUploadModal && (
//         <div className="cert-modal-overlay">
//           <div className="cert-modal-content">
//             <div className="cert-modal-header">
//               <h3>Upload New Certification</h3>
//               <button className="cert-close-btn" onClick={() => setShowUploadModal(false)}>
//                 <FaTimes />
//               </button>
//             </div>
//             <form>
//               <div className="cert-input-group">
//                 <label>Certification Name</label>
//                 <input type="text" placeholder="Enter certification name" required />
//               </div>

//               <div className="cert-input-row">
//                 <div className="cert-input-group">
//                   <label>Issue Date</label>
//                   <input type="date" required />
//                 </div>
//                 <div className="cert-input-group">
//                   <label>Expiry Date (Optional)</label>
//                   <input type="date" />
//                 </div>
//               </div>

//               <div className="cert-file-upload">
//                 <label className="cert-file-label">
//                   <FaUpload /> Upload Certificate File
//                   <input type="file" />
//                 </label>
//                 <p>Accepted formats: PDF, PNG, JPG (Max 10MB)</p>
//               </div>

//               <div className="cert-checkbox">
//                 <input type="checkbox" defaultChecked />
//                 <label>Make badge visible in public profile</label>
//               </div>

//               <div className="cert-modal-actions">
//                 <button type="button" className="cert-cancel-btn" onClick={() => setShowUploadModal(false)}>Cancel</button>
//                 <button type="submit" className="cert-submit-btn">Upload</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CertificationsPage;







import React, { useState } from 'react';
import {
  Award,
  Calendar,
  Upload,
  X,
  Eye,
  Download,
  Clock
} from 'lucide-react';
import './Certification.css';

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const certificates = [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issueDate: '2024-01-15',
      expiryDate: '2027-01-15',
      fileUrl: 'https://example.com/cert1.pdf',
      status: 'active',
      badgeUrl: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png'
    },
    {
      id: '2',
      name: 'Microsoft Azure Administrator',
      issueDate: '2023-12-01',
      expiryDate: '2024-12-01',
      fileUrl: 'https://example.com/cert2.pdf',
      status: 'active',
      badgeUrl: 'https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png'
    },
    {
      id: '3',
      name: 'Google Cloud Professional Developer',
      issueDate: '2023-06-15',
      expiryDate: '2024-04-15',
      fileUrl: 'https://example.com/cert3.pdf',
      status: 'expiring-soon',
      badgeUrl: 'https://images.credly.com/size/340x340/images/519a6dba-f145-4c1a-85a2-1d173d6898d9/image.png'
    }
  ];

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setIsUploading(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadProgress(0);
        }
      }, 300);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'cert-status-active';
      case 'expired':
        return 'cert-status-expired';
      case 'expiring-soon':
        return 'cert-status-expiring';
      default:
        return 'cert-status-default';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'expired':
        return 'Expired';
      case 'expiring-soon':
        return 'Expiring Soon';
      default:
        return status;
    }
  };

  return (
    <div className="cert-container">
      <div className="cert-header">
        <div>
          <h1 className="cert-title">Certifications & Badges</h1>
          <p className="cert-subtitle">Manage and showcase your professional certifications</p>
        </div>
        <label className="cert-upload-btn">
          <Upload className="cert-icon" />
          <span>Upload Certificate</span>
          <input
            type="file"
            className="cert-hidden-input"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      {isUploading && (
        <div className="cert-progress-container">
          <div className="cert-progress-header">
            <span>Uploading certificate...</span>
            <span>{uploadProgress}%</span>
          </div>
          <div className="cert-progress-bar">
            <div
              className="cert-progress-fill"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-card-header">
              <div>
                <h3 className="cert-card-title">{cert.name}</h3>
                <div className="cert-dates">
                  <div className="cert-date-item">
                    <Calendar className="cert-icon" />
                    <span>Issued: {new Date(cert.issueDate).toLocaleDateString()}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="cert-date-item">
                      <Clock className="cert-icon" />
                      <span>Expires: {new Date(cert.expiryDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
              {cert.badgeUrl && (
                <img
                  src={cert.badgeUrl}
                  alt="Certificate Badge"
                  className="cert-badge"
                />
              )}
            </div>

            <div className="cert-card-footer">
              <span className={`cert-status ${getStatusColor(cert.status)}`}>
                {getStatusText(cert.status)}
              </span>
              <div className="cert-actions">
                <button
                  onClick={() => {
                    setSelectedCertificate(cert);
                    setIsModalOpen(true);
                  }}
                  className="cert-action-btn"
                >
                  <Eye className="cert-icon" />
                </button>
                <a
                  href={cert.fileUrl}
                  download
                  className="cert-action-btn"
                >
                  <Download className="cert-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCertificate && (
        <div className="cert-modal-overlay">
          <div className="cert-modal">
            <div className="cert-modal-content">
              <div className="cert-modal-header">
                <div>
                  <h3 className="cert-modal-title">{selectedCertificate.name}</h3>
                  <p className="cert-modal-subtitle">
                    Issued on {new Date(selectedCertificate.issueDate).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="cert-close-btn"
                >
                  <X className="cert-icon" />
                </button>
              </div>

              <div className="cert-preview">
                <Award className="cert-preview-icon" />
                <p>Certificate Preview</p>
              </div>

              <div className="cert-modal-footer">
                <div className="cert-badge-section">
                  {selectedCertificate.badgeUrl && (
                    <img
                      src={selectedCertificate.badgeUrl}
                      alt="Digital Badge"
                      className="cert-modal-badge"
                    />
                  )}
                  <div>
                    <p className="cert-badge-title">Digital Badge</p>
                    <p className="cert-badge-subtitle">Share your achievement</p>
                  </div>
                </div>
                <a
                  href={selectedCertificate.fileUrl}
                  download
                  className="cert-download-btn"
                >
                  <Download className="cert-icon" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
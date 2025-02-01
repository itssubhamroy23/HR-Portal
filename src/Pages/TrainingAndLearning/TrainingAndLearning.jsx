import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle, Clock } from 'lucide-react';
import './TrainingAndLearning.css'; // Importing the CSS file

export default function Training() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  const trainingPrograms = [
    {
      id: '1',
      name: 'Advanced React Development',
      trainer: 'John Smith',
      mode: 'Online',
      startDate: '2024-03-15',
      endDate: '2024-04-15',
      duration: '4 weeks',
      sessionTiming: '10:00 AM - 12:00 PM',
      status: 'In Progress',
      progress: 45,
      description: 'Master advanced React concepts and best practices'
    },
    {
      id: '2',
      name: 'Leadership Skills Workshop',
      trainer: 'Sarah Johnson',
      mode: 'Offline',
      startDate: '2024-03-20',
      endDate: '2024-03-25',
      duration: '5 days',
      sessionTiming: '2:00 PM - 4:00 PM',
      status: 'Not Started',
      progress: 0,
      description: 'Develop essential leadership and management skills'
    },
    {
      id: '3',
      name: 'Cloud Computing Fundamentals',
      trainer: 'Mike Wilson',
      mode: 'Online',
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      duration: '4 weeks',
      sessionTiming: '3:00 PM - 5:00 PM',
      status: 'Completed',
      progress: 100,
      description: 'Introduction to cloud computing concepts and practices'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600';
      case 'In Progress':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'In Progress':
        return <Play className="w-5 h-5 text-blue-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const filteredPrograms = trainingPrograms.filter(program =>
    activeTab === 'active'
      ? program.status !== 'Completed'
      : program.status === 'Completed'
  );

  return (
    <div className="training-container">
      <div className="header">
        <div>
          <h1 className="title">Training & Learning</h1>
          <p className="subtitle">Enhance your skills with our training programs</p>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-info">
            <p className="stat-label">Active Trainings</p>
            <p className="stat-number">
              {trainingPrograms.filter(p => p.status === 'In Progress').length}
            </p>
          </div>
          <div className="stat-icon">
            <Play className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <p className="stat-label">Completed Trainings</p>
            <p className="stat-number">
              {trainingPrograms.filter(p => p.status === 'Completed').length}
            </p>
          </div>
          <div className="stat-icon">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <p className="stat-label">Upcoming Trainings</p>
            <p className="stat-number">
              {trainingPrograms.filter(p => p.status === 'Not Started').length}
            </p>
          </div>
          <div className="stat-icon">
            <Clock className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

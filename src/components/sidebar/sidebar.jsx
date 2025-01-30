import React, { useState } from 'react';
import './sidebar.css';
import { BarChart3, Calendar, Users, Clock, GraduationCap, Award, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // Ensure activeTab is set here

  const navigation = [
    { name: 'Dashboard', icon: BarChart3, id: 'dashboard', path: '/' },
    { name: 'Attendance', icon: Clock, id: 'attendance', path: '/attendance' },
    { name: 'Employee Database', icon: Users, id: 'attendance', path: '/employee/personal' },
    { name: 'Leave Management', icon: Calendar, id: 'leave', path: '/leave-management' },
    { name: 'Training and Learning', icon: GraduationCap, id: 'training', path: '/training' },
    { name: 'Certification and Badges', icon: Award, id: 'certification', path: '/certification' },
    { name: 'Settings', icon: Settings, id: 'settings', path: '/settings' },
  ];

  return (
    <div className="sidebar-container">
      <nav className="sidebar-nav">
        {navigation.map((item) => (
          <Link key={item.id} to={item.path} onClick={() => setActiveTab(item.id)} className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}>
            <item.icon className="sidebar-icon" />
            {item.name}
          </Link>
        ))}
      </nav>
      
      <footer className="sidebar-footer">
        Designed and developed by <b>Galvinus India Pvt Ltd</b>
      </footer>
    </div>
  );
};

export default Sidebar;

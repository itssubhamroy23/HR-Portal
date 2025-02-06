import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import LeaveManagement from './Pages/LeaveManagement/LeaveManagement';
import Attendance from './Pages/Attendance/Attendance';
import Training from './Pages/TrainingAndLearning/TrainingAndLearning'
import Certification from './Pages/Certification/Certification'
import Settings from './Pages/Settings/Settings'
import EmployeeLayout from './Pages/Employee/EmployeeLayout/EmployeeLayout';
import PersonalDetails from './Pages/Employee/PersonalDetails/PersonalDetails';
import EmploymentDetails from './Pages/Employee/EmployementDetails/EmployementDetails';
import BankDetails from './Pages/Employee/BankDetails/BankDetails';
import LeaveHistory from './Pages/LeaveManagement/LeaveHistory/LeaveHistory';
import LeavePolicy from './Pages/LeaveManagement/LeavePolicy/LeavePolicy';
import RequestLeave from './Pages/LeaveManagement/RequestLeave/RequestLeave'
import AttendanceTracker from './Pages/Attendance/AttendanceTracker/AttendanceTracker';
import AttendanceDashboard from './Pages/Attendance/AttendanceDashboard/AttendanceDashboard';
import TrainingDetails from './Pages/TrainingAndLearning/TrainingDetails/TrainingDetails';
import AddBankDetails from './Pages/Test/BankDetails';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/demo" element={<AddBankDetails />} />
          <Route path="/leave-management/request-leave" element={<RequestLeave />} />
          <Route path="/leave-management/leave-history" element={<LeaveHistory />} />
          <Route path="/leave-management/leave-policy" element={<LeavePolicy />} />
          <Route path="/attendance" element={<Attendance />}>
            <Route path="tracker" element={<AttendanceTracker />} />
            <Route path="dashboard" element={<AttendanceDashboard />} />
          </Route>
          <Route path="/training" element={<Training />} />
          <Route path="/training/:id" element={<TrainingDetails />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/employee" element={<EmployeeLayout />}>
            <Route path="personal" element={<PersonalDetails />} />
            <Route path="employment" element={<EmploymentDetails />} />
            <Route path="bank" element={<BankDetails />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

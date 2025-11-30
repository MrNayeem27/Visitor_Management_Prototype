import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import BuildingWelcome from './pages/BuildingWelcome';
import VisitType from './pages/VisitType';
import FindAppointment from './pages/FindAppointment';
import WalkInCheckIn from './pages/WalkInCheckIn';
import CheckInConfirmation from './pages/CheckInConfirmation';
import Dashboard from './pages/Dashboard';
import VisitorDetails from './pages/VisitorDetails';
import UserManagement from './pages/UserManagement';
import AddNewUser from './pages/AddNewUser';
import AuditLog from './pages/AuditLog';
import CompanySettings from './pages/CompanySettings';
import CompanyManagement from './pages/CompanyManagement';
import AddNewCompany from './pages/AddNewCompany';
import CreatePreRegistration from './pages/CreatePreRegistration';
import VisitConfirmation from './pages/VisitConfirmation';
import FeedbackForm from './pages/FeedbackForm';
import FeedbackSubmitted from './pages/FeedbackSubmitted';
import AdminLogin from './pages/AdminLogin';

import AdminLayout from './components/admin/AdminLayout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Entry Point */}
        <Route path="/" element={<LandingPage />} />

        {/* Visitor Flow */}
        <Route path="/welcome" element={<BuildingWelcome />} />
        <Route path="/visit-type" element={<VisitType />} />
        <Route path="/find-appointment" element={<FindAppointment />} />
        <Route path="/walk-in-checkin" element={<WalkInCheckIn />} />
        <Route path="/checkin-confirmation" element={<CheckInConfirmation />} />
        <Route path="/visit-confirmed" element={<VisitConfirmation />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/feedback-submitted" element={<FeedbackSubmitted />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Flow */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="visitor-details/:id" element={<VisitorDetails />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="add-user" element={<AddNewUser />} />
          <Route path="audit-log" element={<AuditLog />} />
          <Route path="company-settings" element={<CompanySettings />} />
          <Route path="company-management" element={<CompanyManagement />} />
          <Route path="add-company" element={<AddNewCompany />} />
          <Route path="pre-registration" element={<CreatePreRegistration />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
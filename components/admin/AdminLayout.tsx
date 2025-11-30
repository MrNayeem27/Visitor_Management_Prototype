
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex h-full w-full">
        <Sidebar />
        <main className="flex-1 lg:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

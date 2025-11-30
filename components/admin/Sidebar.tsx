
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { path: '/admin/pre-registration', icon: 'event', label: 'Appointments' },
  { path: '/admin/audit-log', icon: 'book', label: 'Visitor Log' },
  { path: '#', icon: 'rate_review', label: 'Feedback' },
  { path: '/admin/user-management', icon: 'manage_accounts', label: 'Users' },
  { path: '/admin/company-management', icon: 'apartment', label: 'Companies' },
  { path: '/admin/company-settings', icon: 'settings', label: 'Settings' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isLinkActive = (path: string) => {
      if(path === '/admin/dashboard') {
          return location.pathname === path;
      }
      return location.pathname.startsWith(path) && path !== '#';
  }

  return (
    <aside className="fixed hidden h-full min-h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40 lg:flex">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-2">
          <img src="./public/assets/img/logo/cadd_centre_logo.svg" alt="" />
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isLinkActive(item.path)
                  ? 'bg-primary/20 text-primary'
                  : 'text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isLinkActive(item.path) ? "'FILL' 1" : "" }}>{item.icon}</span>
              <p className="text-sm font-medium leading-normal">{item.label}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3 border-t border-gray-200 dark:border-slate-800 pt-4">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp")' }}></div>
        <div className="flex flex-col">
          <h1 className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Anish</h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">InventivoGT Front Desk</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

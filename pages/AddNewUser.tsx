import React from 'react';
import { Link } from 'react-router-dom';

const AddNewUser: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Add New User</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Fill in the details below to create a new user account.</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-background-dark">
          <form action="#" className="space-y-6" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="flex flex-col">
                <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Full Name</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500" placeholder="Enter user's full name" type="text" />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Email Address</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500" placeholder="e.g., user@company.com" type="email" />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Password</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500" placeholder="Enter password" type="password" />
                </label>
              </div>
              <div>
                <label className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Confirm Password</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500" placeholder="Re-enter password" type="password" />
                </label>
              </div>
            </div>
            <div>
              <label className="flex flex-col">
                <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Role</p>
                <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                  <option>Front Desk / Receptionist</option>
                  <option>Office Manager / Administrator</option>
                  <option>Employee</option>
                </select>
              </label>
            </div>
            <div className="flex items-center justify-end gap-3 pt-4">
              <Link to="/admin/user-management" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 text-slate-700 text-sm font-bold leading-normal tracking-wide hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                <span className="truncate">Cancel</span>
              </Link>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90" type="submit">
                <span className="truncate">Save User</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;

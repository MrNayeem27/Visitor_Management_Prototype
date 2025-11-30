import React from 'react';
import { Link } from 'react-router-dom';

const AddNewCompany: React.FC = () => {
    return (
        <main className="flex-1 p-6 lg:p-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-between gap-3 mb-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-charcoal-gray dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Add New Company</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Fill in the details below to create a new company profile in the system.</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 lg:p-8">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-charcoal-gray dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] border-b border-border-gray-light dark:border-slate-700 pb-3">Company Information</h3>
                                <label className="flex flex-col w-full">
                                    <p className="text-charcoal-gray dark:text-slate-200 text-base font-medium leading-normal pb-2">Company Name <span className="text-error-red">*</span></p>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal-gray dark:text-white bg-white dark:bg-slate-800 focus:outline-0 focus:ring-2 focus:ring-action-blue/50 border border-border-gray-light dark:border-slate-700 h-12 placeholder:text-slate-400 p-3 text-base font-normal leading-normal" placeholder="Enter the company's legal name" required/>
                                </label>
                                <label className="flex flex-col w-full">
                                    <p className="text-charcoal-gray dark:text-slate-200 text-base font-medium leading-normal pb-2">Company Address</p>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal-gray dark:text-white bg-white dark:bg-slate-800 focus:outline-0 focus:ring-2 focus:ring-action-blue/50 border border-border-gray-light dark:border-slate-700 h-12 placeholder:text-slate-400 p-3 text-base font-normal leading-normal" placeholder="e.g., 123 Main St, Anytown, USA"/>
                                </label>
                            </div>
                            <div className="flex flex-col gap-6">
                                <h3 className="text-charcoal-gray dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] border-b border-border-gray-light dark:border-slate-700 pb-3">Create First Administrator</h3>
                                <label className="flex flex-col w-full">
                                    <p className="text-charcoal-gray dark:text-slate-200 text-base font-medium leading-normal pb-2">Administrator Full Name</p>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal-gray dark:text-white bg-white dark:bg-slate-800 focus:outline-0 focus:ring-2 focus:ring-action-blue/50 border border-border-gray-light dark:border-slate-700 h-12 placeholder:text-slate-400 p-3 text-base font-normal leading-normal" placeholder="e.g., Jane Doe"/>
                                </label>
                                <label className="flex flex-col w-full">
                                    <p className="text-charcoal-gray dark:text-slate-200 text-base font-medium leading-normal pb-2">Administrator Email</p>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal-gray dark:text-white bg-white dark:bg-slate-800 focus:outline-0 focus:ring-2 focus:ring-action-blue/50 border border-border-gray-light dark:border-slate-700 h-12 placeholder:text-slate-400 p-3 text-base font-normal leading-normal" placeholder="e.g., jane.doe@company.com" type="email"/>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">An invitation to set up their account will be sent to this email.</p>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-4 mt-8 pt-6 border-t border-border-gray-light dark:border-slate-700">
                            <Link to="/admin/company-management" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-transparent text-charcoal-gray dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-100 dark:hover:bg-slate-800">
                                <span className="truncate">Cancel</span>
                            </Link>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90" type="submit">
                                <span className="truncate">Create Company</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddNewCompany;

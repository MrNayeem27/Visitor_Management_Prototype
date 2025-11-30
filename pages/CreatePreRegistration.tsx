import React, { useState } from 'react';

const CreatePreRegistration: React.FC = () => {
    const [linkGenerated, setLinkGenerated] = useState(false);

    const handleGenerateLink = (e: React.FormEvent) => {
        e.preventDefault();
        setLinkGenerated(true);
    };

    const handleCreateAnother = () => {
        setLinkGenerated(false);
    };

    return (
        <main className="flex-1 p-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-black leading-tight tracking-tight text-[#111418] dark:text-white">Create Pre-registration Link</h1>
                    <p className="text-base font-normal leading-normal text-[#617589] dark:text-gray-400">Fill in the details below to generate a unique registration link for your visitor.</p>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 shadow-sm">
                    <form className="grid grid-cols-1 gap-6 sm:grid-cols-2" onSubmit={handleGenerateLink}>
                        <div className="sm:col-span-2">
                            <label className="flex flex-col">
                                <p className="pb-2 text-sm font-medium leading-normal text-[#111418] dark:text-gray-300">Visitor's Full Name</p>
                                <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="e.g., Jane Doe" type="text"/>
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="flex flex-col">
                                <p className="pb-2 text-sm font-medium leading-normal text-[#111418] dark:text-gray-300">Visitor's Email Address</p>
                                <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="e.g., jane.doe@example.com" type="email"/>
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="flex flex-col">
                                <p className="pb-2 text-sm font-medium leading-normal text-[#111418] dark:text-gray-300">Employee to Meet</p>
                                <select className="form-select flex h-12 w-full min-w-0 flex-1 appearance-none resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary">
                                    <option disabled value="">Search or select an employee</option>
                                    <option value="john-smith">John Smith (Marketing)</option>
                                    <option value="emily-jones">Emily Jones (Engineering)</option>
                                    <option value="michael-clark">Michael Clark (Sales)</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="pb-2 text-sm font-medium leading-normal text-[#111418] dark:text-gray-300">Appointment Date</p>
                                <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" type="date"/>
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="pb-2 text-sm font-medium leading-normal text-[#111418] dark:text-gray-300">Appointment Time</p>
                                <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" type="time"/>
                            </label>
                        </div>
                        <div className="sm:col-span-2 mt-4">
                            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary h-12 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                <span className="material-symbols-outlined">link</span>
                                Generate Pre-registration Link
                            </button>
                        </div>
                    </form>
                </div>
                {linkGenerated && (
                    <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 shadow-sm">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-base font-semibold text-[#111418] dark:text-white">Link Successfully Generated!</h3>
                                    <p className="text-sm text-[#617589] dark:text-gray-400">Share this link with your visitor.</p>
                                </div>
                            </div>
                            <div className="relative">
                                <input className="form-input w-full rounded-lg border border-[#dbe0e6] bg-gray-50 h-12 pr-12 p-3 text-sm text-[#617589] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400" readOnly value="https://ourvisitors.com/reg/a1b2-c3d4-e5f6"/>
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center justify-center rounded-r-lg px-3 text-[#617589] transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400" title="Copy Link">
                                    <span className="material-symbols-outlined">content_copy</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 h-12 px-6 text-base font-semibold text-[#111418] dark:text-white shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                    <span className="material-symbols-outlined">email</span>
                                    Send Email Invitation
                                </button>
                                <button onClick={handleCreateAnother} type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-transparent h-12 px-6 text-base font-semibold text-primary dark:text-primary transition-colors hover:bg-primary/10 dark:hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                    Create Another Link
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CreatePreRegistration;

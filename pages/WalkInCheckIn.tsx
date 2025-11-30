
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WalkInCheckIn: React.FC = () => {
    const [purpose, setPurpose] = useState('');

    const handlePurposeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPurpose(e.target.value);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
            {/* <div className="absolute top-6 right-6">
                <div className="relative">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700" type="button">
                        <span className="material-symbols-outlined text-lg">language</span>
                        <span>English (US)</span>
                        <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                </div>
            </div> */}
            <div className="w-full max-w-2xl">
                {/* <header className="mb-8 flex flex-col items-center justify-center gap-4 text-center">
                    <div className="size-16 text-primary">
                      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6_319)">
                          <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                          </g>
                      </svg>
                    </div>
                    <h1 className="text-[#111827] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">GigaCorp Tower</h1>
                </header> */}
                <div className="w-full rounded-xl bg-white dark:bg-gray-800/50 shadow-sm border border-gray-200 dark:border-gray-700/50 p-6 sm:p-8 md:p-10">
                    <div className="mb-8 text-center">
                        <h2 className="text-[#111827] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Visitor Check-In</h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Please fill out the form below to proceed.</p>
                    </div>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col">
                            <label htmlFor="fullName" className="text-[#111827] dark:text-white text-base font-medium leading-normal pb-2">Full Name <span className="text-red-500">*</span></label>
                            <input id="fullName" type="text" placeholder="e.g., John Doe" required className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111827] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-colors duration-200" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="mobileNumber" className="text-[#111827] dark:text-white text-base font-medium leading-normal pb-2">Mobile Number <span className="text-red-500">*</span></label>
                            <input id="mobileNumber" type="tel" placeholder="For SMS notifications" required className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111827] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-colors duration-200" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="purpose" className="text-[#111827] dark:text-white text-base font-medium leading-normal pb-2">Purpose of Visit <span className="text-red-500">*</span></label>
                            <select id="purpose" required onChange={handlePurposeChange} value={purpose} className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111827] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-colors duration-200 appearance-none bg-no-repeat bg-right-3 bg-center" style={{backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(97,117,137)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48-48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')"}} >
                                <option value="" disabled>Select a purpose</option>
                                <option value="Interview">Interview</option>
                                <option value="Course Enquiry">Course Enquiry</option>
                                <option value="Business Meeting">Business Meeting</option>
                                <option value="Delivery/Courier">Delivery/Courier</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {purpose === 'Other' && (
                            <div className="flex flex-col">
                                <label htmlFor="otherPurpose" className="text-[#111827] dark:text-white text-base font-medium leading-normal pb-2">If Other, please specify</label>
                                <input id="otherPurpose" type="text" placeholder="Please specify your purpose" className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111827] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-colors duration-200" />
                            </div>
                        )}
                        
                        <div className="relative flex flex-col">
                            <label htmlFor="personToMeet" className="text-[#111827] dark:text-white text-base font-medium leading-normal pb-2">Person to Meet (Optional)</label>
                            <div className="relative">
                                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                <input id="personToMeet" type="text" placeholder="Search by name..." className="pl-11 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111827] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-colors duration-200" />
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700/50 my-2"></div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#111827] dark:text-white mb-2">Visitor Photo (Optional)</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">A photo helps your host identify you easily.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-start gap-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 bg-gray-50 dark:bg-gray-900/40">
                                <div className="flex-shrink-0">
                                    <div className="size-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                        <span className="material-symbols-outlined text-5xl text-gray-400 dark:text-gray-500">person</span>
                                    </div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">Capture a clear photo of your face.</p>
                                    <button type="button" className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 dark:bg-primary/20 px-5 py-2.5 text-base font-semibold text-primary dark:text-primary-300 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                                        <span className="material-symbols-outlined">photo_camera</span>
                                        <span>Take Photo</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link to="/checkin-confirmation" className="w-full flex items-center justify-center rounded-lg bg-primary px-6 py-4 text-lg font-bold text-white shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark">
                                Check-In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WalkInCheckIn;

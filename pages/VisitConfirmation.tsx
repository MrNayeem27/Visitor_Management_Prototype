import React from 'react';
import { Link } from 'react-router-dom';

const VisitConfirmation: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col">
                <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col w-full max-w-lg flex-1">
                        <div className="flex flex-col items-center justify-center p-4 text-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success dark:bg-success/20">
                                <span className="material-symbols-outlined !text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <p className="text-[#111418] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Your Visit is Confirmed!</p>
                            <p className="text-[#617589] dark:text-slate-400 text-base font-normal leading-normal">Thank you for pre-registering, Alex Johnson.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm my-4">
                            <div className="p-4 sm:p-6 grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6">
                                <p className="text-[#617589] dark:text-slate-400 text-sm font-normal leading-normal py-5 border-b border-b-slate-200 dark:border-b-slate-700">Who</p>
                                <p className="text-[#111418] dark:text-white text-sm font-normal leading-normal py-5 border-b border-b-slate-200 dark:border-b-slate-700">Maria Rodriguez</p>
                                
                                <p className="text-[#617589] dark:text-slate-400 text-sm font-normal leading-normal py-5 border-b border-b-slate-200 dark:border-b-slate-700">Where</p>
                                <p className="text-[#111418] dark:text-white text-sm font-normal leading-normal py-5 border-b border-b-slate-200 dark:border-b-slate-700">Innovatech Solutions, 123 Tech Avenue</p>
                                
                                <p className="text-[#617589] dark:text-slate-400 text-sm font-normal leading-normal pt-5">When</p>
                                <p className="text-[#111418] dark:text-white text-sm font-normal leading-normal pt-5">October 26, 2024, 10:30 AM</p>
                            </div>
                        </div>
                        <p className="text-[#111418] dark:text-slate-300 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                            When you arrive, please proceed to the main reception and let them know you have pre-registered for a quick and easy check-in.
                        </p>
                        <div className="flex justify-center mt-4">
                            <div className="flex w-full flex-1 gap-3 max-w-md flex-col items-stretch px-4 py-3">
                                <button type="button" className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-success text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-green-700">
                                    <span className="material-symbols-outlined">calendar_add_on</span>
                                    <span className="truncate">Add to Calendar</span>
                                </button>
                                <button type="button" className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-slate-200 dark:bg-slate-700 text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-slate-300 dark:hover:bg-slate-600">
                                    <span className="material-symbols-outlined">directions</span>
                                    <span className="truncate">Get Directions</span>
                                </button>
                            </div>
                        </div>
                        <footer className="mt-8 text-center p-4">
                            <Link to="/" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Innovatech Solutions Home</Link>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitConfirmation;


import React from 'react';
import { Link } from 'react-router-dom';

const VisitType: React.FC = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5 sm:px-6 md:px-10 lg:px-20 xl:px-40">
                    <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-6 sm:px-8 md:px-10 py-4">
                            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
                                <img src="./public/assets/img/logo/cadd_centre_logo.svg" alt="" />
                            </div>
                        </header>
                        <main className="flex flex-col flex-1 justify-center items-center text-center p-4">
                            <div className="w-full max-w-lg">
                                <div className="flex flex-wrap justify-center gap-3 py-10">
                                    <div className="flex w-full flex-col gap-3">
                                        <p className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Welcome</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-normal leading-normal">What is the nature of your visit?</p>
                                    </div>
                                </div>
                                <div className="flex w-full justify-center">
                                    <div className="flex flex-1 gap-4 max-w-md flex-col items-stretch px-4 py-3">
                                        <Link to="/find-appointment" className="flex items-center justify-center gap-3 overflow-hidden rounded-lg h-16 px-6 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-primary/90">
                                            <span className="material-symbols-outlined">calendar_month</span>
                                            <span className="truncate">I have an appointment</span>
                                        </Link>
                                        <Link to="/walk-in-checkin" className="flex items-center justify-center gap-3 overflow-hidden rounded-lg h-16 px-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-lg font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-gray-300 dark:hover:bg-gray-700">
                                            <span className="material-symbols-outlined">person</span>
                                            <span className="truncate">I am a walk-in visitor</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="flex flex-col gap-6 px-5 py-10 text-center mt-auto">
                            <div className="flex flex-wrap items-center justify-center gap-6">
                                <a className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-xl">help_outline</span> Help
                                </a>
                                <a className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-xl">language</span> Language
                                </a>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">© 2025 <a href="http://www.versalflow.com/">VersalFlow.</a> All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitType;

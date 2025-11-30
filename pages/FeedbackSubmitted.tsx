import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackSubmitted: React.FC = () => {
    return (
        <div className="flex flex-1 justify-center items-center py-5 px-4">
            <div className="flex flex-col w-full max-w-md flex-1">
                <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                        <span className="material-symbols-outlined text-green-500 dark:text-green-400" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <div className="text-center mb-4">
                        <p className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Thank You!</p>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Your feedback has been successfully submitted.</p>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
                        We appreciate you taking the time to help us improve. We hope you enjoyed your visit.
                    </p>
                    <div className="flex w-full px-4 py-3 justify-center">
                        <Link to="/welcome" className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                            <span className="truncate">Done</span>
                        </Link>
                    </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pt-6 px-4 text-center">Powered by VisitFlow</p>
            </div>
        </div>
    );
};

export default FeedbackSubmitted;
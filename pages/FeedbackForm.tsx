import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeedbackForm: React.FC = () => {
    const [rating, setRating] = useState(4);
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
            <div className="flex flex-col w-full max-w-2xl flex-1">
                <div className="flex w-full justify-center pt-8 pb-10">
                    <div className="w-24 h-24 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaenQImqpJL33_kIgtC6fu1FFkis1iG-Poa2TanPOj5LstcImuxhwzMiJLxZAbPG6yv2opnSOaIkjfe_EXzsDIh4DolLSBCeBeQKWrTBua4EdX-PzhOewCmTPGQCgI3DRxkvVkqc3SBcPbY0ewzGjVUT5RQZWxkFa1SFL2hqYkHgcgpX09RA-u63AHT4FaKAyYWKAOLgyQ8XJ4wMcspDaM4rzo8BQzLtbs-GEbMS1KeKKQSdwPEZmSaIhR98vnNK0cbzw_su1-tA")' }}></div>
                </div>
                <div className="text-center p-4">
                    <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">How was your visit to [Company Name]?</h1>
                    <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">We value your feedback. Please take a moment to rate your experience.</p>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-8 mt-6">
                    <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-left pb-2">How would you rate your overall experience?</h2>
                    <div className="flex flex-wrap gap-2 py-2">
                        {[1, 2, 3, 4, 5].map(star => (
                            <button key={star} onClick={() => setRating(star)} type="button" className="flex items-center justify-center gap-2 p-2 rounded-full hover:bg-primary/10 transition-colors">
                                <span className={`material-symbols-outlined ${star <= rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`} style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>star</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex w-full flex-wrap items-end gap-4 py-3 mt-4">
                        <label className="flex flex-col w-full flex-1">
                            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Comments or Suggestions (Optional)</p>
                            <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary min-h-36 placeholder:text-[#617589] p-4 text-base font-normal leading-normal" placeholder="Tell us what went well or what we could improve..."></textarea>
                        </label>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-3 mt-2">
                        <label htmlFor="contact-toggle" className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="contact-toggle" className="sr-only peer" checked={showContact} onChange={() => setShowContact(!showContact)} />
                            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                        <span className="text-base font-medium text-[#111418] dark:text-white">Would you like to be contacted about your feedback?</span>
                    </div>
                    {showContact && (
                        <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col w-full flex-1">
                                <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
                                <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary placeholder:text-[#617589] p-4 text-base font-normal leading-normal" placeholder="your.email@example.com" type="email"/>
                            </label>
                        </div>
                    )}
                    <div className="px-4 py-3 mt-6">
                        <Link to="/feedback-submitted" className="block w-full text-center bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all">
                            Submit Feedback
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;

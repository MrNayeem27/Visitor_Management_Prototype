import React from 'react';

const CompanySettings: React.FC = () => {
    return (
        <>
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="flex flex-wrap justify-between gap-3 mb-6">
                    <div className="flex min-w-72 flex-col gap-2">
                        <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Company Settings</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Manage branding, notifications, visitor workflow, and security for your company.</p>
                    </div>
                </div>
                <div className="space-y-8">
                    <section className="rounded-xl border border-border-light dark:border-border-dark bg-gray-light dark:bg-gray-dark">
                        <div className="p-6 border-b border-border-light dark:border-border-dark">
                            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em]">Company Branding</h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <label className="flex flex-col">
                                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Company Name</p>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark p-[15px] text-base font-normal leading-normal" placeholder="Enter company name" defaultValue="Innovate Corp"/>
                                </label>
                            </div>
                            <div>
                                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Company Logo</p>
                                <div className="flex items-center gap-4">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16" style={{backgroundImage: 'url("./public/assets/img/logo/inventivogt.png")'}}></div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm">InventivoGT Logo</p>
                                        <div className="flex gap-4 mt-1">
                                            <button type="button" className="text-primary text-sm font-bold">Change</button>
                                            <button type="button" className="text-red-500 text-sm font-bold">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <footer className="sticky bottom-0 flex justify-end gap-3 p-4 border-t border-border-light dark:border-border-dark bg-gray-light dark:bg-gray-dark">
                <button type="button" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-gray-light dark:bg-gray-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal hover:bg-primary/10">
                    <span className="truncate">Cancel</span>
                </button>
                <button type="button" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Save Changes</span>
                </button>
            </footer>
        </>
    );
};

export default CompanySettings;

import React from 'react';
import { Link } from 'react-router-dom';

const details = [
    { label: 'Company', value: 'Innovate Inc.' },
    { label: 'Host Employee', value: 'Marcus Holloway' },
    { label: 'Email', value: 'amelia.chen@example.com' },
    { label: 'Department', value: 'Product Design' },
    { label: 'Phone Number', value: '+1 (555) 123-4567' },
    { label: 'Date & Time', value: 'October 26, 2023 at 10:30 AM' },
    { label: 'Company Visiting', value: 'OurCompany Solutions' },
    { label: 'Reason for Visit', value: 'Client Meeting' },
]

const VisitorDetails: React.FC = () => {
    return (
        <main className="flex flex-1 flex-col h-screen">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-background-dark px-10 py-3 bg-white dark:bg-[#1C2A36]">
                <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Visitor Management</h2>
                </div>
                <div className="hidden lg:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal" to="/admin/dashboard">Dashboard</Link>
                        <Link className="text-primary dark:text-primary text-sm font-bold leading-normal" to="#">Visitors</Link>
                        <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal" to="/admin/company-settings">Settings</Link>
                    </div>
                    <button type="button" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f4] dark:bg-background-dark text-[#111418] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                        <span className="material-symbols-outlined text-[#111418] dark:text-white" style={{ fontSize: '20px' }}>notifications</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9duqr1nlp1mghQKjYPHnq4-6PYu-VSCad6PUdvqqieuyInQKhCM6cD5G3zM1Lu5usiyJJznKduTtwj7eeY97ve4u_NOlpc0qwPB1RjKZZSSEfqtmeF0DKMQyu2JM1tDMAHRGUZx_som1Gu7oTc5-LoapjZYkrXdj-Sh9O6Giny57sX-R4epMTO_yRqH3dSmG3qWIVGjfiZGgG2mfGvoGOlBBqMkuVWy-m05EX25Vvg5xPeWPZw5KlZCPwl-Khfzyhc6_DVGuTmQ")' }}></div>
                </div>
            </header>
            <div className="flex-1 overflow-y-auto p-4 sm:p-10">
                <div className="flex flex-col w-full max-w-[960px] mx-auto flex-1">
                    <div className="flex flex-wrap gap-2 p-4">
                        <Link className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" to="/admin/dashboard">Central Dashboard</Link>
                        <span className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                        <span className="text-[#111418] dark:text-white text-sm font-medium leading-normal">Visitor Details</span>
                    </div>
                    <div className="bg-white dark:bg-[#1C2A36] rounded-xl shadow-sm flex flex-col flex-1">
                        <div className="flex p-4 sm:p-6 border-b border-gray-200 dark:border-background-dark">
                            <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex items-center gap-4">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full shrink-0 size-24" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW8ii20xExaAoJMlDBJY5VS8DCr-km36lLW4Mps5wDHNCF_BBtbh6H4hPEwSAhOaGS4NDWpdy1a8Q_rprzW50qRfV2rRp_wu1Df_nyX8hoeeVBbqc-ZeF2jGTPuX4Otlbfx_eR8tHe_-IBAy-5Y2_g2b-dBjqq1zEjMubqx_cUjL1pzV3OjmCv_rdk-UWzy-R3-wYyBCFuNIJTO9GP7Ir1PXndQBY2Ej1Gf6hkAuJk2TKk8-xccd7wSLFF_9G9J73JzrgusDQ4dw")' }}></div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Amelia Chen</p>
                                        <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">Visitor</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 pr-4 self-start sm:self-center">
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-100 dark:bg-yellow-500/20 px-4">
                                        <p className="text-yellow-800 dark:text-yellow-300 text-sm font-medium leading-normal">Pending Approval</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 flex-1">
                            {details.map((item, index) => (
                                <div key={item.label} className={`flex flex-col gap-1 border-t border-solid border-t-[#dbe0e6] dark:border-t-background-dark py-4 ${index % 2 === 0 ? 'pr-2' : 'sm:pl-2'}`}>
                                    <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal">{item.label}</p>
                                    <p className="text-[#111418] dark:text-white text-sm font-normal leading-normal">{item.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="sticky bottom-0 bg-white/80 dark:bg-[#1c2a36]/80 backdrop-blur-sm mt-auto p-4 sm:p-6 border-t border-gray-200 dark:border-background-dark rounded-b-xl">
                            <div className="flex flex-col sm:flex-row sm:items-end gap-4 w-full">
                                <div className="flex-grow">
                                    <label htmlFor="internal-note" className="flex items-center gap-1.5 mb-1.5 text-sm font-medium text-[#111418] dark:text-gray-300">Add Internal Note</label>
                                    <textarea id="internal-note" name="internal-note" rows={2} placeholder="Add instructions for the front desk..." className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-background-dark dark:text-white focus:border-primary focus:ring-primary text-sm"></textarea>
                                </div>
                                <div className="flex gap-3 sm:w-auto w-full">
                                    <button type="button" className="flex items-center justify-center h-10 px-6 rounded-lg bg-[#dc3545] hover:bg-[#c82333] text-white text-sm font-bold w-full sm:w-auto">Decline</button>
                                    <button type="button" className="flex items-center justify-center h-10 px-6 rounded-lg bg-[#28a745] hover:bg-[#218838] text-white text-sm font-bold w-full sm:w-auto">Accept</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VisitorDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const companies = [
    { name: 'InventivoGT', status: 'Active', dateAdded: '2023-10-26' },
    { name: 'Axle GT', status: 'Active', dateAdded: '2023-09-15' },
    { name: 'VersalFlow', status: 'Inactive', dateAdded: '2023-08-01' },
    { name: 'AM Consultancy', status: 'Active', dateAdded: '2023-07-22' }
];

const CompanyManagement: React.FC = () => {
    return (
        <main className="flex-1 p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Company Management</p>
                    <Link to="/admin/add-company" className="flex h-11 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-primary/90">
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">Add New Company</span>
                    </Link>
                </div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                        <label className="flex h-11 w-full min-w-64 max-w-md flex-col">
                            <div className="flex h-full w-full flex-1 items-stretch rounded-lg bg-content-light dark:bg-content-dark">
                                <div className="flex items-center justify-center pl-4 text-subtext-light dark:text-subtext-dark">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg border-none bg-content-light px-2 py-2 text-sm text-text-light placeholder:text-subtext-light focus:outline-0 focus:ring-0 dark:bg-content-dark dark:text-text-dark dark:placeholder:text-subtext-dark" placeholder="Search by company name..." />
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Filter by:</p>
                        <button type="button" className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-content-light pl-4 pr-2 text-sm font-medium text-text-light shadow-sm dark:bg-content-dark dark:text-text-dark">
                            All Status
                            <span className="material-symbols-outlined text-base">expand_more</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-border-light bg-content-light shadow-sm dark:border-border-dark dark:bg-content-dark">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto divide-y divide-border-light text-sm dark:divide-border-dark">
                            <thead className="bg-background-light dark:bg-background-dark">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Company Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Status</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Date Added</th>
                                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                {companies.map(company => (
                                    <tr key={company.name}>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-text-light dark:text-text-dark">{company.name}</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${company.status === 'Active' ? 'bg-active-green/10 text-active-green' : 'bg-inactive-gray/10 text-inactive-gray'}`}>
                                                <span className={`size-2 rounded-full ${company.status === 'Active' ? 'bg-active-green' : 'bg-inactive-gray'}`}></span>
                                                {company.status}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-subtext-light dark:text-subtext-dark">{company.dateAdded}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                            <button type="button" className="text-subtext-light hover:text-primary dark:text-subtext-dark dark:hover:text-primary">
                                                <span className="material-symbols-outlined">more_horiz</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">Showing <span className="font-medium text-text-light dark:text-text-dark">1</span> to <span className="font-medium text-text-light dark:text-text-dark">4</span> of <span className="font-medium text-text-light dark:text-text-dark">20</span> results</p>
                    <div className="flex items-center gap-2">
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-light bg-content-light text-sm text-text-light hover:bg-background-light dark:border-border-dark dark:bg-content-dark dark:text-text-dark dark:hover:bg-background-dark">
                            <span className="material-symbols-outlined text-base">chevron_left</span>
                        </button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary bg-primary/20 text-sm text-primary">1</button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-light bg-content-light text-sm text-text-light hover:bg-background-light dark:border-border-dark dark:bg-content-dark dark:text-text-dark dark:hover:bg-background-dark">2</button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-light bg-content-light text-sm text-text-light hover:bg-background-light dark:border-border-dark dark:bg-content-dark dark:text-text-dark dark:hover:bg-background-dark">3</button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-light bg-content-light text-sm text-text-light hover:bg-background-light dark:border-border-dark dark:bg-content-dark dark:text-text-dark dark:hover:bg-background-dark">
                            <span className="material-symbols-outlined text-base">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CompanyManagement;

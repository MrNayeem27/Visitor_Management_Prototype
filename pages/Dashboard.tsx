import React from 'react';
import { Link } from 'react-router-dom';

const liveVisitors = [
    { 
        name: 'Priya Raman', 
        arrived: '10:15 AM (12m ago)', 
        purpose: 'Project Kickoff', 
        photo: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp' 
    },
    { 
        name: 'Arun Kumar', 
        arrived: '10:25 AM (2m ago)', 
        purpose: 'Interview', 
        photo: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp' 
    }
];

const appointments = [
    { name: 'Lakshmi Devi', time: '11:00 AM - Sales Demo', status: 'Arrived' },
    { name: 'Vignesh Ram', time: '1:30 PM - Team Sync', status: 'Scheduled' },
    { name: 'Meera Suresh', time: '2:00 PM - Vendor Meeting', status: 'Scheduled' },
    { name: 'Karthik Raj', time: '9:00 AM - Maintenance', status: 'Completed' },
];

const visitorLog = [
    { 
        id: 1, 
        name: 'Sandhya Ramesh', 
        date: 'Oct 25, 2023', 
        host: 'Anitha Murthy', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp' 
    },
    { 
        id: 2, 
        name: 'Divya Shankar', 
        date: 'Oct 25, 2023', 
        host: 'Anitha Murthy', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp' 
    },
    { 
        id: 3, 
        name: 'Suresh Kumar', 
        date: 'Oct 24, 2023', 
        host: 'Anitha Murthy', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp' 
    },
];

const feedback = [
  { 
      name: 'Harini Chandran', 
      company: 'Innovate Inc.', 
      date: 'Oct 26, 10:30 AM', 
      rating: 5, 
      comment: 'The check-in process was incredibly smooth and the staff were very welcoming. A great first impression!', 
      status: 'none'
  },
  { 
      name: 'Rohini Selvam', 
      company: 'Solutions Co.', 
      date: 'Oct 26, 09:15 AM', 
      rating: 4, 
      comment: 'It was a bit difficult to find parking, maybe some better signage would help. Other than that, my experience...', 
      status: 'contact-requested'
  },
  { 
      name: 'Anonymous', 
      company: 'FutureTech', 
      date: 'Oct 25, 04:45 PM', 
      rating: 5, 
      comment: 'Perfect visit.', 
      status: 'reviewed'
  }
];

const statusClasses = {
    Arrived: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300',
    Scheduled: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300',
    Completed: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
};



const Dashboard: React.FC = () => {
    return (
        <>
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-slate-800 px-10 py-3 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10">
                <div className="flex flex-1 items-center gap-4 text-gray-900 dark:text-white">
                    <p className="text-gray-900 dark:text-white text-2xl font-black leading-tight tracking-[-0.033em] min-w-72">Dashboard</p>
                </div>
                <div className="flex flex-1 justify-end gap-4 items-center">
                    <Link to="/admin/pre-registration" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
                        <span className="material-symbols-outlined text-base">add</span>
                        <span className="truncate">New Appointment</span>
                    </Link>
                    <button type="button" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 border border-gray-200 dark:border-slate-700">
                        <span className="material-symbols-outlined text-gray-800 dark:text-gray-300">notifications</span>
                    </button>
                </div>
            </header>
            <div className="p-8">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
                    {/* Live Visitors */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-2">Live Visitors</h2>
                        <div className="flex flex-col gap-4">
                            {liveVisitors.map(visitor => (
                                <div key={visitor.name} className="flex items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-slate-900/40 p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-none border border-transparent dark:border-slate-800">
                                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{visitor.arrived}</p>
                                            <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">{visitor.name}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Purpose: {visitor.purpose}</p>
                                        </div>
                                        <button type="button" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-primary/20 text-primary text-sm font-medium leading-normal w-fit gap-2">
                                            <span className="truncate">Notify Host</span>
                                            <span className="material-symbols-outlined text-base">send</span>
                                        </button>
                                    </div>
                                    <div className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex-1" style={{ backgroundImage: `url("${visitor.photo}")`}}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Today's Appointments */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-2">Today's Appointments</h2>
                        <div className="flex flex-col gap-4">
                            {appointments.map(appt => (
                                <div key={appt.name} className="flex flex-col gap-3 rounded-lg bg-white dark:bg-slate-900/40 p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-none border border-transparent dark:border-slate-800">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-900 dark:text-white font-semibold">{appt.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{appt.time}</p>
                                        </div>
                                        <div className={`px-2.5 py-0.5 ${statusClasses[appt.status]} rounded-full text-xs font-medium`}>{appt.status}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Visitor Log */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-2">Visitor Log</h2>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            <input className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary" placeholder="Search by name or company..." type="text"/>
                        </div>
                        <div className="flex flex-col gap-4">
                             {visitorLog.map(visitor => (
                                <Link to={`/admin/visitor-details/${visitor.id}`} key={visitor.name} className="flex items-center justify-between rounded-lg bg-white dark:bg-slate-900/40 p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-none border border-transparent dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/80">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: `url("${visitor.avatar}")`}}></div>
                                        <div>
                                            <p className="text-gray-900 dark:text-white font-semibold">{visitor.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Visited: {visitor.date}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Host: {visitor.host}</p>
                                </Link>
                             ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900/40 p-6 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-none border border-transparent dark:border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Visitor Feedback</h2>
                        <button type="button" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 text-sm font-medium leading-normal tracking-[0.015em] gap-2 border border-gray-300 dark:border-slate-700">
                            <span className="material-symbols-outlined text-base">download</span>
                            <span>Export Feedback</span>
                        </button>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Average Rating</p>
                            <div className="flex items-center gap-2">
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">4.8</p>
                                <div className="flex items-center text-yellow-500">
                                    <span className="material-symbols-outlined text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-base" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Based on 125 reviews</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Feedback</p>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">125</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">+12 this week</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Contact Requested</p>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">3 pending</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {feedback.map(item => (
                             <div key={item.name} className={`border ${item.status === 'reviewed' ? 'bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800/50' : 'border-gray-200 dark:border-slate-800'} rounded-lg p-4`}>
                                <div className="grid grid-cols-12 gap-4 items-start">
                                    <div className="col-span-12 md:col-span-6">
                                        <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.company} <span className="mx-1">·</span> {item.date}</p>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 flex flex-col md:items-end">
                                        <div className="flex items-center text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: `'FILL' ${i < item.rating ? 1 : 0}`}}>star</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-span-12 mt-2">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.comment} {item.status === 'contact-requested' && <a className="text-primary font-medium hover:underline" href="#">more</a>}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;
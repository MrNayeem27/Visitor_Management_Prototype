import React from 'react';

const logData = [
    { 
        timestamp: 'Oct 26, 2023, 10:45 AM', 
        user: 'Anitha Murthy', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        action: 'User account created', 
        entity: 'User: John Doe' 
    },
    { 
        timestamp: 'Oct 26, 2023, 09:12 AM', 
        user: 'Kamal Raj', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        action: 'Company details updated', 
        entity: 'Company: Innovate Inc.' 
    },
    { 
        timestamp: 'Oct 25, 2023, 04:30 PM', 
        user: 'Sudha Balaji', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        action: 'Visitor check-in failed', 
        entity: 'Visitor ID: 12345' 
    },
    { 
        timestamp: 'Oct 25, 2023, 02:05 PM', 
        user: 'Anitha Murthy', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        action: 'Security settings modified', 
        entity: 'System Settings' 
    },
    { 
        timestamp: 'Oct 24, 2023, 11:50 AM', 
        user: 'Kamal Raj', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        action: 'Visitor record deleted', 
        entity: 'Visitor ID: 12344' 
    },
    { 
        timestamp: 'Oct 24, 2023, 08:22 AM', 
        user: 'Sudha Balaji', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        action: 'User logged in', 
        entity: '-' 
    },
];



const AuditLog: React.FC = () => {
  return (
    <div className="flex-1 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-tight">Audit Log</h1>
            <p className="text-[#617589] dark:text-slate-400 text-base font-normal leading-normal">View a chronological log of all user activities within the dashboard.</p>
          </div>
          <button type="button" className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#111418] dark:text-white/90 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-50 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined !text-[20px]">download</span>
            <span className="truncate">Export to CSV</span>
          </button>
        </div>

        <div className="p-4 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-4">
                    <label className="flex flex-col w-full">
                        <span className="text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Search Log</span>
                        <div className="relative flex w-full flex-1 items-stretch">
                            <div className="text-[#617589] dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2">
                                <span className="material-symbols-outlined !text-[20px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary/50 h-10 placeholder:text-[#617589] dark:placeholder:text-slate-400 pl-10 pr-3 text-sm font-normal leading-normal" placeholder="Search by user, action, or entity ID..." />
                        </div>
                    </label>
                </div>
            </div>
        </div>
        
        <div className="overflow-x-auto bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-800">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium">Timestamp</th>
                    <th scope="col" className="px-6 py-3 font-medium">User</th>
                    <th scope="col" className="px-6 py-3 font-medium">Action</th>
                    <th scope="col" className="px-6 py-3 font-medium">Affected Entity</th>
                </tr>
            </thead>
            <tbody>
                {logData.map((log, index) => (
                     <tr key={index} className="bg-white dark:bg-background-dark border-b dark:border-slate-800">
                        <td className="px-6 py-4 text-slate-900 dark:text-white/90">{log.timestamp}</td>
                        <td className="px-6 py-4 text-slate-900 dark:text-white/90">
                            <div className="flex items-center gap-2">
                                <img className="size-6 rounded-full" src={log.avatar} alt={`Avatar of ${log.user}`} />
                                <span>{log.user}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4">{log.action}</td>
                        <td className="px-6 py-4">{log.entity}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between mt-6">
            <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                Showing <span className="font-semibold text-slate-900 dark:text-white">1-6</span> of <span className="font-semibold text-slate-900 dark:text-white">6</span>
            </span>
             <div className="inline-flex items-center -space-x-px text-sm h-8">
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-slate-500 bg-white dark:bg-background-dark border border-slate-300 dark:border-slate-700 rounded-s-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white">Previous</a>
                <a href="#" className="flex items-center justify-center px-3 h-8 text-primary border border-primary/50 bg-primary/10 dark:bg-primary/20 dark:border-primary/50 dark:text-primary hover:bg-primary/20 hover:text-primary dark:hover:bg-primary/30 dark:hover:text-primary">1</a>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-500 bg-white dark:bg-background-dark border border-slate-300 dark:border-slate-700 rounded-e-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white">Next</a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AuditLog;

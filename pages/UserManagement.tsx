import React from 'react';
import { Link } from 'react-router-dom';

const users = [
    { 
        name: 'Anitha Murthy', 
        email: 'anitha.murthy@company.com', 
        role: 'Admin', 
        lastActive: '2 days ago', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        roleColor: 'green' 
    },
    { 
        name: 'Kamal Raj', 
        email: 'kamal.raj@company.com', 
        role: 'Manager', 
        lastActive: '5 hours ago', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        roleColor: 'purple' 
    },
    { 
        name: 'Ramesh Kumar', 
        email: 'ramesh.kumar@company.com', 
        role: 'Receptionist', 
        lastActive: '1 day ago', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        roleColor: 'blue' 
    },
    { 
        name: 'Sudha Balaji', 
        email: 'sudha.balaji@company.com', 
        role: 'Receptionist', 
        lastActive: '1 week ago', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        roleColor: 'blue' 
    },
    { 
        name: 'Murugan Santhosh', 
        email: 'murugan.santhosh@company.com', 
        role: 'Manager', 
        lastActive: 'Just now', 
        avatar: 'https://cutiedp.com/wp-content/uploads/2025/08/no-dp-image-1.webp', 
        roleColor: 'purple' 
    },
];


const roleClasses: { [key: string]: string } = {
    green: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300',
    blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300',
};

const UserManagement: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col p-6 lg:p-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-muted-light dark:text-muted-dark mt-1">Manage all user accounts in your organization.</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 p-4 bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative w-full max-w-xs">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">search</span>
                            <input className="w-full h-10 pl-10 pr-4 rounded border border-border-light dark:border-border-dark bg-transparent focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Search by name or email..." type="text"/>
                        </div>
                        <button type="button" className="flex items-center justify-center h-10 px-4 gap-2 text-sm font-medium rounded border border-border-light dark:border-border-dark bg-transparent hover:bg-primary/10">
                            <span className="material-symbols-outlined">filter_list</span>
                            <span>Filter</span>
                        </button>
                    </div>
                    <Link to="/admin/add-user" className="flex w-full sm:w-auto items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                        <span className="truncate">Add New User</span>
                    </Link>
                </div>
                <div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="border-b border-border-light dark:border-border-dark">
                                    <th className="p-4 w-12 text-left">
                                        <input className="h-5 w-5 rounded border-2 border-border-light dark:border-border-dark bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary/50 focus:ring-offset-0" type="checkbox"/>
                                    </th>
                                    <th className="p-4 text-left text-sm font-medium text-muted-light dark:text-muted-dark uppercase tracking-wider">User Name</th>
                                    <th className="p-4 text-left text-sm font-medium text-muted-light dark:text-muted-dark uppercase tracking-wider">Email Address</th>
                                    <th className="p-4 text-left text-sm font-medium text-muted-light dark:text-muted-dark uppercase tracking-wider">Assigned Role</th>
                                    <th className="p-4 text-left text-sm font-medium text-muted-light dark:text-muted-dark uppercase tracking-wider">Last Active</th>
                                    <th className="p-4 text-left text-sm font-medium text-muted-light dark:text-muted-dark uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                {users.map(user => (
                                    <tr key={user.email}>
                                        <td className="p-4">
                                            <input className="h-5 w-5 rounded border-2 border-border-light dark:border-border-dark bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary/50 focus:ring-offset-0" type="checkbox"/>
                                        </td>
                                        <td className="p-4 text-sm font-medium">
                                            <div className="flex items-center gap-3">
                                                <img className="size-8 rounded-full" alt={`Avatar of ${user.name}`} src={user.avatar}/>
                                                <span>{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-muted-light dark:text-muted-dark">{user.email}</td>
                                        <td className="p-4 text-sm">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${roleClasses[user.roleColor]}`}>{user.role}</span>
                                        </td>
                                        <td className="p-4 text-sm text-muted-light dark:text-muted-dark">{user.lastActive}</td>
                                        <td className="p-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <button type="button" className="p-2 rounded-full hover:bg-primary/10 text-muted-light dark:text-muted-dark hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">edit</span>
                                                </button>
                                                <button type="button" className="p-2 rounded-full hover:bg-red-500/10 text-muted-light dark:text-muted-dark hover:text-red-500 transition-colors">
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4 px-2 py-2">
                    <p className="text-sm text-muted-light dark:text-muted-dark">Showing <span className="font-semibold">1-5</span> of <span className="font-semibold">50</span> users</p>
                    <nav className="flex items-center gap-1">
                        <a className="flex size-9 items-center justify-center rounded hover:bg-primary/10 transition-colors" href="#">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </a>
                        <a className="text-sm font-bold flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary" href="#">1</a>
                        <a className="text-sm flex size-9 items-center justify-center rounded-full hover:bg-primary/10 transition-colors" href="#">2</a>
                        <a className="text-sm flex size-9 items-center justify-center rounded-full hover:bg-primary/10 transition-colors" href="#">3</a>
                        <span className="text-sm flex size-9 items-center justify-center rounded-full">...</span>
                        <a className="text-sm flex size-9 items-center justify-center rounded-full hover:bg-primary/10 transition-colors" href="#">10</a>
                        <a className="flex size-9 items-center justify-center rounded hover:bg-primary/10 transition-colors" href="#">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;

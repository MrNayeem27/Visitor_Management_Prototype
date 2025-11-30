import React from 'react';
import { Link } from 'react-router-dom';

const CheckInConfirmation: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4 sm:p-6 md:p-8">
            <div className="absolute inset-0 z-0">
                <div className="h-full w-full bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANsNdGz4-MMwSQncCHQ_tM0ZTkESaOiOau0N2c4UIfafcEXbRNoZWozqM7WSYyxIoqckwnRg6gvVcRhohxTq76D9tnNFX2QFxMxQZ49_X83pCTSsNxThva2NS-92cZY7kKnke1E1TFhYb7hOJHUUjchM-khZRfYe04_dihwcJQWh3hM-6-LXchbzKHVmBxrZ4FLBS-Tqq7NWVhoqhXbB5pS_ULV6ud6dnRd-948UWRa3_jqpGvYvfxQ44i6L82TDVEB-vPbbyH-A')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80"></div>
            </div>
            <main className="z-10 flex w-full max-w-lg flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>task_alt</span>
                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-black leading-tight tracking-tighter text-[#111418] dark:text-white md:text-5xl">Thank You for Checking In!</h1>
                        <p className="mx-auto max-w-md text-base font-normal leading-normal text-[#617589] dark:text-gray-400 md:text-lg">Your request has been sent to <strong className="font-semibold text-[#111418] dark:text-gray-200">[Company Name]</strong>. Please take a seat, and someone will be with you shortly.</p>
                    </div>
                </div>
                <div className="my-10 h-px w-full max-w-xs bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex w-full flex-col items-center justify-center">
                    <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">Your host is with:</p>
                    <div className="h-16 w-40">
                        <img className="h-full w-full object-contain" alt="Placeholder for the company logo, a light gray rectangle with white text." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQm1lj6YssdjNr24BTax2HJ8UgdIFclst_xAj6i3ksi9fHJIsP33QlUsSbFAWVAkVLrkU8C32E2TsOLjasX1bFEXU2OHnMek7hIBdCyMwHjfjp6Zy3DZ6uXdVQsbowXQ8KizeAdBCtWt8pT0yivfFNbkT5y_vh3JdQeCvf3MZDAtYEP2YUDG9GhaxFd9-Lxg610lmDRKEmpZ_VIOWO199G97-M_fbRR7__XeUyPZC8NFcVncROXcYMLZL7JBkneDBIX2TshPPAAw"/>
                    </div>
                </div>
                <footer className="mt-12 w-full">
                    <p className="text-sm font-normal leading-normal text-[#617589] dark:text-gray-500">
                        <Link to="/welcome" className="underline transition-colors hover:text-primary dark:hover:text-primary/80">Checked in by mistake? Start over.</Link>
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default CheckInConfirmation;
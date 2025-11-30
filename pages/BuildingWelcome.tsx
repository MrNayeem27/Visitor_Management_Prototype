
import React from 'react';
import { Link } from 'react-router-dom';

const companies = [
  {
    name: 'Synergy',
    logo: './public/assets/img/logo/synergy_logo.jfif',
    alt: 'Innovatech Solutions company logo, an abstract blue gear shape'
  },
  {
    name: 'InventivoGT',
    logo: './public/assets/img/logo/inventivogt.png',
    alt: 'Quantum Creatives company logo, a stylized "Q" with vibrant colors'
  },
  {
    name: 'AM Consultancy',
    logo: './public/assets/img/logo/AM_Consultancy.jpg',
    alt: 'Nexus Partners company logo, an interconnected geometric shape'
  }
];

const BuildingWelcome: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-700 px-4 sm:px-10 py-3">
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                {/* <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div> */}
                <img src="./assets/img/logo/cadd_centre_logo.svg" alt="" />
              </div>
              <div className="flex flex-1 justify-end">
                <div className="flex items-center">
                  <Link className="text-gray-900 dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" to="#">Need Help?</Link>
                </div>
              </div>
            </header>
            <main className="flex flex-col flex-1 items-center justify-center p-4 py-16 text-center">
              <div className="flex flex-col gap-3 max-w-2xl mb-12">
                <p className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Welcome. Who are you here to see?</p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Please select the company you are visiting to check in.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {companies.map((company) => (
                  <Link key={company.name} to="/visit-type" className="group flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-full h-40 bg-center bg-no-repeat bg-contain rounded-lg" data-alt={company.alt} style={{ backgroundImage: `url("${company.logo}")` }}></div>
                    <div className="text-center">
                      <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal">{company.name}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-1">Select to check in</p>
                    </div>
                  </Link>
                ))}
              </div>
            </main>
            <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-gray-200 dark:border-gray-800 mt-auto">
              {/* <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <Link className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal hover:text-primary dark:hover:text-primary transition-colors" to="#">Privacy Policy</Link>
              </div> */}
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">© 2025 <a href="http://www.versalflow.com/">VersalFlow</a>. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingWelcome;

import { useState } from 'react';
import Work from '../components/Work';
import About from '../components/About';
import Head from 'next/head';

const Home = () => {
  const [theme, setTheme] = useState("gray");

  return (
    <div>
      <Head>
        <title>Lewis Winthrop - Portfolio</title>
      </Head>
      <div className="bg-gray-600 bg-emerald-600 bg-orange-600 bg-indigo-600 bg-blue-600 bg-red-600 text-gray-600 text-emerald-600 text-orange-600 text-indigo-600 text-blue-600 text-red-600 border-gray-600 border-emerald-600 border-orange-600 border-indigo-600 border-blue-600 border-red-600" />
      <div className={`bg-${theme}-600 relative min-h-screen`}>
        <div className="grid grid-rows-1 xl:grid-cols-2 min-h-screen">
          <div className="relative xl:h-screen flex flex-col justify-center items-center pt-20 pb-16 xl:pt-16 px-6 sm:px-10">
            <div className="xl:fixed flex flex-col justify-center items-center">
              <p className="text-5xl sm:text-6xl text-white font-bold">Hi, I'm Lewis!</p>
              <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 pt-7 pb-8 items-center">
                  <a href="https://github.com/lewwiss" target="_blank" className="flex flex-row items-center">
                      <svg className="h-7 w-7 mr-3" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#fff">
                          <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path>
                      </svg>
                      <p className="text-sm text-white">github.com/lewwiss</p>
                  </a>
                  <a href="mailto:lewiswinthrop27@gmail.com" className="flex flex-row items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" viewBox="0 0 20 20" fill="#fff">
                          <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-white">lewiswinthrop27@gmail.com</p>
                  </a>
              </div>
              <div className="flex flex-row space-x-4">
                {/*
                <button className="text-sm text-neutral-500 pl-4 pr-5 py-3.5 font-semibold hover:scale-95 duration-200 flex flex-row rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="#737373">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CV
                </button>
                */}
                <a href="mailto:lewiswinthrop27@gmail.com" className={`text-sm bg-white text-${theme}-600 px-5 py-4 font-semibold hover:scale-95 duration-200`}>
                    Get in contact
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 sm:p-16 flex flex-col space-y-12 border-t-2 xl:border-t-0 xl:border-l-2">
            <About theme={theme} />
            <Work theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
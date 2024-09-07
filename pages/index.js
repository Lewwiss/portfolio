import Head from 'next/head';
import GitHubActivity from '../components/GitHubActivity/index';
import { useEffect, useState } from 'react';

const links = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/lewwisscom'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Lewwiss'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lewiswinthrop/'
  },
  {
    name: 'GitLab',
    href: 'https://gitlab.com/Lewwiss'
  },
];

const color = '#0EA5E9';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
    <g>
        <path d="M23.0395 9.58044L12.9162 3.2065C12.1811 2.74363 11.246 3.37382 11.399 4.22896L13.5628 16.3149C13.7269 17.2317 14.9449 17.446 15.4121 16.6405L17.4858 13.0654C17.6201 12.834 17.8415 12.666 18.1005 12.599L22.7571 11.3948C23.6059 11.1753 23.7814 10.0476 23.0395 9.58044Z" fill="${color}"/>
        <path d="M23.7702 8.4199L13.6469 2.04595C11.9036 0.948277 9.68603 2.44273 10.0491 4.47064L12.2128 16.5566C12.602 18.7306 15.4903 19.239 16.5984 17.3286L18.5942 13.8879L23.1004 12.7226C25.1133 12.2021 25.5296 9.52765 23.7702 8.4199ZM18.4438 13.9268L18.4444 13.9266C18.4442 13.9267 18.444 13.9267 18.4438 13.9268L18.3509 13.5672L18.4438 13.9268Z" stroke="white" stroke-width="2.74286"/>
    </g>
</svg>`;

const base64SVG = `data:image/svg+xml;base64,${btoa(svg)}`;

const Home = () => {

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body {
        cursor: url('${base64SVG}') 0 0, auto;
      }
    `;
    document.body.appendChild(styleElement);
  }, []);

  return (
    <div className='flex flex-col h-full'>

      <Head>
        <title>Lewwiss - Software Engineer</title>
      </Head>

    {/* Announcement */}
    <div className='w-full bg-primary text-white text-center py-2.5 px-8'>
      <p className='font-bold'>
        🎉 Welcome to my new portfolio! <a href="#" className='underline underline-offset-2'>View the source code</a>
      </p>
    </div>

    <div className='flex flex-grow w-full px-6 py-10'>
      <div className='w-full h-full mx-auto max-w-7xl flex flex-col gap-10'>

        {/* Header */}
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-8'>
          {/* GitHub Activity Widget */}
          <a href="https://github.com/Lewwiss" className='bg-slate-900 p-4 rounded-2xl rotate-90 lg:rotate-0 ml-6 lg:ml-0 order-2 lg:order-1'>
            <GitHubActivity username="Lewwiss" period="monthly" color="#0EA5E9" defaultColor="#1e293b" gap={4} />
          </a>
          {/* Profile Information */}
          <div className='flex flex-col gap-6 lg:gap-4 order-1 lg:order-2'>
            <div className='flex flex-row flex-wrap gap-6 items-center'>
              <img src="https://avatars.githubusercontent.com/u/46723732" className='size-14 rounded-full' draggable={false} />
              <h1 className='font-bold text-white text-2xl'>Lewwiss</h1>
              <div className='flex flex-row gap-2.5 items-center text-slate-500'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                </svg>
                <p className='font-semibold text-lg'>software engineer <a href="https://shockbyte.com/" className='text-white'>@shockbyte</a></p>
              </div>
            </div>
            {/* Social Media */}
            <div className='flex flex-row flex-wrap gap-y-1.5 gap-x-3.5 font-semibold text-lg text-slate-500'>
              {links.map((link, index) => (
                <div key={index} className='flex flex-row gap-3.5'>
                  { index !== 0 ? <span>/</span> : null }
                  <a href={link.href}>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

          {/* Project 1 */}
          {/* <a href='#' className='p-7 rounded-3xl bg-slate-900 pt-16 lg:pt-24'>
              <div className='flex flex-col gap-1.5'>
                <h2 className='font-bold text-xl text-white'>webhook-forms</h2>
                <p className='font-semibold text-lg text-slate-500 truncate'>easily create widget forms that connect with your all of your favourite apps.</p>
              </div>
          </a> */}

          <a href="#" className='relative px-7 pb-7 rounded-3xl bg-slate-900 overflow-hidden'>
              <div className='relative h-16 lg:h-24 overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent z-10' />
              </div>
              <div className='relative flex flex-col gap-1.5'>
                <h2 className='font-bold text-xl text-white'>webhook-forms</h2>
                <p className='font-semibold text-lg text-slate-500 truncate'>easily create widget forms that connect with your all of your favourite apps.</p>
              </div>
          </a>

          {/* Project 2 */}
          <a href="https://github.com/Lewwiss/storybook-outlines" className='relative pb-7 rounded-3xl bg-slate-900 border-[3px] border-primary overflow-hidden'>
              <div className='relative h-16 lg:h-24 overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent z-10' />
                <img src="https://i.imgur.com/8jRATob.png" className='absolute top-0 left-0 w-full opacity-40' draggable={false} />
              </div>
              <div className='relative flex flex-col gap-1.5 px-7'>
                <h2 className='font-bold text-xl text-white'>storybook-outlines</h2>
                <p className='font-semibold text-lg text-slate-500 truncate'>storybook outlines in an easy to use chrome extension.</p>
              </div>
          </a>

          {/* Project 2 */}
          <div className='p-7 rounded-3xl bg-slate-900 pt-16 lg:pt-24'>
              <div className='flex flex-col gap-1.5'>
                <h2 className='font-bold text-xl text-white'>portfolio</h2>
                <p className='font-semibold text-lg text-slate-500 truncate'>this portfolio design in a reusable react / next template.</p>
              </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='flex flex-grow items-end'>
          <p className='font-semibold text-lg text-slate-500'>© {new Date().getFullYear()} Lewwiss. All Rights Reserved.</p>
        </div>



        </div>
      </div>
    </div>
  );
};

export default Home;

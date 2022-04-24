import Head from 'next/head';
import Landing from '../components/Landing';
import Work from '../components/Work';

const Home = () => {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Lewis Winthrop</title>
      </Head>
      <div className="relative lg:py-6">
        <div className="mx-auto container grid grid-rows-1 2xl:grid-cols-2 min-h-screen">
          <div className="relative xl:h-screen flex flex-col items-center justify-center">
            <Landing />
          </div>
          <div className="p-10 sm:p-16 flex flex-col space-y-12 pr-80">
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
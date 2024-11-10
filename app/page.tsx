import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import { config } from "@/config";

const Home = () => {
  return (
    <div>
      <Announcement />
      <div className="px-6 pb-10">
        <div className="mx-auto max-w-7xl h-full flex flex-col">
          <Profile />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {
              config.projects?.map((project, index) => <Project key={index} {...project} />)
            }
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;

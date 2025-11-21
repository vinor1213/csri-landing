import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';

import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';

import Joinus from './components/Joinus/index';



import { FaWhatsapp } from 'react-icons/fa';
import CSRIFocusPage from './components/Focus Area/index';


export default function Home() {

  return (
    <main>
      <Banner />
      <Aboutus />
      <CSRIFocusPage />
      <Featured />
      <Dedicated />
      <div
        className="relative bg-[url('/images/home/our-mission.webp')]
             bg-cover bg-center bg-no-repeat bg-fixed w-full"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content stays above overlay */}
        <div className="relative z-10">
          <Digital />
        </div>
      </div>



      <Ourteam />

 
      <FAQ />
      <Testimonials />

      <Joinus />

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: "#25D366" }} // WhatsApp green
        className="fixed bottom-5 right-5 z-50 text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:brightness-90 transition-all"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

    </main>
  )
}

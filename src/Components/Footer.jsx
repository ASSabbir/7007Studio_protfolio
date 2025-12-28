import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black lg:h-screen">
      <div className="text-[12vw] lg:text-[12vw] md:text-[16vw] sm:text-[18vw] text-center text-white 
        lg:px-20 md:px-10 px-4 leading-none pt-[10vw] font-font2">

        {/* Brand */}
        <div className="relative w-fit mb-10 leading-40 mx-auto lg:mx-0">
          <h1>7007</h1>
          <h1 className="relative 
            lg:left-70 
            md:left-40 
            sm:left-0 
            text-red-500">
            Studio
          </h1>
        </div>

        <footer className="footer footer-horizontal footer-center border-t border-white/20 
          p-10 text-white">

          {/* Main Sections */}
          <nav
            className="grid 
            lg:grid-cols-4 
            md:grid-cols-2 
            sm:grid-cols-1 
            w-full gap-10 text-sm"
          >

            {/* About */}
            <div className="space-y-2">
              <h3 className="text-red-500 font-semibold">About Us</h3>
              <p className="text-gray-400">
                7007 Studio is a creative design & digital production studio
                focused on premium visuals, branding, and motion experiences.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="text-red-500 font-semibold">Contact</h3>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail size={16} /> hello@7007studio.com
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={16} /> +880 1XXXXXXXXX
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} /> Bangladesh
              </p>
            </div>

            {/* Jobs */}
            <div className="space-y-2">
              <h3 className="text-red-500 font-semibold">Jobs</h3>
              <p className="text-gray-400">
                We’re always looking for creative minds.
              </p>
              <a href="#" className="text-white hover:text-red-500 transition">
                careers@7007studio.com
              </a>
            </div>

            {/* Press Kit */}
            <div className="space-y-2">
              <h3 className="text-red-500 font-semibold">Press Kit</h3>
              <p className="text-gray-400">
                Download our logo, brand assets & company info.
              </p>
              <a href="#" className="text-white hover:text-red-500 transition">
                Download Press Kit
              </a>
            </div>

          </nav>

          {/* Social Icons */}
          <nav className="mt-8">
            <div className="grid grid-flow-col gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="hover:text-red-500 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="hover:text-red-500 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="hover:text-red-500 transition" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="hover:text-red-500 transition" />
              </a>
            </div>
          </nav>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 
            text-gray-400 mt-8 text-sm">
            <p>
              © {new Date().getFullYear()} — All rights reserved by{" "}
              <span className="text-red-500">7007 Studio</span>
            </p>
            <span className="hidden md:inline text-red-500">|</span>
            <p>
              Developed by{" "}
              <span className="text-white">Techof Solution Ltd.</span>
            </p>
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
